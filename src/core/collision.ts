import { localToWorld, type Vec2 } from './coordinates';
import {
  COMPOUND_HALF_D,
  COMPOUND_HALF_W,
  CURB_POLYLINES,
  OBSTACLE_COLLIDERS,
  POLE_COLLIDERS,
  type BoxObstacle,
  type CurbPolyline,
  type PoleCollider,
} from './courseLayout';
import type { VehicleSpec, VehicleState, WheelCorner } from '../types';

export interface WheelCollisionInfo {
  corner: WheelCorner;
  x: number;
  z: number;
  minCurbDist: number;
  proximity: number; // 0 (far) .. 1 (touching)
  curbTouch: boolean; // < 0.08m from curb
  curbMount: boolean; // wheel crosses curb line or overlaps curb body
  pushX: number;
  pushZ: number;
}

export interface CollisionReport {
  wheels: Record<WheelCorner, WheelCollisionInfo>;
  anyCurbTouch: boolean;
  anyCurbMount: boolean;
  poleHit: PoleCollider | null;
  obstacleHit: BoxObstacle | null;
  pushX: number;
  pushZ: number;
}

const CURB_HALF_THICKNESS = 0.09; // 18cm wide curb
const CURB_TOUCH_MARGIN = 0.08;
const CURB_PROXIMITY_RANGE = 0.45;

/**
 * Computes exact world XZ positions for all 4 wheel centers of the vehicle.
 */
export function computeWheelPositions(
  state: Pick<VehicleState, 'x' | 'z' | 'heading'>,
  spec: VehicleSpec
): Record<WheelCorner, Vec2> {
  const halfTrack = spec.trackWidth / 2;
  const frontZ = -spec.wheelbase / 2;
  const rearZ = spec.wheelbase / 2;
  return {
    FL: localToWorld(state.x, state.z, state.heading, -halfTrack, frontZ),
    FR: localToWorld(state.x, state.z, state.heading, halfTrack, frontZ),
    RL: localToWorld(state.x, state.z, state.heading, -halfTrack, rearZ),
    RR: localToWorld(state.x, state.z, state.heading, halfTrack, rearZ),
  };
}

/**
 * Computes closest point on segment AB to point P and squared distance.
 */
function closestPointOnSegment(
  px: number,
  pz: number,
  ax: number,
  az: number,
  bx: number,
  bz: number
): { cx: number; cz: number; dist: number } {
  const abx = bx - ax;
  const abz = bz - az;
  const lenSq = abx * abx + abz * abz;
  let t = 0;
  if (lenSq > 1e-9) {
    t = ((px - ax) * abx + (pz - az) * abz) / lenSq;
    if (t < 0) t = 0;
    else if (t > 1) t = 1;
  }
  const cx = ax + abx * t;
  const cz = az + abz * t;
  return { cx, cz, dist: Math.hypot(px - cx, pz - cz) };
}

/**
 * Evaluates wheel-to-curb distances, pole circle-vs-OBB collisions, and building/obstacle boxes.
 */
export function checkCourseCollisions(
  state: Pick<VehicleState, 'x' | 'z' | 'heading'>,
  spec: VehicleSpec,
  curbs: CurbPolyline[] = CURB_POLYLINES,
  poles: PoleCollider[] = POLE_COLLIDERS,
  obstacles: BoxObstacle[] = OBSTACLE_COLLIDERS
): CollisionReport {
  const wheelPos = computeWheelPositions(state, spec);
  const wheelHalfWidth = spec.kind === 'motorcycle' ? 0.07 : 0.11;

  const corners: WheelCorner[] = ['FL', 'FR', 'RL', 'RR'];
  const wheels = {} as Record<WheelCorner, WheelCollisionInfo>;

  let anyCurbTouch = false;
  let anyCurbMount = false;
  let totalPushX = 0;
  let totalPushZ = 0;

  for (const corner of corners) {
    const wp = wheelPos[corner];
    let minDist = Infinity;
    let nearestCx = wp.x;
    let nearestCz = wp.z;

    for (const curb of curbs) {
      const pts = curb.points;
      for (let i = 0; i < pts.length - 1; i++) {
        const res = closestPointOnSegment(wp.x, wp.z, pts[i].x, pts[i].z, pts[i + 1].x, pts[i + 1].z);
        if (res.dist < minDist) {
          minDist = res.dist;
          nearestCx = res.cx;
          nearestCz = res.cz;
        }
      }
    }

    const edgeClearance = Math.max(0, minDist - CURB_HALF_THICKNESS - wheelHalfWidth);
    const mountThreshold = CURB_HALF_THICKNESS + wheelHalfWidth * 0.8;
    const curbMount = minDist < mountThreshold;
    const curbTouch = !curbMount && edgeClearance < CURB_TOUCH_MARGIN;
    const proximity = Math.max(0, Math.min(1, 1 - edgeClearance / CURB_PROXIMITY_RANGE));

    let pushX = 0;
    let pushZ = 0;
    if (curbMount && minDist > 1e-5) {
      const overlap = mountThreshold - minDist;
      const nx = (wp.x - nearestCx) / minDist;
      const nz = (wp.z - nearestCz) / minDist;
      pushX = nx * overlap;
      pushZ = nz * overlap;
      totalPushX += pushX * 0.5;
      totalPushZ += pushZ * 0.5;
    }

    if (curbTouch) anyCurbTouch = true;
    if (curbMount) anyCurbMount = true;

    wheels[corner] = {
      corner,
      x: wp.x,
      z: wp.z,
      minCurbDist: edgeClearance,
      proximity,
      curbTouch,
      curbMount,
      pushX,
      pushZ,
    };
  }

  // Vehicle OBB test in vehicle-local space
  const cos = Math.cos(-state.heading);
  const sin = Math.sin(-state.heading);
  const halfCarW = spec.width / 2;
  const halfCarL = spec.length / 2;

  const worldToLocal = (wx: number, wz: number): Vec2 => {
    const dx = wx - state.x;
    const dz = wz - state.z;
    return {
      x: dx * cos + dz * sin,
      z: -dx * sin + dz * cos,
    };
  };

  let poleHit: PoleCollider | null = null;
  for (const pole of poles) {
    const lp = worldToLocal(pole.x, pole.z);
    const clampedX = Math.max(-halfCarW, Math.min(halfCarW, lp.x));
    const clampedZ = Math.max(-halfCarL, Math.min(halfCarL, lp.z));
    const dist = Math.hypot(lp.x - clampedX, lp.z - clampedZ);
    if (dist < pole.radius) {
      poleHit = pole;
      break;
    }
  }

  // Box obstacles vs vehicle OBB (sample vehicle perimeter + center)
  let obstacleHit: BoxObstacle | null = null;
  const sampleLocalOffsets: [number, number][] = [
    [0, 0],
    [-halfCarW, -halfCarL],
    [halfCarW, -halfCarL],
    [-halfCarW, halfCarL],
    [halfCarW, halfCarL],
    [0, -halfCarL],
    [0, halfCarL],
  ];
  for (const obs of obstacles) {
    for (const [lx, lz] of sampleLocalOffsets) {
      const wp = localToWorld(state.x, state.z, state.heading, lx, lz);
      if (
        Math.abs(wp.x - obs.x) < obs.halfW &&
        Math.abs(wp.z - obs.z) < obs.halfL
      ) {
        obstacleHit = obs;
        // Gentle separation away from obstacle center
        const dx = state.x - obs.x;
        const dz = state.z - obs.z;
        const penX = obs.halfW + halfCarW - Math.abs(dx);
        const penZ = obs.halfL + halfCarL - Math.abs(dz);
        if (penX < penZ) {
          totalPushX += Math.sign(dx || 1) * Math.min(0.4, penX * 0.5);
        } else {
          totalPushZ += Math.sign(dz || 1) * Math.min(0.4, penZ * 0.5);
        }
        break;
      }
    }
    if (obstacleHit) break;
  }

  // Compound perimeter clamp (prevent leaving 180m x 120m enclosure)
  const margin = 1.6;
  if (state.x < -COMPOUND_HALF_W + margin) totalPushX += -COMPOUND_HALF_W + margin - state.x;
  if (state.x > COMPOUND_HALF_W - margin) totalPushX += COMPOUND_HALF_W - margin - state.x;
  if (state.z < -COMPOUND_HALF_D + margin) totalPushZ += -COMPOUND_HALF_D + margin - state.z;
  if (state.z > COMPOUND_HALF_D - margin) totalPushZ += COMPOUND_HALF_D - margin - state.z;

  return {
    wheels,
    anyCurbTouch,
    anyCurbMount,
    poleHit,
    obstacleHit,
    pushX: totalPushX,
    pushZ: totalPushZ,
  };
}

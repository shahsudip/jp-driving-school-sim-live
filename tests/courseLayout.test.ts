import { describe, expect, it } from 'vitest';
import { checkCourseCollisions } from '../src/core/collision';
import { forwardVector, normalizeAngle } from '../src/core/coordinates';
import {
  CRANK_CENTERLINE,
  S_CURVE_CENTERLINE,
  getTerrainElevation,
  type Point2D,
} from '../src/core/courseLayout';
import { createVehicleState, stepVehiclePhysics } from '../src/core/vehiclePhysics';
import { SEDAN_SPEC, type InputState } from '../src/types';

function drivePathRollout(
  startX: number,
  startZ: number,
  startHeading: number,
  waypoints: Point2D[],
  lookaheadDist: number,
  maxSteps: number,
  targetSpeed = 2.6
) {
  const state = createVehicleState(startX, startZ, startHeading, 'sedan', 'AT');
  let wpIdx = 0;
  let simTime = 0;
  let curbMounts = 0;
  let poleHits = 0;

  for (let i = 0; i < maxSteps; i++) {
    simTime += 1 / 60;
    while (
      wpIdx < waypoints.length - 1 &&
      Math.hypot(waypoints[wpIdx].x - state.x, waypoints[wpIdx].z - state.z) < lookaheadDist
    ) {
      wpIdx++;
    }
    const target = waypoints[wpIdx];
    const distToEnd = Math.hypot(
      waypoints[waypoints.length - 1].x - state.x,
      waypoints[waypoints.length - 1].z - state.z
    );
    if (wpIdx === waypoints.length - 1 && distToEnd < 1.2) {
      break;
    }

    const dx = target.x - state.x;
    const dz = target.z - state.z;
    const fwd = forwardVector(state.heading);
    // Cross product of forward with desired vector: + means target is to the LEFT (CCW)
    // Remember in XZ (Y up): fwd x toTarget along Y = fwd.z * dx - fwd.x * dz? Let's verify:
    // fwd = (0, -1), toTarget = (-1, 0) [West = LEFT]:
    // fwd.z * dx - fwd.x * dz = (-1)*(-1) - 0 = +1 (LEFT)!
    const len = Math.hypot(dx, dz) || 1;
    const ux = dx / len;
    const uz = dz / len;
    const crossLeft = fwd.z * ux - fwd.x * uz;
    const dot = fwd.x * ux + fwd.z * uz;
    const angleErr = Math.atan2(crossLeft, dot);

    // Exact bicycle pure-pursuit curvature steering
    const curvature = (2 * Math.sin(angleErr)) / Math.max(2.0, len);
    const targetSteerRad = Math.atan(SEDAN_SPEC.wheelbase * curvature);
    const desiredSteerNorm = Math.max(-1, Math.min(1, targetSteerRad / SEDAN_SPEC.maxSteerRad));
    const throttle = state.speedMs < targetSpeed ? 0.35 : 0;
    const input: InputState = {
      throttle,
      brake: 0,
      steerLeft: 0,
      steerRight: 0,
      analogSteerTarget: desiredSteerNorm,
      clutch: 0,
      lookLeft: false,
      lookRight: false,
    };

    stepVehiclePhysics(
      state,
      input,
      SEDAN_SPEC,
      1 / 60,
      { steeringSensitivity: 1.4, autoCenterSteering: true, simTimeSec: simTime }
    );

    const col = checkCourseCollisions(state, SEDAN_SPEC);
    if (col.anyCurbMount) curbMounts++;
    if (col.poleHit) poleHits++;
  }

  return { state, curbMounts, poleHits, wpIdx };
}

describe('courseLayout & collisions', () => {
  it('computes accurate hill elevation and analytical slope', () => {
    expect(getTerrainElevation(0, 0)).toEqual({ y: 0, slopeX: 0, slopeZ: 0 });

    const crest = getTerrainElevation(38, -24);
    expect(crest.y).toBeCloseTo(2.0, 5);
    expect(crest.slopeX).toBeCloseTo(0, 5);

    const midUp = getTerrainElevation(26, -24);
    expect(midUp.y).toBeCloseTo(1.0, 4);
    expect(midUp.slopeX).toBeGreaterThan(0.15);

    const midDown = getTerrainElevation(50, -24);
    expect(midDown.y).toBeCloseTo(1.0, 4);
    expect(midDown.slopeX).toBeLessThan(-0.15);
  });

  it('detects zero curb hits when centered and triggers curbMount when pushed off centerline', () => {
    const centered = createVehicleState(-46.0, -6.0, 0, 'sedan', 'AT');
    const colOk = checkCourseCollisions(centered, SEDAN_SPEC);
    expect(colOk.anyCurbMount).toBe(false);
    expect(colOk.anyCurbTouch).toBe(false);

    // Move laterally West (-X) by 0.90m inside the 3.6m corridor -> left tires mount -47.80 curb
    const mounted = createVehicleState(-47.10, -6.0, 0, 'sedan', 'AT');
    const colMount = checkCourseCollisions(mounted, SEDAN_SPEC);
    expect(colMount.anyCurbMount).toBe(true);
    expect(colMount.wheels.FL.curbMount).toBe(true);
    expect(colMount.wheels.RL.curbMount).toBe(true);
    expect(colMount.wheels.FR.curbMount).toBe(false);
  });

  it('allows the Sedan to physically navigate the entire S-Curve without hitting curbs or poles', () => {
    const res = drivePathRollout(-46.0, -3.5, 0, S_CURVE_CENTERLINE, 3.2, 2400);
    expect(res.wpIdx).toBe(S_CURVE_CENTERLINE.length - 1);
    expect(res.curbMounts).toBe(0);
    expect(res.poleHits).toBe(0);
  });

  it('allows the Sedan to physically navigate the 90-degree Crank without hitting curbs or poles', () => {
    // Realistic Japanese Kyoshujo Crank technique: hug outside, delay turn until mirror clears corner
    const state = createVehicleState(-48.0, 3.5, Math.PI, 'sedan', 'AT');
    let simTime = 0;
    let curbMounts = 0;
    let poleHits = 0;

    // 1. Hugging slightly left/west (-48.7) heading South (+Z) until z = 17.5
    // 2. Full left turn (heading PI -> -PI/2) until facing East
    // 3. Straight East hugging north curb slightly (z = 17.3) until x = -34.8
    // 4. Full right turn (heading -PI/2 -> -PI) until facing South
    // 5. Straight South to z = 40
    for (let i = 0; i < 2400; i++) {
      simTime += 1 / 60;
      let steer = 0;
      const fwd = forwardVector(state.heading);
      if (state.z < 16.2 && fwd.z > 0.8 && state.x < -43.0) {
        // Phase 1: hold x = -48.85 heading South (PI)
        const err = -48.85 - state.x;
        const headingErr = normalizeAngle(Math.PI - state.heading);
        steer = Math.max(-1, Math.min(1, err * 0.5 + headingErr * 1.8));
      } else if (state.x < -41.0 && fwd.x < 0.985) {
        // Phase 2: Full left turn toward East (-PI/2)
        steer = 1.0;
      } else if (state.x < -35.8 && fwd.x > 0.7) {
        // Phase 3: Drive East along z = 17.2
        const err = 17.2 - state.z;
        const headingErr = normalizeAngle(-Math.PI / 2 - state.heading);
        steer = Math.max(-1, Math.min(1, -err * 0.5 + headingErr * 1.8));
      } else if (fwd.z < 0.985) {
        // Phase 4: Full right turn from East (-PI/2) to South (-PI)
        steer = -1.0;
      } else {
        // Phase 5: Straight South along x = -34.0
        const err = -34.0 - state.x;
        const headingErr = normalizeAngle(Math.PI - state.heading);
        steer = Math.max(-1, Math.min(1, err * 0.5 + headingErr * 1.8));
      }

      stepVehiclePhysics(
        state,
        {
          throttle: state.speedMs < 2.1 ? 0.35 : 0,
          brake: 0,
          steerLeft: 0,
          steerRight: 0,
          analogSteerTarget: steer,
          clutch: 0,
          lookLeft: false,
          lookRight: false,
        },
        SEDAN_SPEC,
        1 / 60,
        { steeringSensitivity: 1.8, autoCenterSteering: true, simTimeSec: simTime }
      );

      const col = checkCourseCollisions(state, SEDAN_SPEC);
      if (col.anyCurbMount) curbMounts++;
      if (col.poleHit) poleHits++;
      if (state.z > 39.5) break;
    }

    expect(state.z).toBeGreaterThan(39.0);
    expect(curbMounts).toBe(0);
    expect(poleHits).toBe(0);
  });
});

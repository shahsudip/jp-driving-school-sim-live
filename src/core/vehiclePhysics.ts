import { forwardVector, normalizeAngle } from './coordinates';
import { getTerrainElevation, type TerrainSample } from './courseLayout';
import {
  getVehicleSpec,
  type Gear,
  type InputState,
  type TransmissionMode,
  type VehicleKind,
  type VehicleSpec,
  type VehicleState,
} from '../types';

export interface PhysicsOptions {
  steeringSensitivity: number; // 0.5 .. 2.0
  autoCenterSteering: boolean;
  simTimeSec: number;
}

export function createVehicleState(
  x: number,
  z: number,
  heading: number,
  kind: VehicleKind = 'sedan',
  transmission: TransmissionMode = 'AT'
): VehicleState {
  const spec = getVehicleSpec(kind);
  const fwd = forwardVector(heading);
  const terrain = getTerrainElevation(x, z);
  const initialGear: Gear = transmission === 'AT' ? 'D' : '1';

  return {
    x,
    y: terrain.y,
    z,
    rearAxleX: x - fwd.x * (spec.wheelbase * 0.5),
    rearAxleZ: z - fwd.z * (spec.wheelbase * 0.5),
    heading: normalizeAngle(heading),
    pitch: 0,
    roll: 0,
    speedMs: 0,
    steerAngleRad: 0,
    steeringWheelRad: 0,
    wheelRotationRad: 0,
    transmission,
    gear: initialGear,
    rpm: 800,
    stalled: false,
    handbrake: false,
    blinker: 'off',
    blinkerTimer: 0,
    blinkerOn: false,
    braking: false,
    reversing: false,
    lookAngleRad: 0,
    lookedLeftTimestamp: -999,
    lookedRightTimestamp: -999,
    odometerM: 0,
  };
}

const MT_GEAR_MAX_SPEED: Record<string, number> = {
  '1': 6.0,   // ~21 km/h
  '2': 10.5,  // ~38 km/h
  '3': 14.5,  // ~52 km/h
  '4': 18.0,  // ~65 km/h
  '5': 22.0,
  'R': 5.5,
};

const MT_GEAR_TORQUE: Record<string, number> = {
  '1': 1.35,
  '2': 1.05,
  '3': 0.85,
  '4': 0.70,
  '5': 0.55,
  'R': 1.15,
};

export function shiftGearStep(state: VehicleState, delta: 1 | -1): void {
  const atOrder: Gear[] = ['P', 'R', 'N', 'D'];
  const mtOrder: Gear[] = ['R', 'N', '1', '2', '3', '4', '5'];
  const list = state.transmission === 'AT' ? atOrder : mtOrder;
  const idx = list.indexOf(state.gear);
  const currentIdx = idx === -1 ? (state.transmission === 'AT' ? 3 : 2) : idx;
  const nextIdx = Math.max(0, Math.min(list.length - 1, currentIdx + delta));
  const target = list[nextIdx];

  // Prevent shifting straight into P or opposing R/D at high speed
  if (Math.abs(state.speedMs) > 1.2 && (target === 'P' || (target === 'R' && state.speedMs > 1.2))) {
    return;
  }
  state.gear = target;
}

export function stepVehiclePhysics(
  state: VehicleState,
  input: InputState,
  spec: VehicleSpec,
  dt: number,
  options: PhysicsOptions,
  terrainFn: (x: number, z: number) => TerrainSample = getTerrainElevation
): void {
  if (dt <= 0) return;

  // 1. Steering input & caster auto-centering
  const steerSpeed = 2.5 * options.steeringSensitivity;
  if (input.analogSteerTarget !== null) {
    const targetRad = Math.max(-1, Math.min(1, input.analogSteerTarget)) * spec.maxSteerRad;
    const diff = targetRad - state.steerAngleRad;
    const maxStep = steerSpeed * 1.8 * dt;
    state.steerAngleRad += Math.abs(diff) <= maxStep ? diff : Math.sign(diff) * maxStep;
  } else {
    const netSteer = input.steerLeft - input.steerRight;
    if (Math.abs(netSteer) > 0.01) {
      state.steerAngleRad += netSteer * steerSpeed * dt;
    } else if (options.autoCenterSteering) {
      const speedFactor = Math.min(1, Math.abs(state.speedMs) / 4.0);
      const centerRate = (0.65 + 2.4 * speedFactor) * dt;
      if (Math.abs(state.steerAngleRad) <= centerRate) {
        state.steerAngleRad = 0;
      } else {
        state.steerAngleRad -= Math.sign(state.steerAngleRad) * centerRate;
      }
    }
  }
  state.steerAngleRad = Math.max(-spec.maxSteerRad, Math.min(spec.maxSteerRad, state.steerAngleRad));
  state.steeringWheelRad = (state.steerAngleRad / spec.maxSteerRad) * spec.steeringWheelMaxRad;

  // 2. Blinker timer (1.5 Hz Japanese relay flash)
  if (state.blinker !== 'off') {
    state.blinkerTimer += dt;
    state.blinkerOn = Math.floor(state.blinkerTimer * 2.6) % 2 === 0;
  } else {
    state.blinkerTimer = 0;
    state.blinkerOn = false;
  }

  // 3. Driver head safety look glance (Z = left +, X = right -)
  let targetLook = 0;
  if (input.lookLeft && !input.lookRight) targetLook = (68 * Math.PI) / 180;
  else if (input.lookRight && !input.lookLeft) targetLook = (-68 * Math.PI) / 180;
  const lookStep = 8.5 * dt;
  const lookDiff = targetLook - state.lookAngleRad;
  state.lookAngleRad += Math.abs(lookDiff) <= lookStep ? lookDiff : Math.sign(lookDiff) * lookStep;

  if (state.lookAngleRad > (32 * Math.PI) / 180) {
    state.lookedLeftTimestamp = options.simTimeSec;
  }
  if (state.lookAngleRad < (-32 * Math.PI) / 180) {
    state.lookedRightTimestamp = options.simTimeSec;
  }

  // 4. Terrain slope along vehicle heading
  const fwd = forwardVector(state.heading);
  const terrain = terrainFn(state.x, state.z);
  const slopeAlongHeading = terrain.slopeX * fwd.x + terrain.slopeZ * fwd.z;
  const slopeAngle = Math.atan(slopeAlongHeading);
  const gravityAccel = -9.81 * Math.sin(slopeAngle);

  // 5. Drivetrain force (AT vs MT)
  let driveAccel = 0;
  const clutchEngaged = state.transmission === 'AT' ? 1 : 1 - Math.max(0, Math.min(1, input.clutch));
  const engineAlive = !state.stalled;

  if (state.transmission === 'AT') {
    if (state.gear === 'D') {
      if (input.throttle > 0.02 && state.speedMs < spec.maxSpeedMs) {
        driveAccel = input.throttle * spec.maxAccelMs2;
      } else if (input.brake < 0.05 && !state.handbrake && state.speedMs < 1.65) {
        // Authentic AT Creep (クリープ現象)
        driveAccel = 1.25 * (1 - Math.max(0, state.speedMs) / 1.65);
      }
      state.rpm = 820 + Math.abs(state.speedMs) * 210 + input.throttle * 1400;
    } else if (state.gear === 'R') {
      if (input.throttle > 0.02 && state.speedMs > -spec.maxReverseMs) {
        driveAccel = -input.throttle * (spec.maxAccelMs2 * 0.72);
      } else if (input.brake < 0.05 && !state.handbrake && state.speedMs > -1.4) {
        driveAccel = -0.82 * (1 - Math.max(0, -state.speedMs) / 1.4);
      }
      state.rpm = 820 + Math.abs(state.speedMs) * 260 + input.throttle * 1200;
    } else {
      // P or N
      state.rpm = 780 + input.throttle * 2600;
    }
  } else {
    // MT mode
    if (engineAlive && state.gear !== 'N' && state.gear !== 'P') {
      const maxGSpeed = MT_GEAR_MAX_SPEED[state.gear] ?? 10.0;
      const torqueMul = MT_GEAR_TORQUE[state.gear] ?? 1.0;
      const isRev = state.gear === 'R';
      const dir = isRev ? -1 : 1;

      const wheelRpm = (Math.abs(state.speedMs) / maxGSpeed) * 3800;
      const freeRpm = 800 + input.throttle * 3400;
      state.rpm = wheelRpm * clutchEngaged + freeRpm * (1 - clutchEngaged);

      // Authentic MT stall check when clutch released at near-zero speed with insufficient throttle
      if (
        clutchEngaged > 0.75 &&
        Math.abs(state.speedMs) < 0.55 &&
        input.throttle < 0.14 &&
        (input.brake > 0.1 || state.handbrake || Math.abs(state.speedMs) < 0.15)
      ) {
        state.stalled = true;
        state.rpm = 0;
      } else if (clutchEngaged > 0.15) {
        const directionalSpeed = state.speedMs * dir;
        if (directionalSpeed < maxGSpeed) {
          const throttlePower = Math.max(0.18, input.throttle);
          driveAccel = dir * throttlePower * spec.maxAccelMs2 * torqueMul * clutchEngaged;
        }
      }
    } else {
      state.rpm = engineAlive ? 780 + input.throttle * 2800 : 0;
    }
  }

  // 6. Brakes, Park pawl, rolling resistance & hill hold
  const parkHold = state.transmission === 'AT' && state.gear === 'P';
  const handbrakeDecel = state.handbrake ? 6.8 : 0;
  const footBrakeDecel = input.brake * spec.brakeDecelMs2;
  const totalBrakeDecel = footBrakeDecel + handbrakeDecel + (parkHold ? 14.0 : 0);

  state.braking = input.brake > 0.05;
  state.reversing = state.gear === 'R';

  // Rolling resistance + gentle drag
  const dragAccel = -state.speedMs * (0.14 + 0.015 * Math.abs(state.speedMs));
  const netPreBrake = driveAccel + gravityAccel + dragAccel;

  // Apply net force & brake clamping so vehicle comes cleanly to 0 without oscillation
  let nextSpeed = state.speedMs + netPreBrake * dt;

  if (totalBrakeDecel > 0.01) {
    const maxHoldAccel = totalBrakeDecel;
    if (Math.abs(state.speedMs) < 0.08 && Math.abs(driveAccel + gravityAccel) <= maxHoldAccel) {
      nextSpeed = 0;
    } else {
      const brakeSign = nextSpeed !== 0 ? Math.sign(nextSpeed) : Math.sign(driveAccel + gravityAccel);
      const afterBrake = nextSpeed - brakeSign * totalBrakeDecel * dt;
      if (Math.sign(afterBrake) !== Math.sign(nextSpeed) && Math.abs(driveAccel + gravityAccel) <= maxHoldAccel) {
        nextSpeed = 0;
      } else {
        nextSpeed = afterBrake;
      }
    }
  } else if (Math.abs(nextSpeed) < 0.02 && Math.abs(driveAccel) < 0.1 && Math.abs(gravityAccel) < 0.1) {
    nextSpeed = 0;
  }

  nextSpeed = Math.max(-spec.maxReverseMs, Math.min(spec.maxSpeedMs, nextSpeed));
  state.speedMs = nextSpeed;

  // 7. Rear-axle Ackermann bicycle kinematics
  const ds = state.speedMs * dt;
  const dHeading = (ds / spec.wheelbase) * Math.tan(state.steerAngleRad);
  const midHeading = state.heading + dHeading * 0.5;
  const midFwd = forwardVector(midHeading);

  state.rearAxleX += midFwd.x * ds;
  state.rearAxleZ += midFwd.z * ds;
  state.heading = normalizeAngle(state.heading + dHeading);

  const newFwd = forwardVector(state.heading);
  state.x = state.rearAxleX + newFwd.x * (spec.wheelbase * 0.5);
  state.z = state.rearAxleZ + newFwd.z * (spec.wheelbase * 0.5);

  const finalTerrain = terrainFn(state.x, state.z);
  state.y = finalTerrain.y;
  state.odometerM += Math.abs(ds);
  state.wheelRotationRad += ds / spec.wheelRadius;

  // 8. Smooth chassis pitch & roll (motorcycle leans into turns)
  const finalSlopeAlong = finalTerrain.slopeX * newFwd.x + finalTerrain.slopeZ * newFwd.z;
  const targetPitch = Math.atan(finalSlopeAlong) - Math.max(-0.04, Math.min(0.04, (footBrakeDecel - driveAccel) * 0.004));
  state.pitch += (targetPitch - state.pitch) * Math.min(1, 12 * dt);

  const yawRate = dt > 0 ? dHeading / dt : 0;
  const latAccel = state.speedMs * yawRate;
  const targetRoll =
    spec.kind === 'motorcycle'
      ? Math.max(-0.48, Math.min(0.48, -latAccel * 0.065))
      : Math.max(-0.06, Math.min(0.06, latAccel * 0.008));
  state.roll += (targetRoll - state.roll) * Math.min(1, 10 * dt);
}

/**
 * Syncs rearAxleX/Z when externally moving/pushing vehicle center (e.g., curb collision push).
 */
export function syncRearAxleFromCenter(state: VehicleState, spec: VehicleSpec): void {
  const fwd = forwardVector(state.heading);
  state.rearAxleX = state.x - fwd.x * (spec.wheelbase * 0.5);
  state.rearAxleZ = state.z - fwd.z * (spec.wheelbase * 0.5);
}

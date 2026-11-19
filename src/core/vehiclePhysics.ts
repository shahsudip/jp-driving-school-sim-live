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
    preDrive: {
      doorLocked: false,
      seatAdjusted: false,
      mirrorsAdjusted: false,
      seatbeltFastened: false,
      brakeAndStartDone: false,
      handbrakeReleased: false,
      rightSignalOn: false,
      fivePointLookDone: false,
      completedSteps: [],
    },
    mirrorTouchTimer: 0,
    steerHoldSec: 0,
    throttleHoldSec: 0,
    brakeHoldSec: 0,
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

  // 1. Progressive time-elapsed Steering, Throttle & Brake ramp + Speed-sensitive steering limit
  // Short key tap (< 0.15s) = gentle micro-adjustment; holding key ramps up smoothly over ~0.65s!
  const netSteer = input.steerLeft - input.steerRight;
  if (Math.abs(netSteer) > 0.01) {
    // If reversing steering direction, reset hold ramp so counter-steering starts controlled
    if (state.steerAngleRad * netSteer < -0.05 && state.steerHoldSec > 0.25) {
      state.steerHoldSec = 0.2;
    }
    state.steerHoldSec = Math.min(1.2, (state.steerHoldSec || 0) + dt);
  } else {
    state.steerHoldSec = 0;
  }

  if (input.throttle > 0.02) {
    state.throttleHoldSec = Math.min(1.5, (state.throttleHoldSec || 0) + dt);
  } else {
    state.throttleHoldSec = Math.max(0, (state.throttleHoldSec || 0) - dt * 3.0);
  }

  if (input.brake > 0.02) {
    state.brakeHoldSec = Math.min(1.2, (state.brakeHoldSec || 0) + dt);
  } else {
    state.brakeHoldSec = Math.max(0, (state.brakeHoldSec || 0) - dt * 4.0);
  }

  // Time-lapse ramp factors:
  // - Steering: starts at 32% speed on initial tap, smoothly ramps to 100% after 0.65s hold
  const steerTimeRamp = 0.32 + 0.68 * Math.pow(Math.min(1, state.steerHoldSec / 0.65), 1.35);
  // - Speed-sensitive dampening: slower steering rotation when driving fast (> 25 km/h) so car never twitches on straights
  const absSpd = Math.abs(state.speedMs);
  const speedSteerDamp = 1 / (1 + Math.max(0, absSpd - 3.5) * 0.11);
  const baseSteerSpeed = 1.95 * options.steeringSensitivity;

  if (input.analogSteerTarget !== null) {
    const targetRad = Math.max(-1, Math.min(1, input.analogSteerTarget)) * spec.maxSteerRad;
    const diff = targetRad - state.steerAngleRad;
    const maxStep = baseSteerSpeed * 1.5 * dt;
    state.steerAngleRad += Math.abs(diff) <= maxStep ? diff : Math.sign(diff) * maxStep;
  } else {
    if (Math.abs(netSteer) > 0.01) {
      const effectiveSteerRate = baseSteerSpeed * steerTimeRamp * speedSteerDamp;
      state.steerAngleRad += netSteer * effectiveSteerRate * dt;
    } else if (options.autoCenterSteering) {
      const speedFactor = Math.min(1, absSpd / 4.0);
      const centerRate = (0.55 + 1.85 * speedFactor) * dt;
      if (Math.abs(state.steerAngleRad) <= centerRate) {
        state.steerAngleRad = 0;
      } else {
        state.steerAngleRad -= Math.sign(state.steerAngleRad) * centerRate;
      }
    }
  }
  // At high speed, cap maximum front-wheel lock angle so car doesn't spin out on a key press, while allowing full 43° lock at low Crank/S-Curve speeds!
  const speedMaxSteerCap =
    absSpd <= 4.5 ? spec.maxSteerRad : spec.maxSteerRad / (1 + (absSpd - 4.5) * 0.12);
  state.steerAngleRad = Math.max(-speedMaxSteerCap, Math.min(speedMaxSteerCap, state.steerAngleRad));
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

  if (state.mirrorTouchTimer > 0) {
    state.mirrorTouchTimer = Math.max(0, state.mirrorTouchTimer - dt);
  }

  // 4. Terrain slope along vehicle heading
  const fwd = forwardVector(state.heading);
  const terrain = terrainFn(state.x, state.z);
  const slopeAlongHeading = terrain.slopeX * fwd.x + terrain.slopeZ * fwd.z;
  const slopeAngle = Math.atan(slopeAlongHeading);
  const gravityAccel = -9.81 * Math.sin(slopeAngle);

  // 5. Drivetrain force (AT vs MT) with progressive time-elapsed pedal depression ramp
  // Light tap on W/Up = 35% gentle throttle; holding W/Up smoothly depresses pedal to 100% over 0.55s
  const throttleTimeRamp = 0.35 + 0.65 * Math.min(1, (state.throttleHoldSec || 0) / 0.55);
  const effectiveThrottle = input.throttle * throttleTimeRamp;
  // Light tap on S/Down = 38% gentle pumping brake; holding S/Down builds to 100% full braking over 0.45s
  const brakeTimeRamp = 0.38 + 0.62 * Math.min(1, (state.brakeHoldSec || 0) / 0.45);
  const effectiveBrake = input.brake * brakeTimeRamp;

  let driveAccel = 0;
  const clutchEngaged = state.transmission === 'AT' ? 1 : 1 - Math.max(0, Math.min(1, input.clutch));
  const engineAlive = !state.stalled;

  if (state.transmission === 'AT') {
    if (state.gear === 'D') {
      if (effectiveThrottle > 0.02 && state.speedMs < spec.maxSpeedMs) {
        driveAccel = effectiveThrottle * spec.maxAccelMs2;
      } else if (effectiveBrake < 0.05 && !state.handbrake && state.speedMs < 1.65) {
        // Authentic AT Creep (クリープ現象)
        driveAccel = 1.25 * (1 - Math.max(0, state.speedMs) / 1.65);
      }
      state.rpm = 820 + Math.abs(state.speedMs) * 210 + effectiveThrottle * 1400;
    } else if (state.gear === 'R') {
      if (effectiveThrottle > 0.02 && state.speedMs > -spec.maxReverseMs) {
        driveAccel = -effectiveThrottle * (spec.maxAccelMs2 * 0.65);
      } else if (effectiveBrake < 0.05 && !state.handbrake && state.speedMs > -1.35) {
        driveAccel = -0.82 * (1 - Math.max(0, -state.speedMs) / 1.35);
      }
      state.rpm = 820 + Math.abs(state.speedMs) * 260 + effectiveThrottle * 1200;
    } else {
      // P or N
      state.rpm = 780 + effectiveThrottle * 2600;
    }
  } else {
    // MT mode
    if (engineAlive && state.gear !== 'N' && state.gear !== 'P') {
      const maxGSpeed = MT_GEAR_MAX_SPEED[state.gear] ?? 10.0;
      const torqueMul = MT_GEAR_TORQUE[state.gear] ?? 1.0;
      const isRev = state.gear === 'R';
      const dir = isRev ? -1 : 1;

      const wheelRpm = (Math.abs(state.speedMs) / maxGSpeed) * 3800;
      const freeRpm = 800 + effectiveThrottle * 3400;
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
          const throttlePower = Math.max(0.18, effectiveThrottle);
          driveAccel = dir * throttlePower * spec.maxAccelMs2 * torqueMul * clutchEngaged;
        }
      }
    } else {
      state.rpm = engineAlive ? 780 + effectiveThrottle * 2800 : 0;
    }
  }

  // 6. Brakes, Park pawl, rolling resistance & hill hold
  const parkHold = state.transmission === 'AT' && state.gear === 'P';
  const handbrakeDecel = state.handbrake ? 6.8 : 0;
  const footBrakeDecel = effectiveBrake * spec.brakeDecelMs2;
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

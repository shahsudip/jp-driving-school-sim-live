import { describe, expect, it } from 'vitest';
import { getTerrainElevation } from '../src/core/courseLayout';
import { createVehicleState, stepVehiclePhysics } from '../src/core/vehiclePhysics';
import { SEDAN_SPEC, type InputState } from '../src/types';

function neutralInput(overrides: Partial<InputState> = {}): InputState {
  return {
    throttle: 0,
    brake: 0,
    steerLeft: 0,
    steerRight: 0,
    analogSteerTarget: null,
    clutch: 0,
    lookLeft: false,
    lookRight: false,
    ...overrides,
  };
}

describe('vehiclePhysics', () => {
  it('moves North (-Z) when heading is 0 and turns CCW (left) on steerLeft', () => {
    const state = createVehicleState(0, 0, 0, 'sedan', 'AT');
    const opts = { steeringSensitivity: 1, autoCenterSteering: false, simTimeSec: 0 };

    // Accelerate straight ahead for 1 second
    for (let i = 0; i < 60; i++) {
      opts.simTimeSec += 1 / 60;
      stepVehiclePhysics(state, neutralInput({ throttle: 0.8 }), SEDAN_SPEC, 1 / 60, opts);
    }
    expect(state.z).toBeLessThan(-0.5);
    expect(Math.abs(state.x)).toBeLessThan(0.01);

    // Steer left for 1 second -> heading increases (+) and vehicle moves West (-X)
    for (let i = 0; i < 60; i++) {
      opts.simTimeSec += 1 / 60;
      stepVehiclePhysics(state, neutralInput({ throttle: 0.5, steerLeft: 1 }), SEDAN_SPEC, 1 / 60, opts);
    }
    expect(state.heading).toBeGreaterThan(0.2);
    expect(state.x).toBeLessThan(-0.2);
  });

  it('swings nose right when steering left while reversing', () => {
    const state = createVehicleState(0, 0, 0, 'sedan', 'AT');
    state.gear = 'R';
    const opts = { steeringSensitivity: 1, autoCenterSteering: false, simTimeSec: 0 };

    for (let i = 0; i < 90; i++) {
      opts.simTimeSec += 1 / 60;
      stepVehiclePhysics(state, neutralInput({ throttle: 0.5, steerLeft: 1 }), SEDAN_SPEC, 1 / 60, opts);
    }
    expect(state.speedMs).toBeLessThan(-0.5);
    expect(state.z).toBeGreaterThan(0.3); // Moved South (+Z) in reverse
    expect(state.heading).toBeLessThan(-0.15); // Nose rotated clockwise (right)
  });

  it('produces authentic AT creep in D with zero throttle and no brake', () => {
    const state = createVehicleState(0, 0, 0, 'sedan', 'AT');
    const opts = { steeringSensitivity: 1, autoCenterSteering: true, simTimeSec: 0 };

    for (let i = 0; i < 180; i++) {
      opts.simTimeSec += 1 / 60;
      stepVehiclePhysics(state, neutralInput(), SEDAN_SPEC, 1 / 60, opts);
    }
    expect(state.speedMs).toBeGreaterThan(1.2);
    expect(state.speedMs).toBeLessThan(1.8);
  });

  it('stalls MT engine when clutch is dropped at standstill with no throttle', () => {
    const state = createVehicleState(0, 0, 0, 'sedan', 'MT');
    state.gear = '1';
    const opts = { steeringSensitivity: 1, autoCenterSteering: true, simTimeSec: 0.1 };

    stepVehiclePhysics(state, neutralInput({ clutch: 0, throttle: 0 }), SEDAN_SPEC, 1 / 60, opts);
    expect(state.stalled).toBe(true);
    expect(state.rpm).toBe(0);
  });

  it('rolls backward on the Hill Start ramp without brake, and holds still with handbrake', () => {
    // Facing East (-Math.PI / 2) at x = 26, z = -24 (steepest up-ramp)
    const state = createVehicleState(26, -24, -Math.PI / 2, 'sedan', 'AT');
    state.gear = 'N';
    state.handbrake = true;
    const opts = { steeringSensitivity: 1, autoCenterSteering: true, simTimeSec: 0 };

    for (let i = 0; i < 60; i++) {
      opts.simTimeSec += 1 / 60;
      stepVehiclePhysics(state, neutralInput(), SEDAN_SPEC, 1 / 60, opts, getTerrainElevation);
    }
    expect(Math.abs(state.speedMs)).toBeLessThan(0.01);
    expect(state.x).toBeCloseTo(26, 2);

    // Release handbrake -> gravity rolls vehicle backward (-X)
    state.handbrake = false;
    for (let i = 0; i < 90; i++) {
      opts.simTimeSec += 1 / 60;
      stepVehiclePhysics(state, neutralInput(), SEDAN_SPEC, 1 / 60, opts, getTerrainElevation);
    }
    expect(state.speedMs).toBeLessThan(-1.0);
    expect(state.x).toBeLessThan(25.3);
  });
});

import { describe, expect, it } from 'vitest';
import { checkCourseCollisions } from '../src/core/collision';
import { ExaminerEngine } from '../src/core/examiner';
import { TrafficSignalController } from '../src/core/trafficSignals';
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

describe('ExaminerEngine', () => {
  it('deducts & fails when crossing a 止まれ stop sign without stopping, and passes when stopped with L/R look', () => {
    const signals = new TrafficSignalController();

    // Case 1: Blow through stop-west-t at (-67.5, 1.75) facing West (Math.PI / 2)
    const state1 = createVehicleState(-63.0, 1.75, Math.PI / 2, 'sedan', 'AT');
    state1.speedMs = 5.0;
    const ex1 = new ExaminerEngine();
    ex1.reset('exam', state1);

    for (let i = 0; i < 120; i++) {
      stepVehiclePhysics(state1, neutralInput({ throttle: 0.5 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: i / 60,
      });
      ex1.update(1 / 60, state1, checkCourseCollisions(state1, SEDAN_SPEC), signals);
    }
    expect(ex1.getViolations().some((v) => v.code === 'STOP_SIGN_VIOLATION')).toBe(true);
    expect(ex1.isTerminated()).toBe(true);

    // Case 2: Come to 0 stop at (-66.0, 1.75), glance Left (Z) and Right (X), then cross
    const state2 = createVehicleState(-65.5, 1.75, Math.PI / 2, 'sedan', 'AT');
    const ex2 = new ExaminerEngine();
    ex2.reset('exam', state2);
    let t = 0;

    // Hold brake + look left
    for (let i = 0; i < 20; i++) {
      t += 1 / 60;
      stepVehiclePhysics(state2, neutralInput({ brake: 1, lookLeft: true }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: t,
      });
      ex2.update(1 / 60, state2, checkCourseCollisions(state2, SEDAN_SPEC), signals);
    }
    // Hold brake + look right
    for (let i = 0; i < 25; i++) {
      t += 1 / 60;
      stepVehiclePhysics(state2, neutralInput({ brake: 1, lookRight: true }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: t,
      });
      ex2.update(1 / 60, state2, checkCourseCollisions(state2, SEDAN_SPEC), signals);
    }
    // Now pull across line (-67.5)
    for (let i = 0; i < 150; i++) {
      t += 1 / 60;
      stepVehiclePhysics(state2, neutralInput({ throttle: 0.45 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: t,
      });
      ex2.update(1 / 60, state2, checkCourseCollisions(state2, SEDAN_SPEC), signals);
    }
    expect(ex2.getViolations()).toHaveLength(0);
    expect(ex2.getScore()).toBe(100);
  });

  it('records RED_LIGHT when crossing central signal on Red and passes on Green', () => {
    const signals = new TrafficSignalController();
    // signalTime = 20s => NS is RED, EW is GREEN
    signals.setTimes(20, 0);

    const stateRed = createVehicleState(-1.75, 11.0, 0, 'sedan', 'AT');
    stateRed.speedMs = 6.0;
    const exRed = new ExaminerEngine();
    exRed.reset('exam', stateRed);

    for (let i = 0; i < 80; i++) {
      stepVehiclePhysics(stateRed, neutralInput({ throttle: 0.4 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: i / 60,
      });
      exRed.update(1 / 60, stateRed, checkCourseCollisions(stateRed, SEDAN_SPEC), signals);
    }
    expect(exRed.getViolations().some((v) => v.code === 'RED_LIGHT')).toBe(true);
    expect(exRed.isTerminated()).toBe(true);

    // signalTime = 2s => NS is GREEN
    signals.setTimes(2, 0);
    const stateGreen = createVehicleState(-1.75, 11.0, 0, 'sedan', 'AT');
    stateGreen.speedMs = 6.0;
    const exGreen = new ExaminerEngine();
    exGreen.reset('exam', stateGreen);

    for (let i = 0; i < 80; i++) {
      stepVehiclePhysics(stateGreen, neutralInput({ throttle: 0.4 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: i / 60,
      });
      exGreen.update(1 / 60, stateGreen, checkCourseCollisions(stateGreen, SEDAN_SPEC), signals);
    }
    expect(exGreen.getViolations()).toHaveLength(0);
  });

  it('records RAILROAD_NO_STOP if crossing without stopping or while warning is active', () => {
    const signals = new TrafficSignalController();
    signals.setTimes(0, 27); // Railroad closing/warning!

    const state = createVehicleState(29.0, -1.75, -Math.PI / 2, 'sedan', 'AT');
    const ex = new ExaminerEngine();
    ex.reset('exam', state);

    // Even if stopped, crossing while warning active violates railroad rule
    for (let i = 0; i < 180; i++) {
      stepVehiclePhysics(state, neutralInput({ throttle: 0.6 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: i / 60,
      });
      ex.update(1 / 60, state, checkCourseCollisions(state, SEDAN_SPEC), signals);
    }
    expect(ex.getViolations().some((v) => v.code === 'RAILROAD_NO_STOP')).toBe(true);
  });

  it('deducts NO_SIGNAL (-5) when turning 90 degrees without blinker and passes with blinker', () => {
    const signals = new TrafficSignalController();

    const stateNoSig = createVehicleState(-1.75, 22.0, 0, 'sedan', 'AT');
    stateNoSig.speedMs = 5.0;
    const ex1 = new ExaminerEngine();
    ex1.reset('practice', stateNoSig);

    for (let i = 0; i < 120; i++) {
      stepVehiclePhysics(stateNoSig, neutralInput({ throttle: 0.35, steerLeft: 0.9 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: false,
        simTimeSec: i / 60,
      });
      ex1.update(1 / 60, stateNoSig, checkCourseCollisions(stateNoSig, SEDAN_SPEC), signals);
    }
    expect(ex1.getViolations().some((v) => v.code === 'NO_SIGNAL')).toBe(true);
    expect(ex1.getScore()).toBe(95);

    const stateWithSig = createVehicleState(-1.75, 22.0, 0, 'sedan', 'AT');
    stateWithSig.speedMs = 5.0;
    stateWithSig.blinker = 'left';
    const ex2 = new ExaminerEngine();
    ex2.reset('practice', stateWithSig);

    for (let i = 0; i < 120; i++) {
      stepVehiclePhysics(stateWithSig, neutralInput({ throttle: 0.35, steerLeft: 0.9 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: false,
        simTimeSec: i / 60,
      });
      ex2.update(1 / 60, stateWithSig, checkCourseCollisions(stateWithSig, SEDAN_SPEC), signals);
    }
    expect(ex2.getViolations()).toHaveLength(0);
  });

  it('checks Pre-Drive Cockpit Checklist order & seatbelt when pulling out from Start Bay 1', () => {
    const signals = new TrafficSignalController();

    // Case 1: Pull out from Start Bay 1 (12.0, 48.1) without fastening seatbelt
    const stateUnbelted = createVehicleState(12.0, 48.1, Math.PI / 2, 'sedan', 'AT');
    stateUnbelted.blinker = 'right';
    const ex1 = new ExaminerEngine();
    ex1.reset('exam', stateUnbelted);

    for (let i = 0; i < 90; i++) {
      stepVehiclePhysics(stateUnbelted, neutralInput({ throttle: 0.7 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: i / 60,
      });
      ex1.update(1 / 60, stateUnbelted, checkCourseCollisions(stateUnbelted, SEDAN_SPEC), signals);
    }
    const beltViol = ex1.getViolations().find((v) => v.code === 'NO_SEATBELT');
    expect(beltViol).toBeDefined();
    expect(beltViol?.ruleRefJa).toContain('道路交通法');
    expect(beltViol?.howToFixEn).toBeTruthy();

    // Case 2: Fastened seatbelt first (skipped seat & mirror adjustment -> PRE_DRIVE_ORDER violation)
    const stateWrongOrder = createVehicleState(12.0, 48.1, Math.PI / 2, 'sedan', 'AT');
    stateWrongOrder.blinker = 'right';
    stateWrongOrder.preDrive.seatbeltFastened = true;
    stateWrongOrder.preDrive.orderErrorStep = 4;
    const ex2 = new ExaminerEngine();
    ex2.reset('exam', stateWrongOrder);

    for (let i = 0; i < 90; i++) {
      stepVehiclePhysics(stateWrongOrder, neutralInput({ throttle: 0.7 }), SEDAN_SPEC, 1 / 60, {
        steeringSensitivity: 1,
        autoCenterSteering: true,
        simTimeSec: i / 60,
      });
      ex2.update(1 / 60, stateWrongOrder, checkCourseCollisions(stateWrongOrder, SEDAN_SPEC), signals);
    }
    expect(ex2.getViolations().some((v) => v.code === 'PRE_DRIVE_ORDER')).toBe(true);
  });

  it('records PEDESTRIAN_PRIORITY instant fail when failing to yield at a zebra crosswalk', () => {
    const signals = new TrafficSignalController();
    const state = createVehicleState(-20.0, 47.75, Math.PI / 2, 'sedan', 'AT');
    state.speedMs = 5.0;
    const ex = new ExaminerEngine();
    ex.reset('exam', state);

    ex.update(1 / 60, state, checkCourseCollisions(state, SEDAN_SPEC), signals, {
      pedestrianDanger: true,
      trafficCollision: false,
    });
    expect(ex.getViolations().some((v) => v.code === 'PEDESTRIAN_PRIORITY')).toBe(true);
    expect(ex.isTerminated()).toBe(true);
  });
});

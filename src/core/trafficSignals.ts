export type SignalColor = 'green' | 'yellow' | 'red';

export type RailroadPhase = 'open' | 'warning' | 'closing' | 'closed' | 'opening';

/**
 * Deterministic controller for the central signalized intersection and
 * the animated Japanese railroad crossing (踏切).
 */
export class TrafficSignalController {
  private signalTime = 0;
  private railTime = 0;

  // Signal cycle: NS green 11s -> NS yellow 3s -> all red 1.5s -> EW green 11s -> EW yellow 3s -> all red 1.5s = 31s
  private static readonly SIGNAL_CYCLE = 31.0;

  // Railroad cycle: open 22s -> warning 4s -> closing 3s -> closed 8s -> opening 3s = 40s
  private static readonly RAIL_CYCLE = 40.0;

  update(dt: number): void {
    this.signalTime = (this.signalTime + dt) % TrafficSignalController.SIGNAL_CYCLE;
    this.railTime = (this.railTime + dt) % TrafficSignalController.RAIL_CYCLE;
  }

  /** Force a specific phase offset (useful for testing) */
  setTimes(signalSec: number, railSec: number): void {
    this.signalTime = ((signalSec % TrafficSignalController.SIGNAL_CYCLE) + TrafficSignalController.SIGNAL_CYCLE) % TrafficSignalController.SIGNAL_CYCLE;
    this.railTime = ((railSec % TrafficSignalController.RAIL_CYCLE) + TrafficSignalController.RAIL_CYCLE) % TrafficSignalController.RAIL_CYCLE;
  }

  getLightForAxis(axis: 'NS' | 'EW'): SignalColor {
    const t = this.signalTime;
    if (axis === 'NS') {
      if (t < 11.0) return 'green';
      if (t < 14.0) return 'yellow';
      return 'red';
    }
    // EW
    if (t >= 15.5 && t < 26.5) return 'green';
    if (t >= 26.5 && t < 29.5) return 'yellow';
    return 'red';
  }

  getRailroadState(): {
    phase: RailroadPhase;
    barrierAngle: number; // 0 = vertical open, Math.PI/2 = horizontal closed
    isWarningActive: boolean;
    flashLeftOn: boolean;
    flashRightOn: boolean;
  } {
    const t = this.railTime;
    let phase: RailroadPhase = 'open';
    let barrierAngle = 0;

    if (t < 22.0) {
      phase = 'open';
      barrierAngle = 0;
    } else if (t < 26.0) {
      phase = 'warning';
      barrierAngle = 0;
    } else if (t < 29.0) {
      phase = 'closing';
      const u = (t - 26.0) / 3.0;
      barrierAngle = u * (Math.PI / 2);
    } else if (t < 37.0) {
      phase = 'closed';
      barrierAngle = Math.PI / 2;
    } else {
      phase = 'opening';
      const u = (t - 37.0) / 3.0;
      barrierAngle = (1 - u) * (Math.PI / 2);
    }

    const isWarningActive = phase !== 'open';
    const flashStep = Math.floor(t * 2.2) % 2 === 0;
    return {
      phase,
      barrierAngle,
      isWarningActive,
      flashLeftOn: isWarningActive && flashStep,
      flashRightOn: isWarningActive && !flashStep,
    };
  }
}

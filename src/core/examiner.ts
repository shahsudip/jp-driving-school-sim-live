import type { CollisionReport } from './collision';
import { distance, normalizeAngle } from './coordinates';
import {
  HILL_UP_END,
  HILL_UP_START,
  HILL_Z,
  OBSTACLE_COLLIDERS,
  STOP_LINE_ZONES,
  type StopLineZone,
} from './courseLayout';
import type { TrafficSignalController } from './trafficSignals';
import type {
  ExamSummary,
  SimMode,
  SpawnStationId,
  VehicleState,
  ViolationCode,
  ViolationEvent,
} from '../types';

export interface ExamWaypoint {
  id: string;
  stationHint: SpawnStationId;
  x: number;
  z: number;
  radius: number;
  instructionJa: string;
  instructionEn: string;
}

export const EXAM_WAYPOINTS: ExamWaypoint[] = [
  {
    id: 'wp-pullout',
    stationHint: 'startBay',
    x: -10.0,
    z: 47.75,
    radius: 6.5,
    instructionJa: '発着点1番：右ウインカー(E)を出して発進し、左車線へ進みましょう',
    instructionEn: 'Bay 1: Signal right (E), glance right (X), and pull into the left lane',
  },
  {
    id: 'wp-west-turn',
    stationHint: 'stopSign',
    x: -77.75,
    z: 10.0,
    radius: 7.0,
    instructionJa: '外周西側を通って北の直線（40km/h区間）へ向かいましょう',
    instructionEn: 'Continue along the West loop toward the North 40 km/h straight',
  },
  {
    id: 'wp-north-straight',
    stationHint: 'speedStraight',
    x: 10.0,
    z: -47.75,
    radius: 7.5,
    instructionJa: '北直線：駐車車両を右・左ウインカーで回避し、40km/h近くまで加速',
    instructionEn: 'North straight: Signal past the parked van and reach ~35–40 km/h',
  },
  {
    id: 'wp-hill-approach',
    stationHint: 'hillStart',
    x: 24.0,
    z: -24.0,
    radius: 6.0,
    instructionJa: '坂道発進：坂の途中で一度完全停止し、逆行せずに発進しましょう',
    instructionEn: 'Hill Start: Stop on the up-ramp, then pull away cleanly without rollback',
  },
  {
    id: 'wp-bay-access',
    stationHint: 'bayParking',
    x: 26.0,
    z: 30.8,
    radius: 4.5,
    instructionJa: '方向変換：SEエリアの駐車スペースへバックで進入し、前向きに出庫',
    instructionEn: 'Bay Parking: Reverse into the SE T-bay, then exit forward toward the crossing',
  },
  {
    id: 'wp-railroad',
    stationHint: 'railroad',
    x: 22.0,
    z: 1.75,
    radius: 6.5,
    instructionJa: '踏切：停止線手前で完全停止し、左右確認（Z/X）してから通過しましょう',
    instructionEn: 'Railroad: Stop completely before line, look Left & Right (Z/X), then cross',
  },
  {
    id: 'wp-signal',
    stationHint: 'trafficLight',
    x: -15.0,
    z: 1.75,
    radius: 6.5,
    instructionJa: '信号交差点：信号に従って直進し、NWのS字コース入口へ左折',
    instructionEn: 'Signal Intersection: Obey light, cross West, then enter S-Curve (North)',
  },
  {
    id: 'wp-scurve',
    stationHint: 'sCurve',
    x: -27.12,
    z: -36.0,
    radius: 5.5,
    instructionJa: 'S字コース：脱輪・ポール接触に注意して低速で通り抜けましょう',
    instructionEn: 'S-Curve: Creep slowly through the bends without touching curbs or poles',
  },
  {
    id: 'wp-crank',
    stationHint: 'crank',
    x: -34.0,
    z: 36.0,
    radius: 5.5,
    instructionJa: 'クランク：直角コーナーを大回りで曲がり、南外周へ合流しましょう',
    instructionEn: 'Crank: Swing wide around both 90° turns cleanly onto the South road',
  },
  {
    id: 'wp-finish-bay',
    stationHint: 'startBay',
    x: 12.0,
    z: 48.1,
    radius: 3.5,
    instructionJa: 'ゴール：発着点1番の縁石沿いに停止し、完全停止で検定終了です',
    instructionEn: 'Finish: Pull alongside Start Bay 1 and come to a complete stop',
  },
];

interface ZoneTracker {
  approached: boolean;
  stoppedBeforeLine: boolean;
  lookedBothSides: boolean;
  wasClosedOrWarning: boolean;
  crossed: boolean;
  prevSignedDist: number;
}

export class ExaminerEngine {
  private mode: SimMode = 'practice';
  private score = 100;
  private terminated = false;
  private finished = false;
  private simTimeSec = 0;
  private startOdometerM = 0;
  private violations: ViolationEvent[] = [];
  private waypointIndex = 0;
  private cooldowns = new Map<ViolationCode, number>();
  private zoneTrackers = new Map<string, ZoneTracker>();
  private recentSignalTime = -999;
  private recentSignalDir: 'left' | 'right' | null = null;
  private headingSample = 0;
  private headingAccumTurn = 0;
  private hillMaxXOnRamp = -Infinity;
  private handbrakeDragDist = 0;
  private curbMountCount = 0;

  // Callbacks / latest UI state
  public lastViolation: ViolationEvent | null = null;
  public onViolation?: (v: ViolationEvent) => void;
  public onExamFinish?: (summary: ExamSummary) => void;

  reset(mode: SimMode, state: VehicleState): void {
    this.mode = mode;
    this.score = 100;
    this.terminated = false;
    this.finished = false;
    this.simTimeSec = 0;
    this.startOdometerM = state.odometerM;
    this.violations = [];
    this.waypointIndex = 0;
    this.cooldowns.clear();
    this.zoneTrackers.clear();
    this.recentSignalTime = -999;
    this.recentSignalDir = null;
    this.headingSample = state.heading;
    this.headingAccumTurn = 0;
    this.hillMaxXOnRamp = -Infinity;
    this.handbrakeDragDist = 0;
    this.curbMountCount = 0;
    this.lastViolation = null;
  }

  getMode(): SimMode {
    return this.mode;
  }

  getScore(): number {
    return Math.max(0, this.score);
  }

  isTerminated(): boolean {
    return this.terminated;
  }

  isFinished(): boolean {
    return this.finished;
  }

  getViolations(): readonly ViolationEvent[] {
    return this.violations;
  }

  getCurrentWaypoint(): ExamWaypoint | null {
    if (this.mode !== 'exam') return null;
    return EXAM_WAYPOINTS[this.waypointIndex] ?? null;
  }

  getWaypointProgress(): { current: number; total: number } {
    return { current: this.waypointIndex, total: EXAM_WAYPOINTS.length };
  }

  getSummary(state: VehicleState): ExamSummary {
    const score = this.getScore();
    const counts = new Map<ViolationCode, number>();
    for (const v of this.violations) {
      counts.set(v.code, (counts.get(v.code) ?? 0) + 1);
    }
    let weakArea: SpawnStationId | undefined;
    if (counts.has('RAILROAD_NO_STOP')) weakArea = 'railroad';
    else if (counts.has('STOP_SIGN_VIOLATION')) weakArea = 'stopSign';
    else if (counts.has('RED_LIGHT')) weakArea = 'trafficLight';
    else if (counts.has('HILL_ROLLBACK')) weakArea = 'hillStart';
    else if (counts.has('CURB_MOUNT') || counts.has('POLE_COLLISION')) {
      weakArea = this.getCurrentWaypoint()?.stationHint ?? 'crank';
    }

    return {
      passed: !this.terminated && score >= 70,
      terminated: this.terminated,
      score,
      elapsedSec: this.simTimeSec,
      distanceM: Math.max(0, state.odometerM - this.startOdometerM),
      violations: [...this.violations],
      weakArea,
    };
  }

  private recordViolation(
    code: ViolationCode,
    points: number,
    instantFail: boolean,
    labelJa: string,
    labelEn: string,
    detailJa: string,
    detailEn: string,
    cooldownSec = 3.0
  ): void {
    if (this.finished) return;
    const prev = this.cooldowns.get(code) ?? -999;
    if (this.simTimeSec - prev < cooldownSec) return;
    this.cooldowns.set(code, this.simTimeSec);

    const event: ViolationEvent = {
      id: `${code}-${this.violations.length + 1}`,
      code,
      points,
      instantFail,
      timestampSec: this.simTimeSec,
      labelJa,
      labelEn,
      detailJa,
      detailEn,
    };

    this.violations.push(event);
    this.lastViolation = event;
    this.score = Math.max(0, this.score - points);
    this.onViolation?.(event);

    if (instantFail && this.mode === 'exam') {
      this.terminated = true;
      this.finished = true;
    }
  }

  update(
    dt: number,
    state: VehicleState,
    collision: CollisionReport,
    signals: TrafficSignalController
  ): void {
    if (this.finished) return;
    this.simTimeSec += dt;

    // 1. Track active signal history (valid for 7s after turn starts)
    if (state.blinker === 'left' || state.blinker === 'right') {
      this.recentSignalTime = this.simTimeSec;
      this.recentSignalDir = state.blinker;
    }

    // 2. Curb touches & mounts
    if (collision.anyCurbMount) {
      this.curbMountCount++;
      const fail = this.mode === 'exam' && this.curbMountCount >= 2;
      this.recordViolation(
        'CURB_MOUNT',
        20,
        fail,
        '脱輪',
        'Curb Mount',
        'タイヤが縁石に乗り上げました',
        'Wheel mounted over the course curb',
        3.0
      );
    } else if (collision.anyCurbTouch) {
      this.recordViolation(
        'CURB_TOUCH',
        10,
        false,
        '接輪',
        'Curb Scrape',
        'タイヤが縁石に接触しました',
        'Tire brushed against the curb',
        2.5
      );
    }

    // 3. Pole / Parked obstacle contact
    if (collision.poleHit || (collision.obstacleHit && collision.obstacleHit.kind === 'parkedCar')) {
      this.recordViolation(
        'POLE_COLLISION',
        30,
        true,
        '接触事故',
        'Obstacle Contact',
        'ポールまたは障害物に接触しました',
        'Vehicle struck a course marker pole or obstacle',
        2.5
      );
    }

    // 4. Speed limit (> 46 km/h inside Kyoshujo)
    const speedKmh = Math.abs(state.speedMs) * 3.6;
    if (speedKmh > 46.0) {
      this.recordViolation(
        'SPEED_LIMIT',
        10,
        false,
        '速度超過',
        'Speeding',
        '場内制限速度（40km/h）を大幅に超過しました',
        'Exceeded 40 km/h compound speed limit',
        4.0
      );
    }

    // 5. Handbrake drag
    if (state.handbrake && Math.abs(state.speedMs) > 1.2) {
      this.handbrakeDragDist += Math.abs(state.speedMs) * dt;
      if (this.handbrakeDragDist > 3.5) {
        this.handbrakeDragDist = 0;
        this.recordViolation(
          'HANDBRAKE_DRAG',
          5,
          false,
          'サイド戻し忘れ',
          'Handbrake Left On',
          'サイドブレーキを引いたまま走行しています',
          'Driving with the parking brake still engaged',
          5.0
        );
      }
    } else {
      this.handbrakeDragDist = 0;
    }

    // 6. Hill Start rollback tracking (x in [19, 34], z around -24, heading East)
    if (
      state.x > HILL_UP_START + 1.0 &&
      state.x < HILL_UP_END &&
      Math.abs(state.z - HILL_Z) < 3.0
    ) {
      if (state.x > this.hillMaxXOnRamp) {
        this.hillMaxXOnRamp = state.x;
      }
      const rollback = this.hillMaxXOnRamp - state.x;
      if (rollback > 0.35 && state.speedMs < -0.15) {
        const fail = rollback > 1.0;
        this.recordViolation(
          'HILL_ROLLBACK',
          fail ? 30 : 10,
          fail,
          '坂道逆行',
          'Hill Rollback',
          fail ? '坂道で1m以上逆行しました' : '坂道で車両が後退しました',
          fail ? 'Rolled back over 1.0m on hill ramp' : 'Vehicle rolled backward on hill ramp',
          4.0
        );
      }
    } else {
      this.hillMaxXOnRamp = -Infinity;
    }

    // 7. Stop lines: Stop Signs, Railroad Crossing, Traffic Signals
    this.evaluateStopLines(state, signals);

    // 8. Turn signal requirement on major turns (> 55 deg heading change in short window)
    const dh = normalizeAngle(state.heading - this.headingSample);
    this.headingSample = state.heading;
    if (state.speedMs > 1.5) {
      this.headingAccumTurn += dh;
      if (Math.abs(this.headingAccumTurn) > 0.96) {
        const turnDir = this.headingAccumTurn > 0 ? 'left' : 'right';
        // Ignore S-Curve interior bends (NW quadrant) where blinkers aren't used inside S-Curve
        const insideSCurve = state.x < -24 && state.x > -50 && state.z < -4 && state.z > -42;
        const signalValid =
          this.simTimeSec - this.recentSignalTime < 7.0 && this.recentSignalDir === turnDir;
        if (!insideSCurve && !signalValid) {
          this.recordViolation(
            'NO_SIGNAL',
            5,
            false,
            '合図不履行',
            'Missing Blinker',
            `${turnDir === 'left' ? '左折' : '右折'}時のウインカー合図がありません`,
            `Turned ${turnDir} without activating blinker beforehand`,
            3.5
          );
        }
        this.headingAccumTurn = 0;
      }
    } else {
      this.headingAccumTurn *= Math.max(0, 1 - dt * 0.5);
    }

    // Check obstacle avoidance signal near North parked van (-10, -48.1)
    const van = OBSTACLE_COLLIDERS[0];
    if (van && Math.abs(state.x - van.x) < 2.0 && state.z > -50 && state.z < -42.5 && state.speedMs > 1.5) {
      // Passing parked van on right lane should have signal history
      if (this.simTimeSec - this.recentSignalTime > 8.0) {
        this.recordViolation(
          'NO_SIGNAL',
          5,
          false,
          '進路変更合図不履行',
          'Missing Lane Signal',
          '障害物回避時の右・左ウインカー合図がありません',
          'Passed parked obstacle without turn signal',
          6.0
        );
      }
    }

    // 9. Advance Exam Waypoints & Check Finish
    if (this.mode === 'exam' && !this.finished) {
      const wp = EXAM_WAYPOINTS[this.waypointIndex];
      if (wp && distance(state.x, state.z, wp.x, wp.z) <= wp.radius) {
        const isLast = this.waypointIndex === EXAM_WAYPOINTS.length - 1;
        if (isLast) {
          if (Math.abs(state.speedMs) < 0.15) {
            this.finished = true;
            this.onExamFinish?.(this.getSummary(state));
          }
        } else {
          this.waypointIndex++;
        }
      }
    }

    if (this.terminated && this.finished) {
      this.onExamFinish?.(this.getSummary(state));
    }
  }

  private evaluateStopLines(state: VehicleState, signals: TrafficSignalController): void {
    const railState = signals.getRailroadState();

    for (const zone of STOP_LINE_ZONES) {
      let tracker = this.zoneTrackers.get(zone.id);
      if (!tracker) {
        tracker = {
          approached: false,
          stoppedBeforeLine: false,
          lookedBothSides: false,
          wasClosedOrWarning: false,
          crossed: false,
          prevSignedDist: 999,
        };
        this.zoneTrackers.set(zone.id, tracker);
      }

      // Signed distance along approach direction: negative = before line, positive = past line
      const dx = state.x - zone.x;
      const dz = state.z - zone.z;
      const signedDist = dx * zone.dirX + dz * zone.dirZ;
      // Lateral distance perpendicular to approach direction
      const perpX = -zone.dirZ;
      const perpZ = zone.dirX;
      const lateralDist = Math.abs(dx * perpX + dz * perpZ);
      // Alignment check: vehicle must be roughly facing the zone travel direction
      const fwdDot = -Math.sin(state.heading) * zone.dirX - Math.cos(state.heading) * zone.dirZ;

      const inApproachCorridor = lateralDist <= zone.halfWidth + 0.9 && fwdDot > 0.65;

      if (inApproachCorridor && signedDist >= -9.0 && signedDist <= -0.1) {
        tracker.approached = true;
        if (Math.abs(state.speedMs) < 0.15) {
          tracker.stoppedBeforeLine = true;
        }
        const lookedL = this.simTimeSec - state.lookedLeftTimestamp < 6.0;
        const lookedR = this.simTimeSec - state.lookedRightTimestamp < 6.0;
        if (lookedL && lookedR) {
          tracker.lookedBothSides = true;
        }
        if (zone.kind === 'railroad' && railState.isWarningActive) {
          tracker.wasClosedOrWarning = true;
        }
      }

      // Detect line crossing (prevSignedDist < 0 -> signedDist >= 0)
      if (
        tracker.approached &&
        inApproachCorridor &&
        tracker.prevSignedDist < 0 &&
        signedDist >= 0 &&
        signedDist < 3.0
      ) {
        this.handleLineCrossed(zone, tracker, signals, railState.isWarningActive);
        tracker.approached = false;
        tracker.stoppedBeforeLine = false;
        tracker.lookedBothSides = false;
        tracker.wasClosedOrWarning = false;
      }

      // Reset tracker if moved far away
      if (Math.abs(signedDist) > 14.0 || lateralDist > 8.0) {
        tracker.approached = false;
        tracker.stoppedBeforeLine = false;
        tracker.lookedBothSides = false;
        tracker.wasClosedOrWarning = false;
      }

      tracker.prevSignedDist = signedDist;
    }
  }

  private handleLineCrossed(
    zone: StopLineZone,
    tracker: ZoneTracker,
    signals: TrafficSignalController,
    railWarningNow: boolean
  ): void {
    if (zone.kind === 'stopSign') {
      if (!tracker.stoppedBeforeLine) {
        this.recordViolation(
          'STOP_SIGN_VIOLATION',
          25,
          true,
          '指定場所一時不停止',
          'Stop Sign Violation',
          '「止まれ」停止線手前で完全停止していません',
          'Failed to come to a complete 0 km/h stop at 止まれ line',
          3.0
        );
      } else if (!tracker.lookedBothSides) {
        this.recordViolation(
          'NO_SAFETY_LOOK',
          5,
          false,
          '安全確認不履行',
          'Missing L/R Check',
          '発進前の左右安全確認（Z/Xキー）が不足しています',
          'Proceeded from stop line without glancing Left & Right (Z/X)',
          3.0
        );
      }
    } else if (zone.kind === 'railroad') {
      if (!tracker.stoppedBeforeLine || railWarningNow || tracker.wasClosedOrWarning) {
        this.recordViolation(
          'RAILROAD_NO_STOP',
          30,
          true,
          '踏切不停止・遮断機無視',
          'Railroad Violation',
          railWarningNow ? '警報機作動中に踏切へ進入しました' : '踏切手前で完全停止していません',
          railWarningNow
            ? 'Entered railroad crossing while warning/barrier active'
            : 'Crossed railroad tracks without stopping before stop line',
          3.0
        );
      } else if (!tracker.lookedBothSides) {
        this.recordViolation(
          'NO_SAFETY_LOOK',
          5,
          false,
          '踏切安全確認不履行',
          'Railroad Look Check',
          '踏切通過前の左右確認（Z/Xキー）が不足しています',
          'Crossed railroad without checking Left & Right (Z/X)',
          3.0
        );
      }
    } else if (zone.kind === 'trafficLight' && zone.axis) {
      const light = signals.getLightForAxis(zone.axis);
      if (light === 'red') {
        this.recordViolation(
          'RED_LIGHT',
          30,
          true,
          '信号無視',
          'Red Light Violation',
          '赤信号で交差点に進入しました',
          'Crossed intersection stop line on a RED traffic signal',
          3.0
        );
      }
    }
  }
}

import type { CollisionReport } from './collision';
import { distance, normalizeAngle } from './coordinates';
import {
  HILL_UP_END,
  HILL_UP_START,
  HILL_Z,
  OBSTACLE_COLLIDERS,
  SPAWN_STATIONS,
  STOP_LINE_ZONES,
  type StopLineZone,
} from './courseLayout';
import type { TrafficSignalController } from './trafficSignals';
import type { TrafficSafetyReport } from '../scene/TrafficAndPedestrians';
import type {
  ExamSummary,
  RuleStudyQuiz,
  SimMode,
  SpawnStationId,
  VehicleState,
  ViolationCode,
  ViolationEvent,
} from '../types';

export interface RuleExplanationMeta {
  ruleRefJa: string;
  ruleRefEn: string;
  howToFixJa: string;
  howToFixEn: string;
  quiz?: RuleStudyQuiz;
}

export const VIOLATION_RULE_EXPLANATIONS: Record<ViolationCode, RuleExplanationMeta> = {
  CURB_TOUCH: {
    ruleRefJa: '接輪（小）：縁石へのタイヤ接触（-10点）',
    ruleRefEn: 'Curb Scrape (接輪): Tire brushed the curb (-10 pts).',
    howToFixJa: '当たる前に止まってバックする「切り返し（1回目は減点0）」で向きを直しましょう。',
    howToFixEn: 'Stop BEFORE touching the curb and reverse to fix your angle (1st reversal = 0 pt deduction).',
  },
  CURB_MOUNT: {
    ruleRefJa: '脱輪：縁石乗り上げ（-20点 ／ 戻らず進行は検定中止）',
    ruleRefEn: 'Curb Mount (脱輪): Wheel climbed over curb (-20 pts / Instant Fail if you keep driving).',
    howToFixJa: 'すぐ停止して乗り上げる前の位置までバックで戻ってください（内輪差に注意）。',
    howToFixEn: 'Stop immediately and reverse back onto the road. Swing wider before turning.',
  },
  POLE_COLLISION: {
    ruleRefJa: '障害物接触：ポール・パイロン接触（一発検定中止）',
    ruleRefEn: 'Obstacle Hit (接触): Struck a pole or parked car (Instant Fail).',
    howToFixJa: 'サイドミラーでポールを確認し、当たる前に停止して「切り返し」を行ってください。',
    howToFixEn: 'Check side mirrors and stop to reverse (Kirikaeshi) before touching any pole.',
  },
  STOP_SIGN_VIOLATION: {
    ruleRefJa: '一時不停止（道交法第43条）：『止まれ』停止線手前で0 km/h停止なし（一発中止）',
    ruleRefEn: 'Stop Sign Violation (止まれ): Did not stop at 0.0 km/h before stop line (Instant Fail).',
    howToFixJa: '白線の直前で0.0 km/hで2秒間止まり、左・右（Z/X）を見てから発進してください。',
    howToFixEn: 'Stop at 0.0 km/h before the white line for 2 seconds, then look Left (Z) & Right (X).',
  },
  RAILROAD_NO_STOP: {
    ruleRefJa: '踏切不停止（道交法第33条）：踏切手前での一時不停止または警報機無視（一発中止）',
    ruleRefEn: 'Railroad Violation (踏切): Crossed without stopping or during alarm (Instant Fail).',
    howToFixJa: '踏切手前で完全停止（0 km/h）し、左右確認（Z/X）をして変速せずに通過します。',
    howToFixEn: 'Stop completely (0 km/h) before the line, look Left & Right (Z/X), then cross without shifting.',
  },
  RED_LIGHT: {
    ruleRefJa: '信号無視（道交法第7条）：赤信号での交差点進入（一発検定中止）',
    ruleRefEn: 'Red Light Violation (信号無視): Crossed stop line on Red (Instant Fail).',
    howToFixJa: '黄・赤信号では必ず停止線の手前で完全停止してください。',
    howToFixEn: 'Always stop before the white stop line on Yellow or Red.',
  },
  NO_SIGNAL: {
    ruleRefJa: '合図不履行（道交法第53条）：右左折・進路変更時のウインカー漏れ（-5点）',
    ruleRefEn: 'Missing Blinker (合図不履行): Turned or changed lanes without turn signal (-5 pts).',
    howToFixJa: '右左折の30m手前、発進・進路変更の3秒前にQ（左）/ E（右）を出してください。',
    howToFixEn: 'Press Q (Left) or E (Right) 30m before turning or 3s before changing lanes.',
  },
  NO_SAFETY_LOOK: {
    ruleRefJa: '安全確認不履行：発進・一時停止・踏切での左右首振り目視不足（-5点）',
    ruleRefEn: 'Missing Safety Look (安全確認): Did not turn head Left/Right to check blind spots (-5 pts).',
    howToFixJa: '発進や交差点進入の前にZ（左目視）・X（右目視）キーで首を振って確認してください。',
    howToFixEn: 'Press Z (Look Left) and X (Look Right) before proceeding from stop lines or pulling out.',
  },
  HILL_ROLLBACK: {
    ruleRefJa: '坂道逆行：上り坂発進での後退（0.3m以上で-10点、1.0m以上で検定中止）',
    ruleRefEn: 'Hill Rollback (坂道後退): Rolled backward on uphill start (-10 pts / >1m Instant Fail).',
    howToFixJa: 'サイドブレーキ（Space）を引き、アクセル（W）を踏んでからサイドを解除します。',
    howToFixEn: 'Hold handbrake (Space), press throttle (W), then release handbrake smoothly.',
  },
  SPEED_LIMIT: {
    ruleRefJa: '最高速度違反（道交法第22条）：40 km/h制限の超過（-10点）',
    ruleRefEn: 'Speeding (速度超過): Exceeded the 40 km/h speed limit (-10 pts).',
    howToFixJa: '40km/hに達したらすぐにアクセルを戻し、カーブ手前で減速してください。',
    howToFixEn: 'Ease off the throttle once you reach 38–40 km/h and brake before corners.',
  },
  HANDBRAKE_DRAG: {
    ruleRefJa: '駐停車ブレーキ戻し忘れ：サイドブレーキを引いたまま走行（-5点）',
    ruleRefEn: 'Handbrake Left On (サイド戻し忘れ): Drove with parking brake engaged (-5 pts).',
    howToFixJa: '発進前にSpaceキー（または手順⑥）でサイドブレーキを解除してください。',
    howToFixEn: 'Press Space (or Pre-Drive Step 6) to release the handbrake before moving.',
  },
  PRE_DRIVE_ORDER: {
    ruleRefJa: '乗車・発進手順不備：座席→ミラー→ベルトの順序違反または省略（-5点）',
    ruleRefEn: 'Pre-Drive Order Error (発進手順): Skipped or did cockpit steps out of order (-5 pts).',
    howToFixJa: '発進前に画面上部の①ドア→②座席→③ミラー→④ベルト…を順番に押してください。',
    howToFixEn: 'Click steps 1 → 2 (Seat) → 3 (Mirrors) → 4 (Seatbelt) in order before pulling out.',
  },
  NO_SEATBELT: {
    ruleRefJa: 'シートベルト未着用（道交法第71条の3）：ベルト未装着での発進（-10点）',
    ruleRefEn: 'No Seatbelt (ベルト未着用): Pulled out without fastening seatbelt (-10 pts).',
    howToFixJa: '発進前に手順④（またはキー4）でシートベルトを着用してください。',
    howToFixEn: 'Click Step 4 (or press key 4) to fasten your 3D seatbelt before driving.',
  },
  PEDESTRIAN_PRIORITY: {
    ruleRefJa: '歩行者保護違反（道交法第38条）：横断歩道上の歩行者妨害（一発検定中止）',
    ruleRefEn: 'Pedestrian Priority (歩行者妨害): Failed to stop for pedestrian at crosswalk (Instant Fail).',
    howToFixJa: '横断歩道に歩行者がいる時は必ず停止線手前で完全停止して待ってください。',
    howToFixEn: 'Always stop completely before the crosswalk until pedestrians finish crossing.',
  },
  TRAFFIC_COLLISION: {
    ruleRefJa: '他車接触事故（道交法第70条）：他の教習車との衝突（一発検定中止）',
    ruleRefEn: 'Vehicle Collision (他車接触): Collided with another training car (Instant Fail).',
    howToFixJa: '周囲の教習車との車間距離を保ち、交差点では優先車に道を譲ってください。',
    howToFixEn: 'Keep a safe following distance and yield to priority traffic at intersections.',
  },
};

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
  private preDriveChecked = false;
  private spawnedAtStartBay = false;

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
    const sb = SPAWN_STATIONS.startBay;
    this.spawnedAtStartBay = distance(state.x, state.z, sb.x, sb.z) < 2.2;
    this.preDriveChecked = false;
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

    const meta = VIOLATION_RULE_EXPLANATIONS[code];
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
      ruleRefJa: meta?.ruleRefJa,
      ruleRefEn: meta?.ruleRefEn,
      howToFixJa: meta?.howToFixJa,
      howToFixEn: meta?.howToFixEn,
      quiz: meta?.quiz,
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
    signals: TrafficSignalController,
    trafficSafety?: TrafficSafetyReport
  ): void {
    if (this.finished) return;
    this.simTimeSec += dt;

    // 0. Check Pedestrian Priority & AI Traffic Collision
    if (trafficSafety?.pedestrianDanger) {
      this.recordViolation(
        'PEDESTRIAN_PRIORITY',
        30,
        true,
        '歩行者保護違反（横断歩道）',
        'Pedestrian Crosswalk Violation',
        trafficSafety.pedestrianLabelJa ?? '横断歩道上の歩行者の通行を妨害しました',
        trafficSafety.pedestrianLabelEn ?? 'Failed to stop for a pedestrian crossing the zebra crosswalk',
        4.0
      );
    }
    if (trafficSafety?.trafficCollision) {
      this.recordViolation(
        'TRAFFIC_COLLISION',
        30,
        true,
        '他車接触事故',
        'Traffic Vehicle Collision',
        'コース上の他車（教習車）と接触しました',
        'Collided with another training vehicle on the course',
        3.5
      );
    }

    // 0b. Evaluate Pre-Drive Cockpit Checklist when pulling out of Start Bay 1
    if (this.spawnedAtStartBay && !this.preDriveChecked && state.odometerM - this.startOdometerM > 1.2) {
      this.preDriveChecked = true;
      const pd = state.preDrive;
      if (pd) {
        if (!pd.seatbeltFastened) {
          this.recordViolation(
            'NO_SEATBELT',
            10,
            false,
            'シートベルト未着用',
            'Seatbelt Not Fastened',
            '乗車手順④「シートベルト着用」を行わずに発進しました',
            'Pulled out of Start Bay without fastening seatbelt (Pre-Drive Step 4)',
            10.0
          );
        } else if (!pd.doorLocked || !pd.seatAdjusted || !pd.mirrorsAdjusted || pd.orderErrorStep) {
          this.recordViolation(
            'PRE_DRIVE_ORDER',
            5,
            false,
            '乗車・発進準備手順不備',
            'Pre-Drive Checklist Order Error',
            pd.orderErrorStep
              ? '乗車準備（①ドアロック→②座席調整→③ミラー調整→④シートベルト）の順序が正しくありません'
              : '発進前の座席調整またはミラー確認を省略して発進しました',
            pd.orderErrorStep
              ? 'Pre-drive cockpit preparation steps were performed out of the official Japanese exam sequence'
              : 'Pulled out without completing Door Lock → Seat Adjust → Mirror Check in order',
            10.0
          );
        } else if (!pd.fivePointLookDone && this.simTimeSec - state.lookedRightTimestamp > 8.0) {
          this.recordViolation(
            'NO_SAFETY_LOOK',
            5,
            false,
            '発進時5点安全確認不足',
            'Missing Pull-Out Safety Look',
            '発進前の後方・右死角目視確認（Xキーまたは手順⑧）を行わずに発進しました',
            'Pulled out from curb without performing right blind-spot shoulder check (X / Step 8)',
            8.0
          );
        }
      }
    }

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

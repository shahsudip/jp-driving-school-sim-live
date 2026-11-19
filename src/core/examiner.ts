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
}

export const VIOLATION_RULE_EXPLANATIONS: Record<ViolationCode, RuleExplanationMeta> = {
  CURB_TOUCH: {
    ruleRefJa: '技能試験実施基準「接輪（小）」：縁石へのタイヤ側面接触（減点10点）',
    ruleRefEn: 'NPA Practical Exam Standard "Curb Contact (接輪)": Tire sidewall brushed against the concrete curb (-10 pts).',
    howToFixJa: 'S字やクランクで接触しそうな時は無理に進まず、停止してバックでやり直す「切り返し（1回目は減点なし）」を使いましょう。',
    howToFixEn: 'If your turn feels too tight in the S-Curve or Crank, STOP before touching the curb and reverse to readjust (Kirikaeshi — 1st reversal is 0 pt deduction!).',
  },
  CURB_MOUNT: {
    ruleRefJa: '技能試験実施基準「脱輪」：車輪が縁石に乗り上げ、またはコース外へ逸脱（減点20点／戻らず進行・2回目は検定中止）',
    ruleRefEn: 'NPA Practical Exam Standard "Wheel Off-Course / Curb Mount (脱輪)": Wheel climbed over the curb (-20 pts / instant fail if not immediately reversed or on 2nd mount).',
    howToFixJa: '脱輪した瞬間に必ず完全停止し、縁石に乗り上げる前の位置までバックして体制を立て直してください。内輪差（後輪が前輪より内側を通る特性）を意識し、外側に寄せてから曲がり始めましょう。',
    howToFixEn: 'Stop immediately upon mounting a curb and reverse back onto the pavement. Account for rear-wheel inner tracking (内輪差) by swinging slightly wider before turning.',
  },
  POLE_COLLISION: {
    ruleRefJa: '技能試験実施基準「接触・危険行為（検定中止）」：ポール・パイロン・駐車車両等への接触（一発不合格・補助ブレーキ介入）',
    ruleRefEn: 'NPA Practical Exam Standard "Obstacle Collision (接触・検定中止)": Struck a marker pole, cone, or parked vehicle (Instant Disqualification / Examiner Auxiliary Brake).',
    howToFixJa: '方向変換・縦列駐車・クランクではポールとの距離をサイドミラーで確認し、当たりそうな場合は必ず停止して「切り返し」を行ってください。',
    howToFixEn: 'Check both side mirrors in Bay/Parallel Parking and Crank corners. Always stop and perform a corrective reversal (切り返し) before touching any pole.',
  },
  STOP_SIGN_VIOLATION: {
    ruleRefJa: '道路交通法第43条「指定場所一時不停止（検定中止）」：『止まれ』標識の停止線手前で車輪が完全停止（0 km/h）していない（一発不合格）',
    ruleRefEn: 'Road Traffic Act Art. 43 "Stop Sign Violation (指定場所一時不停止・検定中止)": Failed to bring wheels to a complete 0.0 km/h stop before the white stop line (Instant Fail).',
    howToFixJa: '停止線の直前でスピードが0.0 km/hになるまで約2秒間しっかり停止し、その後に左・右（Z/Xキー）を大きく目視確認してから発進してください（徐行・ローリングストップは一発中止です）。',
    howToFixEn: 'Come to a dead 0.0 km/h stop before the stop line for 2 full seconds (rolling stops are an automatic fail in Japan!), then look Left (Z) and Right (X) before proceeding.',
  },
  RAILROAD_NO_STOP: {
    ruleRefJa: '道路交通法第33条「踏切不停止等（検定中止）」：踏切停止線手前での完全停止不履行、または警報機作動中の進入（一発不合格）',
    ruleRefEn: 'Road Traffic Act Art. 33 "Railroad Crossing Violation (踏切不停止・検定中止)": Failed to stop before the railroad stop line or entered while alarm/gates were active (Instant Fail).',
    howToFixJa: '日本の道路交通法では、踏切通過時は信号や遮断機が開いていても必ず停止線手前で完全停止（0 km/h）し、窓を開けて左右の安全確認（Z/X）を行い、踏切内は変速せず一気に通過します。',
    howToFixEn: 'In Japan, every vehicle MUST come to a complete 0 km/h stop before ANY railroad crossing stop line, look Left & Right (Z/X), listen, and cross in one continuous motion without shifting gears.',
  },
  RED_LIGHT: {
    ruleRefJa: '道路交通法第7条「信号無視（検定中止）」：赤信号（または停止可能な黄信号）で停止線を越えて交差点へ進入（一発不合格）',
    ruleRefEn: 'Road Traffic Act Art. 7 "Traffic Signal Violation (信号無視・検定中止)": Crossed the stop line into the intersection during a Red signal (Instant Fail).',
    howToFixJa: '交差点接近時は信号を早めに確認し、黄信号・赤信号では必ず停止線の手前で停止してください。',
    howToFixEn: 'Check the intersection signal early and stop cleanly before the white stop line on Yellow or Red.',
  },
  NO_SIGNAL: {
    ruleRefJa: '道路交通法第53条「合図不履行（減点5点）」：右左折の30m手前、または進路変更の3秒前のウインカー合図漏れ',
    ruleRefEn: 'Road Traffic Act Art. 53 "Failure to Signal (合図不履行 -5 pts)": Missing turn signal (Q/E) 30m before turning or 3 seconds before changing lanes/passing obstacles.',
    howToFixJa: '左折（Q）・右折（E）の30m手前、および発進・駐車車両回避・進路変更の3秒前に必ずウインカーを出してください。',
    howToFixEn: 'Activate Left (Q) or Right (E) turn signal 30 meters before any intersection turn and 3 seconds before pulling out or passing a parked obstacle.',
  },
  NO_SAFETY_LOOK: {
    ruleRefJa: '技能試験実施基準「安全確認不履行（減点5〜10点）」：発進・交差点・踏切・右左折時の目視（首振り確認）不足',
    ruleRefEn: 'NPA Practical Exam Standard "Failure to Perform Visual Safety Check (安全確認不履行 -5 to -10 pts)": Proceeded without distinctly turning head Left/Right (Z/X) to check blind spots.',
    howToFixJa: '日本の技能試験では「目で見ただけ」では認められません。検定員から見えるようにZキー（左目視）・Xキー（右目視）で首をしっかり振って確認してください。',
    howToFixEn: 'Examiners in Japan grade visible head movement! Press Z (Look Left) and X (Look Right) so your driver avatar physically rotates their head to check mirrors and blind spots.',
  },
  HILL_ROLLBACK: {
    ruleRefJa: '技能試験実施基準「坂道後退（逆行）」：上り坂での発進時に車両が後退（0.3m以上で減点10点、1.0m以上で検定中止）',
    ruleRefEn: 'NPA Practical Exam Standard "Hill Start Rollback (坂道逆行)": Vehicle rolled backward on the hill ramp (-10 pts for >0.3m rollback, Instant Fail for >1.0m).',
    howToFixJa: '坂の途中で停止したらサイドブレーキ（Space）を引き、アクセル（W）を少し踏んで駆動力を感じてからサイドブレーキを解除して発進しましょう。',
    howToFixEn: 'When stopped on the hill upgrade, engage the handbrake (Space), apply gentle throttle (W), then release the handbrake smoothly to pull away with zero rollback.',
  },
  SPEED_LIMIT: {
    ruleRefJa: '道路交通法第22条「最高速度違反（減点10点）」：教習所場内の指定最高速度（40 km/h）を超過',
    ruleRefEn: 'Road Traffic Act Art. 22 "Speed Limit Violation (速度超過 -10 pts)": Exceeded the 40 km/h maximum speed limit.',
    howToFixJa: '直線40km/h課題では38〜40km/hに到達したらすぐにアクセルを戻し、コーナー手前でしっかり減速してください。',
    howToFixEn: 'On the 40 km/h straight, accelerate up to 38–40 km/h briefly, then ease off the throttle and brake smoothly before the corner.',
  },
  HANDBRAKE_DRAG: {
    ruleRefJa: '技能試験実施基準「駐停車ブレーキ戻し忘れ（減点5点）」：サイドブレーキを引いたまま発進・走行',
    ruleRefEn: 'NPA Practical Exam Standard "Parking Brake Drag (サイド戻し忘れ -5 pts)": Drove with the handbrake still engaged.',
    howToFixJa: '発進前の手順（⑥ギアD＋サイドブレーキ解除 [Space]）を徹底してからアクセルを踏んでください。',
    howToFixEn: 'Always release the parking brake (Space) in Pre-Drive Step 6 before pressing the throttle.',
  },
  PRE_DRIVE_ORDER: {
    ruleRefJa: '技能試験実施基準「乗車・発進手順不備（減点5点）」：乗車後の準備手順（①ドアロック→②座席調整→③ミラー調整→④シートベルト→⑤ブレーキ＋エンジン始動）の順序違反または省略',
    ruleRefEn: 'NPA Practical Exam Standard "Improper Pre-Drive Cockpit Procedure (発進準備手順不備 -5 pts)": Skipped or performed cockpit setup out of official order (1. Door Lock → 2. Seat → 3. Mirrors → 4. Seatbelt → 5. Brake+Start).',
    howToFixJa: '発進前に画面上部の「乗車〜発進手順チェックバー」を①から⑧まで順番通りに完了させてください。特に「シート調整→ミラー調整→シートベルト」の順序は検定員が助手席から厳しくチェックします。',
    howToFixEn: 'Before pulling out of the Start Bay, complete steps 1 through 8 on the Pre-Drive Checklist Bar in exact sequence: 1. Door Lock → 2. Seat → 3. Mirrors → 4. Seatbelt → 5. Brake+Ignition → 6. Gear D+Handbrake → 7. Right Blinker → 8. 5-Point Mirror & Right Shoulder Look.',
  },
  NO_SEATBELT: {
    ruleRefJa: '道路交通法第71条の3「シートベルト着用義務違反（減点10点）」：シートベルトを着用せずに発進',
    ruleRefEn: 'Road Traffic Act Art. 71-3 "Unfastened Seatbelt (シートベルト未着用 -10 pts)": Pulled out without fastening the driver seatbelt.',
    howToFixJa: '乗車したら座席とミラーを合わせた直後に必ず「④シートベルト着用」をクリック（またはキー4）して3Dシートベルトを装着してから発進してください。',
    howToFixEn: 'Always click Step 4 (or press key 4) to latch your 3D red diagonal seatbelt across the driver avatar after adjusting your seat and mirrors.',
  },
  PEDESTRIAN_PRIORITY: {
    ruleRefJa: '道路交通法第38条「横断歩道等における歩行者等の優先（検定中止）」：横断歩道を通行中の歩行者の進行を妨害（一発不合格・補助ブレーキ介入）',
    ruleRefEn: 'Road Traffic Act Art. 38 "Failure to Yield to Pedestrian at Crosswalk (歩行者保護違反・検定中止)": Drove close to a pedestrian crossing on a zebra crosswalk without stopping (Instant Fail).',
    howToFixJa: '横断歩道（◇マーク手前）に近づいたら減速し、歩行者が渡っている・渡ろうとしている時は必ず停止線（または横断歩道手前）で完全停止して歩行者が渡り切るのを待ってください。',
    howToFixEn: 'Whenever a pedestrian is crossing or waiting at a zebra crosswalk (横断歩道), come to a complete stop before the crosswalk and wait until they finish crossing.',
  },
  TRAFFIC_COLLISION: {
    ruleRefJa: '道路交通法第70条「安全運転義務違反・他車接触（検定中止）」：他の教習車・走行車両との接触事故（一発不合格）',
    ruleRefEn: 'Road Traffic Act Art. 70 "Vehicle Collision (他車接触事故・検定中止)": Collided with another vehicle on the course (Instant Fail).',
    howToFixJa: '交差点や合流では他車（教習車）の動きと優先関係を確認し、十分な車間距離を保って走行してください。',
    howToFixEn: 'Check for other training vehicles at intersections and merges, yield right-of-way, and maintain a safe following distance.',
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

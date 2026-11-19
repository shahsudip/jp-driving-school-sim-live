export type Locale = 'ja' | 'en';

export type VehicleKind = 'sedan' | 'motorcycle';

export type TransmissionMode = 'AT' | 'MT';

export type Gear = 'P' | 'R' | 'N' | 'D' | '1' | '2' | '3' | '4' | '5';

export type CameraMode = 'chase' | 'cockpit' | 'instructor' | 'hood' | 'orbit';

export type SimMode = 'practice' | 'exam';

export type CourseMode = 'kyoshujo' | 'custom';

export type BlinkerState = 'off' | 'left' | 'right' | 'hazard';

export type MirrorQuality = 'high' | 'low' | 'off';

export type WheelCorner = 'FL' | 'FR' | 'RL' | 'RR';

export type SpawnStationId =
  | 'startBay'
  | 'sCurve'
  | 'crank'
  | 'hillStart'
  | 'railroad'
  | 'stopSign'
  | 'trafficLight'
  | 'bayParking'
  | 'parallelParking'
  | 'speedStraight';

export interface VehicleSpec {
  kind: VehicleKind;
  length: number;
  width: number;
  wheelbase: number;
  trackWidth: number;
  frontOverhang: number;
  rearOverhang: number;
  wheelRadius: number;
  maxSteerRad: number;
  steeringWheelMaxRad: number;
  maxSpeedMs: number;
  maxReverseMs: number;
  maxAccelMs2: number;
  brakeDecelMs2: number;
}

export const SEDAN_SPEC: VehicleSpec = {
  kind: 'sedan',
  length: 4.40,
  width: 1.69,
  wheelbase: 2.60,
  trackWidth: 1.48,
  frontOverhang: 0.85,
  rearOverhang: 0.95,
  wheelRadius: 0.31,
  maxSteerRad: (43 * Math.PI) / 180,
  steeringWheelMaxRad: 1.5 * Math.PI * 2, // 540 deg each way
  maxSpeedMs: 16.7, // ~60 km/h
  maxReverseMs: 5.5, // ~20 km/h
  maxAccelMs2: 3.4,
  brakeDecelMs2: 9.5,
};

export const MOTORCYCLE_SPEC: VehicleSpec = {
  kind: 'motorcycle',
  length: 2.10,
  width: 0.72,
  wheelbase: 1.41,
  trackWidth: 0.16,
  frontOverhang: 0.35,
  rearOverhang: 0.34,
  wheelRadius: 0.30,
  maxSteerRad: (34 * Math.PI) / 180,
  steeringWheelMaxRad: (34 * Math.PI) / 180,
  maxSpeedMs: 18.0,
  maxReverseMs: 1.8,
  maxAccelMs2: 4.5,
  brakeDecelMs2: 9.8,
};

export function getVehicleSpec(kind: VehicleKind): VehicleSpec {
  return kind === 'motorcycle' ? MOTORCYCLE_SPEC : SEDAN_SPEC;
}

export interface PreDriveChecklistState {
  doorLocked: boolean;
  seatAdjusted: boolean;
  mirrorsAdjusted: boolean;
  seatbeltFastened: boolean;
  brakeAndStartDone: boolean;
  handbrakeReleased: boolean;
  rightSignalOn: boolean;
  fivePointLookDone: boolean;
  completedSteps: number[]; // Ordered 1..8 steps performed
  orderErrorStep?: number;
}

export interface VehicleState {
  // Center of vehicle on XZ plane
  x: number;
  y: number;
  z: number;
  // Rear axle world coordinates (kinematic anchor)
  rearAxleX: number;
  rearAxleZ: number;
  heading: number;
  pitch: number;
  roll: number;
  speedMs: number; // Signed along forward vector (negative = reverse)
  steerAngleRad: number; // + = left, - = right
  steeringWheelRad: number;
  wheelRotationRad: number;
  transmission: TransmissionMode;
  gear: Gear;
  rpm: number;
  stalled: boolean;
  handbrake: boolean;
  blinker: BlinkerState;
  blinkerTimer: number;
  blinkerOn: boolean;
  braking: boolean;
  reversing: boolean;
  lookAngleRad: number; // Driver head glance angle (- left, + right)
  lookedLeftTimestamp: number;
  lookedRightTimestamp: number;
  odometerM: number;
  preDrive: PreDriveChecklistState;
  mirrorTouchTimer: number; // > 0 when avatar reaches up to adjust mirror
  steerHoldSec: number; // Time-elapsed hold counter for progressive steering rate
  throttleHoldSec: number; // Time-elapsed hold counter for progressive throttle pedal ramp
  brakeHoldSec: number; // Time-elapsed hold counter for progressive brake pedal pressure
}

export interface InputState {
  throttle: number; // 0..1
  brake: number; // 0..1
  steerLeft: number; // 0..1
  steerRight: number; // 0..1
  analogSteerTarget: number | null; // -1..+1 for mobile drag steering
  clutch: number; // 0..1
  lookLeft: boolean;
  lookRight: boolean;
}

export type ViolationCode =
  | 'CURB_TOUCH'
  | 'CURB_MOUNT'
  | 'POLE_COLLISION'
  | 'STOP_SIGN_VIOLATION'
  | 'RAILROAD_NO_STOP'
  | 'RED_LIGHT'
  | 'NO_SIGNAL'
  | 'NO_SAFETY_LOOK'
  | 'HILL_ROLLBACK'
  | 'SPEED_LIMIT'
  | 'HANDBRAKE_DRAG'
  | 'PRE_DRIVE_ORDER'
  | 'NO_SEATBELT'
  | 'PEDESTRIAN_PRIORITY'
  | 'TRAFFIC_COLLISION';

export interface RuleStudyQuiz {
  questionJa: string;
  questionEn: string;
  optionsJa: [string, string];
  optionsEn: [string, string];
  correctIndex: 0 | 1;
  chapterRefJa: string;
  chapterRefEn: string;
  studyPointJa: string[];
  studyPointEn: string[];
}

export interface ViolationEvent {
  id: string;
  code: ViolationCode;
  points: number;
  instantFail: boolean;
  timestampSec: number;
  labelJa: string;
  labelEn: string;
  detailJa: string;
  detailEn: string;
  ruleRefJa?: string;
  ruleRefEn?: string;
  howToFixJa?: string;
  howToFixEn?: string;
  quiz?: RuleStudyQuiz;
}

export interface ExamSummary {
  passed: boolean;
  terminated: boolean;
  score: number;
  elapsedSec: number;
  distanceM: number;
  violations: ViolationEvent[];
  weakArea?: SpawnStationId;
}

export interface CustomMapConfig {
  imageDataUrl: string;
  fileName: string;
  mapWidth: number;
  startX: number;
  startZ: number;
  startHeading: number;
}

export interface UserSettings {
  locale: Locale;
  vehicleKind: VehicleKind;
  transmission: TransmissionMode;
  cameraMode: CameraMode;
  steeringSensitivity: number;
  autoCenterSteering: boolean;
  mirrorQuality: MirrorQuality;
  masterVolume: number;
  muted: boolean;
  minimapHeadingUp: boolean;
  showTouchControls: boolean;
}

import type { SpawnStationId } from '../types';

export interface Point2D {
  x: number;
  z: number;
}

export interface CurbPolyline {
  id: string;
  points: Point2D[];
  /** Normal orientation note: curbs act as thin physical raised edges (half-thickness 0.08m) */
  height: number;
  label?: string;
}

export interface PoleCollider {
  id: string;
  x: number;
  z: number;
  radius: number;
  height: number;
  zone: 'sCurve' | 'crank' | 'bayParking' | 'parallelParking';
}

export interface BoxObstacle {
  id: string;
  x: number;
  z: number;
  halfW: number;
  halfL: number;
  height: number;
  kind: 'parkedCar' | 'cone' | 'building';
}

export interface StopLineZone {
  id: string;
  kind: 'stopSign' | 'railroad' | 'trafficLight';
  /** Center of the stop line on the lane */
  x: number;
  z: number;
  /** Direction vector along valid travel approach */
  dirX: number;
  dirZ: number;
  /** Half-width of the stop line across the lane */
  halfWidth: number;
  /** Optional axis for trafficLight */
  axis?: 'NS' | 'EW';
  /** Side of railroad crossing if kind === 'railroad' */
  railroadTrackX?: number;
}

export interface SpawnStation {
  id: SpawnStationId;
  x: number;
  z: number;
  heading: number;
}

export interface TerrainSample {
  y: number;
  slopeX: number;
  slopeZ: number;
}

export const COMPOUND_HALF_W = 90; // 180m wide (-90 .. +90)
export const COMPOUND_HALF_D = 60; // 120m deep (-60 .. +60)

export const ROAD_WIDTH = 7.0;
export const HALF_ROAD = ROAD_WIDTH / 2; // 3.5m per lane

// Hill ramp constants (NE Quadrant along z = -24)
export const HILL_Z = -24.0;
export const HILL_HALF_W = 2.75; // 5.5m wide
export const HILL_HEIGHT = 2.0;
export const HILL_UP_START = 18.0;
export const HILL_UP_END = 34.0;
export const HILL_DOWN_START = 42.0;
export const HILL_DOWN_END = 58.0;

/**
 * Pure analytical terrain height and slope gradient (dy/dx, dy/dz).
 * Used identically by both physics and 3D hill mesh construction.
 */
export function getTerrainElevation(x: number, z: number): TerrainSample {
  if (
    z < HILL_Z - HILL_HALF_W - 0.6 ||
    z > HILL_Z + HILL_HALF_W + 0.6 ||
    x <= HILL_UP_START ||
    x >= HILL_DOWN_END
  ) {
    return { y: 0, slopeX: 0, slopeZ: 0 };
  }

  if (x < HILL_UP_END) {
    const len = HILL_UP_END - HILL_UP_START;
    const t = (x - HILL_UP_START) / len;
    const y = (HILL_HEIGHT * 0.5) * (1 - Math.cos(Math.PI * t));
    const slopeX = ((HILL_HEIGHT * 0.5) * Math.PI / len) * Math.sin(Math.PI * t);
    return { y, slopeX, slopeZ: 0 };
  }

  if (x <= HILL_DOWN_START) {
    return { y: HILL_HEIGHT, slopeX: 0, slopeZ: 0 };
  }

  const len = HILL_DOWN_END - HILL_DOWN_START;
  const t = (x - HILL_DOWN_START) / len;
  const y = (HILL_HEIGHT * 0.5) * (1 + Math.cos(Math.PI * t));
  const slopeX = -((HILL_HEIGHT * 0.5) * Math.PI / len) * Math.sin(Math.PI * t);
  return { y, slopeX, slopeZ: 0 };
}

/**
 * Generates analytical S-Curve centerline and ±1.80m offset curb polylines.
 * Connects Central EW Road (z = -3.5) to North Perimeter (z = -42.5).
 */
function buildSCurveGeometry(): {
  centerline: Point2D[];
  leftCurb: Point2D[];
  rightCurb: Point2D[];
  poles: PoleCollider[];
} {
  const halfW = 1.80; // 3.60m narrow S-curve corridor
  const R = 7.5;
  const deg105 = (105 * Math.PI) / 180;

  const centerline: Point2D[] = [];
  const leftCurb: Point2D[] = [];
  const rightCurb: Point2D[] = [];

  const pushWithTangent = (cx: number, cz: number, tx: number, tz: number) => {
    // Forward tangent is (tx, tz). Left normal in XZ (looking down +Y) is (tz, -tx)
    // Verify: if forward is North (0, -1), left normal is (-1, 0) (West)!
    const nx = tz;
    const nz = -tx;
    centerline.push({ x: cx, z: cz });
    leftCurb.push({ x: cx + nx * halfW, z: cz + nz * halfW });
    rightCurb.push({ x: cx - nx * halfW, z: cz - nz * halfW });
  };

  // 1. Entry straight North at x = -46, z = -3.5 -> -12.0
  pushWithTangent(-46.0, -3.5, 0, -1);
  pushWithTangent(-46.0, -8.0, 0, -1);

  // 2. Arc 1: center (-38.5, -12.0), theta: pi -> pi + 105 deg (turning right)
  const c1x = -38.5;
  const c1z = -12.0;
  const steps = 28;
  for (let i = 0; i <= steps; i++) {
    const theta = Math.PI + (deg105 * i) / steps;
    const x = c1x + R * Math.cos(theta);
    const z = c1z + R * Math.sin(theta);
    // Tangent d/dtheta = (-sin theta, cos theta)
    const tx = -Math.sin(theta);
    const tz = Math.cos(theta);
    pushWithTangent(x, z, tx, tz);
  }

  // 3. Arc 2: center = c1 + 2R*(cos 285°, sin 285°), phi: 105 deg -> 0 (turning left)
  const endTheta = Math.PI + deg105;
  const c2x = c1x + 2 * R * Math.cos(endTheta);
  const c2z = c1z + 2 * R * Math.sin(endTheta);
  for (let i = 1; i <= steps; i++) {
    const phi = deg105 * (1 - i / steps);
    const x = c2x + R * Math.cos(phi);
    const z = c2z + R * Math.sin(phi);
    // Decreasing phi => tangent = (sin phi, -cos phi)
    const tx = Math.sin(phi);
    const tz = -Math.cos(phi);
    pushWithTangent(x, z, tx, tz);
  }

  // 4. Exit straight North: x = c2x + R, z = c2z -> -42.5
  const exitX = c2x + R;
  pushWithTangent(exitX, -34.0, 0, -1);
  pushWithTangent(exitX, -42.5, 0, -1);

  // Place marker poles at inner & outer apexes along curbs
  const poleIndices = [6, 15, 24, 34, 43, 52];
  const poles: PoleCollider[] = [];
  poleIndices.forEach((idx, i) => {
    const lp = leftCurb[idx];
    const rp = rightCurb[idx];
    if (lp && i % 2 === 0) {
      poles.push({ id: `scurve-pole-l-${i}`, x: lp.x, z: lp.z, radius: 0.08, height: 1.5, zone: 'sCurve' });
    }
    if (rp && i % 2 === 1) {
      poles.push({ id: `scurve-pole-r-${i}`, x: rp.x, z: rp.z, radius: 0.08, height: 1.5, zone: 'sCurve' });
    }
  });

  return { centerline, leftCurb, rightCurb, poles };
}

const sCurveData = buildSCurveGeometry();

export const S_CURVE_CENTERLINE: Point2D[] = sCurveData.centerline;

/**
 * Crank (クランク) Geometry: 4.00m wide 90-degree chicane in SW Quadrant.
 * Entry: x = -48, z: +3.5 -> +18.0
 * Middle: z = +18.0, x: -48.0 -> -34.0
 * Exit: x = -34.0, z: +18.0 -> +42.5
 */
export const CRANK_HALF_W = 2.0;
export const CRANK_CENTERLINE: Point2D[] = [
  { x: -48.0, z: 3.5 },
  { x: -48.0, z: 18.0 },
  { x: -34.0, z: 18.0 },
  { x: -34.0, z: 42.5 },
];

export const CURB_POLYLINES: CurbPolyline[] = [
  // S-Curve curbs
  { id: 'scurve-left', points: sCurveData.leftCurb, height: 0.14, label: 'S-Curve West Curb' },
  { id: 'scurve-right', points: sCurveData.rightCurb, height: 0.14, label: 'S-Curve East Curb' },

  // Crank curbs (West/South boundary and East/North boundary)
  {
    id: 'crank-west-south',
    height: 0.14,
    label: 'Crank West-South Curb',
    points: [
      { x: -50.0, z: 3.5 },
      { x: -50.0, z: 20.0 },
      { x: -36.0, z: 20.0 },
      { x: -36.0, z: 42.5 },
    ],
  },
  {
    id: 'crank-east-north',
    height: 0.14,
    label: 'Crank East-North Curb',
    points: [
      { x: -46.0, z: 3.5 },
      { x: -46.0, z: 16.0 },
      { x: -32.0, z: 16.0 },
      { x: -32.0, z: 42.5 },
    ],
  },

  // Direction Change (方向変換) T-Bay centered at x = 26, z: 27.5 -> 33.7, width 3.70m
  {
    id: 'bay-parking-curb',
    height: 0.14,
    label: 'Direction Change Bay Curb',
    points: [
      { x: 24.15, z: 27.5 },
      { x: 24.15, z: 33.7 },
      { x: 27.85, z: 33.7 },
      { x: 27.85, z: 27.5 },
    ],
  },

  // Parallel Parking (縦列駐車) Pocket x: 45.0 -> 52.2, z: 27.5 -> 30.2
  {
    id: 'parallel-parking-curb',
    height: 0.14,
    label: 'Parallel Parking Curb',
    points: [
      { x: 45.0, z: 27.5 },
      { x: 45.0, z: 30.2 },
      { x: 52.2, z: 30.2 },
      { x: 52.2, z: 27.5 },
    ],
  },

  // Hill Start Ramp Side Curbs (x: 18 -> 58, z = -26.75 & -21.25)
  {
    id: 'hill-north-curb',
    height: 0.16,
    label: 'Hill North Edge',
    points: [
      { x: 18.0, z: -26.75 },
      { x: 58.0, z: -26.75 },
    ],
  },
  {
    id: 'hill-south-curb',
    height: 0.16,
    label: 'Hill South Edge',
    points: [
      { x: 18.0, z: -21.25 },
      { x: 58.0, z: -21.25 },
    ],
  },

  // Outer Perimeter Curb Segments (North, South, West, East straight edges)
  {
    id: 'outer-north',
    height: 0.14,
    points: [
      { x: -62.0, z: -49.5 },
      { x: 62.0, z: -49.5 },
    ],
  },
  {
    id: 'outer-south',
    height: 0.14,
    points: [
      { x: -62.0, z: 49.5 },
      { x: 62.0, z: 49.5 },
    ],
  },
  {
    id: 'outer-west',
    height: 0.14,
    points: [
      { x: -79.5, z: -32.0 },
      { x: -79.5, z: 32.0 },
    ],
  },
  {
    id: 'outer-east',
    height: 0.14,
    points: [
      { x: 79.5, z: -32.0 },
      { x: 79.5, z: 32.0 },
    ],
  },
];

export const POLE_COLLIDERS: PoleCollider[] = [
  ...sCurveData.poles,
  // 4 Crank corner poles set 0.15m outside curb corners
  { id: 'crank-pole-in-1', x: -45.85, z: 15.85, radius: 0.08, height: 1.65, zone: 'crank' },
  { id: 'crank-pole-out-1', x: -50.15, z: 20.15, radius: 0.08, height: 1.65, zone: 'crank' },
  { id: 'crank-pole-in-2', x: -36.15, z: 20.15, radius: 0.08, height: 1.65, zone: 'crank' },
  { id: 'crank-pole-out-2', x: -31.85, z: 15.85, radius: 0.08, height: 1.65, zone: 'crank' },

  // Bay parking corner poles
  { id: 'bay-pole-fl', x: 24.05, z: 27.6, radius: 0.08, height: 1.5, zone: 'bayParking' },
  { id: 'bay-pole-fr', x: 27.95, z: 27.6, radius: 0.08, height: 1.5, zone: 'bayParking' },
  { id: 'bay-pole-rl', x: 24.05, z: 33.8, radius: 0.08, height: 1.5, zone: 'bayParking' },
  { id: 'bay-pole-rr', x: 27.95, z: 33.8, radius: 0.08, height: 1.5, zone: 'bayParking' },

  // Parallel parking corner poles
  { id: 'par-pole-1', x: 44.9, z: 27.6, radius: 0.08, height: 1.5, zone: 'parallelParking' },
  { id: 'par-pole-2', x: 52.3, z: 27.6, radius: 0.08, height: 1.5, zone: 'parallelParking' },
  { id: 'par-pole-3', x: 44.9, z: 30.3, radius: 0.08, height: 1.5, zone: 'parallelParking' },
  { id: 'par-pole-4', x: 52.3, z: 30.3, radius: 0.08, height: 1.5, zone: 'parallelParking' },
];

export const OBSTACLE_COLLIDERS: BoxObstacle[] = [
  // Parked training van obstacle on North 40km/h straight outer (left) lane
  {
    id: 'north-parked-van',
    x: -10.0,
    z: -48.1,
    halfW: 1.9,
    halfL: 0.85,
    height: 1.65,
    kind: 'parkedCar',
  },
  // Clubhouse building south of South Perimeter
  {
    id: 'clubhouse-building',
    x: 0.0,
    z: 56.2,
    halfW: 16.0,
    halfL: 4.5,
    height: 7.2,
    kind: 'building',
  },
];

export const STOP_LINE_ZONES: StopLineZone[] = [
  // Central Signalized Intersection (0, 0) - Left-hand traffic lanes!
  {
    id: 'signal-northbound',
    kind: 'trafficLight',
    axis: 'NS',
    x: -1.75,
    z: 8.5,
    dirX: 0,
    dirZ: -1,
    halfWidth: 1.75,
  },
  {
    id: 'signal-southbound',
    kind: 'trafficLight',
    axis: 'NS',
    x: 1.75,
    z: -8.5,
    dirX: 0,
    dirZ: 1,
    halfWidth: 1.75,
  },
  {
    id: 'signal-eastbound',
    kind: 'trafficLight',
    axis: 'EW',
    x: -8.5,
    z: -1.75,
    dirX: 1,
    dirZ: 0,
    halfWidth: 1.75,
  },
  {
    id: 'signal-westbound',
    kind: 'trafficLight',
    axis: 'EW',
    x: 8.5,
    z: 1.75,
    dirX: -1,
    dirZ: 0,
    halfWidth: 1.75,
  },

  // Railroad Crossing (x = 38, z = 0)
  {
    id: 'railroad-eastbound',
    kind: 'railroad',
    x: 31.5,
    z: -1.75,
    dirX: 1,
    dirZ: 0,
    halfWidth: 1.75,
    railroadTrackX: 38.0,
  },
  {
    id: 'railroad-westbound',
    kind: 'railroad',
    x: 44.5,
    z: 1.75,
    dirX: -1,
    dirZ: 0,
    halfWidth: 1.75,
    railroadTrackX: 38.0,
  },

  // Stop Signs (止まれ)
  {
    id: 'stop-west-t',
    kind: 'stopSign',
    x: -67.5,
    z: 1.75,
    dirX: -1,
    dirZ: 0,
    halfWidth: 1.75,
  },
  {
    id: 'stop-north-t',
    kind: 'stopSign',
    x: -1.75,
    z: -38.5,
    dirX: 0,
    dirZ: -1,
    halfWidth: 1.75,
  },
  {
    id: 'stop-scurve-exit',
    kind: 'stopSign',
    x: -27.12,
    z: -41.5,
    dirX: 0,
    dirZ: -1,
    halfWidth: 1.8,
  },
  {
    id: 'stop-crank-exit',
    kind: 'stopSign',
    x: -34.0,
    z: 41.5,
    dirX: 0,
    dirZ: 1,
    halfWidth: 2.0,
  },
];

export const SPAWN_STATIONS: Record<SpawnStationId, SpawnStation> = {
  startBay: {
    id: 'startBay',
    x: 12.0,
    z: 48.1,
    heading: Math.PI / 2, // Facing West (-X) along south curb
  },
  sCurve: {
    id: 'sCurve',
    x: -46.0,
    z: 0.5,
    heading: 0, // Facing North (-Z) into S-Curve entry
  },
  crank: {
    id: 'crank',
    x: -48.0,
    z: -0.5,
    heading: Math.PI, // Facing South (+Z) into Crank entry
  },
  hillStart: {
    id: 'hillStart',
    x: 10.0,
    z: -24.0,
    heading: -Math.PI / 2, // Facing East (+X) toward Hill ramp
  },
  railroad: {
    id: 'railroad',
    x: 20.0,
    z: -1.75,
    heading: -Math.PI / 2, // Facing East (+X) on left lane toward crossing
  },
  stopSign: {
    id: 'stopSign',
    x: -56.0,
    z: 1.75,
    heading: Math.PI / 2, // Facing West (-X) toward 止まれ
  },
  trafficLight: {
    id: 'trafficLight',
    x: -1.75,
    z: 22.0,
    heading: 0, // Facing North (-Z) toward central signal
  },
  bayParking: {
    id: 'bayParking',
    x: 20.0,
    z: 22.25,
    heading: -Math.PI / 2, // Facing East (+X) beside Bay entrance
  },
  parallelParking: {
    id: 'parallelParking',
    x: 40.0,
    z: 25.75,
    heading: -Math.PI / 2, // Facing East (+X) ahead of pocket
  },
  speedStraight: {
    id: 'speedStraight',
    x: -56.0,
    z: -47.75,
    heading: -Math.PI / 2, // Facing East (+X) on 40km/h north straight
  },
};

export const STATION_ORDER: SpawnStationId[] = [
  'startBay',
  'sCurve',
  'crank',
  'hillStart',
  'railroad',
  'stopSign',
  'trafficLight',
  'bayParking',
  'parallelParking',
  'speedStraight',
];

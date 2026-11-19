export interface Vec2 {
  x: number;
  z: number;
}

/**
 * Unit forward vector on the XZ ground plane for a vehicle facing -Z at heading = 0.
 * Heading increases counter-clockwise from above (matches Three.js rotation.y).
 */
export function forwardVector(heading: number): Vec2 {
  return {
    x: -Math.sin(heading),
    z: -Math.cos(heading),
  };
}

/**
 * Unit right vector on the XZ ground plane (driver's right side).
 */
export function rightVector(heading: number): Vec2 {
  return {
    x: Math.cos(heading),
    z: -Math.sin(heading),
  };
}

/**
 * Wraps an angle in radians into [-Math.PI, Math.PI).
 */
export function normalizeAngle(rad: number): number {
  let a = (rad + Math.PI) % (Math.PI * 2);
  if (a < 0) a += Math.PI * 2;
  return a - Math.PI;
}

/**
 * Transforms a vehicle-local XZ offset (localX > 0 right, localZ < 0 forward)
 * into world XZ coordinates matching Three.js Y-axis rotation.
 */
export function localToWorld(
  originX: number,
  originZ: number,
  heading: number,
  localX: number,
  localZ: number
): Vec2 {
  const cos = Math.cos(heading);
  const sin = Math.sin(heading);
  return {
    x: originX + localX * cos + localZ * sin,
    z: originZ - localX * sin + localZ * cos,
  };
}

export function distanceSq(ax: number, az: number, bx: number, bz: number): number {
  const dx = ax - bx;
  const dz = az - bz;
  return dx * dx + dz * dz;
}

export function distance(ax: number, az: number, bx: number, bz: number): number {
  return Math.hypot(ax - bx, az - bz);
}

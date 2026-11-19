import * as THREE from 'three';
import { distance } from '../core/coordinates';
import { STOP_LINE_ZONES } from '../core/courseLayout';
import type { TrafficSignalController } from '../core/trafficSignals';
import type { BlinkerState, VehicleState } from '../types';

interface AiWaypoint {
  x: number;
  z: number;
  signal?: BlinkerState;
}

interface AiCarAgent {
  group: THREE.Group;
  wheels: THREE.Mesh[];
  brakeLamps: THREE.MeshStandardMaterial[];
  signalLeftLamps: THREE.MeshStandardMaterial[];
  signalRightLamps: THREE.MeshStandardMaterial[];
  waypoints: AiWaypoint[];
  wpIndex: number;
  x: number;
  z: number;
  heading: number;
  speedMs: number;
  maxSpeedMs: number;
  blinker: BlinkerState;
  blinkerTimer: number;
  stopHoldTimer: number;
  lastStoppedZoneId: string;
}

interface PedestrianAgent {
  group: THREE.Group;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
  axis: 'NS' | 'EW'; // Axis of traffic that crosses over this crosswalk
  startX: number;
  startZ: number;
  endX: number;
  endZ: number;
  progress: number; // 0..1
  direction: 1 | -1;
  waitTimer: number;
  walkPhase: number;
  x: number;
  z: number;
  isOnCrosswalk: boolean;
}

export interface TrafficSafetyReport {
  pedestrianDanger: boolean;
  pedestrianLabelJa?: string;
  pedestrianLabelEn?: string;
  trafficCollision: boolean;
  cyclistDanger?: boolean;
  cyclistLabelJa?: string;
  cyclistLabelEn?: string;
  noParkingViolation?: boolean;
  noParkingLabelJa?: string;
  noParkingLabelEn?: string;
}

function sampleCornerArc(
  cx: number,
  cz: number,
  radius: number,
  startTheta: number,
  endTheta: number,
  steps: number,
  signal: BlinkerState = 'off'
): AiWaypoint[] {
  const pts: AiWaypoint[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const th = startTheta + (endTheta - startTheta) * t;
    // Note: in XZ plane with RingGeometry rotated x = -PI/2, world X = cx + R*cos(th), world Z = cz - R*sin(th)
    pts.push({
      x: cx + radius * Math.cos(th),
      z: cz - radius * Math.sin(th),
      signal: i < steps ? signal : 'off',
    });
  }
  return pts;
}

export class TrafficAndPedestrians {
  public readonly root = new THREE.Group();
  private aiCars: AiCarAgent[] = [];
  private pedestrians: PedestrianAgent[] = [];

  constructor(parent: THREE.Group) {
    parent.add(this.root);
    this.buildAiCars();
    this.buildPedestrians();
  }

  private buildAiCars(): void {
    const colors = [0x2563eb, 0xf59e0b, 0x0f766e];

    // 1. Outer Clockwise Loop (Left-hand lane center offset = +1.75m outward from R=14 centerline => R_outer = 15.75m)
    // Also smoothly changes to right lane (z = -44.25) with Right/Left blinkers around the parked obstacle van at (-10, -48.1)!
    const outerLoop: AiWaypoint[] = [
      { x: -58, z: -47.75 },
      { x: -32, z: -47.75 },
      // Signal right 3s before passing parked van at (-10, -48.1)
      { x: -25, z: -47.75, signal: 'right' },
      { x: -18, z: -44.25, signal: 'right' },
      { x: -10, z: -44.25 },
      { x: -2, z: -44.25, signal: 'left' },
      { x: 6, z: -47.75, signal: 'left' },
      { x: 32, z: -47.75 },
      { x: 56, z: -47.75 },
      // NE corner arc (center 62, -32, R = 15.75, theta: PI/2 -> 0)
      ...sampleCornerArc(62, -32, 15.75, Math.PI / 2, 0, 8),
      { x: 77.75, z: -16 },
      { x: 77.75, z: 16 },
      // SE corner arc (center 62, 32, R = 15.75, theta: 0 -> -PI/2)
      ...sampleCornerArc(62, 32, 15.75, 0, -Math.PI / 2, 8),
      { x: 40, z: 47.75 },
      { x: 22, z: 47.75, signal: 'right' },
      // Pass around Start Bay 1 (12, 48.1) in the inner lane (z = 44.25) so AI never hits player parked at Start Bay!
      { x: 15, z: 44.25, signal: 'right' },
      { x: 4, z: 44.25, signal: 'left' },
      { x: -4, z: 47.75 },
      { x: -35, z: 47.75 },
      // SW corner arc (center -62, 32, R = 15.75, theta: -PI/2 -> -PI)
      ...sampleCornerArc(-62, 32, 15.75, -Math.PI / 2, -Math.PI, 8),
      { x: -77.75, z: 16 },
      { x: -77.75, z: -16 },
      // NW corner arc (center -62, -32, R = 15.75, theta: PI -> PI/2)
      ...sampleCornerArc(-62, -32, 15.75, Math.PI, Math.PI / 2, 8),
    ];

    // 2. Inner Counter-Clockwise Loop (Left-hand lane center offset = -1.75m inward from R=14 centerline => R_inner = 12.25m)
    const innerLoop: AiWaypoint[] = [
      { x: -45, z: 44.25 },
      { x: 0, z: 44.25 },
      { x: 45, z: 44.25 },
      // SE corner arc (center 62, 32, R = 12.25, theta: -PI/2 -> 0)
      ...sampleCornerArc(62, 32, 12.25, -Math.PI / 2, 0, 8),
      { x: 74.25, z: 16 },
      { x: 74.25, z: -16 },
      // NE corner arc (center 62, -32, R = 12.25, theta: 0 -> PI/2)
      ...sampleCornerArc(62, -32, 12.25, 0, Math.PI / 2, 8),
      { x: 45, z: -44.25 },
      { x: 0, z: -44.25 },
      { x: -45, z: -44.25 },
      // NW corner arc (center -62, -32, R = 12.25, theta: PI/2 -> PI)
      ...sampleCornerArc(-62, -32, 12.25, Math.PI / 2, Math.PI, 8),
      { x: -74.25, z: -16 },
      { x: -74.25, z: 16 },
      // SW corner arc (center -62, 32, R = 12.25, theta: -PI -> -PI/2)
      ...sampleCornerArc(-62, 32, 12.25, -Math.PI, -Math.PI / 2, 8),
    ];

    // 3. Central Cross & West Half-Loop (strictly on Central NS road x = -1.75, North road z = -44.25, West road x = -74.25, South road z = 44.25)
    // Includes 90-degree intersection turns with left turn signals, stop sign at (x = -1.75, z = -38.5), and traffic signal at (x = -1.75, z = 8.5)!
    const centralCircuit: AiWaypoint[] = [
      // Driving North along Central NS Avenue left lane (x = -1.75)
      { x: -1.75, z: 36.0 },
      { x: -1.75, z: 22.0 },
      { x: -1.75, z: 10.5 }, // Before central traffic signal stop line (z = 8.5)
      { x: -1.75, z: 0.0 },
      { x: -1.75, z: -24.0, signal: 'left' },
      { x: -1.75, z: -36.5, signal: 'left' }, // Approaches stop-north-t (止まれ at z = -38.5)
      { x: -1.75, z: -41.5, signal: 'left' },
      // Smooth 90-deg Left turn onto North Perimeter Westbound left lane (z = -44.25)
      { x: -3.2, z: -43.5, signal: 'left' },
      { x: -6.0, z: -44.25 },
      { x: -32.0, z: -44.25 },
      { x: -56.0, z: -44.25 },
      // NW corner arc (center -62, -32, R = 12.25, theta: PI/2 -> PI)
      ...sampleCornerArc(-62, -32, 12.25, Math.PI / 2, Math.PI, 8),
      { x: -74.25, z: -16.0 },
      { x: -74.25, z: 16.0 },
      // SW corner arc (center -62, 32, R = 12.25, theta: -PI -> -PI/2)
      ...sampleCornerArc(-62, 32, 12.25, -Math.PI, -Math.PI / 2, 8),
      { x: -45.0, z: 44.25 },
      { x: -18.0, z: 44.25, signal: 'left' },
      { x: -6.0, z: 44.25, signal: 'left' },
      // Smooth 90-deg Left turn onto Central NS Avenue Northbound left lane (x = -1.75)
      { x: -2.6, z: 43.0, signal: 'left' },
      { x: -1.75, z: 40.0 },
    ];

    const loops = [outerLoop, innerLoop, centralCircuit];

    for (let i = 0; i < loops.length; i++) {
      const wps = loops[i];
      const start = wps[0];
      const next = wps[1];
      const { group, wheels, brakeLamps, signalLeftLamps, signalRightLamps } = this.createTrainingSedanMesh(
        colors[i % colors.length],
        i + 2
      );
      const heading = Math.atan2(-(next.x - start.x), -(next.z - start.z));
      group.position.set(start.x, 0, start.z);
      group.rotation.y = heading;
      this.root.add(group);

      this.aiCars.push({
        group,
        wheels,
        brakeLamps,
        signalLeftLamps,
        signalRightLamps,
        waypoints: wps,
        wpIndex: 1,
        x: start.x,
        z: start.z,
        heading,
        speedMs: 5.0,
        maxSpeedMs: 6.0 + (i % 2) * 0.6,
        blinker: 'off',
        blinkerTimer: 0,
        stopHoldTimer: 0,
        lastStoppedZoneId: '',
      });
    }
  }

  private createTrainingSedanMesh(colorHex: number, carNumber: number): {
    group: THREE.Group;
    wheels: THREE.Mesh[];
    brakeLamps: THREE.MeshStandardMaterial[];
    signalLeftLamps: THREE.MeshStandardMaterial[];
    signalRightLamps: THREE.MeshStandardMaterial[];
  } {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.32, metalness: 0.2 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.15, metalness: 0.5 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.8 });
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xfef08a,
      emissiveIntensity: 0.9,
    });
    const brakeMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626,
      emissive: 0xdc2626,
      emissiveIntensity: 0.25,
    });
    const sigLeftMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.05,
    });
    const sigRightMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.05,
    });

    // Lower body (-Z is forward!)
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.66, 0.56, 4.25), bodyMat);
    chassis.position.y = 0.54;
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    group.add(chassis);

    // Cabin greenhouse
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.48, 2.05), bodyMat);
    cabin.position.set(0, 1.02, 0.15);
    cabin.castShadow = true;
    group.add(cabin);

    const glass = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.38, 1.88), glassMat);
    glass.position.set(0, 1.03, 0.15);
    group.add(glass);

    // Driving School Roof Sign (教習車三角屋根プレート)
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 256;
    signCanvas.height = 128;
    const ctx = signCanvas.getContext('2d')!;
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(0, 0, 256, 128);
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 248, 120);
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 46px "Noto Sans JP", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`教習車 ${carNumber}`, 128, 66);
    const roofTex = new THREE.CanvasTexture(signCanvas);
    roofTex.colorSpace = THREE.SRGBColorSpace;
    const roofSign = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 0.25, 0.18),
      new THREE.MeshBasicMaterial({ map: roofTex })
    );
    roofSign.position.set(0, 1.38, 0.05);
    group.add(roofSign);

    // Headlights (-Z front) & Brake lights (+Z rear)
    for (const sx of [-0.54, 0.54]) {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.12, 0.06), headMat);
      hl.position.set(sx, 0.58, -2.13);
      group.add(hl);

      const bl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.06), brakeMat);
      bl.position.set(sx, 0.6, 2.13);
      group.add(bl);
    }

    // Turn Signal Lamps (-X is Left, +X is Right when facing -Z!)
    for (const zPos of [-2.13, 2.13]) {
      const sigL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.11, 0.07), sigLeftMat);
      sigL.position.set(-0.75, 0.58, zPos);
      group.add(sigL);

      const sigR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.11, 0.07), sigRightMat);
      sigR.position.set(0.75, 0.58, zPos);
      group.add(sigR);
    }

    const wheels: THREE.Mesh[] = [];
    const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16);
    wheelGeo.rotateZ(Math.PI / 2);
    for (const [wx, wz] of [
      [-0.78, -1.3],
      [0.78, -1.3],
      [-0.78, 1.3],
      [0.78, 1.3],
    ]) {
      const w = new THREE.Mesh(wheelGeo, darkMat);
      w.position.set(wx, 0.3, wz);
      group.add(w);
      wheels.push(w);
    }

    return {
      group,
      wheels,
      brakeLamps: [brakeMat],
      signalLeftLamps: [sigLeftMat],
      signalRightLamps: [sigRightMat],
    };
  }

  private buildPedestrians(): void {
    // 6 Pedestrians crossing at Central Intersection crosswalks and perimeter crosswalks
    const specs: {
      axis: 'NS' | 'EW';
      startX: number;
      startZ: number;
      endX: number;
      endZ: number;
      shirtColor: number;
      initialProgress: number;
    }[] = [
      // North crosswalk at central intersection (z = -6.2, x: -4.4 .. +4.4)
      { axis: 'NS', startX: -4.5, startZ: -6.2, endX: 4.5, endZ: -6.2, shirtColor: 0xef4444, initialProgress: 0.2 },
      // South crosswalk at central intersection (z = +6.2, x: +4.5 .. -4.5)
      { axis: 'NS', startX: 4.5, startZ: 6.2, endX: -4.5, endZ: 6.2, shirtColor: 0x3b82f6, initialProgress: 0.65 },
      // West crosswalk at central intersection (x = -6.2, z: -4.5 .. +4.5)
      { axis: 'EW', startX: -6.2, startZ: -4.5, endX: -6.2, endZ: 4.5, shirtColor: 0x10b981, initialProgress: 0.35 },
      // East crosswalk at central intersection (x = +6.2, z: +4.5 .. -4.5)
      { axis: 'EW', startX: 6.2, startZ: 4.5, endX: 6.2, endZ: -4.5, shirtColor: 0xf59e0b, initialProgress: 0.8 },
      // Unsignalized pedestrian crosswalk near SE Parking Avenue entrance (x = 12, z: 20.0 .. 28.0)
      { axis: 'EW', startX: 12.0, startZ: 19.8, endX: 12.0, endZ: 28.2, shirtColor: 0xa855f7, initialProgress: 0.15 },
      // Unsignalized pedestrian crosswalk on South road near Start Bay (x = -22, z: 42.0 .. 50.0)
      { axis: 'EW', startX: -22.0, startZ: 41.8, endX: -22.0, endZ: 50.2, shirtColor: 0xec4899, initialProgress: 0.5 },
    ];

    for (const sp of specs) {
      const { group, leftLeg, rightLeg, leftArm, rightArm } = this.createPedestrianMesh(sp.shirtColor);
      const x = THREE.MathUtils.lerp(sp.startX, sp.endX, sp.initialProgress);
      const z = THREE.MathUtils.lerp(sp.startZ, sp.endZ, sp.initialProgress);
      group.position.set(x, 0, z);
      this.root.add(group);

      this.pedestrians.push({
        group,
        leftLeg,
        rightLeg,
        leftArm,
        rightArm,
        axis: sp.axis,
        startX: sp.startX,
        startZ: sp.startZ,
        endX: sp.endX,
        endZ: sp.endZ,
        progress: sp.initialProgress,
        direction: 1,
        waitTimer: 0,
        walkPhase: sp.initialProgress * 10,
        x,
        z,
        isOnCrosswalk: true,
      });
    }
  }

  private createPedestrianMesh(shirtHex: number): {
    group: THREE.Group;
    leftLeg: THREE.Group;
    rightLeg: THREE.Group;
    leftArm: THREE.Group;
    rightArm: THREE.Group;
  } {
    const group = new THREE.Group();
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf1c27d, roughness: 0.6 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtHex, roughness: 0.65 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.8 });

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 10), skinMat);
    head.position.y = 1.56;
    head.castShadow = true;
    group.add(head);

    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(0.135, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55),
      hairMat
    );
    hair.position.y = 1.58;
    group.add(hair);

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.52, 0.18), shirtMat);
    torso.position.y = 1.15;
    torso.castShadow = true;
    group.add(torso);

    const makeLimb = (w: number, h: number, d: number, mat: THREE.Material, px: number, py: number) => {
      const pivot = new THREE.Group();
      pivot.position.set(px, py, 0);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      mesh.position.y = -h * 0.5;
      mesh.castShadow = true;
      pivot.add(mesh);
      group.add(pivot);
      return pivot;
    };

    const leftLeg = makeLimb(0.12, 0.78, 0.13, pantsMat, -0.09, 0.86);
    const rightLeg = makeLimb(0.12, 0.78, 0.13, pantsMat, 0.09, 0.86);
    const leftArm = makeLimb(0.09, 0.54, 0.1, shirtMat, -0.22, 1.38);
    const rightArm = makeLimb(0.09, 0.54, 0.1, shirtMat, 0.22, 1.38);

    return { group, leftLeg, rightLeg, leftArm, rightArm };
  }

  update(dt: number, playerState: VehicleState, signals: TrafficSignalController): TrafficSafetyReport {
    let pedestrianDanger = false;
    let pedestrianLabelJa: string | undefined;
    let pedestrianLabelEn: string | undefined;
    let trafficCollision = false;

    const railState = signals.getRailroadState();

    // 1. Update Pedestrians
    for (const ped of this.pedestrians) {
      if (ped.waitTimer > 0) {
        ped.waitTimer -= dt;
        ped.isOnCrosswalk = false;
        ped.leftLeg.rotation.x = 0;
        ped.rightLeg.rotation.x = 0;
        ped.leftArm.rotation.x = 0;
        ped.rightArm.rotation.x = 0;
        continue;
      }

      // At central intersection crosswalks (within 8m of 0,0), wait at curb if perpendicular car traffic has GREEN
      const atCurb = ped.progress <= 0.06 || ped.progress >= 0.94;
      const isCentralCrosswalk = Math.hypot(ped.startX, ped.startZ) < 10;
      if (atCurb && isCentralCrosswalk) {
        const trafficLight = signals.getLightForAxis(ped.axis);
        if (trafficLight === 'green' || trafficLight === 'yellow') {
          ped.isOnCrosswalk = false;
          continue;
        }
      }

      const spanLen = Math.hypot(ped.endX - ped.startX, ped.endZ - ped.startZ) || 8.0;
      const walkSpeed = 1.35; // m/s
      ped.progress += (ped.direction * (walkSpeed * dt)) / spanLen;
      ped.walkPhase += dt * 7.5;

      if (ped.progress >= 1) {
        ped.progress = 1;
        ped.direction = -1;
        ped.waitTimer = 2.2;
      } else if (ped.progress <= 0) {
        ped.progress = 0;
        ped.direction = 1;
        ped.waitTimer = 2.2;
      }

      ped.x = THREE.MathUtils.lerp(ped.startX, ped.endX, ped.progress);
      ped.z = THREE.MathUtils.lerp(ped.startZ, ped.endZ, ped.progress);
      ped.isOnCrosswalk = ped.progress > 0.07 && ped.progress < 0.93;

      const dx = (ped.endX - ped.startX) * ped.direction;
      const dz = (ped.endZ - ped.startZ) * ped.direction;
      ped.group.position.set(ped.x, 0, ped.z);
      ped.group.rotation.y = Math.atan2(-dx, -dz);

      const swing = Math.sin(ped.walkPhase) * 0.55;
      ped.leftLeg.rotation.x = swing;
      ped.rightLeg.rotation.x = -swing;
      ped.leftArm.rotation.x = -swing * 0.7;
      ped.rightArm.rotation.x = swing * 0.7;

      // Check player car proximity to crossing pedestrian (Road Traffic Act Art. 38: 歩行者妨害 / 歩行者保護違反)
      const dToPlayer = distance(playerState.x, playerState.z, ped.x, ped.z);
      if (ped.isOnCrosswalk && dToPlayer < 3.4 && Math.abs(playerState.speedMs) > 0.45) {
        const toPedX = ped.x - playerState.x;
        const toPedZ = ped.z - playerState.z;
        const moveSign = playerState.speedMs >= 0 ? 1 : -1;
        const fwdX = -Math.sin(playerState.heading) * moveSign;
        const fwdZ = -Math.cos(playerState.heading) * moveSign;
        const dot = (toPedX * fwdX + toPedZ * fwdZ) / Math.max(0.1, dToPlayer);
        if (dot > 0.15 || dToPlayer < 1.9) {
          pedestrianDanger = true;
          pedestrianLabelJa = '横断歩道上の歩行者の直前を通過しようとしました（道路交通法第38条：歩行者優先義務違反）';
          pedestrianLabelEn =
            'Failed to stop and yield to a pedestrian crossing the zebra crosswalk (Road Traffic Act Art. 38 violation)';
        }
      }
    }

    // 2. Update AI Training Cars (Strict Road Lane Following + Full Japanese Traffic Rules!)
    for (let idx = 0; idx < this.aiCars.length; idx++) {
      const car = this.aiCars[idx];
      let target = car.waypoints[car.wpIndex];
      let dx = target.x - car.x;
      let dz = target.z - car.z;
      let distToWp = Math.hypot(dx, dz);

      if (distToWp < 2.1) {
        car.wpIndex = (car.wpIndex + 1) % car.waypoints.length;
        target = car.waypoints[car.wpIndex];
        dx = target.x - car.x;
        dz = target.z - car.z;
        distToWp = Math.hypot(dx, dz);
      }

      // Activate blinker when approaching a turn or obstacle lane-change waypoint
      const prevWp = car.waypoints[(car.wpIndex - 1 + car.waypoints.length) % car.waypoints.length];
      car.blinker = target.signal ?? prevWp.signal ?? 'off';
      car.blinkerTimer += dt;
      const blinkerLit = car.blinker !== 'off' && Math.floor(car.blinkerTimer * 2.6) % 2 === 0;

      // Crisp steering to stay centered in the 3.5m asphalt lane
      const desiredHeading = Math.atan2(-dx, -dz);
      let headingDiff = desiredHeading - car.heading;
      while (headingDiff > Math.PI) headingDiff -= Math.PI * 2;
      while (headingDiff < -Math.PI) headingDiff += Math.PI * 2;
      car.heading += Math.sign(headingDiff) * Math.min(Math.abs(headingDiff), 4.6 * dt);

      const fwdX = -Math.sin(car.heading);
      const fwdZ = -Math.cos(car.heading);

      let shouldStop = false;

      // Rule A: Mandatory 2-Second Complete Stop at 止まれ Stop Signs & Railroad Crossings, plus Red/Yellow Traffic Lights
      if (car.stopHoldTimer > 0) {
        car.stopHoldTimer -= dt;
        shouldStop = true;
      } else {
        for (const zone of STOP_LINE_ZONES) {
          const zdx = car.x - zone.x;
          const zdz = car.z - zone.z;
          const signedDist = zdx * zone.dirX + zdz * zone.dirZ; // negative = before stop line
          const perpX = -zone.dirZ;
          const perpZ = zone.dirX;
          const lateralDist = Math.abs(zdx * perpX + zdz * perpZ);
          const fwdDot = fwdX * zone.dirX + fwdZ * zone.dirZ;

          if (lateralDist <= zone.halfWidth + 0.8 && fwdDot > 0.7 && signedDist >= -6.5 && signedDist <= -0.2) {
            if (zone.kind === 'trafficLight' && zone.axis) {
              const light = signals.getLightForAxis(zone.axis);
              if (light === 'red' || light === 'yellow') {
                shouldStop = true;
              }
            } else if (zone.kind === 'stopSign') {
              if (car.lastStoppedZoneId !== zone.id) {
                shouldStop = true;
                if (car.speedMs < 0.15) {
                  car.stopHoldTimer = 1.8; // Full 2-second 止まれ stop!
                  car.lastStoppedZoneId = zone.id;
                }
              }
            } else if (zone.kind === 'railroad') {
              if (railState.isWarningActive) {
                shouldStop = true;
              } else if (car.lastStoppedZoneId !== zone.id) {
                shouldStop = true;
                if (car.speedMs < 0.15) {
                  car.stopHoldTimer = 1.8;
                  car.lastStoppedZoneId = zone.id;
                }
              }
            }
          } else if (car.lastStoppedZoneId === zone.id && Math.hypot(zdx, zdz) > 10.0) {
            car.lastStoppedZoneId = '';
          }
        }
      }

      // Rule B: Stop behind the player car if player is ahead within 10m
      const dPlayer = distance(car.x, car.z, playerState.x, playerState.z);
      if (dPlayer < 10.0) {
        const dot = ((playerState.x - car.x) * fwdX + (playerState.z - car.z) * fwdZ) / Math.max(0.1, dPlayer);
        if (dot > 0.45) shouldStop = true;
      }

      // Rule C: Stop behind other AI training cars
      for (let j = 0; j < this.aiCars.length; j++) {
        if (j === idx) continue;
        const other = this.aiCars[j];
        const dOther = distance(car.x, car.z, other.x, other.z);
        if (dOther < 8.5) {
          const dot = ((other.x - car.x) * fwdX + (other.z - car.z) * fwdZ) / Math.max(0.1, dOther);
          if (dot > 0.5) shouldStop = true;
        }
      }

      // Rule D: Stop for crossing pedestrians at any zebra crosswalk
      for (const ped of this.pedestrians) {
        if (!ped.isOnCrosswalk && ped.progress > 0.08 && ped.progress < 0.92) continue;
        const dPed = distance(car.x, car.z, ped.x, ped.z);
        if (dPed < 7.5) {
          const dot = ((ped.x - car.x) * fwdX + (ped.z - car.z) * fwdZ) / Math.max(0.1, dPed);
          if (dot > 0.35) shouldStop = true;
        }
      }

      // Collision check between moving player car and AI car
      if (dPlayer < 2.35 && Math.abs(playerState.speedMs) > 0.35) {
        trafficCollision = true;
      }

      // Slow down smoothly on curves (徐行 on corners!)
      const isTurning = Math.abs(headingDiff) > 0.14;
      const targetSpeed = shouldStop ? 0 : isTurning ? 3.8 : car.maxSpeedMs;
      const accel = shouldStop ? 8.5 : 3.2;
      if (car.speedMs < targetSpeed) {
        car.speedMs = Math.min(targetSpeed, car.speedMs + accel * dt);
      } else {
        car.speedMs = Math.max(targetSpeed, car.speedMs - accel * dt);
      }

      car.x += fwdX * car.speedMs * dt;
      car.z += fwdZ * car.speedMs * dt;
      car.group.position.set(car.x, 0, car.z);
      car.group.rotation.y = car.heading;

      for (const w of car.wheels) {
        w.rotation.x -= (car.speedMs * dt) / 0.3;
      }
      for (const bm of car.brakeLamps) {
        bm.emissiveIntensity = shouldStop || car.speedMs < 0.3 ? 2.4 : 0.25;
      }
      for (const lm of car.signalLeftLamps) {
        lm.emissiveIntensity = blinkerLit && (car.blinker === 'left' || car.blinker === 'hazard') ? 2.6 : 0.05;
      }
      for (const rm of car.signalRightLamps) {
        rm.emissiveIntensity = blinkerLit && (car.blinker === 'right' || car.blinker === 'hazard') ? 2.6 : 0.05;
      }
    }

    return {
      pedestrianDanger,
      pedestrianLabelJa,
      pedestrianLabelEn,
      trafficCollision,
    };
  }
}

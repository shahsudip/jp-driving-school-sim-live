import * as THREE from 'three';
import { distance } from '../core/coordinates';
import type { TrafficSignalController } from '../core/trafficSignals';
import type { VehicleState } from '../types';

interface AiCarAgent {
  group: THREE.Group;
  wheels: THREE.Mesh[];
  brakeLamps: THREE.MeshStandardMaterial[];
  waypoints: { x: number; z: number }[];
  wpIndex: number;
  x: number;
  z: number;
  heading: number;
  speedMs: number;
  maxSpeedMs: number;
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
    // 3 training cars driving in the outer clockwise / counter-clockwise keep-left lanes
    const loops: { x: number; z: number }[][] = [
      // Outer keep-left clockwise loop (left lane is outer perimeter ~47.75 / 77.75)
      [
        { x: -45, z: -47.75 },
        { x: 55, z: -47.75 },
        { x: 77.75, z: -28 },
        { x: 77.75, z: 28 },
        { x: 55, z: 47.75 },
        { x: -55, z: 47.75 },
        { x: -77.75, z: 28 },
        { x: -77.75, z: -28 },
      ],
      // Inner counter-clockwise loop (left lane is ~44.25 / 74.25)
      [
        { x: 45, z: 44.25 },
        { x: 74.25, z: 25 },
        { x: 74.25, z: -25 },
        { x: 45, z: -44.25 },
        { x: -45, z: -44.25 },
        { x: -74.25, z: -25 },
        { x: -74.25, z: 25 },
        { x: -45, z: 44.25 },
      ],
      // Central & South training circuit
      [
        { x: -1.75, z: -34 },
        { x: -1.75, z: 34 },
        { x: -45, z: 44.25 },
        { x: -74.25, z: 24 },
        { x: -74.25, z: -24 },
        { x: -45, z: -44.25 },
      ],
    ];

    for (let i = 0; i < loops.length; i++) {
      const wps = loops[i];
      const start = wps[0];
      const next = wps[1];
      const { group, wheels, brakeLamps } = this.createTrainingSedanMesh(colors[i % colors.length], i + 2);
      const heading = Math.atan2(-(next.x - start.x), -(next.z - start.z));
      group.position.set(start.x, 0, start.z);
      group.rotation.y = heading;
      this.root.add(group);

      this.aiCars.push({
        group,
        wheels,
        brakeLamps,
        waypoints: wps,
        wpIndex: 1,
        x: start.x,
        z: start.z,
        heading,
        speedMs: 5.5,
        maxSpeedMs: 6.2 + (i % 2) * 0.8,
      });
    }
  }

  private createTrainingSedanMesh(colorHex: number, carNumber: number): {
    group: THREE.Group;
    wheels: THREE.Mesh[];
    brakeLamps: THREE.MeshStandardMaterial[];
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
    for (const sx of [-0.56, 0.56]) {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.06), headMat);
      hl.position.set(sx, 0.58, -2.13);
      group.add(hl);

      const bl = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.06), brakeMat);
      bl.position.set(sx, 0.6, 2.13);
      group.add(bl);
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

    return { group, wheels, brakeLamps: [brakeMat] };
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

    // Head
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

    // Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.52, 0.18), shirtMat);
    torso.position.y = 1.15;
    torso.castShadow = true;
    group.add(torso);

    // Legs
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
        // Verify pedestrian is ahead of or beside the moving player car
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

    // 2. Update AI Training Cars
    for (const car of this.aiCars) {
      const target = car.waypoints[car.wpIndex];
      const dx = target.x - car.x;
      const dz = target.z - car.z;
      const distToWp = Math.hypot(dx, dz);

      if (distToWp < 3.5) {
        car.wpIndex = (car.wpIndex + 1) % car.waypoints.length;
      }

      const desiredHeading = Math.atan2(-dx, -dz);
      let headingDiff = desiredHeading - car.heading;
      while (headingDiff > Math.PI) headingDiff -= Math.PI * 2;
      while (headingDiff < -Math.PI) headingDiff += Math.PI * 2;
      car.heading += Math.sign(headingDiff) * Math.min(Math.abs(headingDiff), 2.4 * dt);

      // Check if AI car should stop for player car, pedestrian, or red signal
      let shouldStop = false;
      const fwdX = -Math.sin(car.heading);
      const fwdZ = -Math.cos(car.heading);

      // Stop behind player if player is in front within 8m
      const dPlayer = distance(car.x, car.z, playerState.x, playerState.z);
      if (dPlayer < 8.5) {
        const dot = ((playerState.x - car.x) * fwdX + (playerState.z - car.z) * fwdZ) / Math.max(0.1, dPlayer);
        if (dot > 0.55) shouldStop = true;
      }
      // Collision check between player and AI training car
      if (dPlayer < 2.45 && Math.abs(playerState.speedMs) > 0.25) {
        trafficCollision = true;
      }

      // Stop for central red signal
      if (Math.abs(car.x) < 12 && Math.abs(car.z) < 12) {
        const axis = Math.abs(fwdZ) > Math.abs(fwdX) ? 'NS' : 'EW';
        if (signals.getLightForAxis(axis) !== 'green') {
          shouldStop = true;
        }
      }

      // Stop for crossing pedestrians
      for (const ped of this.pedestrians) {
        if (!ped.isOnCrosswalk) continue;
        const dPed = distance(car.x, car.z, ped.x, ped.z);
        if (dPed < 6.0) {
          const dot = ((ped.x - car.x) * fwdX + (ped.z - car.z) * fwdZ) / Math.max(0.1, dPed);
          if (dot > 0.4) shouldStop = true;
        }
      }

      const targetSpeed = shouldStop ? 0 : car.maxSpeedMs;
      const accel = shouldStop ? 7.5 : 2.8;
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
    }

    return {
      pedestrianDanger,
      pedestrianLabelJa,
      pedestrianLabelEn,
      trafficCollision,
    };
  }
}

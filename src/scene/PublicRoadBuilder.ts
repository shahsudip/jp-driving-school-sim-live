import * as THREE from 'three';
import { distance } from '../core/coordinates';
import type { TrafficSignalController } from '../core/trafficSignals';
import type { TrafficSafetyReport } from './TrafficAndPedestrians';
import type { VehicleState } from '../types';

interface CyclistAgent {
  group: THREE.Group;
  frontWheel: THREE.Mesh;
  rearWheel: THREE.Mesh;
  leftLeg: THREE.Group;
  rightLeg: THREE.Group;
  waypoints: { x: number; z: number }[];
  wpIndex: number;
  x: number;
  z: number;
  heading: number;
  speedMs: number;
  pedalPhase: number;
}

interface ParkedTruckBox {
  id: string;
  x: number;
  z: number;
  halfW: number;
  halfL: number;
  hazardMats: THREE.MeshStandardMaterial[];
}

interface ProhibitedParkingZone {
  id: string;
  x: number;
  z: number;
  halfW: number;
  halfD: number;
  labelJa: string;
  labelEn: string;
}

export class PublicRoadBuilder {
  public readonly root = new THREE.Group();
  private cyclists: CyclistAgent[] = [];
  private parkedTrucks: ParkedTruckBox[] = [];
  private noParkingZones: ProhibitedParkingZone[] = [];
  private stopZoneHoldTimer = 0;
  private hazardTimer = 0;

  // Legal target pull-over bay on East Avenue Northbound left curb (x = 95.8, z = -10, length = 10m)
  public readonly legalPullOverBay = {
    x: 95.8,
    z: -10.0,
    halfW: 1.9,
    halfD: 5.2,
  };
  public legalPullOverCompleted = false;

  constructor(scene: THREE.Scene) {
    this.root.visible = false;
    scene.add(this.root);

    this.buildCityGroundAndRoads();
    this.buildCityMarkingsAndZones();
    this.buildParkedDeliveryTrucks();
    this.buildCyclists();
    this.buildCityBuildingsAndStreetFurniture();
  }

  setVisible(visible: boolean): void {
    this.root.visible = visible;
    if (visible) {
      this.legalPullOverCompleted = false;
      this.stopZoneHoldTimer = 0;
    }
  }

  isVisible(): boolean {
    return this.root.visible;
  }

  getStartPose(): { x: number; z: number; heading: number } {
    // Spawn on South 4-lane Boulevard Eastbound outer-left lane (z = 65.25, x = -65, facing East = -Math.PI / 2)
    return {
      x: -65.0,
      z: 65.25,
      heading: -Math.PI / 2,
    };
  }

  private buildCityGroundAndRoads(): void {
    // Urban concrete & park turf ground (280m x 200m)
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(280, 200),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.95 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    this.root.add(ground);

    // Inner city park grass block
    const parkGrass = new THREE.Mesh(
      new THREE.PlaneGeometry(166, 108),
      new THREE.MeshStandardMaterial({ color: 0x4d7c43, roughness: 0.92 })
    );
    parkGrass.rotation.x = -Math.PI / 2;
    parkGrass.position.y = 0.004;
    parkGrass.receiveShadow = true;
    this.root.add(parkGrass);

    const asphaltMat = new THREE.MeshStandardMaterial({ color: 0x2e343b, roughness: 0.85 });
    const bikeLaneMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.8 });

    const addRoad = (cx: number, cz: number, w: number, d: number, y = 0.01, mat = asphaltMat) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(cx, y, cz);
      m.receiveShadow = true;
      this.root.add(m);
    };

    // 4-Lane Divided City Loop (14m wide asphalt = 4 lanes x 3.5m)
    // South Boulevard (z = 60, width = 200, depth = 14 => z: 53..67)
    addRoad(0, 60, 206, 14);
    // North Boulevard (z = -60, width = 200, depth = 14 => z: -67..-53)
    addRoad(0, -60, 206, 14);
    // West Avenue (x = -94, width = 14, depth = 134 => x: -101..-87)
    addRoad(-94, 0, 14, 134);
    // East Avenue (x = 94, width = 14, depth = 134 => x: 87..101)
    addRoad(94, 0, 14, 134);
    // Central NS Cross Street (x = 0, width = 10, depth = 120)
    addRoad(0, 0, 10, 120, 0.011);

    // Blue Bicycle Dedicated Strip (自転車専用通行帯) along the outer left curb (1.1m wide)
    addRoad(0, 66.3, 176, 1.1, 0.015, bikeLaneMat); // South Eastbound left curb
    addRoad(0, -66.3, 176, 1.1, 0.015, bikeLaneMat); // North Westbound left curb
    addRoad(100.3, 0, 1.1, 108, 0.015, bikeLaneMat); // East Northbound left curb
    addRoad(-100.3, 0, 1.1, 108, 0.015, bikeLaneMat); // West Southbound left curb
  }

  private createGroundStencil(
    text: string,
    color: string,
    w: number,
    h: number,
    x: number,
    z: number,
    rotY = 0
  ): THREE.Mesh {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 512, 256);
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 78px "Noto Sans JP", sans-serif';
    ctx.fillText(text, 256, 128);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = rotY;
    mesh.position.set(x, 0.025, z);
    return mesh;
  }

  private buildCityMarkingsAndZones(): void {
    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
    const orangeMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    const redZoneMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 0.34,
      side: THREE.DoubleSide,
    });
    const greenZoneMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.38,
      side: THREE.DoubleSide,
    });

    const addLine = (cx: number, cz: number, w: number, d: number, mat = whiteMat) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(cx, 0.02, cz);
      this.root.add(m);
    };

    // Solid orange center medians on 4-lane roads
    addLine(0, 60, 172, 0.22, orangeMat);
    addLine(0, -60, 172, 0.22, orangeMat);
    addLine(-94, 0, 0.22, 104, orangeMat);
    addLine(94, 0, 0.22, 104, orangeMat);

    // Dashed lane dividers between Lane 1 (curb lane) and Lane 2 (passing lane)
    for (let x = -80; x <= 80; x += 7) {
      addLine(x, 63.5, 3.2, 0.14); // South Eastbound lanes (65.25 & 61.75)
      addLine(x, 56.5, 3.2, 0.14); // South Westbound lanes
      addLine(x, -63.5, 3.2, 0.14); // North Westbound lanes (-65.25 & -61.75)
      addLine(x, -56.5, 3.2, 0.14);
    }
    for (let z = -48; z <= 48; z += 7) {
      addLine(97.5, z, 0.14, 3.2); // East Northbound lanes (99.25 & 95.75)
      addLine(90.5, z, 0.14, 3.2);
      addLine(-97.5, z, 0.14, 3.2); // West Southbound lanes (-99.25 & -95.75)
      addLine(-90.5, z, 0.14, 3.2);
    }

    // Zebra Crosswalks at intersections
    const addCrosswalk = (cx: number, cz: number, horizontal: boolean) => {
      for (let i = -4; i <= 4; i++) {
        if (horizontal) {
          addLine(cx, cz + i * 1.1, 3.2, 0.5);
        } else {
          addLine(cx + i * 1.1, cz, 0.5, 3.2);
        }
      }
    };
    addCrosswalk(85, 60, true);
    addCrosswalk(-85, 60, true);
    addCrosswalk(85, -60, true);
    addCrosswalk(-85, -60, true);
    addCrosswalk(0, 60, true);
    addCrosswalk(0, -60, true);

    // Speed limit stencils on road (50 km/h on South/North Boulevard, 30 km/h School Zone on West Avenue)
    this.root.add(this.createGroundStencil('50', '#ffffff', 3.4, 2.6, -45, 65.25, -Math.PI / 2));
    this.root.add(this.createGroundStencil('50', '#ffffff', 3.4, 2.6, 35, 65.25, -Math.PI / 2));
    this.root.add(this.createGroundStencil('バス優先', '#38bdf8', 5.2, 2.4, 20, -65.25, Math.PI / 2));
    this.root.add(this.createGroundStencil('通学路30', '#fde047', 5.2, 2.4, -99.25, -20, Math.PI));

    // =========================================================================
    // Prohibited Stopping / Parking Zones (赤枠：駐停車禁止・駐車禁止エリア)
    // =========================================================================
    const addProhibitedZone = (
      id: string,
      x: number,
      z: number,
      halfW: number,
      halfD: number,
      stencilText: string,
      rotY: number,
      labelJa: string,
      labelEn: string
    ) => {
      const box = new THREE.Mesh(new THREE.PlaneGeometry(halfW * 2, halfD * 2), redZoneMat);
      box.rotation.x = -Math.PI / 2;
      box.position.set(x, 0.022, z);
      this.root.add(box);
      this.root.add(this.createGroundStencil(stencilText, '#fecaca', halfD * 1.7, halfW * 1.5, x, z, rotY));
      this.noParkingZones.push({ id, x, z, halfW, halfD, labelJa, labelEn });
    };

    // 1. Bus Stop 10m No-Stopping Zone on South Boulevard Eastbound left lane (x = 42, z = 65.25, length = 20m [±10m])
    addProhibitedZone(
      'bus-stop-10m',
      42.0,
      65.25,
      10.0,
      1.75,
      'バス停10m駐停車禁止',
      -Math.PI / 2,
      'バス停留所の標示板から10m以内は「駐停車禁止」です（道路交通法第44条）',
      'Stopped within 10 meters of a Bus Stop Sign (Strict No-Stopping & No-Parking zone under Art. 44)'
    );

    // 2. Fire Hydrant 5m No-Parking Zone on East Avenue Northbound left lane (x = 99.25, z = 22.0, length = 10m [±5m])
    addProhibitedZone(
      'fire-hydrant-5m',
      99.25,
      22.0,
      1.75,
      5.0,
      '消火栓5m駐車禁止',
      0,
      '消火栓から5m以内は「駐車禁止」です（道路交通法第45条）',
      'Parked within 5 meters of a Fire Hydrant (Prohibited under Road Traffic Act Art. 45)'
    );

    // 3. Crosswalk 5m No-Stopping Zone before NE intersection (x = 99.25, z = -48.0, length = 10m)
    addProhibitedZone(
      'crosswalk-5m',
      99.25,
      -48.0,
      1.75,
      5.0,
      '横断歩道5m駐停車禁止',
      0,
      '横断歩道・交差点の端から5m以内は「駐停車禁止」です（道路交通法第44条）',
      'Stopped within 5 meters of a pedestrian crosswalk/intersection (No-Stopping zone under Art. 44)'
    );

    // =========================================================================
    // Green Legal Target Pull-Over Bay (緑枠：路上検定「路端への停車課題」目標エリア)
    // =========================================================================
    const legalMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(this.legalPullOverBay.halfW * 2, this.legalPullOverBay.halfD * 2),
      greenZoneMat
    );
    legalMesh.rotation.x = -Math.PI / 2;
    legalMesh.position.set(this.legalPullOverBay.x, 0.023, this.legalPullOverBay.z);
    this.root.add(legalMesh);
    this.root.add(
      this.createGroundStencil(
        '停車目標(合法エリア)',
        '#a7f3d0',
        9.0,
        2.8,
        this.legalPullOverBay.x,
        this.legalPullOverBay.z,
        0
      )
    );
  }

  private buildParkedDeliveryTrucks(): void {
    // 2 Parked Delivery Trucks with flashing hazard lights in the left curb lane (forcing 3-second Right Signal + Mirror/Shoulder look + Lane Change!)
    const specs: { id: string; x: number; z: number; rotY: number; cabColor: number; boxLabel: string }[] = [
      // Truck 1 on South Boulevard Eastbound left lane (x = -18, z = 65.25)
      { id: 'truck-south', x: -18.0, z: 65.25, rotY: -Math.PI / 2, cabColor: 0x0284c7, boxLabel: '宅配便 DELIVERY' },
      // Truck 2 on North Boulevard Westbound left lane (x = 25, z = -65.25)
      { id: 'truck-north', x: 25.0, z: -65.25, rotY: Math.PI / 2, cabColor: 0x059669, boxLabel: '引越便 EXPRESS' },
    ];

    for (const sp of specs) {
      const grp = new THREE.Group();
      grp.position.set(sp.x, 0, sp.z);
      grp.rotation.y = sp.rotY;

      // Cargo box (2.1m wide, 2.3m high, 4.6m long)
      const cargoMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
      const cargo = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.2, 4.5), cargoMat);
      cargo.position.set(0, 1.5, 0.65);
      cargo.castShadow = true;
      cargo.receiveShadow = true;
      grp.add(cargo);

      // Cab in front (-Z in local group)
      const cabMat = new THREE.MeshStandardMaterial({ color: sp.cabColor, roughness: 0.35 });
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.85, 1.55), cabMat);
      cab.position.set(0, 1.25, -2.4);
      cab.castShadow = true;
      grp.add(cab);

      const windshield = new THREE.Mesh(
        new THREE.BoxGeometry(1.85, 0.72, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.15 })
      );
      windshield.position.set(0, 1.65, -3.16);
      grp.add(windshield);

      // Hazard Blinker Lamps (flashing orange)
      const hazMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xf59e0b,
        emissiveIntensity: 2.2,
      });
      for (const sx of [-0.92, 0.92]) {
        for (const sz of [-3.18, 2.92]) {
          const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.08), hazMat);
          lamp.position.set(sx, 0.72, sz);
          grp.add(lamp);
        }
      }

      // Wheels
      const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.26, 14);
      wheelGeo.rotateZ(Math.PI / 2);
      const tireMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.85 });
      for (const [wx, wz] of [
        [-0.95, -2.2],
        [0.95, -2.2],
        [-0.95, 1.8],
        [0.95, 1.8],
      ]) {
        const w = new THREE.Mesh(wheelGeo, tireMat);
        w.position.set(wx, 0.38, wz);
        grp.add(w);
      }

      this.root.add(grp);
      // Since trucks are oriented East/West along X axis, world halfW along X is 3.2m, halfL along Z is 1.15m
      this.parkedTrucks.push({
        id: sp.id,
        x: sp.x,
        z: sp.z,
        halfW: 3.25,
        halfL: 1.15,
        hazardMats: [hazMat],
      });
    }
  }

  private buildCyclists(): void {
    // 4 Animated 3D Cyclists riding along the blue left-curb bicycle lanes (testing 1.2m safe passing clearance & left-turn Makikomi check!)
    const loopWaypoints = [
      { x: -75, z: 66.2 },
      { x: -26, z: 66.2 },
      // Steer around parked truck-south (-18, 65.25)
      { x: -22, z: 63.4 },
      { x: -14, z: 63.4 },
      { x: -10, z: 66.2 },
      { x: 80, z: 66.2 },
      { x: 100.2, z: 48 },
      { x: 100.2, z: -48 },
      { x: 80, z: -66.2 },
      { x: 33, z: -66.2 },
      // Steer around parked truck-north (25, -65.25)
      { x: 29, z: -63.4 },
      { x: 21, z: -63.4 },
      { x: 17, z: -66.2 },
      { x: -80, z: -66.2 },
      { x: -100.2, z: -48 },
      { x: -100.2, z: 48 },
    ];

    const jerseyColors = [0x22c55e, 0xf97316, 0x38bdf8, 0xe879f9];
    const startIndices = [0, 5, 8, 13];

    for (let i = 0; i < 4; i++) {
      const startIdx = startIndices[i];
      const startPt = loopWaypoints[startIdx];
      const nextIdx = (startIdx + 1) % loopWaypoints.length;
      const nextPt = loopWaypoints[nextIdx];
      const heading = Math.atan2(-(nextPt.x - startPt.x), -(nextPt.z - startPt.z));

      const { group, frontWheel, rearWheel, leftLeg, rightLeg } = this.createBicycleAndRiderMesh(
        jerseyColors[i]
      );
      group.position.set(startPt.x, 0, startPt.z);
      group.rotation.y = heading;
      this.root.add(group);

      this.cyclists.push({
        group,
        frontWheel,
        rearWheel,
        leftLeg,
        rightLeg,
        waypoints: loopWaypoints,
        wpIndex: nextIdx,
        x: startPt.x,
        z: startPt.z,
        heading,
        speedMs: 3.6 + (i % 2) * 0.4, // ~13–14 km/h realistic bicycle speed
        pedalPhase: i * 1.7,
      });
    }
  }

  private createBicycleAndRiderMesh(shirtHex: number): {
    group: THREE.Group;
    frontWheel: THREE.Mesh;
    rearWheel: THREE.Mesh;
    leftLeg: THREE.Group;
    rightLeg: THREE.Group;
  } {
    const group = new THREE.Group();
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.7, roughness: 0.3 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.85 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtHex, roughness: 0.6 });
    const helmetMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.35 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf1c27d, roughness: 0.6 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });

    const wheelGeo = new THREE.TorusGeometry(0.32, 0.032, 8, 20);
    wheelGeo.rotateY(Math.PI / 2);

    const frontWheel = new THREE.Mesh(wheelGeo, tireMat);
    frontWheel.position.set(0, 0.34, -0.54);
    group.add(frontWheel);

    const rearWheel = new THREE.Mesh(wheelGeo, tireMat);
    rearWheel.position.set(0, 0.34, 0.54);
    group.add(rearWheel);

    // Bicycle diamond frame & handlebar
    const topTube = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.95), frameMat);
    topTube.position.set(0, 0.68, 0);
    group.add(topTube);

    const handlebar = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.035, 0.035), frameMat);
    handlebar.position.set(0, 0.96, -0.45);
    group.add(handlebar);

    // Rider torso & helmet
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.48, 0.18), shirtMat);
    torso.position.set(0, 1.15, 0.08);
    torso.rotation.x = -0.35; // Leaning forward toward handlebar
    torso.castShadow = true;
    group.add(torso);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 10, 10), skinMat);
    head.position.set(0, 1.48, -0.05);
    group.add(head);

    const helmet = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.58),
      helmetMat
    );
    helmet.position.set(0, 1.51, -0.05);
    group.add(helmet);

    const makeLeg = (px: number) => {
      const pivot = new THREE.Group();
      pivot.position.set(px, 0.88, 0.15);
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.58, 0.11), pantsMat);
      leg.position.y = -0.26;
      pivot.add(leg);
      group.add(pivot);
      return pivot;
    };

    const leftLeg = makeLeg(-0.11);
    const rightLeg = makeLeg(0.11);

    return { group, frontWheel, rearWheel, leftLeg, rightLeg };
  }

  private buildCityBuildingsAndStreetFurniture(): void {
    // 1. Red Fire Hydrant (消火栓) + Official Sign at (x = 102.2, z = 22.0) next to the 5m prohibited zone
    const hydrantGrp = new THREE.Group();
    hydrantGrp.position.set(102.2, 0, 22.0);
    const redHydrantMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.35, metalness: 0.3 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.78, 12), redHydrantMat);
    body.position.y = 0.39;
    body.castShadow = true;
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.19, 12, 10), redHydrantMat);
    cap.position.y = 0.78;
    hydrantGrp.add(body, cap);
    this.root.add(hydrantGrp);

    // 2. Bus Stop Signboard (バス停留所標示板) at (x = 42.0, z = 68.2) next to the 10m prohibited zone
    const busStopGrp = new THREE.Group();
    busStopGrp.position.set(42.0, 0, 68.2);
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 2.3, 10),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
    );
    pole.position.y = 1.15;
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.34, 0.34, 0.06, 18),
      new THREE.MeshStandardMaterial({ color: 0x0284c7 })
    );
    disc.rotation.x = Math.PI / 2;
    disc.position.y = 2.25;
    busStopGrp.add(pole, disc);
    this.root.add(busStopGrp);

    // 3. City Office & Apartment Buildings lining the outer boulevard
    const bldgColors = [0xcbd5e1, 0x94a3b8, 0xe2e8f0, 0xd6d3d1];
    const placements: [number, number, number, number, number][] = [
      [-65, 78, 22, 14, 16],
      [-25, 78, 24, 12, 22],
      [15, 78, 20, 14, 18],
      [65, 78, 26, 14, 20],
      [-65, -78, 24, 14, 19],
      [-20, -78, 22, 14, 24],
      [25, -78, 26, 14, 17],
      [68, -78, 22, 14, 21],
      [114, -25, 16, 24, 20],
      [114, 25, 16, 24, 18],
      [-114, -25, 16, 24, 17],
      [-114, 25, 16, 24, 22],
    ];
    placements.forEach(([bx, bz, bw, bd, bh], idx) => {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(bw, bh, bd),
        new THREE.MeshStandardMaterial({ color: bldgColors[idx % bldgColors.length], roughness: 0.75 })
      );
      m.position.set(bx, bh * 0.5, bz);
      m.castShadow = true;
      m.receiveShadow = true;
      this.root.add(m);
    });
  }

  update(dt: number, playerState: VehicleState, _signals: TrafficSignalController): TrafficSafetyReport {
    if (!this.root.visible) {
      return { pedestrianDanger: false, trafficCollision: false };
    }

    let trafficCollision = false;
    let cyclistDanger = false;
    let cyclistLabelJa: string | undefined;
    let cyclistLabelEn: string | undefined;
    let noParkingViolation = false;
    let noParkingLabelJa: string | undefined;
    let noParkingLabelEn: string | undefined;

    // 1. Flash Hazard Lights on Parked Delivery Trucks & Check Collision
    this.hazardTimer += dt;
    const hazOn = Math.floor(this.hazardTimer * 2.4) % 2 === 0;
    for (const tr of this.parkedTrucks) {
      for (const m of tr.hazardMats) {
        m.emissiveIntensity = hazOn ? 2.6 : 0.08;
      }
      if (
        Math.abs(playerState.x - tr.x) < tr.halfW + 1.15 &&
        Math.abs(playerState.z - tr.z) < tr.halfL + 0.85 &&
        Math.abs(playerState.speedMs) > 0.25
      ) {
        trafficCollision = true;
      }
    }

    // 2. Update Animated 3D Cyclists & Check Safe Lateral Clearance (>= 1.2m) / Left-Turn Makikomi
    for (const cyc of this.cyclists) {
      const target = cyc.waypoints[cyc.wpIndex];
      const dx = target.x - cyc.x;
      const dz = target.z - cyc.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 1.8) {
        cyc.wpIndex = (cyc.wpIndex + 1) % cyc.waypoints.length;
      }

      const desiredHeading = Math.atan2(-dx, -dz);
      let hDiff = desiredHeading - cyc.heading;
      while (hDiff > Math.PI) hDiff -= Math.PI * 2;
      while (hDiff < -Math.PI) hDiff += Math.PI * 2;
      cyc.heading += Math.sign(hDiff) * Math.min(Math.abs(hDiff), 4.0 * dt);

      const fwdX = -Math.sin(cyc.heading);
      const fwdZ = -Math.cos(cyc.heading);
      cyc.x += fwdX * cyc.speedMs * dt;
      cyc.z += fwdZ * cyc.speedMs * dt;
      cyc.group.position.set(cyc.x, 0, cyc.z);
      cyc.group.rotation.y = cyc.heading;

      cyc.pedalPhase += dt * 7.5;
      cyc.frontWheel.rotation.x -= (cyc.speedMs * dt) / 0.32;
      cyc.rearWheel.rotation.x -= (cyc.speedMs * dt) / 0.32;
      cyc.leftLeg.rotation.x = Math.sin(cyc.pedalPhase) * 0.45;
      cyc.rightLeg.rotation.x = -Math.sin(cyc.pedalPhase) * 0.45;

      // Check player lateral distance to cyclist
      const dToPlayer = distance(playerState.x, playerState.z, cyc.x, cyc.z);
      if (dToPlayer < 2.15 && Math.abs(playerState.speedMs) > 1.8) {
        cyclistDanger = true;
        cyclistLabelJa =
          '走行中の自転車に1.2m未満の危険な距離で接近・通過しました（道路交通法第18条：安全な側方間隔保持違反／左折巻き込み危険）';
        cyclistLabelEn =
          'Passed within 1.2m of a moving cyclist without slowing down or changing lanes safely (Road Traffic Act Art. 18 violation)';
      }
    }

    // 3. Check Prohibited Parking / Stopping Zones (Red Zones: 10m Bus Stop, 5m Fire Hydrant, 5m Crosswalk)
    const isStopped = Math.abs(playerState.speedMs) < 0.15;
    if (isStopped) {
      let insideProhibited: ProhibitedParkingZone | null = null;
      for (const pz of this.noParkingZones) {
        if (Math.abs(playerState.x - pz.x) <= pz.halfW && Math.abs(playerState.z - pz.z) <= pz.halfD) {
          insideProhibited = pz;
          break;
        }
      }
      if (insideProhibited) {
        this.stopZoneHoldTimer += dt;
        if (this.stopZoneHoldTimer > 1.1) {
          this.stopZoneHoldTimer = 0;
          noParkingViolation = true;
          noParkingLabelJa = insideProhibited.labelJa;
          noParkingLabelEn = insideProhibited.labelEn;
        }
      } else {
        this.stopZoneHoldTimer = 0;
      }

      // Check if player pulled over cleanly inside the Green Legal Pull-Over Bay
      if (
        Math.abs(playerState.x - this.legalPullOverBay.x) <= this.legalPullOverBay.halfW &&
        Math.abs(playerState.z - this.legalPullOverBay.z) <= this.legalPullOverBay.halfD
      ) {
        this.legalPullOverCompleted = true;
      }
    } else {
      this.stopZoneHoldTimer = 0;
    }

    return {
      pedestrianDanger: false,
      trafficCollision,
      cyclistDanger,
      cyclistLabelJa,
      cyclistLabelEn,
      noParkingViolation,
      noParkingLabelJa,
      noParkingLabelEn,
    };
  }
}

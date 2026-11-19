import * as THREE from 'three';
import {
  COMPOUND_HALF_D,
  COMPOUND_HALF_W,
  CRANK_HALF_W,
  CURB_POLYLINES,
  HALF_ROAD,
  HILL_DOWN_END,
  HILL_HALF_W,
  HILL_UP_START,
  HILL_Z,
  OBSTACLE_COLLIDERS,
  POLE_COLLIDERS,
  ROAD_WIDTH,
  S_CURVE_CENTERLINE,
  STOP_LINE_ZONES,
  getTerrainElevation,
} from '../core/courseLayout';
import type { TrafficSignalController } from '../core/trafficSignals';

interface TrafficLampSet {
  axis: 'NS' | 'EW';
  greenMat: THREE.MeshStandardMaterial;
  yellowMat: THREE.MeshStandardMaterial;
  redMat: THREE.MeshStandardMaterial;
}

export class WorldBuilder {
  public readonly root = new THREE.Group();
  public readonly kyoshujoGroup = new THREE.Group();
  public readonly sunLight: THREE.DirectionalLight;
  private readonly sunOffset = new THREE.Vector3(45, 68, 35);

  private railGatePivots: THREE.Group[] = [];
  private railLeftLampMats: THREE.MeshStandardMaterial[] = [];
  private railRightLampMats: THREE.MeshStandardMaterial[] = [];
  private trafficLamps: TrafficLampSet[] = [];
  private waypointBeacon: THREE.Group;
  private skyBrandSprites: THREE.Sprite[] = [];

  constructor(scene: THREE.Scene) {
    scene.background = new THREE.Color(0x9fd0ff);
    scene.fog = new THREE.Fog(0x9fd0ff, 95, 240);

    this.buildCloudsAndSkyBrand(scene);

    // Lighting
    const hemi = new THREE.HemisphereLight(0xeef6ff, 0x5c6e4c, 0.85);
    scene.add(hemi);

    this.sunLight = new THREE.DirectionalLight(0xfffaf0, 1.85);
    this.sunLight.position.copy(this.sunOffset);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    const d = 38;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.camera.near = 5;
    this.sunLight.shadow.camera.far = 170;
    this.sunLight.shadow.bias = -0.0005;
    scene.add(this.sunLight);
    scene.add(this.sunLight.target);

    this.root.add(this.kyoshujoGroup);
    scene.add(this.root);

    this.buildGroundAndRoads();
    this.buildSCurveMesh();
    this.buildHillRampMesh();
    this.buildRoadMarkings();
    this.buildCurbsAndPoles();
    this.buildRailroadCrossing();
    this.buildTrafficLights();
    this.buildRoadSigns();
    this.buildObstaclesAndBuildings();
    this.buildTreesAndFence();

    // Floating exam waypoint beacon (hidden unless exam active)
    this.waypointBeacon = this.createWaypointBeacon();
    this.waypointBeacon.visible = false;
    this.kyoshujoGroup.add(this.waypointBeacon);
  }

  setKyoshujoVisible(visible: boolean): void {
    this.kyoshujoGroup.visible = visible;
  }

  updateShadowFocus(carX: number, carZ: number): void {
    // Snap shadow center to texel grid (~0.037m) to avoid shadow shimmering
    const texel = 76 / 2048;
    const sx = Math.round(carX / texel) * texel;
    const sz = Math.round(carZ / texel) * texel;
    this.sunLight.target.position.set(sx, 0, sz);
    this.sunLight.position.set(sx + this.sunOffset.x, this.sunOffset.y, sz + this.sunOffset.z);
    this.sunLight.target.updateMatrixWorld();
  }

  updateDynamic(signals: TrafficSignalController, examTarget: { x: number; z: number } | null, timeSec: number): void {
    // Traffic light lenses
    const nsColor = signals.getLightForAxis('NS');
    const ewColor = signals.getLightForAxis('EW');

    for (const lamp of this.trafficLamps) {
      const c = lamp.axis === 'NS' ? nsColor : ewColor;
      lamp.greenMat.emissive.setHex(c === 'green' ? 0x10e898 : 0x031810);
      lamp.greenMat.emissiveIntensity = c === 'green' ? 2.2 : 0.2;
      lamp.yellowMat.emissive.setHex(c === 'yellow' ? 0xffb703 : 0x1a1200);
      lamp.yellowMat.emissiveIntensity = c === 'yellow' ? 2.2 : 0.2;
      lamp.redMat.emissive.setHex(c === 'red' ? 0xff2a2a : 0x1c0404);
      lamp.redMat.emissiveIntensity = c === 'red' ? 2.2 : 0.2;
    }

    // Railroad crossing gates & flashing lights
    const rail = signals.getRailroadState();
    for (let i = 0; i < this.railGatePivots.length; i++) {
      // Hinge rotates around Z so arm lowers across road
      this.railGatePivots[i].rotation.z = i === 0 ? -rail.barrierAngle : rail.barrierAngle;
    }
    for (const m of this.railLeftLampMats) {
      m.emissive.setHex(rail.flashLeftOn ? 0xff1a1a : 0x220404);
      m.emissiveIntensity = rail.flashLeftOn ? 2.8 : 0.2;
    }
    for (const m of this.railRightLampMats) {
      m.emissive.setHex(rail.flashRightOn ? 0xff1a1a : 0x220404);
      m.emissiveIntensity = rail.flashRightOn ? 2.8 : 0.2;
    }

    // Exam waypoint beacon
    if (examTarget && this.kyoshujoGroup.visible) {
      this.waypointBeacon.visible = true;
      const elev = getTerrainElevation(examTarget.x, examTarget.z).y;
      this.waypointBeacon.position.set(examTarget.x, elev + 0.05, examTarget.z);
      this.waypointBeacon.rotation.y = timeSec * 1.4;
      const pulse = 1 + Math.sin(timeSec * 4) * 0.08;
      this.waypointBeacon.scale.set(pulse, 1, pulse);
    } else {
      this.waypointBeacon.visible = false;
    }

    // Drifting sky brand cloud sprites
    for (const sprite of this.skyBrandSprites) {
      const a = (sprite.userData.angle as number) + timeSec * 0.004;
      const h = (sprite.userData.height as number) + Math.sin(timeSec * 0.15 + a * 3) * 0.8;
      sprite.position.set(Math.cos(a) * 160, h, Math.sin(a) * 160);
    }
  }

  private buildCloudsAndSkyBrand(scene: THREE.Scene): void {
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 1,
      metalness: 0,
      transparent: true,
      opacity: 0.9,
    });
    const makeCloud = (x: number, y: number, z: number, s: number) => {
      const g = new THREE.Group();
      const puffs: [number, number, number, number][] = [
        [0, 0, 0, 5],
        [-4, -1, 0, 3.5],
        [4, -1, 0, 3.5],
        [-2, 1.5, 0, 2.8],
        [2.5, 1.5, 0, 2.8],
        [-6, -2, 0, 2],
        [6, -2, 0, 2],
      ];
      for (const [px, py, pz, pr] of puffs) {
        const m = new THREE.Mesh(new THREE.SphereGeometry(pr, 7, 5), cloudMat);
        m.position.set(px, py, pz);
        g.add(m);
      }
      g.position.set(x, y, z);
      g.scale.setScalar(s);
      scene.add(g);
    };
    makeCloud(-80, 48, -60, 1.2);
    makeCloud(60, 42, -90, 1.0);
    makeCloud(-30, 52, -110, 0.85);
    makeCloud(110, 46, -70, 1.15);
    makeCloud(10, 55, -130, 0.95);
    makeCloud(-120, 44, -80, 1.3);
    makeCloud(70, 50, -150, 1.1);

    const W = 1024;
    const H = 256;
    const mask = document.createElement('canvas');
    mask.width = W;
    mask.height = H;
    const mctx = mask.getContext('2d')!;
    mctx.font = '900 150px "Arial Rounded MT Bold", "Nunito", Arial, sans-serif';
    mctx.textAlign = 'center';
    mctx.textBaseline = 'middle';
    mctx.fillText('GaimenGo', W / 2, H / 2);
    const goStartX = W / 2 - mctx.measureText('GaimenGo').width / 2 + mctx.measureText('Gaimen').width;
    const alpha = mctx.getImageData(0, 0, W, H).data;

    const out = document.createElement('canvas');
    out.width = W;
    out.height = H;
    const ctx = out.getContext('2d')!;
    let seed = 0x6a1e;
    const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
    const STEP = 9;
    for (let y = 0; y < H; y += STEP) {
      for (let x = 0; x < W; x += STEP) {
        const px = Math.min(W - 1, x + Math.floor(rand() * STEP));
        const py = Math.min(H - 1, y + Math.floor(rand() * STEP));
        if (alpha[(py * W + px) * 4 + 3] < 128) continue;
        const r = 11 + rand() * 12;
        const g = ctx.createRadialGradient(px, py, 0, px, py, r);
        g.addColorStop(0, 'rgba(255,255,255,0.95)');
        g.addColorStop(0.6, 'rgba(255,255,255,0.55)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.fillRect(px - r, py - r, r * 2, r * 2);
      }
    }
    ctx.globalCompositeOperation = 'source-atop';
    const shade = ctx.createLinearGradient(0, H * 0.3, 0, H * 0.8);
    shade.addColorStop(0, 'rgba(190,210,230,0)');
    shade.addColorStop(1, 'rgba(170,195,220,0.45)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(52,211,153,0.22)';
    ctx.fillRect(goStartX, 0, W - goStartX, H);
    ctx.globalCompositeOperation = 'source-over';

    const texture = new THREE.CanvasTexture(out);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      fog: false,
    });
    this.skyBrandSprites = [0, 1, 2].map((i) => {
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(64, 16, 1);
      sprite.layers.set(1);
      sprite.userData.angle = -Math.PI / 2 + i * ((Math.PI * 2) / 3);
      sprite.userData.height = 40 + i * 4;
      sprite.renderOrder = -1;
      scene.add(sprite);
      return sprite;
    });
  }

  private createGrassTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#5f8449';
    ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 4000; i++) {
      ctx.fillStyle = i % 2 === 0 ? 'rgba(72,108,52,0.35)' : 'rgba(122,162,88,0.28)';
      ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(36, 24);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  private createAsphaltTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#383e45';
    ctx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 5500; i++) {
      const shade = 45 + Math.floor(Math.random() * 30);
      ctx.fillStyle = `rgb(${shade},${shade + 2},${shade + 6})`;
      ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(22, 22);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  private buildGroundAndRoads(): void {
    const grassMat = new THREE.MeshStandardMaterial({
      map: this.createGrassTexture(),
      roughness: 0.95,
      metalness: 0.0,
    });
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(COMPOUND_HALF_W * 2 + 40, COMPOUND_HALF_D * 2 + 40),
      grassMat
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.kyoshujoGroup.add(ground);

    const asphaltMat = new THREE.MeshStandardMaterial({
      map: this.createAsphaltTexture(),
      roughness: 0.86,
      metalness: 0.05,
    });

    const addRoadRect = (cx: number, cz: number, w: number, d: number, y = 0.01) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), asphaltMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(cx, y, cz);
      m.receiveShadow = true;
      this.kyoshujoGroup.add(m);
    };

    // Outer perimeter straights
    addRoadRect(0, -46, 124, ROAD_WIDTH); // North
    addRoadRect(0, 46, 124, ROAD_WIDTH); // South
    addRoadRect(-76, 0, ROAD_WIDTH, 64); // West
    addRoadRect(76, 0, ROAD_WIDTH, 64); // East

    // 4 Corner arcs (centerline R = 14, inner = 10.5, outer = 17.5)
    const cornerCenters: [number, number, number][] = [
      [-62, -32, Math.PI / 2], // NW
      [62, -32, 0], // NE
      [62, 32, -Math.PI / 2], // SE
      [-62, 32, Math.PI], // SW
    ];
    for (const [cx, cz, startTheta] of cornerCenters) {
      const ring = new THREE.RingGeometry(14 - HALF_ROAD, 14 + HALF_ROAD, 24, 1, startTheta, Math.PI / 2);
      const mesh = new THREE.Mesh(ring, asphaltMat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(cx, 0.01, cz);
      mesh.receiveShadow = true;
      this.kyoshujoGroup.add(mesh);
    }

    // Central cross roads
    addRoadRect(0, 0, ROAD_WIDTH, 92, 0.012); // Central NS
    addRoadRect(0, 0, 152, ROAD_WIDTH, 0.012); // Central EW

    // Crank road slabs (width 4.0m)
    const crankW = CRANK_HALF_W * 2;
    addRoadRect(-48, 11.75, crankW, 16.5, 0.013);
    addRoadRect(-41, 18.0, 18.0, crankW, 0.013);
    addRoadRect(-34, 30.25, crankW, 24.5, 0.013);

    // Hill flat feeder roads
    addRoadRect(10.75, HILL_Z, 14.5, HILL_HALF_W * 2, 0.013);
    addRoadRect(65.25, HILL_Z, 14.5, HILL_HALF_W * 2, 0.013);

    // SE Parking Avenue (z = 24, x: 0 -> 76)
    addRoadRect(38, 24, 72.5, ROAD_WIDTH, 0.012);
    // Bay Parking T-bay (x: 24.15..27.85, z: 27.5..33.7)
    addRoadRect(26, 30.6, 3.7, 6.2, 0.013);
    // Parallel Parking Pocket (x: 45..52.2, z: 27.5..30.2)
    addRoadRect(48.6, 28.85, 7.2, 2.7, 0.013);

    // Clubhouse courtyard apron
    addRoadRect(0, 51.0, 32, 3.2, 0.008);
  }

  private buildSCurveMesh(): void {
    const halfW = 1.8;
    const pts = S_CURVE_CENTERLINE;
    const positions: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];

    for (let i = 0; i < pts.length; i++) {
      const prev = pts[Math.max(0, i - 1)];
      const next = pts[Math.min(pts.length - 1, i + 1)];
      const tx = next.x - prev.x;
      const tz = next.z - prev.z;
      const len = Math.hypot(tx, tz) || 1;
      const nx = tz / len;
      const nz = -tx / len;

      positions.push(pts[i].x + nx * halfW, 0.014, pts[i].z + nz * halfW);
      positions.push(pts[i].x - nx * halfW, 0.014, pts[i].z - nz * halfW);
      uvs.push(0, i * 0.25, 1, i * 0.25);

      if (i < pts.length - 1) {
        const b = i * 2;
        indices.push(b, b + 1, b + 2, b + 1, b + 3, b + 2);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: 0x3b424a,
      roughness: 0.85,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    this.kyoshujoGroup.add(mesh);
  }

  private buildHillRampMesh(): void {
    const steps = 64;
    const xStart = HILL_UP_START;
    const xEnd = HILL_DOWN_END;
    const zMin = HILL_Z - HILL_HALF_W;
    const zMax = HILL_Z + HILL_HALF_W;

    const positions: number[] = [];
    const indices: number[] = [];

    // Road deck + side retaining skirts
    for (let i = 0; i <= steps; i++) {
      const x = xStart + ((xEnd - xStart) * i) / steps;
      const elev = getTerrainElevation(x, HILL_Z).y;
      const y = elev + 0.015;
      // 0: north base, 1: north top, 2: south top, 3: south base
      positions.push(x, 0, zMin);
      positions.push(x, y, zMin);
      positions.push(x, y, zMax);
      positions.push(x, 0, zMax);

      if (i < steps) {
        const b = i * 4;
        const n = (i + 1) * 4;
        // Top surface (1-2)
        indices.push(b + 1, b + 2, n + 1, b + 2, n + 2, n + 1);
        // North wall (0-1)
        indices.push(b + 0, b + 1, n + 0, b + 1, n + 1, n + 0);
        // South wall (2-3)
        indices.push(b + 2, b + 3, n + 2, b + 3, n + 3, n + 2);
      }
    }

    const deckGeo = new THREE.BufferGeometry();
    deckGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    deckGeo.setIndex(indices);
    deckGeo.computeVertexNormals();

    // Separate road top and concrete walls for visual contrast
    const roadTopPos: number[] = [];
    const roadTopIdx: number[] = [];
    const wallPos: number[] = [];
    const wallIdx: number[] = [];

    for (let i = 0; i <= steps; i++) {
      const x = xStart + ((xEnd - xStart) * i) / steps;
      const y = getTerrainElevation(x, HILL_Z).y + 0.018;
      roadTopPos.push(x, y, zMin, x, y, zMax);
      wallPos.push(x, 0, zMin, x, y, zMin, x, 0, zMax, x, y, zMax);

      if (i < steps) {
        const rt = i * 2;
        roadTopIdx.push(rt, rt + 1, rt + 2, rt + 1, rt + 3, rt + 2);
        const w = i * 4;
        wallIdx.push(w, w + 1, w + 4, w + 1, w + 5, w + 4);
        wallIdx.push(w + 2, w + 6, w + 3, w + 3, w + 6, w + 7);
      }
    }

    const topGeo = new THREE.BufferGeometry();
    topGeo.setAttribute('position', new THREE.Float32BufferAttribute(roadTopPos, 3));
    topGeo.setIndex(roadTopIdx);
    topGeo.computeVertexNormals();

    const topMesh = new THREE.Mesh(
      topGeo,
      new THREE.MeshStandardMaterial({ color: 0x3b424a, roughness: 0.86, side: THREE.DoubleSide })
    );
    topMesh.receiveShadow = true;
    this.kyoshujoGroup.add(topMesh);

    const wGeo = new THREE.BufferGeometry();
    wGeo.setAttribute('position', new THREE.Float32BufferAttribute(wallPos, 3));
    wGeo.setIndex(wallIdx);
    wGeo.computeVertexNormals();

    const wMesh = new THREE.Mesh(
      wGeo,
      new THREE.MeshStandardMaterial({ color: 0xbac2ca, roughness: 0.9, side: THREE.DoubleSide })
    );
    wMesh.receiveShadow = true;
    wMesh.castShadow = true;
    this.kyoshujoGroup.add(wMesh);

    // Hill stop marker stripe at x = 27 on slope
    const stopElev = getTerrainElevation(27, HILL_Z).y;
    const stopBar = new THREE.Mesh(
      new THREE.PlaneGeometry(0.45, HILL_HALF_W * 1.9),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    stopBar.rotation.x = -Math.PI / 2;
    stopBar.rotation.y = -Math.atan(getTerrainElevation(27, HILL_Z).slopeX);
    stopBar.position.set(27, stopElev + 0.03, HILL_Z);
    this.kyoshujoGroup.add(stopBar);
  }

  private createStencilPlane(
    text: string,
    color: string,
    w: number,
    h: number,
    x: number,
    z: number,
    rotY = 0
  ): THREE.Mesh {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 256, 256);
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 120px "Noto Sans JP", sans-serif';
    ctx.fillText(text, 128, 128);

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

  private buildRoadMarkings(): void {
    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xf4f7fa });
    const orangeMat = new THREE.MeshBasicMaterial({ color: 0xf08c00 });

    const addLine = (cx: number, cz: number, w: number, d: number, mat = whiteMat) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(cx, 0.02, cz);
      this.kyoshujoGroup.add(m);
    };

    // Dashed centerlines on straight roads
    for (let x = -58; x <= 58; x += 6) {
      if (Math.abs(x) < 12) continue;
      addLine(x, -46, 2.8, 0.14);
      addLine(x, 46, 2.8, 0.14);
    }
    for (let z = -28; z <= 28; z += 6) {
      if (Math.abs(z) < 10) continue;
      addLine(-76, z, 0.14, 2.8);
      addLine(76, z, 0.14, 2.8);
    }
    // Central NS dashed & orange solid near (0,0)
    for (let z = -42; z <= 42; z += 6) {
      if (Math.abs(z) < 18) continue;
      addLine(0, z, 0.14, 2.8);
    }
    addLine(0, 13.5, 0.16, 10.0, orangeMat);
    addLine(0, -13.5, 0.16, 10.0, orangeMat);

    // Central EW dashed & orange solid near (0,0) and railroad (38,0)
    for (let x = -70; x <= 70; x += 6) {
      if (Math.abs(x) < 18 || (x > 26 && x < 50)) continue;
      addLine(x, 0, 2.8, 0.14);
    }
    addLine(13.5, 0, 10.0, 0.16, orangeMat);
    addLine(-13.5, 0, 10.0, 0.16, orangeMat);
    addLine(38.0, 0, 18.0, 0.16, orangeMat);

    // SE Parking Avenue dashed centerline
    for (let x = 6; x <= 68; x += 6) {
      addLine(x, 24, 2.8, 0.14);
    }

    // Stop lines for every STOP_LINE_ZONE
    for (const z of STOP_LINE_ZONES) {
      const isEW = Math.abs(z.dirX) > 0.5;
      addLine(z.x, z.z, isEW ? 0.45 : z.halfWidth * 1.9, isEW ? z.halfWidth * 1.9 : 0.45);
      if (z.kind === 'stopSign') {
        const offset = 2.6;
        const rot = Math.atan2(-z.dirX, -z.dirZ);
        this.kyoshujoGroup.add(
          this.createStencilPlane('止まれ', '#ffffff', 2.2, 2.2, z.x - z.dirX * offset, z.z - z.dirZ * offset, rot)
        );
      }
    }

    // Zebra Crosswalks at Central Intersection (0, 0)
    const addCrosswalk = (cx: number, cz: number, horizontal: boolean) => {
      for (let i = -3; i <= 3; i++) {
        if (horizontal) {
          addLine(cx, cz + i * 0.9, 2.8, 0.45);
        } else {
          addLine(cx + i * 0.9, cz, 0.45, 2.8);
        }
      }
    };
    addCrosswalk(0, -6.2, false);
    addCrosswalk(0, 6.2, false);
    addCrosswalk(-6.2, 0, true);
    addCrosswalk(6.2, 0, true);
    // Unsignalized pedestrian crosswalks (SE Parking Avenue x=12, z=24; South perimeter x=-22, z=46)
    addCrosswalk(12.0, 24.0, true);
    addCrosswalk(-22.0, 46.0, true);
    // Warning approach diamonds (◇) before unsignalized crosswalks (30m & 15m ahead per Japanese Road Traffic Act!)
    for (const [dx, dz] of [
      [-10.0, 44.25],
      [-34.0, 47.75],
      [24.0, 22.25],
    ]) {
      const cwDiamond = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.96, 4), whiteMat);
      cwDiamond.rotation.x = -Math.PI / 2;
      cwDiamond.position.set(dx, 0.022, dz);
      this.kyoshujoGroup.add(cwDiamond);
    }

    // Intersection center diamond marker
    const diamond = new THREE.Mesh(
      new THREE.RingGeometry(0.9, 1.15, 4),
      whiteMat
    );
    diamond.rotation.x = -Math.PI / 2;
    diamond.position.set(0, 0.022, 0);
    this.kyoshujoGroup.add(diamond);

    // Speed stencil 40 on North straight
    this.kyoshujoGroup.add(this.createStencilPlane('40', '#ffffff', 2.6, 2.6, -40, -47.75, -Math.PI / 2));
    this.kyoshujoGroup.add(this.createStencilPlane('40', '#ffffff', 2.6, 2.6, 20, -47.75, -Math.PI / 2));

    // Start Bay markers 1, 2, 3 on South straight
    this.kyoshujoGroup.add(this.createStencilPlane('1', '#f0a500', 1.8, 1.8, 12, 48.1, Math.PI / 2));
    this.kyoshujoGroup.add(this.createStencilPlane('2', '#f0a500', 1.8, 1.8, 0, 48.1, Math.PI / 2));
    this.kyoshujoGroup.add(this.createStencilPlane('3', '#f0a500', 1.8, 1.8, -12, 48.1, Math.PI / 2));
  }

  private buildCurbsAndPoles(): void {
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0xcbd2da, roughness: 0.8 });
    const whiteCurbMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.7 });

    for (const curb of CURB_POLYLINES) {
      const pts = curb.points;
      const isHill = curb.id.startsWith('hill-');
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i];
        const b = pts[i + 1];
        const dx = b.x - a.x;
        const dz = b.z - a.z;
        const len = Math.hypot(dx, dz);
        if (len < 0.01) continue;

        if (isHill) {
          // Sample along hill slope in segments
          const sub = 24;
          for (let s = 0; s < sub; s++) {
            const t0 = s / sub;
            const t1 = (s + 1) / sub;
            const x0 = a.x + dx * t0;
            const x1 = a.x + dx * t1;
            const z0 = a.z + dz * t0;
            const z1 = a.z + dz * t1;
            const y0 = getTerrainElevation(x0, z0).y;
            const y1 = getTerrainElevation(x1, z1).y;
            const segLen = Math.hypot(x1 - x0, y1 - y0);
            const box = new THREE.Mesh(
              new THREE.BoxGeometry(segLen + 0.04, curb.height, 0.18),
              s % 2 === 0 ? concreteMat : whiteCurbMat
            );
            box.position.set((x0 + x1) * 0.5, (y0 + y1) * 0.5 + curb.height * 0.5, (z0 + z1) * 0.5);
            box.rotation.z = Math.atan2(y1 - y0, x1 - x0);
            box.castShadow = true;
            box.receiveShadow = true;
            this.kyoshujoGroup.add(box);
          }
        } else {
          const box = new THREE.Mesh(
            new THREE.BoxGeometry(0.18, curb.height, len + 0.14),
            i % 2 === 0 ? concreteMat : whiteCurbMat
          );
          box.position.set((a.x + b.x) * 0.5, curb.height * 0.5, (a.z + b.z) * 0.5);
          box.rotation.y = Math.atan2(dx, dz);
          box.castShadow = true;
          box.receiveShadow = true;
          this.kyoshujoGroup.add(box);
        }
      }
    }

    // Striped red/white marker poles
    const redMat = new THREE.MeshStandardMaterial({ color: 0xd92626, roughness: 0.4 });
    const whitePoleMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });

    for (const pole of POLE_COLLIDERS) {
      const grp = new THREE.Group();
      grp.position.set(pole.x, 0, pole.z);
      const bands = 5;
      const segH = pole.height / bands;
      for (let b = 0; b < bands; b++) {
        const cyl = new THREE.Mesh(
          new THREE.CylinderGeometry(pole.radius * 0.65, pole.radius * 0.65, segH, 10),
          b % 2 === 0 ? redMat : whitePoleMat
        );
        cyl.position.y = segH * (b + 0.5);
        cyl.castShadow = true;
        grp.add(cyl);
      }
      this.kyoshujoGroup.add(grp);
    }
  }

  private buildRailroadCrossing(): void {
    const rx = 38.0;
    const steelMat = new THREE.MeshStandardMaterial({ color: 0x7c8591, metalness: 0.75, roughness: 0.3 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x4b3b2e, roughness: 0.9 });
    const yellowMat = new THREE.MeshStandardMaterial({ color: 0xf5b800, roughness: 0.4 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x1a1d21, roughness: 0.6 });

    // Dual tracks N-S
    for (const offset of [-0.7, 0.7]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.06, 30), steelMat);
      rail.position.set(rx + offset, 0.03, 0);
      rail.receiveShadow = true;
      this.kyoshujoGroup.add(rail);
    }
    for (let z = -14; z <= 14; z += 0.9) {
      if (Math.abs(z) < 3.6) continue; // road deck flush over tracks
      const tie = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.05, 0.25), woodMat);
      tie.position.set(rx, 0.025, z);
      this.kyoshujoGroup.add(tie);
    }

    // Two warning posts & animated gates (West side for eastbound, East side for westbound)
    const sides: [number, number][] = [
      [rx - 3.6, -3.9],
      [rx + 3.6, 3.9],
    ];
    for (let idx = 0; idx < sides.length; idx++) {
      const [px, pz] = sides[idx];
      const post = new THREE.Group();
      post.position.set(px, 0, pz);

      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 3.4, 10), yellowMat);
      mast.position.y = 1.7;
      mast.castShadow = true;
      post.add(mast);

      // Crossbuck X
      for (const ang of [Math.PI / 4, -Math.PI / 4]) {
        const blade = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.16, 0.05), yellowMat);
        blade.position.y = 2.95;
        blade.rotation.y = Math.PI / 2;
        blade.rotation.x = ang;
        post.add(blade);
      }

      // Flashing dual red lamps facing approaching road
      const lMat = new THREE.MeshStandardMaterial({ color: 0x600808, emissive: 0x220404 });
      const rMat = new THREE.MeshStandardMaterial({ color: 0x600808, emissive: 0x220404 });
      this.railLeftLampMats.push(lMat);
      this.railRightLampMats.push(rMat);

      const lampL = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.14, 12), lMat);
      lampL.rotation.z = Math.PI / 2;
      lampL.position.set(0, 2.25, -0.22);
      post.add(lampL);

      const lampR = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.14, 12), rMat);
      lampR.rotation.z = Math.PI / 2;
      lampR.position.set(0, 2.25, 0.22);
      post.add(lampR);

      // Gate mechanism box & pivot arm
      const gateBox = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.85, 0.32), blackMat);
      gateBox.position.set(0, 0.65, idx === 0 ? 0.35 : -0.35);
      post.add(gateBox);

      const pivot = new THREE.Group();
      pivot.position.set(0, 0.95, idx === 0 ? 0.35 : -0.35);
      // Orient pivot so rotating around Z lowers arm across Z-axis (turn Y by +PI/2)
      const armWrap = new THREE.Group();
      armWrap.rotation.y = idx === 0 ? -Math.PI / 2 : Math.PI / 2;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.08, 0.06), yellowMat);
      arm.position.set(1.8, 0, 0);
      arm.castShadow = true;
      // Rotate pivot directly: arm extends UP (+Y) when open, lowers along road width when closed
      const verticalArm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 3.8, 0.06), yellowMat);
      verticalArm.position.set(0, 1.9, 0);
      verticalArm.castShadow = true;

      // Striped bands along vertical arm
      for (let b = 0; b < 6; b++) {
        if (b % 2 === 0) {
          const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.32, 0.07), blackMat);
          stripe.position.set(0, 0.45 + b * 0.6, 0);
          verticalArm.add(stripe);
        }
      }

      // Let pivot rotate around X so arm swings across the road Z!
      const gatePivot = new THREE.Group();
      gatePivot.position.set(0, 0.95, idx === 0 ? 0.35 : -0.35);
      gatePivot.rotation.y = Math.PI / 2; // Now local Z rotation lowers arm across world Z!
      gatePivot.add(verticalArm);
      post.add(gatePivot);
      this.railGatePivots.push(gatePivot);

      this.kyoshujoGroup.add(post);
    }
  }

  private buildTrafficLights(): void {
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.6, roughness: 0.35 });
    const housingMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6 });

    const configs: { axis: 'NS' | 'EW'; x: number; z: number; rotY: number }[] = [
      { axis: 'NS', x: 4.5, z: -5.0, rotY: 0 }, // Visible approaching Northbound
      { axis: 'NS', x: -4.5, z: 5.0, rotY: Math.PI }, // Visible approaching Southbound
      { axis: 'EW', x: 5.0, z: 4.5, rotY: -Math.PI / 2 }, // Visible approaching Eastbound
      { axis: 'EW', x: -5.0, z: -4.5, rotY: Math.PI / 2 }, // Visible approaching Westbound
    ];

    for (const cfg of configs) {
      const grp = new THREE.Group();
      grp.position.set(cfg.x, 0, cfg.z);
      grp.rotation.y = cfg.rotY;

      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.13, 5.4, 10), poleMat);
      mast.position.y = 2.7;
      mast.castShadow = true;
      grp.add(mast);

      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 4.2, 8), poleMat);
      arm.rotation.z = Math.PI / 2;
      arm.position.set(-2.0, 5.1, 0);
      grp.add(arm);

      // Horizontal Japanese 3-lamp housing (Green left, Yellow center, Red right)
      const head = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.52, 0.36), housingMat);
      head.position.set(-2.5, 5.1, 0);
      grp.add(head);

      const greenMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, emissive: 0x031810 });
      const yellowMat = new THREE.MeshStandardMaterial({ color: 0x78350f, emissive: 0x1a1200 });
      const redMat = new THREE.MeshStandardMaterial({ color: 0x7f1d1d, emissive: 0x1c0404 });

      const lensGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.06, 14);
      const makeLens = (mat: THREE.MeshStandardMaterial, lx: number) => {
        const m = new THREE.Mesh(lensGeo, mat);
        m.rotation.x = Math.PI / 2;
        m.position.set(-2.5 + lx, 5.1, 0.19);
        grp.add(m);
      };
      makeLens(greenMat, -0.46);
      makeLens(yellowMat, 0);
      makeLens(redMat, 0.46);

      this.trafficLamps.push({ axis: cfg.axis, greenMat, yellowMat, redMat });
      this.kyoshujoGroup.add(grp);
    }
  }

  private createSignTexture(
    kind: 'tomare' | '40' | 'rail' | 'guide' | 'crosswalk' | 'joko' | 'noparking' | 'direction',
    text?: string
  ): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 256, 256);

    if (kind === 'tomare') {
      // Inverted red triangle with white border
      ctx.beginPath();
      ctx.moveTo(16, 24);
      ctx.lineTo(240, 24);
      ctx.lineTo(128, 232);
      ctx.closePath();
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#d62828';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(32, 34);
      ctx.lineTo(224, 34);
      ctx.lineTo(128, 214);
      ctx.closePath();
      ctx.fillStyle = '#d62828';
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.font = 'bold 44px "Noto Sans JP", sans-serif';
      ctx.fillText('止まれ', 128, 92);
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('STOP', 128, 134);
    } else if (kind === 'joko') {
      // 徐行 (Slow Down): White inverted triangle with thick red border
      ctx.beginPath();
      ctx.moveTo(16, 24);
      ctx.lineTo(240, 24);
      ctx.lineTo(128, 232);
      ctx.closePath();
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 22;
      ctx.strokeStyle = '#d62828';
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.textAlign = 'center';
      ctx.font = 'bold 42px "Noto Sans JP", sans-serif';
      ctx.fillText('徐 行', 128, 92);
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('SLOW', 128, 132);
    } else if (kind === 'crosswalk') {
      // 横断歩道 (Pedestrian Crossing): Blue pentagon home-plate shape with white pedestrian & stripes
      ctx.beginPath();
      ctx.moveTo(128, 16);
      ctx.lineTo(234, 92);
      ctx.lineTo(216, 236);
      ctx.lineTo(40, 236);
      ctx.lineTo(22, 92);
      ctx.closePath();
      ctx.fillStyle = '#005bac';
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // White pedestrian silhouette & zebra stripes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(128, 86, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(116, 108, 24, 48);
      for (let i = -2; i <= 2; i++) {
        ctx.fillRect(118 + i * 24, 186, 14, 32);
      }
    } else if (kind === 'noparking') {
      // 駐車禁止 (No Parking): Blue circle with red border and single diagonal red slash
      ctx.beginPath();
      ctx.arc(128, 128, 110, 0, Math.PI * 2);
      ctx.fillStyle = '#005bac';
      ctx.fill();
      ctx.lineWidth = 24;
      ctx.strokeStyle = '#d62828';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(52, 52);
      ctx.lineTo(204, 204);
      ctx.lineWidth = 24;
      ctx.strokeStyle = '#d62828';
      ctx.stroke();
    } else if (kind === 'direction') {
      // 指定方向外進行禁止 (Only Straight & Left permitted): Blue circle with white arrows
      ctx.beginPath();
      ctx.arc(128, 128, 112, 0, Math.PI * 2);
      ctx.fillStyle = '#005bac';
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.strokeStyle = '#ffffff';
      ctx.fillStyle = '#ffffff';
      ctx.lineWidth = 18;
      ctx.lineCap = 'round';
      // Up arrow
      ctx.beginPath();
      ctx.moveTo(128, 200);
      ctx.lineTo(128, 56);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(128, 38);
      ctx.lineTo(100, 74);
      ctx.lineTo(156, 74);
      ctx.closePath();
      ctx.fill();
      // Left branch arrow
      ctx.beginPath();
      ctx.moveTo(128, 134);
      ctx.lineTo(64, 134);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(46, 134);
      ctx.lineTo(80, 108);
      ctx.lineTo(80, 160);
      ctx.closePath();
      ctx.fill();
    } else if (kind === '40') {
      ctx.beginPath();
      ctx.arc(128, 128, 114, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 22;
      ctx.strokeStyle = '#d62828';
      ctx.stroke();
      ctx.fillStyle = '#0f172a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 104px sans-serif';
      ctx.fillText('40', 128, 132);
    } else if (kind === 'rail') {
      ctx.save();
      ctx.translate(128, 128);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = '#f5b800';
      ctx.fillRect(-84, -84, 168, 168);
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#111827';
      ctx.strokeRect(-76, -76, 152, 152);
      ctx.restore();
      ctx.fillStyle = '#111827';
      ctx.textAlign = 'center';
      ctx.font = 'bold 34px "Noto Sans JP", sans-serif';
      ctx.fillText('踏切', 128, 138);
    } else {
      ctx.fillStyle = '#005bac';
      ctx.fillRect(12, 56, 232, 144);
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(20, 64, 216, 128);
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 38px "Noto Sans JP", sans-serif';
      ctx.fillText(text ?? '', 128, 128);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  private buildRoadSigns(): void {
    const postMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.6, roughness: 0.4 });
    const addSign = (
      kind: 'tomare' | '40' | 'rail' | 'guide' | 'crosswalk' | 'joko' | 'noparking' | 'direction',
      x: number,
      z: number,
      rotY: number,
      label?: string,
      w = 1.0,
      h = 1.0
    ) => {
      const grp = new THREE.Group();
      grp.position.set(x, 0, z);
      grp.rotation.y = rotY;
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.6, 8), postMat);
      pole.position.y = 1.3;
      pole.castShadow = true;
      grp.add(pole);

      const tex = this.createSignTexture(kind, label);
      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide })
      );
      plate.position.set(0, 2.35, 0.045);
      grp.add(plate);
      this.kyoshujoGroup.add(grp);
    };

    // Stop signs (止まれ) facing approaching drivers
    addSign('tomare', -67.5, 4.1, Math.PI / 2);
    addSign('tomare', -4.1, -38.5, 0);
    addSign('tomare', -24.7, -41.5, 0);
    addSign('tomare', -36.5, 41.5, Math.PI);

    // 40 km/h speed limit signs on North straight
    addSign('40', -55, -50.2, -Math.PI / 2);
    addSign('40', 30, -50.2, -Math.PI / 2);

    // Railroad warning signs
    addSign('rail', 26, -4.2, -Math.PI / 2);
    addSign('rail', 50, 4.2, Math.PI / 2);

    // Course station guide boards
    addSign('guide', -42.5, -4.5, 0, 'S字コース', 1.7, 1.05);
    addSign('guide', -51.0, 4.5, Math.PI, 'クランク', 1.7, 1.05);
    addSign('guide', 16.5, -27.5, -Math.PI / 2, '坂道発進', 1.7, 1.05);
    addSign('guide', 22.0, 28.5, -Math.PI / 2, '方向変換', 1.7, 1.05);
    addSign('guide', 43.0, 28.5, -Math.PI / 2, '縦列駐車', 1.7, 1.05);

    // Additional realistic Japanese traffic signs (横断歩道, 徐行, 駐車禁止, 指定方向外進行禁止)
    addSign('crosswalk', -21.5, 41.8, Math.PI / 2);
    addSign('crosswalk', 12.5, 19.8, -Math.PI / 2);
    addSign('joko', -44.2, -3.5, 0); // Slow Down entering S-Curve
    addSign('joko', 52.0, -27.5, -Math.PI / 2); // Slow Down on steep hill descent
    addSign('noparking', -10.0, -50.2, -Math.PI / 2); // No Parking zone on North straight
    addSign('direction', -4.2, 8.5, 0); // Designated direction sign at central intersection
  }

  private buildObstaclesAndBuildings(): void {
    // Parked obstacle van on North straight
    const vanObs = OBSTACLE_COLLIDERS[0];
    if (vanObs) {
      const van = new THREE.Group();
      van.position.set(vanObs.x, 0, vanObs.z);
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(vanObs.halfW * 2, 1.55, vanObs.halfL * 2),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.45 })
      );
      body.position.y = 0.92;
      body.castShadow = true;
      van.add(body);
      const glass = new THREE.Mesh(
        new THREE.BoxGeometry(vanObs.halfW * 1.6, 0.52, vanObs.halfL * 1.92),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2, metalness: 0.4 })
      );
      glass.position.y = 1.35;
      van.add(glass);

      // Orange safety cones around the parked obstacle
      const coneMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.5 });
      for (const cx of [-2.8, 2.8]) {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.55, 10), coneMat);
        cone.position.set(cx, 0.275, 0.2);
        cone.castShadow = true;
        van.add(cone);
      }
      this.kyoshujoGroup.add(van);
    }

    // 2-story Driving School Clubhouse (桜ヶ丘自動車教習所)
    const ch = OBSTACLE_COLLIDERS[1];
    if (ch) {
      const house = new THREE.Group();
      house.position.set(ch.x, 0, ch.z);
      const wall = new THREE.Mesh(
        new THREE.BoxGeometry(ch.halfW * 2, ch.height, ch.halfL * 2),
        new THREE.MeshStandardMaterial({ color: 0xf1ede4, roughness: 0.8 })
      );
      wall.position.y = ch.height / 2;
      wall.castShadow = true;
      wall.receiveShadow = true;
      house.add(wall);

      const roof = new THREE.Mesh(
        new THREE.BoxGeometry(ch.halfW * 2 + 0.6, 0.5, ch.halfL * 2 + 0.6),
        new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 })
      );
      roof.position.y = ch.height + 0.25;
      house.add(roof);

      // Tinted window bands facing north toward the track
      const winMat = new THREE.MeshStandardMaterial({ color: 0x1e3a5f, metalness: 0.5, roughness: 0.15 });
      for (const wy of [2.2, 5.0]) {
        const win = new THREE.Mesh(new THREE.BoxGeometry(ch.halfW * 1.8, 1.3, 0.1), winMat);
        win.position.set(0, wy, -ch.halfL - 0.02);
        house.add(win);
      }

      // Rooftop Signboard
      const signCanvas = document.createElement('canvas');
      signCanvas.width = 512;
      signCanvas.height = 128;
      const ctx = signCanvas.getContext('2d')!;
      ctx.fillStyle = '#005bac';
      ctx.fillRect(0, 0, 512, 128);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 8;
      ctx.strokeRect(8, 8, 496, 112);
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 46px "Noto Sans JP", sans-serif';
      ctx.fillText('桜ヶ丘自動車教習所', 256, 66);

      const signTex = new THREE.CanvasTexture(signCanvas);
      signTex.colorSpace = THREE.SRGBColorSpace;
      const board = new THREE.Mesh(
        new THREE.BoxGeometry(14, 2.4, 0.4),
        new THREE.MeshBasicMaterial({ map: signTex })
      );
      board.position.set(0, ch.height + 1.8, -ch.halfL + 1.0);
      house.add(board);

      this.kyoshujoGroup.add(house);
    }

    // Elevated Control Tower (管制塔) at (-14, 38)
    const tower = new THREE.Group();
    tower.position.set(-14, 0, 38);
    const towerStem = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.4, 6.5, 8),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.7 })
    );
    towerStem.position.y = 3.25;
    towerStem.castShadow = true;
    tower.add(towerStem);

    const cab = new THREE.Mesh(
      new THREE.CylinderGeometry(2.3, 1.9, 2.2, 8),
      new THREE.MeshStandardMaterial({ color: 0x1e3a5f, metalness: 0.6, roughness: 0.15 })
    );
    cab.position.y = 7.4;
    cab.castShadow = true;
    tower.add(cab);

    const cap = new THREE.Mesh(
      new THREE.ConeGeometry(2.6, 1.0, 8),
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 })
    );
    cap.position.y = 9.0;
    tower.add(cap);
    this.kyoshujoGroup.add(tower);
  }

  private buildTreesAndFence(): void {
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x3f6f3b, roughness: 0.85 });
    const sakuraMat = new THREE.MeshStandardMaterial({ color: 0xf4b6c2, roughness: 0.8 });

    const treePositions: [number, number, boolean][] = [];
    for (let x = -84; x <= 84; x += 14) {
      treePositions.push([x, -55.5, Math.abs(x) % 28 === 0]);
      if (Math.abs(x) > 22) treePositions.push([x, 55.5, false]);
    }
    for (let z = -42; z <= 42; z += 14) {
      treePositions.push([-85.5, z, z === 0]);
      treePositions.push([85.5, z, z === -14]);
    }
    // Inner courtyard accent trees
    treePositions.push([-16, -24, true], [14, 14, false], [62, 12, true]);

    for (const [tx, tz, isSakura] of treePositions) {
      const grp = new THREE.Group();
      grp.position.set(tx, 0, tz);
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 2.2, 7), trunkMat);
      trunk.position.y = 1.1;
      trunk.castShadow = true;
      grp.add(trunk);

      const canopy = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.75, 1),
        isSakura ? sakuraMat : leafMat
      );
      canopy.position.y = 3.2;
      canopy.castShadow = true;
      grp.add(canopy);
      this.kyoshujoGroup.add(grp);
    }

    // Perimeter guardrail fence
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0xdbe2ea, roughness: 0.55 });
    const northFence = new THREE.Mesh(new THREE.BoxGeometry(178, 0.9, 0.14), fenceMat);
    northFence.position.set(0, 0.45, -59);
    const southFence = new THREE.Mesh(new THREE.BoxGeometry(178, 0.9, 0.14), fenceMat);
    southFence.position.set(0, 0.45, 59);
    const westFence = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.9, 118), fenceMat);
    westFence.position.set(-89, 0.45, 0);
    const eastFence = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.9, 118), fenceMat);
    eastFence.position.set(89, 0.45, 0);
    this.kyoshujoGroup.add(northFence, southFence, westFence, eastFence);
  }

  private createWaypointBeacon(): THREE.Group {
    const grp = new THREE.Group();
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.6, 2.1, 28),
      new THREE.MeshBasicMaterial({ color: 0x0e9f6e, side: THREE.DoubleSide, transparent: true, opacity: 0.75 })
    );
    ring.rotation.x = -Math.PI / 2;
    grp.add(ring);

    const arrow = new THREE.Mesh(
      new THREE.ConeGeometry(0.55, 1.3, 4),
      new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.7 })
    );
    arrow.rotation.x = Math.PI;
    arrow.position.y = 2.8;
    grp.add(arrow);
    return grp;
  }
}

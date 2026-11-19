// @ts-nocheck
// 400cc naked motorcycle adapted from Drive Sim Web / GaimenGo (MIT License).
// +Z forward, dimensions in metres.
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

export function buildCB400(car: THREE.Object3D, chrome: THREE.Material, useReflector = true) {
  const mirrorSurfaces: THREE.Object3D[] = [];
  const material = (color: number, roughness = 0.5, metalness = 0.1) =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness });
  const paint = new THREE.MeshPhysicalMaterial({
    color: 0x059669,
    roughness: 0.22,
    metalness: 0.3,
    clearcoat: 1,
    clearcoatRoughness: 0.13,
  });
  const springMat = new THREE.MeshPhysicalMaterial({
    color: 0x34d399,
    roughness: 0.3,
    metalness: 0.35,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
  });
  const silver = material(0xd5d8dc, 0.3, 0.65);
  const black = material(0x16191d, 0.65, 0.3);
  const rubber = material(0x101215, 0.93, 0);
  const seatMat = material(0x22242a, 0.96, 0);
  const engineMat = material(0x3b3d43, 0.4, 0.58);
  const alloy = material(0x868b92, 0.32, 0.7);
  const polished = material(0xe1e3e7, 0.2, 0.6);

  function named<T extends THREE.Object3D>(obj: T, label: string): T {
    obj.name = label;
    obj.userData.partName = label;
    return obj;
  }
  function group(parent: THREE.Object3D, label: string) {
    const g = named(new THREE.Group(), label);
    parent.add(g);
    return g;
  }
  function mesh(
    parent: THREE.Object3D,
    label: string,
    geometry: THREE.BufferGeometry,
    mat: THREE.Material,
    x = 0,
    y = 0,
    z = 0
  ) {
    const m = named(new THREE.Mesh(geometry, mat), label);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  const box = (
    p: THREE.Object3D,
    n: string,
    w: number,
    h: number,
    d: number,
    m: THREE.Material,
    x = 0,
    y = 0,
    z = 0
  ) => mesh(p, n, new THREE.BoxGeometry(w, h, d), m, x, y, z);
  function tube(
    parent: THREE.Object3D,
    label: string,
    points: [number, number, number][],
    radius: number,
    mat: THREE.Material
  ) {
    return mesh(
      parent,
      label,
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p))),
        40,
        radius,
        8,
        false
      ),
      mat
    );
  }
  function rod(
    parent: THREE.Object3D,
    label: string,
    a: [number, number, number],
    b: [number, number, number],
    radius: number,
    mat: THREE.Material
  ) {
    const start = new THREE.Vector3(...a);
    const end = new THREE.Vector3(...b);
    const delta = end.clone().sub(start);
    const m = mesh(parent, label, new THREE.CylinderGeometry(radius, radius, delta.length(), 16), mat);
    m.position.copy(start.add(end).multiplyScalar(0.5));
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    return m;
  }
  function ellipsoid(
    parent: THREE.Object3D,
    label: string,
    sx: number,
    sy: number,
    sz: number,
    mat: THREE.Material,
    x = 0,
    y = 0,
    z = 0
  ) {
    const m = mesh(parent, label, new THREE.SphereGeometry(1, 36, 24), mat, x, y, z);
    m.scale.set(sx, sy, sz);
    return m;
  }
  function shell(
    parent: THREE.Object3D,
    label: string,
    sections: [number, number, number, number][],
    mat: THREE.Material
  ) {
    const positions: number[] = [];
    const indices: number[] = [];
    const segments = 40;
    for (const [z, w, low, high] of sections) {
      for (let i = 0; i < segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        positions.push(Math.cos(a) * w, (high + low) / 2 + Math.sin(a) * ((high - low) / 2), z);
      }
    }
    for (let j = 0; j < sections.length - 1; j++) {
      for (let i = 0; i < segments; i++) {
        const a = j * segments + i;
        const b = j * segments + ((i + 1) % segments);
        indices.push(a, b, b + segments, a, b + segments, a + segments);
      }
    }
    for (let i = 1; i < segments - 1; i++) {
      indices.push(0, i + 1, i);
      const last = (sections.length - 1) * segments;
      indices.push(last, last + i, last + i + 1);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return mesh(parent, label, geo, mat);
  }

  const motorcycleRoot = group(car, 'motorcycleRoot');
  const bikeCockpitRoot = group(car, 'bikeCockpitRoot');
  const tankSections: [number, number, number, number][] = [
    [-0.28, 0.065, 0.77, 0.86],
    [-0.16, 0.135, 0.76, 0.93],
    [0, 0.205, 0.77, 1.02],
    [0.19, 0.218, 0.8, 1.064],
    [0.34, 0.184, 0.83, 1.052],
    [0.46, 0.09, 0.84, 0.98],
    [0.49, 0.025, 0.87, 0.93],
  ];
  const tank = shell(motorcycleRoot, 'paintedTank', tankSections, paint);

  function tankPoint(z: number, angle: number, side: number, offset: number): [number, number, number] {
    let i = 0;
    while (i < tankSections.length - 2 && tankSections[i + 1][0] < z) i++;
    const a = tankSections[i];
    const b = tankSections[i + 1];
    const t = (z - a[0]) / (b[0] - a[0]);
    const w = THREE.MathUtils.lerp(a[1], b[1], t);
    const low = THREE.MathUtils.lerp(a[2], b[2], t);
    const high = THREE.MathUtils.lerp(a[3], b[3], t);
    return [side * (Math.cos(angle) * w + offset), (high + low) / 2 + Math.sin(angle) * ((high - low) / 2), z];
  }
  for (const side of [-1, 1]) {
    for (const [label, inset, offset, mat] of [
      ['whitePinstripe', 0, 0.004, silver],
      ['blackSweep', 0.025, 0.005, black],
      ['silverPanel', 0.064, 0.006, silver],
    ] as const) {
      const positions: number[] = [];
      const indices: number[] = [];
      const samples: [number, number, number][] = [
        [-0.215, -0.65, 0.06],
        [-0.15, -0.82, 0.34],
        [0, -0.75, 0.65],
        [0.18, -0.5, 0.77],
        [0.29, -0.24, 0.65],
        [0.38, 0.05, 0.22],
      ];
      for (const [z, bottom, top] of samples) {
        for (let j = 0; j <= 12; j++) {
          positions.push(...tankPoint(z, THREE.MathUtils.lerp(bottom + inset, top - inset, j / 12), side, offset));
        }
      }
      for (let i = 0; i < samples.length - 1; i++) {
        for (let j = 0; j < 12; j++) {
          const a = i * 13 + j;
          const b = a + 13;
          indices.push(a, b, a + 1, a + 1, b, b + 1);
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setIndex(indices);
      geo.computeVertexNormals();
      const pMat = mat.clone();
      pMat.side = THREE.DoubleSide;
      mesh(motorcycleRoot, `${label}${side}`, geo, pMat);
    }
  }
  const fuelCap = mesh(motorcycleRoot, 'fuelCap', new THREE.CylinderGeometry(0.043, 0.043, 0.009, 32), silver, 0, 1.068, 0.18);
  mesh(fuelCap, 'lock', new THREE.BoxGeometry(0.018, 0.004, 0.008), black, 0, 0.007, 0);
  shell(
    motorcycleRoot,
    'steppedSaddle',
    [
      [-0.96, 0.085, 0.88, 0.94],
      [-0.85, 0.145, 0.855, 0.966],
      [-0.63, 0.153, 0.82, 0.95],
      [-0.45, 0.125, 0.775, 0.867],
      [-0.27, 0.108, 0.775, 0.837],
      [-0.19, 0.07, 0.8, 0.837],
    ],
    seatMat
  );
  shell(
    motorcycleRoot,
    'paintedTailCowl',
    [
      [-1.02, 0.035, 0.86, 0.91],
      [-0.93, 0.11, 0.815, 0.88],
      [-0.73, 0.151, 0.76, 0.849],
      [-0.5, 0.125, 0.73, 0.81],
      [-0.31, 0.08, 0.725, 0.77],
    ],
    paint
  );
  for (const side of [-1, 1]) {
    tube(
      motorcycleRoot,
      `tailSilverStripe${side}`,
      [
        [side * 0.11, 0.85, -0.94],
        [side * 0.153, 0.82, -0.76],
        [side * 0.13, 0.78, -0.52],
        [side * 0.09, 0.75, -0.35],
      ],
      0.012,
      silver
    );
    tube(
      motorcycleRoot,
      `grabRail${side}`,
      [
        [side * 0.14, 0.87, -0.65],
        [side * 0.18, 0.92, -0.86],
        [side * 0.12, 0.94, -1.0],
      ],
      0.014,
      alloy
    );
    const coverShape = new THREE.Shape();
    coverShape.moveTo(-0.5, 0.8);
    coverShape.quadraticCurveTo(-0.34, 0.82, -0.17, 0.78);
    coverShape.lineTo(-0.25, 0.6);
    coverShape.quadraticCurveTo(-0.37, 0.6, -0.5, 0.8);
    const coverGeo = new THREE.ExtrudeGeometry(coverShape, {
      depth: 0.015,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.008,
      bevelThickness: 0.008,
      curveSegments: 16,
    });
    const p = mesh(motorcycleRoot, `sideCover${side}`, coverGeo, paint, side * 0.14);
    p.rotation.y = Math.PI / 2;
    p.scale.x = -1;
    tube(
      motorcycleRoot,
      `frameCradle${side}`,
      [
        [side * 0.12, 0.94, 0.38],
        [side * 0.16, 0.72, 0.3],
        [side * 0.18, 0.3, 0.15],
        [side * 0.17, 0.29, -0.25],
        [side * 0.14, 0.71, -0.48],
        [side * 0.12, 0.87, -0.7],
      ],
      0.018,
      black
    );
    rod(motorcycleRoot, `seatSubframe${side}`, [side * 0.12, 0.63, -0.35], [side * 0.12, 0.88, -0.94], 0.019, black);
    rod(motorcycleRoot, `swingarm${side}`, [side * 0.13, 0.43, -0.2], [side * 0.135, 0.315, -0.715], 0.024, alloy);
    rod(motorcycleRoot, `shockShaft${side}`, [side * 0.168, 0.36, -0.72], [side * 0.168, 0.79, -0.55], 0.017, chrome);
    const spring: [number, number, number][] = [];
    const start = new THREE.Vector3(side * 0.168, 0.39, -0.71);
    const end = new THREE.Vector3(side * 0.168, 0.74, -0.57);
    for (let i = 0; i <= 96; i++) {
      const t = i / 96;
      const a = t * Math.PI * 2 * 10;
      const pt = start.clone().lerp(end, t);
      spring.push([pt.x + Math.cos(a) * 0.033, pt.y + Math.sin(a) * 0.013, pt.z + Math.sin(a) * 0.031]);
    }
    tube(motorcycleRoot, `shockSpring${side}`, spring, 0.0065, springMat);
    rod(motorcycleRoot, `footpeg${side}`, [side * 0.15, 0.44, -0.23], [side * 0.29, 0.44, -0.23], 0.017, black);
    box(motorcycleRoot, `heelPlate${side}`, 0.016, 0.11, 0.19, silver, side * 0.19, 0.45, -0.32);
  }
  ellipsoid(motorcycleRoot, 'crankcase', 0.225, 0.17, 0.24, engineMat, 0, 0.48, 0);
  for (const side of [-1, 1]) {
    const cover = mesh(
      motorcycleRoot,
      `engineCover${side}`,
      new THREE.CylinderGeometry(0.124, 0.124, 0.045, 40),
      engineMat,
      side * 0.228,
      0.46,
      -0.05
    );
    cover.rotation.z = Math.PI / 2;
    const small = mesh(
      motorcycleRoot,
      `clutchCover${side}`,
      new THREE.CylinderGeometry(0.073, 0.073, 0.026, 32),
      alloy,
      side * 0.236,
      0.43,
      0.135
    );
    small.rotation.z = Math.PI / 2;
  }
  for (let i = 0; i < 4; i++) {
    const x = (i - 1.5) * 0.095;
    box(motorcycleRoot, `cylinder${i}`, 0.084, 0.21, 0.18, engineMat, x, 0.65, 0.115);
    for (let j = 0; j < 7; j++) {
      box(motorcycleRoot, `coolingFin${i}:${j}`, 0.091, 0.008, 0.19, alloy, x, 0.58 + j * 0.024, 0.12);
    }
    tube(
      motorcycleRoot,
      `header${i}`,
      [
        [x, 0.715, 0.22],
        [x, 0.64, 0.33],
        [x, 0.4, 0.34],
        [x, 0.235, 0.2],
        [x * 0.65, 0.225, -0.13],
        [-0.16, 0.26, -0.37],
      ],
      0.022,
      polished
    );
  }
  box(motorcycleRoot, 'camCover', 0.43, 0.065, 0.235, engineMat, 0, 0.802, 0.12);
  box(motorcycleRoot, 'radiator', 0.32, 0.2, 0.055, black, 0, 0.7, 0.335);
  tube(
    motorcycleRoot,
    'collector',
    [
      [-0.16, 0.26, -0.37],
      [-0.24, 0.3, -0.48],
      [-0.26, 0.39, -0.62],
    ],
    0.041,
    polished
  );
  rod(motorcycleRoot, 'chromeSilencer', [-0.265, 0.37, -0.49], [-0.265, 0.56, -0.98], 0.063, polished);
  rod(motorcycleRoot, 'exhaustOutlet', [-0.265, 0.56, -0.98], [-0.265, 0.57, -1.01], 0.045, black);

  function wheel(parent: THREE.Object3D, label: string, width: number) {
    const g = group(parent, label);
    const tire = mesh(g, 'tire', new THREE.TorusGeometry(0.262, 0.053, 16, 48), rubber);
    tire.rotation.y = Math.PI / 2;
    tire.scale.z = width / 0.106;
    const rim = mesh(g, 'rim', new THREE.TorusGeometry(0.218, 0.014, 10, 36), black);
    rim.rotation.y = Math.PI / 2;
    const hub = mesh(g, 'hub', new THREE.CylinderGeometry(0.048, 0.048, width + 0.018, 24), alloy);
    hub.rotation.z = Math.PI / 2;
    for (const side of [-1, 1]) {
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        rod(
          g,
          `spoke${side}:${i}`,
          [side * 0.026, Math.sin(a) * 0.047, Math.cos(a) * 0.047],
          [side * 0.044, Math.sin(a + 0.13) * 0.211, Math.cos(a + 0.13) * 0.211],
          0.014,
          black
        );
      }
      const disc = mesh(g, `brakeDisc${side}`, new THREE.RingGeometry(0.093, 0.146, 36), silver, side * (width / 2 + 0.014));
      disc.rotation.y = (side * Math.PI) / 2;
    }
    return { group: g, tire, rim, hub };
  }

  const bikeFrontWheelPivot = group(motorcycleRoot, 'bikeFrontWheelPivot');
  bikeFrontWheelPivot.position.set(0, 0.315, 0.72);
  const bikeFrontWheelAssembly = wheel(bikeFrontWheelPivot, 'frontWheel', 0.12);
  const bikeRearWheelMount = group(motorcycleRoot, 'bikeRearWheelMount');
  bikeRearWheelMount.position.set(0, 0.315, -0.715);
  const bikeRearWheelAssembly = wheel(bikeRearWheelMount, 'rearWheel', 0.16);
  mesh(bikeRearWheelMount, 'rearSprocket', new THREE.RingGeometry(0.048, 0.12, 32), alloy, 0.096, 0, 0).rotation.y =
    Math.PI / 2;
  tube(
    motorcycleRoot,
    'driveChain',
    [
      [0.105, 0.4, -0.71],
      [0.105, 0.5, -0.24],
      [0.105, 0.42, -0.15],
      [0.105, 0.23, -0.69],
      [0.105, 0.25, -0.82],
      [0.105, 0.35, -0.83],
      [0.105, 0.4, -0.71],
    ],
    0.009,
    alloy
  );

  for (const side of [-1, 1]) {
    rod(bikeFrontWheelPivot, `forkChrome${side}`, [side * 0.095, 0.08, -0.03], [side * 0.095, 0.63, -0.27], 0.021, chrome);
    rod(bikeFrontWheelPivot, `forkSlider${side}`, [side * 0.095, 0, 0], [side * 0.095, 0.32, -0.137], 0.031, black);
    box(bikeFrontWheelPivot, `brakeCaliper${side}`, 0.048, 0.1, 0.056, black, side * 0.098, 0.04, -0.115);
  }
  const fenderMat = paint.clone();
  fenderMat.side = THREE.DoubleSide;
  const fenderPoints: number[] = [];
  const fenderIndices: number[] = [];
  for (let i = 0; i <= 24; i++) {
    const a = -1.13 + (i / 24) * 2.26;
    for (let j = 0; j <= 6; j++) {
      const x = (j / 6 - 0.5) * 0.15;
      fenderPoints.push(x, Math.cos(a) * (0.359 - 0.01 * (x / 0.075) ** 2), Math.sin(a) * 0.359);
    }
  }
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 6; j++) {
      const a = i * 7 + j;
      fenderIndices.push(a, a + 7, a + 1, a + 1, a + 7, a + 8);
    }
  }
  const fenderGeometry = new THREE.BufferGeometry();
  fenderGeometry.setAttribute('position', new THREE.Float32BufferAttribute(fenderPoints, 3));
  fenderGeometry.setIndex(fenderIndices);
  fenderGeometry.computeVertexNormals();
  mesh(bikeFrontWheelPivot, 'frontFender', fenderGeometry, fenderMat);
  box(motorcycleRoot, 'rearMudguard', 0.14, 0.035, 0.27, black, 0, 0.68, -0.94).rotation.x = 0.5;

  function makeBar(parent: THREE.Object3D, label: string, y: number, z: number) {
    const g = group(parent, label);
    g.position.set(0, y, z);
    tube(
      g,
      'chromeHandlebar',
      [
        [-0.36, 0, -0.06],
        [-0.24, 0.014, -0.04],
        [-0.16, 0.005, -0.01],
        [-0.1, -0.035, 0.025],
        [0.1, -0.035, 0.025],
        [0.16, 0.005, -0.01],
        [0.24, 0.014, -0.04],
        [0.36, 0, -0.06],
      ],
      0.012,
      chrome
    );
    for (const side of [-1, 1]) {
      rod(g, `grip${side}`, [side * 0.26, 0.009, -0.05], [side * 0.37, 0, -0.065], 0.022, rubber);
      box(g, `switchBlock${side}`, 0.045, 0.041, 0.052, black, side * 0.235, 0.013, -0.04);
      tube(
        g,
        `lever${side}`,
        [
          [side * 0.21, 0.013, -0.006],
          [side * 0.3, 0.019, 0.017],
          [side * 0.37, 0.014, -0.005],
        ],
        0.0065,
        silver
      );
      rod(g, `mirrorBoot${side}`, [side * 0.235, 0.02, -0.025], [side * 0.245, 0.075, -0.02], 0.012, black);
      tube(
        g,
        `mirrorStem${side}`,
        [
          [side * 0.245, 0.07, -0.02],
          [side * 0.26, 0.115, 0.008],
          [side * 0.34, 0.165, 0.04],
          [side * 0.425, 0.22, 0.075],
        ],
        0.0055,
        polished
      );
      ellipsoid(g, `roundMirror${side}`, 0.059, 0.059, 0.012, black, side * 0.465, 0.245, 0.085);
      const geo = new THREE.CircleGeometry(1, 32);
      const mirrorSurface = named(
        useReflector
          ? new Reflector(geo, {
              color: 0xb6b6b6,
              textureWidth: 256,
              textureHeight: 256,
              multisample: 0,
              clipBias: 0.001,
            })
          : new THREE.Mesh(geo, material(0xa7bbc8, 0.08, 0.8)),
        `mirrorGlass${side}`
      );
      mirrorSurface.position.set(side * 0.465, 0.245, 0.071);
      mirrorSurface.scale.set(0.055, 0.055, 1);
      mirrorSurface.rotation.set(0, Math.PI, 0);
      g.add(mirrorSurface);
      mirrorSurfaces.push(mirrorSurface);
      const bezel = mesh(g, `mirrorBezel${side}`, new THREE.RingGeometry(1, 1.07, 32), polished, side * 0.465, 0.245, 0.07);
      bezel.scale.copy(mirrorSurface.scale);
      bezel.rotation.copy(mirrorSurface.rotation);
    }
    box(g, 'upperTripleClamp', 0.25, 0.028, 0.105, black, 0, -0.1, 0.055);
    return g;
  }

  const bikeHandlebar = makeBar(motorcycleRoot, 'bikeHandlebar', 1.035, 0.4);
  const headBucket = mesh(
    motorcycleRoot,
    'roundHeadlightBucket',
    new THREE.CylinderGeometry(0.095, 0.092, 0.105, 32),
    chrome,
    0,
    0.947,
    0.585
  );
  headBucket.rotation.x = Math.PI / 2;
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0xf4f5ec,
    emissive: 0xffffe1,
    emissiveIntensity: 0.5,
    roughness: 0.15,
  });
  mesh(motorcycleRoot, 'headlightLens', new THREE.CircleGeometry(0.086, 32), lampMat, 0, 0.947, 0.64);
  mesh(motorcycleRoot, 'headlightRim', new THREE.TorusGeometry(0.09, 0.006, 8, 32), chrome, 0, 0.947, 0.645);

  let speed = 0;
  let rpm = 0.22;
  const displays: { ctx: CanvasRenderingContext2D; texture: THREE.CanvasTexture; max: number; isRpm: boolean }[] = [];
  function meter(parent: THREE.Object3D, label: string, x: number, y: number, z: number, max: number, isRpm: boolean) {
    const g = group(parent, label);
    g.position.set(x, y, z);
    g.rotation.x = -0.42;
    const bucket = mesh(g, 'meterBucket', new THREE.CylinderGeometry(0.068, 0.068, 0.065, 24), black, 0, 0, 0.018);
    bucket.rotation.x = Math.PI / 2;
    mesh(g, 'chromeMeterRim', new THREE.TorusGeometry(0.065, 0.005, 8, 28), chrome, 0, 0, -0.019);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const dial = mesh(
      g,
      'instrumentFace',
      new THREE.CircleGeometry(0.061, 28),
      new THREE.MeshBasicMaterial({ map: texture, toneMapped: false }),
      0,
      0,
      -0.02
    );
    dial.rotation.y = Math.PI;
    displays.push({ ctx, texture, max, isRpm });
    return g;
  }
  function mountedMeters(parent: THREE.Object3D, prefix: string) {
    box(parent, `${prefix}InstrumentBridge`, 0.245, 0.034, 0.067, black, 0, -0.005, 0.124);
    box(parent, `${prefix}CenterPod`, 0.05, 0.081, 0.049, black, 0, 0.051, 0.137);
    meter(parent, `${prefix}Speedometer`, 0.079, 0.064, 0.143, 180, false);
    meter(parent, `${prefix}Tachometer`, -0.079, 0.064, 0.143, 13, true);
  }
  mountedMeters(bikeHandlebar, 'exterior');

  const cockpitTank = tank.clone();
  cockpitTank.position.set(0, 0.16, 0.08);
  bikeCockpitRoot.add(cockpitTank);
  const bikeCockpitBar = makeBar(bikeCockpitRoot, 'bikeCockpitBar', 1.17, 0.52);
  mountedMeters(bikeCockpitBar, 'cockpit');

  let old = '';
  function updateBikeCockpit(ms: number, rpmRatio: number) {
    speed = Math.round(Math.abs(ms) * 3.6);
    rpm = Math.round(rpmRatio * 40) / 40;
    const key = `${speed}/${rpm}`;
    if (key === old) return;
    old = key;
    for (const d of displays) {
      const c = d.ctx;
      c.fillStyle = '#10171d';
      c.fillRect(0, 0, 256, 256);
      c.textAlign = 'center';
      for (let i = 0; i <= 12; i++) {
        const a = Math.PI * (0.75 + (1.5 * i) / 12);
        c.strokeStyle = i > 10 ? '#ee4a50' : '#d7e3e9';
        c.lineWidth = i % 2 ? 2 : 4;
        c.beginPath();
        c.moveTo(128 + Math.cos(a) * 91, 128 + Math.sin(a) * 91);
        c.lineTo(128 + Math.cos(a) * 109, 128 + Math.sin(a) * 109);
        c.stroke();
        if (i % 2 === 0) {
          c.fillStyle = '#e3eaef';
          c.font = '15px sans-serif';
          c.fillText(String(Math.round((i / 12) * d.max)), 128 + Math.cos(a) * 76, 133 + Math.sin(a) * 76);
        }
      }
      const value = d.isRpm ? rpm * 12 : speed;
      const a = Math.PI * (0.75 + 1.5 * Math.min(value / d.max, 1));
      c.strokeStyle = '#ff5147';
      c.lineWidth = 4;
      c.beginPath();
      c.moveTo(128, 128);
      c.lineTo(128 + Math.cos(a) * 90, 128 + Math.sin(a) * 90);
      c.stroke();
      c.fillStyle = '#c5d7df';
      c.font = '14px sans-serif';
      c.fillText(d.isRpm ? '×1000' : 'km/h', 128, 176);
      c.fillStyle = '#172c31';
      c.fillRect(94, 189, 68, 25);
      c.fillStyle = '#b6e2d4';
      c.font = '18px monospace';
      c.fillText(d.isRpm ? String(Math.round(rpm * 12000)) : String(speed), 128, 208);
      d.texture.needsUpdate = true;
    }
  }
  updateBikeCockpit(0, 0.22);

  function signal(label: string, x: number, y: number, z: number, color: number, w = 0.056) {
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.02,
      roughness: 0.25,
    });
    const m = box(motorcycleRoot, label, w, 0.034, 0.036, mat, x, y, z);
    return { mesh: m, material: mat };
  }
  const bikeSignalLamps = {
    left: [
      signal('frontLeftSignal', 0.16, 0.905, 0.584, 0xffa52a),
      signal('rearLeftSignal', 0.16, 0.78, -0.985, 0xffa52a),
    ],
    right: [
      signal('frontRightSignal', -0.16, 0.905, 0.584, 0xffa52a),
      signal('rearRightSignal', -0.16, 0.78, -0.985, 0xffa52a),
    ],
  };
  const bikeBrakeLamp = signal('tailLamp', 0, 0.849, -1.012, 0xe51b2b, 0.16);

  return {
    motorcycleRoot,
    bikeCockpitRoot,
    bikeCockpitBar,
    bikeHandlebar,
    bikeFrontWheelPivot,
    bikeFrontWheelAssembly,
    bikeRearWheelAssembly,
    bikeRearWheelMount,
    bikeSignalLamps,
    bikeBrakeLamp,
    updateBikeCockpit,
    mirrorSurfaces,
  };
}

import * as THREE from 'three';
import { forwardVector, normalizeAngle } from '../core/coordinates';
import type { TrafficSignalController } from '../core/trafficSignals';
import type { InputState, Locale, VehicleState } from '../types';

export type RouteTurnKind = 'start' | 'straight' | 'left' | 'right' | 'uturn' | 'goal';
export type RouteStampKind = 'stopSign' | 'trafficLight' | 'pole';
export type RouteMemoryMode = 'guided' | 'blind' | 'autodrive';
export type AutoTraceColor = 'red' | 'blue' | 'green' | 'orange';

export interface RouteWaypoint {
  x: number;
  z: number;
  turn: RouteTurnKind;
  note?: string;
}

export interface RouteStamp {
  kind: RouteStampKind;
  x: number;
  z: number;
  heading: number;
}

export interface CustomRouteData {
  waypoints: RouteWaypoint[];
  stamps: RouteStamp[];
}

const ROUTE_STORAGE_KEY = 'jp_kyoshujo_custom_route_v1';

export class CustomRouteTrainer {
  public readonly group = new THREE.Group();
  private readonly ribbonGroup = new THREE.Group();
  private readonly stampGroup = new THREE.Group();
  private readonly activeRing: THREE.Mesh;

  private data: CustomRouteData = { waypoints: [], stamps: [] };
  private memoryMode: RouteMemoryMode = 'guided';
  private currentWpIndex = 0;
  private wrongTurnCount = 0;
  private bestDistToCurrentWp = Infinity;
  private offRouteAlert = false;
  private completed = false;
  private autoStopTimer = 0;
  private stoppedAtStampIds = new Set<number>();

  private trafficLightLamps: {
    green: THREE.MeshStandardMaterial;
    yellow: THREE.MeshStandardMaterial;
    red: THREE.MeshStandardMaterial;
  }[] = [];

  public onRouteCompleted?: (wrongTurns: number, totalWaypoints: number) => void;

  constructor(scene: THREE.Scene) {
    this.group.add(this.ribbonGroup, this.stampGroup);

    // Floating target ring for current checkpoint
    const ringGeo = new THREE.RingGeometry(1.4, 2.0, 28);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    this.activeRing = new THREE.Mesh(ringGeo, ringMat);
    this.activeRing.rotation.x = -Math.PI / 2;
    this.activeRing.position.y = 0.06;
    this.activeRing.visible = false;
    this.group.add(this.activeRing);

    scene.add(this.group);
    this.loadSavedRoute();
  }

  getData(): CustomRouteData {
    return this.data;
  }

  hasRoute(): boolean {
    return this.data.waypoints.length >= 2;
  }

  getMemoryMode(): RouteMemoryMode {
    return this.memoryMode;
  }

  setMemoryMode(mode: RouteMemoryMode): void {
    this.memoryMode = mode;
    // In 'blind' memory recall mode, hide the 3D road ribbon so driver relies on memory!
    this.ribbonGroup.visible = mode !== 'blind';
    this.activeRing.visible = this.hasRoute() && (mode !== 'blind' || this.offRouteAlert);
  }

  setRouteData(data: CustomRouteData, persist = true): void {
    this.data = {
      waypoints: data.waypoints.map((w) => ({ ...w })),
      stamps: data.stamps.map((s) => ({ ...s })),
    };
    this.recomputeTurnDirections();
    this.rebuild3DVisuals();
    this.resetProgress();
    if (persist) {
      try {
        window.localStorage.setItem(ROUTE_STORAGE_KEY, JSON.stringify(this.data));
      } catch {
        // Ignore quota errors
      }
    }
  }

  clearRoute(): void {
    this.setRouteData({ waypoints: [], stamps: [] }, true);
  }

  private loadSavedRoute(): void {
    try {
      const raw = window.localStorage.getItem(ROUTE_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as CustomRouteData;
      if (Array.isArray(parsed?.waypoints) && Array.isArray(parsed?.stamps)) {
        this.setRouteData(parsed, false);
      }
    } catch {
      // Ignore
    }
  }

  resetProgress(): void {
    this.currentWpIndex = this.data.waypoints.length > 1 ? 1 : 0;
    this.wrongTurnCount = 0;
    this.bestDistToCurrentWp = Infinity;
    this.offRouteAlert = false;
    this.completed = false;
    this.autoStopTimer = 0;
    this.stoppedAtStampIds.clear();
    this.setMemoryMode(this.memoryMode);
  }

  getStartPose(): { x: number; z: number; heading: number } | null {
    if (this.data.waypoints.length < 2) return null;
    const p0 = this.data.waypoints[0];
    const p1 = this.data.waypoints[1];
    // Recall: forwardVector(heading) = (-sin h, -cos h) => heading = atan2(-dx, -dz)
    const heading = Math.atan2(-(p1.x - p0.x), -(p1.z - p0.z));
    return { x: p0.x, z: p0.z, heading };
  }

  /**
   * Automatically computes 'left' | 'right' | 'straight' | 'uturn' | 'goal' at each waypoint.
   */
  public recomputeTurnDirections(): void {
    const wps = this.data.waypoints;
    for (let i = 0; i < wps.length; i++) {
      if (i === 0) {
        wps[i].turn = 'start';
        continue;
      }
      if (i === wps.length - 1) {
        wps[i].turn = 'goal';
        continue;
      }
      const prev = wps[i - 1];
      const curr = wps[i];
      const next = wps[i + 1];
      const h1 = Math.atan2(-(curr.x - prev.x), -(curr.z - prev.z));
      const h2 = Math.atan2(-(next.x - curr.x), -(next.z - curr.z));
      const dh = normalizeAngle(h2 - h1);
      const deg = (dh * 180) / Math.PI;
      if (Math.abs(deg) > 135) wps[i].turn = 'uturn';
      else if (deg > 28) wps[i].turn = 'left';
      else if (deg < -28) wps[i].turn = 'right';
      else wps[i].turn = 'straight';
    }
  }

  /**
   * Scans an uploaded route map image for a colored route line (Red, Blue, Green, Orange)
   * and extracts an ordered chain of waypoints in world coordinates.
   */
  autoExtractRouteFromImage(
    img: HTMLImageElement | HTMLCanvasElement,
    mapWidthMeters: number,
    colorMode: AutoTraceColor,
    startHint?: { x: number; z: number }
  ): RouteWaypoint[] {
    const sampleW = 180;
    const aspect = img.height / Math.max(1, img.width);
    const sampleH = Math.max(60, Math.round(sampleW * aspect));
    const mapDepthMeters = mapWidthMeters * aspect;

    const canvas = document.createElement('canvas');
    canvas.width = sampleW;
    canvas.height = sampleH;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0, sampleW, sampleH);
    const imgData = ctx.getImageData(0, 0, sampleW, sampleH).data;

    const hits: { x: number; z: number }[] = [];
    for (let py = 2; py < sampleH - 2; py += 2) {
      for (let px = 2; px < sampleW - 2; px += 2) {
        const idx = (py * sampleW + px) * 4;
        const r = imgData[idx];
        const g = imgData[idx + 1];
        const b = imgData[idx + 2];
        const a = imgData[idx + 3];
        if (a < 128) continue;

        let match = false;
        if (colorMode === 'red') {
          match = r > 155 && r - g > 55 && r - b > 55;
        } else if (colorMode === 'blue') {
          match = b > 150 && b - r > 45 && b - g > 20;
        } else if (colorMode === 'green') {
          match = g > 140 && g - r > 35 && g - b > 25;
        } else if (colorMode === 'orange') {
          match = r > 180 && g > 95 && g < 185 && b < 85;
        }

        if (match) {
          const wx = (px / sampleW - 0.5) * mapWidthMeters;
          const wz = (py / sampleH - 0.5) * mapDepthMeters;
          hits.push({ x: wx, z: wz });
        }
      }
    }

    if (hits.length < 4) return [];

    // Cluster into ~7m grid cells to thin dense pixel blobs
    const cellSize = Math.max(4, mapWidthMeters / 45);
    const cellMap = new Map<string, { sumX: number; sumZ: number; count: number }>();
    for (const pt of hits) {
      const cx = Math.round(pt.x / cellSize);
      const cz = Math.round(pt.z / cellSize);
      const key = `${cx},${cz}`;
      const cell = cellMap.get(key) ?? { sumX: 0, sumZ: 0, count: 0 };
      cell.sumX += pt.x;
      cell.sumZ += pt.z;
      cell.count++;
      cellMap.set(key, cell);
    }

    const nodes = Array.from(cellMap.values()).map((c) => ({
      x: c.sumX / c.count,
      z: c.sumZ / c.count,
      used: false,
    }));

    if (nodes.length < 2) return [];

    // Pick start node closest to startHint (or bottom-left-ish of route)
    let currentIdx = 0;
    let bestStartScore = Infinity;
    for (let i = 0; i < nodes.length; i++) {
      const d = startHint
        ? Math.hypot(nodes[i].x - startHint.x, nodes[i].z - startHint.z)
        : -nodes[i].z + nodes[i].x * 0.3;
      if (d < bestStartScore) {
        bestStartScore = d;
        currentIdx = i;
      }
    }

    const ordered: RouteWaypoint[] = [];
    nodes[currentIdx].used = true;
    ordered.push({ x: nodes[currentIdx].x, z: nodes[currentIdx].z, turn: 'start' });

    const maxJump = cellSize * 4.5;
    while (ordered.length < 45) {
      const last = ordered[ordered.length - 1];
      let nextIdx = -1;
      let minDist = maxJump;
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].used) continue;
        const d = Math.hypot(nodes[i].x - last.x, nodes[i].z - last.z);
        if (d < minDist) {
          minDist = d;
          nextIdx = i;
        }
      }
      if (nextIdx === -1) break;
      nodes[nextIdx].used = true;
      if (minDist >= cellSize * 0.85) {
        ordered.push({ x: nodes[nextIdx].x, z: nodes[nextIdx].z, turn: 'straight' });
      }
    }

    return ordered;
  }

  /**
   * Updates progress along the custom route, evaluates memory recall accuracy,
   * and returns live bilingual HUD guidance + optional Auto-Drive control inputs.
   */
  update(
    dt: number,
    state: VehicleState,
    signals: TrafficSignalController,
    locale: Locale,
    timeSec: number
  ): {
    bannerText: string | null;
    autoDriveInput: InputState | null;
  } {
    // Animate any stamped 3D traffic signals
    const nsColor = signals.getLightForAxis('NS');
    for (const lamp of this.trafficLightLamps) {
      lamp.green.emissiveIntensity = nsColor === 'green' ? 2.2 : 0.15;
      lamp.yellow.emissiveIntensity = nsColor === 'yellow' ? 2.2 : 0.15;
      lamp.red.emissiveIntensity = nsColor === 'red' ? 2.2 : 0.15;
    }

    if (!this.hasRoute()) {
      this.activeRing.visible = false;
      return { bannerText: null, autoDriveInput: null };
    }

    const isJa = locale === 'ja';
    const wps = this.data.waypoints;

    if (this.completed) {
      this.activeRing.visible = false;
      const accuracy = Math.max(0, Math.round((1 - this.wrongTurnCount / Math.max(1, wps.length)) * 100));
      const msg = isJa
        ? `カスタムルート完走！ 暗記正確度: ${accuracy}% (コース間違い: ${this.wrongTurnCount}回) — [O]キーで最初から復習`
        : `Custom Route Complete! Memory Accuracy: ${accuracy}% (Wrong turns: ${this.wrongTurnCount}) — Press [O] to practice again`;
      return { bannerText: msg, autoDriveInput: null };
    }

    const targetWp = wps[this.currentWpIndex];
    if (!targetWp) {
      this.completed = true;
      return { bannerText: null, autoDriveInput: null };
    }

    const dist = Math.hypot(targetWp.x - state.x, targetWp.z - state.z);
    if (dist < this.bestDistToCurrentWp) {
      this.bestDistToCurrentWp = dist;
    }

    // Detect wrong turn in Memory Recall mode (drifted > 16m further away than closest approach)
    if (dist - this.bestDistToCurrentWp > 16.0 && !this.offRouteAlert) {
      this.offRouteAlert = true;
      this.wrongTurnCount++;
    } else if (dist < this.bestDistToCurrentWp + 4.0) {
      this.offRouteAlert = false;
    }

    // Pulse active target ring (hidden in blind mode unless driver goes off-route!)
    const showRing = this.memoryMode !== 'blind' || this.offRouteAlert;
    this.activeRing.visible = showRing;
    if (showRing) {
      this.activeRing.position.set(targetWp.x, 0.07, targetWp.z);
      const s = 1 + Math.sin(timeSec * 5) * 0.12;
      this.activeRing.scale.set(s, s, 1);
    }

    // Check if vehicle reached current waypoint
    const hitRadius = this.currentWpIndex === wps.length - 1 ? 4.2 : 5.5;
    if (dist <= hitRadius) {
      if (this.currentWpIndex >= wps.length - 1) {
        if (Math.abs(state.speedMs) < 0.4 || this.memoryMode === 'autodrive') {
          this.completed = true;
          this.onRouteCompleted?.(this.wrongTurnCount, wps.length);
        }
      } else {
        this.currentWpIndex++;
        this.bestDistToCurrentWp = Infinity;
        this.offRouteAlert = false;
      }
    }

    // Build next turn instruction banner
    const turnLabelsJa: Record<RouteTurnKind, string> = {
      start: '出発',
      straight: '直進 (Straight)',
      left: '左折 ◀ (Turn Left)',
      right: '右折 ▶ (Turn Right)',
      uturn: 'Uターン (U-Turn)',
      goal: '発着点ゴール・停止 (Goal Stop)',
    };
    const turnLabelsEn: Record<RouteTurnKind, string> = {
      start: 'Start',
      straight: 'Continue Straight (直進)',
      left: 'Turn Left ◀ (左折)',
      right: 'Turn Right ▶ (右折)',
      uturn: 'Make U-Turn (Uターン)',
      goal: 'Goal — Come to Full Stop (ゴール停止)',
    };

    const activeWp = wps[this.currentWpIndex] ?? targetWp;
    const activeDist = Math.round(Math.hypot(activeWp.x - state.x, activeWp.z - state.z));
    const turnText = isJa ? turnLabelsJa[activeWp.turn] : turnLabelsEn[activeWp.turn];

    let bannerText: string;
    if (this.offRouteAlert) {
      bannerText = isJa
        ? `⚠️ コース間違い！ ポイント #${this.currentWpIndex} (${activeDist}m先) へ戻ってください`
        : `⚠️ Wrong Turn! Head back toward Checkpoint #${this.currentWpIndex} (${activeDist}m)`;
    } else if (this.memoryMode === 'blind') {
      bannerText = isJa
        ? `🧠 暗記テスト中 [#${this.currentWpIndex}/${wps.length - 1}] ガイド非表示 — 記憶で走行 (ミス: ${this.wrongTurnCount}回)`
        : `🧠 Memory Test [#${this.currentWpIndex}/${wps.length - 1}] Guide hidden — drive from memory (Mistakes: ${this.wrongTurnCount})`;
    } else {
      const modeTag =
        this.memoryMode === 'autodrive'
          ? isJa
            ? '🤖 自動お手本走行'
            : '🤖 Auto-Drive Demo'
          : isJa
            ? '📍 ルートガイド'
            : '📍 Route Guide';
      bannerText = `${modeTag} [#${this.currentWpIndex}/${wps.length - 1} · ${activeDist}m]: ${turnText}`;
    }

    // Auto-Drive Demo Controller
    let autoDriveInput: InputState | null = null;
    if (this.memoryMode === 'autodrive' && !this.completed) {
      autoDriveInput = this.computeAutoDriveInput(dt, state, activeWp);
    }

    return { bannerText, autoDriveInput };
  }

  private computeAutoDriveInput(dt: number, state: VehicleState, targetWp: RouteWaypoint): InputState {
    // Check if near an unvisited stamped Stop Sign (止まれ)
    for (let i = 0; i < this.data.stamps.length; i++) {
      const st = this.data.stamps[i];
      if (st.kind === 'stopSign' && !this.stoppedAtStampIds.has(i)) {
        const d = Math.hypot(st.x - state.x, st.z - state.z);
        if (d < 4.5) {
          this.autoStopTimer += dt;
          if (this.autoStopTimer < 1.4) {
            return {
              throttle: 0,
              brake: 0.9,
              steerLeft: 0,
              steerRight: 0,
              analogSteerTarget: 0,
              clutch: 0,
              lookLeft: this.autoStopTimer < 0.7,
              lookRight: this.autoStopTimer >= 0.7,
            };
          }
          this.stoppedAtStampIds.add(i);
          this.autoStopTimer = 0;
        }
      }
    }

    const dx = targetWp.x - state.x;
    const dz = targetWp.z - state.z;
    const dist = Math.hypot(dx, dz) || 1;
    const fwd = forwardVector(state.heading);
    const ux = dx / dist;
    const uz = dz / dist;
    const crossLeft = fwd.z * ux - fwd.x * uz;
    const dot = fwd.x * ux + fwd.z * uz;
    const angleErr = Math.atan2(crossLeft, dot);

    // Pure-pursuit steering
    const curvature = (2 * Math.sin(angleErr)) / Math.max(2.5, Math.min(8.0, dist));
    const steerRad = Math.atan(2.6 * curvature);
    const steerNorm = Math.max(-1, Math.min(1, steerRad / 0.75));

    // Automatically activate left/right blinker 18m before a turn waypoint
    if (dist < 18 && targetWp.turn === 'left') {
      state.blinker = 'left';
    } else if (dist < 18 && targetWp.turn === 'right') {
      state.blinker = 'right';
    } else if (Math.abs(angleErr) < 0.12) {
      state.blinker = 'off';
    }

    const isTurnOrGoal = targetWp.turn === 'left' || targetWp.turn === 'right' || targetWp.turn === 'goal';
    const targetSpeed =
      targetWp.turn === 'goal' && dist < 6
        ? 0
        : isTurnOrGoal && dist < 12
          ? 2.8
          : Math.abs(angleErr) > 0.35
            ? 2.6
            : 5.5;

    const throttle = state.speedMs < targetSpeed ? 0.48 : 0;
    const brake = state.speedMs > targetSpeed + 0.8 || targetSpeed === 0 ? 0.65 : 0;

    return {
      throttle,
      brake,
      steerLeft: 0,
      steerRight: 0,
      analogSteerTarget: steerNorm,
      clutch: 0,
      lookLeft: false,
      lookRight: false,
    };
  }

  private rebuild3DVisuals(): void {
    // Clear existing children
    while (this.ribbonGroup.children.length > 0) {
      this.ribbonGroup.remove(this.ribbonGroup.children[0]);
    }
    while (this.stampGroup.children.length > 0) {
      this.stampGroup.remove(this.stampGroup.children[0]);
    }
    this.trafficLightLamps = [];

    const wps = this.data.waypoints;
    if (wps.length >= 2) {
      // 1. Glowing emerald 3D Route Line Tube + Directional Arrows
      const curvePts = wps.map((p) => new THREE.Vector3(p.x, 0.08, p.z));
      const curve = new THREE.CatmullRomCurve3(curvePts, false, 'catmullrom', 0.15);
      const tubeGeo = new THREE.TubeGeometry(curve, Math.max(24, wps.length * 10), 0.22, 6, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: 0x34d399,
        transparent: true,
        opacity: 0.72,
      });
      this.ribbonGroup.add(new THREE.Mesh(tubeGeo, tubeMat));

      // Floating numbered checkpoint pillars
      wps.forEach((wp, idx) => {
        const badge = this.createCheckpointSign(idx === 0 ? 'S' : idx === wps.length - 1 ? 'G' : String(idx), wp.turn);
        badge.position.set(wp.x, 0, wp.z);
        this.ribbonGroup.add(badge);
      });
    }

    // 2. Stamped 3D Obstacles (止まれ Stop Signs, Traffic Signals, Striped Poles)
    for (const st of this.data.stamps) {
      if (st.kind === 'stopSign') {
        this.stampGroup.add(this.create3DStopSign(st.x, st.z, st.heading));
      } else if (st.kind === 'trafficLight') {
        this.stampGroup.add(this.create3DTrafficLight(st.x, st.z, st.heading));
      } else if (st.kind === 'pole') {
        this.stampGroup.add(this.create3DPole(st.x, st.z));
      }
    }
  }

  private createCheckpointSign(label: string, turn: RouteTurnKind): THREE.Group {
    const grp = new THREE.Group();
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    ctx.beginPath();
    ctx.arc(64, 64, 56, 0, Math.PI * 2);
    ctx.fillStyle =
      turn === 'goal' ? '#d62828' : turn === 'left' || turn === 'right' ? '#005bac' : '#059669';
    ctx.fill();
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 54px sans-serif';
    ctx.fillText(label, 64, 66);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sprite.scale.set(1.8, 1.8, 1);
    sprite.position.y = 2.1;
    grp.add(sprite);
    return grp;
  }

  private create3DStopSign(x: number, z: number, heading: number): THREE.Group {
    const grp = new THREE.Group();
    grp.position.set(x, 0, z);
    grp.rotation.y = heading;

    // White stop line painted on road
    const stopLine = new THREE.Mesh(
      new THREE.PlaneGeometry(3.4, 0.45),
      new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    );
    stopLine.rotation.x = -Math.PI / 2;
    stopLine.position.set(0, 0.03, 0);
    grp.add(stopLine);

    // Signpost on left edge of lane
    const post = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 2.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
    );
    post.position.set(-1.9, 1.25, 0);
    grp.add(post);

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.beginPath();
    ctx.moveTo(20, 24);
    ctx.lineTo(236, 24);
    ctx.lineTo(128, 228);
    ctx.closePath();
    ctx.fillStyle = '#d62828';
    ctx.fill();
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 46px "Noto Sans JP", sans-serif';
    ctx.fillText('止まれ', 128, 95);
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('STOP', 128, 138);

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(1.0, 1.0),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide })
    );
    sign.position.set(-1.9, 2.3, 0.05);
    grp.add(sign);
    return grp;
  }

  private create3DTrafficLight(x: number, z: number, heading: number): THREE.Group {
    const grp = new THREE.Group();
    grp.position.set(x, 0, z);
    grp.rotation.y = heading;

    const poleMat = new THREE.MeshStandardMaterial({ color: 0x64748b });
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 5.0, 10), poleMat);
    mast.position.set(-2.4, 2.5, 0);
    grp.add(mast);

    const head = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.5, 0.35),
      new THREE.MeshStandardMaterial({ color: 0x1e293b })
    );
    head.position.set(-0.6, 4.7, 0);
    grp.add(head);

    const green = new THREE.MeshStandardMaterial({ color: 0x064e3b, emissive: 0x10e898, emissiveIntensity: 1.5 });
    const yellow = new THREE.MeshStandardMaterial({ color: 0x78350f, emissive: 0xffb703, emissiveIntensity: 0.2 });
    const red = new THREE.MeshStandardMaterial({ color: 0x7f1d1d, emissive: 0xff2a2a, emissiveIntensity: 0.2 });
    this.trafficLightLamps.push({ green, yellow, red });

    const lensGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.06, 12);
    const addLens = (mat: THREE.MeshStandardMaterial, lx: number) => {
      const m = new THREE.Mesh(lensGeo, mat);
      m.rotation.x = Math.PI / 2;
      m.position.set(-0.6 + lx, 4.7, 0.18);
      grp.add(m);
    };
    addLens(green, -0.44);
    addLens(yellow, 0);
    addLens(red, 0.44);
    return grp;
  }

  private create3DPole(x: number, z: number): THREE.Group {
    const grp = new THREE.Group();
    grp.position.set(x, 0, z);
    const redMat = new THREE.MeshStandardMaterial({ color: 0xd92626 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc });
    for (let i = 0; i < 5; i++) {
      const seg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.32, 10),
        i % 2 === 0 ? redMat : whiteMat
      );
      seg.position.y = 0.16 + i * 0.32;
      grp.add(seg);
    }
    return grp;
  }
}

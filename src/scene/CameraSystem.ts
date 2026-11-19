import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { setVehicleCockpitVisibility, type VehicleVisualHandle } from './VehicleBuilder';
import type { CameraMode, MirrorQuality, VehicleKind, VehicleState } from '../types';

interface InsetSurface {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}

export class CameraSystem {
  public readonly camera: THREE.PerspectiveCamera;
  private readonly orbit: OrbitControls;
  private mode: CameraMode = 'chase';
  private mirrorQuality: MirrorQuality = 'high';

  private readonly mirrorCameras = {
    left: new THREE.PerspectiveCamera(56, 1.65, 0.1, 450),
    center: new THREE.PerspectiveCamera(44, 2.5, 0.1, 450),
    right: new THREE.PerspectiveCamera(56, 1.65, 0.1, 450),
  };

  public readonly miniMapCamera = new THREE.OrthographicCamera(-45, 45, 45, -45, 1, 240);
  public miniMapViewport = {
    centerX: 0,
    centerZ: 0,
    halfWidth: 45,
    halfHeight: 45,
    halfSize: 45,
  };

  private readonly insetSurfaces = new WeakMap<HTMLElement, InsetSurface>();
  private smoothPos = new THREE.Vector3(12, 5.5, 56);
  private smoothLook = new THREE.Vector3(12, 1.6, 48);
  private frameCounter = 0;

  constructor(domElement: HTMLElement, aspect: number) {
    this.camera = new THREE.PerspectiveCamera(60, aspect, 0.05, 650);
    // Main camera sees layer 0 (world) and layer 1 (drifting skyBrand cloud text)
    this.camera.layers.enable(1);

    // Mirror and minimap cameras skip car Reflector recursion and skyBrand layer 1
    [this.miniMapCamera, ...Object.values(this.mirrorCameras)].forEach((c) => {
      c.userData.skipCarMirrors = true;
      c.layers.set(0);
    });

    this.orbit = new OrbitControls(this.camera, domElement);
    this.orbit.enableDamping = true;
    this.orbit.dampingFactor = 0.08;
    this.orbit.maxPolarAngle = Math.PI * 0.48;
    this.orbit.minDistance = 2.8;
    this.orbit.maxDistance = 65.0;
    this.orbit.enabled = false;
  }

  setMode(mode: CameraMode, state: VehicleState, handle?: VehicleVisualHandle): void {
    this.mode = mode;
    this.orbit.enabled = mode === 'orbit';
    this.camera.userData.carMirrorInterval = mode === 'cockpit' || mode === 'instructor' ? 0 : 250;

    if (handle) {
      setVehicleCockpitVisibility(handle, mode === 'cockpit');
    }

    document.body.dataset.view = mode === 'chase' ? 'follow' : mode;
    document.body.classList.toggle(
      'sedan-cockpit',
      (mode === 'cockpit' || mode === 'instructor') && handle?.kind !== 'motorcycle'
    );
    document.body.classList.toggle('bike-cockpit', mode === 'cockpit' && handle?.kind === 'motorcycle');

    if (mode === 'orbit') {
      this.camera.fov = 60;
      this.camera.updateProjectionMatrix();
      this.camera.position.set(state.x + 16, state.y + 18, state.z + 16);
      this.orbit.target.set(state.x, state.y + 1.2, state.z);
      this.orbit.update();
    } else {
      this.snapToState(state, handle?.kind ?? 'sedan');
    }
  }

  getMode(): CameraMode {
    return this.mode;
  }

  setMirrorQuality(quality: MirrorQuality, _handle: VehicleVisualHandle | null): void {
    this.mirrorQuality = quality;
  }

  bindMirrorsToVehicle(handle: VehicleVisualHandle): void {
    setVehicleCockpitVisibility(handle, this.mode === 'cockpit');
  }

  snapToState(state: VehicleState, kind: VehicleKind = 'sedan'): void {
    const pose = this.getViewPose(this.mode, state, kind);
    this.smoothPos.copy(pose.position);
    this.smoothLook.copy(pose.lookTarget);
    this.camera.position.copy(pose.position);
    this.camera.lookAt(pose.lookTarget);
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  private getViewPose(
    mode: CameraMode,
    state: VehicleState,
    vehicleKind: VehicleKind
  ): { position: THREE.Vector3; lookTarget: THREE.Vector3 } {
    const fwd = new THREE.Vector3(-Math.sin(state.heading), 0, -Math.cos(state.heading));
    const right = new THREE.Vector3(Math.cos(state.heading), 0, -Math.sin(state.heading));

    const lookYaw = state.heading + state.lookAngleRad;
    const viewFwd = new THREE.Vector3(-Math.sin(lookYaw), 0, -Math.cos(lookYaw));
    const viewRight = new THREE.Vector3(Math.cos(lookYaw), 0, -Math.sin(lookYaw));

    const carPos = new THREE.Vector3(state.x, state.y, state.z);

    if (mode === 'cockpit') {
      if (vehicleKind === 'motorcycle') {
        const position = carPos
          .clone()
          .add(new THREE.Vector3(0, 1.42, 0))
          .add(fwd.clone().multiplyScalar(-0.08));
        const lookTarget = position
          .clone()
          .add(viewFwd.clone().multiplyScalar(30))
          .add(viewRight.clone().multiplyScalar(0.04))
          .add(new THREE.Vector3(0, Math.sin(state.pitch) * 28 - 1.3, 0));
        return { position, lookTarget };
      }
      // Seated RHD driver eye point (+0.36m right, 1.245m high, 0.38m behind car center)
      const position = carPos
        .clone()
        .add(new THREE.Vector3(0, 1.245, 0))
        .add(fwd.clone().multiplyScalar(-0.38))
        .add(right.clone().multiplyScalar(0.36));
      const lookTarget = position
        .clone()
        .add(viewFwd.clone().multiplyScalar(28))
        .add(viewRight.clone().multiplyScalar(0.04))
        .add(new THREE.Vector3(0, Math.sin(state.pitch) * 26 - 1.1, 0));
      return { position, lookTarget };
    }

    if (mode === 'instructor') {
      // Seated in left front passenger seat (助手席・検定員席: -0.37m left, 1.24m high, 0.35m behind center)
      // Watching the 3D Driver Avatar on the right (+0.36m), steering wheel, mirrors, seatbelt, and road ahead
      const position = carPos
        .clone()
        .add(new THREE.Vector3(0, 1.24, 0))
        .add(fwd.clone().multiplyScalar(-0.34))
        .add(right.clone().multiplyScalar(-0.37));
      const lookTarget = carPos
        .clone()
        .add(new THREE.Vector3(0, 1.02 + Math.sin(state.pitch) * 1.2, 0))
        .add(fwd.clone().multiplyScalar(0.32))
        .add(right.clone().multiplyScalar(0.24 - state.lookAngleRad * 0.18));
      return { position, lookTarget };
    }

    if (mode === 'hood') {
      const position = carPos
        .clone()
        .add(new THREE.Vector3(0, 1.12, 0))
        .add(fwd.clone().multiplyScalar(0.55));
      const lookTarget = position
        .clone()
        .add(viewFwd.clone().multiplyScalar(22))
        .add(new THREE.Vector3(0, Math.sin(state.pitch) * 22 - 0.8, 0));
      return { position, lookTarget };
    }

    // Chase ('follow') view matching GaimenGo
    const followDistance = vehicleKind === 'motorcycle' ? 7.2 : 9.0;
    const followHeight = vehicleKind === 'motorcycle' ? 4.6 : 5.5;
    const position = carPos
      .clone()
      .add(new THREE.Vector3(0, followHeight, 0))
      .add(viewFwd.clone().multiplyScalar(-followDistance));
    const lookTarget = carPos
      .clone()
      .add(new THREE.Vector3(0, vehicleKind === 'motorcycle' ? 1.28 : 1.6, 0));
    return { position, lookTarget };
  }

  update(
    dt: number,
    state: VehicleState,
    vehicleKind: VehicleKind,
    _handle: VehicleVisualHandle,
    _renderer: THREE.WebGLRenderer,
    _scene: THREE.Scene
  ): void {
    if (this.mode === 'orbit') {
      const targetY = state.y + (vehicleKind === 'motorcycle' ? 1.0 : 1.2);
      this.orbit.target.lerp(new THREE.Vector3(state.x, targetY, state.z), 1 - Math.pow(0.01, dt));
      this.orbit.update();
      return;
    }

    const baseFov =
      this.mode === 'cockpit'
        ? vehicleKind === 'motorcycle'
          ? 78
          : 70
        : this.mode === 'instructor'
          ? 74
          : 60;
    const fovT = THREE.MathUtils.clamp(Math.abs(state.speedMs) / 22, 0, 1);
    this.camera.fov = THREE.MathUtils.damp(this.camera.fov, baseFov + fovT * 14, 5, dt);
    this.camera.updateProjectionMatrix();

    const pose = this.getViewPose(this.mode, state, vehicleKind);
    if (this.mode === 'cockpit' || this.mode === 'instructor' || this.mode === 'hood') {
      this.camera.position.copy(pose.position);
      this.camera.lookAt(pose.lookTarget);
      return;
    }

    const smooth = 1 - Math.pow(0.002, dt);
    this.smoothPos.lerp(pose.position, smooth);
    this.camera.position.copy(this.smoothPos);
    this.camera.lookAt(pose.lookTarget);
  }

  private renderInset(
    renderer: THREE.WebGLRenderer,
    container: HTMLElement,
    scene: THREE.Scene,
    cam: THREE.Camera
  ): void {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width < 2 || height < 2) return;

    let surface = this.insetSurfaces.get(container);
    if (!surface) {
      const canvas = document.createElement('canvas');
      canvas.className = 'insetCanvas';
      canvas.setAttribute('aria-hidden', 'true');
      container.prepend(canvas);
      const ctx = canvas.getContext('2d', { alpha: false })!;
      surface = { canvas, ctx };
      this.insetSurfaces.set(container, surface);
    }

    const ratio = renderer.getPixelRatio();
    const w = Math.min(Math.floor(width * ratio), renderer.domElement.width);
    const h = Math.min(Math.floor(height * ratio), renderer.domElement.height);
    if (surface.canvas.width !== w || surface.canvas.height !== h) {
      surface.canvas.width = w;
      surface.canvas.height = h;
    }

    renderer.setScissorTest(true);
    renderer.setViewport(0, 0, w / ratio, h / ratio);
    renderer.setScissor(0, 0, w / ratio, h / ratio);
    renderer.render(scene, cam);
    surface.ctx.drawImage(renderer.domElement, 0, renderer.domElement.height - h, w, h, 0, 0, w, h);
    renderer.setScissorTest(false);
  }

  renderPiPMirrors(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    state: VehicleState,
    leftEl: HTMLElement | null,
    centerEl: HTMLElement | null,
    rightEl: HTMLElement | null,
    skipAll: boolean
  ): void {
    if (skipAll || this.mirrorQuality === 'off' || this.mode === 'orbit') return;
    this.frameCounter++;
    if (this.mirrorQuality === 'low' && this.frameCounter % 2 !== 0) return;

    const fwd = new THREE.Vector3(-Math.sin(state.heading), 0, -Math.cos(state.heading));
    const right = new THREE.Vector3(Math.cos(state.heading), 0, -Math.sin(state.heading));
    const carPos = new THREE.Vector3(state.x, state.y, state.z);

    const renderSide = (el: HTMLElement | null, cam: THREE.PerspectiveCamera, side: 'left' | 'center' | 'right') => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;

      cam.aspect = rect.width / rect.height;
      cam.updateProjectionMatrix();
      if (side === 'center') {
        cam.projectionMatrix.elements[0] *= -1;
        cam.projectionMatrixInverse.copy(cam.projectionMatrix).invert();
      }

      // sideSign: left is -right (-1), right is +right (+1)
      const sideSign = side === 'left' ? -1 : side === 'right' ? 1 : 0;
      const offset = side === 'center' ? 0 : 0.88 * sideSign;
      const lateralLook = side === 'center' ? 0 : 8.5 * sideSign;

      const mirrorPos = carPos
        .clone()
        .add(new THREE.Vector3(0, side === 'center' ? 1.93 : 1.78, 0))
        .add(fwd.clone().multiplyScalar(side === 'center' ? 0.24 : 0.06))
        .add(right.clone().multiplyScalar(offset));

      const mirrorTarget = mirrorPos
        .clone()
        .add(fwd.clone().multiplyScalar(-16))
        .add(right.clone().multiplyScalar(lateralLook))
        .add(new THREE.Vector3(0, 0.12, 0));

      cam.position.copy(mirrorPos);
      cam.lookAt(mirrorTarget);
      this.renderInset(renderer, el, scene, cam);
    };

    renderSide(leftEl, this.mirrorCameras.left, 'left');
    renderSide(centerEl, this.mirrorCameras.center, 'center');
    renderSide(rightEl, this.mirrorCameras.right, 'right');
  }

  renderPiPMiniMap(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    miniMapEl: HTMLElement | null,
    state: VehicleState,
    worldSize: { width: number; height: number },
    expanded: boolean,
    zoom: number,
    panX: number,
    panZ: number
  ): void {
    if (!miniMapEl) return;
    const rect = miniMapEl.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;

    const aspect = rect.width / rect.height;
    const mapHalfW = worldSize.width * 0.5;
    const mapHalfH = worldSize.height * 0.5;
    const baseHalfSize = expanded
      ? Math.max(worldSize.width, worldSize.height) * 0.56
      : Math.max(24, Math.max(worldSize.width, worldSize.height) * 0.28);
    const miniHalfSize = expanded ? baseHalfSize / Math.max(1, zoom) : baseHalfSize;
    const halfWidth = aspect >= 1 ? miniHalfSize * aspect : miniHalfSize;
    const halfHeight = aspect >= 1 ? miniHalfSize : miniHalfSize / aspect;

    const centerX = expanded ? panX : THREE.MathUtils.clamp(state.x, -mapHalfW, mapHalfW);
    const centerZ = expanded ? panZ : THREE.MathUtils.clamp(state.z, -mapHalfH, mapHalfH);

    this.miniMapViewport = {
      centerX,
      centerZ,
      halfWidth,
      halfHeight,
      halfSize: miniHalfSize,
    };

    this.miniMapCamera.left = -halfWidth;
    this.miniMapCamera.right = halfWidth;
    this.miniMapCamera.top = halfHeight;
    this.miniMapCamera.bottom = -halfHeight;
    this.miniMapCamera.position.set(centerX, 110, centerZ);
    this.miniMapCamera.up.set(0, 0, -1); // North (-Z) is UP on the mini map!
    this.miniMapCamera.lookAt(centerX, 0, centerZ);
    this.miniMapCamera.updateProjectionMatrix();

    this.renderInset(renderer, miniMapEl, scene, this.miniMapCamera);
  }
}

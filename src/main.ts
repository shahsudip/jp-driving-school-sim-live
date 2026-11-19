import * as THREE from 'three';
import './ui/styles.css';
import { AudioEngine } from './audio/AudioEngine';
import { VoiceExaminer } from './audio/VoiceExaminer';
import { checkCourseCollisions, type CollisionReport } from './core/collision';
import {
  COMPOUND_HALF_D,
  COMPOUND_HALF_W,
  SPAWN_STATIONS,
  STATION_ORDER,
} from './core/courseLayout';
import { ExaminerEngine } from './core/examiner';
import { loadCustomMap, loadSettings, saveCustomMap, saveSettings } from './core/storage';
import { TrafficSignalController } from './core/trafficSignals';
import {
  createVehicleState,
  shiftGearStep,
  stepVehiclePhysics,
  syncRearAxleFromCenter,
} from './core/vehiclePhysics';
import { STATION_TEXT, t } from './i18n';
import { InputManager } from './input/InputManager';
import { CameraSystem } from './scene/CameraSystem';
import { BUILTIN_COURSE_PRESETS, CustomMapLayer } from './scene/CustomMapLayer';
import {
  CustomRouteTrainer,
  type AutoTraceColor,
  type RouteMemoryMode,
  type RouteStamp,
  type RouteStampKind,
  type RouteWaypoint,
} from './scene/CustomRouteTrainer';
import {
  buildVehicleModel,
  syncVehicleVisual,
  type VehicleVisualHandle,
} from './scene/VehicleBuilder';
import { TrafficAndPedestrians, type TrafficSafetyReport } from './scene/TrafficAndPedestrians';
import { WorldBuilder } from './scene/WorldBuilder';
import { renderRulebookContent, type RulebookTabId } from './ui/RulebookModal';
import {
  getVehicleSpec,
  type CameraMode,
  type CourseMode,
  type CustomMapConfig,
  type ExamSummary,
  type MirrorQuality,
  type SimMode,
  type SpawnStationId,
  type TransmissionMode,
  type UserSettings,
  type VehicleKind,
  type VehicleState,
  type ViolationEvent,
} from './types';

const canvas = document.getElementById('simCanvas') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const world = new WorldBuilder(scene);
const trafficAndPeds = new TrafficAndPedestrians(world.kyoshujoGroup);
const customMapLayer = new CustomMapLayer(scene);
const routeTrainer = new CustomRouteTrainer(scene);
const signals = new TrafficSignalController();
const examiner = new ExaminerEngine();
const audio = new AudioEngine();
const voiceExaminer = new VoiceExaminer();

const settings: UserSettings = loadSettings();
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
if (isTouchDevice) {
  settings.showTouchControls = true;
}

const cameraSys = new CameraSystem(canvas, window.innerWidth / window.innerHeight);
cameraSys.setMirrorQuality(settings.mirrorQuality, null);

let currentStation: SpawnStationId = 'startBay';
let courseMode: CourseMode = 'kyoshujo';
let selectedPresetId = 'kyoshujo-3d';
let customMapConfig: CustomMapConfig | null = null;
let accelCurveExp = 1.35;
let userMaxSpeedMs = 17;

let miniMapExpanded = false;
let miniMapZoom = 1.0;
let miniMapPanX = 0;
let miniMapPanZ = 0;
let miniMapPanMoved = false;

let vehicleState = createVehicleState(
  SPAWN_STATIONS.startBay.x,
  SPAWN_STATIONS.startBay.z,
  SPAWN_STATIONS.startBay.heading,
  settings.vehicleKind,
  settings.transmission
);
let vehicleHandle: VehicleVisualHandle = buildVehicleModel(settings.vehicleKind);
scene.add(vehicleHandle.root);
cameraSys.setMode(settings.cameraMode, vehicleState, vehicleHandle);
audio.setVolume(settings.masterVolume, settings.muted);

// DOM References
const uiEl = document.getElementById('ui')!;
const uiToggleEl = document.getElementById('uiToggle')!;
const quickViewButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.quickViewBtn[data-view-target]'));
const mirrorHudEl = document.getElementById('mirrorHud')!;
const mirrorLeftEl = document.getElementById('mirrorLeft')!;
const mirrorCenterEl = document.getElementById('mirrorCenter')!;
const mirrorRightEl = document.getElementById('mirrorRight')!;
const cockpitSignalHudEl = document.getElementById('cockpitSignalHud')!;
const cockpitLampLeftEl = document.getElementById('cockpitLampLeft')!;
const cockpitLampRightEl = document.getElementById('cockpitLampRight')!;
const miniMapEl = document.getElementById('miniMap')!;
const miniMapCloseEl = document.getElementById('miniMapClose')!;
const speedVignetteEl = document.getElementById('speedVignette')!;
const speedBlurEl = document.getElementById('speedBlur')!;
const wheelHudDialEl = document.getElementById('wheelHudDial')!;
const speedEl = document.getElementById('speed')!;
const gearEl = document.getElementById('gear')!;
const viewModeEl = document.getElementById('viewMode')!;
const positionEl = document.getElementById('position')!;
const headingEl = document.getElementById('heading')!;
const steerAngleEl = document.getElementById('steerAngle')!;
const signalStatusBoxEl = document.getElementById('signalStatusBox')!;
const signalStatusEl = document.getElementById('signalStatus')!;
const hudScoreEl = document.getElementById('hudScore')!;
const hudModePillEl = document.getElementById('hudModePill')!;
const hudDirectiveEl = document.getElementById('hudDirective')!;
const toastContainerEl = document.getElementById('violationToasts')!;
const resetToastEl = document.getElementById('resetToast')!;
const stallBannerEl = document.getElementById('stallBanner')!;
const mobileControlsEl = document.getElementById('mobileControls')!;
mobileControlsEl.hidden = !settings.showTouchControls;

const wheelPips = {
  FL: document.getElementById('wheelFL')!,
  FR: document.getElementById('wheelFR')!,
  RL: document.getElementById('wheelRL')!,
  RR: document.getElementById('wheelRR')!,
};

// Acceleration Curve Chart
const accelCurveEl = document.getElementById('accelCurve') as HTMLInputElement;
const accelCurveValueEl = document.getElementById('accelCurveValue')!;
const accelCurveLineEl = document.getElementById('accelCurveLine')!;
const accelCurveGuideXEl = document.getElementById('accelCurveGuideX')!;
const accelCurveGuideYEl = document.getElementById('accelCurveGuideY')!;
const accelCurveDotEl = document.getElementById('accelCurveDot')!;
const accelCurveInputValueEl = document.getElementById('accelCurveInputValue')!;
const accelCurveOutputValueEl = document.getElementById('accelCurveOutputValue')!;

const ACCEL_CHART = { left: 32, right: 188, top: 20, bottom: 108, samples: 32 };

function updateAccelCurveChart(curve: number, currentInput = 0) {
  accelCurveExp = THREE.MathUtils.clamp(curve, 0.8, 1.8);
  accelCurveEl.value = String(Math.round(accelCurveExp * 100));
  accelCurveValueEl.textContent = accelCurveExp.toFixed(2);

  const pts: string[] = [];
  for (let i = 0; i <= ACCEL_CHART.samples; i++) {
    const u = i / ACCEL_CHART.samples;
    const out = Math.pow(u, accelCurveExp);
    const x = THREE.MathUtils.lerp(ACCEL_CHART.left, ACCEL_CHART.right, u);
    const y = THREE.MathUtils.lerp(ACCEL_CHART.bottom, ACCEL_CHART.top, out);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  accelCurveLineEl.setAttribute('points', pts.join(' '));
  updateAccelCurveMarker(currentInput);
}

function updateAccelCurveMarker(inputAmount: number) {
  const u = THREE.MathUtils.clamp(inputAmount, 0, 1);
  const out = Math.pow(u, accelCurveExp);
  const x = THREE.MathUtils.lerp(ACCEL_CHART.left, ACCEL_CHART.right, u);
  const y = THREE.MathUtils.lerp(ACCEL_CHART.bottom, ACCEL_CHART.top, out);

  accelCurveGuideXEl.setAttribute('x1', x.toFixed(1));
  accelCurveGuideXEl.setAttribute('y1', String(ACCEL_CHART.bottom));
  accelCurveGuideXEl.setAttribute('x2', x.toFixed(1));
  accelCurveGuideXEl.setAttribute('y2', y.toFixed(1));

  accelCurveGuideYEl.setAttribute('x1', String(ACCEL_CHART.left));
  accelCurveGuideYEl.setAttribute('y1', y.toFixed(1));
  accelCurveGuideYEl.setAttribute('x2', x.toFixed(1));
  accelCurveGuideYEl.setAttribute('y2', y.toFixed(1));

  accelCurveDotEl.setAttribute('cx', x.toFixed(1));
  accelCurveDotEl.setAttribute('cy', y.toFixed(1));

  accelCurveInputValueEl.textContent = `${Math.round(u * 100)}%`;
  accelCurveOutputValueEl.textContent = `${Math.round(out * 100)}%`;
}

// UI Collapse / Expand (GaimenGo top-left toggle)
let uiCollapsed = true;
function setUiCollapsed(collapsed: boolean) {
  uiCollapsed = collapsed;
  uiEl.classList.toggle('collapsed', collapsed);
  const isJa = settings.locale === 'ja';
  uiToggleEl.textContent = collapsed
    ? isJa
      ? 'メニューを表示'
      : 'Show Menu'
    : isJa
      ? 'メニューを隠す'
      : 'Hide Menu';
}

uiToggleEl.addEventListener('click', () => {
  audio.unlock();
  setUiCollapsed(!uiCollapsed);
});

document.getElementById('startDrivingBtn')!.addEventListener('click', () => {
  audio.unlock();
  setUiCollapsed(true);
  canvas.focus({ preventScroll: true });
});

// Reset Toast
let resetToastTimer = 0;
function showResetToast() {
  const isJa = settings.locale === 'ja';
  document.getElementById('resetToastText')!.textContent = isJa
    ? 'スタート地点に戻りました。もう一度！'
    : 'Back to the start — try again!';
  resetToastEl.classList.add('visible');
  window.clearTimeout(resetToastTimer);
  resetToastTimer = window.setTimeout(() => resetToastEl.classList.remove('visible'), 1800);
}

// Camera View Switching
const CAMERA_ORDER: CameraMode[] = ['chase', 'cockpit', 'instructor', 'hood', 'orbit'];
function setCameraView(mode: CameraMode) {
  settings.cameraMode = mode;
  saveSettings(settings);
  cameraSys.setMode(mode, vehicleState, vehicleHandle);

  quickViewButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.viewTarget === mode);
  });

  const isOrbit = mode === 'orbit';
  const isCabin = mode === 'cockpit' || mode === 'instructor';
  mirrorHudEl.style.display = isOrbit ? 'none' : isCabin ? 'block' : 'flex';
  mirrorHudEl.classList.toggle('cockpit-layout', isCabin);
  cockpitSignalHudEl.classList.toggle('is-visible', isCabin);

  const isJa = settings.locale === 'ja';
  const labels: Record<CameraMode, string> = {
    chase: isJa ? '後方視点' : 'Chase View',
    cockpit: isJa ? '運転席 (右ハンドル)' : 'Cockpit View',
    instructor: isJa ? '助手席・検定員視点' : 'Instructor Seat View',
    hood: isJa ? 'ボンネット' : 'Hood View',
    orbit: isJa ? '自由カメラ' : 'Free Orbit',
  };
  viewModeEl.textContent = labels[mode];
}

function cycleCamera() {
  const idx = CAMERA_ORDER.indexOf(cameraSys.getMode());
  setCameraView(CAMERA_ORDER[(idx + 1) % CAMERA_ORDER.length]);
}

quickViewButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    audio.unlock();
    const target = btn.dataset.viewTarget as CameraMode | undefined;
    if (target) setCameraView(target);
  });
});
document.getElementById('viewBtn')!.addEventListener('click', () => {
  audio.unlock();
  cycleCamera();
});

// Spawn & Course Preset Management
const mapPresetEl = document.getElementById('mapPreset') as HTMLSelectElement;
const mapWidthEl = document.getElementById('mapWidth') as HTMLInputElement;
const mapScaleEl = document.getElementById('mapScale') as HTMLInputElement;
const mapScaleValueEl = document.getElementById('mapScaleValue')!;

function syncMapWidthControls(w: number) {
  const r = Math.round(w);
  mapWidthEl.value = String(r);
  mapScaleEl.value = String(r);
  mapScaleValueEl.textContent = `${r} m`;
}

function spawnAtPose(x: number, z: number, heading: number, mode: SimMode) {
  vehicleState = createVehicleState(x, z, heading, settings.vehicleKind, settings.transmission);
  examiner.reset(mode, vehicleState);
  document.getElementById('examResultModal')!.hidden = true;
  document.getElementById('violationFreezeOverlay')!.hidden = true;
  violationFreezeActive = false;
  safePoseHistory.length = 0;
  safePoseHistory.push({ x, z, heading, gear: vehicleState.gear });
  syncPreDriveChecklistUI();
  cameraSys.setMode(cameraSys.getMode(), vehicleState, vehicleHandle);
}

function warpToStation(id: SpawnStationId, mode: SimMode = 'practice') {
  currentStation = id;
  selectedPresetId = 'kyoshujo-3d';
  mapPresetEl.value = 'kyoshujo-3d';
  courseMode = 'kyoshujo';
  world.setKyoshujoVisible(true);
  customMapLayer.setVisible(false);
  syncMapWidthControls(COMPOUND_HALF_W * 2);
  const st = SPAWN_STATIONS[id];
  spawnAtPose(st.x, st.z, st.heading, mode);
}

function selectCoursePreset(presetId: string) {
  if (presetId === 'kyoshujo-3d') {
    warpToStation(currentStation, 'practice');
    return;
  }
  if (presetId === 'custom' && customMapConfig) {
    selectedPresetId = 'custom';
    courseMode = 'custom';
    world.setKyoshujoVisible(false);
    customMapLayer.setVisible(true);
    syncMapWidthControls(customMapConfig.mapWidth);
    spawnAtPose(customMapConfig.startX, customMapConfig.startZ, customMapConfig.startHeading, 'practice');
    return;
  }
  const preset = BUILTIN_COURSE_PRESETS.find((p) => p.id === presetId);
  if (!preset) return;
  selectedPresetId = preset.id;
  mapPresetEl.value = preset.id;
  courseMode = 'custom';
  customMapLayer.loadProceduralTestCenter(preset);
  world.setKyoshujoVisible(false);
  customMapLayer.setVisible(true);
  syncMapWidthControls(preset.mapWidth);
  spawnAtPose(preset.startX, preset.startZ, preset.startHeading, 'practice');
}

function resetVehicle() {
  audio.unlock();
  routeTrainer.resetProgress();
  const routeStart = routeTrainer.getStartPose();
  if (routeTrainer.hasRoute() && routeStart) {
    spawnAtPose(routeStart.x, routeStart.z, routeStart.heading, 'practice');
  } else if (selectedPresetId === 'kyoshujo-3d') {
    warpToStation(currentStation, examiner.getMode());
  } else {
    selectCoursePreset(selectedPresetId);
  }
  showResetToast();
}

document.getElementById('resetBtn')!.addEventListener('click', resetVehicle);
document.getElementById('quickResetBtn')!.addEventListener('click', resetVehicle);

// Populate Map Presets & Course List & Station Quick-Warp Grid
function renderStationAndCourseLists() {
  const isJa = settings.locale === 'ja';

  // Map dropdown (bilingual labels so both English & Japanese are visible)
  mapPresetEl.innerHTML = '';
  for (const p of BUILTIN_COURSE_PRESETS) {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = isJa ? `${p.nameJa} (${p.nameEn})` : `${p.nameEn} (${p.nameJa})`;
    mapPresetEl.append(opt);
  }
  if (customMapConfig) {
    const opt = document.createElement('option');
    opt.value = 'custom';
    opt.textContent = isJa
      ? `カスタム地図 / Custom (${customMapConfig.fileName})`
      : `Custom Map / カスタム (${customMapConfig.fileName})`;
    mapPresetEl.append(opt);
  }
  mapPresetEl.value = selectedPresetId;

  // Station quick-warp chips (show both Japanese and English title + description)
  const stationGrid = document.getElementById('stationGrid')!;
  stationGrid.innerHTML = '';
  for (const id of STATION_ORDER) {
    const meta = STATION_TEXT[id];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'station-chip';
    const title = isJa ? `${meta.titleJa} · ${meta.titleEn}` : `${meta.titleEn} · ${meta.titleJa}`;
    const desc = isJa ? meta.descJa : meta.descEn;
    btn.innerHTML = `<strong>${title}</strong><span>${desc}</span>`;
    btn.addEventListener('click', () => {
      audio.unlock();
      warpToStation(id, 'practice');
      setUiCollapsed(true);
    });
    stationGrid.append(btn);
  }

  // Built-in course list inside fold
  const courseList = document.getElementById('courseQuickList')!;
  courseList.innerHTML = '';
  for (const p of BUILTIN_COURSE_PRESETS) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `<strong>${isJa ? p.nameJa : p.nameEn}</strong><small>${isJa ? p.nameEn : p.nameJa}</small>`;
    btn.addEventListener('click', () => {
      audio.unlock();
      selectCoursePreset(p.id);
      setUiCollapsed(true);
    });
    li.append(btn);
    courseList.append(li);
  }
}

mapPresetEl.addEventListener('change', () => {
  audio.unlock();
  selectCoursePreset(mapPresetEl.value);
});

document.getElementById('modePracticeBtn')!.addEventListener('click', () => {
  audio.unlock();
  examiner.reset('practice', vehicleState);
  setUiCollapsed(true);
});

document.getElementById('modeExamBtn')!.addEventListener('click', () => {
  audio.unlock();
  warpToStation('startBay', 'exam');
  setUiCollapsed(true);
});

// Vehicle & Handling Controls
const vehicleTypeEl = document.getElementById('vehicleType') as HTMLSelectElement;
const transmissionModeEl = document.getElementById('transmissionMode') as HTMLSelectElement;
const maxSpeedEl = document.getElementById('maxSpeed') as HTMLInputElement;
const maxSpeedValueEl = document.getElementById('maxSpeedValue')!;
const masterVolumeEl = document.getElementById('masterVolume') as HTMLInputElement;
const masterVolumeValueEl = document.getElementById('masterVolumeValue')!;
const steeringSensitivityEl = document.getElementById('steeringSensitivity') as HTMLInputElement;
const steeringSensitivityValueEl = document.getElementById('steeringSensitivityValue')!;
const autoCenterSteeringEl = document.getElementById('autoCenterSteering') as HTMLInputElement;
const renderQualityEl = document.getElementById('renderQuality') as HTMLSelectElement;
const touchControlsChk = document.getElementById('settingTouchControls') as HTMLInputElement;

vehicleTypeEl.value = settings.vehicleKind;
transmissionModeEl.value = settings.transmission;
masterVolumeEl.value = String(Math.round(settings.masterVolume * 100));
masterVolumeValueEl.textContent = `${Math.round(settings.masterVolume * 100)}%`;
steeringSensitivityEl.value = String(Math.round(settings.steeringSensitivity * 100));
steeringSensitivityValueEl.textContent = `${settings.steeringSensitivity.toFixed(2)}x`;
autoCenterSteeringEl.checked = settings.autoCenterSteering;
renderQualityEl.value = settings.mirrorQuality;
touchControlsChk.checked = settings.showTouchControls;
updateAccelCurveChart(accelCurveExp, 0);

function rebuildVehicleModel() {
  scene.remove(vehicleHandle.root);
  vehicleHandle = buildVehicleModel(settings.vehicleKind);
  scene.add(vehicleHandle.root);
  cameraSys.setMode(cameraSys.getMode(), vehicleState, vehicleHandle);
  vehicleState.transmission = settings.transmission;
  vehicleState.gear = settings.transmission === 'AT' ? 'D' : '1';
  vehicleState.stalled = false;
}

vehicleTypeEl.addEventListener('change', () => {
  settings.vehicleKind = vehicleTypeEl.value as VehicleKind;
  saveSettings(settings);
  rebuildVehicleModel();
});

transmissionModeEl.addEventListener('change', () => {
  settings.transmission = transmissionModeEl.value as TransmissionMode;
  saveSettings(settings);
  rebuildVehicleModel();
});

maxSpeedEl.addEventListener('input', () => {
  userMaxSpeedMs = Number(maxSpeedEl.value);
  maxSpeedValueEl.textContent = `${userMaxSpeedMs} m/s`;
});

masterVolumeEl.addEventListener('input', () => {
  settings.masterVolume = Number(masterVolumeEl.value) / 100;
  masterVolumeValueEl.textContent = `${Math.round(settings.masterVolume * 100)}%`;
  audio.setVolume(settings.masterVolume, settings.muted);
  saveSettings(settings);
});

steeringSensitivityEl.addEventListener('input', () => {
  settings.steeringSensitivity = Number(steeringSensitivityEl.value) / 100;
  steeringSensitivityValueEl.textContent = `${settings.steeringSensitivity.toFixed(2)}x`;
  saveSettings(settings);
});

autoCenterSteeringEl.addEventListener('change', () => {
  settings.autoCenterSteering = autoCenterSteeringEl.checked;
  saveSettings(settings);
});

renderQualityEl.addEventListener('change', () => {
  settings.mirrorQuality = renderQualityEl.value as MirrorQuality;
  cameraSys.setMirrorQuality(settings.mirrorQuality, vehicleHandle);
  saveSettings(settings);
});

touchControlsChk.addEventListener('change', () => {
  settings.showTouchControls = touchControlsChk.checked;
  mobileControlsEl.hidden = !settings.showTouchControls;
  saveSettings(settings);
});

accelCurveEl.addEventListener('input', () => {
  updateAccelCurveChart(Number(accelCurveEl.value) / 100, 0);
});

// Map Upload, Scale & Copy JSON
const mapInputEl = document.getElementById('mapInput') as HTMLInputElement;
mapInputEl.addEventListener('change', () => {
  const file = mapInputEl.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    const dataUrl = String(reader.result);
    const width = Math.max(40, Number(mapWidthEl.value) || 350);
    const cfg: CustomMapConfig = {
      imageDataUrl: dataUrl,
      fileName: file.name,
      mapWidth: width,
      startX: 0,
      startZ: 0,
      startHeading: 0,
    };
    customMapConfig = cfg;
    await customMapLayer.loadFromDataUrl(cfg.imageDataUrl, cfg.mapWidth);
    await saveCustomMap(cfg);
    selectedPresetId = 'custom';
    renderStationAndCourseLists();
    selectCoursePreset('custom');
    setUiCollapsed(true);
  };
  reader.readAsDataURL(file);
});

const applyMapWidth = (w: number) => {
  const clamped = Math.max(40, Math.min(1500, w));
  syncMapWidthControls(clamped);
  if (courseMode === 'custom') {
    customMapLayer.setWidth(clamped);
    if (customMapConfig) {
      customMapConfig.mapWidth = clamped;
      void saveCustomMap(customMapConfig);
    }
  }
};

mapWidthEl.addEventListener('input', () => applyMapWidth(Number(mapWidthEl.value) || 180));
mapScaleEl.addEventListener('input', () => applyMapWidth(Number(mapScaleEl.value) || 180));

document.getElementById('setSpawnBtn')!.addEventListener('click', () => {
  if (customMapConfig && selectedPresetId === 'custom') {
    customMapConfig.startX = vehicleState.x;
    customMapConfig.startZ = vehicleState.z;
    customMapConfig.startHeading = vehicleState.heading;
    void saveCustomMap(customMapConfig);
  } else {
    SPAWN_STATIONS[currentStation] = {
      id: currentStation,
      x: vehicleState.x,
      z: vehicleState.z,
      heading: vehicleState.heading,
    };
  }
  audio.playClick(740, 0.04, 0.16);
});

document.getElementById('copyMapJsonBtn')!.addEventListener('click', async () => {
  const json = JSON.stringify(
    {
      course: selectedPresetId,
      mapWidth: Number(mapWidthEl.value) || 180,
      maxSpeed: userMaxSpeedMs,
      startPose: {
        x: Number(vehicleState.x.toFixed(1)),
        z: Number(vehicleState.z.toFixed(1)),
        heading: Number(vehicleState.heading.toFixed(6)),
      },
    },
    null,
    2
  );
  try {
    await navigator.clipboard.writeText(json);
  } catch {
    // Fallback ignored
  }
});

// First Run Hint Close
const firstRunHintEl = document.getElementById('firstRunHint')!;
document.getElementById('firstRunHintClose')!.addEventListener('click', () => {
  firstRunHintEl.hidden = true;
});

// Interactive Expandable 3D Mini Map (Expand, Pan, Zoom, Click-to-Teleport)
function setMiniMapExpanded(expanded: boolean) {
  miniMapExpanded = expanded;
  if (expanded) {
    miniMapZoom = 1.0;
    miniMapPanX = 0;
    miniMapPanZ = 0;
  }
  miniMapEl.classList.toggle('expanded', expanded);
  miniMapEl.classList.remove('is-panning');
  document.body.classList.toggle('minimap-expanded', expanded);
}

let mmPtrId: number | null = null;
let mmStartX = 0;
let mmStartY = 0;
let mmLastX = 0;
let mmLastY = 0;

miniMapEl.addEventListener('pointerdown', (ev) => {
  if (!miniMapExpanded || ev.target === miniMapCloseEl) return;
  mmPtrId = ev.pointerId;
  mmStartX = mmLastX = ev.clientX;
  mmStartY = mmLastY = ev.clientY;
  miniMapPanMoved = false;
  miniMapEl.setPointerCapture(ev.pointerId);
});

miniMapEl.addEventListener('pointermove', (ev) => {
  if (!miniMapExpanded || ev.pointerId !== mmPtrId) return;
  const totalDist = Math.hypot(ev.clientX - mmStartX, ev.clientY - mmStartY);
  const dx = ev.clientX - mmLastX;
  const dy = ev.clientY - mmLastY;
  mmLastX = ev.clientX;
  mmLastY = ev.clientY;

  if (totalDist >= 5) {
    miniMapPanMoved = true;
    miniMapEl.classList.add('is-panning');
    const rect = miniMapEl.getBoundingClientRect();
    miniMapPanX -= (dx / Math.max(1, rect.width)) * cameraSys.miniMapViewport.halfWidth * 2;
    miniMapPanZ -= (dy / Math.max(1, rect.height)) * cameraSys.miniMapViewport.halfHeight * 2;
  }
});

miniMapEl.addEventListener('pointerup', (ev) => {
  if (ev.pointerId === mmPtrId) {
    mmPtrId = null;
    miniMapEl.classList.remove('is-panning');
  }
});

miniMapEl.addEventListener('click', (ev) => {
  if (ev.target === miniMapCloseEl) return;
  if (miniMapPanMoved) {
    miniMapPanMoved = false;
    return;
  }
  if (!miniMapExpanded) {
    setMiniMapExpanded(true);
    return;
  }
  // Click any spot on the expanded mini map to teleport vehicle there!
  const rect = miniMapEl.getBoundingClientRect();
  const nx = (ev.clientX - rect.left) / Math.max(1, rect.width);
  const ny = (ev.clientY - rect.top) / Math.max(1, rect.height);
  const wx = cameraSys.miniMapViewport.centerX + (nx - 0.5) * cameraSys.miniMapViewport.halfWidth * 2;
  const wz = cameraSys.miniMapViewport.centerZ + (ny - 0.5) * cameraSys.miniMapViewport.halfHeight * 2;
  spawnAtPose(wx, wz, vehicleState.heading, examiner.getMode());
  setMiniMapExpanded(false);
});

miniMapEl.addEventListener(
  'wheel',
  (ev) => {
    if (!miniMapExpanded) return;
    ev.preventDefault();
    const factor = ev.deltaY < 0 ? 1.18 : 1 / 1.18;
    miniMapZoom = THREE.MathUtils.clamp(miniMapZoom * factor, 1, 6);
  },
  { passive: false }
);

miniMapCloseEl.addEventListener('click', (ev) => {
  ev.stopPropagation();
  setMiniMapExpanded(false);
});

window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && miniMapExpanded) {
    setMiniMapExpanded(false);
  }
});

// Gear Card click cycles gears
document.getElementById('gearCardBtn')!.addEventListener('click', () => {
  audio.unlock();
  shiftGearStep(vehicleState, 1);
});

document.getElementById('stallRestartBtn')!.addEventListener('click', () => {
  audio.unlock();
  vehicleState.stalled = false;
  vehicleState.rpm = 850;
});

// Examiner Violations & Completion Modal
function pushViolationToast(v: ViolationEvent) {
  const isJa = settings.locale === 'ja';
  const item = document.createElement('div');
  item.className = `violation-toast ${v.instantFail ? 'fail' : ''}`;
  const title = isJa ? v.labelJa : v.labelEn;
  const detail = isJa ? v.detailJa : v.detailEn;
  const pts = v.instantFail ? (isJa ? '検定中止' : 'FAIL') : `-${v.points}`;
  item.innerHTML = `<span class="vt-pts">${pts}</span><div><strong>${title}</strong><p>${detail}</p></div>`;
  toastContainerEl.prepend(item);

  while (toastContainerEl.children.length > 3) {
    toastContainerEl.lastElementChild?.remove();
  }
  window.setTimeout(() => {
    item.classList.add('fade-out');
    window.setTimeout(() => item.remove(), 320);
  }, 4200);
}

let weakStation: SpawnStationId = 'crank';
function showExamSummary(summary: ExamSummary) {
  const loc = settings.locale;
  const modal = document.getElementById('examResultModal')!;
  modal.hidden = false;
  weakStation = summary.weakArea ?? 'crank';

  document.getElementById('examResultTitle')!.textContent = t(loc, 'examResultTitle');
  const stamp = document.getElementById('examStamp')!;
  stamp.textContent = summary.passed ? t(loc, 'examPassStamp') : t(loc, 'examFailStamp');
  stamp.className = `exam-stamp ${summary.passed ? 'pass' : 'fail'}`;

  document.getElementById('examResultSub')!.textContent = summary.terminated
    ? t(loc, 'examTerminatedSub')
    : summary.passed
      ? t(loc, 'examPassedSub')
      : t(loc, 'examFailedSub');

  document.getElementById('examFinalScore')!.textContent = `${summary.score} / 100`;
  const mins = Math.floor(summary.elapsedSec / 60);
  const secs = Math.floor(summary.elapsedSec % 60);
  document.getElementById('examElapsed')!.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('examDistance')!.textContent = `${Math.round(summary.distanceM)} m`;

  const list = document.getElementById('examViolationList')!;
  list.innerHTML = '';
  if (summary.violations.length === 0) {
    const li = document.createElement('li');
    li.className = 'clean-pass';
    li.textContent = t(loc, 'examNoViolations');
    list.append(li);
  } else {
    for (const v of summary.violations) {
      const li = document.createElement('li');
      const label = loc === 'ja' ? v.labelJa : v.labelEn;
      const detail = loc === 'ja' ? v.detailJa : v.detailEn;
      const badge = v.instantFail ? (loc === 'ja' ? '中止' : 'FAIL') : `-${v.points}`;
      li.innerHTML = `<span class="ev-badge ${v.instantFail ? 'fail' : ''}">${badge}</span><span><strong>${label}</strong> — ${detail}</span>`;
      list.append(li);
    }
  }
}

document.getElementById('examRetryBtn')!.addEventListener('click', () => {
  document.getElementById('examResultModal')!.hidden = true;
  warpToStation('startBay', 'exam');
});
document.getElementById('examPracticeWeakBtn')!.addEventListener('click', () => {
  document.getElementById('examResultModal')!.hidden = true;
  warpToStation(weakStation, 'practice');
});
document.getElementById('examCloseBtn')!.addEventListener('click', () => {
  document.getElementById('examResultModal')!.hidden = true;
  examiner.reset('practice', vehicleState);
});

// ==========================================================
// 1. Interactive 8-Step Pre-Drive Cockpit Checklist Controller
// ==========================================================
const preDriveBarEl = document.getElementById('preDriveBar')!;
const pdCollapseBtn = document.getElementById('pdCollapseBtn')!;
const pdAutoCompleteBtn = document.getElementById('pdAutoCompleteBtn')!;
const pdStepChips = Array.from(document.querySelectorAll<HTMLButtonElement>('.pd-step-chip[data-pd-step]'));

function syncPreDriveChecklistUI() {
  const pd = vehicleState.preDrive;
  if (!pd) return;

  const doneFlags: Record<number, boolean> = {
    1: pd.doorLocked,
    2: pd.seatAdjusted,
    3: pd.mirrorsAdjusted,
    4: pd.seatbeltFastened,
    5: pd.brakeAndStartDone,
    6: pd.handbrakeReleased,
    7: pd.rightSignalOn,
    8: pd.fivePointLookDone,
  };

  let nextExpected = 1;
  while (nextExpected <= 8 && doneFlags[nextExpected]) {
    nextExpected++;
  }

  for (const chip of pdStepChips) {
    const step = Number(chip.dataset.pdStep);
    const isDone = Boolean(doneFlags[step]);
    chip.classList.toggle('done', isDone);
    chip.classList.toggle('next-expected', !isDone && step === nextExpected);
    chip.classList.toggle('order-error', pd.orderErrorStep === step);
  }
}

function executePreDriveStep(step: number, enforceOrder = true) {
  audio.unlock();
  const pd = vehicleState.preDrive;
  if (!pd) return;

  // Check if any earlier step (1 .. step-1) was skipped!
  if (enforceOrder) {
    for (let prev = 1; prev < step; prev++) {
      if (!pd.completedSteps.includes(prev)) {
        pd.orderErrorStep = step;
        break;
      }
    }
  }

  if (!pd.completedSteps.includes(step)) {
    pd.completedSteps.push(step);
  }

  if (step === 1) {
    pd.doorLocked = true;
    audio.playClick(520, 0.04, 0.18);
  } else if (step === 2) {
    pd.seatAdjusted = true;
    audio.playClick(380, 0.06, 0.18);
  } else if (step === 3) {
    pd.mirrorsAdjusted = true;
    vehicleState.mirrorTouchTimer = 1.1; // 3D driver avatar reaches up and touches rearview mirror!
    audio.playClick(680, 0.04, 0.16);
  } else if (step === 4) {
    pd.seatbeltFastened = true; // 3D red diagonal seatbelt latches across driver avatar!
    audio.playClick(880, 0.05, 0.22);
  } else if (step === 5) {
    pd.brakeAndStartDone = true;
    vehicleState.stalled = false;
    vehicleState.rpm = 860;
    audio.playClick(460, 0.06, 0.2);
  } else if (step === 6) {
    pd.handbrakeReleased = true;
    vehicleState.handbrake = false;
    vehicleState.gear = settings.transmission === 'AT' ? 'D' : '1';
    audio.playClick(540, 0.04, 0.16);
  } else if (step === 7) {
    pd.rightSignalOn = true;
    vehicleState.blinker = 'right';
    vehicleState.blinkerTimer = 0;
    vehicleState.blinkerOn = true;
    audio.playClick(720, 0.03, 0.15);
  } else if (step === 8) {
    pd.fivePointLookDone = true;
    // Animate driver head turning Left then Right over shoulder
    vehicleState.lookAngleRad = (55 * Math.PI) / 180;
    vehicleState.lookedLeftTimestamp = simTimeSec;
    window.setTimeout(() => {
      vehicleState.lookAngleRad = (-64 * Math.PI) / 180;
      vehicleState.lookedRightTimestamp = simTimeSec;
    }, 320);
    window.setTimeout(() => {
      vehicleState.lookAngleRad = 0;
    }, 780);
    audio.playClick(940, 0.04, 0.18);
  }

  syncPreDriveChecklistUI();
}

pdStepChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const step = Number(chip.dataset.pdStep);
    if (step >= 1 && step <= 8) {
      executePreDriveStep(step, true);
    }
  });
});

pdAutoCompleteBtn.addEventListener('click', () => {
  vehicleState.preDrive.orderErrorStep = undefined;
  for (let s = 1; s <= 8; s++) {
    executePreDriveStep(s, false);
  }
});

pdCollapseBtn.addEventListener('click', () => {
  const collapsed = preDriveBarEl.classList.toggle('collapsed');
  pdCollapseBtn.textContent = collapsed ? '+' : '−';
});

// Number keys 1..8 trigger Pre-Drive Cockpit Steps directly
window.addEventListener('keydown', (ev) => {
  if (ev.target instanceof HTMLInputElement || ev.target instanceof HTMLSelectElement) return;
  if (ev.code.startsWith('Digit')) {
    const num = Number(ev.code.replace('Digit', ''));
    if (num >= 1 && num <= 8) {
      executePreDriveStep(num, true);
    }
  }
});

// ==========================================================
// 2. Concise Red Rule Violation Freeze & Automatic Safe Car Recovery ("Unstuck")
// ==========================================================
const violationFreezeOverlayEl = document.getElementById('violationFreezeOverlay')!;
const strictRuleFreezeChk = document.getElementById('strictRuleFreezeChk') as HTMLInputElement;
const vfResumeBtn = document.getElementById('vfResumeBtn') as HTMLButtonElement;
const vfRetryStationBtn = document.getElementById('vfRetryStationBtn') as HTMLButtonElement;

let violationFreezeActive = false;
interface SafePoseSample {
  x: number;
  z: number;
  heading: number;
  gear: VehicleState['gear'];
}
const safePoseHistory: SafePoseSample[] = [];
let lastSafeSampleTime = -999;

function recordSafePoseIfClean(collision: CollisionReport, trafficSafety?: TrafficSafetyReport) {
  const isClean =
    !collision.anyCurbTouch &&
    !collision.anyCurbMount &&
    !collision.poleHit &&
    !collision.obstacleHit &&
    !trafficSafety?.pedestrianDanger &&
    !trafficSafety?.trafficCollision;
  if (!isClean) return;

  if (simTimeSec - lastSafeSampleTime >= 0.25) {
    lastSafeSampleTime = simTimeSec;
    const prev = safePoseHistory[safePoseHistory.length - 1];
    if (!prev || Math.hypot(vehicleState.x - prev.x, vehicleState.z - prev.z) > 0.35) {
      safePoseHistory.push({
        x: vehicleState.x,
        z: vehicleState.z,
        heading: vehicleState.heading,
        gear: vehicleState.gear === 'R' ? (settings.transmission === 'AT' ? 'D' : '1') : vehicleState.gear,
      });
      if (safePoseHistory.length > 24) {
        safePoseHistory.shift();
      }
    }
  }
}

function unstuckVehicleToSafePose() {
  const spec = getVehicleSpec(settings.vehicleKind);
  const checkNow = checkCourseCollisions(vehicleState, spec);
  const needsPositionRecovery =
    checkNow.anyCurbMount ||
    checkNow.anyCurbTouch ||
    Boolean(checkNow.poleHit) ||
    Boolean(checkNow.obstacleHit);

  if (needsPositionRecovery && safePoseHistory.length > 0) {
    // Pick a clean pose from ~1.5 meters / a couple seconds before the collision
    const idx = Math.max(0, safePoseHistory.length - 5);
    const safe = safePoseHistory[idx];
    vehicleState.x = safe.x;
    vehicleState.z = safe.z;
    vehicleState.heading = safe.heading;
    vehicleState.gear = safe.gear;
  } else if (needsPositionRecovery) {
    // Fallback: back up 1.6m along opposite of heading
    vehicleState.x += Math.sin(vehicleState.heading) * 1.6;
    vehicleState.z += Math.cos(vehicleState.heading) * 1.6;
  }

  vehicleState.speedMs = 0;
  vehicleState.steerAngleRad = 0;
  vehicleState.steeringWheelRad = 0;
  vehicleState.stalled = false;
  vehicleState.handbrake = false;
  syncRearAxleFromCenter(vehicleState, spec);
}

function showViolationFreezeOverlay(v: ViolationEvent) {
  violationFreezeActive = true;
  vehicleState.speedMs = 0;

  const isJa = settings.locale === 'ja';
  document.getElementById('vfTagText')!.textContent = v.instantFail
    ? isJa
      ? '🚨 検定中止（一発不合格） · INSTANT FAIL'
      : '🚨 INSTANT FAIL (検定中止)'
    : isJa
      ? `⚠️ 減点違反 (-${v.points}点) · RULE VIOLATION`
      : `⚠️ RULE VIOLATION (-${v.points} PTS)`;

  document.getElementById('vfTitleText')!.textContent = `${v.labelJa} · ${v.labelEn}`;

  const badgeEl = document.getElementById('vfBadgeText')!;
  badgeEl.textContent = v.instantFail ? '検定中止 / FAIL' : `-${v.points} PTS`;
  badgeEl.className = `vf-badge ${v.instantFail ? 'fail' : ''}`;

  document.getElementById('vfDetailJa')!.textContent = v.detailJa;
  document.getElementById('vfDetailEn')!.textContent = v.detailEn;

  document.getElementById('vfRuleRefJa')!.textContent = v.ruleRefJa ?? '';
  document.getElementById('vfRuleRefEn')!.textContent = v.ruleRefEn ?? '';

  document.getElementById('vfHowToFixJa')!.textContent = v.howToFixJa ?? '';
  document.getElementById('vfHowToFixEn')!.textContent = v.howToFixEn ?? '';

  const score = examiner.getScore();
  document.getElementById('vfScoreRemainText')!.textContent = isJa
    ? `持ち点: ${score} / 100点 (70点以上で合格)`
    : `Score: ${score} / 100 pts (70 pts to pass)`;

  vfResumeBtn.textContent = isJa
    ? '✅ ルールを理解して車を安全な位置に戻し再開 [Space / Enter]'
    : '✅ I Understand — Unstuck Car & Resume Driving [Space / Enter]';

  violationFreezeOverlayEl.hidden = false;
}

function dismissViolationFreezeOverlay() {
  if (!violationFreezeActive) return;
  violationFreezeActive = false;
  violationFreezeOverlayEl.hidden = true;
  // Automatically unstuck the car from curbs/poles/obstacles so the user can drive immediately!
  unstuckVehicleToSafePose();
}

vfResumeBtn.addEventListener('click', () => {
  audio.unlock();
  dismissViolationFreezeOverlay();
});

vfRetryStationBtn.addEventListener('click', () => {
  audio.unlock();
  violationFreezeActive = false;
  violationFreezeOverlayEl.hidden = true;
  resetVehicle();
});

document.getElementById('vfOpenRulebookBtn')!.addEventListener('click', () => {
  audio.unlock();
  openRulebookModal('written');
});

window.addEventListener('keydown', (ev) => {
  if (!violationFreezeActive) return;
  if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Escape') {
    ev.preventDefault();
    dismissViolationFreezeOverlay();
  }
});

// ==========================================================
// 3. Comprehensive Bilingual Rulebook & PDF Study Guide Modal
// ==========================================================
const rulebookModalEl = document.getElementById('rulebookModal')!;
const rulebookContentBodyEl = document.getElementById('rulebookContentBody')!;
let activeRulebookTab: RulebookTabId = 'predrive';

function openRulebookModal(tab: RulebookTabId = activeRulebookTab) {
  audio.unlock();
  activeRulebookTab = tab;
  document.querySelectorAll<HTMLButtonElement>('[data-rb-tab]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.rbTab === activeRulebookTab);
  });
  renderRulebookContent(rulebookContentBodyEl, activeRulebookTab, settings.locale);
  rulebookModalEl.hidden = false;
}

document.getElementById('quickRulebookBtn')!.addEventListener('click', () => openRulebookModal());
document.getElementById('openRulebookBtn')!.addEventListener('click', () => openRulebookModal());
document.getElementById('rulebookCloseBtn')!.addEventListener('click', () => {
  rulebookModalEl.hidden = true;
});

document.querySelectorAll<HTMLButtonElement>('[data-rb-tab]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const tab = (btn.dataset.rbTab as RulebookTabId) || 'predrive';
    openRulebookModal(tab);
  });
});

examiner.onViolation = (v) => {
  pushViolationToast(v);
  audio.playViolationChime(v.instantFail);
  voiceExaminer.announceViolation(v, settings.locale);
  if (strictRuleFreezeChk.checked) {
    showViolationFreezeOverlay(v);
  }
};
examiner.onExamFinish = (summary) => {
  if (!violationFreezeActive) {
    showExamSummary(summary);
  }
};

// Keyboard & Touch Input Manager
const inputMgr = new InputManager({
  onToggleBlinker: (dir) => {
    vehicleState.blinker = vehicleState.blinker === dir ? 'off' : dir;
    vehicleState.blinkerTimer = 0;
    vehicleState.blinkerOn = vehicleState.blinker !== 'off';
    if (vehicleState.blinker === 'right' && vehicleState.preDrive) {
      vehicleState.preDrive.rightSignalOn = true;
      if (!vehicleState.preDrive.completedSteps.includes(7)) {
        vehicleState.preDrive.completedSteps.push(7);
      }
      syncPreDriveChecklistUI();
    }
  },
  onToggleHandbrake: () => {
    vehicleState.handbrake = !vehicleState.handbrake;
    audio.playClick(420, 0.04, 0.16);
    if (!vehicleState.handbrake && vehicleState.preDrive) {
      vehicleState.preDrive.handbrakeReleased = true;
      if (!vehicleState.preDrive.completedSteps.includes(6)) {
        vehicleState.preDrive.completedSteps.push(6);
      }
      syncPreDriveChecklistUI();
    }
  },
  onShiftGear: (delta) => {
    shiftGearStep(vehicleState, delta);
    audio.playClick(620, 0.03, 0.14);
  },
  onCycleCamera: cycleCamera,
  onResetVehicle: resetVehicle,
  onToggleMenu: () => setUiCollapsed(!uiCollapsed),
  onIgnition: () => {
    vehicleState.stalled = false;
    vehicleState.rpm = 850;
  },
  onAnyInteraction: () => {
    audio.unlock();
    firstRunHintEl.hidden = true;
  },
});
inputMgr.bindTouchControls(mobileControlsEl);

// Complete English + Japanese Menu & HUD Syncing
function syncBilingualText() {
  const isJa = settings.locale === 'ja';
  document.documentElement.lang = settings.locale;

  setUiCollapsed(uiCollapsed);

  // Highlight active EN / JA buttons
  document.getElementById('quickLangEnBtn')!.classList.toggle('is-active', !isJa);
  document.getElementById('quickLangJaBtn')!.classList.toggle('is-active', isJa);
  document.getElementById('panelLangEnBtn')!.style.borderColor = !isJa ? '#34d399' : 'rgba(255,255,255,0.14)';
  document.getElementById('panelLangJaBtn')!.style.borderColor = isJa ? '#34d399' : 'rgba(255,255,255,0.14)';

  document.getElementById('setupTitleText')!.textContent = isJa
    ? 'ドライブの準備 (Ready to drive)'
    : 'Ready to drive (ドライブの準備)';
  document.getElementById('setupLeadText')!.textContent = isJa
    ? '車両とコースを選び、各教習課題へのワープや100点満点の修了検定を練習できます。'
    : 'Choose your vehicle and map, warp to any driving school obstacle, or start the 100-point exam.';
  document.getElementById('startDrivingBtn')!.textContent = isJa
    ? '運転を始める (Start driving)'
    : 'Start driving (運転を始める)';
  document.getElementById('resetBtn')!.textContent = isJa ? '車両リセット (Reset)' : 'Reset Vehicle (リセット)';
  document.getElementById('quickResetBtn')!.textContent = isJa ? 'リセット (O)' : 'Reset (O)';

  // Primary selectors
  document.getElementById('lblVehicle')!.textContent = isJa ? '車種 (Vehicle)' : 'Vehicle (車種)';
  document.getElementById('optSedan')!.textContent = isJa
    ? '普通車セダン (右ハンドル) · RHD Sedan'
    : 'Sedan (RHD Corolla) · 普通車セダン';
  document.getElementById('optMoto')!.textContent = isJa
    ? '普通二輪 (400cc) · Motorcycle'
    : 'Motorcycle (400cc) · 普通二輪';
  document.getElementById('lblTrans')!.textContent = isJa
    ? '変速機 (Transmission)'
    : 'Transmission (変速機)';
  document.getElementById('optAT')!.textContent = isJa
    ? 'AT (オートマ・クリープあり)'
    : 'AT (Automatic · Creep)';
  document.getElementById('optMT')!.textContent = isJa
    ? 'MT (マニュアル5速)'
    : 'MT (Manual 5-Speed)';
  document.getElementById('lblMap')!.textContent = isJa
    ? 'コース / 試験場マップ (Course / Map)'
    : 'Course / Map (教習コース・試験場)';
  document.getElementById('modePracticeBtn')!.textContent = isJa
    ? '自由練習 (Free Practice)'
    : 'Free Practice (自由練習)';
  document.getElementById('modeExamBtn')!.textContent = isJa
    ? '修了検定 100点採点 (Mock Exam)'
    : 'Mock Exam 100-pt (修了検定)';

  // Accordion Fold Summaries & Labels
  document.getElementById('foldStationsTitle')!.textContent = isJa
    ? '教習課題ワープ (Kyōshūjo Training Stations)'
    : 'Kyōshūjo Training Stations (教習課題ワープ)';
  document.getElementById('foldTuningTitle')!.textContent = isJa
    ? '操作感とサウンド (Handling & sound)'
    : 'Handling & sound (操作感とサウンド)';
  document.getElementById('lblMaxSpeed')!.textContent = isJa ? '最高速度 (Max Speed)' : 'Max Speed (最高速度)';
  document.getElementById('lblVolume')!.textContent = isJa ? '音量 (Volume)' : 'Volume (音量)';
  document.getElementById('lblSteerSens')!.textContent = isJa
    ? 'ハンドル感度 (Steering Sensitivity)'
    : 'Steering Sensitivity (ハンドル感度)';
  document.getElementById('lblAutoCenter')!.textContent = isJa
    ? 'ハンドル自動復元 (Auto-center Steering)'
    : 'Auto-center Steering (ハンドル自動復元)';
  document.getElementById('lblMirrorQuality')!.textContent = isJa
    ? '画質・ミラー描画 (Graphics & Mirrors)'
    : 'Graphics & Mirrors (画質・ミラー描画)';
  document.getElementById('optMirrorHigh')!.textContent = isJa
    ? '高画質・3面ミラー (High · 3 Mirrors)'
    : 'High · Real-time 3 Mirrors (高画質)';
  document.getElementById('optMirrorLow')!.textContent = isJa
    ? '標準・バランス (Medium · Balanced)'
    : 'Medium · Balanced (標準)';
  document.getElementById('optMirrorOff')!.textContent = isJa
    ? '軽量・省電力 (Low · Save power)'
    : 'Low · Save power (軽量)';
  document.getElementById('lblTouchControls')!.textContent = isJa
    ? 'タッチ操作パネル表示 (Show touch controls)'
    : 'Show mobile touch controls (タッチ操作表示)';

  // Acceleration Curve Card
  document.getElementById('curveTitle')!.textContent = isJa
    ? 'アクセル特性カーブ (Acceleration Curve)'
    : 'Acceleration Curve (アクセル特性)';
  document.getElementById('curveDesc')!.textContent = isJa
    ? '横軸：アクセル入力 ／ 縦軸：駆動出力 (X: Input, Y: Output)'
    : 'X axis is throttle input, Y axis is drive output';
  document.getElementById('curveSoftLbl')!.textContent = isJa ? '穏やか (Soft)' : 'Soft (穏やか)';
  document.getElementById('curveDirectLbl')!.textContent = isJa ? 'ダイレクト (Direct)' : 'Direct (直接)';
  document.getElementById('curveInputLbl')!.textContent = isJa ? '入力 (Input)' : 'Current Input';
  document.getElementById('curveOutputLbl')!.textContent = isJa ? '出力 (Output)' : 'Current Output';

  // Map editor fold
  document.getElementById('foldMapTitle')!.textContent = isJa
    ? 'マップ編集・開始位置 (Map editor & spawn)'
    : 'Map editor & spawn (マップ編集・開始位置)';
  document.getElementById('uploadMapText')!.textContent = isJa ? '地図アップロード (Upload)' : 'Upload Map (地図読込)';
  document.getElementById('setSpawnBtn')!.textContent = isJa ? '開始位置に登録 (Set Spawn)' : 'Set Spawn (開始位置)';
  document.getElementById('viewBtn')!.textContent = isJa ? '視点切替 (Change View)' : 'Change View (視点切替)';
  document.getElementById('copyMapJsonBtn')!.textContent = isJa ? 'JSONコピー (Copy JSON)' : 'Copy JSON (JSONコピー)';
  document.getElementById('lblCustomWidth')!.textContent = isJa ? 'マップ横幅 (Map Width m)' : 'Map Width m (マップ横幅)';
  document.getElementById('lblMapScale')!.textContent = isJa ? '縮尺スケール (Map Scale)' : 'Map Scale (縮尺)';

  // How to drive fold
  document.getElementById('foldHelpTitle')!.textContent = isJa
    ? '操作ガイド (How to drive)'
    : 'How to drive (操作ガイド)';
  const tipsEl = document.getElementById('tipsContainer')!;
  const tipsList = isJa
    ? [
        'W/A/S/D または 矢印キー : 運転 (Drive)',
        'Q / E : 左右ウインカー (Signals) · H : ハザード',
        'Space : サイドブレーキ (Handbrake)',
        'Shift / Ctrl : ギア変更 (Shift Gear)',
        'Z / X : 左右の安全確認 (Look Left/Right)',
        'O : 車両リセット (Reset)',
        'V : カメラ視点切替 (Cycle Views)',
      ]
    : [
        'W/A/S/D or Arrow Keys : Drive (運転)',
        'Q / E : Turn Signals (ウインカー) · H : Hazard',
        'Space : Handbrake (サイドブレーキ)',
        'Shift / Ctrl : Shift Gear (ギア変更)',
        'Z / X : Look Left & Right (左右安全確認)',
        'O : Reset Vehicle (リセット)',
        'V : Cycle Views (視点切替)',
      ];
  tipsEl.innerHTML = tipsList.map((txt) => `<span>${txt}</span>`).join('');
  document.getElementById('helpMiniMapText')!.textContent = isJa
    ? '右下のミニマップをクリックで拡大表示し、コース上の任意の場所をクリックするとそこへ車両がワープします。'
    : 'Click the mini map in the bottom-right corner to expand it, drag to pan, scroll to zoom, or click any spot to teleport the vehicle.';

  // Driving details & Courses fold
  document.getElementById('foldDataTitle')!.textContent = isJa
    ? '走行データ (Driving details)'
    : 'Driving details (走行データ)';
  document.getElementById('lblTelView')!.textContent = isJa ? '視点 (View):' : 'View (視点):';
  document.getElementById('lblTelPos')!.textContent = isJa ? '位置 (Position):' : 'Position (位置):';
  document.getElementById('lblTelHead')!.textContent = isJa ? '方位 (Heading):' : 'Heading (方位):';
  document.getElementById('lblTelSteer')!.textContent = isJa ? '舵角 (Steering):' : 'Steering (舵角):';
  document.getElementById('foldCoursesTitle')!.textContent = isJa
    ? '試験場・教習コース一覧 (Built-in Test Center Courses)'
    : 'Built-in Test Center Courses (試験場コース一覧)';

  const viewText: Record<string, string> = {
    chase: isJa ? '後方 (Chase)' : 'Chase (後方)',
    cockpit: isJa ? '運転席 (Cockpit)' : 'Cockpit (運転席)',
    instructor: isJa ? '👨‍✈️ 検定員席 (Instructor)' : '👨‍✈️ Instructor (検定員席)',
    hood: isJa ? 'ボンネット (Hood)' : 'Hood (ボンネット)',
    orbit: isJa ? '自由 (Free)' : 'Free (自由)',
  };
  quickViewButtons.forEach((btn) => {
    const k = btn.dataset.viewTarget || 'chase';
    btn.textContent = viewText[k] || k;
  });

  document.getElementById('quickRulebookBtn')!.textContent = isJa
    ? '📖 教本・標識・PDF (Rules)'
    : '📖 Rules & PDF (教本・標識)';
  document.getElementById('openRulebookBtn')!.textContent = isJa
    ? '📖 教本・標識・減点基準・PDF (Rules & PDF)'
    : '📖 Rules, Signs & Study PDF (教本・標識)';
  document.getElementById('lblStrictFreeze')!.textContent = isJa
    ? '🚨 違反時に赤画面で一時停止＆解説 (Red Freeze on Rule Break)'
    : '🚨 Red Freeze & Explain on Rule Break (違反時赤画面停止)';
  document.getElementById('pdTitleText')!.textContent = isJa
    ? '👨‍✈️ 乗車〜発進手順 (Pre-Drive Order — ①〜⑧を順番にクリックまたはキー1〜8)'
    : '👨‍✈️ Pre-Drive Exam Sequence (Click 1–8 in exact order before pulling out)';
  document.getElementById('pdAutoCompleteBtn')!.textContent = isJa
    ? '⚡ 一括完了 (Auto-Complete)'
    : '⚡ Auto-Complete (一括完了)';
  if (!rulebookModalEl.hidden) {
    renderRulebookContent(rulebookContentBodyEl, activeRulebookTab, settings.locale);
  }

  document.getElementById('lblMirrorL')!.textContent = isJa ? '左ミラー · Left' : 'Left Mirror · 左';
  document.getElementById('lblMirrorC')!.textContent = isJa ? 'ルームミラー · Center' : 'Center Mirror · 中央';
  document.getElementById('lblMirrorR')!.textContent = isJa ? '右ミラー · Right' : 'Right Mirror · 右';
  document.getElementById('cockpitLampLeft')!.textContent = isJa ? '← 左合図 (Left)' : '← Left (左)';
  document.getElementById('cockpitLampRight')!.textContent = isJa ? '右合図 (Right) →' : 'Right (右) →';
  document.getElementById('lblHudSignal')!.textContent = isJa ? '合図 (Signal):' : 'Signal (合図):';
  document.getElementById('lblMiniMap')!.textContent = isJa ? 'ミニマップ · Mini Map' : 'Mini Map · ミニマップ';
  document.getElementById('lblMiniMapHint')!.textContent = isJa
    ? 'ドラッグで移動・ホイールで拡大・地点クリックでワープ (Click any point to teleport)'
    : 'Hold and drag to pan. Wheel to zoom. Click any point on the course to teleport there.';
  document.getElementById('firstRunTitle')!.textContent = isJa
    ? '運転をはじめましょう (Start driving)'
    : 'Start driving (運転をはじめましょう)';
  document.getElementById('firstRunText')!.textContent = isJa
    ? 'WASD/矢印キーで走行、Q/Eでウインカー、Spaceでブレーキ、Z/Xで左右目視、Vで視点切替、Oでリセット。'
    : 'WASD or arrow keys drive, Q/E signals, Space brakes, Z/X look left & right, V changes view, O resets.';

  document.getElementById('lblMobileSteerHint')!.textContent = isJa
    ? '← 左右スワイプで操舵 (Swipe) →'
    : '← Swipe to steer (スワイプ操舵) →';
  document.getElementById('lblMobileSigL')!.textContent = isJa ? '↑ 左 (L)' : '↑ Left';
  document.getElementById('lblMobileSigR')!.textContent = isJa ? '右 (R) ↓' : 'Right ↓';
  document.getElementById('lblMobileGear')!.textContent = isJa ? 'ギア (Gear)' : 'Gear';
  document.getElementById('lblMobileBrake')!.textContent = isJa ? 'ブレーキ' : 'Brake';
  document.getElementById('lblMobileThrottle')!.textContent = isJa ? 'アクセル' : 'Throttle';

  renderStationAndCourseLists();
  setCameraView(cameraSys.getMode());
}

function setLocale(locale: 'en' | 'ja') {
  audio.unlock();
  settings.locale = locale;
  saveSettings(settings);
  syncBilingualText();
}

document.getElementById('quickLangEnBtn')!.addEventListener('click', () => setLocale('en'));
document.getElementById('quickLangJaBtn')!.addEventListener('click', () => setLocale('ja'));
document.getElementById('panelLangEnBtn')!.addEventListener('click', () => setLocale('en'));
document.getElementById('panelLangJaBtn')!.addEventListener('click', () => setLocale('ja'));

// ==========================================================
// Interactive Route Builder & Memorization Trainer Controller
// ==========================================================
const rbModalEl = document.getElementById('routeBuilderModal')!;
const rbCanvas = document.getElementById('routeBuilderCanvas') as HTMLCanvasElement;
const rbCtx = rbCanvas.getContext('2d')!;
const rbStatusEl = document.getElementById('rbStatusText')!;
const rbUploadInput = document.getElementById('rbUploadInput') as HTMLInputElement;

type RbTool = 'waypoint' | 'stopSign' | 'trafficLight' | 'pole';
let activeRbTool: RbTool = 'waypoint';
let draftWaypoints: RouteWaypoint[] = [];
let draftStamps: RouteStamp[] = [];
let rbHistory: { waypoints: RouteWaypoint[]; stamps: RouteStamp[] }[] = [];

function getActiveWorldBounds(): { width: number; height: number } {
  if (courseMode === 'custom') {
    return customMapLayer.currentSize;
  }
  return { width: COMPOUND_HALF_W * 2, height: COMPOUND_HALF_D * 2 };
}

function pushRbHistory() {
  rbHistory.push({
    waypoints: draftWaypoints.map((w) => ({ ...w })),
    stamps: draftStamps.map((s) => ({ ...s })),
  });
  if (rbHistory.length > 30) rbHistory.shift();
}

function drawRouteBuilderCanvas() {
  const W = rbCanvas.width;
  const H = rbCanvas.height;
  rbCtx.clearRect(0, 0, W, H);

  const bounds = getActiveWorldBounds();
  const mapSource = courseMode === 'custom' ? customMapLayer.getActiveSource() : null;

  if (mapSource) {
    rbCtx.drawImage(mapSource, 0, 0, W, H);
  } else {
    // Draw clean top-down blueprint of the 3D Kyoshujo compound
    rbCtx.fillStyle = '#1e2f23';
    rbCtx.fillRect(0, 0, W, H);
    const toPx = (wx: number, wz: number): [number, number] => [
      ((wx / bounds.width) + 0.5) * W,
      ((wz / bounds.height) + 0.5) * H,
    ];
    rbCtx.strokeStyle = '#475569';
    rbCtx.lineWidth = 22;
    rbCtx.lineCap = 'round';
    rbCtx.strokeRect(W * 0.08, H * 0.12, W * 0.84, H * 0.76);
    rbCtx.beginPath();
    const [cx0, cz0] = toPx(0, -46);
    const [cx1, cz1] = toPx(0, 46);
    const [ex0, ez0] = toPx(-76, 0);
    const [ex1, ez1] = toPx(76, 0);
    rbCtx.moveTo(cx0, cz0);
    rbCtx.lineTo(cx1, cz1);
    rbCtx.moveTo(ex0, ez0);
    rbCtx.lineTo(ex1, ez1);
    rbCtx.stroke();
  }

  const worldToCanvas = (wx: number, wz: number): [number, number] => [
    ((wx / bounds.width) + 0.5) * W,
    ((wz / bounds.height) + 0.5) * H,
  ];

  // Draw route polyline & directional arrows
  if (draftWaypoints.length >= 2) {
    rbCtx.save();
    rbCtx.strokeStyle = '#34d399';
    rbCtx.lineWidth = 5;
    rbCtx.lineCap = 'round';
    rbCtx.lineJoin = 'round';
    rbCtx.beginPath();
    draftWaypoints.forEach((wp, i) => {
      const [px, py] = worldToCanvas(wp.x, wp.z);
      if (i === 0) rbCtx.moveTo(px, py);
      else rbCtx.lineTo(px, py);
    });
    rbCtx.stroke();

    // Directional arrowheads along segments
    for (let i = 0; i < draftWaypoints.length - 1; i++) {
      const [ax, ay] = worldToCanvas(draftWaypoints[i].x, draftWaypoints[i].z);
      const [bx, by] = worldToCanvas(draftWaypoints[i + 1].x, draftWaypoints[i + 1].z);
      const mx = (ax + bx) * 0.5;
      const my = (ay + by) * 0.5;
      const ang = Math.atan2(by - ay, bx - ax);
      rbCtx.save();
      rbCtx.translate(mx, my);
      rbCtx.rotate(ang);
      rbCtx.fillStyle = '#fde047';
      rbCtx.beginPath();
      rbCtx.moveTo(8, 0);
      rbCtx.lineTo(-6, -5);
      rbCtx.lineTo(-6, 5);
      rbCtx.closePath();
      rbCtx.fill();
      rbCtx.restore();
    }
    rbCtx.restore();
  }

  // Draw numbered waypoints
  draftWaypoints.forEach((wp, i) => {
    const [px, py] = worldToCanvas(wp.x, wp.z);
    rbCtx.beginPath();
    rbCtx.arc(px, py, 13, 0, Math.PI * 2);
    rbCtx.fillStyle = i === 0 ? '#059669' : i === draftWaypoints.length - 1 ? '#d62828' : '#005bac';
    rbCtx.fill();
    rbCtx.lineWidth = 2.5;
    rbCtx.strokeStyle = '#ffffff';
    rbCtx.stroke();

    rbCtx.fillStyle = '#ffffff';
    rbCtx.font = 'bold 12px sans-serif';
    rbCtx.textAlign = 'center';
    rbCtx.textBaseline = 'middle';
    const label = i === 0 ? 'S' : i === draftWaypoints.length - 1 ? 'G' : String(i);
    rbCtx.fillText(label, px, py);
  });

  // Draw stamped 3D obstacles
  for (const st of draftStamps) {
    const [px, py] = worldToCanvas(st.x, st.z);
    rbCtx.save();
    rbCtx.translate(px, py);
    rbCtx.fillStyle =
      st.kind === 'stopSign' ? '#dc2626' : st.kind === 'trafficLight' ? '#f59e0b' : '#ec4899';
    rbCtx.beginPath();
    rbCtx.arc(0, 0, 11, 0, Math.PI * 2);
    rbCtx.fill();
    rbCtx.strokeStyle = '#fff';
    rbCtx.lineWidth = 2;
    rbCtx.stroke();
    rbCtx.fillStyle = '#fff';
    rbCtx.font = 'bold 10px sans-serif';
    rbCtx.textAlign = 'center';
    rbCtx.textBaseline = 'middle';
    rbCtx.fillText(st.kind === 'stopSign' ? '止' : st.kind === 'trafficLight' ? '信' : 'P', 0, 0);
    rbCtx.restore();
  }

  rbStatusEl.textContent =
    settings.locale === 'ja'
      ? `ポイント: ${draftWaypoints.length}点 ／ 3D標識: ${draftStamps.length}個`
      : `Waypoints: ${draftWaypoints.length} · 3D Stamps: ${draftStamps.length}`;
}

function openRouteBuilder() {
  audio.unlock();
  const current = routeTrainer.getData();
  draftWaypoints = current.waypoints.map((w) => ({ ...w }));
  draftStamps = current.stamps.map((s) => ({ ...s }));
  rbHistory = [];
  rbModalEl.hidden = false;
  drawRouteBuilderCanvas();
}

document.getElementById('openRouteBuilderBtn')!.addEventListener('click', openRouteBuilder);
document.getElementById('quickRouteBuilderBtn')!.addEventListener('click', openRouteBuilder);
document.getElementById('rbCloseBtn')!.addEventListener('click', () => {
  rbModalEl.hidden = true;
});

// Tool selection inside Route Builder
document.querySelectorAll<HTMLButtonElement>('[data-rb-tool]').forEach((btn) => {
  btn.addEventListener('click', () => {
    activeRbTool = (btn.dataset.rbTool as RbTool) || 'waypoint';
    document.querySelectorAll<HTMLButtonElement>('[data-rb-tool]').forEach((b) => {
      b.classList.toggle('active', b === btn);
    });
  });
});

// Click on Route Builder Canvas to place Waypoint or 3D Stamp
rbCanvas.addEventListener('click', (ev) => {
  const rect = rbCanvas.getBoundingClientRect();
  const nx = (ev.clientX - rect.left) / Math.max(1, rect.width);
  const ny = (ev.clientY - rect.top) / Math.max(1, rect.height);
  const bounds = getActiveWorldBounds();
  const wx = (nx - 0.5) * bounds.width;
  const wz = (ny - 0.5) * bounds.height;

  pushRbHistory();

  if (activeRbTool === 'waypoint') {
    draftWaypoints.push({ x: wx, z: wz, turn: 'straight' });
  } else {
    // Orient stamp facing along latest route segment
    let heading = 0;
    if (draftWaypoints.length >= 1) {
      const last = draftWaypoints[draftWaypoints.length - 1];
      heading = Math.atan2(-(wx - last.x), -(wz - last.z));
    }
    draftStamps.push({ kind: activeRbTool as RouteStampKind, x: wx, z: wz, heading });
  }
  drawRouteBuilderCanvas();
});

document.getElementById('rbUndoBtn')!.addEventListener('click', () => {
  const prev = rbHistory.pop();
  if (!prev) return;
  draftWaypoints = prev.waypoints;
  draftStamps = prev.stamps;
  drawRouteBuilderCanvas();
});

document.getElementById('rbClearBtn')!.addEventListener('click', () => {
  pushRbHistory();
  draftWaypoints = [];
  draftStamps = [];
  drawRouteBuilderCanvas();
});

// Upload Route Image directly inside Route Builder
rbUploadInput.addEventListener('change', () => {
  const file = rbUploadInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    const dataUrl = String(reader.result);
    const width = Math.max(80, Number(mapWidthEl.value) || 260);
    const cfg: CustomMapConfig = {
      imageDataUrl: dataUrl,
      fileName: file.name,
      mapWidth: width,
      startX: 0,
      startZ: 0,
      startHeading: 0,
    };
    customMapConfig = cfg;
    await customMapLayer.loadFromDataUrl(cfg.imageDataUrl, cfg.mapWidth);
    await saveCustomMap(cfg);
    selectedPresetId = 'custom';
    courseMode = 'custom';
    world.setKyoshujoVisible(false);
    customMapLayer.setVisible(true);
    renderStationAndCourseLists();
    drawRouteBuilderCanvas();
  };
  reader.readAsDataURL(file);
});

// Auto-Detect Colored Route Line from Uploaded Map Image
document.querySelectorAll<HTMLButtonElement>('[data-trace-color]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const color = (btn.dataset.traceColor as AutoTraceColor) || 'red';
    const src = customMapLayer.getActiveSource();
    if (!src) {
      rbStatusEl.textContent =
        settings.locale === 'ja'
          ? '先にコース図画像をアップロードしてください'
          : 'Please upload a route map image first';
      return;
    }
    const bounds = getActiveWorldBounds();
    const extracted = routeTrainer.autoExtractRouteFromImage(src, bounds.width, color);
    if (extracted.length < 2) {
      rbStatusEl.textContent =
        settings.locale === 'ja'
          ? '色線が見つかりませんでした。地図上をクリックしてルート点を追加してください'
          : 'No matching colored line found — click directly on the map to trace points';
      return;
    }
    pushRbHistory();
    draftWaypoints = extracted;
    drawRouteBuilderCanvas();
  });
});

// Save & Start Route Practice
document.getElementById('rbSaveAndDriveBtn')!.addEventListener('click', () => {
  routeTrainer.setRouteData({ waypoints: draftWaypoints, stamps: draftStamps }, true);
  rbModalEl.hidden = true;
  setUiCollapsed(true);
  const startPose = routeTrainer.getStartPose();
  if (startPose) {
    if (customMapConfig && courseMode === 'custom') {
      customMapConfig.startX = startPose.x;
      customMapConfig.startZ = startPose.z;
      customMapConfig.startHeading = startPose.heading;
      void saveCustomMap(customMapConfig);
    }
    spawnAtPose(startPose.x, startPose.z, startPose.heading, 'practice');
  }
});

// 3-Stage Memory Mode Switcher (Guided / Memory Test Blind / Auto-Drive Demo)
function setRouteMemoryMode(mode: RouteMemoryMode) {
  routeTrainer.setMemoryMode(mode);
  document.querySelectorAll<HTMLButtonElement>('[data-memory-mode]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.memoryMode === mode);
  });
  if (mode === 'autodrive' && routeTrainer.hasRoute()) {
    const startPose = routeTrainer.getStartPose();
    if (startPose) {
      spawnAtPose(startPose.x, startPose.z, startPose.heading, 'practice');
      routeTrainer.resetProgress();
    }
  }
}

document.querySelectorAll<HTMLButtonElement>('[data-memory-mode]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const m = (btn.dataset.memoryMode as RouteMemoryMode) || 'guided';
    setRouteMemoryMode(m);
  });
});

// Restore saved custom map if present
void loadCustomMap().then(async (cfg) => {
  if (cfg) {
    customMapConfig = cfg;
    await customMapLayer.loadFromDataUrl(cfg.imageDataUrl, cfg.mapWidth);
    renderStationAndCourseLists();
  }
});

syncBilingualText();
setUiCollapsed(true); // Start with clean driving road view like GaimenGo!

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  cameraSys.resize(window.innerWidth / window.innerHeight);
});

const flatTerrain = () => ({ y: 0, slopeX: 0, slopeZ: 0 });
const FIXED_DT = 1 / 120;
let accumulator = 0;
let lastFrameMs = performance.now();
let simTimeSec = 0;
let lastThudTime = -999;
let lastSpokenWaypointId = '';

function animate(nowMs: number) {
  requestAnimationFrame(animate);

  const frameDt = Math.min(0.05, Math.max(0, (nowMs - lastFrameMs) / 1000));
  lastFrameMs = nowMs;
  accumulator += frameDt;

  const baseSpec = getVehicleSpec(settings.vehicleKind);
  const spec = { ...baseSpec, maxSpeedMs: userMaxSpeedMs };
  const rawInput = inputMgr.getInputState();

  // Check if Custom Route Trainer is active (and whether Auto-Drive Demo is controlling the car)
  const routeStatus = routeTrainer.update(frameDt, vehicleState, signals, settings.locale, simTimeSec);
  const activeInput = routeStatus.autoDriveInput ?? rawInput;

  // Apply live Acceleration Curve exponent to throttle input
  const shapedInput = {
    ...activeInput,
    throttle: activeInput.throttle > 0 ? Math.pow(activeInput.throttle, accelCurveExp) : 0,
  };

  if (!uiCollapsed) {
    updateAccelCurveMarker(activeInput.throttle);
  }

  let latestCollision: CollisionReport = checkCourseCollisions(vehicleState, spec);

  // If the Red Rule Violation Freeze Screen is active, pause physics & traffic updates until the user acknowledges!
  if (violationFreezeActive) {
    accumulator = 0;
  }

  while (accumulator >= FIXED_DT && !violationFreezeActive) {
    simTimeSec += FIXED_DT;
    signals.update(FIXED_DT);

    stepVehiclePhysics(
      vehicleState,
      shapedInput,
      spec,
      FIXED_DT,
      {
        steeringSensitivity: settings.steeringSensitivity,
        autoCenterSteering: settings.autoCenterSteering,
        simTimeSec,
      },
      courseMode === 'custom' ? flatTerrain : undefined
    );

    if (
      vehicleState.preDrive &&
      !vehicleState.preDrive.fivePointLookDone &&
      simTimeSec - vehicleState.lookedRightTimestamp < 1.5
    ) {
      vehicleState.preDrive.fivePointLookDone = true;
      if (!vehicleState.preDrive.completedSteps.includes(8)) {
        vehicleState.preDrive.completedSteps.push(8);
      }
      syncPreDriveChecklistUI();
    }

    if (courseMode === 'kyoshujo') {
      const trafficSafety: TrafficSafetyReport = trafficAndPeds.update(FIXED_DT, vehicleState, signals);
      latestCollision = checkCourseCollisions(vehicleState, spec);
      recordSafePoseIfClean(latestCollision, trafficSafety);
      if (latestCollision.pushX !== 0 || latestCollision.pushZ !== 0) {
        vehicleState.x += latestCollision.pushX;
        vehicleState.z += latestCollision.pushZ;
        syncRearAxleFromCenter(vehicleState, spec);
        if (latestCollision.poleHit || latestCollision.obstacleHit) {
          vehicleState.speedMs *= 0.35;
          if (simTimeSec - lastThudTime > 0.6) {
            lastThudTime = simTimeSec;
            audio.playThud();
          }
        }
      }
      examiner.update(FIXED_DT, vehicleState, latestCollision, signals, trafficSafety);
    }

    accumulator -= FIXED_DT;
  }

  const wp = examiner.getCurrentWaypoint();
  const examTarget = wp ? { x: wp.x, z: wp.z } : null;
  if (wp && wp.id !== lastSpokenWaypointId) {
    lastSpokenWaypointId = wp.id;
    voiceExaminer.speak(wp.instructionJa, wp.instructionEn, settings.locale);
  } else if (!wp) {
    lastSpokenWaypointId = '';
  }

  syncVehicleVisual(vehicleHandle, vehicleState, settings.vehicleKind);
  world.updateShadowFocus(vehicleState.x, vehicleState.z);
  world.updateDynamic(signals, examTarget, simTimeSec);

  const railState = signals.getRailroadState();
  audio.update(vehicleState, courseMode === 'kyoshujo' && railState.isWarningActive, simTimeSec);

  // Speed Vignette & Radial Blur (starts at 6 m/s)
  const absSpeed = Math.abs(vehicleState.speedMs);
  const fxT = Math.pow(THREE.MathUtils.clamp((absSpeed - 6) / 14, 0, 1), 1.8);
  speedVignetteEl.style.opacity = (fxT * 0.75).toFixed(3);
  speedBlurEl.style.opacity = (fxT * 0.88).toFixed(3);

  // Main Camera Update
  cameraSys.update(frameDt, vehicleState, settings.vehicleKind, vehicleHandle, renderer, scene);

  // 1. Render 3 PiP Mirrors & 3D Orthographic MiniMap via WebGL Scissor Copy
  const hideAuxPasses = !uiCollapsed || miniMapExpanded;
  cameraSys.renderPiPMirrors(
    renderer,
    scene,
    vehicleState,
    mirrorLeftEl,
    mirrorCenterEl,
    mirrorRightEl,
    hideAuxPasses
  );

  const worldBounds =
    courseMode === 'kyoshujo'
      ? { width: COMPOUND_HALF_W * 2, height: COMPOUND_HALF_D * 2 }
      : customMapLayer.currentSize;
  cameraSys.renderPiPMiniMap(
    renderer,
    scene,
    miniMapEl,
    vehicleState,
    worldBounds,
    miniMapExpanded,
    miniMapZoom,
    miniMapPanX,
    miniMapPanZ
  );

  // 2. Render Main Fullscreen Viewport
  renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
  renderer.setScissorTest(false);
  renderer.render(scene, cameraSys.camera);

  // 3. Update Bottom HUD, Translucent Wheel & Telemetry
  const isJa = settings.locale === 'ja';
  speedEl.textContent = (absSpeed * 3.6).toFixed(1);
  gearEl.textContent = vehicleState.gear;
  positionEl.textContent = `${vehicleState.x.toFixed(1)}, ${vehicleState.z.toFixed(1)}`;
  const deg = THREE.MathUtils.radToDeg(vehicleState.heading);
  headingEl.textContent = `${deg.toFixed(1)}° / ${vehicleState.heading.toFixed(4)} rad`;

  const wheelDeg = Math.round(THREE.MathUtils.radToDeg(vehicleState.steeringWheelRad));
  steerAngleEl.textContent = String(wheelDeg);
  wheelHudDialEl.style.transform = `rotate(${-vehicleState.steeringWheelRad}rad)`;

  // Blinker HUD lamps
  const leftLit =
    vehicleState.blinkerOn && (vehicleState.blinker === 'left' || vehicleState.blinker === 'hazard');
  const rightLit =
    vehicleState.blinkerOn && (vehicleState.blinker === 'right' || vehicleState.blinker === 'hazard');
  cockpitLampLeftEl.classList.toggle('is-active', leftLit);
  cockpitLampRightEl.classList.toggle('is-active', rightLit);

  signalStatusBoxEl.dataset.signal = vehicleState.blinker;
  signalStatusEl.textContent =
    vehicleState.blinker === 'left'
      ? isJa
        ? '左合図'
        : 'Left'
      : vehicleState.blinker === 'right'
        ? isJa
          ? '右合図'
          : 'Right'
        : vehicleState.blinker === 'hazard'
          ? 'Hazard'
          : 'Off';

  // Examiner Score & Directive
  hudScoreEl.textContent = String(examiner.getScore());
  hudScoreEl.className = `score-num ${examiner.getScore() < 70 ? 'danger' : ''}`;
  const isExam = examiner.getMode() === 'exam';
  hudModePillEl.textContent = isExam ? t(settings.locale, 'modeExam') : t(settings.locale, 'modePractice');

  const prog = examiner.getWaypointProgress();
  if (routeStatus.bannerText) {
    hudDirectiveEl.textContent = routeStatus.bannerText;
  } else if (courseMode === 'custom') {
    const preset = BUILTIN_COURSE_PRESETS.find((p) => p.id === selectedPresetId);
    hudDirectiveEl.textContent = preset
      ? isJa
        ? `${preset.nameJa} コース練習中`
        : `Practicing: ${preset.nameEn}`
      : isJa
        ? 'カスタム地図コース走行中'
        : 'Driving custom course map';
  } else if (wp) {
    hudDirectiveEl.textContent = `[${prog.current + 1}/${prog.total}] ${isJa ? wp.instructionJa : wp.instructionEn}`;
  } else {
    const stMeta = STATION_TEXT[currentStation];
    hudDirectiveEl.textContent = `${isJa ? stMeta.titleJa : stMeta.titleEn}: ${isJa ? stMeta.descJa : stMeta.descEn}`;
  }

  stallBannerEl.hidden = !vehicleState.stalled;

  (['FL', 'FR', 'RL', 'RR'] as const).forEach((corner) => {
    const info = latestCollision.wheels[corner];
    const el = wheelPips[corner];
    el.classList.toggle('mount', info.curbMount);
    el.classList.toggle('touch', !info.curbMount && info.curbTouch);
    el.classList.toggle('close', !info.curbMount && !info.curbTouch && info.proximity > 0.35);
  });
}

requestAnimationFrame(animate);

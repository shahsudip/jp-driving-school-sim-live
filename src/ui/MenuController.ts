import { STATION_ORDER } from '../core/courseLayout';
import { STATION_TEXT, t } from '../i18n';
import type {
  CourseMode,
  CustomMapConfig,
  Locale,
  MirrorQuality,
  SimMode,
  SpawnStationId,
  TransmissionMode,
  UserSettings,
  VehicleKind,
} from '../types';

export interface MenuCallbacks {
  onStartMode: (mode: SimMode) => void;
  onWarpStation: (station: SpawnStationId) => void;
  onSettingsChanged: (settings: UserSettings) => void;
  onUploadCustomMap: (file: File, widthMeters: number) => void;
  onUpdateCustomWidth: (widthMeters: number) => void;
  onSetCustomSpawnHere: () => void;
  onSetCourseMode: (mode: CourseMode) => void;
  onClearCustomMap: () => void;
}

export class MenuController {
  private readonly drawerEl = document.getElementById('sideDrawer')!;
  private readonly stationGridEl = document.getElementById('stationGrid')!;
  private readonly customControlsEl = document.getElementById('customMapActions')!;
  private isOpen = false;
  private settings: UserSettings;
  private readonly callbacks: MenuCallbacks;

  constructor(initialSettings: UserSettings, callbacks: MenuCallbacks) {
    this.settings = { ...initialSettings };
    this.callbacks = callbacks;

    this.bindTabs();
    this.bindSettingsInputs();
    this.bindCustomMapInputs();
    this.renderStationCards();
    this.syncLabels();
  }

  setOpen(open: boolean): void {
    this.isOpen = open;
    this.drawerEl.classList.toggle('open', open);
    this.drawerEl.setAttribute('aria-hidden', String(!open));
  }

  toggle(): void {
    this.setOpen(!this.isOpen);
  }

  getSettings(): UserSettings {
    return this.settings;
  }

  setLocale(locale: Locale): void {
    this.settings.locale = locale;
    this.renderStationCards();
    this.syncLabels();
  }

  setCustomMapAvailable(cfg: CustomMapConfig | null, activeCourse: CourseMode): void {
    this.customControlsEl.hidden = !cfg;
    const widthInput = document.getElementById('customMapWidthInput') as HTMLInputElement;
    if (cfg && widthInput) {
      widthInput.value = String(Math.round(cfg.mapWidth));
    }
    const statusEl = document.getElementById('customMapStatus')!;
    statusEl.textContent = cfg ? cfg.fileName : '';

    document.getElementById('useKyoshujoBtn')?.classList.toggle('active-course', activeCourse === 'kyoshujo');
    document.getElementById('useCustomMapBtn')?.classList.toggle('active-course', activeCourse === 'custom');
  }

  private bindTabs(): void {
    const tabs = this.drawerEl.querySelectorAll<HTMLButtonElement>('[data-tab]');
    const panes = this.drawerEl.querySelectorAll<HTMLElement>('[data-pane]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach((b) => b.classList.toggle('active', b === tab));
        panes.forEach((p) => (p.hidden = p.dataset.pane !== target));
      });
    });

    document.getElementById('drawerCloseBtn')?.addEventListener('click', () => this.setOpen(false));
    document.getElementById('menuPracticeBtn')?.addEventListener('click', () => {
      this.callbacks.onStartMode('practice');
      this.setOpen(false);
    });
    document.getElementById('menuExamBtn')?.addEventListener('click', () => {
      this.callbacks.onStartMode('exam');
      this.setOpen(false);
    });
  }

  private bindSettingsInputs(): void {
    const vehicleSel = document.getElementById('settingVehicle') as HTMLSelectElement;
    const transSel = document.getElementById('settingTransmission') as HTMLSelectElement;
    const steerInput = document.getElementById('settingSteerSens') as HTMLInputElement;
    const steerVal = document.getElementById('settingSteerSensVal')!;
    const autoCenterChk = document.getElementById('settingAutoCenter') as HTMLInputElement;
    const mirrorSel = document.getElementById('settingMirrorQuality') as HTMLSelectElement;
    const volInput = document.getElementById('settingVolume') as HTMLInputElement;
    const volVal = document.getElementById('settingVolumeVal')!;
    const touchChk = document.getElementById('settingTouchControls') as HTMLInputElement;

    vehicleSel.value = this.settings.vehicleKind;
    transSel.value = this.settings.transmission;
    steerInput.value = String(Math.round(this.settings.steeringSensitivity * 100));
    steerVal.textContent = `${this.settings.steeringSensitivity.toFixed(2)}x`;
    autoCenterChk.checked = this.settings.autoCenterSteering;
    mirrorSel.value = this.settings.mirrorQuality;
    volInput.value = String(Math.round(this.settings.masterVolume * 100));
    volVal.textContent = `${Math.round(this.settings.masterVolume * 100)}%`;
    touchChk.checked = this.settings.showTouchControls;

    vehicleSel.addEventListener('change', () => {
      this.settings.vehicleKind = vehicleSel.value as VehicleKind;
      this.callbacks.onSettingsChanged({ ...this.settings });
    });
    transSel.addEventListener('change', () => {
      this.settings.transmission = transSel.value as TransmissionMode;
      this.callbacks.onSettingsChanged({ ...this.settings });
    });
    steerInput.addEventListener('input', () => {
      this.settings.steeringSensitivity = Number(steerInput.value) / 100;
      steerVal.textContent = `${this.settings.steeringSensitivity.toFixed(2)}x`;
      this.callbacks.onSettingsChanged({ ...this.settings });
    });
    autoCenterChk.addEventListener('change', () => {
      this.settings.autoCenterSteering = autoCenterChk.checked;
      this.callbacks.onSettingsChanged({ ...this.settings });
    });
    mirrorSel.addEventListener('change', () => {
      this.settings.mirrorQuality = mirrorSel.value as MirrorQuality;
      this.callbacks.onSettingsChanged({ ...this.settings });
    });
    volInput.addEventListener('input', () => {
      this.settings.masterVolume = Number(volInput.value) / 100;
      volVal.textContent = `${Math.round(this.settings.masterVolume * 100)}%`;
      this.callbacks.onSettingsChanged({ ...this.settings });
    });
    touchChk.addEventListener('change', () => {
      this.settings.showTouchControls = touchChk.checked;
      this.callbacks.onSettingsChanged({ ...this.settings });
    });
  }

  private bindCustomMapInputs(): void {
    const fileInput = document.getElementById('customMapFile') as HTMLInputElement;
    const widthInput = document.getElementById('customMapWidthInput') as HTMLInputElement;

    fileInput.addEventListener('change', () => {
      const file = fileInput.files?.[0];
      if (!file) return;
      const width = Math.max(40, Number(widthInput.value) || 400);
      this.callbacks.onUploadCustomMap(file, width);
    });

    widthInput.addEventListener('change', () => {
      const width = Math.max(40, Number(widthInput.value) || 400);
      this.callbacks.onUpdateCustomWidth(width);
    });

    document.getElementById('setCustomSpawnBtn')?.addEventListener('click', () => {
      this.callbacks.onSetCustomSpawnHere();
    });
    document.getElementById('useKyoshujoBtn')?.addEventListener('click', () => {
      this.callbacks.onSetCourseMode('kyoshujo');
    });
    document.getElementById('useCustomMapBtn')?.addEventListener('click', () => {
      this.callbacks.onSetCourseMode('custom');
    });
    document.getElementById('clearCustomMapBtn')?.addEventListener('click', () => {
      this.callbacks.onClearCustomMap();
    });
  }

  renderStationCards(): void {
    const loc = this.settings.locale;
    this.stationGridEl.innerHTML = '';
    for (const id of STATION_ORDER) {
      const meta = STATION_TEXT[id];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'station-card';
      btn.dataset.station = id;
      btn.innerHTML = `<strong>${loc === 'ja' ? meta.titleJa : meta.titleEn}</strong><span>${loc === 'ja' ? meta.descJa : meta.descEn}</span>`;
      btn.addEventListener('click', () => {
        this.callbacks.onWarpStation(id);
        this.setOpen(false);
      });
      this.stationGridEl.append(btn);
    }
  }

  syncLabels(): void {
    const loc = this.settings.locale;
    const setText = (id: string, key: Parameters<typeof t>[1]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = t(loc, key);
    };

    setText('drawerTitle', 'stationMenu');
    setText('menuPracticeBtn', 'modePractice');
    setText('menuExamBtn', 'modeExam');
    setText('tabStationsBtn', 'tabStations');
    setText('tabSettingsBtn', 'tabSettings');
    setText('tabCustomBtn', 'tabCustomMap');
    setText('lblVehicle', 'vehicleLabel');
    setText('optSedan', 'vehicleSedan');
    setText('optMoto', 'vehicleMoto');
    setText('lblTrans', 'transLabel');
    setText('optAT', 'transAT');
    setText('optMT', 'transMT');
    setText('lblSteerSens', 'steerSensLabel');
    setText('lblAutoCenter', 'autoCenterLabel');
    setText('lblMirrorQuality', 'mirrorQualityLabel');
    setText('optMirrorHigh', 'mirrorHigh');
    setText('optMirrorLow', 'mirrorLow');
    setText('optMirrorOff', 'mirrorOff');
    setText('lblVolume', 'volumeLabel');
    setText('lblTouchControls', 'touchControlsLabel');
    setText('customMapHint', 'customMapHint');
    setText('uploadMapText', 'uploadMapLabel');
    setText('lblCustomWidth', 'mapWidthLabel');
    setText('setCustomSpawnBtn', 'setSpawnHere');
    setText('useKyoshujoBtn', 'useKyoshujo');
    setText('useCustomMapBtn', 'useCustomMap');
    setText('clearCustomMapBtn', 'clearCustomMap');
  }
}

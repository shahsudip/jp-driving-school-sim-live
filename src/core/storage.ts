import type { CustomMapConfig, UserSettings } from '../types';

const SETTINGS_KEY = 'jp_kyoshujo_settings_v1';
const DB_NAME = 'jp_kyoshujo_db';
const STORE_NAME = 'custom_maps';
const CUSTOM_MAP_KEY = 'active_custom_map';

export const DEFAULT_SETTINGS: UserSettings = {
  locale: 'ja',
  vehicleKind: 'sedan',
  transmission: 'AT',
  cameraMode: 'chase',
  steeringSensitivity: 1.0,
  autoCenterSteering: true,
  mirrorQuality: 'high',
  masterVolume: 0.55,
  muted: false,
  minimapHeadingUp: false,
  showTouchControls: false,
};

export function loadSettings(): UserSettings {
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw) as Partial<UserSettings>;
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings: UserSettings): void {
  try {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Ignore storage quota errors
  }
}

function openMapDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = window.indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveCustomMap(config: CustomMapConfig): Promise<void> {
  try {
    const db = await openMapDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(config, CUSTOM_MAP_KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    // IndexedDB unavailable in private contexts
  }
}

export async function loadCustomMap(): Promise<CustomMapConfig | null> {
  try {
    const db = await openMapDb();
    const result = await new Promise<CustomMapConfig | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(CUSTOM_MAP_KEY);
      req.onsuccess = () => resolve((req.result as CustomMapConfig | undefined) ?? null);
      req.onerror = () => reject(req.error);
    });
    db.close();
    return result;
  } catch {
    return null;
  }
}

export async function clearCustomMap(): Promise<void> {
  try {
    const db = await openMapDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(CUSTOM_MAP_KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch {
    // Ignore
  }
}

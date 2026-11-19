import * as THREE from 'three';

export interface BuiltInCoursePreset {
  id: string;
  nameEn: string;
  nameJa: string;
  mapWidth: number;
  startX: number;
  startZ: number;
  startHeading: number;
  accentColor: string;
}

export const BUILTIN_COURSE_PRESETS: BuiltInCoursePreset[] = [
  {
    id: 'kyoshujo-3d',
    nameEn: 'Sakuragaoka 3D Driving School (Full 3D Kyōshūjo)',
    nameJa: '桜ヶ丘自動車教習所 (3D立体コース)',
    mapWidth: 180,
    startX: 12,
    startZ: 48.1,
    startHeading: Math.PI / 2,
    accentColor: '#059669',
  },
  {
    id: 'tokyo-fuchu',
    nameEn: "Fuchu Driver's License Test Center, Tokyo",
    nameJa: '東京府中運転免許試験場',
    mapWidth: 420,
    startX: -54,
    startZ: 88,
    startHeading: 0,
    accentColor: '#2563eb',
  },
  {
    id: 'tokyo-samezu',
    nameEn: "Samezu Driver's License Test Center, Tokyo",
    nameJa: '東京都鮫洲運転免許試験場',
    mapWidth: 340,
    startX: -42,
    startZ: 74,
    startHeading: Math.PI / 2,
    accentColor: '#0891b2',
  },
  {
    id: 'kanagawa-futamatagawa-car',
    nameEn: 'Kanagawa License Center (Futamatagawa · Car)',
    nameJa: '神奈川県運転免許センター（二俣川・四輪）',
    mapWidth: 460,
    startX: -67.9,
    startZ: 112.0,
    startHeading: Math.PI / 2,
    accentColor: '#059669',
  },
  {
    id: 'osaka-kadoma',
    nameEn: "Kadoma Driver's License Test Center, Osaka",
    nameJa: '大阪門真運転免許試験場',
    mapWidth: 400,
    startX: -50,
    startZ: 82,
    startHeading: 0,
    accentColor: '#7c3aed',
  },
  {
    id: 'aichi-hirabari',
    nameEn: "Hirabari Driver's License Test Center, Nagoya",
    nameJa: '愛知県平針運転免許試験場',
    mapWidth: 380,
    startX: -48,
    startZ: 76,
    startHeading: Math.PI / 2,
    accentColor: '#d97706',
  },
  {
    id: 'saitama-konosu',
    nameEn: "Saitama Prefectural Driver's License Center (Konosu)",
    nameJa: '埼玉県警察運転免許センター（鴻巣）',
    mapWidth: 410,
    startX: -55,
    startZ: 84,
    startHeading: 0,
    accentColor: '#0d9488',
  },
  {
    id: 'chiba-makuhari-car',
    nameEn: 'Chiba Makuhari License Center (Car)',
    nameJa: '千葉幕張免許センター（四輪）',
    mapWidth: 390,
    startX: -46,
    startZ: 80,
    startHeading: Math.PI / 2,
    accentColor: '#db2777',
  },
];

export class CustomMapLayer {
  public readonly group = new THREE.Group();
  private mesh: THREE.Mesh | null = null;
  private texture: THREE.Texture | null = null;
  private activeSource: HTMLImageElement | HTMLCanvasElement | null = null;
  public currentSize = { width: 180, height: 120 };

  constructor(scene: THREE.Scene) {
    this.group.visible = false;
    scene.add(this.group);
  }

  getActiveSource(): HTMLImageElement | HTMLCanvasElement | null {
    return this.activeSource;
  }

  async loadFromDataUrl(dataUrl: string, mapWidthMeters: number): Promise<void> {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error('Failed to decode map image'));
      el.src = dataUrl;
    });

    this.applyCanvasOrImage(img, img.width, img.height, mapWidthMeters);
  }

  loadProceduralTestCenter(preset: BuiltInCoursePreset): void {
    const W = 2048;
    const H = 1360;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d')!;

    // Lush test center compound turf
    ctx.fillStyle = '#4e753e';
    ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 6000; i++) {
      ctx.fillStyle = i % 2 === 0 ? 'rgba(65,98,48,0.28)' : 'rgba(110,148,80,0.22)';
      ctx.fillRect(Math.random() * W, Math.random() * H, 4, 4);
    }

    const drawRoad = (fn: () => void, widthPx = 92) => {
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#d1d5db';
      ctx.lineWidth = widthPx + 10;
      fn();
      ctx.stroke();

      ctx.strokeStyle = '#363c44';
      ctx.lineWidth = widthPx;
      fn();
      ctx.stroke();

      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 3;
      ctx.setLineDash([24, 24]);
      fn();
      ctx.stroke();
      ctx.restore();
    };

    // Outer high-speed perimeter loop
    drawRoad(() => {
      ctx.beginPath();
      ctx.roundRect(140, 120, W - 280, H - 240, 160);
    }, 106);

    // Inner grid & diagonal test center avenues
    drawRoad(() => {
      ctx.beginPath();
      ctx.moveTo(W * 0.35, 120);
      ctx.lineTo(W * 0.35, H - 120);
      ctx.moveTo(W * 0.65, 120);
      ctx.lineTo(W * 0.65, H - 120);
      ctx.moveTo(140, H * 0.45);
      ctx.lineTo(W - 140, H * 0.45);
      ctx.moveTo(140, H * 0.72);
      ctx.lineTo(W * 0.65, H * 0.72);
    }, 88);

    // S-Curve & Crank pockets
    drawRoad(() => {
      ctx.beginPath();
      ctx.moveTo(W * 0.35, H * 0.25);
      ctx.bezierCurveTo(W * 0.5, H * 0.16, W * 0.5, H * 0.38, W * 0.65, H * 0.28);
    }, 52);

    drawRoad(() => {
      ctx.beginPath();
      ctx.moveTo(W * 0.65, H * 0.58);
      ctx.lineTo(W * 0.78, H * 0.58);
      ctx.lineTo(W * 0.78, H * 0.76);
      ctx.lineTo(W - 140, H * 0.76);
    }, 54);

    // Course Header Watermark on Tarmac
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = 'bold 44px "Noto Sans JP", sans-serif';
    ctx.fillText(preset.nameJa, 220, 210);
    ctx.fillStyle = preset.accentColor;
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText(preset.nameEn, 220, 255);

    this.applyCanvasOrImage(canvas, W, H, preset.mapWidth);
  }

  private applyCanvasOrImage(
    source: HTMLImageElement | HTMLCanvasElement,
    pixelW: number,
    pixelH: number,
    mapWidthMeters: number
  ): void {
    this.disposeCurrent();
    this.activeSource = source;

    const tex = new THREE.Texture(source);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.needsUpdate = true;
    this.texture = tex;

    const aspect = pixelH / Math.max(1, pixelW);
    const width = Math.max(10, mapWidthMeters);
    const depth = width * aspect;
    this.currentSize = { width, height: depth };

    const geo = new THREE.PlaneGeometry(width, depth);
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.92,
      metalness: 0.0,
    });
    const plane = new THREE.Mesh(geo, mat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0.005;
    plane.receiveShadow = true;

    this.mesh = plane;
    this.group.add(plane);
  }

  setWidth(mapWidthMeters: number): void {
    if (!this.mesh || !this.texture?.image) return;
    const img = this.texture.image as { width: number; height: number };
    const aspect = img.height / Math.max(1, img.width);
    const width = Math.max(10, mapWidthMeters);
    const depth = width * aspect;
    this.currentSize = { width, height: depth };
    this.mesh.geometry.dispose();
    this.mesh.geometry = new THREE.PlaneGeometry(width, depth);
  }

  setVisible(visible: boolean): void {
    this.group.visible = visible;
  }

  private disposeCurrent(): void {
    if (this.mesh) {
      this.group.remove(this.mesh);
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.Material).dispose();
      this.mesh = null;
    }
    if (this.texture) {
      this.texture.dispose();
      this.texture = null;
    }
  }
}

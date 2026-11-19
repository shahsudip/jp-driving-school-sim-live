import {
  CRANK_CENTERLINE,
  HILL_DOWN_END,
  HILL_UP_START,
  HILL_Z,
  OBSTACLE_COLLIDERS,
  S_CURVE_CENTERLINE,
} from '../core/courseLayout';
import type { TrafficSignalController } from '../core/trafficSignals';
import type { CourseMode, VehicleState } from '../types';

export class MinimapRenderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private zoom = 1.0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('2D context unavailable');
    this.ctx = context;

    this.canvas.addEventListener('click', () => {
      this.zoom = this.zoom === 1.0 ? 1.85 : this.zoom === 1.85 ? 2.6 : 1.0;
    });
  }

  render(
    state: VehicleState,
    signals: TrafficSignalController,
    courseMode: CourseMode,
    examTarget: { x: number; z: number } | null,
    headingUp: boolean
  ): void {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const cssW = this.canvas.clientWidth || 220;
    const cssH = this.canvas.clientHeight || 152;
    if (this.canvas.width !== Math.round(cssW * dpr) || this.canvas.height !== Math.round(cssH * dpr)) {
      this.canvas.width = Math.round(cssW * dpr);
      this.canvas.height = Math.round(cssH * dpr);
    }

    const ctx = this.ctx;
    ctx.save();
    ctx.scale(dpr, dpr);

    // Background turf
    ctx.fillStyle = '#1b262c';
    ctx.fillRect(0, 0, cssW, cssH);

    // Base scale fits 190m x 130m inside canvas
    const baseScale = Math.min(cssW / 188, cssH / 128) * this.zoom;

    ctx.translate(cssW * 0.5, cssH * 0.5);
    if (headingUp) {
      ctx.rotate(state.heading);
      ctx.scale(baseScale, baseScale);
      ctx.translate(-state.x, -state.z);
    } else if (this.zoom > 1.01) {
      ctx.scale(baseScale, baseScale);
      ctx.translate(-state.x, -state.z);
    } else {
      ctx.scale(baseScale, baseScale);
    }

    if (courseMode === 'kyoshujo') {
      this.drawKyoshujoRoads(ctx, signals);
    } else {
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 1.2;
      for (let g = -150; g <= 150; g += 25) {
        ctx.beginPath();
        ctx.moveTo(g, -150);
        ctx.lineTo(g, 150);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-150, g);
        ctx.lineTo(150, g);
        ctx.stroke();
      }
    }

    // Exam Target Beacon
    if (examTarget) {
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.arc(examTarget.x, examTarget.z, 4.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(16, 185, 129, 0.35)';
      ctx.fill();
    }

    // Vehicle Arrow
    ctx.save();
    ctx.translate(state.x, state.z);
    ctx.rotate(-state.heading); // Remember heading increases CCW; canvas +angle is CW
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#005bac';
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.moveTo(0, -3.4); // Front (-Z)
    ctx.lineTo(2.2, 2.4);
    ctx.lineTo(0, 1.3);
    ctx.lineTo(-2.2, 2.4);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.restore();
  }

  private drawKyoshujoRoads(ctx: CanvasRenderingContext2D, signals: TrafficSignalController): void {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 7.0;

    // Outer perimeter rounded loop
    ctx.beginPath();
    ctx.moveTo(-62, -46);
    ctx.lineTo(62, -46);
    ctx.arc(62, -32, 14, -Math.PI / 2, 0);
    ctx.lineTo(76, 32);
    ctx.arc(62, 32, 14, 0, Math.PI / 2);
    ctx.lineTo(-62, 46);
    ctx.arc(-62, 32, 14, Math.PI / 2, Math.PI);
    ctx.lineTo(-76, -32);
    ctx.arc(-62, -32, 14, Math.PI, (3 * Math.PI) / 2);
    ctx.stroke();

    // Central NS + EW + SE Avenue
    ctx.beginPath();
    ctx.moveTo(0, -46);
    ctx.lineTo(0, 46);
    ctx.moveTo(-76, 0);
    ctx.lineTo(76, 0);
    ctx.moveTo(0, 24);
    ctx.lineTo(76, 24);
    ctx.stroke();

    // Hill road
    ctx.lineWidth = 5.5;
    ctx.beginPath();
    ctx.moveTo(3.5, HILL_Z);
    ctx.lineTo(72.5, HILL_Z);
    ctx.stroke();

    // Highlight Hill ramp elevation
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 4.6;
    ctx.beginPath();
    ctx.moveTo(HILL_UP_START, HILL_Z);
    ctx.lineTo(HILL_DOWN_END, HILL_Z);
    ctx.stroke();

    // S-Curve
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 3.6;
    ctx.beginPath();
    S_CURVE_CENTERLINE.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.z) : ctx.lineTo(p.x, p.z)));
    ctx.stroke();

    // Crank
    ctx.lineWidth = 4.0;
    ctx.beginPath();
    CRANK_CENTERLINE.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.z) : ctx.lineTo(p.x, p.z)));
    ctx.stroke();

    // Bay & Parallel pockets
    ctx.fillStyle = '#64748b';
    ctx.fillRect(24.15, 27.5, 3.7, 6.2);
    ctx.fillRect(45.0, 27.5, 7.2, 2.7);

    // Parked obstacle van
    const van = OBSTACLE_COLLIDERS[0];
    if (van) {
      ctx.fillStyle = '#f97316';
      ctx.fillRect(van.x - van.halfW, van.z - van.halfL, van.halfW * 2, van.halfL * 2);
    }

    // Railroad tracks & live warning indicator at (38, 0)
    const rail = signals.getRailroadState();
    ctx.strokeStyle = rail.isWarningActive && rail.flashLeftOn ? '#ef4444' : '#cbd5e1';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(37.3, -9);
    ctx.lineTo(37.3, 9);
    ctx.moveTo(38.7, -9);
    ctx.lineTo(38.7, 9);
    ctx.stroke();

    // Central Signal indicator dots
    const ns = signals.getLightForAxis('NS');
    const ew = signals.getLightForAxis('EW');
    const colorMap = { green: '#10b981', yellow: '#f59e0b', red: '#ef4444' } as const;
    ctx.fillStyle = colorMap[ns];
    ctx.beginPath();
    ctx.arc(0, 4.5, 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = colorMap[ew];
    ctx.beginPath();
    ctx.arc(-4.5, 0, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

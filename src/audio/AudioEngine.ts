import type { VehicleState } from '../types';

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private engineOscA: OscillatorNode | null = null;
  private engineOscB: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private engineGain: GainNode | null = null;

  private volume = 0.55;
  private muted = false;
  private lastBlinkerOn = false;
  private lastRailBellTime = -999;

  unlock(): void {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.muted ? 0 : this.volume;
      this.masterGain.connect(this.ctx.destination);

      this.engineFilter = this.ctx.createBiquadFilter();
      this.engineFilter.type = 'lowpass';
      this.engineFilter.frequency.value = 260;

      this.engineGain = this.ctx.createGain();
      this.engineGain.gain.value = 0.14;

      this.engineOscA = this.ctx.createOscillator();
      this.engineOscA.type = 'sawtooth';
      this.engineOscA.frequency.value = 52;

      this.engineOscB = this.ctx.createOscillator();
      this.engineOscB.type = 'triangle';
      this.engineOscB.frequency.value = 104;

      this.engineOscA.connect(this.engineFilter);
      this.engineOscB.connect(this.engineFilter);
      this.engineFilter.connect(this.engineGain);
      this.engineGain.connect(this.masterGain);

      this.engineOscA.start();
      this.engineOscB.start();
    }

    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
  }

  setVolume(volume: number, muted: boolean): void {
    this.volume = volume;
    this.muted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(muted ? 0 : volume, this.ctx.currentTime, 0.04);
    }
  }

  update(state: VehicleState, railWarningActive: boolean, simTimeSec: number): void {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;

    // 1. Engine pitch & filter modulated by RPM
    if (this.engineOscA && this.engineOscB && this.engineFilter && this.engineGain) {
      if (state.stalled || state.rpm <= 0) {
        this.engineGain.gain.setTargetAtTime(0.0, now, 0.05);
      } else {
        const rpmRatio = Math.max(0, Math.min(1, (state.rpm - 750) / 3600));
        const baseFreq = 38 + rpmRatio * 96;
        this.engineOscA.frequency.setTargetAtTime(baseFreq, now, 0.05);
        this.engineOscB.frequency.setTargetAtTime(baseFreq * 2.0, now, 0.05);
        this.engineFilter.frequency.setTargetAtTime(190 + rpmRatio * 560, now, 0.06);
        this.engineGain.gain.setTargetAtTime(0.08 + rpmRatio * 0.11, now, 0.06);
      }
    }

    // 2. Blinker relay click on state transitions
    if (state.blinker !== 'off' && state.blinkerOn !== this.lastBlinkerOn) {
      this.playClick(state.blinkerOn ? 920 : 680, 0.025, 0.16);
    }
    this.lastBlinkerOn = state.blinkerOn;

    // 3. Japanese Fumikiri Railroad Crossing bell attenuated by distance to (38, 0)
    if (railWarningActive) {
      const dist = Math.hypot(state.x - 38, state.z);
      if (dist < 58 && simTimeSec - this.lastRailBellTime >= 0.45) {
        this.lastRailBellTime = simTimeSec;
        const att = Math.max(0.03, Math.min(0.28, 8.0 / Math.max(6, dist)));
        this.playFumikiriBell(att);
      }
    }
  }

  playClick(freq = 800, dur = 0.03, gainVal = 0.15): void {
    if (!this.ctx || !this.masterGain || this.muted || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, now);
    g.gain.setValueAtTime(gainVal, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + dur);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + dur);
  }

  private playFumikiriBell(gainVal: number): void {
    if (!this.ctx || !this.masterGain || this.muted) return;
    const now = this.ctx.currentTime;
    for (const freq of [700, 758]) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      g.gain.setValueAtTime(gainVal * 0.5, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.36);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.37);
    }
  }

  playViolationChime(instantFail: boolean): void {
    if (!this.ctx || !this.masterGain || this.muted || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = instantFail ? 'sawtooth' : 'triangle';
    osc.frequency.setValueAtTime(instantFail ? 220 : 440, now);
    osc.frequency.setValueAtTime(instantFail ? 165 : 330, now + 0.12);
    g.gain.setValueAtTime(0.22, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.34);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.35);
  }

  playThud(): void {
    if (!this.ctx || !this.masterGain || this.muted || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.14);
    g.gain.setValueAtTime(0.28, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.16);
  }
}

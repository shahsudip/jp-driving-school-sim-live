import type { InputState } from '../types';

export interface InputActions {
  onToggleBlinker: (dir: 'left' | 'right' | 'hazard') => void;
  onToggleHandbrake: () => void;
  onShiftGear: (delta: 1 | -1) => void;
  onCycleCamera: () => void;
  onResetVehicle: () => void;
  onToggleMenu: () => void;
  onIgnition: () => void;
  onAnyInteraction: () => void;
}

export class InputManager {
  private keys = new Set<string>();
  private touchThrottle = 0;
  private touchBrake = 0;
  private touchLookLeft = false;
  private touchLookRight = false;
  private analogSteer: number | null = null;
  private readonly actions: InputActions;

  constructor(actions: InputActions) {
    this.actions = actions;
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('blur', this.handleBlur);
  }

  private handleBlur = () => {
    this.keys.clear();
    this.touchThrottle = 0;
    this.touchBrake = 0;
    this.touchLookLeft = false;
    this.touchLookRight = false;
    this.analogSteer = null;
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA')) {
      return;
    }

    this.actions.onAnyInteraction();
    const code = e.code;

    if (
      code === 'Space' ||
      code === 'ArrowUp' ||
      code === 'ArrowDown' ||
      code === 'ArrowLeft' ||
      code === 'ArrowRight'
    ) {
      e.preventDefault();
    }

    if (!e.repeat) {
      if (code === 'KeyQ') this.actions.onToggleBlinker('left');
      else if (code === 'KeyE') this.actions.onToggleBlinker('right');
      else if (code === 'KeyH') this.actions.onToggleBlinker('hazard');
      else if (code === 'Space') this.actions.onToggleHandbrake();
      else if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'BracketRight') {
        this.actions.onShiftGear(1);
      } else if (code === 'ControlLeft' || code === 'ControlRight' || code === 'BracketLeft') {
        this.actions.onShiftGear(-1);
      } else if (code === 'KeyV') this.actions.onCycleCamera();
      else if (code === 'KeyO') this.actions.onResetVehicle();
      else if (code === 'KeyM') this.actions.onToggleMenu();
      else if (code === 'KeyI') this.actions.onIgnition();
    }

    this.keys.add(code);
  };

  private handleKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
  };

  bindTouchControls(container: HTMLElement): void {
    const steerZone = container.querySelector<HTMLElement>('[data-touch="steer"]');
    const steerKnob = container.querySelector<HTMLElement>('[data-touch="steer-knob"]');
    const throttleBtn = container.querySelector<HTMLElement>('[data-touch="throttle"]');
    const brakeBtn = container.querySelector<HTMLElement>('[data-touch="brake"]');
    const lookLBtn = container.querySelector<HTMLElement>('[data-touch="look-left"]');
    const lookRBtn = container.querySelector<HTMLElement>('[data-touch="look-right"]');

    if (steerZone) {
      let activePtr: number | null = null;
      let startX = 0;
      const updateSteer = (clientX: number) => {
        const dx = clientX - startX;
        const maxPx = 54;
        const norm = Math.max(-1, Math.min(1, -dx / maxPx)); // drag left (-dx) -> steerLeft (+norm)
        this.analogSteer = norm;
        if (steerKnob) {
          steerKnob.style.transform = `translateX(${Math.max(-maxPx, Math.min(maxPx, dx))}px)`;
        }
      };

      steerZone.addEventListener('pointerdown', (ev) => {
        ev.preventDefault();
        this.actions.onAnyInteraction();
        activePtr = ev.pointerId;
        startX = ev.clientX;
        steerZone.setPointerCapture(ev.pointerId);
        updateSteer(ev.clientX);
      });
      steerZone.addEventListener('pointermove', (ev) => {
        if (ev.pointerId !== activePtr) return;
        updateSteer(ev.clientX);
      });
      const endSteer = (ev: PointerEvent) => {
        if (ev.pointerId !== activePtr) return;
        activePtr = null;
        this.analogSteer = null;
        if (steerKnob) steerKnob.style.transform = 'translateX(0px)';
      };
      steerZone.addEventListener('pointerup', endSteer);
      steerZone.addEventListener('pointercancel', endSteer);
    }

    const bindHold = (el: HTMLElement | null, onChange: (down: boolean) => void) => {
      if (!el) return;
      el.addEventListener('pointerdown', (ev) => {
        ev.preventDefault();
        this.actions.onAnyInteraction();
        el.setPointerCapture(ev.pointerId);
        el.classList.add('active');
        onChange(true);
      });
      const release = () => {
        el.classList.remove('active');
        onChange(false);
      };
      el.addEventListener('pointerup', release);
      el.addEventListener('pointercancel', release);
    };

    bindHold(throttleBtn, (down) => {
      this.touchThrottle = down ? 1 : 0;
    });
    bindHold(brakeBtn, (down) => {
      this.touchBrake = down ? 1 : 0;
    });
    bindHold(lookLBtn, (down) => {
      this.touchLookLeft = down;
    });
    bindHold(lookRBtn, (down) => {
      this.touchLookRight = down;
    });

    container.querySelectorAll<HTMLElement>('[data-touch-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.actions.onAnyInteraction();
        const act = btn.dataset.touchAction;
        if (act === 'blinker-left') this.actions.onToggleBlinker('left');
        else if (act === 'blinker-right') this.actions.onToggleBlinker('right');
        else if (act === 'handbrake') this.actions.onToggleHandbrake();
        else if (act === 'gear-up') this.actions.onShiftGear(1);
        else if (act === 'gear-down') this.actions.onShiftGear(-1);
      });
    });
  }

  getInputState(): InputState {
    const keyThrottle = this.keys.has('KeyW') || this.keys.has('ArrowUp') ? 1 : 0;
    const keyBrake = this.keys.has('KeyS') || this.keys.has('ArrowDown') ? 1 : 0;
    const keyLeft = this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? 1 : 0;
    const keyRight = this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0;
    const clutch = this.keys.has('KeyC') ? 1 : 0;

    return {
      throttle: Math.max(keyThrottle, this.touchThrottle),
      brake: Math.max(keyBrake, this.touchBrake),
      steerLeft: keyLeft,
      steerRight: keyRight,
      analogSteerTarget: this.analogSteer,
      clutch,
      lookLeft: this.keys.has('KeyZ') || this.touchLookLeft,
      lookRight: this.keys.has('KeyX') || this.touchLookRight,
    };
  }

  dispose(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('blur', this.handleBlur);
  }
}

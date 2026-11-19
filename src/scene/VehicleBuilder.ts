import * as THREE from 'three';
import { buildCB400 } from './cb400Model';
import { buildCorolla } from './corollaModel';
import type { VehicleKind, VehicleState } from '../types';

export const CABIN_INTERIOR_LAYER = 1;

export interface VehicleVisualHandle {
  root: THREE.Group;
  leanGroup: THREE.Group;
  flipGroup: THREE.Group;
  kind: VehicleKind;
  corollaParts: any | null;
  cb400Parts: any | null;
}

export function buildVehicleModel(kind: VehicleKind): VehicleVisualHandle {
  const root = new THREE.Group();
  const leanGroup = new THREE.Group();
  const flipGroup = new THREE.Group();
  // Rotate +Z forward GaimenGo models by 180 deg around Y to match our -Z forward convention
  flipGroup.rotation.y = Math.PI;
  leanGroup.add(flipGroup);
  root.add(leanGroup);

  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: 0x059669,
    metalness: 0.12,
    roughness: 0.24,
    clearcoat: 1,
    clearcoatRoughness: 0.17,
  });
  const chromeMat = new THREE.MeshStandardMaterial({
    color: 0xd8dee3,
    metalness: 0.92,
    roughness: 0.16,
  });
  const trimBlackMat = new THREE.MeshStandardMaterial({
    color: 0x14181d,
    metalness: 0.38,
    roughness: 0.58,
  });

  if (kind === 'motorcycle') {
    const cb400Parts = buildCB400(flipGroup, chromeMat, true);
    cb400Parts.bikeCockpitRoot.visible = false;
    return {
      root,
      leanGroup,
      flipGroup,
      kind,
      corollaParts: null,
      cb400Parts,
    };
  }

  const corollaParts = buildCorolla(flipGroup, bodyMat, chromeMat, trimBlackMat, true);
  return {
    root,
    leanGroup,
    flipGroup,
    kind,
    corollaParts,
    cb400Parts: null,
  };
}

export function setVehicleCockpitVisibility(handle: VehicleVisualHandle, isCockpit: boolean): void {
  if (handle.kind === 'motorcycle' && handle.cb400Parts) {
    const p = handle.cb400Parts;
    p.motorcycleRoot.visible = !isCockpit;
    p.bikeCockpitRoot.visible = isCockpit;
    return;
  }

  if (handle.corollaParts) {
    const p = handle.corollaParts;
    const isExt = !isCockpit;
    if (p.driverSeat) p.driverSeat.visible = isExt;
    if (p.frontBumper) p.frontBumper.visible = isExt;
    if (p.rearBumper) p.rearBumper.visible = isExt;
    if (p.grille) p.grille.visible = isExt;
    if (p.headlightL) p.headlightL.visible = isExt;
    if (p.headlightR) p.headlightR.visible = isExt;
    if (p.taillightL) p.taillightL.visible = isExt;
    if (p.taillightR) p.taillightR.visible = isExt;
    if (p.roofRailL) p.roofRailL.visible = isExt;
    if (p.roofRailR) p.roofRailR.visible = isExt;
  }
}

export function syncVehicleVisual(
  handle: VehicleVisualHandle,
  state: VehicleState,
  _kind: VehicleKind
): void {
  handle.root.position.set(state.x, state.y, state.z);
  handle.root.rotation.y = state.heading;

  handle.leanGroup.rotation.x = state.pitch;
  handle.leanGroup.rotation.z = state.roll;

  const leftLit = state.blinkerOn && (state.blinker === 'left' || state.blinker === 'hazard');
  const rightLit = state.blinkerOn && (state.blinker === 'right' || state.blinker === 'hazard');
  const brkOn = state.braking || state.handbrake;
  const rpmRatio = Math.max(0.18, Math.min(1, (state.rpm - 700) / 4200));

  if (handle.corollaParts) {
    const p = handle.corollaParts;
    for (const assembly of p.wheelAssemblies) {
      if (assembly.steerable) {
        assembly.pivot.rotation.y = state.steerAngleRad;
      }
      assembly.wheel.rotation.x = state.wheelRotationRad;
    }

    if (p.steeringWheel) {
      p.steeringWheel.rotation.z = -state.steeringWheelRad;
    }

    for (const l of p.sedanSignalLamps.left) {
      l.material.emissiveIntensity = leftLit ? 2.4 : 0.02;
    }
    for (const l of p.sedanSignalLamps.right) {
      l.material.emissiveIntensity = rightLit ? 2.4 : 0.02;
    }
    for (const l of p.sedanBrakeLamps) {
      l.material.emissiveIntensity = brkOn ? 2.5 : 0.12;
    }
    for (const l of p.reverseLamps) {
      l.material.emissiveIntensity = state.reversing ? 2.0 : 0.02;
    }

    const activeSignal = leftLit && rightLit ? 'hazard' : leftLit ? 'left' : rightLit ? 'right' : 'off';
    p.updateCockpit?.(state.speedMs, rpmRatio, state.gear, activeSignal);
  }

  if (handle.cb400Parts) {
    const p = handle.cb400Parts;
    p.bikeFrontWheelPivot.rotation.y = state.steerAngleRad;
    p.bikeFrontWheelAssembly.group.rotation.x = state.wheelRotationRad;
    p.bikeRearWheelAssembly.group.rotation.x = state.wheelRotationRad;
    p.bikeHandlebar.rotation.y = state.steerAngleRad;
    p.bikeCockpitBar.rotation.y = state.steerAngleRad;

    for (const l of p.bikeSignalLamps.left) {
      l.material.emissiveIntensity = leftLit ? 2.4 : 0.02;
    }
    for (const l of p.bikeSignalLamps.right) {
      l.material.emissiveIntensity = rightLit ? 2.4 : 0.02;
    }
    p.bikeBrakeLamp.material.emissiveIntensity = brkOn ? 2.5 : 0.12;

    p.updateBikeCockpit?.(state.speedMs, rpmRatio);
  }
}

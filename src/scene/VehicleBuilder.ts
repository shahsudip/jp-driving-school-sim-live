import * as THREE from 'three';
import { buildCB400 } from './cb400Model';
import { buildCorolla } from './corollaModel';
import type { VehicleKind, VehicleState } from '../types';

export const CABIN_INTERIOR_LAYER = 1;

export interface DriverAvatarHandle {
  group: THREE.Group;
  headGroup: THREE.Group;
  seatbeltGroup: THREE.Group;
  leftArmGroup: THREE.Group;
  rightArmGroup: THREE.Group;
}

export interface VehicleVisualHandle {
  root: THREE.Group;
  leanGroup: THREE.Group;
  flipGroup: THREE.Group;
  kind: VehicleKind;
  corollaParts: any | null;
  cb400Parts: any | null;
  driverAvatar: DriverAvatarHandle | null;
}

function buildDriverAvatar(flipGroup: THREE.Group): DriverAvatarHandle {
  const group = new THREE.Group();
  // In +Z forward Corolla space, driver seat is on the right side (x = -0.37, y = 0.55, z = -0.40)
  group.position.set(-0.37, 0.58, -0.38);

  const jacketMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.65 });
  const pantsMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.75 });
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xf1c27d, roughness: 0.55 });
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x171717, roughness: 0.8 });
  const beltMat = new THREE.MeshStandardMaterial({
    color: 0xdc2626,
    emissive: 0x7f1d1d,
    emissiveIntensity: 0.35,
    roughness: 0.35,
  });
  const buckleMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.2 });

  // Torso
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.42, 0.2), jacketMat);
  torso.position.set(0, 0.24, 0.04);
  torso.rotation.x = -0.08;
  torso.castShadow = true;
  group.add(torso);

  // Thighs on seat cushion
  for (const sx of [-0.085, 0.085]) {
    const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.11, 0.36), pantsMat);
    thigh.position.set(sx, 0.06, 0.2);
    thigh.rotation.x = -0.1;
    group.add(thigh);
  }

  // Head + Cap + Eyes (rotates with state.lookAngleRad & mirror checks!)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.54, 0.03);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.055, 0.08, 12), skinMat);
  neck.position.y = -0.03;
  headGroup.add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 16, 14), skinMat);
  head.position.y = 0.06;
  head.scale.set(0.92, 1.05, 0.96);
  head.castShadow = true;
  headGroup.add(head);

  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(0.119, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62),
    hairMat
  );
  hairCap.position.y = 0.068;
  hairCap.rotation.x = -0.15;
  headGroup.add(hairCap);

  // Visor cap bill pointing forward (+Z in Corolla space) so head turn direction is unmistakable!
  const visor = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.018, 0.11),
    new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.4 })
  );
  visor.position.set(0, 0.115, 0.11);
  visor.rotation.x = 0.12;
  headGroup.add(visor);

  // Eyes / Glasses frame on front (+Z) face
  const glasses = new THREE.Mesh(
    new THREE.BoxGeometry(0.15, 0.032, 0.025),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.5, roughness: 0.2 })
  );
  glasses.position.set(0, 0.068, 0.105);
  headGroup.add(glasses);

  group.add(headGroup);

  // Left & Right Arms reaching forward toward steering wheel (or up to center mirror)
  const leftArmGroup = new THREE.Group();
  leftArmGroup.position.set(0.18, 0.39, 0.05);
  const leftArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.075, 0.44), jacketMat);
  leftArmMesh.position.set(-0.02, -0.04, 0.21);
  leftArmMesh.rotation.x = 0.15;
  leftArmMesh.rotation.y = -0.12;
  const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 8), skinMat);
  leftHand.position.set(-0.05, -0.06, 0.43);
  leftArmGroup.add(leftArmMesh, leftHand);
  group.add(leftArmGroup);

  const rightArmGroup = new THREE.Group();
  rightArmGroup.position.set(-0.18, 0.39, 0.05);
  const rightArmMesh = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.075, 0.44), jacketMat);
  rightArmMesh.position.set(0.02, -0.04, 0.21);
  rightArmMesh.rotation.x = 0.15;
  rightArmMesh.rotation.y = 0.12;
  const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 8), skinMat);
  rightHand.position.set(0.05, -0.06, 0.43);
  rightArmGroup.add(rightArmMesh, rightHand);
  group.add(rightArmGroup);

  // 3D Diagonal Red Seatbelt Strap + Lap Belt + Metal Buckle (toggled by state.preDrive.seatbeltFastened)
  const seatbeltGroup = new THREE.Group();
  // Diagonal chest sash from right shoulder (-X, +Y) down to left hip (+X, -Y)
  const diagonalStrap = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.52, 0.022), beltMat);
  diagonalStrap.position.set(-0.01, 0.25, 0.145);
  diagonalStrap.rotation.z = -0.62;
  diagonalStrap.rotation.x = -0.08;
  seatbeltGroup.add(diagonalStrap);

  // B-pillar anchor strap segment going up to right B-pillar
  const pillarStrap = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.34, 0.018), beltMat);
  pillarStrap.position.set(-0.24, 0.48, -0.02);
  pillarStrap.rotation.z = 0.45;
  seatbeltGroup.add(pillarStrap);

  // Lap belt across waist
  const lapStrap = new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.05, 0.024), beltMat);
  lapStrap.position.set(0, 0.09, 0.16);
  seatbeltGroup.add(lapStrap);

  // Metal buckle at inner left hip (+X side towards center console)
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.065, 0.035), buckleMat);
  buckle.position.set(0.17, 0.08, 0.15);
  seatbeltGroup.add(buckle);

  seatbeltGroup.visible = false;
  group.add(seatbeltGroup);

  flipGroup.add(group);

  return {
    group,
    headGroup,
    seatbeltGroup,
    leftArmGroup,
    rightArmGroup,
  };
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
      driverAvatar: null,
    };
  }

  const corollaParts = buildCorolla(flipGroup, bodyMat, chromeMat, trimBlackMat, true);
  const driverAvatar = buildDriverAvatar(flipGroup);
  return {
    root,
    leanGroup,
    flipGroup,
    kind,
    corollaParts,
    cb400Parts: null,
    driverAvatar,
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

  // Driver avatar is visible in Instructor view, Chase view, and Orbit view, hidden only inside first-person driver eye Cockpit
  if (handle.driverAvatar) {
    handle.driverAvatar.group.visible = !isCockpit;
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

    // Seat adjustment slides driver seat & driver avatar forward by 6 cm
    const seatZOffset = state.preDrive?.seatAdjusted ? 0.06 : 0;
    if (p.driverSeat) {
      p.driverSeat.position.z = -0.4 + seatZOffset;
    }
    if (handle.driverAvatar) {
      const av = handle.driverAvatar;
      av.group.position.z = -0.38 + seatZOffset;
      av.seatbeltGroup.visible = Boolean(state.preDrive?.seatbeltFastened);

      // Head turn: state.lookAngleRad > 0 is Left, < 0 is Right.
      // When mirrorTouchTimer > 0, driver reaches left hand up to adjust center mirror and tilts head toward mirror!
      if (state.mirrorTouchTimer > 0) {
        av.headGroup.rotation.y = 0.32;
        av.headGroup.rotation.x = -0.22;
        av.leftArmGroup.rotation.x = -0.75;
        av.leftArmGroup.rotation.y = 0.35;
      } else {
        av.headGroup.rotation.y = state.lookAngleRad * 0.95;
        av.headGroup.rotation.x = Math.abs(state.lookAngleRad) > 0.2 ? 0.05 : 0;
        // Hands follow steering wheel slightly
        const steerHand = THREE.MathUtils.clamp(state.steerAngleRad * 0.45, -0.35, 0.35);
        av.leftArmGroup.rotation.x = steerHand;
        av.leftArmGroup.rotation.y = 0;
        av.rightArmGroup.rotation.x = -steerHand;
      }
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

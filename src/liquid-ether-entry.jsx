import React from 'react';
import { createRoot } from 'react-dom/client';

const mount = document.getElementById('liquidEtherBg');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
const lowMemory = Number(navigator.deviceMemory || 8) <= 4;
let liquidRoot = null;
let liquidRequested = false;

function scheduleIdle(callback) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 1400 });
    return;
  }
  window.setTimeout(callback, 600);
}

async function mountLiquidEther() {
  if (!mount || liquidRequested) return;
  liquidRequested = true;
  const { default: LiquidEther } = await import('./LiquidEther.jsx');
  liquidRoot = liquidRoot || createRoot(mount);
  liquidRoot.render(
    <LiquidEther
      colors={['#94ff27', '#b6ff9f', '#9bcf97']}
      mouseForce={9}
      cursorSize={52}
      isViscous
      viscous={24}
      iterationsViscous={12}
      iterationsPoisson={14}
      dt={0.016}
      BFECC
      resolution={0.32}
      isBounce={false}
      autoDemo
      autoSpeed={0.95}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
      frameInterval={1000 / 30}
    />
  );
}

if (mount && !reduceMotion && !coarsePointer && !lowMemory) {
  const cleanupListeners = () => {
    window.removeEventListener('scroll', requestLiquidIfNeeded);
    window.removeEventListener('resize', requestLiquidIfNeeded);
  };

  function shouldMountLiquid() {
    const rect = mount.getBoundingClientRect();
    return window.scrollY > 220 || rect.top < window.innerHeight * 0.72;
  }

  function requestLiquidIfNeeded() {
    if (liquidRequested || !shouldMountLiquid()) return;
    cleanupListeners();
    scheduleIdle(mountLiquidEther);
  }

  window.addEventListener('scroll', requestLiquidIfNeeded, { passive: true });
  window.addEventListener('resize', requestLiquidIfNeeded);
  requestLiquidIfNeeded();
}

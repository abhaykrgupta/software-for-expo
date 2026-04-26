'use client';

import { useState, useEffect } from 'react';

/**
 * Fires a brief "spike" signal every `interval` ms.
 * Components use it to briefly scale up / glow key numbers.
 */
export function useAttentionSpike(interval = 12000, duration = 1200): boolean {
  const [spiking, setSpiking] = useState(false);

  useEffect(() => {
    // Initial delay so it doesn't fire on mount
    const initial = setTimeout(() => {
      setSpiking(true);
      setTimeout(() => setSpiking(false), duration);
    }, interval);

    const loop = setInterval(() => {
      setSpiking(true);
      setTimeout(() => setSpiking(false), duration);
    }, interval);

    return () => {
      clearTimeout(initial);
      clearInterval(loop);
    };
  }, [interval, duration]);

  return spiking;
}

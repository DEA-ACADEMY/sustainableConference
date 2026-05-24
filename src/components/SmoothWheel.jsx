import Lenis from 'lenis';
import { useEffect } from 'react';

export function SmoothWheel() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || isTouch) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 0.85,
      easing: (time) => 1 - Math.pow(1 - time, 3),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.82,
    });

    let frame = 0;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

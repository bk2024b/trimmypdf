'use client';

import { useEffect, useState } from 'react';
import { Scissors } from 'lucide-react';

const START_MB = 24.8;
const END_MB = 3.1;
const HOLD_BIG_MS = 700;
const SHRINK_MS = 1400;
const HOLD_SMALL_MS = 1400;
const CYCLE_MS = HOLD_BIG_MS + SHRINK_MS + HOLD_SMALL_MS;

export default function CompressIllustration() {
  const [elapsed, setElapsed] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    if (mq.matches) return;

    let raf: number;
    let start: number | null = null;

    const tick = (t: number) => {
      if (start === null) start = t;
      setElapsed((t - start) % CYCLE_MS);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  let shrinkProgress = 1; // 0 = still big, 1 = fully shrunk
  let isShrinking = false;

  if (!reducedMotion) {
    if (elapsed < HOLD_BIG_MS) {
      shrinkProgress = 0;
    } else if (elapsed < HOLD_BIG_MS + SHRINK_MS) {
      shrinkProgress = (elapsed - HOLD_BIG_MS) / SHRINK_MS;
      isShrinking = true;
    } else {
      shrinkProgress = 1;
    }
  }

  const currentSize = START_MB - (START_MB - END_MB) * shrinkProgress;
  const scale = 1 - shrinkProgress * 0.45;
  const isSmall = shrinkProgress >= 0.999;

  return (
    <div className="mx-auto flex max-w-md flex-col items-center">
      <div className="relative flex h-28 items-center justify-center">
        <svg
          viewBox="0 0 100 130"
          className="h-28"
          style={{
            transform: `scale(${scale})`,
            transition: reducedMotion ? undefined : 'transform 50ms linear',
          }}
          fill="none"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="70" height="120" rx="12" fill="#059669" />
          <path d="M55 5 L75 25 L55 25 Z" fill="#047857" />
        </svg>
        <Scissors
          strokeWidth={2.5}
          className="absolute -left-1 bottom-10 h-6 w-6 text-amber-500 transition-transform duration-200"
          style={{ transform: isShrinking ? 'rotate(-20deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        />
      </div>

      <div className="mt-6 flex items-baseline gap-2 font-mono text-4xl font-bold tabular-nums text-gray-900">
        {currentSize.toFixed(1)}
        <span className="text-lg font-normal text-gray-400">MB</span>
      </div>

      <span
        className={`mt-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 transition-opacity duration-300 ${
          isSmall ? 'opacity-100' : 'opacity-0'
        }`}
      >
        -87% smaller
      </span>
    </div>
  );
}

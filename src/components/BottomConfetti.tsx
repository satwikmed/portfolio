"use client";

import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

const palette = ["#3d5a47", "#d4a72c", "#1a1a1a", "#5c8a6e", "#c4922a"];

function burst() {
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.72, x: 0.5 },
    colors: palette,
    ticks: 260,
    gravity: 0.95,
    scalar: 1.05,
    zIndex: 9999,
    disableForReducedMotion: true,
  });

  window.setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.78 },
      colors: palette,
      zIndex: 9999,
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 0.88, y: 0.7 },
      colors: palette,
      zIndex: 9999,
      disableForReducedMotion: true,
    });
  }, 200);
}

export function BottomConfetti() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || firedRef.current) return;

        firedRef.current = true;
        burst();
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sentinelRef}
      className="pointer-events-none h-24 w-full"
      aria-hidden
    />
  );
}

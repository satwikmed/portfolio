"use client";

import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

const palette = ["#3d5a47", "#d4a72c", "#1a1a1a", "#5c8a6e", "#c4922a"];

export function triggerBottomConfetti() {
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

export function goToContactConfetti(
  event?: { preventDefault: () => void }
) {
  event?.preventDefault();
  const target = document.getElementById("contact");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = "#contact";
  }
  window.setTimeout(() => {
    triggerBottomConfetti();
    window.dispatchEvent(new Event("portfolio:confetti"));
  }, 320);
  if (window.history?.replaceState) {
    window.history.replaceState(null, "", "#contact");
  }
}

export function BottomConfetti() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const fireOnce = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      triggerBottomConfetti();
    };

    const el = sentinelRef.current;
    const contact = document.getElementById("contact");

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        fireOnce();
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (el) observer.observe(el);
    if (contact) observer.observe(contact);

    const onHash = () => {
      if (window.location.hash !== "#contact") return;
      // Wait for scroll to settle, then celebrate.
      window.setTimeout(fireOnce, 280);
    };

    const onForce = () => fireOnce();

    window.addEventListener("hashchange", onHash);
    window.addEventListener("portfolio:confetti", onForce);

    if (window.location.hash === "#contact") {
      window.setTimeout(fireOnce, 280);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("portfolio:confetti", onForce);
    };
  }, []);

  return (
    <div
      ref={sentinelRef}
      className="pointer-events-none h-24 w-full"
      aria-hidden
    />
  );
}

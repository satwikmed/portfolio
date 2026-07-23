"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { siteConfig } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";

export function HireKey() {
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "h") return;
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, select, [contenteditable]")) return;

      setFired(true);
      trackPortfolioEvent("hire_key_pressed");

      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.7 },
        colors: ["#3d5a47", "#d4a72c", "#ebe8e1", "#1a1a1a"],
      });

      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0, y: 0.8 },
          colors: ["#3d5a47", "#d4a72c"],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1, y: 0.8 },
          colors: ["#3d5a47", "#d4a72c"],
        });
      }, 250);

      setTimeout(() => {
        window.location.href = `mailto:${siteConfig.email}?subject=Let's talk — I pressed H`;
      }, 1600);

      setTimeout(() => setFired(false), 4000);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {fired && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-8 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-[#3d5a47]/30 bg-[#faf8f2] px-6 py-3.5 shadow-[0_18px_50px_rgba(26,26,26,0.2)]"
        >
          <span className="font-serif text-[15px] italic text-[#1a1a1a]">
            Excellent decision. Opening your email app…
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

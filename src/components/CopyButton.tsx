"use client";

import { useState, type MouseEvent } from "react";
import confetti from "canvas-confetti";
import { trackPortfolioEvent } from "@/lib/analytics";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    trackPortfolioEvent("copy_blurb");

    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 45,
      spread: 55,
      startVelocity: 22,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: ["#3d5a47", "#d4a72c", "#1a1a1a"],
    });

    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      onClick={onClick}
      className="rounded-full border border-[#1a1a1a]/20 bg-white/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a] transition-all hover:border-[#3d5a47]/50 hover:bg-[#3d5a47]/[0.07]"
    >
      {copied ? "Copied. Go get 'em ✓" : label}
    </button>
  );
}

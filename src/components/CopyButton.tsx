"use client";

import { useState } from "react";
import { trackPortfolioEvent } from "@/lib/analytics";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        trackPortfolioEvent("copy_blurb");
        setTimeout(() => setCopied(false), 2000);
      }}
      className="rounded-full border border-[#1a1a1a]/20 bg-white/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a] transition-all hover:border-[#3d5a47]/50 hover:bg-[#3d5a47]/[0.07]"
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}

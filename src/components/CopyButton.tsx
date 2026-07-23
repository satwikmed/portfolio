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
      className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-all hover:border-white/35 hover:bg-white/[0.09]"
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}

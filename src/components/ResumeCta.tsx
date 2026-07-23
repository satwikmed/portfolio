"use client";

import { siteConfig } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";

export function ResumeCta({ from = "hero" }: { from?: string }) {
  return (
    <a
      href={siteConfig.resume.href}
      download={siteConfig.resume.filename}
      onClick={() => trackPortfolioEvent("resume_download", { from })}
      className="btn-ghost"
    >
      Download resume
      <span aria-hidden>↧</span>
    </a>
  );
}

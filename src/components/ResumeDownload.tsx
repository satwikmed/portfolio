"use client";

import type { ReactNode } from "react";
import { trackPortfolioEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/data";

type ResumeDownloadProps = {
  className?: string;
  children?: ReactNode;
  source?: string;
};

export function ResumeDownload({
  className = "btn-secondary text-sm",
  children = "download me",
  source = "unknown",
}: ResumeDownloadProps) {
  return (
    <a
      href={siteConfig.resume.href}
      download={siteConfig.resume.filename}
      className={className}
      onClick={() => trackPortfolioEvent("resume_download", { source })}
    >
      {children}
    </a>
  );
}

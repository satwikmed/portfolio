"use client";

import type { ReactNode } from "react";
import { trackPortfolioEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/data";

export type ResumeKind = "data" | "ai";

type ResumeDownloadProps = {
  kind: ResumeKind;
  className?: string;
  children?: ReactNode;
  source?: string;
};

export function ResumeDownload({
  kind,
  className = "btn-secondary text-sm",
  children,
  source = "unknown",
}: ResumeDownloadProps) {
  const resume = siteConfig.resumes[kind];

  return (
    <a
      href={resume.href}
      download={resume.filename}
      className={className}
      onClick={() =>
        trackPortfolioEvent("resume_download", { source, kind })
      }
    >
      {children ?? resume.label}
    </a>
  );
}

type ResumeDownloadPairProps = {
  className?: string;
  source?: string;
  dataLabel?: ReactNode;
  aiLabel?: ReactNode;
};

export function ResumeDownloadPair({
  className = "btn-secondary text-sm",
  source = "unknown",
  dataLabel,
  aiLabel,
}: ResumeDownloadPairProps) {
  return (
    <>
      <ResumeDownload kind="data" className={className} source={source}>
        {dataLabel}
      </ResumeDownload>
      <ResumeDownload kind="ai" className={className} source={source}>
        {aiLabel}
      </ResumeDownload>
    </>
  );
}

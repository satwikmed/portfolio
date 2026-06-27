import type { ReactNode } from "react";
import { siteConfig } from "@/lib/data";

type ResumeDownloadProps = {
  className?: string;
  children?: ReactNode;
};

export function ResumeDownload({
  className = "btn-secondary text-sm",
  children = "download me",
}: ResumeDownloadProps) {
  return (
    <a
      href={siteConfig.resume.href}
      download={siteConfig.resume.filename}
      className={className}
    >
      {children}
    </a>
  );
}

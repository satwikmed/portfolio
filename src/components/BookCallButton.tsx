"use client";

import type { ReactNode } from "react";
import { siteConfig } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";

export function bookCallHref() {
  if (siteConfig.calendarUrl) return siteConfig.calendarUrl;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent("15 min intro call")}&body=${encodeURIComponent("Hey Satwik, liked the portfolio. Let's do 15 minutes.")}`;
}

export function BookCallButton({
  className = "btn-primary",
  source,
  children,
}: {
  className?: string;
  source: string;
  children?: ReactNode;
}) {
  const href = bookCallHref();
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
      onClick={() =>
        trackPortfolioEvent("book_call", {
          source,
          mode: siteConfig.calendarUrl ? "calendar" : "mailto_fallback",
        })
      }
    >
      {children ?? siteConfig.calendarLabel}
    </a>
  );
}

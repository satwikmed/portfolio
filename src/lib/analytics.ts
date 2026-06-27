"use client";

import { track } from "@vercel/analytics";

export function trackPortfolioEvent(
  name: string,
  data?: Record<string, string | number | boolean | null | undefined>
) {
  const payload = data
    ? Object.fromEntries(
        Object.entries(data).filter(([, value]) => value !== undefined)
      )
    : undefined;

  track(name, payload);
}

"use client";

import { useEffect, useState, type ReactNode } from "react";

type RedactionRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function RedactionReveal({
  children,
  delay = 0,
  className = "",
}: RedactionRevealProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }
    const timer = window.setTimeout(() => setRevealed(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`redaction-wrap ${className}`}>
      <span className={revealed ? "redaction-text-visible" : "redaction-text-hidden"}>
        {children}
      </span>
      {!revealed && <span className="redaction-bar" aria-hidden />}
    </span>
  );
}

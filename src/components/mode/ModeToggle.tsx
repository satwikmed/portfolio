"use client";

import { useViewMode } from "./ViewModeProvider";

export function ModeToggle() {
  const { mode, setMode } = useViewMode();

  return (
    <div
      className="mode-toggle"
      role="group"
      aria-label="Portfolio view mode"
    >
      <button
        type="button"
        onClick={() => setMode("explorer")}
        className={`mode-toggle-btn ${mode === "explorer" ? "mode-toggle-active" : ""}`}
        aria-pressed={mode === "explorer"}
      >
        Explorer
      </button>
      <button
        type="button"
        onClick={() => setMode("recruiter")}
        className={`mode-toggle-btn ${mode === "recruiter" ? "mode-toggle-active mode-toggle-recruiter" : ""}`}
        aria-pressed={mode === "recruiter"}
      >
        Recruiter
      </button>
      <span className="mode-toggle-hint" aria-hidden>
        press R
      </span>
    </div>
  );
}

"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ViewMode = "explorer" | "recruiter";

const MODE_KEY = "portfolio-view-mode";

type ViewModeContextValue = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
};

const ViewModeContext = createContext<ViewModeContextValue | null>(null);

export function useViewMode() {
  const ctx = useContext(ViewModeContext);
  if (!ctx) throw new Error("useViewMode must be used within ViewModeProvider");
  return ctx;
}

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ViewMode>("explorer");

  useEffect(() => {
    const stored = sessionStorage.getItem(MODE_KEY);
    if (stored === "recruiter" || stored === "explorer") {
      setModeState(stored);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.viewMode = mode;
    sessionStorage.setItem(MODE_KEY, mode);
    window.scrollTo({ top: 0, behavior: mode === "recruiter" ? "auto" : "smooth" });
  }, [mode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "r" || e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      setModeState((m) => (m === "explorer" ? "recruiter" : "explorer"));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const setMode = useCallback((next: ViewMode) => setModeState(next), []);

  const toggleMode = useCallback(
    () => setModeState((m) => (m === "explorer" ? "recruiter" : "explorer")),
    []
  );

  const value = useMemo(
    () => ({ mode, setMode, toggleMode }),
    [mode, setMode, toggleMode]
  );

  return (
    <ViewModeContext.Provider value={value}>{children}</ViewModeContext.Provider>
  );
}

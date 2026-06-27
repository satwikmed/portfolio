"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { InquiryDrawer } from "./InquiryDrawer";

export type InquiryMeta = {
  id: string;
  question: string;
  title: string;
  meta?: string;
  subtitle?: string;
  label: string;
  accent?: string;
  logo?: string;
  drawerEyebrow?: string;
};

export type InquiryItem = InquiryMeta & {
  detail: ReactNode;
};

type InquiryContextValue = {
  activeId: string | null;
  open: (id: string) => void;
  close: () => void;
  items: InquiryItem[];
  registerSection: (key: string, items: InquiryItem[]) => void;
};

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within InquiryProvider");
  return ctx;
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [registryVersion, setRegistryVersion] = useState(0);
  const sectionsRef = useRef<Record<string, InquiryItem[]>>({});

  const items = useMemo(() => {
    void registryVersion;
    return Object.values(sectionsRef.current).flat();
  }, [registryVersion]);

  const registerSection = useCallback((key: string, sectionItems: InquiryItem[]) => {
    if (sectionsRef.current[key] === sectionItems) return;
    sectionsRef.current[key] = sectionItems;
    setRegistryVersion((v) => v + 1);
  }, []);

  const open = useCallback((id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, []);

  const close = useCallback(() => {
    setActiveId(null);
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const match = Object.values(sectionsRef.current)
        .flat()
        .some((item) => item.id === hash);
      if (match) setActiveId(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [registryVersion]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  const activeItem = items.find((item) => item.id === activeId) ?? null;

  const value = useMemo(
    () => ({ activeId, open, close, items, registerSection }),
    [activeId, open, close, items, registerSection]
  );

  return (
    <InquiryContext.Provider value={value}>
      <div
        className={`inquiry-shell ${activeId ? "inquiry-shell-shifted" : ""}`}
      >
        {children}
      </div>
      <InquiryDrawer item={activeItem} onClose={close} />
    </InquiryContext.Provider>
  );
}

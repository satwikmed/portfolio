"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { ResumeDownload } from "./ResumeDownload";
import { ModeToggle } from "./mode/ModeToggle";
import { useViewMode } from "./mode/ViewModeProvider";

export function Navbar() {
  const { mode } = useViewMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mode === "recruiter"
          ? "bg-[#ebe8e1]/90 backdrop-blur-md"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 md:px-10">
        <a href="#" className="text-lg font-semibold tracking-tight">
          {siteConfig.brand}
        </a>
        <div className="flex flex-wrap items-center justify-end gap-4 md:gap-6">
          <ModeToggle />
          {mode === "explorer" && (
            <>
              <a href="#work" className="nav-link hidden sm:inline">
                my work
              </a>
              <ResumeDownload
                className="nav-link hidden border-0 bg-transparent p-0 shadow-none hover:opacity-70 sm:inline"
                source="navbar"
              >
                resume
              </ResumeDownload>
              <a href="#contact" className="nav-link hidden sm:inline">
                get in touch
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

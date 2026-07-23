"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-[72px] md:px-10">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-[#1a1a1a]"
        >
          {siteConfig.brand}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resume.href}
            download={siteConfig.resume.filename}
            onClick={() => trackPortfolioEvent("resume_download", { from: "navbar" })}
            className="rounded-full border border-[#1a1a1a]/20 bg-white/50 px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition-all hover:border-[#3d5a47]/50 hover:bg-[#3d5a47]/[0.07]"
          >
            Resume
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-5 bg-[#1a1a1a] transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-[#1a1a1a] transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#1a1a1a]/10 bg-[#ebe8e1]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-base"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.resume.href}
              download={siteConfig.resume.filename}
              onClick={() => trackPortfolioEvent("resume_download", { from: "mobile-nav" })}
              className="btn-primary justify-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

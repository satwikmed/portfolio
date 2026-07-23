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
          className="font-display text-lg font-semibold tracking-tight text-white"
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
            className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-all hover:border-white/35 hover:bg-white/[0.09]"
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
            className={`h-px w-5 bg-white transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-white transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.07] bg-[#07070c]/95 px-6 py-6 backdrop-blur-xl md:hidden">
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

"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";
import { LocalTime } from "./fx/LocalTime";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Brittany Chiang pattern: scroll-spy active section
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Corentin Bernadou pattern: nav mask that follows hover / active
  const moveMask = (el: HTMLElement | null, duration = 0.35) => {
    const mask = maskRef.current;
    const list = listRef.current;
    if (!mask || !list || !el) return;
    const listRect = list.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    mask.style.width = `${rect.width}px`;
    mask.style.height = `${rect.height}px`;
    mask.style.transform = `translate(${rect.left - listRect.left}px, ${rect.top - listRect.top}px)`;
    mask.style.opacity = "1";
    mask.style.transitionDuration = `${duration}s`;
  };

  useEffect(() => {
    const el = active ? linkRefs.current[active] : null;
    if (el) moveMask(el, 0.45);
  }, [active]);

  return (
    <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-[72px] md:px-10">
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="brand-wave font-display text-lg font-semibold tracking-tight text-[#1a1a1a]"
            aria-label={siteConfig.brand}
          >
            {siteConfig.brand.split("").map((ch, i) => (
              <span
                key={i}
                className="brand-letter"
                style={{ transitionDelay: `${i * 30}ms` }}
                aria-hidden
              >
                {ch}
              </span>
            ))}
          </a>
          <LocalTime className="hidden font-mono text-[10px] uppercase tracking-[0.18em] lg:inline" />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div
            ref={listRef}
            className="nav-mask-list relative flex items-center gap-1"
            onMouseLeave={() => {
              const el = active ? linkRefs.current[active] : null;
              if (el) moveMask(el, 0.4);
              else if (maskRef.current) maskRef.current.style.opacity = "0";
            }}
          >
            <span ref={maskRef} className="nav-mask" aria-hidden />
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                ref={(node) => {
                  linkRefs.current[link.href] = node;
                }}
                className={`nav-link relative z-10 rounded-full px-3.5 py-2 ${
                  active === link.href ? "text-[#1a1a1a]" : ""
                }`}
                onMouseEnter={(e) => moveMask(e.currentTarget, 0.28)}
              >
                {link.label}
              </a>
            ))}
          </div>
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

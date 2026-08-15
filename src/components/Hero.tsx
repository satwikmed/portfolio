"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Marquee } from "./Marquee";
import { RedactionReveal } from "./signal/RedactionReveal";
import { siteConfig } from "@/lib/data";
import { goToContactConfetti } from "./BottomConfetti";
import { BookCallButton } from "./BookCallButton";

function goToConfetti(event: React.MouseEvent<HTMLAnchorElement>) {
  goToContactConfetti(event);
}

export function Hero() {
  const { heroImage } = siteConfig;

  return (
    <section className="hero-signal relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 md:px-10">
      <div className="hypnosis-glow pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[min(90vw,640px)] w-[min(90vw,640px)] rounded-full" aria-hidden />
      <div className="paper-grain pointer-events-none absolute inset-0" aria-hidden />
      <Marquee />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <FadeIn immediate>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#3d5a47]">
              {siteConfig.title} · {siteConfig.location}
            </p>
          </FadeIn>

          <FadeIn delay={0.08} immediate>
            <h1 className="mt-6 font-serif text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[1.08] tracking-tight text-[#1a1a1a]">
              Hi, I&apos;m {siteConfig.name.split(" ")[0]}.
              <br />
              <RedactionReveal delay={900}>
                Eight projects live. Still building.
              </RedactionReveal>
              <br />
              <RedactionReveal delay={1400} className="italic text-[#3d5a47]">
                Unless you&apos;d rather hire me first.
              </RedactionReveal>
            </h1>
          </FadeIn>

          <FadeIn delay={0.18} immediate>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BookCallButton source="hero" />
              <a href="#experience" className="btn-secondary">
                pick a question
              </a>
              <a href="#contact" className="btn-secondary" onClick={goToConfetti}>
                skip to confetti →
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[#5c5c5c] underline decoration-[#d4a72c] decoration-2 underline-offset-4 transition-colors hover:text-[#1a1a1a]"
              >
                GitHub ↗
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.28} immediate>
            <p className="mt-8 max-w-lg font-mono text-[10px] leading-relaxed tracking-wide text-[#5c5c5c]/80">
              Nobody scrolls to the bottom. That&apos;s where the confetti is,
              and my email.{" "}
              <a
                href="#contact"
                onClick={goToConfetti}
                className="text-[#3d5a47] underline decoration-[#3d5a47]/30 underline-offset-4 transition-colors hover:text-[#1a1a1a]"
              >
                Go claim it
              </a>
              . Recruiters: press{" "}
              <kbd className="rounded border border-[#1a1a1a]/15 px-1.5 py-0.5 text-[#3d5a47]">
                R
              </kbd>{" "}
              to snap out of Explorer.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} immediate className="lg:block">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-sm border border-[#1a1a1a]/10 shadow-[6px_6px_0_0_rgba(26,26,26,0.08)] lg:max-w-none">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 42vw"
              quality={95}
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a1a1a]/70 to-transparent px-5 pb-5 pt-16">
              <p className="font-serif text-sm italic leading-snug text-white/95 md:text-base">
                {heroImage.caption}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <a
        href="#contact"
        onClick={goToConfetti}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-2 md:flex"
        aria-label="Skip to contact and confetti"
      >
        <span className="hypnosis-scroll text-[10px] font-medium uppercase tracking-[0.25em] text-[#5c5c5c] [writing-mode:vertical-rl]">
          Confetti ↓
        </span>
      </a>
    </section>
  );
}

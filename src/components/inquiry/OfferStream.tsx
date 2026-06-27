"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { FadeIn } from "../FadeIn";
import { type InquiryItem, useInquiry } from "./InquiryProvider";

type OfferStreamProps = {
  sectionKey: string;
  sectionId: string;
  eyebrow: string;
  heading: React.ReactNode;
  intro?: string;
  items: InquiryItem[];
};

export function OfferStream({
  sectionKey,
  sectionId,
  eyebrow,
  heading,
  intro = "Tell me what you need. I'll show you what I bring.",
  items,
}: OfferStreamProps) {
  const { activeId, open, registerSection } = useInquiry();

  useEffect(() => {
    registerSection(sectionKey, items);
  }, [sectionKey, items, registerSection]);

  return (
    <section id={sectionId} className="border-t border-[#1a1a1a]/10 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#3d5a47]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-[clamp(2.5rem,6vw,4rem)] leading-tight text-[#1a1a1a]">
            {heading}
          </h2>
          <p className="section-intro mt-6 max-w-xl">{intro}</p>
        </FadeIn>

        <ol className="offer-stream mt-14">
          {items.map((item, i) => {
            const isActive = activeId === item.id;
            const isDimmed = activeId !== null && !isActive;

            return (
              <FadeIn key={item.id}>
                <li
                  id={item.id}
                  className={`offer-item scroll-mt-32 ${isActive ? "offer-item-active" : ""} ${isDimmed ? "offer-item-dimmed" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => open(item.id)}
                    className="offer-trigger group"
                    aria-expanded={isActive}
                  >
                    <span className="offer-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="offer-thread" aria-hidden />

                    <span className="offer-prompt-wrap">
                      <span className="offer-label">{item.label}</span>
                      <span className="offer-prompt">{item.question}</span>
                      <span className="offer-teaser">{item.meta}</span>
                      <span className="offer-hint">See what I bring →</span>
                    </span>
                  </button>

                  {isActive && (
                    <motion.span
                      layoutId={`offer-glow-${item.id}`}
                      className="offer-glow"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}
                </li>
              </FadeIn>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { FadeIn } from "../FadeIn";
import { type InquiryItem, useInquiry } from "./InquiryProvider";

type InquiryStreamProps = {
  sectionKey: string;
  sectionId: string;
  eyebrow: string;
  heading: React.ReactNode;
  intro?: string;
  items: InquiryItem[];
};

export function InquiryStream({
  sectionKey,
  sectionId,
  eyebrow,
  heading,
  intro = "Tap a question. The answer opens in the margin.",
  items,
}: InquiryStreamProps) {
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

        <ol className="inquiry-stream mt-14">
          {items.map((item, i) => {
            const isActive = activeId === item.id;
            const isDimmed = activeId !== null && !isActive;

            return (
              <FadeIn key={item.id}>
                <li
                  id={item.id}
                  className={`inquiry-item scroll-mt-32 ${isActive ? "inquiry-item-active" : ""} ${isDimmed ? "inquiry-item-dimmed" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => open(item.id)}
                    className="inquiry-trigger group"
                    aria-expanded={isActive}
                  >
                    <span className="inquiry-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="inquiry-thread" aria-hidden />

                    <span className="inquiry-question-wrap">
                      <span className="inquiry-label">{item.label}</span>
                      <span className="inquiry-question">{item.question}</span>
                      <span className="inquiry-hint">
                        Read answer in the margin →
                      </span>
                    </span>
                  </button>

                  {isActive && (
                    <motion.span
                      layoutId={`inquiry-glow-${item.id}`}
                      className="inquiry-glow"
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

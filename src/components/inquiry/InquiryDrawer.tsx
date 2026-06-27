"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { InquiryItem } from "./InquiryProvider";

type InquiryDrawerProps = {
  item: InquiryItem | null;
  onClose: () => void;
};

export function InquiryDrawer({ item, onClose }: InquiryDrawerProps) {
  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.button
            type="button"
            aria-label="Close answer panel"
            className="inquiry-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-labelledby={`inquiry-title-${item.id}`}
            className="inquiry-drawer"
            initial={{ x: "105%" }}
            animate={{ x: 0 }}
            exit={{ x: "105%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            style={
              item.accent
                ? ({ "--inquiry-accent": item.accent } as CSSProperties)
                : undefined
            }
          >
            <div className="inquiry-drawer-inner">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-[#d4a72c]">
                {item.drawerEyebrow ?? "Answer"}
              </p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#3d5a47]">
                    {item.label}
                  </p>
                  <p className="mt-4 font-serif text-lg italic leading-snug text-[#5c5c5c]">
                    {item.question}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="inquiry-close"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="inquiry-drawer-rule" />

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  {item.meta && (
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#5c5c5c]">
                      {item.meta}
                    </p>
                  )}
                  <h2
                    id={`inquiry-title-${item.id}`}
                    className="mt-2 font-serif text-3xl text-[#1a1a1a]"
                  >
                    {item.title}
                  </h2>
                  {item.subtitle && (
                    <p className="mt-1 font-serif text-base italic text-[#3d5a47]">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {item.logo && (
                  <div className="relative h-10 w-28 shrink-0 opacity-90">
                    <Image
                      src={item.logo}
                      alt=""
                      fill
                      className="object-contain object-right"
                    />
                  </div>
                )}
              </div>

              <div className="inquiry-drawer-body">{item.detail}</div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

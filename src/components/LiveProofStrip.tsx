"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { heroProof } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";

export function LiveProofStrip() {
  return (
    <section className="border-t border-[#1a1a1a]/10 px-6 py-12 md:px-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#3d5a47]">
              Proof · open these
            </p>
            <p className="mt-2 max-w-xl font-serif text-base leading-relaxed text-[#5c5c5c]">
              Three live products. Click any and poke around.
            </p>
          </div>
          <a
            href="#work"
            className="font-mono text-[10px] uppercase tracking-widest text-[#5c5c5c] underline decoration-[#d4a72c] decoration-2 underline-offset-4 transition-colors hover:text-[#1a1a1a]"
          >
            all 8 projects ↓
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-5">
          {heroProof.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onClick={() =>
                trackPortfolioEvent("hero_proof_open", {
                  source: "live_proof_strip",
                  project: item.id,
                })
              }
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[#1a1a1a]/10 bg-[#ebe8e1] shadow-[4px_4px_0_0_rgba(26,26,26,0.08)] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[6px_6px_0_0_rgba(26,26,26,0.12)]">
                <Image
                  src={item.screenshot}
                  alt={`${item.name} live demo`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
                <span className="absolute left-2.5 top-2.5 rounded-sm bg-[#ebe8e1]/92 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#3d5a47]">
                  Live
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-2">
                <h3 className="font-serif text-lg text-[#1a1a1a]">{item.name}</h3>
                <span className="inline-flex items-center gap-0.5 font-mono text-[10px] uppercase tracking-widest text-[#5c5c5c] transition-colors group-hover:text-[#3d5a47]">
                  open
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
              <p className="mt-1 text-sm leading-snug text-[#5c5c5c]">{item.hook}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

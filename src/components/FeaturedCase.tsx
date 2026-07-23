"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";
import { Magnetic } from "./fx/Magnetic";

function hexToRgba(hex: string, alpha: number) {
  const v = hex.replace("#", "");
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function FeaturedCase({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-24, 24]);
  const clipProgress = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const clipPath = useTransform(clipProgress, (v) => {
    if (reduce) return "inset(0% 0% 0% 0%)";
    const inset = (1 - v) * 10;
    return `inset(${inset}% ${inset * 0.7}% ${inset}% ${inset * 0.7}%)`;
  });

  return (
    <article ref={ref} className="featured-case relative mt-14 overflow-hidden rounded-[28px] border border-[#1a1a1a]/10 bg-[#1a1a1a]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y, clipPath }} className="absolute inset-0">
          {project.screenshot && (
            <Image
              src={project.screenshot}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-top opacity-55"
              priority
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(120deg, ${hexToRgba(project.accent, 0.75)} 0%, rgba(26,26,26,0.85) 55%, rgba(26,26,26,0.95) 100%)`,
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-10 grid gap-10 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12 lg:p-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="live-badge border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
              <span className="live-dot" />
              Live case study
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
              Featured
            </span>
          </div>

          <h3 className="font-display mt-6 text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-white">
            {project.name}
          </h3>
          <p
            className="mt-4 max-w-xl font-serif text-xl italic leading-snug md:text-2xl"
            style={{ color: "#f0d78c" }}
          >
            {project.metric}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {project.description}
          </p>

          <ul className="mt-7 space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-white/80 md:text-[15px]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4a72c]" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPortfolioEvent("project_visit", { project: project.id, from: "featured" })}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1a1a1a] transition-transform hover:-translate-y-0.5"
              >
                Open live product
                <span aria-hidden>↗</span>
              </a>
            </Magnetic>
            {project.github && (
              <Magnetic>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPortfolioEvent("project_github", { project: project.id, from: "featured" })}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/10"
                >
                  Source code
                </a>
              </Magnetic>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          {project.screenshot && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              onClick={() => trackPortfolioEvent("project_visit", { project: project.id, from: "featured-shot" })}
            >
              <Image
                src={project.screenshot}
                alt={`${project.name} screenshot`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-[#1a1a1a]/75 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                Visit ↗
              </span>
            </a>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/75"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="font-serif text-sm italic leading-relaxed text-white/45">
            This is the one I&apos;d open first in an interview. Six agents, cited
            sources, RAGAS-scored faithfulness — and it&apos;s running right now.
          </p>
        </div>
      </div>
    </article>
  );
}

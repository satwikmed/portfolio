"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";

function hexToRgba(hex: string, alpha: number) {
  const v = hex.replace("#", "");
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 180, damping: 20, mass: 0.4 });
  const sRotY = useSpring(rotY, { stiffness: 180, damping: 20, mass: 0.4 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    if (!reduce) {
      rotY.set((px - 0.5) * 7);
      rotX.set((0.5 - py) * 7);
    }
  };

  const onMouseLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <div className="tilt-wrap h-full">
      <motion.article
        ref={ref}
        className="glass-card tilt-inner group flex h-full flex-col"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={
          {
            rotateX: sRotX,
            rotateY: sRotY,
            "--card-accent": hexToRgba(project.accent, 0.1),
          } as never
        }
      >
        <div className="project-card-glow" />

        {project.screenshot && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackPortfolioEvent("project_visit", { project: project.id })}
            className={`relative block w-full overflow-hidden border-b border-[#1a1a1a]/10 ${
              large ? "aspect-[16/9]" : "aspect-[16/8]"
            }`}
          >
            <Image
              src={project.screenshot}
              alt={`${project.name} — live product screenshot`}
              fill
              sizes={large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 via-transparent to-transparent" />
            <span className="live-badge absolute left-4 top-4">
              <span className="live-dot" />
              Live
            </span>
            <span className="absolute bottom-3 right-4 translate-y-2 rounded-full bg-[#1a1a1a]/80 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ebe8e1] opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Open live product ↗
            </span>
          </a>
        )}

        <div className="relative z-10 flex flex-1 flex-col p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold text-[#1a1a1a] md:text-2xl">
              {project.name}
            </h3>
            <div className="flex shrink-0 items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8f8c82] transition-colors hover:text-[#1a1a1a]"
                  onClick={() => trackPortfolioEvent("project_github", { project: project.id })}
                >
                  Code
                </a>
              )}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#3d5a47] transition-colors hover:text-[#1a1a1a]"
                onClick={() => trackPortfolioEvent("project_visit", { project: project.id })}
              >
                Visit ↗
              </a>
            </div>
          </div>

          <p
            className="mt-2 font-serif text-[15px] italic leading-snug md:text-base"
            style={{ color: hexToRgba(project.accent, 1) }}
          >
            {project.metric}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#5c5c5c]">
            {project.description}
          </p>

          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#454545]"
              >
                <span
                  className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

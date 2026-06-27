"use client";

import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
import { InquiryStream } from "./inquiry/InquiryStream";
import type { InquiryItem } from "./inquiry/InquiryProvider";
import { projects } from "@/lib/data";

function ProjectDetail({ project }: { project: (typeof projects)[number] }) {
  return (
    <>
      <p>{project.description}</p>

      <ul>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="mt-6 space-y-4">
        <div>
          <p className="drawer-label mb-2 font-mono text-[9px] uppercase tracking-widest text-[#5c5c5c]/70">
            Discipline
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.discipline.map((d) => (
              <span
                key={d}
                className="rounded border border-[#3d5a47]/20 bg-[#3d5a47]/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#3d5a47]"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="drawer-label mb-2 font-mono text-[9px] uppercase tracking-widest text-[#5c5c5c]/70">
            Tools
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded border border-[#1a1a1a]/10 px-2 py-0.5 font-mono text-[10px] text-[#5c5c5c]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2"
        >
          see live project
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </>
  );
}

export function Projects() {
  const items = useMemo<InquiryItem[]>(
    () =>
      projects.map((project) => ({
        id: project.id,
        question: project.question,
        title: project.name,
        meta: "Live on Vercel",
        label: "Project",
        accent: project.accent,
        detail: <ProjectDetail project={project} />,
      })),
    []
  );

  return (
    <InquiryStream
      sectionKey="projects"
      sectionId="work"
      eyebrow="Projects"
      heading={
        <>
          Problems I
          <br />
          <span className="italic">shipped.</span>
        </>
      }
      items={items}
    />
  );
}

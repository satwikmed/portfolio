"use client";

import { useMemo } from "react";
import { InquiryStream } from "./inquiry/InquiryStream";
import type { InquiryItem } from "./inquiry/InquiryProvider";
import { experience } from "@/lib/data";

function ExperienceDetail({ job }: { job: (typeof experience)[number] }) {
  return (
    <>
      {job.context && <p>{job.context}</p>}

      {job.phases && (
        <div className="drawer-phases">
          {job.phases.map((phase) => (
            <div key={phase.title}>
              <p className="drawer-phase-title">{phase.title}</p>
              <p>{phase.description}</p>
            </div>
          ))}
        </div>
      )}

      {job.stack && (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {job.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-[#1a1a1a]/10 bg-[#ebe8e1] px-2.5 py-1 font-mono text-[10px] text-[#5c5c5c]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {job.github && (
        <a
          href={job.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5"
        >
          View code on GitHub ↗
        </a>
      )}
    </>
  );
}

export function Experience() {
  const items = useMemo<InquiryItem[]>(
    () =>
      experience.map((job) => ({
        id: job.id,
        question: job.question,
        title: job.role,
        meta: job.period,
        subtitle: job.product
          ? `${job.company} · ${job.product}`
          : job.company,
        label: "Internship",
        logo: job.logo,
        detail: <ExperienceDetail job={job} />,
      })),
    []
  );

  return (
    <InquiryStream
      sectionKey="experience"
      sectionId="experience"
      eyebrow="Internships"
      heading={
        <>
          Questions I
          <br />
          <span className="italic">answered.</span>
        </>
      }
      items={items}
    />
  );
}

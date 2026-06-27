"use client";

import { experience, projects } from "@/lib/data";
import { useInquiry } from "./inquiry/InquiryProvider";

export function TrustRow() {
  const { open } = useInquiry();

  return (
    <section className="border-y border-[#1a1a1a]/10 px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="section-intro max-w-2xl">
          {experience.length} internships and {projects.length} live products.
          Each one started as a question. Pick one below and read the answer in
          the margin.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.map((job) => (
            <button
              key={job.id}
              type="button"
              onClick={() => open(job.id)}
              className="inquiry-chip"
            >
              {job.company}
            </button>
          ))}
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => open(project.id)}
              className="inquiry-chip inquiry-chip-project"
            >
              {project.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

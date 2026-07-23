import Image from "next/image";
import { experience, education } from "@/lib/data";
import { Reveal } from "./Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="section relative">
      <Reveal>
        <span className="ghost-num" aria-hidden>02</span>
        <span className="section-eyebrow">Experience</span>
        <h2 className="section-title">Where I learned to ship.</h2>
        <p className="section-sub">
          Three internships across bioinformatics, enterprise data, and IoT
          analytics — each one ended with something running in production.
        </p>
      </Reveal>

      <div className="relative mt-14 space-y-10 pl-8 md:pl-12">
        <div className="timeline-rail" />

        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.05}>
            <div className="relative">
              <div className="timeline-node -left-8 md:-left-12" />

              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {job.logo && (
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-[#1a1a1a]/10 bg-white/90 p-1">
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          fill
                          sizes="40px"
                          className="object-contain p-1"
                        />
                      </span>
                    )}
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#1a1a1a] md:text-xl">
                        {job.role}
                      </h3>
                      <p className="text-sm text-[#5c5c5c]">
                        {job.company}
                        {job.product ? ` · ${job.product}` : ""}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8f8c82]">
                    {job.period}
                  </span>
                </div>

                {job.context && (
                  <p className="mt-4 text-sm leading-relaxed text-[#5c5c5c]">
                    {job.context}
                  </p>
                )}

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#454545]"
                    >
                      <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-[#d4a72c]" />
                      {b}
                    </li>
                  ))}
                </ul>

                {job.phases && (
                  <details className="phases mt-6">
                    <summary>The full story</summary>
                    <div className="mt-5 space-y-5 border-l border-[#1a1a1a]/10 pl-5">
                      {job.phases.map((phase) => (
                        <div key={phase.title}>
                          <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3d5a47]">
                            {phase.title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#5c5c5c]">
                            {phase.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </details>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-1.5">
                  {job.stack?.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                  {job.github && (
                    <a
                      href={job.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip chip-accent transition-colors hover:text-[#1a1a1a]"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="relative">
            <div className="timeline-node -left-8 md:-left-12" />
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#1a1a1a]/10 bg-white/40 px-6 py-5">
              <div>
                <h3 className="font-display text-base font-semibold text-[#1a1a1a]">
                  {education.degree}
                </h3>
                <p className="text-sm text-[#5c5c5c]">
                  {education.school} · {education.location}
                </p>
                <p className="mt-1 text-xs text-[#8f8c82]">
                  {education.prior.degree} — {education.prior.school},{" "}
                  {education.prior.period}
                </p>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8f8c82]">
                {education.period}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

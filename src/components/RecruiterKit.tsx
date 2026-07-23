import { recruiterKit, siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";
import { CopyButton } from "./CopyButton";
import { ResumeCta } from "./ResumeCta";

export function RecruiterKit() {
  return (
    <section id="recruiters" className="section relative">
      <div className="divider-glow mb-24" />

      <Reveal>
        <span className="ghost-num" aria-hidden>04</span>
        <span className="section-eyebrow">For Recruiters &amp; Hiring Managers</span>
        <h2 className="section-title">{recruiterKit.heading}</h2>
        <p className="section-sub">
          Everything you need to screen me, without hunting for it. Copy the
          summary below straight into your ATS or a Slack message.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {recruiterKit.facts.map((fact) => (
            <div key={fact.label} className="kit-fact">
              <span className="kit-fact-label">{fact.label}</span>
              <span className="kit-fact-value">{fact.value}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="glass-card mt-6 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#3d5a47]">
              Forwardable summary
            </h3>
            <CopyButton text={recruiterKit.forwardBlurb} label="Copy summary" />
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-[#454545]">
            {recruiterKit.forwardBlurb}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ResumeCta from="recruiter-kit" />
          <a href={`mailto:${siteConfig.email}`} className="btn-ghost">
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}

import { skillGroups } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="section relative">
      <Reveal>
        <span className="ghost-num" aria-hidden>03</span>
        <span className="section-eyebrow">Toolkit</span>
        <h2 className="section-title">What I build with.</h2>
        <p className="section-sub">
          Every tool here appears in at least one of the live projects above —
          nothing listed that I haven&apos;t shipped with.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <StaggerItem key={group.id} className="h-full">
            <div className="glass-card h-full p-6 md:p-7">
              <h3 className="font-display text-lg font-semibold text-[#1a1a1a]">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5c5c5c]">
                {group.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

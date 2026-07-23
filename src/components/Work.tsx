import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { FeaturedCase } from "./FeaturedCase";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export function Work() {
  const [hero, ...restFeatured] = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const grid = [...restFeatured, ...rest];

  return (
    <section id="work" className="section relative">
      <Reveal>
        <span className="ghost-num" aria-hidden>
          01
        </span>
        <span className="section-eyebrow">Deployed Work</span>
        <h2 className="section-title">
          Six products. Six public URLs.
          <br />
          <span className="text-gradient">Click anything.</span>
        </h2>
        <p className="section-sub">
          Every project here is deployed and running right now — not a case study,
          not a Figma file. Open them, break them, ask me how they work. If one
          is ever down, email me and watch how fast it isn&apos;t.
        </p>
      </Reveal>

      {hero && (
        <Reveal delay={0.1}>
          <FeaturedCase project={hero} />
        </Reveal>
      )}

      <StaggerGroup className="mt-5 grid gap-5 md:grid-cols-2">
        {grid.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <ProjectCard project={project} large={project.featured} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

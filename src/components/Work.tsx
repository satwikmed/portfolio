import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section relative">
      <Reveal>
        <span className="ghost-num" aria-hidden>01</span>
        <span className="section-eyebrow">Deployed Work</span>
        <h2 className="section-title">
          Six products. Six public URLs.
          <br />
          <span className="text-gradient">Click anything.</span>
        </h2>
        <p className="section-sub">
          Every project here is deployed and running right now — not a case study,
          not a Figma file. Open them, break them, ask me how they work.
        </p>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2">
        {featured.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <ProjectCard project={project} large />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <StaggerGroup className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

import { siteConfig, stats } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { StatCounter } from "./StatCounter";
import { ResumeCta } from "./ResumeCta";

const marqueeItems = [
  "LangGraph",
  "CrewAI",
  "RAG",
  "Pinecone",
  "XGBoost",
  "SHAP",
  "Python",
  "Next.js",
  "FastAPI",
  "Docker",
  "RAGAS",
  "DuckDB",
  "Survival Analysis",
  "LLM-as-judge",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="aurora" />
      <div className="grid-overlay" />
      <div className="paper-grain" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-32 md:px-10">
        <Reveal>
          <span className="live-badge">
            <span className="live-dot" />
            {siteConfig.availability}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="font-display mt-8 max-w-4xl text-[clamp(2.6rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-tight text-[#1a1a1a]">
            I build AI systems
            <br />
            you can <span className="text-gradient">actually verify.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#5c5c5c] md:text-xl">
            {siteConfig.name} — {siteConfig.title}.{" "}
            {siteConfig.subline}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="btn-primary">
              See the work
              <span aria-hidden>↓</span>
            </a>
            <ResumeCta />
            <a href={`mailto:${siteConfig.email}`} className="btn-ghost">
              Email me
            </a>
          </div>
        </Reveal>

        <StaggerGroup className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass-card px-5 py-5 md:px-6 md:py-6">
                <div className="font-display text-3xl font-semibold text-[#1a1a1a] md:text-4xl">
                  <StatCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5c5c5c]">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-[#8f8c82]">{stat.detail}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div className="marquee-mask absolute bottom-0 left-0 z-10 w-full overflow-hidden border-t border-[#1a1a1a]/10 py-4">
        <div className="animate-marquee flex w-max gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs uppercase tracking-[0.25em] text-[#8f8c82]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

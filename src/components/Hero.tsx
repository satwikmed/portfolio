import { siteConfig, stats } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { StatCounter } from "./StatCounter";
import { ResumeCta } from "./ResumeCta";
import { SplitReveal } from "./fx/SplitReveal";
import { WordCycler } from "./fx/WordCycler";
import { Magnetic } from "./fx/Magnetic";
import { Sparkles } from "./fx/Sparkles";
import { ParallaxY } from "./fx/Parallax";

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

const floatChips = [
  { label: "83% recall @ 80% precision", cls: "float-a", pos: "right-[4%] top-[24%]" },
  { label: "6 agents in production", cls: "float-b", pos: "right-[12%] top-[44%]" },
  { label: "70 unit tests on the judge", cls: "float-a", pos: "right-[2%] top-[60%]" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="aurora" />
      <div className="grid-overlay" />
      <div className="paper-grain" />
      <Sparkles />

      {/* rotating conic ring */}
      <div
        className="hero-ring hidden lg:block"
        style={{ width: 560, height: 560, right: "-6%", top: "14%" }}
        aria-hidden
      />

      {/* floating proof chips */}
      {floatChips.map((chip, i) => (
        <ParallaxY
          key={chip.label}
          speed={-0.12 - i * 0.07}
          className={`absolute ${chip.pos} z-10 hidden lg:block`}
        >
          <div className={chip.cls} aria-hidden>
            <span className="rounded-full border border-[#1a1a1a]/15 bg-white/70 px-4 py-2 font-mono text-[11px] text-[#3d5a47] shadow-[0_10px_30px_rgba(26,26,26,0.08)] backdrop-blur">
              {chip.label}
            </span>
          </div>
        </ParallaxY>
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-28 pt-32 md:px-10">
        <Reveal>
          <span className="live-badge">
            <span className="live-dot" />
            {siteConfig.availability}
          </span>
        </Reveal>

        <h1 className="font-display mt-8 max-w-4xl text-[clamp(2.7rem,7.5vw,5.75rem)] font-semibold leading-[1.02] tracking-tight text-[#1a1a1a]">
          <SplitReveal text="I build AI systems" delay={0.1} as="div" />
          <div className="flex flex-wrap items-baseline gap-x-4">
            <SplitReveal text="you can" delay={0.35} as="span" />
            <span className="squiggle">
              <WordCycler
                words={["verify.", "click.", "break.", "interrogate.", "ship."]}
              />
            </span>
          </div>
        </h1>

        <Reveal delay={0.55}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5c5c5c] md:text-xl">
            {siteConfig.name} — {siteConfig.title}. {siteConfig.subline}
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#work" className="btn-primary">
                See the work
                <span aria-hidden>↓</span>
              </a>
            </Magnetic>
            <Magnetic>
              <ResumeCta />
            </Magnetic>
            <Magnetic>
              <a href={`mailto:${siteConfig.email}`} className="btn-ghost">
                Email me
              </a>
            </Magnetic>
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8f8c82]">
            No fake loading screens. No &quot;coming soon.&quot; In a hurry? Press{" "}
            <kbd className="rounded border border-[#1a1a1a]/20 bg-white/60 px-1.5 py-0.5 text-[#3d5a47]">
              H
            </kbd>{" "}
            to hire me.
          </p>
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

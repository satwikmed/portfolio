import { siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Magnetic } from "./fx/Magnetic";
import { Sparkles } from "./fx/Sparkles";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="aurora" />
      <div className="paper-grain" />
      <Sparkles />

      <div className="section relative z-10 text-center">
        <Reveal>
          <span className="section-eyebrow">Contact</span>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[#1a1a1a]">
            The fastest way to evaluate me is to{" "}
            <span className="text-gradient">talk to me.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#5c5c5c]">
            I reply the same day. Bring a hard problem — I&apos;ll bring a working
            demo.
          </p>
          <p className="mx-auto mt-4 max-w-xl font-serif text-[15px] italic text-[#8f8c82]">
            This is the peace you&apos;ll feel when you hire me. (The button below
            opens an actual email. Revolutionary, I know.)
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a href={`mailto:${siteConfig.email}`} className="btn-primary">
                {siteConfig.email}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn ↗
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub ↗
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>

      {/* giant outlined name */}
      <div className="relative z-10 overflow-hidden pb-2">
        <Reveal>
          <a
            href="#top"
            className="giant-name font-display block whitespace-nowrap text-center font-bold uppercase tracking-tight"
            aria-label="Back to top"
          >
            Satwik
          </a>
        </Reveal>
      </div>

      <footer className="relative z-10 border-t border-[#1a1a1a]/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-[#8f8c82]">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
          </span>
          <span className="font-mono uppercase tracking-[0.2em]">
            All six products live · Press H to hire · No LLMs left uncalibrated
          </span>
        </div>
      </footer>
    </section>
  );
}

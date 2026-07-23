import { siteConfig } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="aurora" />
      <div className="paper-grain" />
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
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary">
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
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="relative z-10 border-t border-[#1a1a1a]/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs text-[#8f8c82]">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
          </span>
          <span className="font-mono uppercase tracking-[0.2em]">
            Built with Next.js · All six products live
          </span>
        </div>
      </footer>
    </section>
  );
}

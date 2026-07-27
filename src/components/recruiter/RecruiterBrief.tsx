"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  education,
  experience,
  projects,
  recruiterMemo,
  siteConfig,
  stats,
} from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";
import { ResumeDownload } from "../ResumeDownload";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function MemoReveal({
  children,
  className = "",
  delay = 0,
  inView = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const motionProps = inView
    ? {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-48px" },
      }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      className={className}
      {...motionProps}
      transition={{ duration: 0.45, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function MemoLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="memo-link group inline-flex items-center gap-1"
    >
      {children}
      {external && (
        <ArrowUpRight
          size={12}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}

function CopyBlurb() {
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  const copy = async () => {
    await navigator.clipboard.writeText(recruiterMemo.forwardBlurb);
    trackPortfolioEvent("copy_blurb");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MemoReveal delay={0.28}>
      <motion.div
        className="memo-blurb"
        whileHover={reduceMotion ? undefined : { y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#3d5a47]">
            Forward this
          </p>
          <motion.button
            type="button"
            onClick={copy}
            className="memo-copy-btn"
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            animate={
              copied && !reduceMotion
                ? { boxShadow: "0 0 0 2px rgba(61, 90, 71, 0.25)" }
                : { boxShadow: "0 0 0 0px rgba(61, 90, 71, 0)" }
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? "copied" : "copy"}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
              >
                {copied ? "Copied" : "Copy blurb"}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
        <p className="memo-blurb-text">{recruiterMemo.forwardBlurb}</p>
      </motion.div>
    </MemoReveal>
  );
}

const metaRows = [
  { label: "To", value: "Hiring team", serif: false },
  { label: "From", value: siteConfig.name, serif: true },
  {
    label: "Re",
    value: `${siteConfig.title} · open to offers`,
    serif: false,
  },
  { label: "Read", value: "Under 1 min", serif: false },
] as const;

export function RecruiterBrief() {
  const [timelineOpen, setTimelineOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <main className="recruiter-brief px-6 pb-24 pt-28 md:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.article
          className="memo-sheet"
          initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.99 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease }}
        >
          <header className="memo-header">
            <motion.p
              className="memo-stamp"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.12, ease }}
            >
              Internal offer memo · 60 sec read
            </motion.p>

            <dl className="memo-meta mt-8 space-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#5c5c5c]">
              {metaRows.map((row, index) => (
                <motion.div
                  key={row.label}
                  className="grid grid-cols-[4.5rem_1fr] gap-x-4 sm:grid-cols-[5.5rem_1fr]"
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.18 + index * 0.06,
                    ease,
                  }}
                >
                  <dt className="text-[#3d5a47]">{row.label}</dt>
                  <dd
                    className={
                      row.serif
                        ? "font-serif text-base normal-case tracking-normal text-[#1a1a1a]"
                        : "normal-case tracking-normal text-[#1a1a1a]"
                    }
                  >
                    {row.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </header>

          <motion.p
            className="memo-preface"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.42, ease }}
          >
            {recruiterMemo.preface}
          </motion.p>

          <CopyBlurb />

          <MemoReveal inView>
            <section className="memo-block">
              <h2 className="memo-label">The case in one line</h2>
              <p className="memo-lead">{recruiterMemo.caseLine}</p>
            </section>
          </MemoReveal>

          <MemoReveal inView delay={0.05}>
            <section className="memo-block">
              <h2 className="memo-label">Why now</h2>
              <p className="memo-body">{recruiterMemo.whyNow}</p>
            </section>
          </MemoReveal>

          <motion.div
            className="memo-stats"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="memo-stat"
                variants={{
                  hidden: { opacity: 0, y: 14, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.4, ease },
                  },
                }}
              >
                <p className="memo-stat-value">{stat.value}</p>
                <p className="memo-stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <MemoReveal inView>
            <section className="memo-block">
              <h2 className="memo-label">Proof (pick any)</h2>
              <motion.ul
                className="memo-proof-list"
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={{ once: true, margin: "-40px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07 } },
                }}
              >
                {recruiterMemo.proof.map((item) => (
                  <motion.li
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.35, ease },
                      },
                    }}
                    whileHover={reduceMotion ? undefined : { x: 4 }}
                  >
                    <MemoLink href={item.url}>
                      <span className="font-medium">{item.name}</span>
                    </MemoLink>
                    <span className="text-[#5c5c5c]">: {item.hook}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </section>
          </MemoReveal>

          <MemoReveal inView>
            <section className="memo-block">
              <h2 className="memo-label">What I need from you</h2>
              <p className="memo-body">
                A reply, a call, or an interview slot. I respond fast.
              </p>
              <motion.div
                className="mt-6 flex flex-wrap gap-3"
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                {[
                  <a
                    key="email"
                    href={`mailto:${siteConfig.email}`}
                    className="btn-primary text-sm"
                    onClick={() =>
                      trackPortfolioEvent("contact_email", { source: "recruiter_memo" })
                    }
                  >
                    email me
                  </a>,
                  <ResumeDownload
                    key="resume-data"
                    kind="data"
                    className="btn-secondary text-sm"
                    source="recruiter_memo"
                  >
                    download resume (Data version)
                  </ResumeDownload>,
                  <ResumeDownload
                    key="resume-ai"
                    kind="ai"
                    className="btn-secondary text-sm"
                    source="recruiter_memo"
                  >
                    download resume (AI version)
                  </ResumeDownload>,
                  <MemoLink key="linkedin" href={siteConfig.linkedin}>
                    LinkedIn
                  </MemoLink>,
                  <MemoLink key="github" href={siteConfig.github}>
                    GitHub
                  </MemoLink>,
                ].map((child) => (
                  <motion.div
                    key={child.key as string}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
                    }}
                  >
                    {child}
                  </motion.div>
                ))}
              </motion.div>
              <p className="memo-footer-meta mt-6 font-mono text-[10px] uppercase tracking-widest text-[#5c5c5c]">
                {siteConfig.email} · {siteConfig.phone} · {siteConfig.location}
              </p>
            </section>
          </MemoReveal>

          <MemoReveal inView>
            <section className="memo-block border-b-0 pb-0">
              <motion.button
                type="button"
                onClick={() => setTimelineOpen((open) => !open)}
                className="memo-expand-btn"
                aria-expanded={timelineOpen}
                whileHover={reduceMotion ? undefined : { scale: 1.005 }}
                whileTap={reduceMotion ? undefined : { scale: 0.995 }}
              >
                {timelineOpen ? "Hide full timeline ↑" : "Full timeline ↓"}
              </motion.button>

              <AnimatePresence initial={false}>
                {timelineOpen && (
                  <motion.div
                    className="memo-timeline mt-8 space-y-10 border-t border-[#1a1a1a]/10 pt-8"
                    initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <div>
                      <h3 className="memo-label">Experience</h3>
                      <div className="mt-5 space-y-7">
                        {experience.map((job, index) => (
                          <motion.article
                            key={job.id}
                            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.35,
                              delay: index * 0.06,
                              ease,
                            }}
                          >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <h4 className="font-serif text-lg text-[#1a1a1a]">
                                {job.role}
                              </h4>
                              <p className="font-mono text-[10px] uppercase tracking-widest text-[#5c5c5c]">
                                {job.period}
                              </p>
                            </div>
                            <p className="mt-1 text-sm font-medium text-[#3d5a47]">
                              {job.company}
                              {job.product ? ` · ${job.product}` : ""}
                            </p>
                            <ul className="mt-2 space-y-1">
                              {job.bullets.map((bullet) => (
                                <li key={bullet} className="memo-timeline-bullet">
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          </motion.article>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="memo-label">Projects (all live)</h3>
                      <div className="mt-5 space-y-5">
                        {projects.map((project, index) => (
                          <motion.article
                            key={project.id}
                            className="memo-timeline-project"
                            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.35,
                              delay: 0.2 + index * 0.06,
                              ease,
                            }}
                          >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <h4 className="font-serif text-lg text-[#1a1a1a]">
                                {project.name}
                              </h4>
                              <div className="flex gap-3 font-mono text-[10px] uppercase tracking-widest">
                                <MemoLink href={project.url}>Live</MemoLink>
                                {project.github && (
                                  <MemoLink href={project.github}>Code</MemoLink>
                                )}
                              </div>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-[#5c5c5c]">
                              {project.description}
                            </p>
                          </motion.article>
                        ))}
                      </div>
                    </div>

                    <p className="font-serif text-sm italic text-[#5c5c5c]">
                      Want the story version? Press{" "}
                      <kbd className="rounded border border-[#1a1a1a]/15 px-1.5 py-0.5 font-mono text-[10px] not-italic text-[#3d5a47]">
                        R
                      </kbd>{" "}
                      or switch to Explorer.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </MemoReveal>
        </motion.article>

        <MemoReveal inView className="mt-8 text-center font-mono text-[10px] uppercase tracking-widest text-[#5c5c5c]/70">
          {education.degree} · {education.school} · {education.period}
        </MemoReveal>
      </div>
    </main>
  );
}

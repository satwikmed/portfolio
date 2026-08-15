"use client";

import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
import { InquiryStream } from "./inquiry/InquiryStream";
import type { InquiryItem } from "./inquiry/InquiryProvider";
import { contactInquiries, siteConfig } from "@/lib/data";
import { trackPortfolioEvent } from "@/lib/analytics";
import { BottomConfetti } from "./BottomConfetti";
import { ResumeDownloadPair } from "./ResumeDownload";
import { BookCallButton } from "./BookCallButton";

function ContactDetail({ blurb }: { blurb: string }) {
  return (
    <>
      <p>{blurb}</p>

      <div className="drawer-actions">
        <BookCallButton
          className="btn-primary inline-block text-sm"
          source="contact_drawer"
        />
        <a
          href={`mailto:${siteConfig.email}`}
          className="btn-secondary inline-block text-sm"
          onClick={() => trackPortfolioEvent("contact_email", { source: "contact_drawer" })}
        >
          email me
        </a>
        <ResumeDownloadPair
          className="btn-secondary inline-block text-sm"
          source="contact_drawer"
          dataLabel="download resume (Data version)"
          aiLabel="download resume (AI version)"
        />
      </div>

      <div className="drawer-links">
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5"
        >
          LinkedIn
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5"
        >
          GitHub
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      <p className="drawer-meta pt-4 font-mono text-[10px] uppercase tracking-widest text-[#5c5c5c]">
        {siteConfig.phone}
      </p>
    </>
  );
}

export function Contact() {
  const year = new Date().getFullYear();

  const items = useMemo<InquiryItem[]>(
    () =>
      contactInquiries.map((entry) => ({
        id: entry.id,
        question: entry.question,
        title: entry.title,
        meta: entry.meta,
        label: "Contact",
        accent: "#d4a72c",
        detail: <ContactDetail blurb={entry.blurb} />,
      })),
    []
  );

  return (
    <footer id="contact">
      <InquiryStream
        sectionKey="contact"
        sectionId="contact"
        eyebrow="Catch me"
        intro="Last stop. Email me, grab the resume, or tap below."
        heading={
          <>
            Want to
            <br />
            <span className="italic">work?</span>
          </>
        }
        items={items}
      />

      <div className="border-t border-[#1a1a1a]/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-[#5c5c5c]">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>{siteConfig.location}</p>
        </div>
        <BottomConfetti />
      </div>
    </footer>
  );
}

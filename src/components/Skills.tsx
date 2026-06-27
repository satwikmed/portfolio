"use client";

import { useMemo } from "react";
import { OfferStream } from "./inquiry/OfferStream";
import type { InquiryItem } from "./inquiry/InquiryProvider";
import { skillOffers } from "@/lib/data";

function SkillDetail({ offer }: { offer: (typeof skillOffers)[number] }) {
  return (
    <>
      <p>{offer.blurb}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {offer.skills.map((skill) => (
          <span
            key={skill}
            className="rounded border border-[#3d5a47]/20 bg-[#3d5a47]/5 px-3 py-1.5 font-mono text-[11px] text-[#3d5a47]"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}

export function Skills() {
  const items = useMemo<InquiryItem[]>(
    () =>
      skillOffers.map((offer) => ({
        id: offer.id,
        question: offer.prompt,
        title: offer.title,
        meta: offer.skills.slice(0, 3).join(" · "),
        label: "You need",
        drawerEyebrow: "I've got",
        accent: "#3d5a47",
        detail: <SkillDetail offer={offer} />,
      })),
    []
  );

  return (
    <OfferStream
      sectionKey="skills"
      sectionId="skills"
      eyebrow="Tech stack"
      intro="Different vibe here. You tell me what you are building. I show you the toolkit."
      heading={
        <>
          What I
          <br />
          <span className="italic">reach for.</span>
        </>
      }
      items={items}
    />
  );
}

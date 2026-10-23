"use client";

import { X } from "lucide-react";

interface BoundaryItem {
  title: string;
  description: string;
}

const boundaryList: BoundaryItem[] = [
  {
    title: "No automatic diagnosis",
    description: "It doesn't read, interpret or explain results.",
  },
  {
    title: "No automatic priority",
    description: "It doesn't decide which results are urgent.",
  },
  {
    title: "No substitute for the treating clinician",
    description: "Clinical judgment stays with the responsible professional.",
  },
  {
    title: "Not an urgent channel",
    description:
      "Urgent findings follow your organization's established pathways.",
  },
];

export default function ClinicalBoundaries() {
  return (
    <section className="w-full bg-[#f8faff] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6d5ae6]" />
          <span>CLINICAL BOUNDARIES</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-10 text-[30px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight text-[#111827] [font-family:var(--font-poppins)]">
          What Zoiko Access doesn&apos;t do.
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {boundaryList.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-start rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
            >
              {/* Pink/Red 'X' Badge */}
              <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg border border-[#fee2e2] bg-[#fef2f2] text-[#ef4444]">
                <X className="h-3.5 w-3.5 stroke-[3]" />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-[15px] sm:text-[16px] font-bold text-slate-900 [font-family:var(--font-poppins)] leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] leading-relaxed text-slate-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

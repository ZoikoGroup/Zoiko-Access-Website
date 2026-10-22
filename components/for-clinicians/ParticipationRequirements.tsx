"use client";

import Image from "next/image";
import { Check } from "lucide-react";

interface RequirementItem {
  title: string;
  description: string;
}

const requirements: RequirementItem[] = [
  {
    title: "Organization validation.",
    description: "The organization is verified.",
  },
  {
    title: "License and role rules.",
    description: "Each professional's role and license scope are confirmed.",
  },
  {
    title: "Legal agreement.",
    description: "Terms are agreed with the organization.",
  },
  {
    title: "Verified integration and privacy.",
    description: "A tested connection and a privacy review are complete.",
  },
];

export default function ParticipationRequirements() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Arched Image Frame */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[360px] sm:h-[420px] w-full max-w-[420px] overflow-hidden rounded-t-[210px] rounded-b-3xl shadow-xl">
              <Image
                src="/for-clinicians/fc16.jpg"
                alt="Cardiology anatomical model with clinical chart"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content & Checklist Cards */}
          <div>
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#6d5ae6]">
              <span className="h-0.5 w-3.5 bg-[#6d5ae6]" />
              <span>Participation</span>
            </div>

            {/* Section Heading */}
            <h2 className="mb-3 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)] leading-tight">
              What qualified participation requires
            </h2>

            {/* Subtitle */}
            <p className="mb-6 max-w-[500px] text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
              Joining is conditional. These prerequisites would apply before any
              clinical use.
            </p>

            {/* Checklist items */}
            <div className="space-y-3">
              {requirements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3.5 rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-xs transition-shadow hover:shadow-sm"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] leading-snug text-slate-600">
                    <strong className="font-bold text-slate-900">
                      {item.title}{" "}
                    </strong>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

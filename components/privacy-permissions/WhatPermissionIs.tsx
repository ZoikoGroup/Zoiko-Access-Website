"use client";

import { Users, Archive, Scale } from "lucide-react";

export default function WhatPermissionIs() {
  const cards = [
    {
      icon: Users,
      title: "Relatives and caregivers",
      description:
        "Being a relative or caregiver does not automatically provide access. Verified representation may be required, and the permitted actions may be limited or time-bound.",
    },
    {
      icon: Archive,
      title: "Source medical records",
      description:
        "A healthcare provider or other authorized institution may remain responsible for its own source medical records. Zoiko Access does not claim to hold a universal medical record.",
    },
    {
      icon: Scale,
      title: "Your rights",
      description:
        "Your applicable rights, request process, response rules and exceptions depend on the responsible organization and the laws in your location.",
    },
  ];

  return (
    <section id="permissions" className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>THE SHORT ANSWER</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-10 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          What a permission is, and is not
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-7 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f3ff] text-[#6d5ae6]">
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="mb-3 text-[18px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[13.5px] lg:text-[14px] leading-[1.65] text-slate-500">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

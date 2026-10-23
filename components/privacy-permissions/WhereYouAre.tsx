"use client";

import { MapPin, Globe, User, Building2, Database } from "lucide-react";

export default function WhereYouAre() {
  const cards = [
    {
      icon: MapPin,
      title: "Care location",
      description: "Helps explain local availability of services.",
    },
    {
      icon: Globe,
      title: "Language",
      description: "Changes the words you read, not your location or your rights.",
    },
    {
      icon: User,
      title: "Account region",
      description: "Where an account is held, which is separate from where you are.",
    },
    {
      icon: Building2,
      title: "Legal jurisdiction",
      description: "Decides which rules apply, as set by the responsible organization.",
    },
    {
      icon: Database,
      title: "Data residency",
      description: "Where data is stored, which a location choice never changes.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ff] py-16 lg:py-20 border-t border-[#eee9ff]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>LOCAL RULES AND CONTEXT</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Where you are does not
          <br className="hidden sm:inline" /> decide what you can see
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[620px] text-[14px] sm:text-[15px] leading-[1.65] text-slate-500">
          Country selection is optional and public. It helps this page explain
          local availability. It never reveals who you are, and it does not give
          or imply consent.
        </p>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 xl:gap-5">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f3ff] text-[#6d5ae6]">
                  <Icon className="h-4 w-4 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="mb-2 text-[15px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[12.5px] leading-[1.6] text-slate-500">
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

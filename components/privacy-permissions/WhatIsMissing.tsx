"use client";

import { MapPin, Lock, TriangleAlert, Flag, Clock } from "lucide-react";

export default function WhatIsMissing() {
  const items = [
    {
      icon: MapPin,
      title: "No regional profile",
      description:
        "No notice is published for the location you chose, and we do not substitute another place's rules.",
    },
    {
      icon: Lock,
      title: "Feature not available here",
      description:
        "You can still read how permissions are designed to work and find the appropriate published privacy contact.",
    },
    {
      icon: TriangleAlert,
      title: "Source unavailable",
      description:
        "We cannot load the published notice right now. The educational guidance stays available.",
    },
    {
      icon: Flag,
      title: "No rights channel yet",
      description:
        "No request channel is published for your location, so no broken button is shown.",
    },
    {
      icon: Clock,
      title: "Account session ended",
      description:
        "A signed-in service would ask you to sign in again. This public page never holds your session.",
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ff] py-16 lg:py-20 border-t border-[#eee9ff]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>WHEN SOMETHING IS MISSING</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          We say exactly what is
          <br className="hidden sm:inline" /> missing
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          We never borrow another country&apos;s rules to fill a gap.
        </p>

        {/* 4 Cards on row 1, 1 on row 2 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f3ff] text-[#6d5ae6]">
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="mb-2 text-[15px] sm:text-[16px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[12.5px] leading-[1.6] text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

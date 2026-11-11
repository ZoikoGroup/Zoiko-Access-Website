import React from "react";
import Image from "next/image";
import Link from "next/link";

export const SafetyEmergenciesHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0e1548] via-[#17216b] to-[#2e389e] text-white pt-20 lg:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[420px] lg:min-h-[460px]">
        {/* Left Half */}
        <div className="lg:col-span-6 relative px-6 sm:px-10 lg:px-16 py-14 lg:py-24 flex flex-col justify-center overflow-hidden">
          {/* Decorative Subtle Rings */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-xl lg:ml-auto lg:mr-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-purple-300/70" />
              <span className="text-purple-200/80 text-[11px] font-semibold tracking-wider uppercase">
                RESOURCES / SAFETY &amp; RIGHTS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] mb-4">
              Safety and
              <br />
              <span className="bg-gradient-to-r from-[#8b7cff] to-[#93c5fd] bg-clip-text text-transparent">
                emergencies
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-8">
              This page explains how to find verified public safety information and where ordinary healthcare navigation stops.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#immediate-danger"
                className="bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
              >
                <span>Find local emergency information</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/navigation-guide"
                className="border border-white/25 bg-white/5 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                Understand healthcare navigation
              </Link>
            </div>
          </div>
        </div>

        {/* Right Half: Full-Bleed Safety Visual */}
        <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full bg-[#090d28]">
          <Image
            src="/resources-safety-and-emergencies/rsae1.png"
            alt="Safety first medical shield icons"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

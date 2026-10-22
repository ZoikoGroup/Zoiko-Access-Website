"use client";

import Image from "next/image";
import Link from "next/link";

export default function ResultsHandoffsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#091752] py-20 lg:py-28 text-white">
      {/* Background Image with Blue Monochrome Wash */}
      <div className="absolute inset-0">
        <Image
          src="/clinicians-results-handoffs/crh7.jpg"
          alt="Clinicians collaborating at medical workstation"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Blue Color Multiply Tint */}
        <div className="absolute inset-0 bg-[#122ea0] mix-blend-multiply opacity-80" />
        {/* Soft horizontal gradient for clear text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071345]/95 via-[#0a1c68]/80 to-[#102a90]/40" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="max-w-[560px]">
          {/* Section Heading */}
          <h2 className="mb-3 text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white [font-family:var(--font-poppins)] leading-tight">
            Clear handoffs start with clear roles.
          </h2>

          {/* Subtitle */}
          <p className="mb-8 max-w-[460px] text-[13.5px] sm:text-[14px] leading-relaxed text-blue-100/90">
            Explore how Zoiko Access approaches coordination for clinicians and
            care organizations.
          </p>

          {/* 3 Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#explore-participation"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-900 shadow-md transition hover:bg-slate-100"
            >
              Explore clinician participation
            </Link>
            <Link
              href="/for-clinicians"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-[#142d88]/60 px-5 py-2.5 text-[13px] font-semibold text-white shadow-xs backdrop-blur-xs transition hover:bg-white/15"
            >
              Clinicians overview
            </Link>
            <Link
              href="#hospitals-clinics"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-[#142d88]/60 px-5 py-2.5 text-[13px] font-semibold text-white shadow-xs backdrop-blur-xs transition hover:bg-white/15"
            >
              Hospitals &amp; clinics
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

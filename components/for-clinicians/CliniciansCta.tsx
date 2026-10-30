"use client";

import Image from "next/image";
import Link from "next/link";

export default function CliniciansCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b1d6e] py-20 lg:py-28 text-white">
      {/* Background Image with Blue Monochrome Wash */}
      <div className="absolute inset-0">
        <Image
          src="/for-clinicians/fc17.jpg"
          alt="Consultation between clinician and patient"
          fill
          sizes="100vw"
          className="object-cover object-[center_20%]"
          priority
        />
        {/* Vibrant Blue Multiply Tint */}
        <div className="absolute inset-0 bg-[#1432a6] mix-blend-multiply opacity-85" />
        {/* Soft horizontal gradient for clear text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08154e]/90 via-[#0b1e72]/70 to-[#112a96]/40" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#c4b5fd]">
            <span className="h-0.5 w-3.5 bg-[#c4b5fd]" />
            <span>Your next step</span>
          </div>

          {/* Section Heading */}
          <h2 className="mb-4 text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-white [font-family:var(--font-poppins)] leading-tight">
            Start with how coordination really works
          </h2>

          {/* Subtitle */}
          <p className="mb-8 max-w-[480px] text-[14px] sm:text-[15px] leading-relaxed text-blue-100/90">
            Read about referral coordination first, then about where clinical
            responsibility sits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              href="/referral-coordination"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 sm:px-6 py-3 text-[13.5px] font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
            >
              Explore referral coordination
            </Link>
            <Link
              href="/clinical-responsibility"
              className="inline-flex items-center justify-center rounded-xl border border-white/50 bg-[#142d88]/60 px-5 sm:px-6 py-3 text-[13.5px] font-semibold text-white shadow-sm backdrop-blur-xs transition hover:bg-white/15"
            >
              Understand clinical responsibility
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

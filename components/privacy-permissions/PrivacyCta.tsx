"use client";

import Link from "next/link";

export default function PrivacyCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#1a1b5c] via-[#2c2b7e] to-[#473dbd] py-20 lg:py-28 text-white text-center">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-indigo-500/15 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[800px] px-6 sm:px-10">
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#c4b5fd] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />
          <span>YOUR NEXT STEP</span>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-[32px] sm:text-[42px] lg:text-[48px] font-bold tracking-tight text-white [font-family:var(--font-poppins)]">
          Start with understanding.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-[560px] text-[14px] sm:text-[15.5px] leading-relaxed text-slate-200">
          Understand permissions, read the notice for your location, then use an
          account or rights channel only where one is genuinely available.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#permissions"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#1e1b4b] shadow-lg transition hover:bg-slate-100"
          >
            Understand permissions
          </Link>
          <Link
            href="#privacy-notice"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Read the privacy notice
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function CliniciansHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-16 lg:py-24">
      {/* Decorative background contour waves */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_70%_20%,rgba(219,234,254,0.6)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(243,232,255,0.4)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      {/* Decorative Dot Matrix Bottom Left */}
      <div
        className="pointer-events-none absolute bottom-12 left-10 hidden sm:grid grid-cols-6 gap-3 opacity-25"
        aria-hidden="true"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-slate-400" />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column Text Content */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
              <span className="h-0.5 w-4 bg-[#6d5ae6]" />
              <span>FOR CLINICIANS / CLINICAL COORDINATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 font-bold tracking-tight text-[36px] sm:text-[46px] lg:text-[54px] leading-[1.08] [font-family:var(--font-poppins)]">
              <span className="text-[#0d1b4a]">Clearer care</span>
              <br />
              <span className="text-[#0d1b4a]">coordination, with</span>
              <br />
              <span className="text-[#0d1b4a]">clinical </span>
              <span className="text-[#3b66f5]">responsibility</span>
              <br />
              <span className="text-[#3b66f5]">where it belongs.</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-[520px] text-[15px] sm:text-[16px] leading-[1.65] text-slate-600">
              Zoiko Access is designed to help qualified clinicians and authorized
              care organizations understand referrals, handoffs and follow-up
              across participating services. Workflows depend on local
              authorization, actual integrations and professional permissions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="#clinical-coordination"
                className="inline-flex items-center justify-center rounded-xl bg-[#3b66f5] px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-blue-600"
              >
                Explore clinical coordination
              </Link>
              <Link
                href="/clinical-responsibility"
                className="inline-flex items-center justify-center rounded-xl border border-[#0d1b4a] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0d1b4a] shadow-sm transition hover:bg-slate-50"
              >
                Understand clinical responsibility
              </Link>
            </div>
          </div>

          {/* Right Column: Arched Image with Floating Illustrative Card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Arched Doctor Image */}
            <div className="relative h-[440px] sm:h-[480px] w-[320px] sm:w-[360px] overflow-hidden rounded-t-[180px] rounded-b-3xl shadow-xl">
              <Image
                src="/for-clinicians/fc1.jpg"
                alt="Doctor reviewing clinical details on mobile phone"
                fill
                priority
                sizes="(min-width: 640px) 360px, 320px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Process Illustration Card */}
            <div className="absolute -bottom-6 left-2 sm:-left-6 w-[270px] sm:w-[290px] rounded-2xl border border-white/80 bg-white/90 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              {/* Node to node flow */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex h-11 w-16 items-center justify-center rounded-lg bg-[#ede9fe]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3b66f5]" />
                </div>

                {/* Dashed connector with arrow */}
                <div className="relative flex flex-1 items-center justify-center">
                  <div className="w-full border-t border-dashed border-slate-400" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 text-xs">
                    ›
                  </span>
                </div>

                <div className="flex h-11 w-16 items-center justify-center rounded-lg bg-[#f5f3ff]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />
                </div>
              </div>

              {/* Status Badges */}
              <div className="flex items-center justify-between gap-1 text-[9px] font-semibold">
                <span className="rounded-full bg-[#dbeafe] px-2 py-0.5 text-[#1d4ed8]">
                  Sent
                </span>
                <span className="rounded-full bg-[#cbd5e1] px-2 py-0.5 text-[#1e293b]">
                  Delivered
                </span>
                <span className="rounded-full bg-[#e0e7ff] px-2 py-0.5 text-[#4338ca]">
                  Acknowledged
                </span>
                <span className="rounded-full border border-dashed border-purple-300 bg-[#fae8ff] px-2 py-0.5 text-[#a21caf]">
                  Accepted?
                </span>
              </div>

              {/* Footer Note */}
              <span className="mt-3 block text-[10px] text-slate-400">
                Illustrative only. Not live data.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

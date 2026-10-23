"use client";

import Link from "next/link";
import { Lock, Check } from "lucide-react";

export default function PrivacyHero() {
  const checkItems = [
    { label: "WHO CAN ACT", text: "A specific, verified person" },
    { label: "WHICH ACTION", text: "One defined action" },
    { label: "WHICH INFORMATION", text: "Only what is named" },
    { label: "WHY", text: "A stated purpose" },
    { label: "UNTIL WHEN", text: "A limit, then review" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#122b9c] via-[#08186b] to-[#020b42] text-white py-16 lg:py-24">
      {/* Decorative background glow / swoosh */}
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-[550px] w-[550px] rounded-full bg-blue-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[600px] bg-gradient-to-t from-blue-600/25 via-indigo-600/10 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Decorative Dot Matrix Top Right */}
      <div
        className="pointer-events-none absolute right-12 top-10 hidden sm:grid grid-cols-5 gap-3.5 opacity-30"
        aria-hidden="true"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-sky-300" />
        ))}
      </div>

      {/* Decorative Dot Matrix Bottom Left */}
      <div
        className="pointer-events-none absolute bottom-8 left-8 hidden sm:grid grid-cols-7 gap-3 opacity-30"
        aria-hidden="true"
      >
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-sky-300" />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-start">
            {/* Tag / Category Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#c4b5fd] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />
              <span>PATIENTS / YOUR INFORMATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 font-bold tracking-tight text-white text-[38px] leading-[1.12] sm:text-[48px] lg:text-[54px] [font-family:var(--font-poppins)]">
              Privacy and
              <br />
              permissions, explained
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-[520px] text-[15px] sm:text-[16px] leading-[1.65] text-[#d4daf0]">
              Understand how privacy choices and authorized permissions can apply
              when navigating healthcare. What information is used, who may act,
              and which choices are available depend on the service, responsible
              organization, and rules in your location.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="#permissions"
                className="inline-flex items-center justify-center rounded-xl bg-[#a855f7] px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#9333ea]"
              >
                Understand permissions
              </Link>
              <Link
                href="#privacy-notice"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-[14px] font-semibold text-[#111827] shadow-sm transition hover:bg-slate-100"
              >
                Read the privacy notice
              </Link>
            </div>
          </div>

          {/* Right Column (Permission Card Visual) */}
          <div className="relative flex flex-col items-center lg:items-end">
            {/* Floating Top Badge */}
            <div className="mb-3 mr-4 self-end rounded-full bg-white px-4 py-1.5 shadow-md">
              <span className="text-[12px] font-medium text-slate-800">
                Location: not consent
              </span>
            </div>

            {/* Main Permission Card */}
            <div className="w-full max-w-[390px] overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center gap-3.5 bg-gradient-to-r from-[#5952d4] to-[#6d5ae6] px-5 py-4 text-white">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                  <Lock className="h-4 w-4 stroke-[2.2]" />
                </div>
                <h3 className="text-[17px] font-bold tracking-tight text-white">
                  A permission
                </h3>
              </div>

              {/* Card List Items */}
              <div className="flex flex-col gap-3 px-6 py-5">
                {checkItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ede9fe] text-[#7c3aed]">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9.5px] font-bold tracking-[0.1em] text-[#6366f1] uppercase">
                        {item.label}
                      </span>
                      <span className="text-[13px] font-semibold text-slate-800 leading-snug">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Notice Box */}
              <div className="mx-5 mb-5 rounded-xl bg-[#f5f3ff] px-4 py-2.5 text-center">
                <p className="text-[11.5px] font-medium text-[#7c3aed]">
                  Not a blanket right to view healthcare information
                </p>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="mt-3 mr-8 self-end rounded-full bg-[#c4b5fd] px-5 py-1.5 shadow-md">
              <span className="text-[12px] font-semibold text-[#1e1b4b]">
                Relatives: no automatic access
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

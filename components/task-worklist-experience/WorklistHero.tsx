"use client";

import Image from "next/image";
import Link from "next/link";

export default function WorklistHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-28">
      {/* Background Graphic Asset */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/task-worklist-experience/twe1.png"
          alt="Abstract textured paper background with organic curves"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Narrative & CTAs */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
              <span className="h-0.5 w-4 bg-[#6d5ae6]" />
              <span>CLINICIANS / TASK &amp; WORKLIST EXPERIENCE</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-[36px] sm:text-[46px] lg:text-[54px] font-bold tracking-tight text-[#111827] [font-family:var(--font-poppins)] leading-[1.08]">
              Clear tasks. <br />
              Accountable <br />
              follow-through.
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-[560px] text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
              Care coordination often involves requests, responses and follow-up
              across multiple teams. Zoiko Access is designed to explain how
              assigned work could be organized with clear owners, evidence-based
              progress and visible next steps where participating organizations
              and approved capabilities support it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Explore it works
              </Link>
              <Link
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-[13.5px] font-semibold text-slate-700 shadow-2xs transition hover:bg-slate-50"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Column: Doctor Frame with Floating Worklist Card */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[440px]">
              {/* Doctor Frame */}
              <div className="relative h-[400px] sm:h-[460px] w-full overflow-hidden rounded-[36px] bg-slate-200/80 shadow-2xl">
                <Image
                  src="/task-worklist-experience/twe2.jpg"
                  alt="Doctor wearing glasses and lab coat"
                  fill
                  priority
                  sizes="(min-width: 1024px) 440px, 100vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Worklist Card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[380px] overflow-hidden rounded-2xl border border-white/90 bg-white shadow-2xl backdrop-blur-md">
                {/* Header */}
                <div className="flex items-center justify-between bg-[#4f46e5] px-4 py-2.5 text-white">
                  <span className="text-[13px] font-bold [font-family:var(--font-poppins)]">
                    Worklist
                  </span>
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9.5px] font-semibold text-white">
                    Illustrative
                  </span>
                </div>

                {/* Rows */}
                <div className="divide-y divide-slate-100 p-2 sm:p-2.5">
                  {/* Row 1 */}
                  <div className="flex items-center justify-between gap-3 p-2">
                    <div className="flex items-center gap-2.5">
                      <span className="h-3.5 w-3.5 rounded-full border border-slate-300 shrink-0" />
                      <div>
                        <h4 className="text-[11.5px] font-bold text-slate-900 leading-snug">
                          Follow-up request
                        </h4>
                        <p className="text-[9.5px] text-slate-400">
                          Care coordination team
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-md bg-[#ede9fe] px-2 py-0.5 text-[9px] font-semibold text-[#7c3aed]">
                      Pending acceptance
                    </span>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-between gap-3 p-2">
                    <div className="flex items-center gap-2.5">
                      <span className="h-3.5 w-3.5 rounded-full border border-slate-300 shrink-0" />
                      <div>
                        <h4 className="text-[11.5px] font-bold text-slate-900 leading-snug">
                          Information request
                        </h4>
                        <p className="text-[9.5px] text-slate-400">
                          Assigned clinician
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-md bg-[#f1f5f9] px-2 py-0.5 text-[9px] font-semibold text-[#475569]">
                      Acknowledged
                    </span>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center justify-between gap-3 p-2">
                    <div className="flex items-center gap-2.5">
                      <span className="h-3.5 w-3.5 rounded-full border border-slate-300 shrink-0" />
                      <div>
                        <h4 className="text-[11.5px] font-bold text-slate-900 leading-snug">
                          Handoff
                        </h4>
                        <p className="text-[9.5px] text-slate-400">
                          Receiving organization
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-md bg-[#2563eb] px-2.5 py-0.5 text-[9px] font-semibold text-white">
                      Escalated
                    </span>
                  </div>
                </div>

                {/* Footer Microcopy */}
                <div className="border-t border-slate-50 bg-slate-50/50 py-1.5 text-center text-[9.5px] text-slate-400">
                  Placeholder rows. No patient data.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

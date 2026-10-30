"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HandoffsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-16 sm:py-20 lg:py-28">
      {/* Background Textured Graphic */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/clinicians-results-handoffs/crh1.png"
          alt="Subtle textured background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headings, narrative & CTAs */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
              <span className="h-0.5 w-4 bg-[#6d5ae6]" />
              <span>FOR CLINICIANS / RESULTS &amp; REVIEW HANDOFFS</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-[36px] sm:text-[44px] lg:text-[52px] font-bold tracking-tight text-[#111827] [font-family:var(--font-poppins)] leading-[1.12]">
              Results and review <br className="hidden sm:inline" />
              are different steps.
            </h1>

            {/* Narrative / Subtitle */}
            <p className="mb-8 max-w-[560px] text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
              A test result may be produced, released, sent and received before
              a responsible clinician reviews it. Zoiko Access is designed to
              support clearer, permissioned handoffs between participating
              healthcare organizations where these capabilities are authorized.
              Interpretation, patient communication and follow-up stay with the
              responsible professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#the-handoff"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3.5 text-[13.5px] font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                <span>Understand the handoff</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/hospitals-clinics"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[13.5px] font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50"
              >
                For clinical organizations
              </Link>
            </div>
          </div>

          {/* Right Column: Arched Doctor Portrait & 4 Floating Workflow Cards */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative">
              {/* Arched Window Frame */}
              <div className="relative h-[440px] sm:h-[500px] w-[310px] sm:w-[360px] overflow-hidden rounded-t-[180px] rounded-b-3xl shadow-2xl">
                <Image
                  src="/clinicians-results-handoffs/crh2.png"
                  alt="Clinicians reviewing results on tablet"
                  fill
                  priority
                  sizes="(min-width: 640px) 360px, 310px"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Badge 1: Clinically reviewed (top right) */}
              <div className="absolute -top-3 -right-4 sm:-right-8 w-[240px] sm:w-[260px] rounded-2xl border border-slate-100 bg-white p-3 sm:p-3.5 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                      Clinically reviewed
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500">
                      A clinician looked and decided
                    </p>
                  </div>
                  <span className="shrink-0 rounded bg-[#ede9fe] px-2 py-0.5 text-[10px] font-medium text-[#7c3aed]">
                    Recipient
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Patient informed & next action (middle right) */}
              <div className="absolute top-28 -right-4 sm:-right-8 w-[250px] sm:w-[270px] rounded-2xl border border-slate-100 bg-white p-3 sm:p-3.5 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                      Patient informed &amp; next action
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500">
                      Communicated and documented
                    </p>
                  </div>
                  <span className="shrink-0 rounded bg-[#ede9fe] px-2 py-0.5 text-[10px] font-medium text-[#7c3aed]">
                    Recipient
                  </span>
                </div>
              </div>

              {/* Floating Badge 3: Result generated (lower left) */}
              <div className="absolute bottom-20 -left-6 sm:-left-12 w-[240px] sm:w-[260px] rounded-2xl border border-slate-100 bg-white p-3 sm:p-3.5 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                      Result generated
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500">
                      The report exists
                    </p>
                  </div>
                  <span className="shrink-0 rounded bg-[#dbeafe] px-2 py-0.5 text-[10px] font-medium text-[#1d4ed8]">
                    Source
                  </span>
                </div>
              </div>

              {/* Floating Badge 4: Received (bottom left) */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 w-[240px] sm:w-[260px] rounded-2xl border border-slate-100 bg-white p-3 sm:p-3.5 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                      Received
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500">
                      A system accepted it
                    </p>
                  </div>
                  <span className="shrink-0 rounded bg-[#f1f5f9] px-2 py-0.5 text-[10px] font-medium text-[#475569]">
                    System
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Plus, ChevronRight, Clock } from "lucide-react";

export default function CorrectionsPolicy() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f2edff] via-[#ebe5fc] to-[#d3c6fa] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, narrative & principles */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
              <span className="h-0.5 w-4 bg-[#6d5ae6]" />
              <span>CORRECTIONS &amp; SUPERSEDED INFORMATION</span>
            </div>

            {/* Section Heading */}
            <h2 className="mb-4 text-[30px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight text-[#111827] [font-family:var(--font-poppins)] leading-tight">
              A correction adds to the <br className="hidden sm:inline" />
              record. It never erases it.
            </h2>

            {/* Subtitle */}
            <p className="mb-8 max-w-[520px] text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
              When a source revises a report, the new version points to the one
              it replaces. Earlier versions and the events tied to them stay
              visible.
            </p>

            {/* Principles List */}
            <div className="space-y-4 max-w-[480px]">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-[#6d5ae6]">
                  <Plus className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 leading-snug">
                    Append, don&apos;t overwrite
                  </h4>
                  <p className="text-[12px] text-slate-600 mt-0.5 leading-snug">
                    Each version keeps its own history of who received and
                    reviewed it.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-[#6d5ae6]">
                  <ChevronRight className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 leading-snug">
                    Review doesn&apos;t carry over
                  </h4>
                  <p className="text-[12px] text-slate-600 mt-0.5 leading-snug">
                    A review of version 1 isn&apos;t a review of version 2.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-[#6d5ae6]">
                  <Clock className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-[13px] sm:text-[13.5px] font-bold text-slate-900 leading-snug">
                    Currentness comes from the source
                  </h4>
                  <p className="text-[12px] text-slate-600 mt-0.5 leading-snug">
                    Only the originating organization can say which version is
                    current.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Version History Diagram */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/80 bg-white/95 p-6 sm:p-7 shadow-sm backdrop-blur-sm">
              <div className="mb-5 border-b border-slate-100 pb-3">
                <h3 className="text-[14px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                  Example version history
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Schematic only. No clinical content.
                </p>
              </div>

              {/* Timeline nodes */}
              <div className="relative pl-1">
                {/* Node 1 */}
                <div className="relative flex items-start gap-3.5 pb-6">
                  {/* Vertical line connecting to next node */}
                  <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-slate-200" />

                  {/* Open circle node */}
                  <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-[#6d5ae6] bg-white mt-0.5" />

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[12.5px] font-bold text-slate-800">
                        Report A · version 1
                      </span>
                      <span className="rounded-full bg-[#fef3c7] px-2 py-0.5 text-[9.5px] font-semibold text-[#b45309]">
                        Superseded
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Released by originating organization. Received and reviewed
                      by recipient.
                    </p>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="relative flex items-start gap-3.5 pb-6">
                  {/* Vertical line connecting to next node */}
                  <div className="absolute left-[7px] top-4 bottom-0 w-[2px] bg-slate-200" />

                  {/* Solid purple circle node */}
                  <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6d5ae6] mt-0.5" />

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[12.5px] font-bold text-slate-900">
                        Report A · version 2
                      </span>
                      <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 text-[9.5px] font-semibold text-[#15803d]">
                        Current per source
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Corrected report. References version 1. Received; review
                      not yet recorded.
                    </p>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="relative flex items-start gap-3.5">
                  {/* Dashed circle node */}
                  <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-slate-400 bg-white mt-0.5" />

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[12.5px] font-bold text-slate-700">
                        Report B · version 1
                      </span>
                      <span className="rounded-full bg-[#f1f5f9] px-2 py-0.5 text-[9.5px] font-semibold text-[#64748b]">
                        Withdrawn
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      Withdrawn by source, with a recorded notice. History
                      retained.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

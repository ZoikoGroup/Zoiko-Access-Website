"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ForLaboratoriesHero: React.FC = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0c207a] via-[#091b68] to-[#041040] py-16 sm:py-20 lg:py-28 text-white">
        {/* Background Graphic Asset */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/for-laboratories/fl1.png"
            alt="Abstract decorative blue curves and pattern background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#08154e]/80 via-transparent to-[#041040]/70"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12 z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Heading, Narrative & CTAs */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
                <span className="text-[#c4b5fd] font-medium text-xs sm:text-sm tracking-wide">
                  Labs &amp; Pharmacies / For laboratories
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.1] mb-6">
                For laboratories
              </h1>

              {/* Narrative */}
              <p className="text-blue-100/85 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-xl mb-8">
                Zoiko Access is designed to help authorized healthcare organizations coordinate information around laboratory orders and results, where approved connections exist. Laboratories retain responsibility for testing, their source records and authorized result release. Receiving care professionals retain responsibility for clinical interpretation and care decisions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="#roles-and-responsibilities"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#7c5cfc] hover:bg-[#6c4aec] text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-purple-900/30"
                >
                  See the coordination model
                </Link>
                <Link
                  href="/labs-pharmacies"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm transition-all shadow-md shadow-black/10"
                >
                  Explore lab &amp; imaging integration
                </Link>
              </div>
            </div>

            {/* Right Column: Bare Trees Nature Image Card with Top-Left Arch Cut */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-square lg:aspect-[5/4] rounded-tl-[100px] sm:rounded-tl-[140px] lg:rounded-tl-[160px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden shadow-2xl border border-white/15 ring-1 ring-white/10 bg-[#091122]">
                <Image
                  src="/for-laboratories/fl2.jpg"
                  alt="Forest of bare trees under a cloudy sky"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Callout Bar */}
      <section className="w-full bg-[#f8faff] py-8 sm:py-10 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <span className="inline-block px-2.5 py-1 rounded-md bg-[#ede9fe] text-[#6d28d9] text-xs font-semibold shrink-0">
              Definition
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Laboratory coordination means making permitted orders, result handoffs and follow-up states clearer between participating organizations. It does not mean that Zoiko Access performs tests, interprets results or provides a universal results record.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

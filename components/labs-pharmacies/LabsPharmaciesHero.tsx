"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const LabsPharmaciesHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0c207a] via-[#091b68] to-[#041040] py-16 sm:py-20 lg:py-28 text-white">
      {/* Background Graphic Asset */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/labs-pharmacies/lp1.png"
          alt="Abstract decorative blue curves and subtle pattern background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Subtle gradient vignette to blend cleanly */}
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
                Diagnostics &amp; pharmacy connections
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-white leading-[1.15] mb-6">
              Connecting diagnostic and pharmacy pathways responsibly.
            </h1>

            {/* Narrative text */}
            <p className="text-blue-100/85 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-xl mb-8">
              Zoiko Access is designed to help people and authorized healthcare organizations understand diagnostic and pharmacy pathways. Where partners, permissions, local rules and released capabilities allow, it may support clearer service discovery, appropriate information handoffs and next steps. The organizations responsible for tests, interpretations, prescriptions and dispensing retain their professional duties.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="#who-this-is-for"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#7c5cfc] hover:bg-[#6c4aec] text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-purple-900/30"
              >
                Explore diagnostic and pharmacy pathways
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm transition-all shadow-md shadow-black/10"
              >
                Learn about partner connectivity
              </Link>
            </div>
          </div>

          {/* Right Column: Globe Map Image Card with Top-Left Arch Cut */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-square lg:aspect-[5/4] rounded-tl-[100px] sm:rounded-tl-[140px] lg:rounded-tl-[160px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden shadow-2xl border border-white/15 ring-1 ring-white/10 bg-[#091122]">
              <Image
                src="/labs-pharmacies/lp2.png"
                alt="Glowing interconnected digital earth network globe"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

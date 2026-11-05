"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const BecomePartnerHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
        {/* Left Column: Angled / Slanted Indigo Gradient Background */}
        <div className="lg:col-span-6 xl:col-span-6 bg-gradient-to-br from-[#0e1654] via-[#1c1874] to-[#45107e] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#c4b5fd] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                PARTNERS &amp; DEVELOPERS / BECOME A PARTNER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight leading-[1.15] text-white mb-6">
              Explore a potential partnership with{" "}
              <span className="text-[#60a5fa]">Zoiko Access</span>
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-8">
              Learn how technology and implementation organizations may explore a governed collaboration.
            </p>

            {/* Button */}
            <div className="mb-8">
              <Link
                href="#partnership-fit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-black/20"
              >
                <span>Explore partnership requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom Partner Intake Card */}
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-purple-200 mb-1">
                PARTNER INTAKE
              </span>
              <p className="text-xs text-white/80 leading-relaxed max-w-md">
                No form is shown and no details are collected until intake is staffed and approved.
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-purple-900/60 border border-purple-400/40 text-purple-200 text-xs font-semibold whitespace-nowrap">
              Not open yet
            </span>
          </div>
        </div>

        {/* Right Column: Handshake Photo with Floating Badge */}
        <div className="lg:col-span-6 xl:col-span-6 relative min-h-[380px] lg:min-h-full bg-slate-900">
          <Image
            src="/partners-become-a-partner/bap1.jpg"
            alt="Business professionals shaking hands in conference room"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />

          {/* Floating White Assessment Badge Card at Bottom Right */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/80">
            <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 mb-1 leading-snug">
              Every partnership is assessed.
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
              Expressing interest is never approval, and no partnership is assumed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

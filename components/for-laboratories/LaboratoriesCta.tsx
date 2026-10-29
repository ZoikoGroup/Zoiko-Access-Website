import React from "react";
import Link from "next/link";

export const LaboratoriesCta: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#081242] via-[#0d1c68] to-[#450e7a] py-20 md:py-28 text-white overflow-hidden text-center">
      {/* Subtle ambient blur lighting */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Discuss laboratory integration.
          </h2>

          {/* Subtitle */}
          <p className="text-blue-100/90 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            An institutional inquiry route opens only when a verified receiving team and workflow are in place. Until then, start with the integration guidance.
          </p>

          {/* 2 Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/ehr-interoperability"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md shadow-black/10"
            >
              Explore lab &amp; imaging integration
            </Link>
            <Link
              href="/clinical-responsibility"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium text-xs sm:text-sm transition-all"
            >
              Safety &amp; escalation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

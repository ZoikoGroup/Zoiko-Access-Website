import React from "react";
import Link from "next/link";

export const LabsPharmaciesCta: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#081242] via-[#0d1c68] to-[#450e7a] py-20 md:py-28 text-white overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Start with understanding.
          </h2>

          {/* Subtitle */}
          <p className="text-blue-100/90 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Browse diagnostic and pharmacy topics before considering any independently authorized service.
          </p>

          {/* 3 Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="#who-this-is-for"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md shadow-black/10"
            >
              Browse diagnostics topics
            </Link>
            <Link
              href="#who-this-is-for"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium text-xs sm:text-sm transition-all"
            >
              Browse pharmacy topics
            </Link>
            <Link
              href="/clinical-partnerships-contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent hover:bg-white/10 border border-white/30 text-white font-medium text-xs sm:text-sm transition-all"
            >
              Partner connectivity
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

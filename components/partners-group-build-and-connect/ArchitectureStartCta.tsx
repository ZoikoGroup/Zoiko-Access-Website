import React from "react";
import Link from "next/link";

export const ArchitectureStartCta: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#0c113d] via-[#1b1a6c] to-[#5b1d99] py-16 md:py-20 text-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="max-w-lg">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Start with the architecture, not a form
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
              Read the principles, contract boundaries and readiness evidence first. Activation always needs separate authorization.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[400px] flex flex-col gap-3 shrink-0">
            <Link
              href="/partners-developer-documentation"
              className="w-full bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md inline-flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore API &amp; interoperability overview</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/partners-integration-security"
              className="w-full border border-white/25 bg-white/5 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl text-center transition-all"
            >
              Read Integration security
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import Link from "next/link";

export const TwoDifferentPathsBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              URGENT VERSUS ROUTINE HELP
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Two very different paths
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            We don&apos;t list symptoms or make clinical decisions. If you&apos;re unsure, treat it as urgent and contact local services.
          </p>
        </div>

        {/* Two-Tone Contiguous Split Banner */}
        <div className="rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Left Half: Urgent or Emergency */}
          <div className="bg-gradient-to-br from-[#6d4aff] to-[#5a3de6] p-7 sm:p-10 text-white flex flex-col justify-center">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-purple-200/80 mb-2">
              URGENT OR EMERGENCY
            </span>
            <h3 className="font-extrabold text-lg sm:text-xl text-white mb-2">
              Contact emergency services
            </h3>
            <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed">
              Immediate danger, or a possible medical emergency. Do not use this website.
            </p>
          </div>

          {/* Right Half: Routine Healthcare Navigation */}
          <div className="bg-[#0d1642] p-7 sm:p-10 text-white flex flex-col justify-center">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-2">
              ROUTINE HEALTHCARE NAVIGATION
            </span>
            <h3 className="font-extrabold text-lg sm:text-xl text-white mb-2">
              Use our guides
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Understanding care options, permissions and next steps when there is no emergency.
            </p>
            <Link
              href="/navigation-guide"
              className="inline-flex items-center gap-1 text-xs font-bold text-white underline underline-offset-4 hover:text-indigo-200 transition-colors w-fit"
            >
              <span>Healthcare navigation guide</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

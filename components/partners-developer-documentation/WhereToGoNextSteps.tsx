import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const WhereToGoNextSteps: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              NEXT STEPS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            Where to go from here.
          </h2>
        </div>

        {/* 3 Next Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Read the overview (Highlighted Indigo Gradient) */}
          <div className="rounded-3xl bg-gradient-to-br from-[#5349e2] via-[#483fd4] to-[#3730a3] p-7 sm:p-8 text-white shadow-xl flex flex-col justify-between min-h-[220px] hover:shadow-2xl transition-shadow">
            <div>
              <span className="inline-block text-[11px] font-semibold text-purple-200 tracking-wide uppercase mb-3">
                published
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                Read the overview
              </h3>
              <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-6">
                Start with the principles behind integration.
              </p>
            </div>

            <div>
              <Link
                href="/ehr-interoperability"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-purple-200 transition-colors"
              >
                <span>API &amp; Interoperability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Understand partnerships (White Card) */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[220px]">
            <div>
              <span className="inline-block text-[11px] font-semibold text-slate-400 tracking-wide uppercase mb-3">
                published
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                Understand partnerships
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                How technology partnerships are assessed.
              </p>
            </div>

            <div>
              <Link
                href="/clinical-partnerships-contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#6366f1] hover:text-[#4f46e5] transition-colors"
              >
                <span>Technology Partners</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Partner enquiry (Muted / Striped Disabled Pattern Card) */}
          <div className="relative rounded-3xl border border-slate-200/80 bg-slate-50/70 p-7 sm:p-8 flex flex-col justify-between min-h-[220px] overflow-hidden">
            {/* Subtle Diagonal Stripes Texture */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 16px)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="inline-block text-[11px] font-semibold text-slate-400 tracking-wide uppercase mb-3">
                not open yet
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 leading-snug">
                Partner enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Opens only once an approved, staffed intake exists.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <span className="text-xs text-slate-400 font-medium italic">
                Inquiry route currently closed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

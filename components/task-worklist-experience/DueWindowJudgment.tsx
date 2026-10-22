import React from "react";
import { Check, X } from "lucide-react";

export const DueWindowJudgment: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs md:text-sm uppercase tracking-wider">
              PRIORITY AND DUE WINDOWS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            A due date is not a clinical judgment
          </h2>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: What a due window is */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                What a due window is
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Timing that the responsible organization may configure, with a &ldquo;Due window source&rdquo; field so you can see where it came from.
              </p>
            </div>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#6d5ae6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-slate-700 text-sm sm:text-base">
                  Set by the responsible organization.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#6d5ae6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-slate-700 text-sm sm:text-base">
                  Shown with its source.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#6d5ae6] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-slate-700 text-sm sm:text-base">
                  Never communicated by color or icon alone.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: What it is not */}
          <div className="rounded-3xl bg-[#3730a3] p-7 sm:p-9 text-white shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                What it is not
              </h3>
              <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed mb-6">
                It does not amount to clinical severity or triage, and the page does not generate urgency.
              </p>
            </div>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-purple-50 text-sm sm:text-base">
                  No machine&ndash;generated clinical urgency.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-purple-50 text-sm sm:text-base">
                  No ranking of patients.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-purple-50 text-sm sm:text-base">
                  Clinical escalation stays with the qualified care team.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { ChevronRight } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Assess",
    description: "Define the use case, and accountable organization.",
  },
  {
    title: "Authorize",
    description: "Agreements, lawful basis and approved scope.",
  },
  {
    title: "Design",
    description: "Map systems, data and versioned interfaces.",
  },
  {
    title: "Validate",
    description: "Test with synthetic data, including failures.",
  },
  {
    title: "Operate",
    description: "Monitor, maintain, and revoke when needed.",
  },
];

export const GettingStartedSteps: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              GETTING STARTED
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            Five steps, in order.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            A proposed sequence. Each step needs the one before it to be complete.
          </p>
        </div>

        {/* 5 Steps Sequence with Chevron Arrows */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 mb-6">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center shrink-0 text-[#a5b4fc]">
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Disclaimer Tag */}
        <div>
          <span className="inline-block px-3 py-1 rounded-md bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-[11px] sm:text-xs font-medium">
            Proposed sequence - not an active onboarding flow
          </span>
        </div>
      </div>
    </section>
  );
};

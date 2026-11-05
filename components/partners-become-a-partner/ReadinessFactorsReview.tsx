import React from "react";
import { Building2, PlusSquare, Globe, Monitor, Star, Shield } from "lucide-react";

interface FactorItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const factors: FactorItem[] = [
  {
    icon: Building2,
    title: "Legal entity",
    description: "A registered organization with accountable contacts.",
  },
  {
    icon: PlusSquare,
    title: "Lawful product role",
    description: "A clear, lawful role for the product or service.",
  },
  {
    icon: Globe,
    title: "Intended jurisdiction",
    description: "Where the collaboration would operate.",
  },
  {
    icon: Monitor,
    title: "System ownership",
    description: "Who owns and operates each system involved.",
  },
  {
    icon: Star,
    title: "Business purpose",
    description: "A specific reason for the collaboration.",
  },
  {
    icon: Shield,
    title: "Security review readiness",
    description: "Ability to provide current security evidence.",
  },
];

export const ReadinessFactorsReview: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              READINESS FACTORS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            What a partnership review would look like.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Factors that inform an evaluation. Meeting them does not make anyone automatically eligible.
          </p>
        </div>

        {/* 6 Factors Grid Card Container */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xs overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {factors.slice(0, 3).map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#6366f1] flex items-center justify-center mb-4 ring-1 ring-purple-100/60">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 leading-snug">
                      {factor.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {factors.slice(3, 6).map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div key={idx} className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#6366f1] flex items-center justify-center mb-4 ring-1 ring-purple-100/60">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 leading-snug">
                      {factor.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pill Badge */}
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full border border-purple-200 bg-purple-50/70 text-[#6366f1] text-[11px] sm:text-xs font-semibold">
            Evaluative factors • not automatic eligibility
          </span>
        </div>
      </div>
    </section>
  );
};

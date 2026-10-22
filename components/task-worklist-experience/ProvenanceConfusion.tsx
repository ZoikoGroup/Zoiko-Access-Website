import React from "react";

interface ConfuseStep {
  number: number;
  title: string;
  subtitle: string;
  isHighlighted?: boolean;
}

const confuseSteps: ConfuseStep[] = [
  {
    number: 1,
    title: "Request sent",
    subtitle: "A task was created",
  },
  {
    number: 2,
    title: "Technical delivery",
    subtitle: "It reached a system",
  },
  {
    number: 3,
    title: "Human acknowledgment",
    subtitle: "A person saw it",
  },
  {
    number: 4,
    title: "Professional review",
    subtitle: "A clinician reviewed",
    isHighlighted: true,
  },
  {
    number: 5,
    title: "Task completion",
    subtitle: "The task was closed",
  },
];

export const ProvenanceConfusion: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f2fe] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs md:text-sm uppercase tracking-wider">
              PROVENANCE AND EVIDENCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Five different things that are easy to confuse
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Sending a request, delivering it, acknowledging it, reviewing it and completing it are separate events.
          </p>
        </div>

        {/* Outer White Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-purple-100">
          <div className="relative">
            {/* Dashed connector line visible on desktop */}
            <div
              className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] -translate-y-1/2 h-[2px] border-t-2 border-dashed border-purple-200 -z-0"
              aria-hidden="true"
            />

            {/* 5 Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
              {confuseSteps.map((step) => {
                if (step.isHighlighted) {
                  return (
                    <div
                      key={step.number}
                      className="bg-[#4338ca] text-white rounded-2xl p-5 shadow-lg flex flex-col justify-between min-h-[140px] transform lg:-translate-y-1"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 text-white font-bold text-xs flex items-center justify-center mb-4">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-purple-200">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={step.number}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm flex flex-col justify-between min-h-[140px]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#f3e8ff] text-[#6d28d9] font-bold text-xs flex items-center justify-center mb-4">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footnote */}
          <div className="text-center mt-8 pt-4">
            <p className="text-xs sm:text-sm text-slate-500">
              Each step is separate. None of them proves the next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

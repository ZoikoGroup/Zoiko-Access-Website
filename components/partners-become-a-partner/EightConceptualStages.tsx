import React from "react";

interface StageItem {
  id: number;
  title: string;
  description: string;
  dotColor: string;
}

const row1Stages: StageItem[] = [
  {
    id: 1,
    title: "Discover",
    description: "Learn what a partnership involves.",
    dotColor: "bg-[#818cf8]",
  },
  {
    id: 2,
    title: "Qualification",
    description: "Check fit and basic readiness.",
    dotColor: "bg-[#818cf8]",
  },
  {
    id: 3,
    title: "Due diligence",
    description: "Verify the organization and its evidence.",
    dotColor: "bg-[#818cf8]",
  },
  {
    id: 4,
    title: "Scope",
    description: "Agree the use case, data and markets.",
    dotColor: "bg-[#818cf8]",
  },
];

const row2Stages: StageItem[] = [
  {
    id: 5,
    title: "Review",
    description: "Ongoing checks; changes or withdrawal if needed.",
    dotColor: "bg-[#38bdf8]",
  },
  {
    id: 6,
    title: "Authorization",
    description: "A formal, recorded go-live decision.",
    dotColor: "bg-[#38bdf8]",
  },
  {
    id: 7,
    title: "Technical validation",
    description: "Test with synthetic data, including failures.",
    dotColor: "bg-[#38bdf8]",
  },
  {
    id: 8,
    title: "Contracting",
    description: "Sign terms, duties and data roles.",
    dotColor: "bg-[#38bdf8]",
  },
];

export const EightConceptualStages: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0c1448] via-[#1a1262] to-[#45107e] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#c4b5fd]" />
            <span className="text-[#c4b5fd] font-medium text-xs sm:text-sm tracking-wider uppercase">
              PARTNER EVALUATION JOURNEY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Eight conceptual stages.
          </h2>
          <p className="text-purple-200/85 text-xs sm:text-sm md:text-base leading-relaxed">
            Any stage can end the evaluation. There is no timeline, pass rate or guarantee.
          </p>
        </div>

        {/* Row 1 Stages */}
        <div className="relative mb-5">
          {/* Connecting dashed line behind dots on desktop */}
          <div
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-purple-300/30 z-0 pointer-events-none"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {row1Stages.map((stage) => (
              <div
                key={stage.id}
                className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 p-6 backdrop-blur-md shadow-md transition-all flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div
                    className={`w-6 h-6 rounded-full ${stage.dotColor} mb-4 shadow-sm`}
                  />
                  <h3 className="font-bold text-base text-white mb-1.5 leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 Stages */}
        <div className="relative mb-8">
          {/* Connecting dashed line behind dots on desktop */}
          <div
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-sky-300/30 z-0 pointer-events-none"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {row2Stages.map((stage) => (
              <div
                key={stage.id}
                className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 p-6 backdrop-blur-md shadow-md transition-all flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div
                    className={`w-6 h-6 rounded-full ${stage.dotColor} mb-4 shadow-sm`}
                  />
                  <h3 className="font-bold text-base text-white mb-1.5 leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-purple-200/80 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <div className="text-xs text-purple-200/70 leading-relaxed">
          Stages are conceptual. This page does not start any of them.
        </div>
      </div>
    </section>
  );
};

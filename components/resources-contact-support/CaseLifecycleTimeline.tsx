import React from "react";

const caseStages = [
  {
    num: "1",
    title: "Received",
    description: "You see a clear receipt with a reference.",
  },
  {
    num: "2",
    title: "Routed",
    description: "The responsible team receives it.",
  },
  {
    num: "3",
    title: "In progress",
    description: "You are told if more information is needed.",
  },
  {
    num: "4",
    title: "Resolved",
    description: 'The outcome is explained. No false "fixed" message.',
  },
];

export const CaseLifecycleTimeline: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b103b] via-[#1a1868] to-[#581c87] text-white py-16 md:py-20 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-purple-300/70" />
            <span className="text-purple-200/80 text-xs font-semibold tracking-wider uppercase">
              AFTER YOU CONTACT US
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            A case lifecycle you can trust
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
            How requests will be handled once support is live. No false success messages.
          </p>
        </div>

        {/* 4-Step Connected Horizontal Timeline */}
        <div className="relative">
          <div
            className="hidden md:block absolute top-4 left-[12.5%] right-[12.5%] h-[1px] bg-white/25"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
            {caseStages.map((stage) => (
              <div key={stage.num} className="flex flex-col items-center">
                <span className="w-8 h-8 rounded-full bg-white text-[#1a1868] font-extrabold text-xs flex items-center justify-center mb-3 shadow-lg">
                  {stage.num}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-white mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-purple-100/80 leading-relaxed max-w-[200px]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footnote */}
        <p className="text-[11px] text-purple-200/75 text-center mt-10">
          Response times are shown only when they are approved and achievable.
        </p>
      </div>
    </section>
  );
};

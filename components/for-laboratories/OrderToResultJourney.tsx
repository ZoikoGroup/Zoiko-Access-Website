import React from "react";

interface JourneyStep {
  title: string;
  description: string;
  authority: string;
}

const journeySteps: JourneyStep[] = [
  {
    title: "Order issued",
    description: "An authorized system issues the order.",
    authority: "Authority: ordering provider",
  },
  {
    title: "Receipt and validation",
    description: "The laboratory receives and validates the order.",
    authority: "Authority: laboratory",
  },
  {
    title: "Specimen and testing",
    description: "Testing is governed by the laboratory.",
    authority: "Authority: laboratory",
  },
  {
    title: "Result released",
    description: "A versioned report is released from the source.",
    authority: "Authority: laboratory",
  },
  {
    title: "Routed",
    description: "The result is sent to an authorized recipient.",
    authority: "Authority: approved integration",
  },
  {
    title: "Acknowledged",
    description: "The recipient endpoint confirms delivery.",
    authority: "Authority: recipient system",
  },
  {
    title: "Clinical review confirmed",
    description: "Review is confirmed separately by a professional.",
    authority: "Authority: receiving clinician",
  },
];

export const OrderToResultJourney: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0c1348] via-[#161266] to-[#60147e] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Ambient background glow */}
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
            <span className="w-2 h-2 rounded-full bg-[#c4b5fd]" />
            <span className="text-[#c4b5fd] font-medium text-xs sm:text-sm tracking-wide">
              Order-to-result journey
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-3">
            Seven steps, each with its own source of truth.
          </h2>
          <p className="text-purple-200/85 text-xs sm:text-sm md:text-base leading-relaxed">
            Every step names who starts it, who is authoritative, and what happens when it fails or is unknown.
          </p>
        </div>

        {/* 7 Cards Grid: 4 on Row 1, 3 on Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 p-5 backdrop-blur-sm shadow-md transition-all duration-200 flex flex-col justify-between min-h-[170px]"
            >
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-purple-200/85 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-xs font-semibold text-[#c4b5fd]">
                  {step.authority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

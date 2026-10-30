import React from "react";

const stepsData = [
  {
    title: "Understand a local pharmacy pathway",
    description: "Learn how pharmacy services work where you are.",
    who: "Who: you",
  },
  {
    title: "Instruction issued",
    description:
      "An authorized clinical party issues an appropriate instruction.",
    who: "Who: authorized clinical party",
  },
  {
    title: "Pharmacy assesses",
    description: "A licensed pharmacy determines the permissible next step.",
    who: "Who: licensed pharmacy",
  },
  {
    title: "Outcome confirmed",
    description: "The responsible provider confirms outcome and follow-up.",
    who: "Who: responsible provider",
  },
];

export default function FourStepsCoordination() {
  return (
    <section id="how-coordination-works" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#EBE9FB] to-white py-16 font-sans">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#7C3AED]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
              Four-step coordination concept
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Four steps, each with its own responsible party.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            This is not a live status ticker. No step happens
            automatically.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-7"
            >
              <div>
                <h3 className="text-[18px] font-bold leading-[1.3] tracking-[-0.02em] text-[#1E1B4B]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#475569]">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                <span className="text-[13px] font-semibold text-[#2563EB]">
                  {step.who}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

interface StepNode {
  title: string;
  description: string;
}

const stepsData: StepNode[] = [
  {
    title: "Define purpose",
    description: "Why this data, for whom",
  },
  {
    title: "Authorize",
    description: "Permission is checked",
  },
  {
    title: "Send",
    description: "The source transmits",
  },
  {
    title: "Receive",
    description: "The receiver stores it",
  },
  {
    title: "Review",
    description: "A person looks at it",
  },
  {
    title: "Act",
    description: "A decision is made",
  },
];

export default function HowInformationMovesSequence() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#F1F0FE] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
              // exchange_sequence &middot; illustrative
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            How information moves.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Six steps. The first three are about permission and transport. The
            last three need a responsible person.
          </p>
        </div>

        {/* 6-Step Connected Flow Line */}
        <div className="relative mt-16">
          {/* Dashed Connecting Line */}
          <div
            className="absolute top-[28px] left-[calc(100%/12)] right-[calc(100%/12)] hidden h-[2px] border-t-2 border-dashed border-[#7C3AED]/50 md:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 md:gap-4">
            {stepsData.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center"
              >
                {/* Purple Rounded Node Square */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7657E8] shadow-md shadow-[#7657E8]/20">
                  <div className="h-3 w-3 rounded-full bg-white/40" />
                </div>

                {/* Node Title & Description */}
                <h3 className="mt-4 text-[16px] font-bold tracking-tight text-[#0E1646]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.4] text-[#64748B]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual-State Responsibility Banner */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Portion: Transport Only (Light Gray/Blue) */}
            <div className="flex items-center bg-[#F6F9FC] px-6 py-4.5 md:col-span-6 md:px-8">
              <p className="text-[14px] font-medium text-[#475569]">
                Sending and receiving prove transport only.
              </p>
            </div>

            {/* Right Portion: Human Review Responsibility (Solid Purple) */}
            <div className="flex items-center bg-[#7657E8] px-6 py-4.5 text-white md:col-span-6 md:px-8">
              <p className="text-[14px] font-semibold tracking-wide">
                Responsibility is accepted only when a person reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

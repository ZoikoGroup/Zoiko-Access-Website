"use client";

import Link from "next/link";

interface StepItem {
  number: number;
  title: string;
  description: string;
  roleBadge: string;
  badgeType: "blue" | "gray" | "purple";
  doesntMean: string;
}

const stepsData: StepItem[] = [
  {
    number: 1,
    title: "Result generated",
    description: "A lab, imaging service or care team produces the report.",
    roleBadge: "Originating organization",
    badgeType: "blue",
    doesntMean: "It has been released to anyone.",
  },
  {
    number: 2,
    title: "Approved release",
    description: "The source decides the report can go out under its rules.",
    roleBadge: "Originating organization",
    badgeType: "blue",
    doesntMean: "It has been sent yet.",
  },
  {
    number: 3,
    title: "Transmitted",
    description: "The report is sent toward an authorized recipient.",
    roleBadge: "Sending system",
    badgeType: "gray",
    doesntMean: "It arrived.",
  },
  {
    number: 4,
    title: "Received",
    description: "The recipient's system confirms it accepted the report.",
    roleBadge: "Receiving system",
    badgeType: "gray",
    doesntMean: "Anyone has reviewed it.",
  },
  {
    number: 5,
    title: "Clinically reviewed",
    description: "A responsible clinician reviews it and records that review.",
    roleBadge: "Receiving clinician",
    badgeType: "purple",
    doesntMean: "The patient has been told.",
  },
  {
    number: 6,
    title: "Next action documented",
    description: "Follow-up is decided, assigned and recorded locally.",
    roleBadge: "Receiving organization",
    badgeType: "purple",
    doesntMean: "The action is complete.",
  },
];

const exceptionStatuses = [
  "Unavailable",
  "Delivery failed",
  "Not acknowledged",
  "Corrected",
  "Unknown",
];

export default function SixStepsWorkflow() {
  return (
    <section id="the-handoff" className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>THE HANDOFF, STEP BY STEP</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)] leading-tight">
          Six steps. Each one has an owner <br className="hidden sm:inline" />
          and a limit on what it proves.
        </h2>

        {/* Subtitle */}
        <p className="mb-12 max-w-[680px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Steps can pause, fail or happen out of order. A later step being
          recorded never fills in an earlier one that wasn&apos;t.
        </p>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line behind circles on large screens */}
          <div
            className="absolute top-[35px] left-[5%] right-[5%] hidden h-[2px] bg-[#6366f1]/30 lg:block z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 relative z-10">
            {stepsData.map((step) => {
              let badgeClasses = "";
              if (step.badgeType === "blue") {
                badgeClasses = "bg-[#dbeafe] text-[#1d4ed8]";
              } else if (step.badgeType === "gray") {
                badgeClasses = "bg-[#f1f5f9] text-[#475569]";
              } else {
                badgeClasses = "bg-[#ede9fe] text-[#7c3aed]";
              }

              return (
                <div
                  key={step.number}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-xs transition-shadow hover:shadow-md"
                >
                  <div>
                    {/* Step Number Circle */}
                    <div className="mb-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#0d2274] text-white text-[12px] font-bold shadow-xs">
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <h3 className="mb-1.5 text-[14.5px] font-bold text-slate-900 [font-family:var(--font-poppins)] leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 text-[12px] leading-relaxed text-slate-600">
                      {step.description}
                    </p>

                    {/* Role / Ownership Badge */}
                    <div className="mb-4">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-[9.5px] font-semibold tracking-wide ${badgeClasses}`}
                      >
                        {step.roleBadge}
                      </span>
                    </div>
                  </div>

                  {/* Doesn't Mean Box */}
                  <div className="border-t border-dotted border-slate-200 pt-3">
                    <span className="block text-[9.5px] font-bold tracking-wider text-amber-700 uppercase mb-1">
                      DOESN&apos;T MEAN
                    </span>
                    <p className="text-[11px] leading-snug text-amber-900/80">
                      {step.doesntMean}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Exception Tags Row */}
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] text-slate-500">
          <span className="mr-1">Any step can also end in:</span>
          {exceptionStatuses.map((status, index) => (
            <span
              key={index}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-700 shadow-2xs"
            >
              {status}
            </span>
          ))}
          <Link
            href="#exceptions"
            className="ml-1 text-[12px] font-semibold text-[#4338ca] underline underline-offset-2 hover:text-[#3730a3] transition-colors"
          >
            See how exceptions work
          </Link>
        </div>
      </div>
    </section>
  );
}

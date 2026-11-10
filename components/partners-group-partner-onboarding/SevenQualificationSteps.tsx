import React from "react";

interface QualificationStep {
  id: number;
  title: string;
  description: string;
  owner: string;
  isLeft: boolean;
  isFinal?: boolean;
}

const steps: QualificationStep[] = [
  {
    id: 1,
    title: "Prospective organization",
    description:
      "An organization reads the informational pages and decides whether to explore.",
    owner: "Owner: Organization",
    isLeft: true,
  },
  {
    id: 2,
    title: "Fit review",
    description: "Purpose and fit are checked against published principles.",
    owner: "Owner: Partnerships",
    isLeft: false,
  },
  {
    id: 3,
    title: "Scope definition",
    description: "Data, markets, roles and services are written down.",
    owner: "Owner: Partnerships · Product",
    isLeft: true,
  },
  {
    id: 4,
    title: "Diligence",
    description:
      "Security, privacy, legal and clinical-safety evidence is reviewed.",
    owner: "Owner: Security · Privacy · Legal",
    isLeft: false,
  },
  {
    id: 5,
    title: "Authorization decision",
    description: 'Named owners record a decision. A "no" is a valid outcome.',
    owner: "Owner: Accountable owners",
    isLeft: true,
  },
  {
    id: 6,
    title: "Controlled pilot",
    description: "A bounded, monitored test. Never automatic access.",
    owner: "Owner: Sponsoring institution",
    isLeft: false,
  },
  {
    id: 7,
    title: "Final release",
    description: "Released only for a specific version, market and scope.",
    owner: "Owner: Release board",
    isLeft: true,
    isFinal: true,
  },
];

export const SevenQualificationSteps: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-24 text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            03 · Qualification steps
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            Seven steps,{" "}
            <span className="bg-[#ede9fe] px-2 py-0.5 rounded-md">
              each with an owner
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Moving forward at one step never implies approval at the next.
          </p>
        </div>

        {/* Alternating Timeline */}
        <div className="relative">
          {/* Desktop Vertical Spine */}
          <div
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-[#6d4aff]/35"
            aria-hidden="true"
          />

          {/* Mobile Vertical Spine */}
          <div
            className="md:hidden absolute left-4 top-4 bottom-4 w-[2px] bg-[#6d4aff]/35"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Desktop Left Slot */}
                <div className="hidden md:flex w-1/2 justify-end pr-8">
                  {step.isLeft ? (
                    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm text-left hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                        {step.owner}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full" />
                  )}
                </div>

                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 font-bold text-xs flex items-center justify-center shadow-sm ${
                      step.isFinal
                        ? "bg-[#6d4aff] border-[#6d4aff] text-white"
                        : "bg-white border-[#6d4aff] text-[#6d4aff]"
                    }`}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Desktop Right Slot */}
                <div className="hidden md:flex w-1/2 justify-start pl-8">
                  {!step.isLeft ? (
                    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm text-left hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                        {step.owner}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full" />
                  )}
                </div>

                {/* Mobile Card Slot */}
                <div className="md:hidden w-full pl-12">
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm text-left">
                    <h3 className="font-bold text-sm text-[#0f172a] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2.5">
                      {step.description}
                    </p>
                    <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                      {step.owner}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

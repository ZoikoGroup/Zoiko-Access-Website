import React from "react";

interface Milestone {
  id: number;
  title: string;
  description: string;
  owner: string;
  isLeft: boolean;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Issued",
    description: "The prescriber creates the prescription.",
    owner: "Owner: prescriber",
    isLeft: true,
  },
  {
    id: 2,
    title: "Routed",
    description: "Sent toward a chosen pharmacy.",
    owner: "Owner: sending system",
    isLeft: false,
  },
  {
    id: 3,
    title: "Transport acknowledged",
    description: "The network confirms delivery. Not a review.",
    owner: "Owner: transport",
    isLeft: true,
  },
  {
    id: 4,
    title: "Received",
    description: "The pharmacy system stores it.",
    owner: "Owner: pharmacy system",
    isLeft: false,
  },
  {
    id: 5,
    title: "Pharmacist validation",
    description: "A licensed pharmacist checks it.",
    owner: "Owner: pharmacist",
    isLeft: true,
  },
  {
    id: 6,
    title: "Decision",
    description: "The pharmacist decides whether to dispense.",
    owner: "Owner: pharmacist",
    isLeft: false,
  },
  {
    id: 7,
    title: "Supplied or not supplied",
    description: "The outcome, recorded by the pharmacy.",
    owner: "Owner: pharmacy",
    isLeft: true,
  },
];

export const PrescriptionLifecycleMilestones: React.FC = () => {
  return (
    <section className="w-full bg-[#fcfaff] py-16 md:py-24 text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              PRESCRIPTION LIFECYCLE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
            Seven milestones, each with its own
            <br className="hidden sm:inline" />
            owner.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A prescription passes through separate steps. Only the pharmacist&apos;s validation and decision lead to supply.
          </p>
        </div>

        {/* Alternating Timeline */}
        <div className="relative">
          {/* Vertical central purple spine */}
          <div
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-[#6366f1]/40"
            aria-hidden="true"
          />

          {/* Mobile vertical line */}
          <div
            className="md:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-[#6366f1]/40"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-10">
            {milestones.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Desktop Left Side Card */}
                <div className="hidden md:flex w-1/2 justify-end pr-8">
                  {item.isLeft ? (
                    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm text-right hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                        {item.description}
                      </p>
                      <span className="inline-block text-[11px] font-semibold text-[#6366f1]">
                        {item.owner}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full" />
                  )}
                </div>

                {/* Central Number Node */}
                <div className="absolute left-1 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full border-2 border-[#6366f1] bg-white text-[#6366f1] font-bold text-xs flex items-center justify-center shadow-sm">
                    {item.id}
                  </div>
                </div>

                {/* Desktop Right Side Card */}
                <div className="hidden md:flex w-1/2 justify-start pl-8">
                  {!item.isLeft ? (
                    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm text-left hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                        {item.description}
                      </p>
                      <span className="inline-block text-[11px] font-semibold text-[#6366f1]">
                        {item.owner}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full" />
                  )}
                </div>

                {/* Mobile Card Layout */}
                <div className="md:hidden w-full pl-14">
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm text-left">
                    <h3 className="font-bold text-sm text-[#0f172a] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-block text-[11px] font-semibold text-[#6366f1]">
                      {item.owner}
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

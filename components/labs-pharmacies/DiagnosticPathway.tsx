import React from "react";

interface PathwayStep {
  title: string;
  description: string;
  owner: string;
}

const diagnosticSteps: PathwayStep[] = [
  {
    title: "Ordered",
    description: "An authorized professional orders a test or imaging service.",
    owner: "Owner: treating clinician",
  },
  {
    title: "Authorized service",
    description: "A participating collection or imaging service carries it out.",
    owner: "Owner: diagnostic provider",
  },
  {
    title: "Source report",
    description: "The laboratory or radiology organization issues the report.",
    owner: "Owner: source organization",
  },
  {
    title: "Delivered",
    description: "Permitted information is sent to authorized recipients.",
    owner: "Owner: coordination layer",
  },
  {
    title: "Reviewed and acted on",
    description: "Review and next steps are confirmed independently.",
    owner: "Owner: responsible professional",
  },
];

export const DiagnosticPathway: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Diagnostic pathway
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            Five steps, each with a named owner.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            A technical delivery acknowledgment never implies clinical review.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {diagnosticSteps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[210px]"
            >
              <div>
                <h3 className="font-bold text-base text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-semibold text-[#4f46e5]">
                  {step.owner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

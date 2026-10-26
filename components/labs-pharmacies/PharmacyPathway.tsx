import React from "react";

interface PharmacyStep {
  title: string;
  description: string;
  owner: string;
}

const pharmacySteps: PharmacyStep[] = [
  {
    title: "Valid authorization",
    description: "A prescriber issues an authorization under local rules.",
    owner: "Owner: prescriber",
  },
  {
    title: "Pharmacy validation",
    description: "A licensed pharmacist checks the authorization.",
    owner: "Owner: licensed pharmacy",
  },
  {
    title: "Supply decision",
    description: "The pharmacy decides what it may supply locally.",
    owner: "Owner: licensed pharmacy",
  },
  {
    title: "Patient handoff",
    description: "Guidance is given to the patient by the responsible party.",
    owner: "Owner: pharmacy",
  },
];

export const PharmacyPathway: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Pharmacy pathway
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            A locally governed chain, not a checkout.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            No pricing, stock quantities, automatic substitution or medicine recommendations appear here.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pharmacySteps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
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

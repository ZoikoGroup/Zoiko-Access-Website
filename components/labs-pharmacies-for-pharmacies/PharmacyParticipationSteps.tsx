import React from "react";
import Image from "next/image";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Inquiry",
    description: "Informational interest only.",
  },
  {
    number: "02",
    title: "License checks",
    description: "Verified for each market.",
  },
  {
    number: "03",
    title: "Contract & onboarding",
    description: "Separate commercial steps.",
  },
];

export const PharmacyParticipationSteps: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#faf8ff] via-[#f7f5ff] to-[#f0edff] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Yellow flat lay image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-square bg-amber-100">
              <Image
                src="/labs-pharmacies-for-pharmacies/lpfp9.jpg"
                alt="Medication blister packs, mask and syringe on yellow background"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Right Column: Steps & Explanation */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                PHARMACY PARTICIPATION
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
              Interest is not enrollment.
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-8 max-w-xl">
              How a pharmacy could take part. Each step is separate, and none is automatic.
            </p>

            {/* 3 Sequential Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#3b82f6] mb-2 tracking-tight">
                    {step.number}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Amber Badge */}
            <div>
              <span className="inline-block bg-[#fef3c7]/90 text-[#b45309] border border-[#fde68a] text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                Pharmacy partnership inquiry: not open yet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

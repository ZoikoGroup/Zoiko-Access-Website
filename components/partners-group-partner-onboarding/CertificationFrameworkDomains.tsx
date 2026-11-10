import React from "react";
import Image from "next/image";

const domains = [
  {
    num: "01",
    title: "Interfaces",
    description: "Contract, versions and error handling.",
    reviewer: "Reviewed by: Developer Experience",
    variant: "navy",
  },
  {
    num: "02",
    title: "Security",
    description: "Controls, testing and incident handling.",
    reviewer: "Reviewed by: Security",
    variant: "violet",
  },
  {
    num: "03",
    title: "Privacy",
    description: "Lawful basis, minimum necessary, retention.",
    reviewer: "Reviewed by: Privacy",
    variant: "navy",
  },
  {
    num: "04",
    title: "Clinical responsibility",
    description: "Who decides what, clinically.",
    reviewer: "Reviewed by: Clinical Safety",
    variant: "violet",
  },
  {
    num: "05",
    title: "Operations",
    description: "Monitoring, support and rollback.",
    reviewer: "Reviewed by: Engineering",
    variant: "navy",
  },
  {
    num: "06",
    title: "Accessibility",
    description: "Inclusive, tested experiences.",
    reviewer: "Reviewed by: Accessibility",
    variant: "violet",
  },
];

export const CertificationFrameworkDomains: React.FC = () => {
  return (
    <section className="w-full bg-[#fbfaff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src="/partners-group-partner-onboarding/pgpo6.jpg"
                alt="Clinician caring for a patient"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: 6 Domains */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              05 · Certification framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
              Six domains for a{" "}
              <span className="bg-[#ede9fe] px-1.5 py-0.5 rounded-md">
                future checklist
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              All evidence is reviewed by named owners.
            </p>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
              {domains.map((domain) => (
                <div
                  key={domain.num}
                  className={`rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-sm flex flex-col justify-between min-h-[112px] text-white ${
                    domain.variant === "navy"
                      ? "bg-gradient-to-br from-[#121c52] to-[#1e2e82]"
                      : "bg-gradient-to-br from-[#5b4ce6] to-[#7c3aed]"
                  }`}
                >
                  <span
                    className="absolute bottom-0.5 right-3 text-3xl font-extrabold text-white/15 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {domain.num}
                  </span>

                  <div className="relative z-10">
                    <h3 className="font-bold text-sm text-white mb-1">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-white/80 mb-3 leading-snug">
                      {domain.description}
                    </p>
                  </div>

                  <span className="relative z-10 inline-block bg-white/15 text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full w-fit">
                    {domain.reviewer}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Amber Pill */}
            <span className="inline-block bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold px-4 py-1.5 rounded-lg">
              Proposed framework · no certification is issued
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

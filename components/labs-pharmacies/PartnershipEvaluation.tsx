import React from "react";
import Image from "next/image";
import Link from "next/link";

const evaluationPoints = [
  "Eligibility and responsible-organization status",
  "Governance and accountability",
  "Security and privacy review",
  "Evidence for each claim",
  "Implementation review",
];

export const PartnershipEvaluation: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#fcfaff] to-[#f6f2fe] py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Alarm Box Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-slate-100">
              <Image
                src="/labs-pharmacies/lp8.jpg"
                alt="Emergency alarm call box mounted on tiled wall mural"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Narrative, Checklist & Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
              <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
                Partnership evaluation
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Explore a potential integration or partnership.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              Institutions can review how a connection would be assessed.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-6">
              {evaluationPoints.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6d5ae6] shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div>
              <Link
                href="/clinical-partnerships-contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#7c5cfc] hover:bg-[#6c4aec] text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-purple-900/20"
              >
                Explore partner pathways
              </Link>
            </div>

            {/* Tag */}
            <div className="mt-3">
              <span className="inline-block bg-[#fef3c7] text-[#92400e] text-[11px] sm:text-xs font-medium px-3 py-1 rounded-md">
                Inquiry route opens only when an authorized team is in place
              </span>
            </div>

            {/* Minimal Fields Notice Box */}
            <div className="mt-4 rounded-xl bg-[#f4effc] border border-purple-100/80 p-3.5">
              <p className="text-xs text-slate-600 leading-relaxed">
                Institution-only, minimal fields. Never send patient identifiers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

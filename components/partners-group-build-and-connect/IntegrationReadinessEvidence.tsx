import React from "react";
import Image from "next/image";

const checklistItems = [
  "Institution ownership",
  "Clinical safety",
  "Security review",
  "Privacy review",
  "Standards mapping",
  "Test results",
  "Monitoring",
  "Rollback evidence",
];

export const IntegrationReadinessEvidence: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Team High-Five Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src="/partners-group-build-and-connect/pgbac6.jpg"
                alt="Partners celebrating readiness over a laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Checklist */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
              08 / INTEGRATION READINESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
              Evidence required for activation
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-7">
              Every item must be on file. Missing evidence fails closed.
            </p>

            {/* 8 Checklist Pill Rows (2 cols x 4 rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 px-4 py-3 flex items-center gap-3 shadow-xs"
                >
                  <span
                    className="w-4 h-4 rounded bg-[#f1effd] border border-purple-200/80 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-[#0f172a]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

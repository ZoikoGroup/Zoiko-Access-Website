import React from "react";
import Image from "next/image";

const recordBullets = [
  "Ask the healthcare provider about your record",
  "Their route is linked once it is published",
  "This page never opens a record",
];

export const HealthcareRecordsSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b103b] via-[#1a1868] to-[#581c87] text-white py-16 md:py-20 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="block text-purple-200/80 text-xs font-semibold tracking-wider mb-1">
            05
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            Healthcare records
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
            Clinical records belong with the systems that create them.
          </p>
        </div>

        {/* Full-Width Photo Overlay Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 min-h-[260px] sm:min-h-[320px] flex items-end p-6 sm:p-10 bg-[#0c1238]">
          <Image
            src="/resources-privacy-and-your-information/pyi6.jpg"
            alt="Healthcare clinician portrait"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-top"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#090d2e]/95 via-[#0e1545]/75 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-md">
            <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
              Source systems own clinical records
            </h3>
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-3">
              Zoiko Access does not hold a universal patient record.
            </p>
            <ul className="space-y-1.5 text-xs text-purple-100/85">
              {recordBullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-300 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

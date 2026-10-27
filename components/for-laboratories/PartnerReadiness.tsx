import React from "react";
import Image from "next/image";

const col1Items = [
  "Facility country and laboratory entity",
  "LIS vendor and version",
  "Interoperability capability under evaluation",
  "Security and data-processing owners",
];

const col2Items = [
  "Identity and consent model",
  "Source record rules",
  "Correction and critical communication process",
  "Testing, rollback and operational owners",
];

export const PartnerReadiness: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle & 2-Column Checklist */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
              <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
                Partner readiness
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              What an institution should be ready to discuss.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              These topics are for an assessment conversation. Do not send them through a public form.
            </p>

            {/* 2-Column Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              <div className="space-y-3.5">
                {col1Items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded border border-[#6d5ae6] text-[#6d5ae6] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-[1px] bg-[#6d5ae6]/40" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3.5">
                {col2Items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded border border-[#6d5ae6] text-[#6d5ae6] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-[1px] bg-[#6d5ae6]/40" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clipboard Illustration Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-100 bg-[#f8faff] flex items-center justify-center p-4">
              <Image
                src="/for-laboratories/fl7.png"
                alt="Illustrated checklist clipboard with laboratory integration badges"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

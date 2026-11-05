import React from "react";

const nonAssertions = [
  "No production APIs",
  "No credentials or keys",
  "No interoperability certification",
  "No list of supported vendors",
];

export const IntegrationCapabilityBoundaries: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Orbital Diagram */}
          <div className="lg:col-span-6 flex justify-center items-center py-6">
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
              {/* Dashed Orbital Ring */}
              <div
                className="absolute inset-4 rounded-full border border-dashed border-indigo-200/90 pointer-events-none"
                aria-hidden="true"
              />

              {/* Central Circle */}
              <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#0d163d] flex flex-col items-center justify-center text-center p-3 shadow-xl shadow-indigo-950/20 border border-indigo-900/50">
                <span className="text-white font-bold text-xs sm:text-sm tracking-wide">
                  Concepts only
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-300/80 mt-1">
                  no live connection
                </span>
              </div>

              {/* Orbiting Badges */}
              {/* EHR - Top (12 o'clock) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-[#0d163d] text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-md border border-indigo-900/40">
                  EHR
                </div>
              </div>

              {/* LIS - Top Right (~2 o'clock) */}
              <div className="absolute top-[22%] right-1 translate-x-1 -translate-y-1/2 z-20">
                <div className="bg-[#0d163d] text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-md border border-indigo-900/40">
                  LIS
                </div>
              </div>

              {/* PACS - Bottom Right (~4 o'clock) */}
              <div className="absolute bottom-[22%] right-0 translate-x-1 translate-y-1/2 z-20">
                <div className="bg-[#0d163d] text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-md border border-indigo-900/40">
                  PACS
                </div>
              </div>

              {/* Pharmacy - Bottom (6 o'clock) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
                <div className="bg-[#0d163d] text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-md border border-indigo-900/40">
                  Pharmacy
                </div>
              </div>

              {/* Payer - Bottom Left (~8 o'clock) */}
              <div className="absolute bottom-[22%] left-1 -translate-x-1 translate-y-1/2 z-20">
                <div className="bg-[#0d163d] text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-md border border-indigo-900/40">
                  Payer
                </div>
              </div>

              {/* Scheduling - Top Left (~10 o'clock) */}
              <div className="absolute top-[22%] left-0 -translate-x-1 -translate-y-1/2 z-20">
                <div className="bg-[#0d163d] text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-md border border-indigo-900/40">
                  Scheduling
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                INTEGRATION CAPABILITY BOUNDARIES
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              Six categories to explore.
              <br />
              Nothing live.
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              These categories may be discussed as concepts. This page asserts none of the following.
            </p>

            {/* List with red cross marks */}
            <div className="space-y-3">
              {nonAssertions.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded flex items-center justify-center bg-rose-50 border border-rose-200 text-rose-500 font-bold text-xs shrink-0">
                    ✕
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
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

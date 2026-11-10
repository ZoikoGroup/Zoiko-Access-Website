import React from "react";

const stockDisclaimers = [
  "No medicine quantities",
  "No automatic substitution",
  "No guaranteed delivery",
  'No "dispense now" actions',
];

export const DispensingStockTruth: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#0c1448] via-[#151d6c] to-[#3a1a9e] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Non-assertions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#c4b5fd]" />
              <span className="text-[#c4b5fd] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                DISPENSING &amp; STOCK TRUTH
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Stock is unknown unless the
              <br />
              pharmacy says otherwise.
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-purple-200/85 leading-relaxed max-w-xl mb-8">
              Stock belongs to the pharmacy. Without a fresh, sourced update, this page shows nothing about it.
            </p>

            {/* Cross markers */}
            <div className="space-y-3.5">
              {stockDisclaimers.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-purple-200 flex items-center justify-center font-bold text-xs shrink-0 select-none">
                    ✕
                  </div>
                  <span className="text-xs sm:text-sm text-purple-100 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stylized Availability Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl text-slate-800 border border-white/20">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <h3 className="font-bold text-sm sm:text-base text-[#0f172a]">
                  Availability panel
                </h3>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  ILLUSTRATIVE
                </span>
              </div>

              <div className="space-y-4 mb-5">
                {/* Row 1 */}
                <div className="flex items-center justify-between py-1">
                  <span className="text-xs text-slate-600 font-medium">
                    Stock state
                  </span>
                  <span className="inline-block bg-amber-50 border border-amber-200 text-amber-600 px-3 py-0.5 rounded-full text-xs font-semibold">
                    Unknown
                  </span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between py-1">
                  <span className="text-xs text-slate-600 font-medium">
                    Source
                  </span>
                  <span className="inline-block bg-blue-50 border border-blue-200 text-blue-600 px-3 py-0.5 rounded-full text-xs font-semibold">
                    Pharmacy only
                  </span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between py-1">
                  <span className="text-xs text-slate-600 font-medium">
                    Last updated
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    —
                  </span>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between py-1">
                  <span className="text-xs text-slate-600 font-medium">
                    Quantity
                  </span>
                  <span className="inline-block bg-slate-100 text-slate-500 px-3 py-0.5 rounded-full text-xs font-semibold">
                    Not shown
                  </span>
                </div>
              </div>

              {/* Footnote */}
              <div className="pt-3 border-t border-slate-100">
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Shown as unknown until a pharmacy provides a fresh, sourced status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

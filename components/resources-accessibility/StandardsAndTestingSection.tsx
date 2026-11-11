import React from "react";

const testChecks = [
  { check: "Keyboard-only", status: "Planned", date: "[date]", config: "[configuration]" },
  { check: "Screen reader (desktop)", status: "Planned", date: "[date]", config: "[configuration]" },
  { check: "Screen reader (mobile)", status: "Planned", date: "[date]", config: "[configuration]" },
  { check: "Zoom 200% / 400%", status: "Planned", date: "[date]", config: "[configuration]" },
  { check: "Colour contrast", status: "Planned", date: "[date]", config: "[configuration]" },
  { check: "Reduced motion", status: "Planned", date: "[date]", config: "[configuration]" },
  { check: "Captions & transcripts", status: "Not applicable yet", date: "[date]", config: "[configuration]" },
];

export const StandardsAndTestingSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Dark Gradient WCAG Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0f1747] via-[#1c2378] to-[#5b4ce6] text-white rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <span
                className="absolute -bottom-3 right-3 text-7xl font-extrabold text-white/10 select-none pointer-events-none"
                aria-hidden="true"
              >
                AA
              </span>

              <span className="block text-[10px] font-bold tracking-wider uppercase text-purple-200/80 mb-1.5">
                STANDARD
              </span>
              <h2 className="text-2xl font-extrabold text-white mb-2">
                WCAG 2.2 AA
              </h2>
              <p className="text-xs text-purple-100/85 leading-relaxed mb-4">
                Our design target, not a certification. We report only what has been tested.
              </p>

              <ul className="space-y-1.5 text-xs text-purple-100/90 relative z-10">
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 font-bold">•</span>
                  <span>Target versus verified kept separate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 font-bold">•</span>
                  <span>Tested configurations listed with dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 font-bold">•</span>
                  <span>Continuous improvement, not a one-off pledge</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Standards & Testing Matrix */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
                STANDARDS &amp; TESTING
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-1.5">
              Tested, or not tested yet
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              Status uses words and symbols, never colour alone.
            </p>

            {/* Testing Table */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-x-auto">
              <div className="min-w-[540px]">
                <div className="bg-[#0d1642] text-white px-5 py-3 grid grid-cols-12 gap-3 text-[11px] font-semibold">
                  <div className="col-span-4">Check</div>
                  <div className="col-span-3">Status</div>
                  <div className="col-span-2">Last tested</div>
                  <div className="col-span-3 text-right">Configuration</div>
                </div>

                <div className="divide-y divide-slate-100 text-xs">
                  {testChecks.map((row, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-3 grid grid-cols-12 gap-3 items-center hover:bg-slate-50/60 transition-colors"
                    >
                      <div className="col-span-4 font-bold text-[#0f172a]">
                        {row.check}
                      </div>
                      <div className="col-span-3">
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                          <span aria-hidden="true">◔</span> {row.status}
                        </span>
                      </div>
                      <div className="col-span-2 text-slate-400">{row.date}</div>
                      <div className="col-span-3 text-right text-slate-400">
                        {row.config}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

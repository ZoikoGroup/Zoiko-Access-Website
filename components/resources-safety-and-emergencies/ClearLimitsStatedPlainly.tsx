import React from "react";

const canDoList = [
  "Explain where healthcare navigation stops",
  "Point you to verified public safety information",
  "Help you understand non-urgent next steps",
];

const cannotDoList = [
  "Dispatch emergency services",
  "Triage, diagnose or treat",
  "Run a crisis hotline",
  "Offer 24/7 monitoring or response",
  "Guess your local emergency number",
];

export const ClearLimitsStatedPlainly: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              WHAT THIS SITE CAN AND CANNOT DO
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Clear limits,{" "}
            <span className="text-[#7c5cff]">stated plainly</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            So no one waits for help that will not come from here.
          </p>
        </div>

        {/* Side-by-side Can / Cannot Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Can Panel */}
          <div className="bg-[#edf8f2] border border-emerald-200/60 rounded-2xl p-6 sm:p-7">
            <h3 className="font-bold text-base text-[#065f46] mb-5">
              Zoiko Access can
            </h3>

            <div className="space-y-3">
              {canDoList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-emerald-100 px-4 py-3 shadow-xs flex items-center gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-[#065f46] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#0f172a]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cannot Panel */}
          <div className="bg-[#f1effd] border border-purple-200/60 rounded-2xl p-6 sm:p-7">
            <h3 className="font-bold text-base text-[#1e1b4b] mb-5">
              Zoiko Access cannot
            </h3>

            <div className="space-y-3">
              {cannotDoList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-purple-100 px-4 py-3 shadow-xs flex items-center gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-[#1e1b4b] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    ✕
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#0f172a]">
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

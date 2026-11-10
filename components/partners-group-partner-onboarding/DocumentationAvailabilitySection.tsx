import React from "react";

const docConditions = [
  { num: 1, title: "Published audited docs" },
  { num: 2, title: "Named owner" },
  { num: 3, title: "Version" },
  { num: 4, title: "Examples" },
  { num: 5, title: "Accessibility" },
  { num: 6, title: "Supported jurisdiction" },
];

export const DocumentationAvailabilitySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            06 · Documentation availability
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Docs appear only when all six are true
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Until then, the Developer documentation link stays gated.
          </p>
        </div>

        {/* 6 Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {docConditions.map((cond) => (
            <div
              key={cond.num}
              className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs flex flex-col items-center text-center justify-center min-h-[115px]"
            >
              <span className="w-7 h-7 rounded-full border border-dashed border-purple-300 text-[#6366f1] text-xs font-bold flex items-center justify-center mb-3">
                {cond.num}
              </span>
              <span className="font-bold text-xs text-[#0f172a] leading-snug">
                {cond.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

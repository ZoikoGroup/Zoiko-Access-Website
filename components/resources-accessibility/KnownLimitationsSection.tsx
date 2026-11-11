import React from "react";

const limitationRows = [
  {
    limitation: "[Plain-language summary of the barrier]",
    journey: "[Page or task]",
    workaround: "[Alternative way to complete it]",
    updated: "[Date]",
  },
  {
    limitation: "[Entry from the accessibility register]",
    journey: "[Page or task]",
    workaround: "[Workaround, if any]",
    updated: "[Date]",
  },
];

export const KnownLimitationsSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#faf8ff] via-[#f4f1ff] to-[#ebe5ff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              KNOWN LIMITATIONS &amp; WORKAROUNDS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            We publish what doesn&apos;t{" "}
            <span className="text-[#7c5cff]">work well yet</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Each entry is versioned and dated. We never claim &ldquo;no known issues&rdquo; without current evidence.
          </p>
        </div>

        {/* 4-Column White Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-x-auto mb-4">
          <div className="min-w-[640px]">
            <div className="bg-[#f1effd] px-6 py-3.5 grid grid-cols-12 gap-4 text-[11px] font-bold text-[#0f172a]">
              <div className="col-span-4">Limitation</div>
              <div className="col-span-3">Affected journey</div>
              <div className="col-span-3">Workaround</div>
              <div className="col-span-2 text-right">Updated</div>
            </div>

            <div className="divide-y divide-slate-100 text-xs text-slate-500">
              {limitationRows.map((row, idx) => (
                <div
                  key={idx}
                  className="px-6 py-4 grid grid-cols-12 gap-4 items-center"
                >
                  <div className="col-span-4">{row.limitation}</div>
                  <div className="col-span-3">{row.journey}</div>
                  <div className="col-span-3">{row.workaround}</div>
                  <div className="col-span-2 text-right">{row.updated}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Template Note */}
        <span className="inline-block bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-medium px-3.5 py-1.5 rounded-lg">
          Template rows. Real entries come from the accessibility register before launch.
        </span>
      </div>
    </section>
  );
};

import React from "react";

const fourWords = [
  {
    title: "Interest",
    description:
      "You told us you would like to explore working together. Nothing has been assessed yet.",
    barColor: "bg-[#6d4aff]",
  },
  {
    title: "Review",
    description:
      "A team is looking at purpose, scope and evidence. It is not an approval.",
    barColor: "bg-[#6d4aff]",
  },
  {
    title: "Authorization",
    description:
      "The responsible institution has formally approved a defined scope. Still not live.",
    barColor: "bg-[#3b82f6]",
  },
  {
    title: "Operational",
    description:
      "A connection is deployed and monitored in a named market, with evidence on file.",
    barColor: "bg-[#059669]",
  },
];

const pageStates = [
  {
    state: "P0 informational",
    shown: "Plain-language guidance; approved INFO pages only",
    never: "Technical capability or partner status",
  },
  {
    state: "Published INFO",
    shown: "Source-reviewed explanation with owner and review date",
    never: "An operational endpoint, network or certification",
  },
  {
    state: "GATED unavailable",
    shown: "Explains why the route is not active; links to relevant INFO",
    never: "Self-service submission, staffing or developer keys",
  },
  {
    state: "Potential future active",
    shown: "Only after signed market + organisation + service + role + release evidence",
    never: "Universal access",
  },
  {
    state: "PX degraded / suspended",
    shown: "Affected action removed; accurate education kept",
    never: "Last known success as current availability",
  },
];

export const FourWordsPlainLanguage: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            10 · Plain language
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Four words, four meanings
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The difference between interest, review, authorization and being operational.
          </p>
        </div>

        {/* 4 Word Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {fourWords.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex flex-col"
            >
              <span
                className={`w-5 h-[3px] rounded-full ${card.barColor} mb-3`}
                aria-hidden="true"
              />
              <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Page State Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-x-auto">
          <div className="min-w-[640px]">
            {/* Table Header */}
            <div className="bg-[#f8fafc] border-b border-slate-200/70 px-6 py-3.5 grid grid-cols-12 gap-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              <div className="col-span-3">PAGE STATE</div>
              <div className="col-span-5">WHAT WE SHOW</div>
              <div className="col-span-4">NEVER INFERRED</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100 text-xs">
              {pageStates.map((row, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3.5 grid grid-cols-12 gap-4 items-center hover:bg-slate-50/60 transition-colors"
                >
                  <div className="col-span-3 font-bold text-[#0f172a]">
                    {row.state}
                  </div>
                  <div className="col-span-5 text-slate-600">{row.shown}</div>
                  <div className="col-span-4 text-rose-600 font-medium">
                    {row.never}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

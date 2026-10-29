import React from "react";

interface StatusRow {
  state: string;
  sourceMeaning: string;
  doNotInfer: string;
}

const statusRows: StatusRow[] = [
  {
    state: "Order transmitted",
    sourceMeaning: "Integration transport accepted the message.",
    doNotInfer: "Not accepted by the laboratory.",
  },
  {
    state: "Order acknowledged",
    sourceMeaning: "Laboratory system received the message.",
    doNotInfer: "Not necessarily eligible or valid.",
  },
  {
    state: "Order accepted",
    sourceMeaning: "Laboratory validation and acceptance recorded.",
    doNotInfer: "Not a completed test.",
  },
  {
    state: "Result issued",
    sourceMeaning: "Laboratory releases a versioned report.",
    doNotInfer: "Not yet clinically reviewed.",
  },
  {
    state: "Result delivered",
    sourceMeaning: "Recipient endpoint confirms delivery.",
    doNotInfer: "Not read or reviewed by a clinician.",
  },
  {
    state: "Clinical review confirmed",
    sourceMeaning: "Authorized clinical system confirms reviewed state.",
    doNotInfer: "Does not alone prove treatment completed.",
  },
  {
    state: "Corrected / superseded",
    sourceMeaning: "Source publishes an attributable replacement.",
    doNotInfer: "Never silently rewrite the original.",
  },
];

export const LifecycleStatuses: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Lifecycle and statuses
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            What each status means, and what it does not.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Example states only. Real statuses always come from the source system, with an issuer, evidence and timestamp.
          </p>
        </div>

        {/* Statuses Matrix Card */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#ede9fe]/35 border-b border-purple-100/70 text-xs sm:text-sm font-bold text-slate-800">
                  <th scope="col" className="py-4 px-6 w-1/4">
                    Example state
                  </th>
                  <th scope="col" className="py-4 px-6 w-3/8">
                    Source and meaning
                  </th>
                  <th scope="col" className="py-4 px-6 w-3/8">
                    Do not infer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {statusRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-slate-900">
                      {row.state}
                    </td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed">
                      {row.sourceMeaning}
                    </td>
                    <td className="py-4 px-6 text-[#994040] leading-relaxed">
                      {row.doNotInfer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

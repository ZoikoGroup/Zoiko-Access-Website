import React from "react";

interface ReferenceRow {
  reference: string;
  version: string;
  visibility: string;
  status: string;
}

const referenceRows: ReferenceRow[] = [
  {
    reference: "Core exchange reference",
    version: "—",
    visibility: "controlled",
    status: "not approved",
  },
  {
    reference: "Event catalog",
    version: "—",
    visibility: "controlled",
    status: "not approved",
  },
  {
    reference: "Authorization scopes",
    version: "—",
    visibility: "controlled",
    status: "not approved",
  },
  {
    reference: "Error dictionary",
    version: "—",
    visibility: "public",
    status: "not approved",
  },
];

export const ApiReferenceIndex: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8f6ff] via-[#edf0fd] to-[#e4e7fa] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              API REFERENCE INDEX
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            Approved references, by version.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            This index lists only approved references. Each row shows what kind of reference it would be; none is approved yet.
          </p>
        </div>

        {/* References Table Card */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th scope="col" className="py-4 px-6 w-2/5">
                    REFERENCE
                  </th>
                  <th scope="col" className="py-4 px-6 w-1/5">
                    VERSION
                  </th>
                  <th scope="col" className="py-4 px-6 w-1/5">
                    VISIBILITY
                  </th>
                  <th scope="col" className="py-4 px-6 w-1/5">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {referenceRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {row.reference}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {row.version}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-medium">
                        {row.visibility}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-500 text-xs">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Footnote Bar */}
          <div className="bg-[#fcfdff] border-t border-slate-100 px-6 py-3.5">
            <p className="text-xs text-slate-500 leading-relaxed">
              Rows are categories only. Versions and links appear here once a reference is approved for publication or authorized access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

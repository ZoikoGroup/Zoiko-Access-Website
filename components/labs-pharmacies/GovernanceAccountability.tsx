import React from "react";

interface MatrixRow {
  role: string;
  responsibleFor: string;
  notResponsibleFor: string;
}

const matrixRows: MatrixRow[] = [
  {
    role: "Source diagnostic provider",
    responsibleFor: "Test and imaging records, results, corrections and retractions.",
    notResponsibleFor: "Clinical decisions made by others.",
  },
  {
    role: "Treating clinician",
    responsibleFor: "Ordering, reviewing results and deciding next steps.",
    notResponsibleFor: "Laboratory or pharmacy operations.",
  },
  {
    role: "Licensed pharmacy",
    responsibleFor: "Validation, dispensing and local supply rules.",
    notResponsibleFor: "Diagnosis or prescribing.",
  },
  {
    role: "Coordination technology layer",
    responsibleFor: "Permissioned handoffs, with transfer events audited.",
    notResponsibleFor: "Interpretation, prescribing, dispensing or substitution.",
  },
];

export const GovernanceAccountability: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eee8fc] via-[#f5f0ff] to-[#e4d9fb] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Governance and accountability
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Information handoff is not professional action.
          </h2>
        </div>

        {/* Matrix Card Container */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200 text-xs sm:text-sm font-bold text-slate-800">
                  <th scope="col" className="py-4 px-6 w-1/4">
                    Role
                  </th>
                  <th scope="col" className="py-4 px-6 w-3/8">
                    Responsible for
                  </th>
                  <th scope="col" className="py-4 px-6 w-3/8">
                    Not responsible for
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {matrixRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-slate-900">
                      {row.role}
                    </td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed">
                      {row.responsibleFor}
                    </td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed">
                      {row.notResponsibleFor}
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

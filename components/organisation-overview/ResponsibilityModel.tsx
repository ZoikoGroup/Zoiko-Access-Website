import React from "react";

interface ModelRow {
  party: string;
  responsibleFor: string;
  notResponsibleFor: string;
}

const tableData: ModelRow[] = [
  {
    party: "Sponsor / organizer",
    responsibleFor: "Defining and funding the program",
    notResponsibleFor: "Individual health records — employers see none",
  },
  {
    party: "Participating healthcare provider",
    responsibleFor: "Diagnosis, treatment and clinical records",
    notResponsibleFor: "Program sponsorship decisions",
  },
  {
    party: "Patient / member",
    responsibleFor: "Their own choices, consent and rights under local law",
    notResponsibleFor: "Others' information",
  },
  {
    party: "Zoiko Access coordination layer",
    responsibleFor: "Designed to support authorized coordination",
    notResponsibleFor: "Clinical decisions",
  },
  {
    party: "Public authority / ethics body",
    responsibleFor: "Mandates, approvals and oversight where applicable",
    notResponsibleFor: "Access beyond its lawful authority",
  },
];

export default function ResponsibilityModel() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Responsibility model
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Every party keeps its own responsibilities.
          </h2>
        </div>

        {/* Table Container with outer border, rounded corners & subtle shadow */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Header Row */}
              <thead>
                <tr className="bg-[#243B73] text-[12px] font-bold uppercase tracking-wider text-white">
                  <th scope="col" className="py-4.5 px-6 sm:px-8 w-1/4">
                    Party
                  </th>
                  <th scope="col" className="py-4.5 px-6 sm:px-8 w-3/8">
                    Responsible for
                  </th>
                  <th scope="col" className="py-4.5 px-6 sm:px-8 w-3/8">
                    Not responsible for / no access to
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#E2E8F0] text-[14px] text-[#475569] sm:text-[15px]">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-[#F8FAFC]"
                  >
                    <td className="py-5 px-6 sm:px-8 font-bold text-[#1E1B4B]">
                      {row.party}
                    </td>
                    <td className="py-5 px-6 sm:px-8 leading-[1.6]">
                      {row.responsibleFor}
                    </td>
                    <td className="py-5 px-6 sm:px-8 leading-[1.6]">
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
}

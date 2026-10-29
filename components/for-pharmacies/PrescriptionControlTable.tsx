import React from "react";

const tableData = [
  {
    stage: "Prescription creation",
    responsible: "Qualified prescriber",
  },
  {
    stage: "Secure transmission",
    responsible: "Authorized system",
  },
  {
    stage: "Prescription review and substitution",
    responsible: "Licensed pharmacy, under local rules",
  },
  {
    stage: "Dispensing",
    responsible: "Licensed pharmacy",
  },
  {
    stage: "Post-dispense follow-up",
    responsible: "Appropriate care party",
  },
];

export default function PrescriptionControlTable() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#7C3AED]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
              Prescription control boundaries
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Who controls each part of the prescription chain.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            This page has no upload, fax, renewal, refill, substitution or
            checkout controls.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#EBE9FB] text-[#1E1B4B]">
                  <th className="px-6 py-4 text-[14px] font-bold sm:px-8 sm:py-5">
                    Stage
                  </th>
                  <th className="px-6 py-4 text-[14px] font-bold sm:px-8 sm:py-5">
                    Who is responsible
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-[#F8FAFC]"
                  >
                    <td className="px-6 py-4 text-[14px] font-medium text-[#1E1B4B] sm:px-8 sm:py-5">
                      {row.stage}
                    </td>
                    <td className="px-6 py-4 text-[14px] text-[#475569] sm:px-8 sm:py-5">
                      {row.responsible}
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

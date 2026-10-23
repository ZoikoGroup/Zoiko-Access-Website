"use client";

import { motion } from "framer-motion";

interface ResponsibilityRow {
  status: string;
  source: string;
  means: string;
  responsible: string;
}

const evidenceData: ResponsibilityRow[] = [
  {
    status: "Sent",
    source: "The sender",
    means: "That it left the sender.",
    responsible: "The sending organization",
  },
  {
    status: "Delivered",
    source: "Transport",
    means: "That it reached a destination.",
    responsible: "The transport system",
  },
  {
    status: "Received",
    source: "Receiving service",
    means: "That it was logged.",
    responsible: "The receiving service",
  },
  {
    status: "Reviewed",
    source: "Authorized clinician",
    means: "That a professional looked at it.",
    responsible: "The receiving clinician",
  },
  {
    status: "Accepted",
    source: "Recipient care owner",
    means: "That the owner took it on.",
    responsible: "The recipient care owner",
  },
];

export default function EvidenceAndResponsibility() {
  return (
    <section className="w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            EVIDENCE AND RESPONSIBILITY
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Electronic delivery is not clinical acceptance
          </h2>
        </motion.div>

        {/* Responsive Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-[18px] border border-[#D9D3F5] bg-white shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-[#031974] text-white">
                  <th className="py-4 px-6 text-[14px] font-semibold tracking-wide w-[18%]">
                    Status
                  </th>
                  <th className="py-4 px-6 text-[14px] font-semibold tracking-wide w-[26%]">
                    Source
                  </th>
                  <th className="py-4 px-6 text-[14px] font-semibold tracking-wide w-[30%]">
                    Means
                  </th>
                  <th className="py-4 px-6 text-[14px] font-semibold tracking-wide w-[26%]">
                    Responsible
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9D3F5]">
                {evidenceData.map((row, idx) => (
                  <tr
                    key={row.status}
                    className={`transition-colors hover:bg-[#F8F9FE] ${
                      idx % 2 === 1 ? "bg-[#FAFAFF]" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 text-[15px] font-semibold text-[#031974]">
                      {row.status}
                    </td>
                    <td className="py-4 px-6 text-[15px] text-[#273444] font-normal leading-[1.6]">
                      {row.source}
                    </td>
                    <td className="py-4 px-6 text-[15px] text-[#273444] font-normal leading-[1.6]">
                      {row.means}
                    </td>
                    <td className="py-4 px-6 text-[15px] text-[#273444] font-normal leading-[1.6]">
                      {row.responsible}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

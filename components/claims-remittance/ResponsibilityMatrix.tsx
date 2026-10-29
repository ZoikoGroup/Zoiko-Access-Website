"use client";

import { motion } from "framer-motion";

export default function ResponsibilityMatrix() {
  return (
    <section
      id="matrix"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3.5 mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1165em] text-[#7657E8]">
              Who owns what
            </span>
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
            One ledger of responsibility.
          </h2>
        </motion.div>

        {/* Ledger Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-hidden rounded-[18px] border border-[#E3E8F2] bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F6F9FC] border-b border-[#E3E8F2]">
                  <th
                    scope="col"
                    className="w-[160px] p-5 text-sm font-semibold text-[#16245A]"
                  ></th>
                  <th
                    scope="col"
                    className="w-[30%] p-5 font-poppins text-[15px] font-semibold text-[#16245A]"
                  >
                    Provider
                  </th>
                  <th
                    scope="col"
                    className="w-[38%] p-5 font-poppins text-[15px] font-semibold text-[#16245A]"
                  >
                    Payer / administrator
                  </th>
                  <th
                    scope="col"
                    className="w-[32%] p-5 font-poppins text-[15px] font-semibold text-[#16245A]"
                  >
                    Clearinghouse / integration service
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E8F2]">
                {/* Row 1: Owns */}
                <tr className="transition-colors hover:bg-[#FAFCFF]">
                  <th
                    scope="row"
                    className="bg-[#FCFBFF] p-5 text-[11px] font-bold uppercase tracking-[0.0735em] text-[#7657E8] align-top"
                  >
                    Owns
                  </th>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top">
                    Claim creation, submission and reconciliation
                  </td>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top border-l border-[#E3E8F2]/60">
                    Intake, adjudication, remittance advice and payment
                    instruction
                  </td>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top border-l border-[#E3E8F2]/60">
                    Governed transport and format of exchanged records
                  </td>
                </tr>

                {/* Row 2: Source */}
                <tr className="transition-colors hover:bg-[#FAFCFF]">
                  <th
                    scope="row"
                    className="bg-[#FAFBFD] p-5 text-[11.3px] font-bold uppercase tracking-[0.0664em] text-[#7657E8] align-top"
                  >
                    Source
                  </th>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top bg-[#FAFBFD]/60">
                    Provider billing and financial systems
                  </td>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top bg-[#FAFBFD]/60 border-l border-[#E3E8F2]/60">
                    Payer claims system of record
                  </td>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top bg-[#FAFBFD]/60 border-l border-[#E3E8F2]/60">
                    Transport logs and acknowledgments
                  </td>
                </tr>

                {/* Row 3: Evidence type */}
                <tr className="transition-colors hover:bg-[#FAFCFF]">
                  <th
                    scope="row"
                    className="bg-[#FCFBFF] p-5 text-[12px] font-bold uppercase tracking-[0.06em] text-[#7657E8] align-top"
                  >
                    Evidence type
                  </th>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top">
                    Submission and reconciliation records
                  </td>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top border-l border-[#E3E8F2]/60">
                    Determinations and remittance advice
                  </td>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top border-l border-[#E3E8F2]/60">
                    Transport acknowledgments, version lineage
                  </td>
                </tr>

                {/* Row 4: Escalate to */}
                <tr className="transition-colors hover:bg-[#FAFCFF]">
                  <th
                    scope="row"
                    className="bg-[#FAFBFD] p-5 text-[12px] font-bold uppercase tracking-[0.062em] text-[#7657E8] align-top"
                  >
                    Escalate to
                  </th>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top bg-[#FAFBFD]/60">
                    Provider revenue-cycle team
                  </td>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top bg-[#FAFBFD]/60 border-l border-[#E3E8F2]/60">
                    Payer provider-services channel
                  </td>
                  <td className="p-5 text-[15px] leading-[1.6] text-[#273444] align-top bg-[#FAFBFD]/60 border-l border-[#E3E8F2]/60">
                    Contracted integration support
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

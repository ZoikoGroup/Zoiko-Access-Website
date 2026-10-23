"use client";

import { motion } from "framer-motion";

interface RoutingRow {
  step: string;
  checks: string;
  owner: string;
}

const routingSteps: RoutingRow[] = [
  {
    step: "Intended service",
    checks: "What the sender asked for",
    owner: "Chosen by the sending clinician",
  },
  {
    step: "Verified destination",
    checks: "Where it can be sent",
    owner: "Checked against a published, verified source",
  },
  {
    step: "Completeness checks",
    checks: "Whether required fields are present",
    owner: "Administrative only",
  },
  {
    step: "Handoff",
    checks: "Release to the destination",
    owner: "Hands over. Does not decide",
  },
  {
    step: "Medical appropriateness",
    checks: "Whether the referral is suitable",
    owner: "Decided by the receiving clinician",
  },
];

export default function RoutingAndDestination() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
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
            ROUTING AND DESTINATION
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Administrative routing supports delivery. It does not
            <br />
            decide care.
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
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#031974] text-white">
                  <th className="py-4 px-6 text-[14px] font-semibold tracking-wide w-[28%]">
                    Step
                  </th>
                  <th className="py-4 px-6 text-[14px] font-semibold tracking-wide w-[36%]">
                    What it checks
                  </th>
                  <th className="py-4 px-6 text-[14px] font-semibold tracking-wide w-[36%]">
                    Owner or rule
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9D3F5]">
                {routingSteps.map((row, idx) => (
                  <tr
                    key={row.step}
                    className={`transition-colors hover:bg-[#F8F9FE] ${
                      idx % 2 === 1 ? "bg-[#FAFAFF]" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 text-[15px] font-semibold text-[#031974]">
                      {row.step}
                    </td>
                    <td className="py-4 px-6 text-[15px] text-[#273444] font-normal leading-[1.6]">
                      {row.checks}
                    </td>
                    <td className="py-4 px-6 text-[15px] text-[#273444] font-normal leading-[1.6]">
                      {row.owner}
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

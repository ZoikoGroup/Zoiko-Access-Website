"use client";

import { motion } from "framer-motion";

const delegationRows = [
  {
    role: "Self (member)",
    purpose: "Understand own plan",
    verification: "Identity and plan entitlement",
    allowed: "What the plan permits for the member",
  },
  {
    role: "Parent / guardian",
    purpose: "Act for a dependent",
    verification: "Proof of relationship and local legal authority",
    allowed: "Scoped by law and plan rules",
  },
  {
    role: "Authorized caregiver",
    purpose: "Help with specific tasks",
    verification: "Explicit, scoped delegation",
    allowed: "Only the delegated tasks",
  },
  {
    role: "Payer representative",
    purpose: "Plan administration",
    verification: "Organizational role, least privilege",
    allowed: "Plan-owned tasks — no clinical record access by default",
  },
  {
    role: "Provider",
    purpose: "Care and administrative steps",
    verification: "Separate clinical/system agreement and role",
    allowed: "Within its own role and agreement",
  },
];

export default function DelegationAuthority() {
  return (
    <section
      id="delegation"
      className="w-full bg-white py-16 md:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[780px]">
          <div className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 border border-[#DCD3FB] shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)]">
            <span className="text-[13px] font-semibold leading-[20.8px] text-[#7657E8]">
              Delegation &amp; representation
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-[#16245A] tracking-[-0.01em]">
            Helping someone needs verified authority.
          </h2>

          <p className="max-w-[700px] text-[16px] sm:text-[17px] font-normal leading-[27.2px] text-[#5B6678]">
            Family relationships and sponsorship never create access on their own.
            Nothing is displayed or consented to on this page.
          </p>
        </div>

        {/* Responsive Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-[24px] border border-[#E3E8F2] bg-white shadow-[0px_14px_34px_0px_rgba(36,59,115,0.08)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              {/* Gradient Table Header */}
              <thead>
                <tr className="bg-gradient-to-r from-[#243B73] to-[#4267D5] text-white">
                  <th className="py-4 px-6 font-poppins text-[14px] font-medium leading-[22.4px] w-[20%]">
                    Role
                  </th>
                  <th className="py-4 px-6 font-poppins text-[14px] font-medium leading-[22.4px] w-[24%]">
                    Typical purpose
                  </th>
                  <th className="py-4 px-6 font-poppins text-[14px] font-medium leading-[22.4px] w-[28%]">
                    Verification required
                  </th>
                  <th className="py-4 px-6 font-poppins text-[14px] font-medium leading-[22.4px] w-[28%]">
                    Allowed actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#E3E8F2]">
                {delegationRows.map((row, index) => (
                  <tr
                    key={row.role}
                    className={`transition-colors duration-150 hover:bg-[#F2F6FC]/60 ${
                      index % 2 === 0 ? "bg-[#FBFAFF]" : "bg-white"
                    }`}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-poppins text-[15px] font-semibold leading-[24px] text-[#16245A]"
                    >
                      {row.role}
                    </th>
                    <td className="py-4 px-6 text-[15px] font-normal leading-[24px] text-[#273444]">
                      {row.purpose}
                    </td>
                    <td className="py-4 px-6 text-[15px] font-normal leading-[24px] text-[#273444]">
                      {row.verification}
                    </td>
                    <td className="py-4 px-6 text-[15px] font-normal leading-[24px] text-[#273444]">
                      {row.allowed}
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

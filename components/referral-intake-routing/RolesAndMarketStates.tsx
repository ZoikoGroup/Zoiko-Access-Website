"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RoleRow {
  role: string;
  scope: string;
}

const roles: RoleRow[] = [
  { role: "Anonymous visitor", scope: "Read the page" },
  { role: "Hospital evaluator", scope: "Read the page and published links" },
  { role: "Clinical reviewer", scope: "No review action here" },
  { role: "Sender", scope: "No sending here" },
  { role: "Receiver", scope: "No receiving here" },
  { role: "Caregiver", scope: "No status view here" },
  { role: "Admin", scope: "No admin controls here" },
];

export default function RolesAndMarketStates() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Lead & Table */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-7"
          >
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              ROLES AND MARKET STATES
            </span>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
              This public page is read-only
            </h2>
            <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[#273444] sm:text-[16px]">
              Capabilities depend on the care location, participating organizations and authorized
              services. P0 informational · P1 verified discovery only · P2 separately approved live
              functionality · PX degraded. Anything unclear fails closed.
            </p>

            {/* Role Table */}
            <div className="mt-8 overflow-hidden rounded-[18px] border border-[#D9D3F5] bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#031974] text-white">
                    <th className="py-3.5 px-5 text-[14px] font-semibold tracking-wide w-[40%]">
                      Role
                    </th>
                    <th className="py-3.5 px-5 text-[14px] font-semibold tracking-wide w-[60%]">
                      On this public page
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9D3F5]">
                  {roles.map((r, idx) => (
                    <tr
                      key={r.role}
                      className={`transition-colors hover:bg-[#F8F9FE] ${
                        idx % 2 === 1 ? "bg-[#FAFAFF]" : "bg-white"
                      }`}
                    >
                      <td className="py-3 px-5 text-[14.5px] font-semibold text-[#031974]">
                        {r.role}
                      </td>
                      <td className="py-3 px-5 text-[14.5px] text-[#273444] font-normal">
                        {r.scope}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Right Column: Visual Photo Figure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:col-span-5"
          >
            <div
              className="relative h-[480px] sm:h-[580px] w-full max-w-[490px] overflow-hidden rounded-[30px] shadow-2xl border border-white/50"
              style={{
                background:
                  "linear-gradient(129deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
              }}
            >
              {/* Decorative SVG background */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/referral-intake-routing/public-readonly-bg.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Photo */}
              <Image
                src="/referral-intake-routing/public-readonly-photo.png"
                alt="Hospital Staff Reviewing Administrative Boundaries"
                fill
                sizes="(max-width: 1024px) 100vw, 490px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

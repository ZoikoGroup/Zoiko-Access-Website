"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const decisionRoles = [
  {
    role: "Licensed provider",
    scope: "Diagnosis, treatment and clinical decisions.",
  },
  {
    role: "Patient",
    scope: "Your own choices and permissions.",
  },
  {
    role: "Caregiver",
    scope: "Only with verified, lawful authority.",
  },
  {
    role: "Zoiko Access",
    scope: "Information and coordination — never clinical decisions.",
  },
];

export default function DecisionResponsibility() {
  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Safety, privacy & patient agency
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
            Care decisions stay with healthcare professionals.
          </h2>
        </motion.div>

        {/* Two Cards Grid */}
        <div className="mt-9 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {/* Card 1: Who makes decisions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-[18px] border border-[#E3E8F2] bg-white p-6 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)] sm:p-8"
          >
            <div>
              <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
                Who makes decisions?
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                {decisionRoles.map((item) => (
                  <div
                    key={item.role}
                    className="border-b border-[#F0F4F8] pb-3 last:border-b-0 last:pb-0"
                  >
                    <b className="block text-[15px] font-semibold text-[#16245A] [font-family:var(--font-poppins)]">
                      {item.role}
                    </b>
                    <p className="mt-0.5 text-[14px] leading-[22.4px] text-[#5B6678]">
                      {item.scope}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Helping someone else */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-between rounded-[18px] border border-[#E3E8F2] bg-white p-6 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)] sm:p-8"
          >
            <div>
              <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
                Helping someone else navigate?
              </h3>

              <p className="mt-4 text-[15px] leading-[24px] text-[#5B6678]">
                You can read this guide for anyone. Acting on their behalf is
                different: it needs their consent or lawful representation,
                verified separately.
              </p>

              <p className="mt-3 text-[15px] leading-[24px] text-[#5B6678]">
                This page gives no account or record access.
              </p>
            </div>

            <div className="mt-7">
              <Link
                href="/privacy-permissions"
                className="inline-flex items-center text-[14.5px] font-semibold text-[#7657E8] transition-colors hover:text-[#5d3ec9]"
              >
                Permissions & caregivers →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

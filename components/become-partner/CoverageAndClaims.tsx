"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const coverageDecisions = [
  "Eligibility",
  "Benefit explanation",
  "Prior authorization",
  "Network coverage",
];

const claimsEvents = [
  "Submission",
  "Receipt",
  "Review",
  "Decision",
  "Remittance",
];

export default function CoverageAndClaims() {
  return (
    <section
      id="coverage-access"
      className="w-full bg-gradient-to-b from-[#F3EFFE] via-[#F0ECFD] to-[#E9E3FC] py-16 sm:py-20 lg:py-[70px]"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              How it relates
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-[#16245A] sm:text-[38px] lg:text-[40px]">
            Coverage and claims stay distinct.
          </h2>
        </motion.div>

        {/* 2 Big Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1: Coverage & Access */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-sm transition-all hover:shadow-md"
          >
            {/* Media Image */}
            <div className="relative h-[280px] sm:h-[360px] lg:h-[391px] w-full bg-slate-100">
              <Image
                src="/become-partner/coverage-and-access.png"
                alt="Coverage and access decision flow"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                Coverage &amp; access
              </span>
              <h3 className="mt-2 text-[20px] font-semibold leading-[28px] text-[#16245A]">
                Four separate decisions
              </h3>

              {/* Decision Flow list */}
              <ul className="mt-4 flex flex-col gap-2">
                {coverageDecisions.map((decision) => (
                  <li
                    key={decision}
                    className="flex items-center gap-3 rounded-[10px] bg-[#F6F9FC] px-4 py-2.5 transition-colors hover:bg-[#EEF3F8]"
                  >
                    <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-white">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.779959 2.96385L2.80785 4.91374L7.01963 0.779959" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-[15.5px] font-medium leading-[24px] text-[#16245A]">
                      {decision}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[14.5px] sm:text-[15px] font-normal leading-[24px] text-[#5B6678]">
                None of these implies another.
              </p>
            </div>
          </motion.article>

          {/* Card 2: Claims & Governance */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            className="flex flex-col overflow-hidden rounded-[14px] border border-[#E3E8F2] bg-white shadow-sm transition-all hover:shadow-md"
          >
            {/* Media Image */}
            <div className="relative h-[280px] sm:h-[360px] lg:h-[391px] w-full bg-slate-100">
              <Image
                src="/become-partner/claims-and-governance.png"
                alt="Claims and governance event stages"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                Claims &amp; governance
              </span>
              <h3 className="mt-2 text-[20px] font-semibold leading-[28px] text-[#16245A]">
                Five separate events
              </h3>

              {/* Events Flow list */}
              <ul className="mt-4 flex flex-col gap-2">
                {claimsEvents.map((evt) => (
                  <li
                    key={evt}
                    className="flex items-center gap-3 rounded-[10px] bg-[#F6F9FC] px-4 py-2.5 transition-colors hover:bg-[#EEF3F8]"
                  >
                    <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-white">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.779959 2.96385L2.80785 4.91374L7.01963 0.779959" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-[15.5px] font-medium leading-[24px] text-[#16245A]">
                      {evt}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[14.5px] sm:text-[15px] font-normal leading-[24px] text-[#5B6678]">
                Remittance explains the outcome — it isn&apos;t proof of payment.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

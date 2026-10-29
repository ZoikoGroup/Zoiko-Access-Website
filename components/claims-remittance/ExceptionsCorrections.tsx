"use client";

import { motion } from "framer-motion";

const exceptionTags = [
  "Duplicate",
  "Incomplete",
  "Rejected",
  "Recoupment",
  "Overpayment",
  "Reversal",
  "Corrected claim",
  "Unmatched remittance",
];

export default function ExceptionsCorrections() {
  return (
    <section
      id="exceptions"
      className="relative w-full py-16 sm:py-20 lg:py-[70px]"
      style={{
        background: `
          conic-gradient(from 45deg at 50% 50%, rgba(243, 239, 254, 1) 100%, rgba(192, 172, 255, 1) 100%),
          linear-gradient(180deg, rgba(243, 239, 254, 1) 0%, rgba(233, 227, 252, 1) 100%)
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, tags, note */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start gap-5"
          >
            <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
              <span className="text-[11.8px] font-semibold uppercase tracking-[0.1017em] text-[#7657E8]">
                Exceptions & corrections
              </span>
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
              When records don&apos;t line up.
            </h2>

            {/* Tags cluster */}
            <div className="flex flex-wrap gap-2.5 my-2 max-w-[560px]">
              {exceptionTags.map((tag, idx) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="rounded-full bg-white border border-[#D9CFFB] px-4 py-2 text-[14px] sm:text-[14.5px] font-medium text-[#16245A] shadow-[0px_2px_6px_rgba(118,87,232,0.06)]"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <p className="text-[14.5px] sm:text-[15px] leading-[1.6] text-[#5B6678]">
              Discrepancies stay visible until the responsible owner resolves
              them.
            </p>
          </motion.div>

          {/* Right Column: 2 Escalation Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-4 sm:gap-5"
          >
            {/* Card 1: Operational Escalation */}
            <div className="rounded-[16px] bg-white border-l-[5px] border-[#4267D5] p-6 sm:p-7 shadow-[0px_10px_30px_rgba(36,59,115,0.06)]">
              <h3 className="font-poppins text-[18px] font-semibold text-[#16245A] mb-2">
                Operational escalation
              </h3>
              <p className="text-[14.5px] sm:text-[15px] leading-[1.6] text-[#5B6678]">
                Non-urgent. Billing, remittance or reconciliation issues go to
                the record&apos;s owner — provider revenue cycle or payer
                provider services.
              </p>
            </div>

            {/* Card 2: Clinical Safety Escalation */}
            <div className="rounded-[16px] bg-[#FFF8EA] border-l-[5px] border-[#B7791F] p-6 sm:p-7 shadow-[0px_10px_30px_rgba(36,59,115,0.06)]">
              <h3 className="font-poppins text-[18px] font-semibold text-[#16245A] mb-2">
                Clinical safety escalation
              </h3>
              <p className="text-[14.5px] sm:text-[15px] leading-[1.6] text-[#5B6678]">
                Never routed through claims. Urgent care needs follow local
                emergency pathways and the treating care team.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

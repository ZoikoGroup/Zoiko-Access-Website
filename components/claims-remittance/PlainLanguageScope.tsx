"use client";

import { motion } from "framer-motion";

export default function PlainLanguageScope() {
  return (
    <section
      id="scope"
      className="relative w-full border-b border-[#E3E8F2] bg-white py-14 sm:py-16 lg:py-[72px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start gap-4"
          >
            <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
              <span className="text-[11.6px] font-semibold uppercase tracking-[0.1034em] text-[#7657E8]">
                Plain-language scope
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
              Coordination of <br className="hidden sm:inline" />
              information. Not of money.
            </h2>
          </motion.div>

          {/* Right Column: 2 Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-3.5"
          >
            {/* Card 1: What Zoiko Access is designed to do */}
            <div className="rounded-[12px] bg-[#F6F9FC] border-l-4 border-[#1F8A5B] p-5 sm:p-5.5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)]">
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#273444]">
                <strong className="font-bold text-[#273444]">
                  Zoiko Access is designed to
                </strong>{" "}
                help authorized organizations exchange and understand claim and
                remittance information where a market, contract and qualified
                partner allow.
              </p>
            </div>

            {/* Card 2: What Zoiko Access does not do */}
            <div className="rounded-[12px] bg-[#FFF4F1] border-l-4 border-[#C2413B] p-5 sm:p-5.5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)]">
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#273444]">
                <strong className="font-bold text-[#273444]">
                  Zoiko Access does not
                </strong>{" "}
                underwrite, adjudicate, settle, hold or transfer regulated
                funds, or promise reimbursement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

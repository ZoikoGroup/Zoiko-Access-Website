"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bulletPoints = [
  "Remittance advice explains the adjudicated outcome.",
  "Funds move separately, through financial parties.",
  "Providers reconcile advice with actual receipts.",
];

export default function RemittanceReconciliation() {
  return (
    <section id="remittance" className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Media */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5] shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] border border-[#E3E8F2]">
              <Image
                src="/claims-governance/remittance-review.png"
                alt="Reviewing remittance against payments"
                width={560}
                height={460}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:col-span-6 xl:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span
                className="h-[2px] w-[22px] rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                Remittance &amp; reconciliation
              </span>
            </div>

            {/* H2 Heading */}
            <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#16245A] sm:text-[40px]">
              Payer advice and receipt of
              <br />
              funds are separate.
            </h2>

            {/* Ticks List */}
            <ul className="mt-7 flex flex-col gap-3.5">
              {bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] bg-[#EEE9FD] text-[#7657E8] mt-0.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6.15078L4.95 8.02578L9 4.05078"
                        stroke="#7657E8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[15px] font-normal leading-[1.6] text-[#273444]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Note */}
            <p className="mt-6 text-[14px] font-normal leading-[1.6] text-[#5B6678]">
              No fees, amounts, remittance numbers or parties are shown in any
              example.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

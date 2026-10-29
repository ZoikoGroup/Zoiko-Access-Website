"use client";

import { motion } from "framer-motion";

export default function ExampleSequence() {
  return (
    <section
      id="sequence"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-3.5"
          >
            <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
              <span className="text-[11.3px] font-semibold uppercase tracking-[0.1062em] text-[#7657E8]">
                Governed example transaction
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
              An illustrative sequence.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center rounded-[6px] border border-dashed border-[#C5CBE0] px-3 py-1.5 self-start md:self-auto"
          >
            <span className="text-[12px] font-normal text-[#5B6678]">
              Educational · non-interactive · no amounts or payer names
            </span>
          </motion.div>
        </div>

        {/* Sequence Swimlanes - Desktop Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[16px] border border-[#E3E8F2] bg-[#FAFBFE] p-4 sm:p-6 lg:p-8 overflow-hidden shadow-sm"
        >
          {/* Lane Column Headers */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6">
            <div className="rounded-[10px] bg-[#243B73] py-3 px-2 sm:px-4 text-center">
              <span className="font-poppins text-[13px] sm:text-[14px] font-semibold text-white">
                Provider
              </span>
            </div>
            <div className="rounded-[10px] bg-[#243B73] py-3 px-2 sm:px-4 text-center">
              <span className="font-poppins text-[13px] sm:text-[14px] font-semibold text-white">
                Clearinghouse / integration
              </span>
            </div>
            <div className="rounded-[10px] bg-[#243B73] py-3 px-2 sm:px-4 text-center">
              <span className="font-poppins text-[13px] sm:text-[14px] font-semibold text-white">
                Payer
              </span>
            </div>
            <div className="rounded-[10px] bg-[#243B73] py-3 px-2 sm:px-4 text-center">
              <span className="font-poppins text-[13px] sm:text-[14px] font-semibold text-white">
                Financial institution
              </span>
            </div>
          </div>

          {/* Lane Vertical Background Lines for visual connection */}
          <div className="relative flex flex-col gap-3.5">
            {/* Step 1: Provider -> Clearinghouse */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
              <div className="col-span-2 rounded-[10px] bg-white border border-[#E3E8F2] p-3 sm:p-3.5 flex items-center gap-3 shadow-[0px_10px_30px_0px_rgba(36,59,115,0.06)] hover:shadow-md transition">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                  1
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#273444]">
                  Claim submitted →
                </span>
              </div>
            </div>

            {/* Step 2: Clearinghouse -> Payer */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
              <div className="col-start-2 col-span-2 rounded-[10px] bg-white border border-[#E3E8F2] p-3 sm:p-3.5 flex items-center gap-3 shadow-[0px_10px_30px_0px_rgba(36,59,115,0.06)] hover:shadow-md transition">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                  2
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#273444]">
                  Transport acknowledged → forwarded
                </span>
              </div>
            </div>

            {/* Step 3: Payer */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
              <div className="col-start-3 col-span-1 rounded-[10px] bg-white border border-[#E3E8F2] p-3 sm:p-3.5 flex items-center gap-3 shadow-[0px_10px_30px_0px_rgba(36,59,115,0.06)] hover:shadow-md transition">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                  3
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#273444]">
                  Accepted · adjudicated
                </span>
              </div>
            </div>

            {/* Step 4: Payer -> Provider (Return) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
              <div className="col-span-3 rounded-[10px] bg-[#EEE9FD] border border-[#D9CFFB] p-3 sm:p-3.5 flex items-center gap-3 shadow-[0px_10px_30px_0px_rgba(36,59,115,0.06)] hover:shadow-md transition">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                  4
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#273444]">
                  ← Remittance advice issued to provider
                </span>
              </div>
            </div>

            {/* Step 5: Payer -> Financial institution (External Scope) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
              <div className="col-start-3 col-span-2 rounded-[10px] bg-[#FAFBFD] border border-dashed border-[#C5CBE0] p-3 sm:p-3.5 flex items-center gap-3 shadow-[0px_10px_30px_0px_rgba(36,59,115,0.06)] hover:shadow-md transition">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                  5
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#5B6678]">
                  Payment instruction → settlement (outside scope)
                </span>
              </div>
            </div>

            {/* Step 6: Financial institution -> Provider (Reconcile) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center">
              <div className="col-span-4 rounded-[10px] bg-[#EEE9FD] border border-[#D9CFFB] p-3 sm:p-3.5 flex items-center gap-3 shadow-[0px_10px_30px_0px_rgba(36,59,115,0.06)] hover:shadow-md transition">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                  6
                </span>
                <span className="text-[13px] sm:text-[14px] font-medium text-[#273444]">
                  ← Settlement evidence; provider reconciles
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

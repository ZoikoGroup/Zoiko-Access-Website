"use client";

import { motion } from "framer-motion";

export default function CareOperationsBanner() {
  return (
    <section
      id="care-operations"
      className="relative w-full py-14 lg:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #031362 0%, #0326BF 50%, #7740F0 100%)",
      }}
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-[28px] font-semibold leading-[1.18] tracking-[-0.02em] text-white sm:text-[34px]">
              What is Zoiko Access for
              <br className="hidden sm:inline" />
              hospitals and clinics?
            </h2>
          </div>

          {/* Right Column: Statement Text */}
          <div className="lg:col-span-7">
            <p className="text-[17px] font-normal leading-[1.68] text-[#E6E9FF] sm:text-[19px]">
              A healthcare coordination approach designed to make service
              information, patient access workflows and authorized care handoffs
              clearer across participating organizations, while providers retain
              responsibility for clinical decisions and source records.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

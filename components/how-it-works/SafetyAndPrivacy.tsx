"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SafetyAndPrivacy() {
  return (
    <section className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-[76px] font-sans border-b border-[#DFE5F0]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        {/* Header Block */}
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6547BF]">
              Safety, privacy &amp; patient agency
            </span>
          </div>

          <h2 className="mt-3 text-[28px] font-bold tracking-[-0.0176em] text-[#243B73] sm:text-[34px] sm:leading-[40.8px]">
            Care remains with healthcare professionals.
          </h2>
        </div>

        {/* 2 Feature Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Card 1: Clinical responsibility */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-between rounded-[14px] border border-[#DFE5F0] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#B9C7EB] hover:shadow-md sm:p-8"
          >
            <div>
              <h3 className="text-[20px] font-bold leading-tight tracking-[-0.0273em] text-[#243B73] sm:text-[22px]">
                Clinical decisions stay with care teams.
              </h3>

              <p className="mt-4 text-[13px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[14px] sm:leading-[24.5px]">
                Authorized healthcare professionals and organizations remain
                responsible for clinical review, diagnosis, treatment,
                interpretation of results, and acceptance of care.
              </p>

              <p className="mt-4 text-[13px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[14px] sm:leading-[24.5px]">
                Zoiko Access does not replace clinical judgment or provide
                emergency response. For urgent medical needs, contact appropriate
                local emergency or urgent-care services.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="#four-steps"
                className="inline-flex items-center justify-center rounded-[7px] bg-[#6547BF] px-5 py-[13.5px] text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#5237a3] hover:shadow-md active:scale-[0.98]"
              >
                Clinical responsibility →
              </Link>
            </div>
          </motion.article>

          {/* Card 2: Patients & caregivers */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col justify-between rounded-[14px] border border-[#DFE5F0] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#B9C7EB] hover:shadow-md sm:p-8"
          >
            <div>
              <h3 className="text-[20px] font-bold leading-tight tracking-[-0.0273em] text-[#243B73] sm:text-[22px]">
                Personal information and delegated access need care.
              </h3>

              <p className="mt-4 text-[13px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[14px] sm:leading-[24.5px]">
                This guide asks for no symptoms, identity documents, medical
                records, or patient details. Share information only through an
                appropriate authorized process.
              </p>

              <p className="mt-4 text-[13px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[14px] sm:leading-[24.5px]">
                Helping someone else does not automatically grant access.
                Caregiver, guardian, or proxy authority requires verification and
                applicable local safeguards.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="#onward-journey"
                className="inline-flex items-center justify-center rounded-[7px] border border-[#B9C7EB] bg-white px-5 py-[13.5px] text-[13px] font-semibold text-[#4267D5] shadow-sm transition-all hover:border-[#4267D5] hover:bg-[#F6F9FC] active:scale-[0.98]"
              >
                Patients &amp; caregivers →
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

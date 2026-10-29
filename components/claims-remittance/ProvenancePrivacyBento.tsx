"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const provenanceChips = [
  "Standards-based interoperability",
  "Source system",
  "Transport acknowledgment",
  "Effective dates",
  "Identifiers",
  "Correction & version lineage",
];

export default function ProvenancePrivacyBento() {
  return (
    <section
      id="provenance"
      className="relative w-full py-16 sm:py-20 lg:py-[70px]"
      style={{
        background: `
          conic-gradient(from 45deg at 50% 50%, rgba(243, 239, 254, 1) 100%, rgba(192, 172, 255, 1) 100%),
          #F6F9FC
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-3.5 mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center rounded-[6px] bg-[#EEE9FD] px-2.5 py-1">
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#7657E8]">
              Interoperability, provenance & privacy
            </span>
          </div>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A]">
            Every record traceable. Every view limited.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Data provenance (wide, spans 3 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-[18px] border border-[#E3E8F2] p-6 sm:p-7 flex flex-col justify-between shadow-[0px_4px_16px_rgba(0,0,0,0.03)]"
            style={{
              background:
                "linear-gradient(168deg, rgba(255, 255, 255, 1) 0%, rgba(243, 239, 254, 1) 100%)",
            }}
          >
            <div>
              <h3 className="font-poppins text-[18px] font-semibold text-[#16245A] mb-4">
                Data provenance
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5">
                {provenanceChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-[6px] border border-[#E3E8F2] bg-white px-3 py-1.5 text-[12.5px] font-normal text-[#243B73] shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[14px] sm:text-[14.5px] leading-[1.5] text-[#5B6678]">
              No specific EDI/API connector or partner is claimed as certified.
            </p>
          </motion.div>

          {/* Card 2: Security Concept Photo (spans 1 col, 2 rows on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 lg:row-span-2 relative min-h-[300px] lg:min-h-[344px] rounded-[18px] overflow-hidden border border-[#E3E8F2] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.03)] group"
          >
            <Image
              src="/claims-remittance/provenance-security.webp"
              alt="Digital security concept"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Card 3: Minimum Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-[0px_4px_16px_rgba(0,0,0,0.03)]"
          >
            <h3 className="font-poppins text-[18px] font-semibold text-[#16245A] mb-2">
              Minimum data
            </h3>
            <p className="text-[14px] sm:text-[14.5px] leading-[1.6] text-[#5B6678]">
              Only the fields a permitted purpose requires.
            </p>
          </motion.div>

          {/* Card 4: Purpose & Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-[0px_4px_16px_rgba(0,0,0,0.03)]"
          >
            <h3 className="font-poppins text-[18px] font-semibold text-[#16245A] mb-2">
              Purpose & roles
            </h3>
            <p className="text-[14px] sm:text-[14.5px] leading-[1.6] text-[#5B6678]">
              Access by purpose, with delegated roles.
            </p>
          </motion.div>

          {/* Card 5: Logging & Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-[0px_4px_16px_rgba(0,0,0,0.03)]"
          >
            <h3 className="font-poppins text-[18px] font-semibold text-[#16245A] mb-2">
              Logging & retention
            </h3>
            <p className="text-[14px] sm:text-[14.5px] leading-[1.6] text-[#5B6678]">
              Access is logged; records kept only as long as required.
            </p>
          </motion.div>

          {/* Card 6: Regional restrictions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 rounded-[18px] border border-[#E3E8F2] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-[0px_4px_16px_rgba(0,0,0,0.03)]"
          >
            <h3 className="font-poppins text-[18px] font-semibold text-[#16245A] mb-2">
              Regional restrictions
            </h3>
            <p className="text-[14px] sm:text-[14.5px] leading-[1.6] text-[#5B6678]">
              Confidentiality and rules follow the jurisdiction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

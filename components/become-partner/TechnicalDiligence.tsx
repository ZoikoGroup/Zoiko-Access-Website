"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const technicalChips = [
  "Data minimization",
  "Identity matching",
  "Authorization",
  "Correction",
  "Audit metadata",
];

const privacyChips = [
  "Consent",
  "Purposes",
  "Retention",
  "Access boundaries",
];

export default function TechnicalDiligence() {
  return (
    <section id="technical-diligence" className="w-full bg-white py-16 sm:py-20 lg:py-[70px]">
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
              Technical diligence &amp; member data protection
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-[#16245A] sm:text-[38px] lg:text-[40px]">
            Protect members at every step.
          </h2>
        </motion.div>

        {/* 2 Cards Grid */}
        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1: Technical & Interoperability Diligence */}
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
                src="/become-partner/technical-diligence.png"
                alt="Technical diligence and data system architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                Technical &amp; interoperability diligence
              </span>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-2.5">
                {technicalChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full bg-[#F6F9FC] px-3.5 py-1.5 text-[13.5px] font-normal text-[#243B73] border border-[#E3E8F2]/60"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Card 2: Privacy & Member Data */}
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
                src="/become-partner/member-data-protection.png"
                alt="Privacy and member data protection safeguards"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#4267D5]">
                Privacy &amp; member data
              </span>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-2.5">
                {privacyChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full bg-[#F6F9FC] px-3.5 py-1.5 text-[13.5px] font-normal text-[#243B73] border border-[#E3E8F2]/60"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Alert Callout */}
              <div className="mt-6 rounded-[10px] border border-[#FFE7B8] bg-[#FFF8EA] p-4 text-[14.5px] sm:text-[15px] font-normal leading-[24px] text-[#4A3500]">
                Never share member or patient information through partnership enquiries.
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

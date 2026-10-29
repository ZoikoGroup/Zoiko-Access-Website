"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ReadinessPrinciple {
  number: number;
  title: string;
  description: string;
}

const principles: ReadinessPrinciple[] = [
  {
    number: 1,
    title: "Jurisdiction",
    description: "The market and its rules are identified.",
  },
  {
    number: 2,
    title: "Institutional authority",
    description: "The organization can lawfully participate.",
  },
  {
    number: 3,
    title: "Privacy",
    description: "Purpose and data roles are agreed.",
  },
  {
    number: 4,
    title: "Security",
    description: "Security review is approved.",
  },
  {
    number: 5,
    title: "Integration",
    description: "Technical feasibility is assessed.",
  },
  {
    number: 6,
    title: "Business review",
    description: "Commercial terms are reviewed.",
  },
];

export default function PartnerReadiness() {
  return (
    <section id="readiness" className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-[70px]">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Media */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col lg:col-span-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                Eligibility &amp; readiness principles
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-[#16245A] sm:text-[38px] lg:text-[40px]">
              Six principles every
              <br className="hidden sm:inline" /> partnership must satisfy.
            </h2>

            {/* Media Image */}
            <div className="relative mt-8 w-full overflow-hidden rounded-[18px] border border-[#E3E8F2] shadow-sm bg-slate-100">
              <Image
                src="/become-partner/readiness-review.png"
                alt="Readiness review session discussing legal, privacy, and technical feasibility"
                width={622}
                height={383}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: 6 Principle Cards */}
          <div className="flex flex-col gap-3 lg:col-span-6">
            {principles.map((principle, idx) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
                className="flex items-start gap-4 rounded-[14px] border border-[#E3E8F2] bg-white p-[22px] sm:p-[26px] shadow-sm transition-all hover:border-[#7657E8]/40 hover:shadow-md"
              >
                {/* Number Box */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEE9FD] text-[13px] font-bold text-[#7657E8]">
                  {principle.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[18px] sm:text-[19px] font-semibold leading-[26px] text-[#16245A]">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-[14.5px] sm:text-[15px] font-normal leading-[24px] text-[#5B6678]">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

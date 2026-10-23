"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const safeguards = [
  "Auditability of who did what, and when.",
  "Jurisdictional controls that follow the rules where you are.",
  "The record owner keeps authority over the record.",
  "Clinical escalation stays with clinicians.",
  "Retention follows the approved policy.",
  "Delegation only where the law allows it.",
];

export default function TrustAndSafeguards() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E1DBF9]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* Left: Heading, Checkpoints, and Not-certified callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#6D4FE6]" aria-hidden="true" />
              <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#6D4FE6] uppercase">
                Trust, safeguards and provenance
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
              What protects the process
            </h2>

            {/* Checklist */}
            <div className="mt-8 flex flex-col gap-3">
              {safeguards.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="flex items-center gap-4 rounded-[14px] border border-[#E1DBF9] bg-white px-5 py-3.5 shadow-[0px_6px_16px_0px_rgba(27,23,80,0.06)]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1EEFE]">
                    <Image
                      src="/outpatient-specialist-services/check-icon.svg"
                      alt=""
                      width={13}
                      height={13}
                    />
                  </div>
                  <span className="text-[15px] sm:text-[15.5px] font-normal leading-[1.55] text-[#1B1750]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Notice Callout Box */}
            <div className="mt-6 rounded-r-[14px] border-l-4 border-[#A28DFA] bg-white p-4.5 shadow-[0px_6px_18px_0px_rgba(27,23,80,0.06)]">
              <p className="text-[14.5px] sm:text-[15.2px] leading-[1.65] text-[#575387]">
                <strong className="font-bold text-[#1B1750]">Not certified.</strong> These are design
                principles. Nothing here is presented as externally certified.
              </p>
            </div>
          </motion.div>

          {/* Right: Big Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[500px] h-[520px] rounded-[26px] overflow-hidden bg-gradient-to-br from-[#8E7BEF] to-[#08176D] p-3.5 shadow-[0px_24px_56px_0px_rgba(27,23,80,0.25)]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  src="/outpatient-specialist-services/trust-office.png"
                  alt="A team member working in a calm office"
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

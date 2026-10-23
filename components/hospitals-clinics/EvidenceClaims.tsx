"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function EvidenceClaims() {
  const items = [
    "Approved institutional briefs, when published",
    "Published implementation guides, when published",
    "Dated evidence, with an owner and expiry",
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Visual Container with Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative h-[320px] sm:h-[400px] w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-lg bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
              {/* Decorative Frame */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/hospitals-clinics/evidence_frame.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Professional Visual */}
              <div className="relative h-full w-full">
                <Image
                  src="/hospitals-clinics/evidence_professional.png"
                  alt="Verified Clinical Evidence and Documentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading, Description & Evidenced Links List */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Eyebrow */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              EVIDENCE AND CLAIMS
            </span>

            {/* H2 */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
              Proof is shown only when it
              <br className="hidden sm:inline" />
              exists
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[640px] text-[16px] font-normal leading-[1.68] text-[#273444] sm:text-[17px]">
              There is no testimonial strip and no customer-logo strip. Any
              link below appears only when it is approved, dated and current.
            </p>

            {/* List of 3 Bordered Items */}
            <div className="mt-8 flex flex-col gap-3">
              {items.map((text, idx) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="flex items-center gap-3.5 rounded-[14px] border border-[#D9D3F5] bg-white px-5 py-3.5 shadow-sm transition-all hover:border-[#7B3FF2]/50 hover:bg-[#F8F9FE]"
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#7B3FF2]/10 text-[#7B3FF2]">
                    <FileText className="h-4 w-4" />
                  </div>
                  <span className="text-[15.5px] font-medium text-[#273444]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

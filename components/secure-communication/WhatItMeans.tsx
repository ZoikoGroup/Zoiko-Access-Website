"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const principles = [
  "Identity-checked",
  "Purpose-bound",
  "Restricted access",
  "Protected\ntransmission",
  "Traceable handoffs",
  "Accountable review",
];

export default function WhatItMeans() {
  return (
    <section id="what-it-means" className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-6 xl:col-span-6"
          >
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
              <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
                WHAT IT MEANS
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
              What “secure” means here
            </h2>

            {/* Main Statement */}
            <p className="mt-5 text-[18px] sm:text-[20px] font-medium leading-[1.5] text-[#031974]">
              Identity-checked participants, an intended purpose, restricted access, protected
              transmission, traceable handoffs and accountable review.
            </p>

            {/* Caveat */}
            <p className="mt-3 text-[14.5px] sm:text-[15px] font-normal leading-[1.65] text-[#273444]">
              These are design principles, not a claim about any available function, encryption
              method or certification. Clinical content is not kept in one universal record.
            </p>

            {/* 6 Principle Pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {principles.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2, backgroundColor: "#E6DEFE" }}
                  transition={{ duration: 0.2 }}
                  className="flex h-[67px] items-center justify-center rounded-[14px] bg-[#F1EEFE] px-3 py-2 text-center shadow-xs transition-colors"
                >
                  <span className="whitespace-pre-line text-[14px] font-semibold text-[#031974] leading-[1.25]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[580px] lg:col-span-6 xl:col-span-6"
          >
            <div className="relative overflow-hidden rounded-[24px] bg-[#F8F9FE] p-2 border border-[#E7E9F4] shadow-sm">
              <div className="relative aspect-[637/463] w-full overflow-hidden rounded-[20px]">
                <Image
                  src="/secure-communication/what-it-means-graphic.png"
                  alt="Illustration of secure communication flow and verifiable handoffs"
                  fill
                  sizes="(max-width: 768px) 100vw, 580px"
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

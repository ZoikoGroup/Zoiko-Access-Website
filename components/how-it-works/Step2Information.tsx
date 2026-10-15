"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CATEGORIES = [
  "Care settings & service categories",
  "Professional & organization roles",
  "Referral & request explanations",
  "Location & service boundaries",
] as const;

export default function Step2Information() {
  return (
    <section
      id="step-2"
      className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-[76px] font-sans border-b border-[#DFE5F0]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Visual Category Grid Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 rounded-[14px] border border-[#DFE5F0] bg-white p-7 shadow-sm sm:p-8 lg:order-1"
          >
            <h3 className="text-[19px] font-bold leading-snug tracking-[-0.0316em] text-[#243B73]">
              Understand the information first.
            </h3>

            {/* 2x2 Grid of Educational Topic Badges */}
            <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat}
                  className="flex items-center rounded-[9px] border border-[#DFE5F0] bg-[#F6F9FC] p-4 text-[13px] font-semibold text-[#243B73] transition-colors hover:border-[#B9C7EB] hover:bg-[#EEEAFE]"
                >
                  <span>{cat}</span>
                </div>
              ))}
            </div>

            {/* Clarification footnote */}
            <p className="mt-6 text-[13px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[14px] sm:leading-[24.5px]">
              These are educational topics, not a live catalog. No provider
              results, appointment slots, service ratings, or supported coverage
              are presented here.
            </p>
          </motion.div>

          {/* Right Column: Copy & Link */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 flex flex-col items-start lg:order-2"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1364em] text-[#6547BF]">
              02 / INFORMATION
            </span>

            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.0167em] text-[#243B73] sm:text-[36px] sm:leading-[43.2px]">
              2. Explore published options.
            </h2>

            <p className="mt-5 text-[16px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[18px] sm:leading-[31.5px]">
              Review published information about healthcare services and care
              pathways. Where approved local directories exist, their listings
              must identify source and currentness; a listing does not confirm
              availability or clinical suitability.
            </p>

            <p className="mt-4 text-[15px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[16px] sm:leading-[28px]">
              Check the source, its currentness, and its local scope. Published
              information does not diagnose your needs or recommend a provider’s
              clinical suitability.
            </p>

            <div className="mt-8">
              <Link
                href="#four-steps"
                className="inline-flex items-center justify-center rounded-[7px] border border-[#B9C7EB] bg-white px-5 py-[13px] text-[13px] font-semibold text-[#4267D5] shadow-sm transition-all hover:border-[#4267D5] hover:bg-[#F6F9FC] active:scale-[0.98]"
              >
                Explore healthcare services →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

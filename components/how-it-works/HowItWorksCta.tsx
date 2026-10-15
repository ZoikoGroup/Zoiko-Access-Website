"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HowItWorksCta() {
  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-[87px] font-sans"
      style={{
        background:
          "linear-gradient(122deg, rgba(242, 239, 255, 1) 0%, rgba(238, 234, 254, 1) 50%, rgba(217, 204, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-[870px] flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6547BF]">
              Understand before you act
            </span>
          </div>

          {/* Heading 2 */}
          <h2 className="mt-4 text-[28px] font-bold tracking-[-0.0176em] text-[#243B73] sm:text-[34px] sm:leading-[40.8px]">
            A clearer next step starts with better information.
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[720px] text-[15px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[16px] sm:leading-[28px]">
            Explore healthcare categories, revisit the four stages, or learn about
            responsibilities across the healthcare ecosystem.
          </p>

          {/* 3 Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            <Link
              href="#step-2"
              className="inline-flex items-center justify-center rounded-[7px] bg-[#4267D5] px-5 py-[12.5px] text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#3655b3] hover:shadow-md active:scale-[0.98]"
            >
              Explore healthcare services →
            </Link>

            <Link
              href="#step-3"
              className="inline-flex items-center justify-center rounded-[7px] border border-[#B9C7EB] bg-white px-5 py-[12.5px] text-[13px] font-semibold text-[#4267D5] shadow-sm transition-all hover:border-[#4267D5] hover:bg-[#F6F9FC] active:scale-[0.98]"
            >
              Understand care pathways
            </Link>

            <Link
              href="#onward-journey"
              className="inline-flex items-center justify-center rounded-[7px] border border-[#B9C7EB] bg-white px-5 py-[12.5px] text-[13px] font-semibold text-[#4267D5] shadow-sm transition-all hover:border-[#4267D5] hover:bg-[#F6F9FC] active:scale-[0.98]"
            >
              For healthcare organizations
            </Link>
          </div>

          {/* Disclaimer Footnote */}
          <p className="mt-8 text-[11px] font-normal text-[#5E6B7D]">
            Educational preview · No provider search, appointment request,
            referral submission, or account access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

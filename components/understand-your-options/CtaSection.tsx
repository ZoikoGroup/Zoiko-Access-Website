"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section
      className="w-full py-16 lg:py-[70px]"
      style={{
        background:
          "linear-gradient(270deg, rgba(210, 199, 255, 1) 0%, rgba(246, 243, 255, 1) 100%), linear-gradient(180deg, rgba(241, 236, 255, 1) 0%, rgba(227, 218, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[840px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              Understand before you act
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
            Ready to understand what happens
            <br />
            next?
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[640px] text-[16px] leading-[25.6px] text-[#273444]">
            Learn how requests, referrals and support work — and who owns each step.
          </p>

          {/* Fine Print */}
          <p className="mt-2 max-w-[640px] text-[12.5px] leading-[20px] text-[#5B6678]">
            Educational content. No provider results, appointment slots or referral
            acceptance are shown.
          </p>

          {/* Button Row */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/how-referrals-work"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#B9A3FF] px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-sm transition-all hover:bg-[#A58BFC]"
            >
              How referrals work →
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#D9CFFB] bg-white px-5 py-2.5 text-[14.5px] font-semibold text-[#7657E8] shadow-sm transition-colors hover:bg-[#F6F9FC]"
            >
              How Zoiko Access works
            </Link>
            <Link
              href="/healthcare-services"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#D9CFFB] bg-white px-5 py-2.5 text-[14.5px] font-semibold text-[#7657E8] shadow-sm transition-colors hover:bg-[#F6F9FC]"
            >
              Explore healthcare services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

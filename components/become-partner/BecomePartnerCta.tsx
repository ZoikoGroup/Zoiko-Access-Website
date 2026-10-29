"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BecomePartnerCta() {
  return (
    <section
      id="next-step"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#0A1A4B] via-[#102468] to-[#3550B8] py-16 sm:py-20 lg:py-[70px]"
    >
      {/* Radial Magenta / Purple Ambient Glow on the left as in Figma */}
      <div
        className="pointer-events-none absolute -top-12 -left-20 h-[560px] w-[560px] rounded-full opacity-65 blur-3xl select-none"
        style={{
          background: "radial-gradient(circle at 35% 45%, #B700DC 0%, rgba(118,87,232,0) 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto flex max-w-[960px] flex-col items-center text-center"
        >
          {/* Eyebrow - Centered with line */}
          <div className="inline-flex items-center justify-center gap-2.5">
            <span className="h-[2px] w-[22px] rounded-full bg-[#C9BDFB]" aria-hidden="true" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#C9BDFB]">
              Next step
            </span>
          </div>

          {/* Heading - Centered */}
          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-white sm:text-[38px] lg:text-[40px]">
            Start with the implementation approach.
          </h2>

          {/* Description - Centered */}
          <p className="mt-3.5 max-w-[680px] text-[15.5px] font-normal leading-[1.65] text-white/95 sm:text-[16px]">
            Understand how a governed partnership may be assessed, scoped and validated.
          </p>

          {/* Gated Note - Centered */}
          <p className="mt-2 max-w-[680px] text-[13px] font-normal leading-[21px] text-white/80">
            &ldquo;Contact our payer solutions team&rdquo; appears only when the receiving workflow is operational and approved.
          </p>

          {/* CTA Button - Centered */}
          <div className="mt-7 flex justify-center">
            <Link
              href="#pathway"
              className="inline-flex items-center justify-center rounded-[10px] bg-white px-[22px] py-[12px] text-[15px] font-semibold text-[#243B73] shadow-md transition-all hover:bg-slate-100 hover:shadow-lg"
            >
              Review the implementation approach →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

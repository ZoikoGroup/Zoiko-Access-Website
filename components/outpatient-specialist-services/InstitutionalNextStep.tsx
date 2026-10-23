"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InstitutionalNextStep() {
  return (
    <section id="next" className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background architectural window grid image */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/outpatient-specialist-services/next-team-discussion.png"
          alt="Office windows at night"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Blue-to-purple directional gradient overlay that lets windows shine through on right */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(8, 20, 105, 0.94) 0%, rgba(18, 28, 125, 0.86) 38%, rgba(55, 48, 145, 0.72) 70%, rgba(95, 82, 175, 0.58) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col max-w-[760px]"
        >
          {/* Eyebrow (no dash) */}
          <span className="text-[11.5px] sm:text-[12px] font-semibold tracking-[0.14em] text-[#CFC4FF] uppercase">
            Institutional next step
          </span>

          {/* Title */}
          <h2 className="mt-3 text-[32px] sm:text-[40px] lg:text-[44px] font-bold tracking-[-0.01em] text-white leading-[1.18]">
            Start with the overview.
          </h2>

          {/* Description */}
          <p className="mt-3.5 max-w-[660px] text-[15px] sm:text-[16px] leading-[1.65] text-[#E6E1FF]">
            When institutional contact is live for your location, this page will say so. Do not send
            patient or health details through any commercial inquiry.
          </p>

          {/* Actions: Button + Inline Text Link */}
          <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
            <Link
              href="/clinical-partnerships-contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 sm:px-8 py-3.5 text-[15px] sm:text-[15.5px] font-semibold text-[#1B1750] shadow-md transition-all hover:bg-[#F3F1FE] active:scale-[0.98]"
            >
              Explore hospital & clinic solutions
            </Link>

            <Link
              href="/care-pathways"
              className="inline-flex items-center text-[15px] sm:text-[15.5px] font-semibold text-white transition-all hover:underline hover:text-[#E6E1FF]"
            >
              Learn about interoperability
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

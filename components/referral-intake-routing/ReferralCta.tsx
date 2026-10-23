"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReferralCta() {
  return (
    <section
      className="relative w-full py-20 lg:py-24 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(163deg, rgba(2, 18, 95, 1) 0%, rgba(47, 66, 203, 1) 61%, rgba(123, 63, 242, 1) 100%)",
      }}
    >
      {/* Background Graphic Photo (image 85) */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[60%] select-none opacity-25">
        <Image
          src="/referral-intake-routing/cta-bg.png"
          alt=""
          fill
          className="object-cover object-left"
        />
      </div>

      {/* Gradient Wash */}
      <div
        className="pointer-events-none absolute inset-0 select-none opacity-90"
        style={{
          background:
            "linear-gradient(160deg, rgba(27, 47, 181, 0.94) 0%, rgba(2, 18, 95, 0.65) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex max-w-[760px] flex-col"
        >
          {/* Eyebrow */}
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            NEXT STEP
          </span>

          {/* Heading */}
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px]">
            Explore how accountable referrals could fit your organization
          </h2>

          {/* Description */}
          <p className="mt-4 text-[16px] font-normal leading-[1.65] text-[#E6E9FF] sm:text-[18px]">
            A staffed institutional contact appears only once it is verified. Until then,
            explore the published overview.
          </p>

          {/* Action Button */}
          <div className="mt-8 flex items-center">
            <Link
              href="/care-pathways"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#031974] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl active:scale-[0.98]"
            >
              Explore institution capabilities
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

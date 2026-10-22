"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnershipsBottomCta() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-28 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 select-none">
        <Image
          src="/clinical-partnerships-contact/bottom-cta-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Overlay matching Figma */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27, 47, 181, 0.88) 0%, rgba(2, 18, 95, 0.95) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* Heading */}
          <h2 className="max-w-[540px] text-[30px] font-semibold leading-[1.18] tracking-tight text-white sm:text-[36.8px]">
            Start with what clinician coordination is designed to do.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-[680px] text-[15.5px] leading-[1.65] text-[#E6E1FF] sm:text-[16px]">
            When a partnerships channel is live for your location, this page will say so. Until then,
            the overview has what you need.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/healthcare-professionals"
              className="inline-flex h-[48px] items-center justify-center rounded-[6px] bg-white px-7 text-[16px] font-semibold text-[#1B1750] shadow-sm transition-all hover:bg-white/90 hover:shadow-md"
            >
              Explore clinician solutions
            </Link>
            <Link
              href="/healthcare-professionals"
              className="inline-flex h-[48px] items-center justify-center rounded-[6px] border border-white px-7 text-[16px] font-semibold text-white transition-all hover:bg-white/10"
            >
              Learn about professional onboarding
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const riseUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const imageRise: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

export default function HowItWorksHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F2FE] font-sans">
      {/* Background radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          background:
            "radial-gradient(circle at 95% 15%, rgba(211, 195, 255, 0.95) 0%, rgba(211, 195, 255, 0) 65%)",
        }}
        aria-hidden="true"
      />

      {/* Background cover image if present */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-40">
        <Image
          src="/how-it-works/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Decorative SVG Pattern */}
      <div
        className="pointer-events-none absolute -top-24 right-[-100px] select-none opacity-70 lg:right-0"
        aria-hidden="true"
      >
        <Image
          src="/how-it-works/hero-bg-pattern.svg"
          alt=""
          width={643}
          height={1096}
          className="h-auto w-[450px] lg:w-[643px]"
        />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-[80px] lg:py-[100px]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-11"
        >
          {/* Left Column: Content */}
          <div className="relative z-10 flex flex-col items-start">
            {/* Breadcrumb pill */}
            <motion.div
              variants={riseUp}
              className="inline-flex items-center gap-2"
            >
              <span
                className="block h-1.5 w-1.5 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6547BF]">
                Explore Care / How it works
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={riseUp}
              className="mt-5 text-[40px] font-bold leading-[1.12] tracking-[-0.02em] text-[#243B73] sm:text-[48px] lg:text-[56px] lg:leading-[67.2px]"
            >
              How Zoiko
              <br />
              <span className="text-[#4267D5]">Access works</span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              variants={riseUp}
              className="mt-6 max-w-[620px] text-[15px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[17px] sm:leading-[29.75px]"
            >
              Zoiko Access is designed to help people understand healthcare
              options and coordinate supported next steps. First, choose where
              you need care. Then explore published service information, use an
              authorized route to contact or request from a participating
              organization where available, and follow status reported by the
              responsible organization. Features and eligibility vary by
              location; clinical decisions remain with healthcare professionals.
            </motion.p>

            {/* Action Links */}
            <motion.div
              variants={riseUp}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="#four-steps"
                className="inline-flex items-center justify-center gap-2 rounded-[7px] bg-[#4267D5] px-5 py-[13px] text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#3655b3] hover:shadow-md active:scale-[0.98]"
              >
                Explore the four steps →
              </Link>

              <Link
                href="#onward-journey"
                className="inline-flex items-center justify-center gap-2 rounded-[7px] border border-[#B9C7EB] bg-white px-5 py-[13px] text-[13px] font-semibold text-[#4267D5] transition-all hover:border-[#4267D5] hover:bg-[#F6F9FC] active:scale-[0.98]"
              >
                Find your pathway
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Doctor Image */}
          <motion.div
            variants={imageRise}
            className="relative z-10 flex w-full justify-center lg:justify-end"
          >
            <div className="relative h-[340px] w-full max-w-[540px] overflow-hidden rounded-tl-[120px] rounded-br-[120px] shadow-2xl sm:h-[420px] sm:rounded-tl-[150px] sm:rounded-br-[150px] lg:h-[462px] lg:w-[560px]">
              <Image
                src="/how-it-works/hero-doctor.png"
                alt="Healthcare professionals collaborating at Zoiko Access"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

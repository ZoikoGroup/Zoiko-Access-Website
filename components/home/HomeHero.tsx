"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const riseUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageRise: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#EEEAFE] font-sans">
      <Image
        src="/home/bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-0 pt-14 sm:px-10 lg:min-h-[647px] lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:px-[138px] lg:py-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:py-[100px]"
        >
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B3FD1]"
          >
            <span
              className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
              aria-hidden="true"
            />
            Healthcare access &amp; navigation
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-5 max-w-[800px] text-[44px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[56px] lg:text-[56px]"
          >
            Healthcare, <span className="text-[#4267D5]">connected</span>{" "}
            <span className="text-[#4267D5]">around you.</span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-7 max-w-[540px] text-[16px] leading-[1.9] text-[#4B5563] lg:text-[17px]"
          >
            Zoiko Access is a healthcare access and navigation ecosystem
            designed to make services easier to discover, understand and
            navigate—while helping authorized care teams coordinate next steps
            where supported.
          </motion.p>

          <motion.div
            variants={riseUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4267D5] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(66,103,213,0.3)] transition-opacity hover:opacity-90"
            >
              Explore how it works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-lg border border-[#C9D3F2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
            >
              For healthcare organizations
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageRise}
          initial="hidden"
          animate="show"
          className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px] lg:h-[647px] lg:max-w-none"
        >
          <Image
            src="/home/2.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="pointer-events-none select-none object-contain object-bottom"
          />
          <Image
            src="/home/1.png"
            alt="Smiling doctor in a white coat holding a tablet"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="select-none object-contain object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}

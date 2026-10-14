"use client";

import Link from "next/link";
import Image from "next/image";
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

export default function AboutHero() {
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

      {/* Background Vector positioned at the very top right of the section */}
      <div className="absolute top-0 right-0 z-0 w-full lg:w-[60%] h-full pointer-events-none select-none overflow-hidden">
        <Image
          src="/home/vector.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-contain object-top right-0 scale-[1.35] lg:scale-[1.5] translate-x-8 lg:translate-x-16"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-0 pt-14 sm:px-10 lg:min-h-[647px] lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:py-0">
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
            About Zoiko Access / A Zoiko Healthcare Platform
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-5 max-w-[900px] text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[48px] lg:text-[52px]"
          >
            Healthcare should be easier to find. Easier to navigate.{" "}
            <span className="text-[#4267D5]">Better connected.</span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-7 max-w-[540px] text-[16px] leading-[1.9] text-[#4B5563] lg:text-[17px]"
          >
            Healthcare is made up of skilled professionals, essential
            organizations and complex systems. But finding services,
            understanding options and coordinating the next step can still feel
            harder than it should.
          </motion.p>

          <motion.p
            variants={riseUp}
            className="mt-4 max-w-[540px] text-[16px] leading-[1.9] text-[#4B5563] lg:text-[17px]"
          >
            Zoiko Access is building a global healthcare access and coordination
            ecosystem designed to bring people and authorized healthcare
            organizations closer together— helping them discover services,
            navigate available pathways and keep track of what happens next,
            where those capabilities are supported.
          </motion.p>

          <motion.div
            variants={riseUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4267D5] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(66,103,213,0.3)] transition-opacity hover:opacity-90"
            >
              Explore our approach
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-lg border border-[#C9D3F2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
            >
              Who we serve
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageRise}
          initial="hidden"
          animate="show"
          className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[520px] lg:h-[600px] lg:max-w-none z-10 flex items-center justify-center"
        >
          {/* Right side Image with rounded top-left corner */}
          <div className="relative h-full w-full overflow-hidden rounded-tl-[160px] shadow-lg z-10">
            <Image
              src="/about/1.png"
              alt="Healthcare professional working on a laptop"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />

            {/* Overlay card/text box at the bottom of the image */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 shadow-md backdrop-blur-sm">
              <p className="text-[14px] font-semibold text-[#23327A]">
                People and care relationships at the center.
              </p>
              <p className="mt-1 text-[12px] text-[#6B7280]">
                Stock-style conceptual imagery • No staff or partner endorsement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

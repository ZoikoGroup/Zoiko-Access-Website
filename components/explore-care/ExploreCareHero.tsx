"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroContent = {
  badge: "Explore Care / Zoiko Access",
  titlePart1: "Explore healthcare options with ",
  titleHighlight: "clearer next steps.",
  description:
    "Learn about healthcare services, the people who provide them, and how care journeys may work. Zoiko Access is designed to help people find information and navigate authorized healthcare pathways, with services and next steps varying by location. This overview explains categories and responsibilities; it does not provide medical advice, a live provider directory, or appointment booking.",
  buttons: {
    primary: {
      text: "How Zoiko Access works",
      href: "/how-it-works",
    },
    secondary: {
      text: "Explore healthcare services",
      href: "/healthcare-services",
    },
  },
  image: {
    src: "/explore/1.png",
    alt: "Doctor discussing healthcare options with patients",
  },
};

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

export default function ExploreCareHero() {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF] to-[#EEEAFE] font-sans">
      {/* Background overlay image */}
      <Image
        src="/home/bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      {/* Background Vector positioned at the top right */}
      <div className="absolute top-0 right-0 z-0 h-full w-full pointer-events-none select-none overflow-hidden lg:w-[60%]">
        <Image
          src="/home/vector.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-contain object-top right-0 translate-x-8 scale-[1.35] lg:translate-x-16 lg:scale-[1.5]"
        />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-12 pt-14 sm:px-10 lg:min-h-[647px] lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:py-0">
        {/* Left Column Text Content */}
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
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-5 max-w-[500px] text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[48px] lg:text-[52px]"
          >
            {heroContent.titlePart1}
            <span className="text-[#4267D5]">{heroContent.titleHighlight}</span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-7 max-w-[560px] text-[16px] leading-[1.8] text-[#4B5563] lg:text-[17px]"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={riseUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex items-center gap-2 rounded-lg bg-[#4267D5] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(66,103,213,0.3)] transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex items-center rounded-lg border border-[#C9D3F2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
            >
              {heroContent.buttons.secondary.text}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column Image */}
        <motion.div
          variants={imageRise}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex h-[420px] w-full max-w-[560px] items-center justify-center sm:h-[520px] lg:h-[600px] lg:max-w-none"
        >
          <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

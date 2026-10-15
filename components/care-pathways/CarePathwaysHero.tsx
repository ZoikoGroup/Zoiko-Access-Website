"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const heroContent = {
  badge: "Explore Care / Understand your options",
  titlePart1: "Care pathways,",
  titleHighlight: "explained.",
  description:
    "A care pathway is a series of steps that may involve different healthcare professionals and services. Learn how those steps can connect, who is responsible for decisions, and what a request or update actually means.",
  buttons: {
    primary: {
      text: "See how pathways work →",
      href: "#four-step-model",
    },
    secondary: {
      text: "How Zoiko Access works",
      href: "/how-it-works",
    },
  },
  image: {
    src: "/care-pathways/hero.webp",
    alt: "Care professional explaining next steps to a patient and family member",
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

export default function CarePathwaysHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background texture (dots + waves) */}
      <Image
        src="/care-pathways/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      {/* Soft violet shapes behind the image */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
      >
        <div className="absolute left-[44%] top-[78%] h-[520px] w-[1100px] -rotate-[9deg] rounded-[120px] bg-gradient-to-r from-[#EEE9FD] to-[#F3F0FE]" />
        <div className="absolute left-[63%] top-[-300px] h-[480px] w-[760px] -rotate-[6deg] rounded-[140px] bg-gradient-to-br from-[#D9CCFF] via-[#CDBDFD] to-[#C3AEFA]" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 pb-16 pt-12 sm:px-10 lg:grid-cols-[minmax(0,621fr)_minmax(0,659fr)] lg:gap-x-0 lg:px-20 lg:pb-[88px] lg:pt-[89px]">
        {/* Left Column Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col gap-5 lg:pt-9"
        >
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-[#6A44D4]"
          >
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#6A44D4]"
              aria-hidden="true"
            />
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="text-[40px] font-bold leading-[1.3] text-[#23327A] sm:text-[51px] sm:leading-[62.4px]"
          >
            {heroContent.titlePart1}
            <br />
            <span className="text-[#4267D5]">{heroContent.titleHighlight}</span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="max-w-[609px] text-[16px] leading-8 text-[#5E6B85] sm:text-[18px]"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={riseUp}
            className="flex flex-wrap items-center gap-3 pt-[3px]"
          >
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex min-h-12 items-center rounded-md bg-[#4267D5] px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex min-h-12 items-center rounded-md border border-[#C9D3F2] bg-white px-5 text-[13px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
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
          className="relative z-10 aspect-[659/442] w-full overflow-hidden rounded-3xl"
        >
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 659px, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

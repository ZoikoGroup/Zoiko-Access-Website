"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import HeroShapes from "./HeroShapes";

const heroContent = {
  badge: "Explore Care / Healthcare professionals",
  description:
    "Healthcare professionals contribute different skills to prevention, assessment, treatment, rehabilitation, and ongoing support. This guide explains common professional roles and the settings where people may encounter them. Your care team and local health system can help determine which services are appropriate for your needs.",
  buttons: {
    primary: {
      text: "Compare professional roles →",
      href: "#role-families",
    },
    secondary: {
      text: "How care pathways work",
      href: "/care-pathways",
    },
  },
  image: {
    src: "/healthcare-professionals/hero.webp",
    alt: "Care professionals talking with patients in a bright clinic",
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

export default function ProfessionalsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Soft violet shapes, traced from the Figma frame (1440 × 648) */}
      <HeroShapes
        height={648}
        violetPath="M958 0 C944 16 928 38 916 64 C900 100 980 125 1120 130 C1260 135 1360 138 1440 135 L1440 0 Z"
        arcPath="M650 648 C700 610 740 580 764 552 C790 520 800 480 810 420 L1440 420 L1440 648 Z"
        arcFade={[740, 1050]}
      />

      {/* Background texture (dots + waves), blended over the shapes */}
      <Image
        src="/healthcare-professionals/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover mix-blend-multiply"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 sm:px-10 lg:min-h-[648px] lg:grid-cols-[minmax(0,631fr)_minmax(0,624fr)] lg:gap-x-[25px] lg:px-20 lg:pb-24 lg:pt-[70px]">
        {/* Left Column Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col gap-5"
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
            className="text-[40px] font-bold leading-[1.25] text-[#23327A] sm:text-[48px] sm:leading-[60px]"
          >
            Understanding healthcare
            <br />
            professionals{" "}
            <span className="text-[#4267D5]">
              and their
              <br />
              roles
            </span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="text-[16px] leading-7 text-[#5E6B85] sm:text-[17px] sm:leading-[29.6px]"
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
          className="relative z-10 aspect-[624/468] w-full overflow-hidden rounded-[10px] border border-[#E5E7EB] bg-white shadow-[0_12px_35px_rgba(118,87,232,0.03)]"
        >
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 624px, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

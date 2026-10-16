"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import HeroShapes from "./HeroShapes";

const heroContent = {
  badge: "Explore Care / Healthcare services",
  titlePart1: "Explore types of",
  titleHighlight: "healthcare services",
  description:
    "Healthcare services include different kinds of support provided by qualified professionals and care organizations. This guide explains common service categories and how they may relate to a care journey. It does not recommend a diagnosis, treatment or specialist. Available services and next steps depend on your location and the organizations responsible for providing care.",
  buttons: {
    primary: {
      text: "Understand care pathways →",
      href: "/care-pathways",
    },
    secondary: {
      text: "How Zoiko Access works",
      href: "/how-it-works",
    },
  },
  image: {
    src: "/healthcare-services/hero.webp",
    alt: "Two people reviewing general healthcare information together",
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

export default function HealthcareServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Soft violet shapes, traced from the Figma frame (1440 × 607) */}
      <HeroShapes
        height={607}
        violetPath="M880 0 C895 16 912 38 928 70 C965 130 1045 152 1145 160 C1265 170 1360 178 1440 170 L1440 0 Z"
        arcPath="M620 607 C710 560 770 480 798 400 C830 300 870 140 945 0 L1440 0 L1440 607 Z"
        arcFade={[700, 1050]}
      />

      {/* Background texture (dots + waves), blended over the shapes */}
      <Image
        src="/healthcare-services/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover mix-blend-multiply"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 sm:px-10 lg:grid-cols-[minmax(0,600fr)_minmax(0,561fr)] lg:gap-x-[131px] lg:px-[74px] lg:pb-[74px] lg:pt-[71px]">
        {/* Left Column Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col gap-5 lg:pb-3"
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
            className="text-[16px] leading-8 text-[#5E6B85] sm:text-[18px]"
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
          className="relative z-10 aspect-[561/462] w-full overflow-hidden rounded-2xl rounded-tl-[100px]"
        >
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 561px, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

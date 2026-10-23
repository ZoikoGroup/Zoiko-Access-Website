"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const heroContent = {
  badge: "Patients / Supporting someone else",
  description:
    "Family members and caregivers often help people find services, organize information and follow next steps. What you can do on someone else’s behalf depends on their choices, your verified authority, applicable law and the participating service. Learn the difference between helping someone and accessing or managing their private health information.",
  buttons: {
    primary: {
      text: "Understand caregiver permissions",
      href: "#permissions",
    },
    secondary: {
      text: "Explore patient options",
      href: "/for-patients",
    },
  },
  image: {
    src: "/for-caregivers/hero.webp",
    alt: "Doctor talking with a patient and a family member at a desk",
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

export default function CaregiversHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1A8C]">
      {/* Deep-blue wave background */}
      <Image
        src="/for-caregivers/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 sm:px-10 lg:min-h-[682px] lg:grid-cols-[minmax(0,670fr)_minmax(0,580fr)] lg:gap-x-[62px] lg:pl-[70px] lg:pr-[58px] lg:py-20">
        {/* Left Column Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col gap-5"
        >
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#D6CCFB]"
          >
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#C4B5FD]"
              aria-hidden="true"
            />
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="text-[40px] font-semibold leading-[1.12] tracking-[-0.02em] [font-family:var(--font-poppins)] sm:text-[56px] sm:leading-[62px]"
          >
            <span className="bg-gradient-to-r from-[#E6DDFF] to-[#CDBBFF] bg-clip-text text-transparent">
              Supporting someone
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#C7AEFF] to-[#B07AF8] bg-clip-text text-transparent">
              through healthcare
            </span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-4 max-w-[610px] text-[15px] leading-[29px] text-[#D5D2F0] sm:text-[17px]"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={riseUp}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex min-h-[47px] items-center rounded-[10px] bg-[#A060F2] px-[26px] text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex min-h-[47px] items-center rounded-[10px] bg-white px-[26px] text-[16px] font-semibold text-[#1D1857] transition-colors hover:bg-[#F3F0FF]"
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
          className="relative z-10 aspect-[580/413] w-full overflow-hidden rounded-tl-[90px_150px]"
        >
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 578px, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const heroContent = {
  badge: "Explore Care / Locations and availability",
  description:
    "Zoiko Access is being designed to help people discover healthcare information and coordinate appropriate next steps. What you can access depends on your selected care location, locally approved services, participating organizations and current operating conditions. Choose a care location to see the information that has been approved for publication.",
  buttons: {
    primary: {
      text: "Choose care location",
      href: "#care-location",
    },
    secondary: {
      text: "How Zoiko Access works",
      href: "/how-it-works",
    },
  },
  image: {
    src: "/locations-availability/hero.webp",
    alt: "Nurse reviewing information on a tablet with a patient",
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

export default function LocationsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Soft violet shapes, measured from the Figma frame (1440 × 667) */}
      <Image
        src="/locations-availability/hero-shapes.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none hidden select-none object-cover lg:block"
      />

      {/* Background texture (dots + waves), blended over the shapes */}
      <Image
        src="/locations-availability/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover mix-blend-multiply"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 pb-16 pt-12 sm:px-10 lg:min-h-[667px] lg:grid-cols-[minmax(0,595fr)_minmax(0,613fr)] lg:gap-x-[92px] lg:px-[70px] lg:pb-24 lg:pt-[63px]">
        {/* Left Column Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col"
        >
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2.5 pt-3 text-[12px] font-semibold uppercase tracking-wider text-[#4F3FC8]"
          >
            <span
              className="block h-2 w-2 rounded-full bg-[#8B7CF0]"
              aria-hidden="true"
            />
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-4 whitespace-nowrap text-[clamp(26px,calc(9.4vw-8px),56px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#211A5A] [font-family:var(--font-sora)] lg:text-[clamp(34px,calc(4.6vw-10px),56px)]"
          >
            Understand where
            <br />
            Zoiko Access
            <br />
            services <span className="text-[#4267D5]">are available</span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-8 max-w-[585px] text-[16px] leading-[29px] text-[#615D7E] sm:text-[17.5px]"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={riseUp}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex min-h-12 items-center rounded-xl border-2 border-[#4267D5] bg-[#4267D5] px-6 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex min-h-12 items-center rounded-xl border-2 border-[#4267D5] bg-white px-6 text-[16px] font-semibold text-[#4267D5] transition-colors hover:bg-[#F7F8FF]"
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
          className="relative z-10 aspect-[613/506] w-full overflow-hidden rounded-tl-[110px_170px]"
        >
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 613px, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

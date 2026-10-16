"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const heroContent = {
  badge: "Explore Care / Next steps / How referrals work",
  description:
    "A healthcare referral is a request or recommendation from a healthcare professional or another locally permitted source for assessment or services by a different professional or organization. Referral requirements vary by location, service and coverage. Sending a referral does not mean it has been accepted or that an appointment is booked.",
  buttons: {
    primary: {
      text: "See the referral steps →",
      href: "#referral-steps",
    },
    secondary: {
      text: "Understand local availability",
      href: "/locations-availability",
    },
  },
  image: {
    src: "/how-referrals-work/hero.webp",
    alt: "Clinician showing a patient referral information on a tablet",
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

export default function ReferralsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Violet ribbon looping behind the photo, traced from the Figma frame (1440 × 652) */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1440 652"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hrw-hero-wash" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0.45" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#ECE6FE" />
          </linearGradient>
          <linearGradient id="hrw-hero-ribbon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C2AEFA" />
            <stop offset="1" stopColor="#C9B8FA" />
          </linearGradient>
        </defs>
        <rect width="1440" height="652" fill="url(#hrw-hero-wash)" />
        <path
          d="M1232 -40 C1120 40 1020 120 1000 250 C980 380 1040 480 1010 560 C990 610 970 640 960 700"
          fill="none"
          stroke="url(#hrw-hero-ribbon)"
          strokeWidth="118"
        />
      </svg>

      {/* Background texture (dots + waves), blended over the ribbon */}
      <Image
        src="/how-referrals-work/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover mix-blend-multiply"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 pb-16 pt-12 sm:px-10 lg:min-h-[652px] lg:grid-cols-[minmax(0,622fr)_minmax(0,593fr)] lg:gap-x-[65px] lg:px-20 lg:pb-[100px] lg:pt-[102px]">
        {/* Left Column Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col gap-5"
        >
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-[#4267D5]"
          >
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#6A44D4]"
              aria-hidden="true"
            />
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="text-[42px] font-bold leading-[1.2] tracking-[-0.02em] text-[#211A5A] [font-family:var(--font-poppins)] sm:text-[60px] sm:leading-[74.4px]"
          >
            How healthcare
            <br />
            <span className="text-[#4267D5]">referrals work</span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="text-[16px] leading-[30px] text-[#2B3550] sm:text-[17px]"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={riseUp}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex min-h-12 items-center rounded-md bg-[#4267D5] px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex min-h-12 items-center rounded-md border border-[#A9B7E8] px-5 text-[13px] font-semibold text-[#2F55C7] transition-colors hover:bg-white"
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
          className="relative z-10 aspect-[593/448] w-full overflow-hidden rounded-tl-[120px_190px]"
        >
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 593px, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

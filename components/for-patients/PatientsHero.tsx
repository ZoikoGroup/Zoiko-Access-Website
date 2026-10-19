"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const heroContent = {
  badge: "Patients / Zoiko Access",
  description:
    "Healthcare involves different services, professionals and organizations. Zoiko Access is designed to help people understand available options and navigate supported next steps through participating organizations. What you can discover or do depends on your care location and the services verified for that location. A request is not a confirmed appointment, and clinical decisions remain with the responsible healthcare professional.",
  buttons: {
    primary: {
      text: "Explore patient options →",
      href: "#patient-options",
    },
    secondary: {
      text: "How Zoiko Access works",
      href: "/how-it-works",
    },
  },
  image: {
    src: "/for-patients/hero.webp",
    alt: "Two people reviewing healthcare information together",
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

export default function PatientsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1A8C]">
      {/* Deep-blue wave background */}
      <Image
        src="/for-patients/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />
      <span
        className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-60 rounded-full bg-white/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 pb-16 pt-12 sm:px-10 lg:min-h-[683px] lg:grid-cols-[minmax(0,700fr)_minmax(0,581fr)] lg:gap-x-6 lg:px-[67px] lg:pb-20 lg:pt-[75px]">
        {/* Left Column Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col gap-5"
        >
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-[#C4B5FD]"
          >
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#A78BFA]"
              aria-hidden="true"
            />
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="text-[36px] font-bold leading-[1.25] tracking-[-0.02em] text-white [font-family:var(--font-poppins)] sm:text-[48px] sm:leading-[62.5px]"
          >
            Patient access and
            <br />
            healthcare navigation,
            <br />
            made clearer.
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="max-w-[563px] text-[16px] leading-7 text-white/90"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={riseUp}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex min-h-12 items-center rounded-md bg-[#A855F7] px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex min-h-12 items-center rounded-md border border-[#C9D3F2] bg-white px-5 text-[13px] font-semibold text-[#A855F7] transition-colors hover:bg-[#F7F5FF]"
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
          className="relative z-10 aspect-[581/524] w-full overflow-hidden rounded-xl rounded-tl-[120px_190px]"
        >
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 581px, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

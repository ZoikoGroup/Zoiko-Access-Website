"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check, MapPin } from "lucide-react";

const heroContent = {
  badge: "Patients / Manage your journey",
  description:
    "Where available, Zoiko Access helps you view communication from participating healthcare organizations and updates about supported care-related requests. Messages and notifications depend on your location, account permissions, and each organization’s services.",
  buttons: {
    primary: { text: "Learn how communication works →", href: "#how-messaging-works" },
    secondary: { text: "See an example inbox", href: "#example-inbox" },
  },
  image: {
    src: "/patients-messages/hero.webp",
    alt: "Smartphone on a table showing messaging app icons",
  },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const riseUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageRise: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function MessagesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1A8C]">
      {/* Deep-blue wave background */}
      <Image
        src="/patients-messages/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 sm:px-10 xl:min-h-[655px] xl:grid-cols-[minmax(0,630px)_609px] xl:justify-between xl:gap-x-[clamp(40px,5vw,72px)] xl:py-20 xl:pl-[clamp(40px,4.7vw,68px)] xl:pr-[clamp(40px,4.7vw,68px)]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col"
        >
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-[#DCD8F7]"
          >
            <span className="block h-2 w-2 rounded-full bg-[#B9A6F9]" aria-hidden="true" />
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-5 text-[44px] font-bold leading-[1.1] tracking-[-0.02em] [font-family:var(--font-poppins)] sm:text-[66px] sm:leading-[72px]"
          >
            <span className="bg-gradient-to-r from-[#F6F1FF] to-[#DDC6FF] bg-clip-text text-transparent">
              Messages &amp;
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#CDA6FF] to-[#A060F5] bg-clip-text text-transparent">
              notifications
            </span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-7 max-w-[630px] text-[16px] leading-[26px] text-[#E4E2F7] sm:text-[17px]"
          >
            {heroContent.description}
          </motion.p>

          <motion.ul variants={riseUp} className="mt-6 flex flex-wrap gap-2.5">
            <li className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[14px] text-white">
              <MapPin className="h-3.5 w-3.5 text-[#C9B8FF]" aria-hidden="true" />
              Care location: not selected
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[14px] text-white">
              <Check className="h-3.5 w-3.5 text-[#C9B8FF]" aria-hidden="true" />
              Connected organizations only
            </li>
          </motion.ul>

          <motion.div variants={riseUp} className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex min-h-[44px] items-center rounded-md bg-[#A35BF5] px-5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex min-h-[44px] items-center rounded-md bg-white px-5 text-[15px] font-semibold text-[#5B35D5] transition-colors hover:bg-[#F3F0FF]"
            >
              {heroContent.buttons.secondary.text}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={imageRise} initial="hidden" animate="show" className="relative z-10">
          <div className="relative mx-auto aspect-[609/481] w-full max-w-[609px] overflow-hidden rounded-[18px] rounded-tl-[110px_150px]">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 609px, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Floating status card; sits under the photo below xl */}
          <div className="mx-auto mt-4 max-w-[609px] rounded-xl bg-white px-4 py-4 shadow-[0_12px_30px_rgba(10,20,90,0.25)] sm:max-w-[280px] xl:absolute xl:bottom-[30px] xl:left-[-28px] xl:mt-0">
            <p className="text-[15px] font-semibold text-[#1D2A6B] [font-family:var(--font-poppins)]">
              Message submitted
            </p>
            <p className="mt-1.5 flex gap-2 text-[11px] leading-[21px] text-[#5B6180]">
              <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#22C55E]" aria-hidden="true" />
              Sent to the connected service. This doesn’t mean a professional has read it yet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

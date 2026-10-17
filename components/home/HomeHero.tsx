"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Compass, FileText, Search, Users } from "lucide-react";

const HIGHLIGHTS = [
  // Label widths keep each label on two lines, as in the design.
  { label: "Discover services", icon: Search, width: "max-w-[70px]" },
  { label: "Understand your options", icon: FileText, width: "max-w-[80px]" },
  { label: "Navigate next steps", icon: Compass, width: "max-w-[70px]" },
  {
    label: "Stay supported through your journey",
    icon: Users,
    width: "max-w-[130px]",
  },
] as const;

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

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F1EEFE] xl:bg-white">
      {/* Clinic background with the white curve, from the Figma frame (1441 × 651) */}
      <Image
        src="/home/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none hidden select-none object-cover object-right xl:block"
      />

      <div className="relative mx-auto max-w-[1440px] xl:min-h-[651px]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 px-6 pb-12 pt-12 sm:px-10 xl:w-[620px] xl:px-0 xl:pb-16 xl:pl-[71px] xl:pt-[60px]"
        >
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F46C0]"
          >
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#7C5CE8]"
              aria-hidden="true"
            />
            Healthcare access &amp; navigation
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-4 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] text-[#243B73] [font-family:var(--font-poppins)] sm:text-[64px] sm:leading-[66px]"
          >
            Find Care.
            <br />
            <span className="text-[#494CF5]">Navigate</span>
            <br />
            <span className="bg-gradient-to-r from-[#7E5CFE] to-[#A774F7] bg-clip-text text-transparent">
              what’s next
            </span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-6 max-w-[500px] text-[17px] leading-[30px] text-[#526174] sm:text-[18px]"
          >
            Zoiko Access makes healthcare easier to discover, understand and
            navigate—connecting you with trusted services and support across
            the healthcare ecosystem.
          </motion.p>

          <motion.div
            variants={riseUp}
            className="mt-8 flex flex-wrap items-center gap-8"
          >
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[50px] items-center gap-2 rounded-md bg-[#0148EE] px-10 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Explore how it works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              className="inline-flex min-h-[50px] items-center rounded-md border border-[#B5CCEC] bg-white px-[22px] text-[15px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
            >
              For healthcare organizations
            </Link>
          </motion.div>

          <motion.ul
            variants={riseUp}
            className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-nowrap sm:gap-x-6"
          >
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE6FF] text-[#5F46C0]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span
                    className={`text-[12px] leading-4 text-[#1E293B] ${item.width}`}
                  >
                    {item.label}
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Woman with phone and the floating Zoiko Access app card */}
        <motion.div
          variants={imageRise}
          initial="hidden"
          animate="show"
          className="relative mx-6 mb-10 h-[360px] overflow-hidden rounded-3xl bg-[url(/home/hero-bg.webp)] bg-cover bg-right sm:mx-10 sm:h-[460px] md:h-[560px] xl:absolute xl:inset-0 xl:m-0 xl:h-auto xl:overflow-visible xl:rounded-none xl:bg-none"
        >
          <div className="absolute inset-y-0 left-1/2 aspect-[636/652] -translate-x-1/2 xl:inset-y-auto xl:bottom-0 xl:left-[50%] xl:w-[44.2%] xl:translate-x-0">
            <Image
              src="/home/hero-person.webp"
              alt="Woman smiling at her phone while using Zoiko Access"
              fill
              priority
              sizes="(min-width: 1280px) 44vw, 90vw"
              className="object-contain object-bottom"
            />
          </div>
          <div className="absolute left-1/2 top-0 aspect-[940/577] w-full max-w-[940px] -translate-x-1/2 xl:left-[34.86%] xl:w-[65.28%] xl:max-w-none xl:translate-x-0">
            <Image
              src="/home/hero-network.webp"
              alt="Zoiko Access app connecting patients, clinicians, hospitals, labs, organizations and partners"
              fill
              priority
              sizes="(min-width: 1280px) 65vw, 100vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

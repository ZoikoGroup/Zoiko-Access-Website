"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CircleCheck, Clock3 } from "lucide-react";

const heroContent = {
  badge: "Patients / Manage your journey",
  description:
    "Track appointment requests and confirmed visits with participating healthcare organizations, where this service is available. A request, a held time, and a confirmed appointment are different states; only the responsible organization can confirm a booking.",
  buttons: {
    primary: { text: "Learn how appointments work", href: "#three-layers" },
    secondary: { text: "See what each status means", href: "#status-legend" },
  },
  image: {
    src: "/appointments-requests/hero.webp",
    alt: "Smiling woman standing by an office window",
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

const statusChips = [
  {
    icon: Clock3,
    title: "Requested",
    text: "Awaiting the organization",
    className: "xl:left-[-72px] xl:top-[140px] xl:w-[232px]",
  },
  {
    icon: CircleCheck,
    title: "Confirmed",
    text: "Only by the responsible organization",
    className: "xl:left-[-109px] xl:top-[277px] xl:w-[259px]",
  },
];

export default function AppointmentsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1A8C]">
      {/* Deep-blue wave background */}
      <Image
        src="/appointments-requests/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 sm:px-10 xl:min-h-[689px] xl:grid-cols-[minmax(0,620px)_528px] xl:justify-between xl:gap-x-[clamp(40px,7.4vw,107px)] xl:pl-[clamp(40px,6.6vw,95px)] xl:pr-[clamp(40px,6.25vw,90px)] xl:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col"
        >
          <motion.p
            variants={riseUp}
            className="text-[13px] font-semibold uppercase tracking-[0.02em] text-white"
          >
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-14 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] [font-family:var(--font-poppins)] sm:text-[64px] sm:leading-[64px] xl:text-[clamp(52px,4.45vw,64px)] xl:leading-[1]"
          >
            <span className="xl:whitespace-nowrap bg-gradient-to-r from-[#F6F1FF] to-[#DDC6FF] bg-clip-text text-transparent">
              Appointments &amp;
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#CDA6FF] to-[#A060F5] bg-clip-text text-transparent">
              requests
            </span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-6 max-w-[585px] text-[17px] leading-[29px] text-[#E4E2F7] sm:text-[18.5px]"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={riseUp}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex min-h-12 items-center rounded-full bg-[#A35BF5] px-7 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex min-h-12 items-center rounded-full bg-white px-7 text-[16px] font-semibold text-[#0E1E6E] transition-colors hover:bg-[#F3F0FF]"
            >
              {heroContent.buttons.secondary.text}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageRise}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <div className="relative mx-auto aspect-[528/423] w-full max-w-[528px] overflow-hidden rounded-[20px] rounded-tl-[120px_150px]">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 528px, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Floating status chips; stacked under the photo on small screens */}
          <ul className="mx-auto mt-4 flex max-w-[528px] flex-col gap-3 sm:flex-row xl:mt-0 xl:max-w-none">
            {statusChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <li
                  key={chip.title}
                  className={`flex w-full items-center gap-3 rounded-2xl bg-white px-[18px] py-4 shadow-[0_12px_30px_rgba(10,20,90,0.25)] sm:max-w-[260px] xl:absolute ${chip.className}`}
                >
                  <Icon className="h-7 w-7 shrink-0 text-[#1A2591]" aria-hidden="true" />
                  <div>
                    <p className="text-[14px] font-semibold text-[#0E1E6E]">
                      {chip.title}
                    </p>
                    <p className="text-[12px] leading-[19px] text-[#5B6180]">
                      {chip.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

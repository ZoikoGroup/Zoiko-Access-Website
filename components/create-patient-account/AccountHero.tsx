"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ShieldCheck, UserRound } from "lucide-react";

const heroContent = {
  badge: "Patients / Get started",
  description:
    "A Zoiko Access patient account is designed to help eligible people manage supported healthcare access steps in participating locations. Account creation is available only where local enrollment has been approved. Services, records and appointments depend on separate permissions and participating organizations.",
  buttons: {
    primary: { text: "Explore patient services", href: "/for-patients" },
    secondary: { text: "Learn about caregivers and families", href: "/for-caregivers" },
  },
  image: {
    src: "/create-patient-account/hero.webp",
    alt: "Person typing on a laptop next to a stethoscope",
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

const chips = [
  {
    icon: ShieldCheck,
    title: "Secure, policy-gated setup",
    text: "Backend decides eligibility",
    className: "xl:right-[-14px] xl:top-[22px]",
  },
  {
    icon: UserRound,
    title: "Account ≠ care",
    text: "Records and bookings need separate permissions",
    className: "xl:right-[-14px] xl:top-[352px]",
  },
];

export default function AccountHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1A8C]">
      {/* Deep-blue wave background */}
      <Image
        src="/create-patient-account/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 sm:px-10 xl:min-h-[689px] xl:grid-cols-[minmax(0,640px)_549px] xl:justify-between xl:gap-x-[clamp(40px,10vw,170px)] xl:py-20 xl:pl-[clamp(40px,5.1vw,73px)] xl:pr-[clamp(40px,5.2vw,74px)]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col"
        >
          <motion.p
            variants={riseUp}
            className="text-[13px] font-semibold uppercase tracking-[0.02em] text-[#D6D2F5]"
          >
            {heroContent.badge}
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-3 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] [font-family:var(--font-poppins)] sm:text-[64px] sm:leading-[64px]"
          >
            <span className="bg-gradient-to-r from-[#F6F1FF] to-[#DDC6FF] bg-clip-text text-transparent xl:whitespace-nowrap">
              Create a patient
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#CDA6FF] to-[#A060F5] bg-clip-text text-transparent">
              account
            </span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-6 max-w-[580px] text-[17px] leading-[29px] text-[#E4E2F7] sm:text-[18.5px]"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={riseUp}
            className="mt-6 flex flex-wrap items-center gap-3.5"
          >
            <Link
              href={heroContent.buttons.primary.href}
              className="inline-flex min-h-12 items-center rounded-lg bg-[#B26CF6] px-7 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {heroContent.buttons.primary.text}
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="inline-flex min-h-12 items-center rounded-lg bg-white px-7 text-[16px] font-semibold text-[#0E1E6E] transition-colors hover:bg-[#F3F0FF]"
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
          <div className="relative mx-auto aspect-[549/400] w-full max-w-[549px] overflow-hidden rounded-[20px] rounded-tl-[110px_140px]">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 549px, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Floating chips; stacked under the photo below xl */}
          <ul className="mx-auto mt-4 flex max-w-[549px] flex-col gap-3 sm:flex-row xl:mt-0 xl:max-w-none">
            {chips.map((chip) => {
              const Icon = chip.icon;
              return (
                <li
                  key={chip.title}
                  className={`flex w-full items-center gap-3.5 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_30px_rgba(10,20,90,0.25)] sm:max-w-[252px] xl:absolute ${chip.className}`}
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

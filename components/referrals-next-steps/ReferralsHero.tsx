"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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

export default function ReferralsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1A8C]">
      {/* Deep-blue wave background */}
      <Image
        src="/referrals-next-steps/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-16 pt-12 sm:px-10 xl:min-h-[632px] xl:grid-cols-[minmax(0,600px)_604px] xl:justify-between xl:gap-x-[clamp(40px,7vw,100px)] xl:py-20 xl:pl-[clamp(40px,4.9vw,70px)] xl:pr-[clamp(40px,4.0vw,58px)]">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex flex-col">
          <motion.p
            variants={riseUp}
            className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.1em] text-[#DCD8F7]"
          >
            <span className="block h-2 w-2 rounded-full bg-[#B9A6F9]" aria-hidden="true" />
            Patients / Referrals &amp; next steps
          </motion.p>

          <motion.h1
            variants={riseUp}
            className="mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.02em] [font-family:var(--font-poppins)] sm:text-[64px] sm:leading-[66px]"
          >
            <span className="bg-gradient-to-r from-[#F6F1FF] to-[#DDC6FF] bg-clip-text text-transparent">
              Referrals &amp;
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#CDA6FF] to-[#A060F5] bg-clip-text text-transparent">
              next steps
            </span>
          </motion.h1>

          <motion.p
            variants={riseUp}
            className="mt-8 max-w-[580px] text-[16px] leading-[27px] text-[#E4E2F7] sm:text-[17px]"
          >
            View referral updates shared by participating healthcare organizations and see who is responsible for the
            next step. Status information is available only for supported services and authorized accounts.
          </motion.p>

          <motion.div variants={riseUp} className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="#five-statuses"
              className="inline-flex min-h-12 items-center rounded-lg bg-[#B26CF6] px-6 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Understand how referrals work
            </Link>
            <Link
              href="#questions"
              className="inline-flex min-h-12 items-center rounded-lg bg-white px-6 text-[16px] font-semibold text-[#1D1A5A] transition-colors hover:bg-[#F3F0FF]"
            >
              Read the questions
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageRise}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto aspect-[604/434] w-full max-w-[604px] overflow-hidden rounded-tl-[100px_130px]"
        >
          <Image
            src="/referrals-next-steps/hero.webp"
            alt="Clinician showing a patient information on a tablet in a waiting area"
            fill
            priority
            sizes="(min-width: 1280px) 604px, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

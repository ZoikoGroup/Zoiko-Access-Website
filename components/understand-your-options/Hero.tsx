"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Menu, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FBFAFF] to-[#F2EEFF] py-14 lg:py-[70px]">
      {/* Background lavender graphic */}
      <div className="pointer-events-none absolute -left-12 -top-14 h-[757px] w-[1513px] opacity-60">
        <Image
          src="/understand-your-options/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-[1327px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                Explore Care / Understand your options
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-3 text-[42px] font-bold leading-[1.05] tracking-[-0.0234em] text-[#16245A] sm:text-[54px] lg:text-[64px] [font-family:var(--font-poppins)]">
              Understand your{" "}
              <span className="bg-gradient-to-r from-[#7657E8] to-[#A88BFF] bg-clip-text text-transparent">
                options
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[560px] text-[16px] leading-[27.2px] text-[#273444] sm:text-[17px]">
              Learn how Zoiko Access works, what kinds of healthcare services
              exist and how care pathways connect organizations — before you
              take any step. This page explains options, not treatment
              recommendations, and what&apos;s available depends on your location.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#places-to-start"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#7657E8] px-[22px] py-[12px] text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-[#6547BF]"
              >
                Explore your options →
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-[10px] border-2 border-[#D9CFFB] bg-white px-[22px] py-[12px] text-[15px] font-semibold text-[#243B73] shadow-sm transition-colors hover:bg-[#F6F9FC]"
              >
                See how it works
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual Artwork & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            {/* Visual Container */}
            <div className="relative h-[440px] w-full max-w-[540px]">
              {/* Top Arch Gradient */}
              <div
                className="absolute right-0 top-[-10px] h-[440px] w-[420px] rounded-t-[220px] opacity-90"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(185, 163, 255, 1) 0%, rgba(118, 87, 232, 1) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Bottom Arch Accent */}
              <div
                className="absolute right-12 top-[380px] h-[120px] w-[260px] rounded-b-[140px] bg-[#D9CFFB]"
                aria-hidden="true"
              />

              {/* Doctor Main Image Card */}
              <div className="absolute left-0 top-[30px] h-[390px] w-full overflow-hidden rounded-[28px] border-[6px] border-white bg-white/20 shadow-[0px_30px_60px_0px_rgba(36,59,115,0.22)]">
                <Image
                  src="/understand-your-options/hero-doctor.webp"
                  alt="Doctor reviewing care options"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -right-2 top-[70px] z-10 flex items-center gap-2.5 rounded-[14px] bg-white/95 px-3.5 py-2.5 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.16)] backdrop-blur-md"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#EEE9FD] text-[#7657E8]">
                  <Target className="h-4 w-4" />
                </div>
                <span className="text-[13px] font-semibold text-[#16245A]">
                  Choose a location
                </span>
              </motion.div>

              {/* Floating Badge 2: Mid Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -right-1 top-[170px] z-10 flex items-center gap-2.5 rounded-[14px] bg-white/95 px-3.5 py-2.5 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.16)] backdrop-blur-md"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#EEE9FD] text-[#7657E8]">
                  <Menu className="h-4 w-4" />
                </div>
                <span className="text-[13px] font-semibold text-[#16245A]">
                  Published options
                </span>
              </motion.div>

              {/* Floating Badge 3: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-4 bottom-[20px] z-10 flex items-center gap-2.5 rounded-[14px] bg-white/95 px-3.5 py-2.5 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.16)] backdrop-blur-md"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#EEE9FD] text-[#7657E8]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <span className="text-[13px] font-semibold text-[#16245A]">
                  Clear next steps
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

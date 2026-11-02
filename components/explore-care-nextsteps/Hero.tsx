"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FBFAFF] to-[#F2EEFF] py-12 lg:py-[70px]">
      {/* Background lavender layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/explore-care-nextsteps/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        {/* Radial tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 85% 20%, rgba(230, 222, 255, 0.85) 0%, rgba(230, 222, 255, 0) 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                Explore Care / Next steps
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-4 text-[42px] font-bold leading-[1.05] tracking-[-0.025em] text-[#16245A] sm:text-[54px] lg:text-[60px] [font-family:var(--font-poppins)]">
              Know what <br />
              happens <span className="text-[#6A4FE0]">next</span>
            </h1>

            {/* Lede */}
            <p className="mt-4 max-w-[560px] text-[16.5px] leading-[26.4px] text-[#273444] sm:text-[17px] sm:leading-[27.2px]">
              Requests, referrals and support each have a different responsible owner, and availability is local. Learn
              what each next step means before you take it — a request isn&apos;t a confirmation, and support isn&apos;t
              clinical advice.
            </p>

            {/* CTA Button Row */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#choose-path"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#7657E8] px-[22px] py-[12px] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(118,87,232,0.25)] transition-all hover:bg-[#6547BF] hover:shadow-[0_10px_24px_rgba(101,71,191,0.35)]"
              >
                Choose the right next step →
              </Link>
              <Link
                href="#referrals"
                className="inline-flex items-center justify-center rounded-[10px] border-2 border-[#D9CFFB] bg-white px-[22px] py-[12px] text-[15px] font-semibold text-[#243B73] transition-colors hover:bg-[#F6F9FC]"
              >
                How referrals work
              </Link>
            </div>

            {/* Location & Emergency Disclaimer */}
            <p className="mt-4 text-[13.5px] leading-[21.6px] text-[#5B6678]">
              Not an emergency service. For urgent needs, contact local emergency services.
            </p>
          </motion.div>

          {/* Right Column: Illustration Art with decorative arcs, photo, and 3 floating chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto flex h-[440px] w-full max-w-[580px] items-center justify-center"
          >
            {/* Background Decorative Arcs */}
            <div
              className="absolute right-2 top-[-10px] h-[440px] w-[420px] rounded-t-[220px] opacity-90 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, rgba(185, 163, 255, 1) 0%, rgba(118, 87, 232, 1) 100%)",
              }}
            />
            <div className="absolute right-[40px] bottom-[-10px] h-[120px] w-[260px] rounded-b-[140px] bg-[#D9CFFB] pointer-events-none" />

            {/* Main Center Photo Frame */}
            <div className="relative z-10 h-[380px] w-[92%] sm:w-[530px] lg:w-[551px] overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0px_30px_60px_0px_rgba(36,59,115,0.22)]">
              <Image
                src="/explore-care-nextsteps/hero-doctor.webp"
                alt="Doctor talking with patient in modern clinic"
                fill
                priority
                sizes="(min-width: 1024px) 550px, 90vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Chip 1 - Top Right */}
            <div className="absolute right-[-10px] top-[70px] z-20 flex items-center gap-2.5 rounded-[14px] bg-white/95 px-3.5 py-2.5 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.16)] backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#EEE9FD] text-[13px] font-bold text-[#7657E8]">
                →
              </div>
              <span className="text-[13px] font-semibold text-[#16245A]">Request sent</span>
            </div>

            {/* Floating Chip 2 - Middle Right */}
            <div className="absolute right-[-8px] top-[170px] z-20 flex items-center gap-2.5 rounded-[14px] bg-white/95 px-3.5 py-2.5 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.16)] backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#EEE9FD] text-[13px] font-semibold text-[#7657E8]">
                ◷
              </div>
              <span className="text-[13px] font-semibold text-[#16245A]">Provider review</span>
            </div>

            {/* Floating Chip 3 - Bottom Left */}
            <div className="absolute left-[-16px] bottom-[30px] z-20 flex items-center gap-2.5 rounded-[14px] bg-white/95 px-3.5 py-2.5 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.16)] backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#EEE9FD] text-[13px] font-semibold text-[#7657E8]">
                ✓
              </div>
              <span className="text-[13px] font-semibold text-[#16245A]">Explicit confirmation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

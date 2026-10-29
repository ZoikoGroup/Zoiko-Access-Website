"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BecomePartnerHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0A1A4B] via-[#102468] to-[#3550B8] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-16 lg:pb-20">
      {/* Radial Magenta / Purple Ambient Glow on top-right */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[620px] w-[620px] rounded-full opacity-60 blur-3xl select-none"
        style={{
          background: "radial-gradient(circle at top right, #B700DC 0%, rgba(118,87,232,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative subtle ambient circle */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-2xl select-none"
        style={{
          background: "radial-gradient(circle, #7657E8 0%, rgba(53,80,184,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Main Hero Row */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col lg:col-span-6 xl:col-span-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#C9BDFB]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#C9BDFB]">
                Payers &amp; Insurers / Partnership opportunities
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="mt-3.5 text-[38px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[56px]">
              Explore a governed
              <br />
              payer partnership.
            </h1>

            {/* Paragraph Description */}
            <p className="mt-4 max-w-[620px] text-[15.5px] font-normal leading-[1.65] text-white/95 sm:text-[17.5px]">
              Learn how payer and benefits organizations may evaluate healthcare access and
              coordination approaches with Zoiko Access. Participation, technical integrations,
              service availability and information exchange depend on separate institutional review
              and local authorization. Coverage decisions, claim adjudication and clinical care
              remain with the responsible organizations.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#readiness"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#7657E8] px-[22px] py-[12px] text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#6847d9] hover:shadow-lg"
              >
                Explore partnership considerations →
              </Link>
              <Link
                href="#coverage-access"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/60 px-[22px] py-[12px] text-[15px] font-semibold text-white transition-all hover:bg-white/10"
              >
                Understand coverage and access
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-6 xl:col-span-6"
          >
            <div className="relative w-full max-w-[662px] overflow-hidden rounded-[20px] shadow-2xl border border-white/10">
              <Image
                src="/become-partner/hero-main.png"
                alt="Healthcare professional reviewing health plan and patient records on computer"
                width={662}
                height={424}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* 3 Quick-Link Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Card 1 */}
          <Link
            href="#who-it-serves"
            className="group flex items-center gap-4 rounded-[18px] border border-[#E3E8F2] bg-white p-[14px] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px]">
              <Image
                src="/become-partner/hero-card-who-it-serves.png"
                alt="Who this serves"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[16.5px] font-semibold leading-[22px] text-[#16245A]">
                Who this serves
              </h3>
              <p className="mt-0.5 text-[13.5px] font-normal leading-[21px] text-[#5B6678]">
                Insurers, payers, TPAs and benefits organizations.
              </p>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEE9FD] text-[#7657E8] transition-colors group-hover:bg-[#7657E8] group-hover:text-white">
              <span className="text-[16px] font-bold leading-none">→</span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="#readiness"
            className="group flex items-center gap-4 rounded-[18px] border border-[#E3E8F2] bg-white p-[14px] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px]">
              <Image
                src="/become-partner/hero-card-coverage-access.png"
                alt="Readiness principles"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[16.5px] font-semibold leading-[22px] text-[#16245A]">
                Readiness principles
              </h3>
              <p className="mt-0.5 text-[13.5px] font-normal leading-[21px] text-[#5B6678]">
                What every partnership must satisfy.
              </p>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEE9FD] text-[#7657E8] transition-colors group-hover:bg-[#7657E8] group-hover:text-white">
              <span className="text-[16px] font-bold leading-none">→</span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="#enquiry"
            className="group flex items-center gap-4 rounded-[18px] border border-[#E3E8F2] bg-white p-[14px] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px]">
              <Image
                src="/become-partner/hero-card-institutional-enquiry.png"
                alt="Institutional enquiry"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[16.5px] font-semibold leading-[22px] text-[#16245A]">
                Institutional enquiry
              </h3>
              <p className="mt-0.5 text-[13.5px] font-normal leading-[21px] text-[#5B6678]">
                How to start a conversation safely.
              </p>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEE9FD] text-[#7657E8] transition-colors group-hover:bg-[#7657E8] group-hover:text-white">
              <span className="text-[16px] font-bold leading-none">→</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

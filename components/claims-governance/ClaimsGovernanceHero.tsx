"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClaimsGovernanceHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0A1A4B] via-[#102468] to-[#3550B8] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Radial Magenta / Purple Ambient Glow on top-right */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[620px] w-[620px] rounded-full opacity-60 blur-3xl select-none"
        style={{
          background:
            "radial-gradient(circle at top right, #B700DC 0%, rgba(118,87,232,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative subtle ambient circle */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-2xl select-none"
        style={{
          background:
            "radial-gradient(circle, #7657E8 0%, rgba(53,80,184,0) 70%)",
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
              <span
                className="h-[2px] w-[22px] rounded-full bg-[#C9BDFB]"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#C9BDFB]">
                Payers &amp; Insurers / Claims &amp; Governance
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="mt-3.5 text-[38px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[60px]">
              Understand claims decisions.{" "}
              <span className="bg-gradient-to-r from-[#7657E8] to-[#7FBDFF] bg-clip-text text-transparent">
                Keep accountability clear.
              </span>
            </h1>

            {/* Paragraph Description / Lede */}
            <p className="mt-4 max-w-[620px] text-[15.5px] font-normal leading-[1.65] text-white/90 sm:text-[17.5px]">
              Explore how claim information moves between authorized
              organizations, why transmission and adjudication are different,
              how remittance relates to payment, and where governance and
              correction processes apply. Zoiko Access describes the
              coordination model; authoritative claim decisions stay with the
              responsible payer and clinical decisions stay with licensed
              professionals.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#lifecycle"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#7657E8] px-[22px] py-[12px] text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#6847d9] hover:shadow-lg"
              >
                Explore the claims lifecycle →
              </Link>
              <Link
                href="#authority"
                className="inline-flex items-center justify-center rounded-[10px] border-2 border-white px-[22px] py-[12px] text-[15px] font-semibold text-white transition-all hover:bg-white/10"
              >
                Understand coverage and access
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Main Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-6 xl:col-span-6"
          >
            <div className="relative w-full max-w-[643px] overflow-hidden rounded-[20px] shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Image
                src="/claims-governance/hero-dashboard.png"
                alt="Claims and governance coordination dashboard mockup"
                width={643}
                height={494}
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
          {/* Card 1: Who decides? */}
          <Link
            href="#authority"
            className="group flex items-center gap-4 rounded-[18px] border border-[#E3E8F2] bg-white p-[14px] shadow-[0px_20px_44px_0px_rgba(22,36,90,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px] bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
              <Image
                src="/claims-governance/hero-card-clinician.png"
                alt="Clinician"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[16.5px] font-semibold leading-[22px] text-[#16245A]">
                Who decides?
              </h3>
              <p className="mt-0.5 text-[13.5px] font-normal leading-[21px] text-[#5B6678]">
                Payer, provider, billing party and platform roles.
              </p>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEE9FD] text-[#7657E8] transition-colors group-hover:bg-[#7657E8] group-hover:text-white">
              <span className="text-[16px] font-bold leading-none">→</span>
            </div>
          </Link>

          {/* Card 2: Remittance ≠ payment */}
          <Link
            href="#remittance"
            className="group flex items-center gap-4 rounded-[18px] border border-[#E3E8F2] bg-white p-[14px] shadow-[0px_20px_44px_0px_rgba(22,36,90,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px] bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
              <Image
                src="/claims-governance/hero-card-finance.png"
                alt="Finance data"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[16.5px] font-semibold leading-[22px] text-[#16245A]">
                Remittance ≠ payment
              </h3>
              <p className="mt-0.5 text-[13.5px] font-normal leading-[21px] text-[#5B6678]">
                Advice and funds are separate.
              </p>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEE9FD] text-[#7657E8] transition-colors group-hover:bg-[#7657E8] group-hover:text-white">
              <span className="text-[16px] font-bold leading-none">→</span>
            </div>
          </Link>

          {/* Card 3: Governance */}
          <Link
            href="#governance"
            className="group flex items-center gap-4 rounded-[18px] border border-[#E3E8F2] bg-white p-[14px] shadow-[0px_20px_44px_0px_rgba(22,36,90,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px] bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
              <Image
                src="/claims-governance/hero-card-security.png"
                alt="Security"
                fill
                sizes="92px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[16.5px] font-semibold leading-[22px] text-[#16245A]">
                Governance
              </h3>
              <p className="mt-0.5 text-[13.5px] font-normal leading-[21px] text-[#5B6678]">
                Policy, audit and least privilege.
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

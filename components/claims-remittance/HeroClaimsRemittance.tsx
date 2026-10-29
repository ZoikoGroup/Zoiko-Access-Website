"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroClaimsRemittance() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24"
      style={{
        background: `
          radial-gradient(circle at 100% 0%, rgba(183, 0, 220, 0.95) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(204deg, rgba(10, 26, 75, 1) 52%, rgba(53, 80, 184, 1) 100%),
          radial-gradient(circle at 50% -10%, rgba(118, 87, 232, 0.55) 0%, rgba(118, 87, 232, 0) 65%),
          #0F1A44
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10">
        {/* Hero Top Content */}
        <div className="flex flex-col items-center text-center max-w-[920px] mx-auto">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center rounded-[6px] px-3 py-1 mb-5"
            style={{ backgroundColor: "rgba(183, 166, 255, 0.15)" }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C9BDFB]">
              Payers & Insurers / Claims & Remittance
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.08] tracking-[-0.0234em] text-white"
          >
            Claims and remittance, <br />
            <span className="text-[#B7A6FF]">explained clearly.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg leading-[1.6] text-white/85 max-w-[760px]"
          >
            Learn how healthcare claim information moves between authorized
            organizations, how a payer issues a determination, and why
            remittance advice is not the same as completed payment. Exact
            capabilities vary by market and partner.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href="#lifecycle"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#7657E8] px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-[#6849db] shadow-[0px_4px_16px_rgba(118,87,232,0.35)]"
            >
              Explore the coordination journey →
            </Link>
            <Link
              href="#matrix"
              className="inline-flex items-center justify-center rounded-[10px] border-2 border-white px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
            >
              Explore payer integrations
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-4 items-stretch"
        >
          {/* Card 1: Revenue cycle photo (spans 5 cols on lg) */}
          <div className="relative lg:col-span-5 h-[340px] sm:h-[360px] rounded-[20px] overflow-hidden group shadow-[0px_10px_30px_rgba(0,0,0,0.25)]">
            <Image
              src="/claims-remittance/hero-revenue-cycle.webp"
              alt="Revenue-cycle professional reviewing financial documents"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1244]/80 via-transparent to-transparent pointer-events-none" />
            <div
              className="absolute left-4 right-4 bottom-4 rounded-[12px] p-3.5 sm:p-4 backdrop-blur-md"
              style={{ backgroundColor: "rgba(15, 26, 68, 0.78)" }}
            >
              <p className="text-[14px] sm:text-[15px] font-medium leading-[1.5] text-white">
                Claim data and remittance advice are different records.
              </p>
            </div>
          </div>

          {/* Right Area: Cards 2, 3, 4 (spans 7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Card 2: Equation Banner (Remittance Advice ≠ Paid) */}
            <div
              className="rounded-[20px] p-6 sm:p-7 flex flex-col justify-between shadow-[0px_10px_30px_rgba(0,0,0,0.18)]"
              style={{
                background:
                  "linear-gradient(160deg, rgba(36, 59, 115, 1) 0%, rgba(66, 103, 213, 1) 100%)",
              }}
            >
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                <span className="rounded-[8px] bg-white/12 border border-white/25 px-3 py-1.5 text-[15px] sm:text-[17px] font-semibold tracking-[0.04em] text-white">
                  REMITTANCE ADVICE
                </span>
                <span className="font-poppins text-3xl sm:text-4xl font-bold text-[#B7A6FF]">
                  ≠
                </span>
                <span className="rounded-[8px] bg-white/12 border border-white/25 px-3 py-1.5 text-[15px] sm:text-[17px] font-semibold tracking-[0.04em] text-[#FFD3D3] line-through decoration-2">
                  PAID
                </span>
              </div>
              <p className="text-[14px] sm:text-[15px] leading-[1.6] text-white/85">
                Advice explains adjudicated amounts. Only settlement evidence
                shows funds moved.
              </p>
            </div>

            {/* Bottom 2 sub-cards (Who decides + Informational only) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {/* Card 3: Who decides? */}
              <div className="rounded-[20px] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-[0px_10px_30px_rgba(36,59,115,0.08)]">
                <div>
                  <h3 className="font-poppins text-[19px] sm:text-[20px] font-semibold leading-tight text-[#16245A]">
                    Who decides?
                  </h3>
                  <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-[#5B6678]">
                    The responsible payer or administrator alone determines
                    claim outcomes. Providers and payers retain fund-flow
                    authority.
                  </p>
                </div>
              </div>

              {/* Card 4: Informational only badge */}
              <div
                className="rounded-[20px] p-6 sm:p-7 flex items-start gap-3.5 border border-white/12 shadow-[0px_10px_30px_rgba(0,0,0,0.18)]"
                style={{ backgroundColor: "#1B2963" }}
              >
                <div className="pt-1 flex-shrink-0">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5B544] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F5B544] shadow-[0_0_0_5px_rgba(245,181,68,0.2)]" />
                  </span>
                </div>
                <p className="text-[14px] sm:text-[15px] leading-[1.6] text-white/90">
                  <span className="font-bold text-white">Informational only.</span>{" "}
                  Not an authenticated claims portal. No live claims, amounts or
                  patient data.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

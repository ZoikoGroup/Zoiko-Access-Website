"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReferralHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#DBE5ED]">
      {/* Background Subtle Map / Grid Texture */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-30">
        <Image
          src="/referral-intake-routing/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Hero Gradient SVG Overlay */}
      <div className="pointer-events-none absolute -right-20 -top-28 h-[850px] w-[1100px] select-none opacity-45">
        <Image
          src="/referral-intake-routing/hero-gradient-overlay.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Eyebrow & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Eyebrow / Breadcrumb */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              HOSPITALS &amp; CLINICS / REFERRAL INTAKE &amp; ROUTING
            </span>

            {/* H1 Heading */}
            <h1 className="mt-4 text-[38px] font-bold leading-[1.12] tracking-[-0.0188em] sm:text-[52px] lg:text-[62px]">
              <span className="bg-gradient-to-b from-[#031974] via-[#241C59] to-[#714CFE] bg-clip-text text-transparent">
                Referral intake and
                <br />
                routing with accountable
                <br />
                handoffs
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="mt-6 max-w-[620px] text-[16.5px] font-normal leading-[1.68] text-[#273444] sm:text-[18px]">
              Learn how referrals can move between authorized care organizations
              with clearer receipt, review, and acceptance states. Receiving
              professionals remain responsible for clinical decisions.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="#lifecycle"
                className="inline-flex items-center justify-center rounded-full bg-[#714CFE] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#5e38eb] hover:shadow-lg active:scale-[0.98]"
              >
                Understand the referral journey
              </Link>
              <Link
                href="/care-pathways"
                className="inline-flex items-center justify-center rounded-full border border-[#031974] bg-white px-6 py-3 text-[15px] font-semibold text-[#031974] transition-all hover:bg-[#031974]/5 active:scale-[0.98]"
              >
                Explore institution capabilities
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Circular Figures with Dashed Concentric Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative h-[480px] w-[480px] max-w-full">
              {/* Outer Dashed Ring */}
              <div className="absolute inset-5 rounded-full border-2 border-dashed border-[#DED3FF] pointer-events-none" />

              {/* Main Central Circular Photo (345px) */}
              <div
                className="absolute left-1/2 top-1/2 h-[320px] w-[320px] sm:h-[345px] sm:w-[345px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] border-white shadow-[0_18px_40px_rgba(47,66,203,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                }}
              >
                <Image
                  src="/referral-intake-routing/hero-photo-1.png"
                  alt="Clinical Referral Consultation"
                  fill
                  sizes="345px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Top-Left Small Circle (144px) */}
              <div
                className="absolute top-4 left-0 h-[130px] w-[130px] sm:h-[144px] sm:w-[144px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_18px_40px_rgba(47,66,203,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                }}
              >
                <Image
                  src="/referral-intake-routing/hero-photo-2.png"
                  alt="Doctor Reviewing Referral Records"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>

              {/* Bottom-Right Small Circle (125px) */}
              <div
                className="absolute bottom-6 right-2 h-[115px] w-[115px] sm:h-[125px] sm:w-[125px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_18px_40px_rgba(47,66,203,0.25)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                }}
              >
                <Image
                  src="/referral-intake-routing/hero-photo-3.png"
                  alt="Laboratory Specialist Diagnostic Team"
                  fill
                  sizes="125px"
                  className="object-cover"
                />
              </div>

              {/* Pill Badge at bottom */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-[#031974] px-4 py-2 text-[13px] font-semibold tracking-[0.07em] text-white shadow-md">
                  Illustrative imagery
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

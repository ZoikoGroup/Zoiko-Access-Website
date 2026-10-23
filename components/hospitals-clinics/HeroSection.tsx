"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1EEFE] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#DBE5ED]">
      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-45">
        <Image
          src="/hospitals-clinics/hero_bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Decorative Vector Gradient Shape */}
      <div className="pointer-events-none absolute -right-28 -top-32 h-[850px] w-[1100px] select-none opacity-50">
        <Image
          src="/hospitals-clinics/hero_shape.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Eyebrow, Heading, Description & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Eyebrow / Breadcrumb */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              HOSPITALS &amp; CLINICS / FOR HOSPITALS &amp; CLINICS
            </span>

            {/* H1 Title */}
            <h1 className="mt-4 text-[38px] font-bold leading-[1.08] tracking-[-0.018em] sm:text-[52px] lg:text-[60px]">
              <span className="bg-gradient-to-b from-[#031974] via-[#031974] to-[#724CFF] bg-clip-text text-transparent">
                Help hospital and clinic teams coordinate the next step in care.
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="mt-6 max-w-[660px] text-[16px] font-normal leading-[1.7] text-[#273444] sm:text-[17.5px]">
              Zoiko Access is being designed to help healthcare organizations
              make patient access and authorized care handoffs easier to
              understand and coordinate. Participating organizations retain
              control of their scheduling, source records, clinical decisions
              and operational responsibilities. Specific connections and
              workflows are available only where approved and supported.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#care-operations"
                className="inline-flex items-center justify-center rounded-[20px] bg-[#724CFF] px-7 py-3 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#6039e6] hover:shadow-lg active:scale-[0.98]"
              >
                Explore care operations
              </Link>
              <Link
                href="#interoperability"
                className="inline-flex items-center justify-center rounded-[20px] border border-[#031974] px-7 py-3 text-[15px] font-semibold text-[#031974] transition-all hover:bg-[#031974]/5 active:scale-[0.98]"
              >
                How integration works
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Arched Frame and Note Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[540px]">
              {/* Outer Arched Visual Container */}
              <div
                className="relative mx-auto h-[480px] w-full max-w-[500px] overflow-hidden rounded-[28px] shadow-2xl sm:h-[520px]"
                style={{
                  background:
                    "linear-gradient(129deg, #E8E2FF 0%, #D5DCFF 100%)",
                }}
              >
                {/* SVG Decorative Arch Frame */}
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <Image
                    src="/hospitals-clinics/hero_arch_frame.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Building Visual */}
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/hospitals-clinics/hero_building.png"
                    alt="Hospital Architecture"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Floating Location Note Pill */}
                <div className="absolute bottom-5 left-4 right-4 rounded-[16px] bg-white/95 px-5 py-3 shadow-lg backdrop-blur-md border border-white/60">
                  <p className="text-center text-[13px] font-normal leading-[1.5] text-[#273444]">
                    <span className="font-medium text-[#031974]">Home › Hospitals &amp; Clinics.</span>{" "}
                    No care location selected. Services depend on local authorization.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

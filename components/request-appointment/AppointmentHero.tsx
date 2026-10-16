"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppointmentHero() {
  return (
    <section className="relative w-full overflow-hidden font-sans bg-gradient-to-b from-white to-[#F4F1FF] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          background:
            "radial-gradient(circle at 85% 20%, rgba(228, 218, 255, 0.7) 0%, rgba(228, 218, 255, 0) 60%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative hero background pattern */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-30">
        <Image
          src="/request-appointment/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[#8E7BEF]"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
                Explore Care / Next steps
              </span>
            </div>

            {/* Heading 1 */}
            <h1 className="mt-3.5 font-bold tracking-tight text-[36px] leading-[1.18] sm:text-[46px] sm:leading-[1.16] lg:text-[56px] lg:leading-[1.15]">
              <span className="text-[#241C59]">Book or request</span>
              <br />
              <span className="text-[#8E7BEF]">an appointment</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[17.6px] sm:leading-[1.65] max-w-[660px]">
              In supported locations, you may be able to request an appointment
              with a participating care provider. A request is not a confirmed
              appointment. Available options, scheduling decisions and next steps
              depend on the responsible provider. This page explains the process;
              it does not offer a live request or booking service.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#care-location"
                className="inline-flex h-[48px] items-center justify-center rounded-[12px] bg-[#4267D5] px-6 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#3457bf] hover:shadow active:scale-[0.98]"
              >
                Check request availability
              </a>

              <a
                href="#authorized-process"
                className="inline-flex h-[48px] items-center justify-center rounded-[12px] border border-[#4267D5] bg-white px-6 text-[15px] font-semibold text-[#4267D5] shadow-sm transition-all duration-200 hover:bg-[#F4F1FF] active:scale-[0.98]"
              >
                Understand the process
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Illustration / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative w-full max-w-[592px] overflow-hidden rounded-tl-[150px] shadow-[0_12px_36px_rgba(36,28,89,0.08)]">
              <Image
                src="/request-appointment/hero-appointment-request.webp"
                alt="Healthcare provider consultation regarding appointment requests and care navigation"
                width={592}
                height={416}
                priority
                sizes="(max-width: 768px) 100vw, 592px"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

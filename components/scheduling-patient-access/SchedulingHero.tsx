"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SchedulingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#E7E9F4]">
      {/* Background Subtle Map Texture */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-40">
        <Image
          src="/scheduling-patient-access/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Ambient Gradient Shape */}
      <div className="pointer-events-none absolute -right-20 -top-28 h-[750px] w-[950px] select-none opacity-40">
        <Image
          src="/scheduling-patient-access/hero-bg-shape.svg"
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
              HOSPITALS &amp; CLINICS / SCHEDULING &amp; PATIENT ACCESS
            </span>

            {/* H1 Heading */}
            <h1 className="mt-4 text-[38px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[52px] lg:text-[62px]">
              <span className="bg-gradient-to-b from-[#031974] via-[#241C59] to-[#724CFF] bg-clip-text text-transparent">
                Patient access, with scheduling authority where it belongs.
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="mt-6 max-w-[640px] text-[16.5px] font-normal leading-[1.68] text-[#273444] sm:text-[18px]">
              Coordination is designed around the authoritative scheduling systems of
              each participating organization. Zoiko Access does not own appointment
              inventory and does not confirm bookings.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/clinical-partnerships-contact"
                className="inline-flex items-center justify-center rounded-full bg-[#724CFF] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#6039e6] hover:shadow-lg active:scale-[0.98]"
              >
                Discuss institutional workflows
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-[#241C59] px-6 py-3 text-[15px] font-semibold text-[#241C59] transition-all hover:bg-[#241C59]/5 active:scale-[0.98]"
              >
                See how it works
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Pill Visual with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[520px]">
              {/* Outer Arched Container */}
              <div
                className="relative mx-auto h-[480px] w-full max-w-[490px] overflow-hidden rounded-t-[240px] border-t-[6px] border-x-[6px] border-white/40 sm:h-[510px]"
                style={{
                  background: "linear-gradient(131deg, #E8E2FF 0%, #D5DCFF 100%)",
                }}
              >
                {/* SVG Illustration Backdrop */}
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  <Image
                    src="/scheduling-patient-access/hero-illustration.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Doctor & Patient Photo */}
                <div className="relative h-full w-full">
                  <Image
                    src="/scheduling-patient-access/hero-doctor.png"
                    alt="Doctor and patient consultation"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Chip 1: Top-Left */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-20 -left-4 z-10 sm:top-24 sm:-left-6"
              >
                <div className="rounded-[14px] bg-white px-3.5 py-2.5 shadow-[0_10px_26px_rgba(0,0,0,0.22)] border border-[#EBE8FA]/60">
                  <span className="text-[13px] font-semibold text-[#031974]">
                    Requests ≠ bookings
                  </span>
                </div>
              </motion.div>

              {/* Floating Chip 2: Bottom-Right */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute bottom-10 -right-2 z-10 sm:bottom-14 sm:-right-4"
              >
                <div className="rounded-[14px] bg-white px-3.5 py-2.5 shadow-[0_10px_26px_rgba(0,0,0,0.22)] border border-[#EBE8FA]/60">
                  <span className="text-[13px] font-semibold text-[#031974]">
                    Source scheduler confirms
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

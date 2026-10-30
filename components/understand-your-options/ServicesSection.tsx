"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const careSettings = [
  "Primary care",
  "Specialist care",
  "Community & home support",
  "Pharmacy & diagnostics",
  "Mental health & wellbeing",
  "Urgent & emergency information",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-16 lg:py-[70px]"
      style={{
        background:
          "linear-gradient(270deg, rgba(210, 199, 255, 1) 0%, rgba(246, 243, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Top Part: Text & Panel */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                01 / Services
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
              1. Explore types of healthcare services.
            </h2>

            {/* Description */}
            <p className="mt-4 text-[16px] leading-[25.6px] text-[#273444]">
              Healthcare happens in different settings, each suited to different
              needs. Understanding them helps you ask better questions.
            </p>

            {/* Muted subtext */}
            <p className="mt-3 text-[15px] leading-[24px] text-[#5B6678]">
              These descriptions don&apos;t decide which service is right for you,
              and a category appears locally only once it&apos;s published there.
            </p>

            {/* Button */}
            <div className="mt-7">
              <Link
                href="/healthcare-services"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#B9A3FF] px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-sm transition-all hover:bg-[#A58BFC]"
              >
                Explore healthcare services →
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Panel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-6 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)] sm:p-8"
          >
            <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
              Care settings, explained
            </h3>

            {/* 2-column Grid of care settings */}
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {careSettings.map((setting) => (
                <div
                  key={setting}
                  className="flex items-center rounded-[10px] border border-[#E3E8F2] bg-[#FBFAFF] px-4 py-3 text-[14px] leading-[22.4px] text-[#16245A] transition-colors hover:border-[#D2C7FF] hover:bg-white"
                >
                  {setting}
                </div>
              ))}
            </div>

            {/* Fine print */}
            <p className="mt-4 text-[13px] leading-[20.8px] text-[#5B6678]">
              Educational categories only — not a finder, booking tool or recommendation.
            </p>
          </motion.div>
        </div>

        {/* Bottom Strip: Large Facility Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-12 overflow-hidden rounded-[28px] shadow-[0px_20px_50px_0px_rgba(36,59,115,0.12)]"
        >
          <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[426px]">
            <Image
              src="/understand-your-options/facility-corridor.webp"
              alt="Bright healthcare facility corridor"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Caption Overlay */}
          <div className="absolute bottom-5 left-5 rounded-[12px] bg-white/92 px-3.5 py-2.5 shadow-sm backdrop-blur-sm sm:bottom-6 sm:left-6">
            <span className="text-[13.5px] font-semibold leading-[21.6px] text-[#16245A]">
              Every listing shows its source and when it was last checked.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

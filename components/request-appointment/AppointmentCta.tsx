"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AppointmentCta() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 font-sans text-white"
      style={{
        background:
          "linear-gradient(135deg, rgb(36, 28, 89) 0%, rgb(75, 63, 181) 70%, rgb(106, 88, 216) 100%)",
      }}
    >
      {/* Decorative Overlays */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full select-none"
        style={{
          background: "rgba(182, 160, 248, 0.18)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 -bottom-10 h-[260px] w-[260px] rounded-full select-none"
        style={{
          background: "rgba(182, 160, 248, 0.15)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-11">
          {/* Left Column: Heading & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-6"
          >
            <h2 className="font-bold tracking-tight text-white text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
              Understand the process.
              <br />
              Keep confirmation clear.
            </h2>

            <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#DCD6FF] sm:text-[16px] max-w-[520px]">
              A request is not a booked appointment. Responsible providers own
              scheduling and clinical decisions.
            </p>
          </motion.div>

          {/* Right Column: 2 Buttons & Footnote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-start lg:col-span-6 lg:items-start"
          >
            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/how-it-works"
                className="inline-flex h-[48px] items-center justify-center rounded-[12px] bg-white px-6 text-[15px] font-semibold text-[#241C59] shadow-sm transition-all hover:bg-[#F4F1FF] hover:shadow active:scale-[0.98]"
              >
                How Zoiko Access works
              </Link>

              <a
                href="#care-location"
                className="inline-flex h-[48px] items-center justify-center rounded-[12px] border border-white/80 bg-transparent px-6 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                Review location context
              </a>
            </div>

            {/* Footnote */}
            <p className="mt-4 text-[12.2px] font-normal leading-[1.6] text-[#DCD6FF]">
              No booking, request, tracking, or personal-data collection is
              connected.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

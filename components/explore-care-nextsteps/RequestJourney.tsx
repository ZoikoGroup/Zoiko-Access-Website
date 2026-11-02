"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const requestStages = [
  { step: "1", title: "Request sent", role: "You" },
  { step: "2", title: "Receipt", role: "Delivery confirmed" },
  { step: "3", title: "Provider review", role: "Responsible provider" },
  { step: "4", title: "Confirmed or declined", role: "Explicit decision" },
];

export default function RequestJourney() {
  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        {/* Top Split: Text & Stages Panel */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Heading, description, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Kicker */}
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              01 / Requests
            </span>

            {/* Heading */}
            <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
              1. Request ≠ confirmation.
            </h2>

            {/* Paragraphs */}
            <p className="mt-4 text-[16px] leading-[25.6px] text-[#273444]">
              Where booking is enabled, your request goes to the responsible provider. Nothing is booked until that
              provider explicitly confirms.
            </p>

            <p className="mt-2 text-[15px] leading-[24px] text-[#5B6678]">
              A receipt only means your request arrived — it isn&apos;t provider acceptance.
            </p>

            {/* Soft Purple Button */}
            <div className="mt-6">
              <Link
                href="/request-appointment"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#B9A3FF] px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-sm transition-all hover:bg-[#A58BFC]"
              >
                Request an appointment →
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Stages Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-7 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)]"
          >
            <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
              Stages of a booking request
            </h3>

            {/* Flow list */}
            <ol className="mt-4 space-y-2.5">
              {requestStages.map((stage) => (
                <li
                  key={stage.step}
                  className="flex items-center justify-between rounded-[10px] border border-[#E3E8F2] bg-[#FBFAFF] px-3.5 py-2.5 transition-colors hover:border-[#D9CFFB]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#7657E8] text-[12px] font-bold text-white">
                      {stage.step}
                    </span>
                    <span className="text-[14.5px] font-medium leading-[23.2px] text-[#16245A]">
                      {stage.title}
                    </span>
                  </div>
                  <span className="text-[12px] leading-[19.2px] text-[#5B6678]">
                    {stage.role}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Bottom Full-Width Facility Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 h-[320px] sm:h-[400px] lg:h-[426px] w-full overflow-hidden rounded-[28px] shadow-[0px_20px_50px_0px_rgba(36,59,115,0.12)]"
          style={{
            background:
              "linear-gradient(162deg, rgba(220, 211, 251, 1) 0%, rgba(199, 211, 245, 1) 100%)",
          }}
        >
          <Image
            src="/explore-care-nextsteps/healthcare-facility.webp"
            alt="Modern healthcare facility building"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Floating Caption Badge */}
          <div className="absolute bottom-5 left-5 rounded-[12px] bg-white/92 px-3.5 py-2.5 shadow backdrop-blur-sm">
            <span className="text-[13.5px] font-semibold text-[#16245A]">
              Every update names the organization that issued it.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

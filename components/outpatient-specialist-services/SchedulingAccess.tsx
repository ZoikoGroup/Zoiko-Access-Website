"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const checks = [
  "The provider’s own system is the source of truth for scheduling.",
  "A request is not a confirmation.",
  "Eligibility checks and channel handoffs happen with the provider.",
  "No appointment is ever created on this public page.",
];

export default function SchedulingAccess() {
  return (
    <section
      id="scheduling"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#C8B9FF]"
      style={{
        background: "linear-gradient(90deg, #F1EEFE 0%, #C8B9FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* Left: Big Coordinator Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[500px] h-[450px] sm:h-[480px] rounded-[26px] overflow-hidden bg-gradient-to-br from-[#8E7BEF] to-[#08176D] p-3.5 shadow-[0px_24px_56px_0px_rgba(27,23,80,0.25)]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  src="/outpatient-specialist-services/scheduling-coordinator.png"
                  alt="A scheduling coordinator at work"
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content & Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col lg:col-span-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#6D4FE6]" aria-hidden="true" />
              <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#6D4FE6] uppercase">
                Scheduling and patient access
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
              The provider owns the schedule
            </h2>

            {/* Checklist */}
            <div className="mt-8 flex flex-col gap-3.5">
              {checks.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="flex items-center gap-4 rounded-[14px] border border-[#E1DBF9] bg-white px-5 py-4 shadow-[0px_6px_16px_0px_rgba(27,23,80,0.06)]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F1EEFE]">
                    <Image
                      src="/outpatient-specialist-services/check-icon.svg"
                      alt=""
                      width={13}
                      height={13}
                    />
                  </div>
                  <span className="text-[15px] sm:text-[15.5px] font-normal leading-[1.55] text-[#1B1750]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-9 flex">
              <Link
                href="#integration"
                className="inline-flex items-center justify-center rounded-full bg-[#6D4FE6] border-2 border-[#6D4FE6] px-8 py-3.5 text-[15.5px] sm:text-[16px] font-semibold text-white shadow-md shadow-[#6D4FE6]/25 transition-all hover:bg-[#5939D8] active:scale-[0.98]"
              >
                Learn about scheduling & patient access
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

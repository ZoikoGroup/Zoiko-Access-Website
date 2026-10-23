"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const statusBadges = [
  "Initiated",
  "Transmitted",
  "Received",
  "Acknowledged",
  "Accepted",
  "Confirmed",
];

const steps = [
  {
    num: "1",
    title: "Service information",
    desc: "Read what is published for your location. Nothing is assumed.",
  },
  {
    num: "2",
    title: "Authorized inquiry or referral",
    desc: "Send a request only through an approved pathway.",
  },
  {
    num: "3",
    title: "Receiving-team acknowledgement",
    desc: "The receiving organization acknowledges it on its own terms.",
  },
  {
    num: "4",
    title: "Provider-led acceptance or clinical review",
    desc: "A qualified provider decides. Delivery is not acceptance.",
  },
  {
    num: "5",
    title: "Scheduling, if supported",
    desc: "The provider’s scheduling source confirms any visit.",
  },
  {
    num: "6",
    title: "Follow-up owner",
    desc: "The named owner carries the next step.",
  },
];

export default function JourneyBoundaries() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E1DBF9]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* Left: Heading, Status badges & 6 Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#6D4FE6]" aria-hidden="true" />
              <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#6D4FE6] uppercase">
                Patient journey boundaries
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
              Six steps, each conditional
            </h2>

            {/* Status pills bar */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {statusBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-[#E1DBF9] bg-white px-3.5 py-1 text-[13.4px] font-semibold text-[#1B1750] shadow-xs"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* 6 Steps List */}
            <div className="mt-8 flex flex-col gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="flex items-start gap-4 rounded-[14px] p-2 hover:bg-[#FAF9FE] transition-colors"
                >
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#0023B3] text-[15px] font-semibold text-white shadow-xs">
                    {step.num}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[16.3px] font-bold text-[#1B1750] leading-[1.3]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-[14.5px] leading-[1.55] text-[#575387]">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Big Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[480px] h-[520px] rounded-[26px] overflow-hidden bg-gradient-to-br from-[#8E7BEF] to-[#08176D] p-3 shadow-[0px_24px_56px_0px_rgba(27,23,80,0.25)]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <Image
                  src="/outpatient-specialist-services/journey-clinician.png"
                  alt="Doctor consulting on patient journey boundaries"
                  fill
                  sizes="(max-width: 640px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

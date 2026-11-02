"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stages = [
  {
    step: "01",
    title: "Choose location",
    desc: "Select where you need care so the right information appears.",
    fine: "Location doesn't establish eligibility.",
  },
  {
    step: "02",
    title: "Explore information",
    desc: "Review published services and pathways for that area.",
    fine: "A listing isn't a confirmation of availability.",
  },
  {
    step: "03",
    title: "Authorized next step",
    desc: "Where supported, send a request through an approved pathway.",
    fine: "A request isn't confirmed until accepted.",
  },
  {
    step: "04",
    title: "Confirmed update",
    desc: "Follow updates from the organization responsible.",
    fine: "Delivered doesn't mean reviewed.",
  },
];

export default function HowItWorksPreview() {
  return (
    <section className="w-full bg-[#FBFAFF] py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
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
              How it works, at a glance
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
            Four stages. Clear expectations.
          </h2>

          {/* Lead */}
          <p className="mt-3.5 max-w-[720px] text-[16.5px] leading-[26.4px] text-[#5B6678]">
            A request is not an appointment — each stage means something different.
          </p>
        </motion.div>

        {/* 4 Steps Row */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-[16px] border border-[#E3E8F2] bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div>
                {/* Step badge */}
                <div className="inline-flex items-center justify-center rounded-[8px] bg-[#F1ECFF] px-2.5 py-1 text-[13px] font-bold text-[#7657E8] [font-family:var(--font-poppins)]">
                  {stage.step}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[18px] font-semibold leading-[24.3px] text-[#16245A] [font-family:var(--font-poppins)]">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  {stage.desc}
                </p>
              </div>

              {/* Fine print */}
              <p className="mt-5 border-t border-[#F0F4F8] pt-3 text-[12.5px] leading-[20px] text-[#5B6678]">
                {stage.fine}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-start"
        >
          <Link
            href="/how-it-works"
            className="inline-flex items-center text-[14.5px] font-semibold text-[#7657E8] transition-colors hover:text-[#5d3ec9]"
          >
            See how it works →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

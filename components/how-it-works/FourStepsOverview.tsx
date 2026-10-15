"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Choose your care location",
    description:
      "Select the location where you need care to understand which information or services are supported. Choosing a location does not establish eligibility or grant account or medical-record access.",
    note: "Location is context—not permission, identity, or eligibility.",
    linkText: "Understand step 1 →",
    targetId: "#step-1",
  },
  {
    number: "02",
    title: "Explore published options",
    description:
      "Review published information about healthcare services and care pathways. Where approved local directories exist, their listings must identify source and currentness; a listing does not confirm availability or clinical suitability.",
    note: "A listing is not a recommendation or confirmation of availability.",
    linkText: "Understand step 2 →",
    targetId: "#step-2",
  },
  {
    number: "03",
    title: "Start an authorized next step",
    description:
      "Where the service is approved and operating, follow the available inquiry, referral or appointment-request pathway. Your request is not confirmed until the responsible organization explicitly accepts or confirms it.",
    note: "A request requires an authoritative decision by the responsible organization.",
    linkText: "Understand step 3 →",
    targetId: "#step-3",
  },
  {
    number: "04",
    title: "Understand what happens next",
    description:
      "Where supported, follow the status provided by the responsible organization and understand who owns the next action. A delivered message is not proof that a clinician has reviewed it.",
    note: "Electronic delivery does not establish clinical review.",
    linkText: "Understand step 4 →",
    targetId: "#step-4",
  },
] as const;

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function FourStepsOverview() {
  return (
    <section
      id="four-steps"
      className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-[76px] font-sans"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        {/* Header Block */}
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6547BF]">
              The journey at a glance
            </span>
          </div>

          <h2 className="mt-3 text-[28px] font-bold tracking-[-0.0176em] text-[#243B73] sm:text-[34px] sm:leading-[40.8px]">
            Four steps. Clear expectations.
          </h2>

          <p className="mt-2 text-[15px] font-normal leading-relaxed text-[#5E6B7D] sm:text-[16px] sm:leading-[28px]">
            Read the guide in order, or jump to the stage you want to understand.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {STEPS.map((step, idx) => (
            <motion.article
              key={step.number}
              custom={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col justify-between rounded-[12px] border border-[#DFE5F0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#B9C7EB] hover:shadow-md"
            >
              <div>
                {/* Step badge */}
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#EEEAFE] text-[12px] font-bold text-[#6144B9]">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="mt-4 text-[19px] font-bold leading-snug tracking-[-0.03em] text-[#243B73] group-hover:text-[#4267D5] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-3 text-[13px] font-normal leading-[1.7] text-[#5E6B7D] sm:text-[14px] sm:leading-[24.5px]">
                  {step.description}
                </p>
              </div>

              {/* Card Footer / Note & Link */}
              <div className="mt-6 flex flex-col justify-end">
                <div className="border-t border-[#DFE5F0] pt-3.5">
                  <p className="text-[11px] font-normal leading-[1.6] text-[#5E6B7D]">
                    {step.note}
                  </p>
                </div>

                <div className="mt-4">
                  <Link
                    href={step.targetId}
                    className="inline-flex items-center text-[12px] font-semibold text-[#4267D5] transition-colors hover:text-[#243B73]"
                  >
                    {step.linkText}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

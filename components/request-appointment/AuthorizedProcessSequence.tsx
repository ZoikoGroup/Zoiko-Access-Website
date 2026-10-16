"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "1",
    title: "Verify service and provider scope",
    description:
      "Confirm the care location, published organization, participating facility, permitted mode, current source, and applicable permissions.",
  },
  {
    number: "2",
    title: "Understand the date or time shown",
    description:
      "In request mode, dates and time windows are preferences. Real-time slot holds and inventory belong to a separately approved booking service.",
  },
  {
    number: "3",
    title: "Establish identity and representation",
    description:
      "Authentication and caregiver or guardian authority must meet the service’s local requirements. Family relationship is not inferred.",
  },
  {
    number: "4",
    title: "Provide only necessary information",
    description:
      "An operational service needs its approved privacy notice and minimal fields. This public page has no health-reason text box or upload.",
  },
  {
    number: "5",
    title: "Review before sending",
    description:
      "Check provider, location, service, mode, timing meaning, contact destination, change policy, and current status.",
  },
  {
    number: "6",
    title: "Send once and reconcile safely",
    description:
      "A live backend must recheck authorization, prevent duplicate requests, and reconcile uncertain outcomes before retry.",
  },
  {
    number: "7",
    title: "Read the provider-owned outcome",
    description:
      "A receipt means intake, not a confirmed appointment. The provider must explicitly establish any confirmation.",
  },
];

export default function AuthorizedProcessSequence() {
  return (
    <section
      id="authorized-process"
      className="w-full py-16 sm:py-20 lg:py-24 font-sans"
      style={{
        background:
          "linear-gradient(180deg, rgba(246, 243, 255, 1) 0%, rgba(236, 231, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[720px]"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-[#8E7BEF]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
              How an authorized process works
            </span>
          </div>

          {/* Heading 2 */}
          <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
            From eligibility to an
            <br />
            attributable outcome.
          </h2>

          {/* Description */}
          <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
            The sequence below is educational. No identity, patient details,
            medical information, or appointment preferences are collected here.
          </p>
        </motion.div>

        {/* 7-Step List */}
        <div className="mt-12 space-y-4 sm:space-y-5">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              className="flex items-start gap-4 sm:gap-6"
            >
              {/* Number and vertical connecting line */}
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#4267D5] text-[15px] sm:text-[16px] font-semibold text-white shadow-sm">
                  {step.number}
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className="h-8 sm:h-10 w-[2px] bg-[#C6B8ED]"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Step Card */}
              <div className="flex-1 rounded-[16px] border border-[#E3DEF8] bg-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(36,28,89,0.03)] transition-all hover:shadow-[0_4px_20px_rgba(36,28,89,0.06)]">
                <h3 className="text-[17px] sm:text-[18.4px] font-bold text-[#241C59]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14.5px] sm:text-[15px] font-normal leading-[1.6] text-[#5E5A86]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

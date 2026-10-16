"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const REQUIREMENTS = [
  "Verified responsible organization and source scope.",
  "Whether timing is a preference, an inventory hold, or a confirmed appointment.",
  "Minimal data needed and the applicable privacy notice.",
  "Current authoritative state, source time, and timezone.",
  "Provider-specific change and cancellation instructions.",
];

export default function SafetyAndPrivacy() {
  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24 font-sans"
      style={{
        background:
          "linear-gradient(180deg, rgba(246, 243, 255, 1) 0%, rgba(236, 231, 255, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-11">
          {/* Left Column: Heading, Emergency Warning & Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-6"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[#8E7BEF]"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
                Safety & privacy
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
              An administrative process.
              <br />
              Clinical decisions stay with
              <br />
              care teams.
            </h2>

            {/* Description / Medical Notice */}
            <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
              Zoiko Access does not provide emergency response. For urgent
              medical attention, contact the emergency service appropriate to
              your location. This page does not diagnose, clinically prioritize,
              or offer triage.
            </p>

            {/* Button */}
            <div className="mt-7">
              <Link
                href="/about-us"
                className="inline-flex h-[48px] items-center justify-center rounded-[12px] bg-[#4267D5] px-6 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-[#3457bf] hover:shadow active:scale-[0.98]"
              >
                Understand responsibility & privacy
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Service Requirements Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="rounded-[22px] border border-[#E3DEF8] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(36,28,89,0.03)]">
              <h3 className="text-[17.5px] font-bold text-[#241C59]">
                What a live service must explain
              </h3>

              <ul className="mt-6 space-y-4">
                {REQUIREMENTS.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#8E7BEF]" />
                    <span className="text-[15px] font-normal leading-[1.6] text-[#5E5A86]">
                      {req}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[#F1F3F7] pt-4">
                <p className="text-[12.2px] font-normal leading-[1.6] text-[#5E5A86]">
                  These are service requirements—not claims that a backend or
                  provider arrangement is currently operating.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

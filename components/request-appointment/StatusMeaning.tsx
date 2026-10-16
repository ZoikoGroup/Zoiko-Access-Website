"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATUS_ITEMS = [
  {
    title: "Request received",
    description: "Durable intake is stored. Provider decision is still pending.",
  },
  {
    title: "Delivered / acknowledged",
    description:
      "Transport or provider receipt is reported. No appointment is yet established.",
  },
  {
    title: "Under review / alternative proposed",
    description:
      "The provider is reviewing or offering a different option. A proposal is not automatically accepted.",
  },
  {
    title: "Appointment confirmed",
    description:
      "Only an authoritative provider acceptance can establish confirmation, with its source, time, timezone, and instructions.",
  },
];

export default function StatusMeaning() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-11">
          {/* Left Column: Heading & 4 Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full bg-[#8E7BEF]"
                aria-hidden="true"
              />
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
                Status meaning
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
              Know who owns the next
              <br />
              decision.
            </h2>

            {/* Description */}
            <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
              The platform coordinates an authorized interface. The care provider
              retains scheduling decisions, clinical requirements, and
              source-specific change or cancellation policies.
            </p>

            {/* 4 Status Cards */}
            <div className="mt-8 space-y-3.5">
              {STATUS_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-[#E3DEF8] bg-white p-5 shadow-[0_2px_10px_rgba(36,28,89,0.02)] transition-all hover:border-[#8E7BEF] hover:shadow-[0_4px_16px_rgba(36,28,89,0.05)]"
                >
                  <h3 className="text-[17px] font-bold text-[#241C59]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14.8px] font-normal leading-[1.6] text-[#5E5A86]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Figure with Decision Owner Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="w-full max-w-[500px] overflow-hidden rounded-[18px] border border-[#E3DEF8] bg-white p-4 shadow-[0_4px_24px_rgba(36,28,89,0.04)] sm:p-6">
              <Image
                src="/request-appointment/status-decision-owner.webp"
                alt="Decision owner and responsible clinical provider review workflow"
                width={449}
                height={485}
                sizes="(max-width: 768px) 100vw, 449px"
                className="h-auto w-full rounded-[12px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const statusEvents = [
  {
    title: "Prepared — billing party",
    dotColor: "#8A94A6",
  },
  {
    title: "Transmitted — billing party",
    dotColor: "#8A94A6",
  },
  {
    title: "Transport acknowledged — transport endpoint",
    dotColor: "#4267D5",
  },
  {
    title: "Payer received — payer",
    dotColor: "#4267D5",
  },
  {
    title: "Payer determination — payer",
    dotColor: "#7657E8",
  },
  {
    title: "Corrected — submitter or payer",
    dotColor: "#7657E8",
  },
  {
    title: "Withdrawn — submitter",
    dotColor: "#8A94A6",
  },
  {
    title: "Remittance issued — payer",
    dotColor: "#7657E8",
  },
  {
    title: "Downstream posted — provider system",
    dotColor: "#4267D5",
  },
];

export default function LifecycleMap() {
  return (
    <section
      id="lifecycle"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: `
          radial-gradient(circle at 100% 0%, rgba(183, 0, 220, 0.95) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(161deg, rgba(10, 26, 75, 1) 52%, rgba(53, 80, 184, 1) 100%)
        `,
      }}
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-[2px] w-[22px] rounded-full bg-[#B8C6EC]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B8C6EC]">
              Illustrative lifecycle map
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[40px]">
            Every event has a source and an owner.
          </h2>

          {/* Warning / Conditional Notice Ribbon */}
          <div className="mt-5 inline-flex w-fit items-center rounded-full bg-[#FFF4E0] px-3.5 py-1.5 shadow-sm">
            <span className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[#7A4B00]">
              Illustrative — events are conditional, not universal
            </span>
          </div>
        </motion.div>

        {/* 3x3 Grid of Status Items */}
        <div className="mt-11 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {statusEvents.map((evt, idx) => (
            <motion.div
              key={evt.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex h-[52px] items-center gap-3.5 rounded-[8px] border border-[#E3E8F2] bg-white px-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className="h-[9px] w-[9px] shrink-0 rounded-[4.5px]"
                style={{ backgroundColor: evt.dotColor }}
                aria-hidden="true"
              />
              <span className="truncate text-[14px] font-medium leading-[22px] text-[#273444]">
                {evt.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

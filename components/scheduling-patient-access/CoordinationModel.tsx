"use client";

import { motion } from "framer-motion";

interface StepItem {
  number: number;
  title: string;
  badgeText: string;
  isAuthority?: boolean;
}

const steps: StepItem[] = [
  {
    number: 1,
    title: "Discover approved access point",
    badgeText: "Coordination",
  },
  {
    number: 2,
    title: "Identify the right request route",
    badgeText: "Coordination",
  },
  {
    number: 3,
    title: "Submit to the source scheduler",
    badgeText: "Coordination",
  },
  {
    number: 4,
    title: "Await source confirmation",
    badgeText: "Scheduler decides",
    isAuthority: true,
  },
  {
    number: 5,
    title: "Track approved follow-up",
    badgeText: "Coordination",
  },
];

const pillars = [
  {
    title: "Platform coordination events",
    borderColor: "#7B3FF2",
    items: ["Request routed", "Status relayed", "Follow-up tracked"],
  },
  {
    title: "Scheduler-authoritative events",
    borderColor: "#031974",
    items: [
      "Slot offered or withdrawn",
      "Appointment confirmed",
      "Change applied",
    ],
  },
  {
    title: "Accountable institutional owner",
    borderColor: "#6B7BD9",
    items: ["Scheduling rules", "Clinical urgency", "Patient communication"],
  },
];

export default function CoordinationModel() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E7E9F4]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            FIVE-STEP COORDINATION MODEL
          </span>

          <h2 className="text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Five steps, and who decides at each
          </h2>
        </motion.div>

        {/* 5-Step Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex min-h-[200px] flex-col justify-between rounded-[18px] border border-[#D9D3F5] bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_14px_28px_rgba(114,76,255,0.12)] hover:-translate-y-1"
            >
              <div>
                {/* Number Circle */}
                <div
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-full text-[13px] font-bold text-white shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #02125F 0%, #2F42CB 55%, #7B3FF2 100%)",
                  }}
                >
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="mt-4 text-[15.5px] font-semibold leading-[1.35] text-[#031974]">
                  {step.title}
                </h3>
              </div>

              {/* Authority Badge */}
              <div className="mt-5">
                {step.isAuthority ? (
                  <span className="inline-flex items-center justify-center rounded-full bg-[#031974] px-3.5 py-1 text-[12px] font-bold text-white">
                    {step.badgeText}
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-full bg-[#F1EEFE] px-3.5 py-1 text-[12px] font-bold text-[#7B3FF2]">
                    {step.badgeText}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[4px] bg-[#DED3FF]" />
            <span className="text-[14px] text-[#273444]">Coordination event</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[4px] bg-[#031974]" />
            <span className="text-[14px] text-[#273444]">
              Scheduler-authoritative event
            </span>
          </div>
        </div>

        {/* 3 Pillars / Columns */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col rounded-[22px] bg-white p-6 shadow-[0_10px_20px_rgba(0,0,0,0.06)] border border-[#E7E9F4]"
              style={{ borderTop: `6px solid ${pillar.borderColor}` }}
            >
              <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#031974]">
                {pillar.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {pillar.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center gap-2.5 text-[15px] leading-[1.6] text-[#273444]"
                  >
                    <span className="text-[#7B3FF2] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

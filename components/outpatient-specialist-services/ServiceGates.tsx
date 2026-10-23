"use client";

import { motion } from "framer-motion";

interface GateCard {
  tag: string;
  title: string;
  description: string;
  isFeatured?: boolean;
}

const gates: GateCard[] = [
  {
    tag: "P0",
    title: "Informational",
    description: "Education only. This is the state of this page.",
    isFeatured: true,
  },
  {
    tag: "P1",
    title: "Published local discovery",
    description: "Approved local information is shown, with its source and last-verified date.",
  },
  {
    tag: "P2",
    title: "Partner transactions",
    description: "Separately authorized and activated. This page stays educational.",
  },
  {
    tag: "PX",
    title: "Suspended or degraded",
    description: "Live actions are removed. Guidance stays, and nothing stale is replayed.",
  },
];

export default function ServiceGates() {
  return (
    <section id="gates" className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#E1DBF9]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#6D4FE6]" aria-hidden="true" />
            <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#6D4FE6] uppercase">
              Service gates
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
            What “available” means, in four states
          </h2>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gates.map((gate, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`flex flex-col justify-between rounded-[20px] bg-white p-6 sm:p-7 transition-all ${
                gate.isFeatured
                  ? "border-2 border-[#6F3FEC] shadow-[0px_14px_34px_0px_rgba(111,63,236,0.25)] ring-1 ring-[#6F3FEC]/20"
                  : "border border-[#E1DBF9] shadow-[0px_10px_28px_0px_rgba(27,23,80,0.1)]"
              }`}
            >
              <div>
                <span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#F1EEFE] text-[14.4px] font-semibold text-[#6D4FE6]">
                  {gate.tag}
                </span>

                <h3 className="mt-4 text-[17.6px] font-semibold text-[#1B1750] leading-[1.3]">
                  {gate.title}
                </h3>

                <p className="mt-3 text-[14.7px] leading-[1.65] text-[#575387]">
                  {gate.description}
                </p>
              </div>

              {gate.isFeatured && (
                <div className="mt-5 pt-3 border-t border-[#F1EEFE]">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#6F3FEC]">
                    Current Page State
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

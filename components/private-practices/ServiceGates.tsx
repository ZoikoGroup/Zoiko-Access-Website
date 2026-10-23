"use client";

import { motion } from "framer-motion";

const gates = [
  {
    code: "P0",
    title: "Informational",
    desc: "Education only. This is the state of this page.",
    active: true,
  },
  {
    code: "P1",
    title: "Published local discovery",
    desc: "Approved local information is shown.",
    active: false,
  },
  {
    code: "P2",
    title: "Partner transactions",
    desc: "Separately authorized and activated.",
    active: false,
  },
  {
    code: "PX",
    title: "Suspended or degraded",
    desc: "Actions are removed. Guidance stays.",
    active: false,
  },
];

export default function ServiceGates() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            SERVICE GATES
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#031974]">
            What “available” means, in four states
          </h2>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gates.map((gate, idx) => (
            <motion.div
              key={gate.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col rounded-[20px] bg-white p-5 sm:p-6 transition-all ${
                gate.active
                  ? "border border-[#7B3FF2] shadow-[0px_10px_24px_0px_rgba(123,63,242,0.2)]"
                  : "border border-[#D9D3F5] shadow-xs hover:border-[#7B3FF2]/50 hover:shadow-md"
              }`}
            >
              {/* Circular Gate Badge */}
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F1EEFE] text-[13px] font-bold text-[#7B3FF2]">
                {gate.code}
              </div>

              {/* Title & Description */}
              <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em] text-[#031974]">
                {gate.title}
              </h3>
              <p className="mt-1 text-[14.5px] leading-[1.65] text-[#273444]">
                {gate.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

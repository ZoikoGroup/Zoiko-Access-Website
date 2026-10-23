"use client";

import { motion } from "framer-motion";

interface ProblemPair {
  painPoint: {
    title: string;
    description: string;
  };
  controlledDesign: {
    title: string;
    description: string;
  };
}

const pairs: ProblemPair[] = [
  {
    painPoint: {
      title: "Fragmented access points",
      description: "People reach a facility through many doors.",
    },
    controlledDesign: {
      title: "Approved access points",
      description: "Only approved, published entry points are shown.",
    },
  },
  {
    painPoint: {
      title: "Unverified scheduling state",
      description: "It is hard to tell what is confirmed.",
    },
    controlledDesign: {
      title: "Source-confirmed status",
      description: "Status words come from the source scheduler.",
    },
  },
  {
    painPoint: {
      title: "Disconnected changes and cancellations",
      description: "Changes get lost between systems.",
    },
    controlledDesign: {
      title: "Traceable changes",
      description: "Each change keeps its source and time.",
    },
  },
];

export default function InstitutionalProblems() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #F1EEFE 0%, #D6CCFF 100%)",
      }}
    >
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
            INSTITUTIONAL PROBLEMS
          </span>

          <h2 className="text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Three pain points, three controlled responses
          </h2>
        </motion.div>

        {/* 3 Comparative Rows */}
        <div className="mt-10 flex flex-col gap-6 lg:mt-12">
          {pairs.map((pair, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid grid-cols-1 overflow-hidden rounded-[26px] border border-[#D9D3F5] shadow-[0_6px_20px_rgba(36,28,89,0.06)] md:grid-cols-2"
            >
              {/* Left Column: Pain Point (White) */}
              <div className="flex flex-col justify-center bg-white p-6 sm:p-7 lg:px-8 lg:py-7">
                <span className="text-[11px] font-extrabold tracking-[0.08em] text-[#7B3FF2] uppercase">
                  PAIN POINT
                </span>
                <h3 className="mt-2 text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#031974] sm:text-[19px]">
                  {pair.painPoint.title}
                </h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#273444] sm:text-[16px]">
                  {pair.painPoint.description}
                </p>
              </div>

              {/* Right Column: Controlled Design (Deep Gradient) */}
              <div
                className="flex flex-col justify-center p-6 sm:p-7 lg:px-8 lg:py-7"
                style={{
                  background:
                    "linear-gradient(168deg, #02125F 0%, #2F42CB 64%, #7B3FF2 100%)",
                }}
              >
                <span className="text-[11px] font-extrabold tracking-[0.08em] text-[#C9B8FF] uppercase">
                  CONTROLLED DESIGN
                </span>
                <h3 className="mt-2 text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[19px]">
                  {pair.controlledDesign.title}
                </h3>
                <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#E6E9FF] sm:text-[16px]">
                  {pair.controlledDesign.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

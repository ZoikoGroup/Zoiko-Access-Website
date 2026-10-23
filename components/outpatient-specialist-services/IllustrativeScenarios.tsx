"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ScenarioCard {
  title: string;
  image: string;
  description: string;
}

const scenarios: ScenarioCard[] = [
  {
    title: "Outpatient specialist referral",
    image: "/outpatient-specialist-services/scenario-referral.png",
    description:
      "A referring organization sends a request. The specialist team acknowledges it, and then decides.",
  },
  {
    title: "Diagnostic review follow-up",
    image: "/outpatient-specialist-services/scenario-diagnostic.png",
    description:
      "A review is complete, and a named owner is responsible for the follow-up step.",
  },
  {
    title: "Multi-provider transition",
    image: "/outpatient-specialist-services/scenario-transition.png",
    description:
      "Several organizations are involved, and each hands over to the next with a named owner.",
  },
];

export default function IllustrativeScenarios() {
  return (
    <section
      id="scenarios"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#C8B9FF]"
      style={{
        background: "linear-gradient(180deg, #ECE8FF 0%, #C8B9FF 100%)",
      }}
    >
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
              Illustrative scenarios
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
            Three hypothetical workflows
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.65] text-[#575387]">
            No real people, appointment slots, hospital logos or results appear anywhere on this page.
          </p>
        </motion.div>

        {/* 3 Scenario Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {scenarios.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#E1DBF9] bg-white shadow-[0px_10px_28px_0px_rgba(27,23,80,0.1)] transition-all"
            >
              <div className="relative w-full h-[180px] sm:h-[195px] bg-gradient-to-br from-[#8E7BEF] to-[#08176D] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 410px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between gap-3">
                <h3 className="text-[18px] font-semibold text-[#1B1750] leading-[1.3]">
                  {card.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.6] text-[#575387]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

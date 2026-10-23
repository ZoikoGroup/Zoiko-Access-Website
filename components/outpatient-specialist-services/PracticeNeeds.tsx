"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PressureItem {
  image: string;
  title: string;
  challenge: string;
  approach: string;
}

const pressures: PressureItem[] = [
  {
    image: "/outpatient-specialist-services/practice-referral-status.png",
    title: "Referral status",
    challenge: "A referral being sent, received, acknowledged and accepted are different things.",
    approach: "Define every state, and who is accountable for it as sender or receiver.",
  },
  {
    image: "/outpatient-specialist-services/practice-scheduling-ownership.png",
    title: "Scheduling ownership",
    challenge: "People assume the platform books. Providers hold the schedule.",
    approach: "A request is not a confirmation. The provider’s scheduling system is the source of truth.",
  },
  {
    image: "/outpatient-specialist-services/practice-clinical-priority.png",
    title: "Clinical priority",
    challenge: "Service categories can look like personal advice.",
    approach: "Clinical prioritization is controlled by the provider. This page does no triage.",
  },
];

export default function PracticeNeeds() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E1DBF9]">
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
              Practice needs
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-[#1B1750] leading-[1.18]">
            Three everyday pressures, and the intended design
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.65] text-[#575387]">
            This shows intent, not results. No wait-time, patient-count or outcome figures are claimed.
          </p>
        </motion.div>

        {/* 3 Comparison Rows */}
        <div className="mt-12 flex flex-col gap-6 sm:gap-7">
          {pressures.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-6"
            >
              {/* Left Card: Challenge */}
              <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch rounded-[20px] border border-[#E1DBF9] bg-white shadow-[0px_10px_28px_0px_rgba(27,23,80,0.1)] overflow-hidden transition-all hover:shadow-md">
                <div className="relative w-full sm:w-[150px] h-[130px] shrink-0 bg-gradient-to-br from-[#8E7BEF] to-[#08176D]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 150px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-5.5">
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-[#6D4FE6] uppercase">
                    Challenge
                  </span>
                  <h3 className="mt-1 text-[17.6px] font-semibold text-[#1B1750] leading-[1.25]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] sm:text-[15px] leading-[1.55] text-[#575387]">
                    {item.challenge}
                  </p>
                </div>
              </div>

              {/* Arrow Divider */}
              <div className="lg:col-span-1 flex justify-center items-center py-1 lg:py-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1EEFE] text-[20px] font-bold text-[#6D4FE6] shadow-xs">
                  →
                </div>
              </div>

              {/* Right Card: Designed Approach */}
              <div className="lg:col-span-5 flex flex-col justify-center rounded-[20px] bg-gradient-to-br from-[#D5D3FC] to-[#B9B0F4] p-6 sm:p-7 min-h-[130px] shadow-xs">
                <span className="text-[11px] font-semibold tracking-[0.12em] text-[#4B3FB5] uppercase">
                  Designed approach
                </span>
                <p className="mt-2 text-[15.5px] leading-[1.6] font-normal text-[#1B1750]">
                  {item.approach}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

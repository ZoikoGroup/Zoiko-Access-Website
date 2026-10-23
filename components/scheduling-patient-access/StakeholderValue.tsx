"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Stakeholder {
  id: string;
  name: string;
  title: string;
  description: string;
  note: string;
}

const stakeholders: Stakeholder[] = [
  {
    id: "access-teams",
    name: "Access teams",
    title: "Access teams",
    description:
      "Designed to give one clearer view of how requests reach each scheduler.",
    note: "Directional language only. No guaranteed outcome.",
  },
  {
    id: "clinic-schedulers",
    name: "Clinic schedulers",
    title: "Clinic schedulers",
    description:
      "Retain complete control over slot allocations, booking rules, and provider schedules without external interference.",
    note: "Directional language only. No guaranteed outcome.",
  },
  {
    id: "physicians",
    name: "Physicians",
    title: "Physicians",
    description:
      "Ensure clinical urgency and referral appropriateness guide scheduling priority rather than unverified bookings.",
    note: "Directional language only. No guaranteed outcome.",
  },
  {
    id: "patients",
    name: "Patients",
    title: "Patients",
    description:
      "Receive transparent visibility into the lifecycle of their appointment request, knowing exactly when a facility confirms.",
    note: "Directional language only. No guaranteed outcome.",
  },
  {
    id: "it-teams",
    name: "IT teams",
    title: "IT teams",
    description:
      "Connect via standards-based events without granting broad read/write access to institutional scheduling databases.",
    note: "Directional language only. No guaranteed outcome.",
  },
];

export default function StakeholderValue() {
  const [activeTab, setActiveTab] = useState<string>("access-teams");

  const currentStakeholder =
    stakeholders.find((s) => s.id === activeTab) || stakeholders[0];

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
            VALUE BY STAKEHOLDER
          </span>

          <h2 className="text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Who it is designed to help
          </h2>
        </motion.div>

        {/* Stakeholder Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          {stakeholders.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-[15px] font-semibold transition-all ${
                  isActive
                    ? "bg-[#031974] text-white shadow-md scale-105"
                    : "border border-[#D9D3F5] bg-white text-[#031974] hover:bg-[#F1EEFE]"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-1 overflow-hidden rounded-[28px] border border-[#D9D3F5] bg-white shadow-[0_12px_32px_rgba(36,28,89,0.06)] md:grid-cols-12"
        >
          {/* Left: Illustration Graphic */}
          <div
            className="relative h-[280px] w-full overflow-hidden md:col-span-5 md:h-auto"
            style={{
              background:
                "linear-gradient(150deg, #E8E2FF 0%, #D5DCFF 100%)",
            }}
          >
            {/* SVG Illustration Vector */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <Image
                src="/scheduling-patient-access/stakeholder-illustration.svg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Foreground Team Photo */}
            <div className="relative h-full w-full">
              <Image
                src="/scheduling-patient-access/stakeholder-access-teams.png"
                alt={currentStakeholder.name}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Text Information */}
          <div className="flex flex-col justify-center p-8 sm:p-10 md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStakeholder.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3"
              >
                <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-[#031974] sm:text-[26px]">
                  {currentStakeholder.title}
                </h3>

                <p className="text-[16px] leading-[1.68] text-[#273444] sm:text-[17px]">
                  {currentStakeholder.description}
                </p>

                {/* Callout Box */}
                <div className="mt-4 rounded-r-xl border-l-4 border-[#7B3FF2] bg-[#F6F9FC] px-4 py-3 text-[14.5px] leading-[1.6] text-[#273444]">
                  {currentStakeholder.note}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ModelData {
  id: string;
  name: string;
  image: string;
  description: string;
  points: string[];
}

const careModels: ModelData[] = [
  {
    id: "consultation",
    name: "Consultation-led outpatient visit",
    image: "/outpatient-specialist-services/care-model-consultation.png",
    description: "A planned visit with a clinician in an outpatient setting.",
    points: [
      "Describes a service setting, not eligibility.",
      "Whether it exists near you depends on participating organizations.",
    ],
  },
  {
    id: "assessment",
    name: "Specialist assessment",
    image: "/outpatient-specialist-services/audience-specialist-departments.png",
    description: "In-depth clinical evaluation tailored to specific medical disciplines.",
    points: [
      "Conducted by accredited specialists and designated care teams.",
      "Requires verified referral documentation from referring providers.",
    ],
  },
  {
    id: "diagnostic",
    name: "Diagnostic-associated outpatient care",
    image: "/outpatient-specialist-services/audience-diagnostic-teams.png",
    description: "Targeted outpatient visits connected to specific lab or imaging workups.",
    points: [
      "Focuses on diagnostic handoffs and findings review.",
      "Coordinates follow-through between referring systems and labs.",
    ],
  },
  {
    id: "follow-up",
    name: "Follow-up pathway",
    image: "/outpatient-specialist-services/audience-operations-teams.png",
    description: "Structured monitoring and post-consultation care reviews.",
    points: [
      "Maintains accountable ownership across clinical intervals.",
      "Tracks status without overriding originating provider schedules.",
    ],
  },
  {
    id: "multidisciplinary",
    name: "Multidisciplinary clinic",
    image: "/outpatient-specialist-services/hero-team-documents.png",
    description: "Collaborative clinic sessions involving multiple healthcare professionals.",
    points: [
      "Aligns cross-specialty perspectives for complex patient care plans.",
      "Requires authorized organizational integration across departments.",
    ],
  },
];

export default function CareModels() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeModel = careModels[activeTab];

  return (
    <section
      id="models"
      className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#2D2BC9]"
      style={{
        background: "linear-gradient(155deg, #08176D 0%, #2D2BC9 58%, #6F3FEC 100%)",
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
            <span className="h-[2px] w-[28px] rounded-full bg-[#CFC4FF]" aria-hidden="true" />
            <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#CFC4FF] uppercase">
              Outpatient care models
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.01em] text-white leading-[1.18]">
            Five ways outpatient care is organized
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.65] text-[#E6E1FF]">
            These describe service settings. They do not describe eligibility or what is supplied near
            you today.
          </p>
        </motion.div>

        {/* Tabbed Interface: Left Buttons, Right Detail Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 items-start gap-8 lg:gap-10">
          {/* Left: 5 Model Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {careModels.map((model, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex w-full items-center justify-between px-6 py-4 rounded-[14px] text-left text-[15px] sm:text-[16px] font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#7B3FF2] text-white shadow-lg ring-2 ring-white/60"
                      : "bg-white text-[#1B1750] hover:bg-[#F8F9FE] shadow-sm"
                  }`}
                >
                  <span>{model.name}</span>
                  <span className={`text-[18px] ${isActive ? "text-white" : "text-[#7B3FF2]"}`}>
                    {isActive ? "→" : "+"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Detail Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-[24px] bg-white shadow-[0px_22px_50px_0px_rgba(0,0,0,0.3)] min-h-[320px]"
              >
                {/* Card Left Image */}
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-full bg-gradient-to-br from-[#8E7BEF] to-[#08176D]">
                  <Image
                    src={activeModel.image}
                    alt={activeModel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover"
                  />
                </div>

                {/* Card Right Content */}
                <div className="md:col-span-7 flex flex-col justify-center p-6 sm:p-8">
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1B1750] leading-[1.3]">
                    {activeModel.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[#575387]">
                    {activeModel.description}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {activeModel.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-[14.5px] leading-[1.55] text-[#575387]">
                        <span className="text-[#7B3FF2] font-bold mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

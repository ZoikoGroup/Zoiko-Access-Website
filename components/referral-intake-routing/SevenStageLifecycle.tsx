"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Stage {
  number: number;
  title: string;
}

// Exactly matching Figma node-id 656:1964 and Image 2 ordering
const stages: Stage[] = [
  { number: 1, title: "Prepared" },
  { number: 3, title: "Transport acknowledged" },
  { number: 2, title: "Submitted" },
  { number: 4, title: "Operationally received" },
  { number: 5, title: "Under clinical review" },
  { number: 6, title: "Accepted / declined / needs information" },
  { number: 7, title: "Follow-up assigned" },
];

export default function SevenStageLifecycle() {
  const [activeNumber, setActiveNumber] = useState<number>(1);

  return (
    <section
      id="lifecycle"
      className="relative w-full py-16 sm:py-[70px] text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, rgba(2, 18, 95, 1) 0%, rgba(47, 66, 203, 1) 57%, rgba(123, 63, 242, 1) 100%)",
      }}
    >
      <div className="relative mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-[70px]">
        {/* Header Block matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3.5"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            SEVEN-STAGE LIFECYCLE
          </span>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
            Track what has happened, not what someone assumes
          </h2>
          <p className="text-[16px] font-normal leading-[1.65] text-[#E6E9FF]">
            Select a stage. These are conceptual states, not existing system values.
          </p>
        </motion.div>

        {/* Content Row: Metro List on Left, Single Full-Height Illustration on Right */}
        <div className="mt-9 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: 7 Metro Stages */}
          <div className="relative lg:col-span-7">
            {/* Continuous Vertical Connecting Line (centered behind 48px circle at x=22px, width=4px) */}
            <div className="absolute left-[22px] top-[20px] bottom-[20px] w-[4px] bg-white/35 pointer-events-none rounded-full" />

            {/* Stage Buttons */}
            <div className="flex flex-col gap-[10px]">
              {stages.map((stage) => {
                const isActive = activeNumber === stage.number;
                return (
                  <button
                    key={`${stage.number}-${stage.title}`}
                    onClick={() => setActiveNumber(stage.number)}
                    className="group relative flex items-center gap-4 text-left transition-all cursor-pointer focus:outline-none"
                    aria-pressed={isActive}
                  >
                    {/* Number Circle (48px x 48px, 4px Melrose border) */}
                    <div
                      className={`relative z-10 flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-full border-4 border-[#C9B8FF] text-[16px] font-bold transition-all ${
                        isActive
                          ? "bg-[#7B3FF2] text-white shadow-[0_0_20px_rgba(201,184,255,0.6)] scale-[1.03]"
                          : "bg-white text-[#031974] group-hover:scale-[1.03]"
                      }`}
                    >
                      {stage.number}
                    </div>

                    {/* Label Pill Box (height: 48px, max-width: 548px, rounded-[20px], bg: white) */}
                    <div
                      className={`flex h-[48px] w-full max-w-[548px] items-center rounded-[20px] bg-white px-5 shadow-sm transition-all ${
                        isActive
                          ? "ring-2 ring-[#C9B8FF] shadow-md"
                          : "hover:shadow-md"
                      }`}
                    >
                      <span className="text-[16px] font-semibold text-[#1E293B]">
                        {stage.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Illustration Figure (image 84) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative h-[340px] sm:h-[420px] lg:h-[468px] w-full max-w-[543px] overflow-hidden rounded-[20px] shadow-2xl">
              <Image
                src="/referral-intake-routing/lifecycle-diagram.png"
                alt="Seven-Stage Referral Lifecycle Illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 543px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

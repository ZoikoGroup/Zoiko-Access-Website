"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const initialChecklist = [
  "Which country do we operate in?",
  "Which services do we need?",
  "Who is our named operational owner?",
  "Has clinical and privacy review happened?",
  "Which integration dependencies do we have?",
  "Is partner readiness confirmed?",
];

export default function ReadinessChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const toggleItem = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading, Subtitle & Interactive Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-7"
          >
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              READINESS CHECKLIST
            </span>
            <h2 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#031974]">
              Questions worth asking first
            </h2>
            <p className="mt-4 max-w-[660px] text-[16px] sm:text-[18px] font-normal leading-[1.65] text-[#273444]">
              Educational only. There is no score, no eligibility result and no
              approval. Ticks stay on this page.
            </p>

            {/* Checklist Items */}
            <div className="mt-8 flex flex-col gap-2.5 max-w-[680px]">
              {initialChecklist.map((question, idx) => {
                const isChecked = !!checkedItems[idx];
                return (
                  <motion.div
                    key={question}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    onClick={() => toggleItem(idx)}
                    className="flex items-center gap-3.5 rounded-[14px] border border-[#D9D3F5] bg-white px-4 py-3.5 shadow-xs transition-all duration-200 hover:border-[#7B3FF2] hover:shadow-sm cursor-pointer select-none"
                  >
                    {/* Checkbox */}
                    <div
                      className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[3px] transition-colors ${
                        isChecked
                          ? "bg-[#7B3FF2] text-white"
                          : "border border-[#767676] bg-white"
                      }`}
                    >
                      {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>

                    {/* Question text */}
                    <span className="text-[15.5px] sm:text-[16px] font-medium leading-[1.5] text-[#273444]">
                      {question}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative h-[480px] sm:h-[557px] w-full max-w-[446px] overflow-hidden rounded-[30px] shadow-lg border border-[#D9D3F5] bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/private-practices/checklist-bg-frame.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-full w-full">
                <Image
                  src="/private-practices/checklist-meeting.png"
                  alt="Clinical leadership readiness discussion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

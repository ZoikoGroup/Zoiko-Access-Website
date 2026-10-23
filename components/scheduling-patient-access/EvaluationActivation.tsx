"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const initialChecklist = [
  "A participating legal entity",
  "A named scheduling owner",
  "An approved scope",
  "Data protection review",
  "Clinical safety review",
  "Accessibility review",
  "A support route",
  "Testing",
  "A rollback plan",
];

export default function EvaluationActivation() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    "A participating legal entity": true,
    "A named scheduling owner": true,
    "An approved scope": true,
  });

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <section className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24">
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
            EVALUATION AND ACTIVATION
          </span>

          <h2 className="text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            What must be in place first
          </h2>

          <p className="max-w-[720px] text-[16px] leading-[1.65] text-[#273444] sm:text-[17.5px]">
            Educational only. There is no score and no approval. Ticks stay on
            this page.
          </p>
        </motion.div>

        {/* 3x3 Checklist Grid */}
        <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {initialChecklist.map((item, idx) => {
            const isChecked = !!checkedItems[item];
            return (
              <motion.label
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => toggleCheck(item)}
                className={`flex h-[60px] cursor-pointer select-none items-center gap-3.5 rounded-[14px] border px-4 transition-all ${
                  isChecked
                    ? "border-[#7B3FF2]/50 bg-white shadow-sm"
                    : "border-[#D9D3F5] bg-white/80 hover:bg-white"
                }`}
              >
                {/* Custom Checkbox */}
                <div
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[4px] border transition-all ${
                    isChecked
                      ? "border-[#7B3FF2] bg-[#7B3FF2] text-white"
                      : "border-[#767676] bg-white hover:border-[#7B3FF2]"
                  }`}
                >
                  {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                </div>

                {/* Text Label */}
                <span className="text-[15.5px] font-medium leading-none text-[#273444]">
                  {item}
                </span>
              </motion.label>
            );
          })}
        </div>
      </div>
    </section>
  );
}

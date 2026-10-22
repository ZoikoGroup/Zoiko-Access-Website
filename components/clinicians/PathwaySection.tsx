"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";

const stages = [
  "Discover requirements",
  "Confirm eligible region",
  "Choose pathway",
  "Submit secure application",
  "Verification and review",
  "Decision and scoped activation",
] as const;

export function PathwaySection() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-[70px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader
          eyebrow="SIX-STAGE PATHWAY"
          title="From first look to scoped activation"
          lead="Select a stage to see who acts, where the evidence comes from, and what it does not mean. Paths can loop back. Approval is never promised."
        />

        <div className="mt-[13px] flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <ol className="flex w-full flex-col gap-[11px] lg:max-w-[665px]">
            {stages.map((stage, index) => {
              const isActive = activeStage === index;

              return (
                <li
                  key={stage}
                  className={`overflow-hidden rounded-[20px] border border-solid bg-white transition-shadow ${
                    isActive
                      ? "border-[#3d61cd] shadow-[0px_8px_24px_0px_rgba(47,66,203,0.14)]"
                      : "border-[#d9d3f5]"
                  }`}
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveStage(isActive ? null : index)}
                    className="flex min-h-[72px] w-full items-center gap-3 px-4 py-[19px] text-left"
                  >
                    <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[17px] bg-[linear-gradient(135deg,#02125f_0%,#2f42cb_55%,#7b3ff2_100%)] font-['Poppins',sans-serif] text-[14px] font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="py-px font-['Poppins',sans-serif] text-[16px] font-semibold text-[#031974]">
                      {stage}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative h-[320px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-[420px] lg:h-[505px] lg:w-[490px]">
            <Image
              src="/prof/7.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 490px, 100vw"
              className="object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

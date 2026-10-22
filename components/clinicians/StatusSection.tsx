"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";

interface Status {
  label: string;
  dotClassName: string;
  description?: string;
  owner?: string;
}

const statuses: readonly Status[] = [
  {
    label: "Draft",
    dotClassName: "bg-[#8aa0e8]",
    description: "Started in the secure portal. Nothing has been sent.",
    owner: "Applicant",
  },
  { label: "Expired", dotClassName: "bg-[#8d9ce0]" },
  { label: "Declined", dotClassName: "bg-[#b79af2]" },
  { label: "In review", dotClassName: "bg-[#7fe0c8]" },
  { label: "Submitted", dotClassName: "bg-[#f4a96a]" },
  { label: "Suspended", dotClassName: "bg-[#f26b5e]" },
  { label: "More information needed", dotClassName: "bg-[#7fe3d0]" },
  { label: "Approved for scoped participation", dotClassName: "bg-[#8ec5f5]" },
] as const;

export function StatusSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = statuses[activeIndex];

  return (
    <section className="bg-white px-5 pb-12 pt-12 sm:px-10 lg:px-[70px] lg:pb-[70px] lg:pt-[93px]">
      <div className="mx-auto grid w-full max-w-[1300px] items-start gap-9 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <SectionHeader
            eyebrow="STATUS AND NEXT STEPS"
            title="What each status means"
            lead="Example process, not a live application. Synthetic labels only."
          />

          <div className="mt-5 flex flex-wrap gap-[10px]">
            {statuses.map((status, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={status.label}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex items-center gap-[10px] rounded-full border border-solid px-5 py-[11px] font-['Poppins',sans-serif] text-[14px] font-medium leading-[22px] transition-colors ${
                    isActive
                      ? "border-transparent bg-[linear-gradient(135deg,#02125f_0%,#2f42cb_100%)] text-white"
                      : "border-[#d9d3f5] bg-white text-[#031974] hover:bg-[#f1eefe]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      isActive ? "bg-white" : status.dotClassName
                    }`}
                  />
                  {status.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          aria-live="polite"
          className="rounded-[28px] border border-solid border-[#d9d3f5] bg-white p-[27px]"
        >
          <div className="relative h-[200px] w-full overflow-hidden rounded-[18px] sm:h-[213px]">
            <Image
              src="/prof/11.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 683px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-[14px] flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <h3 className="font-['Poppins',sans-serif] text-[22px] font-semibold leading-[28px] tracking-[-0.44px] text-[#031974]">
                {active.label}
              </h3>
              {active.description ? (
                <p className="font-['Inter',sans-serif] text-[16px] leading-[27px] text-[#273444]">
                  {active.description}
                </p>
              ) : null}
            </div>

            {active.owner ? (
              <dl className="shrink-0 sm:pb-[4px]">
                <dt className="font-['Inter',sans-serif] text-[12.5px] font-bold uppercase leading-[19px] tracking-[1.25px] text-[#7b3ff2]">
                  Owner
                </dt>
                <dd className="font-['Inter',sans-serif] text-[16px] leading-[27px] text-[#273444]">
                  {active.owner}
                </dd>
              </dl>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

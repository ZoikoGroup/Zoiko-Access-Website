"use client";

import { useState } from "react";
import Image from "next/image";
import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const IMG = "/employers-occupational-health";

const pathways = [
  {
    title: "Employee benefits navigation",
    sub: "Find supported benefits",
    text: "Helping employees understand which supported benefits apply to them and where to go next.",
    never: "Never offered here: viewing employee records or enrolling on someone's behalf.",
    image: `${IMG}/employee-exploring-benefits.webp`,
    alt: "Two people pointing at a laptop screen",
  },
  {
    title: "Occupational-health coordination",
    sub: "Referral to qualified providers",
    text: "Helping employees reach a qualified occupational-health provider through an authorized referral route.",
    never: "Never offered here: clinical assessments, diagnoses or sharing results with the employer.",
    image: `${IMG}/clinician-receiving-handoff.webp`,
    alt: "Clinician reviewing a document with a patient",
  },
  {
    title: "Return-to-work information",
    sub: "Support, not clearance",
    text: "Helping employees find information about return-to-work support and who decides each step.",
    never: "Never offered here: fitness-for-work clearance or decisions about someone's job.",
    image: `${IMG}/employees-discussing-benefits.webp`,
    alt: "Two colleagues talking at a meeting table",
  },
];

export default function ThreePathways() {
  const [active, setActive] = useState(0);
  const p = pathways[active];

  return (
    <section className="w-full bg-white py-16 font-sans sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <Eyebrow>Program use-case pathways</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Three pathways, all conditional.
        </h2>

        <div className="mt-11 grid grid-cols-1 items-start gap-7 lg:grid-cols-[321px_1fr]">
          <div role="tablist" aria-label="Program pathways" className="flex flex-col gap-2.5">
            {pathways.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  id={`pathway-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="pathway-panel"
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left transition-all ${
                    selected
                      ? "bg-gradient-to-r from-[#1E3A8A] to-[#3D5BD9] text-white shadow-[0px_14px_30px_0px_rgba(36,59,115,0.25)]"
                      : "bg-white text-[#16245A] outline -outline-offset-1 outline-[#E5E8F0] hover:outline-[#C9BFFB]"
                  }`}
                >
                  <span>
                    <span
                      className={`block text-base font-semibold leading-6 ${headingFont}`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`mt-0.5 block text-xs ${
                        selected ? "text-white/80" : "text-[#5B6478]"
                      }`}
                    >
                      {item.sub}
                    </span>
                  </span>
                  <span aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          <div
            id="pathway-panel"
            role="tabpanel"
            aria-labelledby={`pathway-tab-${active}`}
            className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0px_20px_44px_0px_rgba(22,36,90,0.10)] outline -outline-offset-1 outline-[#E5E8F0] md:grid-cols-2"
          >
            <div className="relative min-h-[260px] bg-[#EEF0F8] md:min-h-[340px]">
              <Image
                key={p.image}
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 445px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1D6] px-3 py-1.5 text-xs font-semibold text-[#7A4B00]">
                <span className="h-2 w-2 rounded-full bg-[#B7791F]" aria-hidden="true" />
                Availability not confirmed
              </span>
              <h3
                className={`mt-4 text-[22px] font-semibold leading-8 text-[#16245A] ${headingFont}`}
              >
                {p.title}
              </h3>
              <p className="mt-2 text-base leading-[25px] text-[#5B6478]">
                {p.text}
              </p>
              <p className="mt-4 rounded-lg bg-[#FDECEC] px-4 py-3 text-[15px] leading-6 text-[#5B6478]">
                {p.never}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad, sectionY } from "./ui";

const faqs = [
  {
    q: "Who may contact the payer solutions team?",
    a: "Health plans, insurers, third-party administrators and authorized benefits organizations evaluating payer-related coordination.",
  },
  {
    q: "Can a member submit a claim here?",
    a: "No. This channel doesn't handle personal claims. Please contact your health plan directly.",
  },
  {
    q: "Is integration guaranteed?",
    a: "No. An inquiry starts a conversation only; integration depends on market, contracts, governance and technical review.",
  },
  {
    q: "What should we include?",
    a: "Your organization, role, market and topic, plus brief business context. Never include patient or policy details.",
  },
  {
    q: "When will someone reply?",
    a: "No response time is promised. A receipt confirms the system received your inquiry, not that it has been reviewed.",
  },
];

type FaqProps = {
  eyebrow?: string;
  title?: string;
  items?: { q: string; a: string }[];
  /**
   * "all" (default): every answer starts open and each toggles on its own.
   * "first": only the first answer starts open, and opening one closes the others.
   */
  initiallyOpen?: "all" | "first";
};

export default function PstFaq({
  eyebrow = "Questions, answered",
  title = "Before you get in touch.",
  items = faqs,
  initiallyOpen = "all",
}: FaqProps) {
  const [open, setOpen] = useState<boolean[]>(() => items.map((_, i) => initiallyOpen === "all" || i === 0));
  const oneAtATime = initiallyOpen === "first";
  const toggle = (i: number) =>
    setOpen((prev) => prev.map((v, j) => (j === i ? !v : oneAtATime ? false : v)));

  return (
    <section id="faq" className={`w-full bg-[#f5f8fc] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-[100px] lg:px-2.5`}>
        <div className="flex flex-col items-start gap-3.5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
        </div>
        <div className="border-b border-solid border-[#e3e8f2]">
          {items.map((f, i) => (
            <div key={f.q} className={i > 0 ? "border-t border-solid border-[#e3e8f2]" : ""}>
              <h3>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open[i]}
                  aria-controls={`faq-${i}`}
                  className={`${fontPoppins} flex w-full cursor-pointer items-center justify-between gap-6 py-4 text-left text-[16px] font-semibold leading-6 text-[#16245a]`}
                >
                  {f.q}
                  <span aria-hidden="true" className="text-[20px] font-medium leading-none text-[#7657e8]">
                    {open[i] ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <p id={`faq-${i}`} hidden={!open[i]} className="pb-5 text-[15px] leading-6 text-[#5b6678]">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

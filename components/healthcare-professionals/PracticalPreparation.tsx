"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const questions = [
  {
    question: "What does this professional’s role include?",
    hint: "Ask the organization to explain the relevant scope and responsibilities.",
  },
  {
    question: "Is a referral needed?",
    hint: "Requirements can depend on the service, health system, coverage, and local rules.",
  },
  {
    question: "What information should I bring?",
    hint: "Ask the organization for its practical instructions; do not enter records on this page.",
  },
  {
    question: "Who will explain results or next steps?",
    hint: "Identify the professional or organization responsible for follow-up.",
  },
  {
    question: "How can I contact the responsible organization if plans change?",
    hint: "Use a verified channel supplied by the care organization.",
  },
];

export default function PracticalPreparation() {
  // Checkmarks live in component state only — nothing is stored or sent.
  const [checked, setChecked] = useState<boolean[]>(() =>
    questions.map(() => false),
  );

  const toggle = (index: number) => {
    setChecked((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <section
      id="questions-to-ask"
      className="w-full scroll-mt-24 bg-[#F5F8FC] py-20"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,510fr)_minmax(0,714fr)] lg:gap-x-[56px] lg:px-20">
        <div className="flex flex-col items-start">
          <SectionHeading
            badge="Practical preparation"
            title={
              <>
                Questions you can ask
                <br />
                before your visit.
              </>
            }
          />
          <p className="mt-10 text-[16px] leading-7 text-[#5E6B85]">
            Use this non-medical checklist to organize questions. No personal
            answers, symptoms, notes, or records are requested.
          </p>
          <button
            type="button"
            onClick={() => window.print()}
            className="mt-4 inline-flex min-h-12 items-center rounded-md border border-[#C9D3F2] bg-white px-5 text-[13px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
          >
            Print this checklist →
          </button>
          <p className="mt-5 text-[12px] leading-5 text-[#5E6B85]">
            Checkmarks stay in this page session only. Nothing is sent or saved
            to browser storage.
          </p>
        </div>

        <ul className="flex flex-col">
          {questions.map((item, index) => {
            const inputId = `prep-question-${index}`;
            return (
              <li
                key={item.question}
                className="border-b border-[#E5E7EB] pb-5 pt-2 [&+&]:pt-5"
              >
                <label
                  htmlFor={inputId}
                  className="flex cursor-pointer items-center gap-4"
                >
                  <input
                    id={inputId}
                    type="checkbox"
                    checked={checked[index]}
                    onChange={() => toggle(index)}
                    className="h-5 w-5 shrink-0 cursor-pointer rounded-sm border-[#6B7280] accent-[#4267D5]"
                  />
                  <span className="text-[16px] leading-7 text-[#23327A]">
                    {item.question}
                  </span>
                </label>
                <p className="mt-4 pl-[34px] text-[12px] leading-5 text-[#5E6B85]">
                  {item.hint}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

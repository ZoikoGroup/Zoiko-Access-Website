"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "What is a care transition?",
    answer:
      "It is the movement of responsibility or coordination for a patient’s care between participating\nteams, such as after discharge, at a specialist handoff, or when a result needs review. Zoiko\nAccess is designed to make each step, its owner and its evidence clearer. It does not take on\nclinical responsibility.",
  },
  {
    question: "Who confirms receipt?",
    answer:
      "Receipt is confirmed technically by the receiving organization’s connected clinical system or transport interface. Technical delivery or acknowledgment confirms transmission integrity, not clinical review or acceptance.",
  },
  {
    question: "Does acknowledgment mean acceptance?",
    answer:
      "No. Acknowledgment is a technical or administrative confirmation that the handoff notification reached the receiving organization. Clinical acceptance requires affirmative review and decision by the responsible clinician or team.",
  },
  {
    question: "Who owns the next step?",
    answer:
      "The initiating organization retains clinical responsibility for the patient until the receiving clinician or team explicitly accepts the transition. Once accepted, the receiving clinician owns the clinical decisions within their defined scope.",
  },
  {
    question: "How is patient privacy managed?",
    answer:
      "Zoiko Access applies strict role-based access control, minimum necessary disclosure, and verified patient and caregiver boundaries. Data is shared only with authorized participants under locally approved permissions and data residency rules.",
  },
  {
    question: "Is this available where I work?",
    answer:
      "Availability depends on regional deployment, participating healthcare organizations, and local system integrations. Contact your organization’s clinical or administrative leadership to learn about active deployments in your area.",
  },
];

export default function CareTransitionsFaq() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="w-full bg-white py-[70px] px-4 md:px-[70px]">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-[36px]">
          {/* Badge */}
          <div className="mb-[14px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#7b3ff2]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.52px",
                color: "#7b3ff2",
              }}
            >
              Questions, answered
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[#031974]"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: "clamp(38px, 5vw, 58.32px)",
              letterSpacing: "-1.35px",
            }}
          >
            Direct answers about care
            <br />
            transitions
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col gap-[32px] lg:flex-row lg:items-start">
          {/* Left FAQ Accordion List: Individual items with gap-[12px], no outer container */}
          <div className="flex flex-1 flex-col gap-[12px] lg:w-[843px]">
            {faqList.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div
                  key={idx}
                  className={`w-full overflow-hidden rounded-[18px] transition-all ${
                    isOpen
                      ? "border border-[#7b3ff2] bg-white shadow-[0_2px_12px_rgba(123,63,242,0.08)]"
                      : "border border-[#d9d3f5] bg-white hover:border-[#b4a4f8]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full cursor-pointer items-center justify-between px-[24px] py-[19px] text-left"
                  >
                    <span
                      className="pr-[16px] text-[#031974]"
                      style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontWeight: 600,
                        fontSize: "19px",
                        lineHeight: "22px",
                      }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="flex h-[28px] w-[28px] flex-shrink-0 items-center justify-center text-[#7b3ff2]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "26px",
                        lineHeight: "26px",
                      }}
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-[24px] pb-[20px] pt-0">
                      <p
                        className="whitespace-pre-line text-[#273444]"
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: "24px",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Highlight Card (Exact Figma 421x583, top photo bleed, bottom gradient text) */}
          <div
            className="flex w-full flex-col overflow-hidden rounded-[24px] text-white shadow-[0_8px_24px_rgba(3,25,116,0.14)] lg:w-[421px]"
            style={{
              background: "linear-gradient(135deg, #02125f 0%, #1b2fb5 55%, #3a4de0 100%)",
            }}
          >
            {/* Top Photo Bleed */}
            <div className="relative h-[370px] w-full flex-shrink-0 bg-slate-900/20">
              <Image
                src="/care-transitions/ct12-fig.png"
                alt="Looking for something specific"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Bottom Content Area */}
            <div className="flex flex-1 flex-col justify-between p-[28px]">
              <div>
                <h3
                  className="mb-[10px] text-white"
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "25.92px",
                    letterSpacing: "-0.6px",
                  }}
                >
                  Looking for something specific?
                </h3>
                <p
                  className="mb-[20px] text-[#e6e9ff]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "26.4px",
                  }}
                >
                  Start with the status glossary, or read about
                  <br />
                  referral coordination.
                </p>
              </div>
              <div>
                <Link
                  href="#status-glossary"
                  className="inline-block rounded-full bg-white px-[26px] py-[14px] text-center text-[#031974] transition-all hover:bg-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "24.75px",
                  }}
                >
                  Open the glossary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

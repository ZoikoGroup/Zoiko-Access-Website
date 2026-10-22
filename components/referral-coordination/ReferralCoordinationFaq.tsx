"use client";

import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Does sending a referral mean it was accepted?",
    answer:
      "No. Sending, technical receipt, receiving-service acknowledgment, clinical review and acceptance are different events, and each is labeled separately.",
  },
  {
    id: 2,
    question: "Who reviews a referral?",
    answer:
      "Referrals are reviewed by authorized clinicians and administrative staff at the receiving organization according to their internal clinical protocols and service capacity.",
  },
  {
    id: 3,
    question: "Can an appointment be guaranteed?",
    answer:
      "No. An appointment is never guaranteed simply by submitting a referral. Availability depends on the receiving service’s triage determination, clinical priority, and scheduling calendar.",
  },
  {
    id: 4,
    question: "Is Zoiko Access an emergency service?",
    answer:
      "No. Zoiko Access is not an emergency response service and should never be used for urgent or acute life-threatening emergencies. In an emergency, call 911 or your local emergency number.",
  },
  {
    id: 5,
    question: "Is this a live referral tool?",
    answer:
      "This public page provides general educational and structural information. Live referral coordination requires qualified organizational participation, integration testing, and formal onboarding.",
  },
  {
    id: 6,
    question: "Does it work with my record system?",
    answer:
      "Zoiko Access is designed around open interoperability standards, but connectivity depends on approved organizational integration and jurisdiction-specific permissions.",
  },
];

export default function ReferralCoordinationFaq() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full bg-[#F6F9FC] py-[70px]">
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-[32px] max-w-[760px]">
          {/* Kick Badge */}
          <div className="mb-[13px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#7B3FF2]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.03em",
                color: "#7B3FF2",
              }}
            >
              Questions, answered
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(30px, 3.2vw, 40px)",
              lineHeight: "clamp(36px, 3.6vw, 47.2px)",
              letterSpacing: "-0.02em",
              color: "#031974",
            }}
          >
            Straight answers about referrals
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-[12px]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-[14px] transition-colors"
                style={{
                  backgroundColor: isOpen ? "#F6F9FC" : "#FFFFFF",
                  border: isOpen ? "1px solid #4267D5" : "1px solid #D9D3F5",
                  padding: "0 22px",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between text-left"
                  style={{
                    padding: "15.5px 0",
                  }}
                  aria-expanded={isOpen}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontWeight: 600,
                      fontSize: "17px",
                      lineHeight: "28px",
                      color: "#031974",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className="flex h-[26px] w-[18px] items-center justify-center font-bold"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#4267D5",
                    }}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ paddingBottom: "20px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26.4px",
                        color: "#273444",
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
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

interface RoleView {
  id: string;
  label: string;
  title: string;
  bullets: (string | React.ReactNode)[];
}

const roleViews: RoleView[] = [
  {
    id: "rt0",
    label: "Referring team",
    title: "Referring team",
    bullets: [
      <>
        After you send, you see only the evidence the receiving side has actually
        <br className="hidden md:inline" /> reported.
      </>,
      <>
        Sent, delivered and acknowledged are three different events, shown
        <br className="hidden md:inline" /> separately.
      </>,
      <>
        You stay accountable for the content of the referral and for your own
        <br className="hidden md:inline" /> clinical duties.
      </>,
      <>
        If no response arrives, follow the receiving organization’s escalation
        <br className="hidden md:inline" /> process.
      </>,
    ],
  },
  {
    id: "rt1",
    label: "Receiving team",
    title: "Receiving team",
    bullets: [
      <>You decide whether to accept, decline, request more information or redirect.</>,
      <>Receipt acknowledgment only confirms the file arrived, not that care will happen.</>,
      <>Your organization retains full control over scheduling and clinical triage.</>,
      <>Status updates you report are visible to the referring side with your source stamp.</>,
    ],
  },
  {
    id: "rt2",
    label: "Patient-facing questions",
    title: "Patient-facing questions",
    bullets: [
      <>A referral being sent does not mean an appointment has been booked yet.</>,
      <>The receiving specialist or clinic must first review the clinical request.</>,
      <>You will hear directly from the receiving clinic once scheduling opens.</>,
      <>For questions about status, the referring clinician’s office can check current milestones.</>,
    ],
  },
];

export default function ChooseYourView() {
  const [activeTab, setActiveTab] = useState(0);
  const current = roleViews[activeTab];

  return (
    <section className="w-full bg-[#FFFFFF] py-[70px]">
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-[44px] max-w-[760px]">
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
              Choose your view
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(30px, 3.2vw, 40px)",
              lineHeight: "clamp(36px, 3.6vw, 47.2px)",
              letterSpacing: "-0.02em",
              color: "#031974",
              maxWidth: "611px",
            }}
          >
            What a referral means for
            <br />
            each person involved
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "29.7px",
              color: "#273444",
            }}
          >
            Pick the view closest to yours.
          </p>
        </div>

        {/* Interactive View Panel */}
        <div
          id="rp0"
          className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center"
        >
          {/* Left Column Content */}
          <div className="flex w-full flex-col justify-between lg:max-w-[620px]">
            {/* View Title */}
            <h3
              className="mb-[24px]"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 600,
                fontSize: "26px",
                lineHeight: "30.68px",
                letterSpacing: "-0.02em",
                color: "#031974",
              }}
            >
              {current.title}
            </h3>

            {/* Bullets List */}
            <ul className="mb-[36px] flex flex-col gap-[16px]">
              {current.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-[12px]">
                  <span
                    className="mt-[8px] flex-shrink-0"
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "4.5px",
                      backgroundColor: "#4267D5",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "26.4px",
                      color: "#273444",
                    }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Role Views Tab Buttons */}
            <div
              className="inline-flex flex-wrap items-center gap-[6px] self-start"
              style={{
                padding: "6px",
                borderRadius: "16px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D9D3F5",
              }}
            >
              {roleViews.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    id={tab.id}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                    className="cursor-pointer transition-all"
                    style={{
                      padding: "10.53px 20px 11.47px",
                      borderRadius: "12px",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      background: isActive
                        ? "linear-gradient(151deg, rgba(2, 18, 95, 1) 0%, rgba(27, 47, 181, 1) 58%, rgba(58, 77, 224, 1) 100%)"
                        : "transparent",
                      color: isActive ? "#FFFFFF" : "#031974",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Fig Container */}
          <div
            className="relative h-[413px] w-full max-w-[604px] overflow-hidden"
            style={{
              borderRadius: "20px",
              background: "linear-gradient(164deg, rgba(233, 227, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
            }}
          >
            <Image
              src="/referral-coordination/view-fig.png"
              alt="Medical professional with patient explaining care referral"
              fill
              sizes="(max-width: 768px) 100vw, 604px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

interface TabDetail {
  seeTag: string;
  seeTitle: string;
  whoTag: string;
  whoBody: string;
  whereTag: string;
  whereBody: string;
}

const tabData: Record<string, TabDetail> = {
  Delayed: {
    seeTag: "WHAT YOU MAY SEE",
    seeTitle: "Expected evidence\nhas not arrived yet.",
    whoTag: "WHO SEES THE NEXT STEP",
    whoBody: "The receiving team’s\ncoordinator, then the initiator, see\nit as an open item.",
    whereTag: "WHERE IT GOES",
    whereBody: "Back to the authorized origin\nservice. No response time is\npromised.",
  },
  Unacknowledged: {
    seeTag: "WHAT YOU MAY SEE",
    seeTitle: "Notice sent but receipt\nnot confirmed by system.",
    whoTag: "WHO SEES THE NEXT STEP",
    whoBody: "The sending coordinator and\nsystem administrators see an alert.",
    whereTag: "WHERE IT GOES",
    whereBody: "Queued for automated retry or\ntechnical escalation at the origin.",
  },
  Rejected: {
    seeTag: "WHAT YOU MAY SEE",
    seeTitle: "Handoff explicitly declined\nby receiving clinician.",
    whoTag: "WHO SEES THE NEXT STEP",
    whoBody: "Initiating clinician and care\ncoordinator receive prompt notice.",
    whereTag: "WHERE IT GOES",
    whereBody: "Immediate return to origin team\nto determine alternate pathway.",
  },
  Redirected: {
    seeTag: "WHAT YOU MAY SEE",
    seeTitle: "Handoff rerouted to an\nalternate service or team.",
    whoTag: "WHO SEES THE NEXT STEP",
    whoBody: "New recipient coordinator and\noriginal initiator receive update.",
    whereTag: "WHERE IT GOES",
    whereBody: "Routed through authorized clinical\nintake for the targeted service.",
  },
  Stale: {
    seeTag: "WHAT YOU MAY SEE",
    seeTitle: "Authorization or request\nhas lapsed without action.",
    whoTag: "WHO SEES THE NEXT STEP",
    whoBody: "Initiating clinician is notified of\nthe expired transition request.",
    whereTag: "WHERE IT GOES",
    whereBody: "Requires clinical re-evaluation\nand re-initiation if still needed.",
  },
  Contradictory: {
    seeTag: "WHAT YOU MAY SEE",
    seeTitle: "Conflicting clinical status\nor duplicate records.",
    whoTag: "WHO SEES THE NEXT STEP",
    whoBody: "Clinical leads and coordinators\nat both participating facilities.",
    whereTag: "WHERE IT GOES",
    whereBody: "Escalated to clinical safety and\ngovernance leads for reconciliation.",
  },
};

const tabs = [
  "Delayed",
  "Unacknowledged",
  "Rejected",
  "Redirected",
  "Stale",
  "Contradictory",
];

export default function ExceptionsEscalation() {
  const [activeTab, setActiveTab] = useState<string>("Delayed");
  const detail = tabData[activeTab];

  return (
    <section className="w-full bg-white py-[70px] px-4 md:px-[70px]">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-[32px]">
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
              Exceptions and escalation
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px] text-[#031974]"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: "clamp(38px, 5vw, 58.32px)",
              letterSpacing: "-1.35px",
            }}
          >
            When a transition doesn’t go as
            <br />
            planned
          </h2>

          {/* Lead */}
          <p
            className="text-[#273444]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18.5px",
              lineHeight: "30.53px",
            }}
          >
            Pick a situation to see what is shown, who sees the next step, and where it goes.
            <br className="hidden md:inline" />
            No resolution time is promised.
          </p>
        </div>

        {/* 2-Column Content Row: Left 884px (Tabs + Card), Right 380px (Image) */}
        <div className="flex flex-col gap-[36px] lg:flex-row lg:items-start">
          {/* Left Side: Tabs + White Detail Card */}
          <div className="flex flex-1 flex-col gap-[22px] lg:max-w-[884px]">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-[12px]">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className="cursor-pointer h-[46px] rounded-full px-[24px] text-center transition-all flex items-center justify-center"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 700,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      background: isActive
                        ? "linear-gradient(135deg, #6900f1 0%, #a63ae0 100%)"
                        : "#ffffff",
                      color: isActive ? "#ffffff" : "#031974",
                      border: isActive ? "none" : "1px solid #d9d3f5",
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Detail Card (ep0) */}
            <div className="w-full rounded-[24px] border border-[#d9d3f5] bg-white p-[30px] shadow-[0_4px_24px_rgba(3,25,116,0.03)]">
              <div className="grid grid-cols-1 gap-[24px] md:grid-cols-[230px_minmax(270px,1fr)_1fr]">
                {/* Col 1 */}
                <div>
                  <span
                    className="mb-[8px] block uppercase text-[#7b3ff2]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 800,
                      fontSize: "11px",
                      lineHeight: "18.98px",
                      letterSpacing: "0.805px",
                    }}
                  >
                    {detail.seeTag}
                  </span>
                  <h3
                    className="whitespace-pre-line text-[#031974]"
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "31.2px",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {detail.seeTitle}
                  </h3>
                </div>

                {/* Col 2 */}
                <div>
                  <span
                    className="mb-[8px] block uppercase text-[#7b3ff2]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 800,
                      fontSize: "11px",
                      lineHeight: "18.98px",
                      letterSpacing: "0.805px",
                    }}
                  >
                    {detail.whoTag}
                  </span>
                  <p
                    className="whitespace-pre-line text-[#273444]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                    }}
                  >
                    {detail.whoBody}
                  </p>
                </div>

                {/* Col 3 */}
                <div>
                  <span
                    className="mb-[8px] block uppercase text-[#7b3ff2]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 800,
                      fontSize: "11px",
                      lineHeight: "18.98px",
                      letterSpacing: "0.805px",
                    }}
                  >
                    {detail.whereTag}
                  </span>
                  <p
                    className="whitespace-pre-line text-[#273444]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                    }}
                  >
                    {detail.whereBody}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Exact Figma Image Card (380x268, rounded-24px) */}
          <div className="relative h-[268px] w-full shrink-0 overflow-hidden rounded-[24px] lg:w-[380px]">
            <Image
              src="/care-transitions/ct09-fig.png"
              alt="Transition exceptions and escalation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

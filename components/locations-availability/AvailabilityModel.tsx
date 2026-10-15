"use client";

import { useState } from "react";
import { BarChart3, Bell, FileText, Minus, Plus, Route } from "lucide-react";
import SectionHeading from "./SectionHeading";

const states = [
  {
    icon: FileText,
    title: "Informational",
    description:
      "Learn how services and care pathways work. This is the starting point everywhere.",
    tag: "Always labeled in words",
  },
  {
    icon: BarChart3,
    title: "Discovery approved",
    description:
      "Browse approved healthcare listings, only where an approved discovery experience exists.",
    tag: "Approved discoverability",
  },
  {
    icon: Route,
    title: "Requests approved",
    description:
      "Start an authorized request only where it is confirmed to be enabled. A request is not a confirmed appointment.",
    tag: "Approved requests and referrals",
  },
  {
    icon: Bell,
    title: "Temporarily unavailable",
    description:
      "Where an activated market is suspended, the affected links are withheld and a safe notice explains why.",
    tag: "Degraded or suspended",
  },
];

export default function AvailabilityModel() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-[#F8F7FE] to-[#ECE8FD] py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Availability model"
          title={
            <>
              Availability varies by location and
              <br className="hidden sm:block" /> service
            </>
          }
          description="A location appearing in this guide does not mean provider search, appointment requests, referrals or clinical services are active there. Each available action is labeled separately and checked before it is offered."
          className="lg:max-w-[965px]"
        />

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)] lg:gap-x-[100px]">
          <AvailabilityIllustration />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {states.map((state) => {
              const Icon = state.icon;
              return (
                <div
                  key={state.title}
                  className="flex flex-col items-start gap-2.5 rounded-2xl border border-[#E6E3F5] bg-white p-6 shadow-[0_2px_6px_rgba(36,28,89,0.05),0_12px_32px_rgba(36,28,89,0.10)]"
                >
                  <span className="mb-1.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEEAFE] text-[#4F3FC8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-[18px] font-bold leading-6 text-[#211A5A] [font-family:var(--font-sora)]">
                    {state.title}
                  </h3>
                  <p className="text-[16px] leading-[25px] text-[#615D7E]">
                    {state.description}
                  </p>
                  <span className="rounded-full bg-[#EEEAFE] px-3 py-[3px] text-[12px] font-semibold leading-5 text-[#4F3FC8]">
                    {state.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#E6E3F5] bg-white px-5">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="flex min-h-14 w-full items-center justify-between py-3.5 text-left focus:outline-none"
          >
            <span className="text-[16px] font-semibold text-[#211A5A] [font-family:var(--font-sora)]">
              What do these states mean?
            </span>
            <span className="text-[#4F3FC8]">
              {open ? (
                <Minus className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Plus className="h-5 w-5" aria-hidden="true" />
              )}
            </span>
          </button>
          {open && (
            <p className="pb-5 text-[15px] leading-7 text-[#615D7E]">
              Each state describes one capability in one location. A location
              can be informational for one service and have approved discovery
              for another. States are shown in words, not only colors or icons,
              and nothing is labeled available until it has been confirmed for
              that location.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function AvailabilityIllustration() {
  return (
    <svg
      viewBox="0 0 561 470"
      className="mx-auto w-full max-w-[561px]"
      role="img"
      aria-label="Illustration of a care location picker with informational, service discovery and request options"
    >
      <defs>
        <linearGradient id="la-model-circle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F1EEFE" />
          <stop offset="1" stopColor="#C8B7FA" />
        </linearGradient>
        <linearGradient id="la-model-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8B7CF0" />
          <stop offset="1" stopColor="#5A44D2" />
        </linearGradient>
      </defs>

      <circle cx="300" cy="225" r="235" fill="url(#la-model-circle)" />
      <rect x="62" y="81" width="22" height="18" rx="6" fill="#B7A7F7" />
      <circle cx="519" cy="60" r="6" fill="#8B7CF0" />
      <circle cx="41" cy="330" r="6" fill="#B7A7F7" />

      {/* Location picker card */}
      <rect x="73" y="70" width="322" height="214" rx="18" fill="#FFFFFF" />
      <text x="102" y="111" fontSize="15" fontWeight="700" fill="#211A5A" style={{ fontFamily: "var(--font-sora)" }}>
        Where do you need care?
      </text>
      <rect x="102" y="128" width="285" height="46" rx="8" fill="#F8F7FE" stroke="#C9C0F5" />
      <path
        d="M127 144c-3.3 0-6 2.6-6 5.9 0 4.4 6 10.1 6 10.1s6-5.7 6-10.1c0-3.3-2.7-5.9-6-5.9z"
        fill="none"
        stroke="#4F3FC8"
        strokeWidth="1.7"
      />
      <circle cx="127" cy="150" r="2" fill="none" stroke="#4F3FC8" strokeWidth="1.7" />
      <text x="148" y="156" fontSize="13.5" fill="#615D7E">
        Select a care location
      </text>
      <path d="M360 148l7 7 7-7" fill="none" stroke="#4F3FC8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="102" y="194" width="285" height="46" rx="8" fill="#4267D5" />
      <text x="244.5" y="222" fontSize="14.5" fontWeight="700" fill="#FFFFFF" textAnchor="middle">
        View availability
      </text>

      {/* Shield */}
      <path
        d="M473 26l58 22v50c0 40-25 64-58 78-33-14-58-38-58-78V48z"
        fill="url(#la-model-shield)"
      />
      <path d="M447 98l18 18 34-36" fill="none" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />

      {/* Capability pills */}
      {[
        { x: 260, y: 262, w: 260, label: "Informational", icon: "plus" },
        { x: 285, y: 328, w: 235, label: "Service discovery", icon: "search" },
        { x: 235, y: 394, w: 285, label: "Request options", icon: "check" },
      ].map((pill) => (
        <g key={pill.label}>
          <rect x={pill.x} y={pill.y} width={pill.w} height="52" rx="10" fill="#FFFFFF" />
          <circle cx={pill.x + 29} cy={pill.y + 26} r="13" fill="#EEEAFE" />
          {pill.icon === "plus" && (
            <path
              d={`M${pill.x + 29} ${pill.y + 20}v12M${pill.x + 23} ${pill.y + 26}h12`}
              stroke="#4F3FC8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
          {pill.icon === "search" && (
            <>
              <circle cx={pill.x + 27} cy={pill.y + 24} r="5" fill="none" stroke="#4F3FC8" strokeWidth="2" />
              <path d={`M${pill.x + 31} ${pill.y + 28}l4 4`} stroke="#4F3FC8" strokeWidth="2" strokeLinecap="round" />
            </>
          )}
          {pill.icon === "check" && (
            <path
              d={`M${pill.x + 23} ${pill.y + 26}l4 4 8-8`}
              fill="none"
              stroke="#4F3FC8"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <text x={pill.x + 56} y={pill.y + 31} fontSize="14" fontWeight="700" fill="#211A5A">
            {pill.label}
          </text>
        </g>
      ))}

      {/* Small plus badge */}
      <g transform="rotate(13.5 87 308)">
        <rect x="75" y="297" width="24" height="22" rx="6" fill="#8B7CF0" opacity="0.9" />
        <path d="M87 302v12M81 308h12" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

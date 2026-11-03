"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

const tabs = [
  {
    label: "Appointments & requests",
    title: "Appointments & requests",
    text: "Requests, holds and confirmed appointments are separate. Only an explicit provider confirmation is a booking.",
    steps: [
      { label: "Submitted", tone: "bg-[#E8EDFF] text-[#3B5BDB]" },
      { label: "Held", tone: "bg-[#FFF3D6] text-[#9A6B00]" },
      { label: "Confirmed", tone: "bg-[#E3F7EA] text-[#1E7B43]" },
    ],
    link: { label: "Learn about appointments", href: "/appointments-requests" },
  },
  {
    label: "Referrals & next steps",
    title: "Referrals & next steps",
    text: "A referral is sent by one organization and accepted by another. Sent doesn't mean accepted, and accepted doesn't mean scheduled.",
    steps: [
      { label: "Sent", tone: "bg-[#E8EDFF] text-[#3B5BDB]" },
      { label: "Received", tone: "bg-[#FFF3D6] text-[#9A6B00]" },
      { label: "Accepted", tone: "bg-[#E3F7EA] text-[#1E7B43]" },
    ],
    link: { label: "Learn about referrals", href: "/referrals-next-steps" },
  },
  {
    label: "Messages & notifications",
    title: "Messages & notifications",
    text: "Messages show who sent them and when. A delivered message isn't the same as a read or answered one.",
    steps: [
      { label: "Sent", tone: "bg-[#E8EDFF] text-[#3B5BDB]" },
      { label: "Delivered", tone: "bg-[#FFF3D6] text-[#9A6B00]" },
      { label: "Replied", tone: "bg-[#E3F7EA] text-[#1E7B43]" },
    ],
    link: { label: "Learn about messages", href: "/patients-messages" },
  },
];

export default function JourneyParts() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section
      id="journey-parts"
      className="bg-[#F5F7FC] px-6 py-16 font-sans lg:px-24 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <Eyebrow>Three parts of your journey</Eyebrow>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          Appointments, referrals and messages.
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-[#697386] md:text-base">
          Each part is live only where the organization supports it and the
          service is enabled in your region.
        </p>

        <div
          role="tablist"
          aria-label="Parts of your journey"
          className="mb-6 inline-flex flex-wrap gap-1 rounded-xl bg-white p-1 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
        >
          {tabs.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              id={`journey-tab-${i}`}
              aria-selected={active === i}
              aria-controls="journey-panel"
              onClick={() => setActive(i)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors md:text-sm ${
                active === i
                  ? "bg-[#1E2A78] text-white"
                  : "text-[#0A2540] hover:bg-[#EEF1FF]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          id="journey-panel"
          role="tabpanel"
          aria-labelledby={`journey-tab-${active}`}
          className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#E6EBF1] bg-white md:grid-cols-2"
        >
          <img
            src="/manage-your-journey/tab-appointments.webp"
            alt="Clinician holding a phone"
            className="h-64 w-full object-cover md:h-full"
          />
          <div className="flex flex-col justify-center p-6 md:p-10">
            <span className="mb-3 w-fit rounded-full bg-[#E3F7EA] px-3 py-1 text-[11px] font-semibold text-[#1E7B43]">
              Live only where enabled
            </span>
            <h3 className="mb-2 text-xl font-bold text-[#0A2540]">{tab.title}</h3>
            <p className="mb-5 text-sm leading-relaxed text-[#697386]">{tab.text}</p>

            <div className="mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-[#E6EBF1] p-4">
              {tab.steps.map((s, i) => (
                <span key={s.label} className="flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${s.tone}`}>
                    {s.label}
                  </span>
                  {i < tab.steps.length - 1 && (
                    <span aria-hidden="true" className="text-[#B0B8C4]">→</span>
                  )}
                </span>
              ))}
            </div>

            <Link
              href={tab.link.href}
              className="group flex w-fit items-center gap-2 text-sm font-bold text-[#2F4DC0]"
            >
              {tab.link.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

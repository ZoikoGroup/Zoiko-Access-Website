"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Accent, Eyebrow, container, heading, section } from "./shared";

const tabs = {
  journey: {
    label: "Evidence journey",
    steps: [
      { title: "Inquiry", body: "You express interest through an informational route." },
      { title: "Qualification", body: "Purpose and fit are checked against criteria." },
      { title: "Scope", body: "Data, markets and roles are defined." },
      { title: "Diligence", body: "Security, privacy and legal evidence is reviewed." },
      { title: "Validation", body: "Testing with the responsible institution." },
      { title: "Decision", body: "A signed decision, or a clear no." },
    ],
  },
  assessment: {
    label: "Partner assessment",
    steps: [
      { title: "Purpose", body: "The intended use is stated and limited." },
      { title: "Security", body: "Controls and incident handling are evidenced." },
      { title: "Privacy", body: "Lawful basis and minimum data are confirmed." },
      { title: "Interoperability", body: "Standards and message formats are checked." },
      { title: "Operations", body: "Support, ownership and exceptions are named." },
      { title: "Outcome", body: "A scoped result, recorded with a review date." },
    ],
  },
} as const;

type TabKey = keyof typeof tabs;

export default function InterestToDecision() {
  const [active, setActive] = useState<TabKey>("journey");
  const { steps } = tabs[active];

  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <Eyebrow purple>Proposed journey</Eyebrow>
        <h2 className={`${heading} text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
          From interest to <Accent>decision</Accent>
        </h2>

        <div
          role="tablist"
          aria-label="Journey view"
          className="mt-6 inline-flex rounded-full border border-[#E4E7F2] bg-white p-1"
        >
          {(Object.keys(tabs) as TabKey[]).map((key) => (
            <button
              key={key}
              id={`journey-tab-${key}`}
              type="button"
              role="tab"
              aria-selected={active === key}
              aria-controls="journey-panel"
              onClick={() => setActive(key)}
              className={`${heading} rounded-full px-5 py-2.5 text-sm transition-colors ${
                active === key ? "bg-[#7B5CF0] text-white" : "text-[#5B6B8C] hover:text-[#16245A]"
              }`}
            >
              {tabs[key].label}
            </button>
          ))}
        </div>

        <ol
          id="journey-panel"
          role="tabpanel"
          aria-labelledby={`journey-tab-${active}`}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-[#E4E7F2] bg-white p-5">
              <p className={`${heading} text-3xl font-bold text-[#6A5BE0]`}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className={`${heading} mt-2 text-base text-[#16245A]`}>{s.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">{s.body}</p>
              {i < steps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -right-3.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[#7B5CF0] lg:block"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#E4E7F2] border-l-4 border-l-[#7B5CF0] bg-white px-5 py-4">
          <span
            aria-hidden="true"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEEAFE] text-xs font-semibold text-[#7B5CF0]"
          >
            i
          </span>
          <p className="text-sm text-[#2A3550]">Explanatory states only. This is not a live application.</p>
        </div>
      </div>
    </section>
  );
}

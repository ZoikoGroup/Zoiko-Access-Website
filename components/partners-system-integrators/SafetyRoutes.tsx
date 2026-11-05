"use client";

import { useState } from "react";
import { Eyebrow, IMG, heading } from "./shared";

const scenarios = [
  {
    title: "Incident",
    text: "A security or safety event is logged, contained and reported to the accountable organization.",
    owner: "Authorized organization",
    first: "Contain and record",
    oversight: "Clinical-safety lead",
  },
  {
    title: "Downtime",
    text: "A connection is unavailable. Teams switch to the agreed fallback process until service is restored.",
    owner: "Authorized organization",
    first: "Switch to fallback",
    oversight: "Operational owner",
  },
  {
    title: "Mismatch",
    text: "Data does not match between systems. The source of record is checked before anything is corrected.",
    owner: "Source system owner",
    first: "Hold and compare",
    oversight: "Data steward",
  },
  {
    title: "Failed receipt",
    text: "A message was not acknowledged. It is retried or resent manually and the gap is recorded.",
    owner: "Integrator",
    first: "Retry and log",
    oversight: "Operational owner",
  },
  {
    title: "Escalation",
    text: "A problem that could affect care is passed to a named person at the responsible organization.",
    owner: "Licensed care organization",
    first: "Notify named contact",
    oversight: "Clinical-safety lead",
  },
  {
    title: "Rollback",
    text: "A change causes problems. The previous approved version is restored under the change plan.",
    owner: "Integrator",
    first: "Restore last version",
    oversight: "Governance reviewers",
  },
];

export default function SafetyRoutes() {
  const [active, setActive] = useState(0);
  const s = scenarios[active];

  return (
    <section
      className="bg-[#1B2A8C] bg-cover bg-center px-6 py-16 lg:px-16"
      style={{ backgroundImage: `url(${IMG}/bg-safety.webp)` }}
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow light num="10">
          Clinical safety &amp; incident routes
        </Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-white md:text-4xl md:leading-[48px]`}>
          When something goes wrong, a person owns it.
        </h2>
        <p className="mb-6 max-w-[720px] text-base leading-7 text-[#C9D3F5]">
          Pick a scenario to see how it is handled. These are planning principles, not a live support service.
        </p>

        <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-white/15 bg-[#121C4F] md:grid-cols-[260px_minmax(0,1fr)]">
          <div role="tablist" aria-label="Scenarios" aria-orientation="vertical" className="flex flex-col pt-7">
            {scenarios.map((sc, i) => (
              <button
                key={sc.title}
                role="tab"
                id={`safety-tab-${i}`}
                aria-selected={active === i}
                aria-controls="safety-panel"
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 border-b border-white/10 px-5 py-4 text-left text-sm font-semibold transition-colors ${
                  active === i ? "bg-[#7B5CF0] text-white" : "text-[#C9D3F5] hover:bg-white/5"
                }`}
              >
                <span className="text-xs font-normal opacity-70">{String(i + 1).padStart(2, "0")}</span>
                {sc.title}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id="safety-panel"
            aria-labelledby={`safety-tab-${active}`}
            className="min-w-0 overflow-hidden p-6 md:border-l md:border-white/10 md:p-10"
          >
            <h3 className={`${heading} text-2xl text-white`}>{s.title}</h3>
            <p className="mt-2 max-w-[620px] text-base leading-7 text-[#C9D3F5]">{s.text}</p>
            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["Who owns it", s.owner],
                ["First step", s.first],
                ["Oversight", s.oversight],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/20 px-4 py-3">
                  <dt className="text-[10px] uppercase tracking-wide text-[#C9D3F5]">{label}</dt>
                  <dd className="mt-1 text-sm text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-4 text-xs text-[#C9D3F5]">
          No emergency channel or response-time commitment is offered on this page.
        </p>
      </div>
    </section>
  );
}

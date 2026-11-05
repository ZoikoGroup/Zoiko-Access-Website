"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const controls = [
  {
    title: "Throttling",
    text: "Limits on how many requests a partner can send, so one system cannot overload another.",
    facts: ["limit: agreed per integration", "over limit: rejected, not queued silently"],
  },
  {
    title: "Idempotency",
    text: "A repeated request has the same effect as the first, so a retry never duplicates work.",
    facts: ["key: unique per request", "duplicate: recognized, not re-applied"],
  },
  {
    title: "Retries",
    text: "Failed deliveries are tried again a limited number of times, with growing waits in between.",
    facts: ["count: agreed per integration", "after limit: escalated to a person"],
  },
  {
    title: "Expiry",
    text: "Requests, tokens and messages stop being valid after a set time.",
    facts: ["window: agreed per integration", "expired: rejected, never replayed"],
  },
  {
    title: "Outages",
    text: "When a system is unavailable, work is held or failed visibly. It is never lost silently.",
    facts: ["status: shown as unavailable", "recovery: resumes in order"],
  },
  {
    title: "Circuit breaking",
    text: "Repeated failures pause traffic to a struggling system so it can recover.",
    facts: ["trip: after repeated failures", "reset: tested before full traffic"],
  },
];

export default function OperationalLimits() {
  const [active, setActive] = useState(0);
  const c = controls[active];

  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Delivery & operational limits"
          title="Built to fail safely."
          intro="Six conceptual controls that keep a connection stable under pressure. Pick one to read more."
        />

        <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#E4E7F2] shadow-[0_10px_24px_rgba(36,59,115,0.08)] md:grid-cols-[minmax(0,432px)_minmax(0,1fr)]">
          <div role="tablist" aria-label="Operational controls" className="flex flex-col gap-1 bg-[#F5F8FC] p-3">
            {controls.map((ctl, i) => {
              const on = i === active;
              return (
                <button
                  key={ctl.title}
                  type="button"
                  role="tab"
                  id={`ops-tab-${i}`}
                  aria-selected={on}
                  aria-controls="ops-panel"
                  onClick={() => setActive(i)}
                  className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-left text-base font-semibold transition-colors ${
                    on ? "bg-[#16245A] text-white" : "text-[#243B73] hover:bg-white"
                  }`}
                >
                  {ctl.title}
                  <ChevronRight className={`h-4 w-4 ${on ? "text-[#7EE0C3]" : ""}`} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <div role="tabpanel" id="ops-panel" aria-labelledby={`ops-tab-${active}`} className="bg-white px-6 py-8 md:px-10">
            <h3 className={`${heading} text-2xl text-[#16245A]`}>{c.title}</h3>
            <p className="mt-2 max-w-[580px] text-base leading-7 text-[#5B6B8C]">{c.text}</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {c.facts.map((f) => (
                <li key={f} className="rounded-md border border-[#E4E7F2] bg-[#F5F8FC] px-3 py-2 text-xs text-[#243B73]">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

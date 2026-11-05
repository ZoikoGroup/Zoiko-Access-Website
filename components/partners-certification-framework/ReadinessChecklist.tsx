"use client";

import { useState } from "react";
import { IMG, SectionHeader, heading } from "./shared";

const items = [
  { title: "A named product owner", text: "Someone accountable for the integration." },
  { title: "A defined data purpose", text: "Which data, for which purpose." },
  { title: "Versioned architecture", text: "Current diagrams and interface list." },
  { title: "Data map", text: "Where each field goes, and why." },
  { title: "Security control evidence", text: "Current and owned." },
  { title: "Test results", text: "Including failures and fixes." },
  { title: "Incident and change process", text: "Who responds, and how changes are released." },
];

// Ticks live only in component state: nothing is stored or sent.
export default function ReadinessChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const done = checked.filter(Boolean).length;

  const toggle = (i: number) => setChecked((c) => c.map((v, j) => (j === i ? !v : v)));

  return (
    <section className="border-y border-[#F1EBDD] bg-[#FDFCF8] px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,514px)_minmax(0,1fr)] lg:gap-14">
        <div>
          <SectionHeader
            eyebrow="Readiness checklist"
            title="Check your own readiness."
            intro="A private self-check. Your ticks are not saved or sent anywhere."
          />
          <div className="mt-6 rounded-xl border border-[#E4E7F2] bg-white px-5 py-6" aria-live="polite">
            <p className={`${heading} text-base text-[#16245A]`}>
              {done} of {items.length} ready
            </p>
            <div
              className="mt-4 h-2 overflow-hidden rounded-full bg-[#EEF1F6]"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={items.length}
              aria-valuenow={done}
              aria-label="Readiness progress"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7B5CF0] to-[#4A68D8] transition-[width] duration-300"
                style={{ width: `${(done / items.length) * 100}%` }}
              />
            </div>
            <p className="mt-4 text-xs text-[#5B6B8C]">This is not an assessment and does not change any status.</p>
          </div>
          <img
            src={`${IMG}/readiness.webp`}
            alt="Wooden blocks spelling CHECK with a tick mark"
            className="mt-4 h-72 w-full object-cover"
          />
        </div>

        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={it.title}>
              <label
                className={`flex cursor-pointer items-start gap-4 rounded-xl border bg-white px-5 py-5 transition-colors hover:border-[#B9A7F7] ${
                  checked[i] ? "border-[#7B5CF0]" : "border-[#E4E7F2]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked[i]}
                  onChange={() => toggle(i)}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#7B5CF0]"
                />
                <span>
                  <span className={`${heading} block text-base text-[#16245A]`}>{it.title}</span>
                  <span className="text-sm text-[#5B6B8C]">{it.text}</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

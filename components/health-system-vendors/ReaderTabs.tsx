"use client";

import { useState } from "react";
import { Eyebrow, IMG, heading } from "./shared";

const readers = [
  {
    id: "cio",
    label: "CIO / architect",
    question: "Who controls the clinical record?",
    answer:
      "The EHR stays authoritative. Connections are permissioned and contracted, and only cover what has been agreed.",
    link: { label: "See the authority map", href: "#authority" },
    image: `${IMG}/reader-cio.webp`,
  },
  {
    id: "vendor",
    label: "Vendor / product",
    question: "What would an assessment ask of us?",
    answer:
      "Identity, a clear service description, versioned interfaces, test evidence including failures, security controls and named operations owners.",
    link: { label: "See the assessment package", href: "#qualification" },
    image: `${IMG}/reader-vendor.webp`,
  },
  {
    id: "privacy",
    label: "Privacy / security",
    question: "What has to be settled before any data moves?",
    answer:
      "A lawful basis, individual authorization where required, role limits, regional data rules and written controller arrangements — reviewed per integration and region.",
    link: { label: "See the privacy boundaries", href: "#privacy" },
    image: `${IMG}/security.webp`,
  },
  {
    id: "operations",
    label: "Operations",
    question: "What happens when something fails?",
    answer:
      "Failures are surfaced, never shown as success. Each connection has named owners for support and incidents, and can be suspended if needed.",
    link: { label: "See the security checklist", href: "#security" },
    image: `${IMG}/route-integration-guidance.webp`,
  },
];

export default function ReaderTabs() {
  const [active, setActive] = useState(readers[0].id);
  const reader = readers.find((r) => r.id === active) ?? readers[0];

  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Who this page serves</Eyebrow>
        <h2 className={`${heading} mb-3 max-w-[560px] text-3xl text-[#16245A] md:text-4xl`}>
          Four readers, four first questions.
        </h2>
        <p className="mb-6 text-base leading-7 text-[#5B6B8C]">
          Pick the role closest to yours. Each starts with the question that role usually asks first.
        </p>

        <div role="tablist" aria-label="Choose your role" className="mb-6 flex flex-wrap gap-2.5">
          {readers.map((r) => {
            const selected = r.id === active;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                id={`reader-tab-${r.id}`}
                aria-selected={selected}
                aria-controls="reader-panel"
                onClick={() => setActive(r.id)}
                className={`min-h-12 rounded-full border px-5 text-base font-semibold transition-colors ${
                  selected
                    ? "border-[#16245A] bg-[#16245A] text-white"
                    : "border-[#E4E7F2] bg-white text-[#16245A] hover:border-[#C9C0F7]"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>

        <div
          id="reader-panel"
          role="tabpanel"
          aria-labelledby={`reader-tab-${reader.id}`}
          aria-live="polite"
          className="grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-[0_20px_40px_rgba(22,36,90,0.08)] md:grid-cols-2"
        >
          <img src={reader.image} alt="" className="h-64 w-full object-cover md:h-[356px]" />
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <h3 className={`${heading} mb-3 text-2xl text-[#16245A]`}>{reader.question}</h3>
            <p className="mb-5 text-base leading-7 text-[#5B6B8C]">{reader.answer}</p>
            <a href={reader.link.href} className="group inline-flex items-center gap-1 text-base font-semibold text-[#7B5CF0]">
              {reader.link.label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

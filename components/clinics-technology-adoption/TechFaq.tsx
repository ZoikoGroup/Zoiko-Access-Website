"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { IMG, SectionHeader, container, heading, section } from "./shared";

const faqs = [
  {
    q: "Does this replace our EHR?",
    a: "No. Your EHR stays the source of record. Zoiko Access is designed to coordinate approved tasks only.",
  },
  {
    q: "Is a connector live?",
    a: "No. No connector has been verified in the connector registry, so none is available for any institution today.",
  },
  {
    q: "Can we onboard now?",
    a: "Not yet. Enterprise onboarding opens only once actual contracting and an operational onboarding program exist.",
  },
  {
    q: "Which standards are supported?",
    a: "None is listed yet. Specific standards and protocols are named only after they are validated in the connector registry.",
  },
  {
    q: "Who makes clinical decisions?",
    a: "Your clinicians, always. The coordination layer relays approved task context and never makes clinical decisions.",
  },
  {
    q: "Is patient data used on this page?",
    a: "No. This page is educational. The readiness self-check stays in your browser and nothing is saved or sent.",
  },
];

export default function TechFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader eyebrow="Public FAQs" title="What institutions ask first." />

        <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)]">
          <ul className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="rounded-2xl border border-[#E4E7F2] bg-white">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`ta-faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`${heading} flex w-full items-center gap-3 px-5 py-5 text-left text-base text-[#16245A]`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEEAFE] text-sm text-[#7B5CF0]">
                        Q{i + 1}
                      </span>
                      <span className="flex-1">{f.q}</span>
                      {isOpen ? (
                        <Minus className="h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                      )}
                    </button>
                  </h3>
                  {isOpen && (
                    <p id={`ta-faq-${i}`} className="-mt-1 pb-6 pl-[68px] pr-6 text-base leading-7 text-[#5B6B8C]">
                      {f.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mx-auto w-full max-w-[600px] bg-white">
            <Image
              src={`${IMG}/faq-illustration.webp`}
              alt=""
              width={600}
              height={460}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

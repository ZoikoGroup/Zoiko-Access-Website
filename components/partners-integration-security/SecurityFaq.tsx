"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { SectionHeader, heading } from "./shared";

const faqs = [
  {
    q: "What is a scope?",
    a: "A precise permission: which data, for which purpose, for which organization, in which market. Anything outside it is denied.",
  },
  {
    q: "Are messages signed?",
    a: "Requests and events are checked for origin and freshness before they are trusted. The exact signing method is agreed and reviewed per integration.",
  },
  {
    q: "Can a partner access patient data?",
    a: "Only the fields a healthcare provider has authorized for an approved purpose. Everything outside that scope is denied.",
  },
  {
    q: "How are partners reviewed?",
    a: "Through an approved assessment covering the contract, threat model, penetration evidence and regional restrictions. No review is open yet.",
  },
  {
    q: "Is there a sandbox?",
    a: "Not yet. A sandbox would open only after authorization, and would use synthetic data only.",
  },
];

export default function SecurityFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1220px]">
        <SectionHeader eyebrow="Questions, answered" title="Short answers first." />

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,684px)_minmax(0,488px)] lg:justify-between">
          <ul className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="rounded-2xl border border-[#E4E7F2] bg-white">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`sec-faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`${heading} flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base text-[#16245A] md:text-lg`}
                    >
                      {f.q}
                      {isOpen ? (
                        <Minus className="h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                      )}
                    </button>
                  </h3>
                  {isOpen && (
                    <p id={`sec-faq-${i}`} className="-mt-1 px-6 pb-6 text-base leading-7 text-[#5B6B8C]">
                      {f.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>

          <aside className="rounded-3xl bg-[#16245A] px-8 py-9">
            <h3 className={`${heading} text-xl text-white`}>Want to go further?</h3>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Read how partnerships are assessed. A security review request opens only once an approved, staffed
              process exists.
            </p>
            <Link
              href="/technology-partners"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-[#16245A] transition-colors hover:bg-[#EEEAFE]"
            >
              Technology partners →
            </Link>
            <p className="mt-5 text-xs text-white/60">Security review request: not open yet.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

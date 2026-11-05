"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Eyebrow, IMG, heading } from "./shared";

const terms = [
  { title: "Source of record", text: "The system that holds the authoritative version of the data." },
  { title: "Transport acknowledgement", text: "Proof that a message arrived, not that it was read." },
  { title: "Scope", text: "The exact data and purpose a connection is allowed to cover." },
];

const faqs = [
  {
    q: "What is a system integrator?",
    a: "A team that designs, builds, tests and maintains a specific connection between healthcare systems, for an institution that has authorized it.",
  },
  {
    q: "What is required before a project starts?",
    a: "An accountable sponsor institution, a defined use case, signed contracts, a lawful basis for the data and a feasibility assessment.",
  },
  {
    q: "Does a connection give access to patient records?",
    a: "No. A connection moves only the contracted scope for one purpose. It does not open general access to records.",
  },
  {
    q: "Who handles clinical decisions?",
    a: "Licensed clinicians at the responsible care organization. Integrators and the platform never make care decisions.",
  },
  {
    q: "Does Zoiko Access certify system integrators?",
    a: "No. There is no formal certification program, and no integrator has been assessed on this page.",
  },
];

export default function IntegratorsFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="bg-cover bg-center px-6 py-16 lg:px-16"
      style={{ backgroundImage: `url(${IMG}/bg-faq.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-[450px_1fr] lg:gap-14">
        <div>
          <Eyebrow>FAQ &amp; terminology</Eyebrow>
          <h2 className={`${heading} mb-7 text-3xl text-[#16245A] md:text-[44px] md:leading-[1.2]`}>
            Direct answers, with limits.
          </h2>
          <dl className="space-y-3">
            {terms.map((t) => (
              <div key={t.title} className="rounded-md border border-[#E4E7F2] bg-white px-4 py-3.5">
                <dt className={`${heading} text-base text-[#16245A]`}>{t.title}</dt>
                <dd className="text-sm text-[#5B6B8C]">{t.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="border-t border-[#243B73]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-[#243B73]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`${heading} flex w-full items-center justify-between gap-4 py-8 text-left text-lg text-[#16245A]`}
                  >
                    {f.q}
                    {isOpen ? (
                      <Minus className="h-5 w-5 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                {isOpen && (
                  <p id={`faq-${i}`} className="-mt-3 pb-7 pr-10 text-base leading-7 text-[#5B6B8C]">
                    {f.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

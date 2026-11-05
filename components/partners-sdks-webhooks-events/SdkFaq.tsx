"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { IMG, SectionHeader, heading } from "./shared";

const faqs = [
  {
    q: "Are the SDKs or webhooks live?",
    a: "No. Nothing on this page is live. Surfaces appear here only once they are released and approved.",
  },
  {
    q: "Which programming languages are supported?",
    a: "None yet. Languages and packages are listed only from the governed release registry, which has no entries today.",
  },
  {
    q: "Do events contain patient data?",
    a: "No. An event carries a reference, not health details. Any further data needs a separate permission.",
  },
  {
    q: "Does a delivered event mean a clinician acted?",
    a: "No. Delivery and acknowledgement confirm transport only. An accountable person decides the next step.",
  },
  {
    q: "How do I get developer support?",
    a: "Developer support opens with the published documentation. Until then, start with the API & interoperability overview.",
  },
];

export default function SdkFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-36 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,805px)_minmax(0,364px)] lg:justify-between">
        <div>
          <SectionHeader eyebrow="Frequently asked questions" title="Direct answers." />

          <ul className="mt-8">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-[#E4E7F2]">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`sdk-faq-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`${heading} flex w-full items-center gap-4 py-6 text-left text-base text-[#16245A] md:text-lg`}
                    >
                      <span className="shrink-0 rounded bg-[#EEEAFE] px-2.5 py-1 text-xs font-medium text-[#7B5CF0]">
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
                    <p id={`sdk-faq-${i}`} className="-mt-2 pb-6 pl-14 pr-10 text-base leading-7 text-[#5B6B8C]">
                      {f.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <img
          src={`${IMG}/faq.webp`}
          alt="Open hand with a question mark drawn on the palm"
          className="hidden h-full max-h-[546px] w-full object-cover lg:block"
        />
      </div>
    </section>
  );
}

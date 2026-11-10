"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Accent, Eyebrow, IMG, container, heading, section } from "./shared";

const faqs = [
  {
    q: "Is there a list of approved Zoiko Access partners?",
    a: "No. These pages describe partner types and roles. No approved or deployed partners are listed.",
  },
  {
    q: "Can I apply to become a partner today?",
    a: "Not yet. Partner intake is closed until a staffed, verified intake process is in place. Use the informational pages in the meantime.",
  },
  {
    q: "Does reading about a market mean Zoiko Access is live there?",
    a: "No. Availability is shown only with evidence for each market, organisation, service, role and release.",
  },
  {
    q: "Are integrators certified by Zoiko Access?",
    a: "No. Implementation roles are described here without any implied certification.",
  },
  {
    q: "Who decides whether a connection goes ahead?",
    a: "The sponsoring institution owns authorization. It decides whether a connection may exist and for what purpose.",
  },
  {
    q: "Can I send patient information with an inquiry?",
    a: "No. Never include patient information in public inquiries. It is not accepted or used in analytics.",
  },
];

export default function PartnerFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`bg-white ${section}`}>
      <div className={`${container} grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,503px)_minmax(0,1fr)]`}>
        <img
          src={`${IMG}/faq-partnership-lead.webp`}
          alt="A smiling partnership lead"
          className="h-[320px] w-full rounded-3xl object-cover object-top sm:h-[520px]"
        />
        <div>
          <Eyebrow purple>FAQ</Eyebrow>
          <h2 className={`${heading} text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
            Questions, <Accent>answered first</Accent>
          </h2>
          <ul className="mt-6 space-y-2.5">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="rounded-xl border border-[#E4E7F2] bg-white">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className={`${heading} text-[15px] font-medium text-[#16245A]`}>{f.q}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                    )}
                  </button>
                  {isOpen && (
                    <p id={`faq-${i}`} className="-mt-1 px-5 pb-4 text-sm leading-6 text-[#5B6B8C]">
                      {f.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

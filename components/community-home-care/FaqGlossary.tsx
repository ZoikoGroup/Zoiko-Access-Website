"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Eyebrow, { headingFont } from "./Eyebrow";

const faqs = [
  {
    q: "Does Zoiko Access provide home care?",
    a: "No. Local licensed providers deliver care. This page explains coordination concepts only.",
  },
  {
    q: "Can I arrange care through this page?",
    a: "No. Nothing is booked, requested or sent from this page. Care is arranged directly with a local licensed provider under its own terms.",
  },
  {
    q: "Can family members see my information?",
    a: "Not automatically. Family membership alone doesn't grant access. A family member or caregiver needs verified delegate status, and you can withdraw it.",
  },
  {
    q: "What can a community coordinator do?",
    a: "Guide you to local resources and help with consented, nonclinical steps. Coordinators can't diagnose, prescribe or access full records.",
  },
  {
    q: 'Does "sent" mean a provider accepted my referral?',
    a: "No. Sent only means a transport attempt exists. A referral is accepted only when the authorized provider records an explicit acceptance.",
  },
  {
    q: "Is support available where I live?",
    a: "Availability varies by location and is published only once verified. Your location is never used to infer eligibility or coverage.",
  },
  {
    q: "Can I withdraw permission?",
    a: "Yes. Permissions are designed to be revocable. Withdrawing permission stops future sharing; it doesn't erase records a provider must keep by law.",
  },
  {
    q: "What should I do in an emergency?",
    a: "Contact local emergency services right away. This page is not an emergency response service and cannot respond to urgent situations.",
  },
];

const glossary = [
  { term: "Handoff", text: "Passing information to another organization, with permission." },
  { term: "Proxy / delegate", text: "Someone verified to act for another person." },
  { term: "Safeguarding", text: "Protecting people from harm, abuse or neglect." },
  { term: "Minimum necessary", text: "Sharing only what a task needs." },
];

function FaqItem({
  q,
  a,
  id,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  id: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#E5E8F0] py-4">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-start justify-between gap-4 text-left text-base font-semibold leading-7 text-[#16245A] transition-colors hover:text-[#7C5CFC]"
        >
          {q}
          <span className="mt-1 shrink-0 text-[#7C5CFC]" aria-hidden="true">
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </button>
      </h3>
      <div id={id} hidden={!open}>
        <p className="mt-2 pr-6 text-sm leading-6 text-[#5B6478]">{a}</p>
      </div>
    </div>
  );
}

export default function FaqGlossary() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section className="w-full bg-white py-16 font-sans sm:py-20">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <Eyebrow>Questions &amp; simple glossary</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Plain answers about community &amp; home care.
        </h2>
        <p className="mt-3.5 text-base leading-7 text-[#5B6478]">
          Limited-scope, nonclinical answers.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-[1fr_1fr_420px] lg:gap-x-6">
          {columns.map((col, c) => (
            <div key={c} className="lg:pr-4">
              {col.map((f, i) => {
                const index = c * half + i;
                return (
                  <FaqItem
                    key={f.q}
                    q={f.q}
                    a={f.a}
                    id={`chc-faq-${index}`}
                    open={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                );
              })}
            </div>
          ))}

          <aside className="h-fit rounded-3xl bg-[#ECE7FF] p-6 lg:ml-6">
            <h3
              className={`text-lg font-semibold text-[#16245A] ${headingFont}`}
            >
              Simple glossary
            </h3>
            <dl className="mt-3 space-y-3">
              {glossary.map((g) => (
                <div key={g.term}>
                  <dt className="text-base font-semibold text-[#16245A]">
                    {g.term}
                  </dt>
                  <dd className="text-sm leading-6 text-[#5B45C8]">{g.text}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

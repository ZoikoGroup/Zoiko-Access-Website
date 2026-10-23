"use client";

import { useState } from "react";
import Link from "next/link";
import { Headphones, Minus, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqData = [
  {
    question: "Can I help a family member find healthcare?",
    answer:
      "Yes, you can help research general service information. Accessing their private details or acting for them may require authorization.",
  },
  {
    question: "Does being a spouse or family member grant record access?",
    answer:
      "No. A family relationship alone does not grant access to someone’s records. Access depends on their choices, legal authority and the service’s process.",
  },
  {
    question: "Can a parent see a child’s health information?",
    answer:
      "Sometimes, but not always. It depends on local law, the child’s age and circumstances, and the type of record. Some services for young people are confidential.",
  },
  {
    question: "How can someone authorize a caregiver?",
    answer:
      "Through the process offered by the responsible organization, where an approved service exists. That organization verifies identity and the scope of the permission.",
  },
  {
    question: "Can caregiver access be changed or revoked?",
    answer:
      "Yes. Permissions can be limited, changed, expire or be revoked, and revocation should stop access that is no longer supported.",
  },
  {
    question: "Can I book a visit for someone else?",
    answer:
      "Only where an approved service supports it and you have verified permission. A request is not a confirmed visit until the care provider confirms it.",
  },
  {
    question: "Does Zoiko Access contain every medical record?",
    answer:
      "No. Records stay with the organizations responsible for them. There is no single universal record.",
  },
  {
    question: "What if someone needs immediate medical help?",
    answer:
      "Do not use this website for emergencies. Contact the emergency services appropriate to your location.",
  },
];

export default function CaregiversFaq() {
  // The first answer is open by default, as in the design.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-[72px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,837fr)_minmax(0,418fr)] lg:gap-x-[45px] lg:px-[70px]">
        <div>
          <SectionHeading
            badge="Questions, answered"
            title="Know before you act"
          />
          <div className="mt-5 border-t border-[#E4E0F7]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="border-b border-[#E4E0F7]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex min-h-[60px] w-full items-center justify-between gap-6 py-4 pr-20 text-left focus:outline-none max-md:pr-0"
                  >
                    <span className="text-[16px] font-semibold text-[#1D1857]">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-[#5B45D6]">
                      {isOpen ? (
                        <Minus className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Plus className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="max-w-[680px] pb-6 text-[16px] leading-[26px] text-[#5B5880]">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="rounded-2xl border border-[#E4E0F7] bg-white px-6 pb-6 pt-6 shadow-[0_12px_32px_rgba(36,28,89,0.08)] lg:mt-[90px]">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#5B45D6]">
            <Headphones className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-3 text-[17px] font-semibold text-[#1D1857] [font-family:var(--font-poppins)]">
            Need human help?
          </h3>
          <p className="mt-2 text-[15px] leading-[25px] text-[#5B5880]">
            Assistance is described here only where a staffed route exists.
            Otherwise, use the approved guidance and accessibility pages.
          </p>
          <Link
            href="#accessibility"
            className="mt-5 inline-flex min-h-12 items-center rounded-xl border-2 border-[#5B45D6] px-6 text-[16px] font-semibold text-[#5B45D6] transition-colors hover:bg-[#F3F0FF]"
          >
            Accessible help
          </Link>
        </aside>
      </div>
    </section>
  );
}

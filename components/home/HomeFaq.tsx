"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    id: "what",
    question: "What is Zoiko Access?",
    answer:
      "Zoiko Access is a healthcare access and navigation ecosystem designed to make services easier to discover, understand and navigate, while helping authorized care teams coordinate next steps where supported.",
  },
  {
    id: "book",
    question: "Can I book care from this homepage?",
    answer:
      "No. This homepage explains the model. Live directories, appointment requests and progress updates require separately approved services, and a request is not a confirmed appointment.",
  },
  {
    id: "location",
    question: "Does selecting a location mean services are available?",
    answer:
      "No. Location is a preference for context only. Choosing a location does not activate healthcare services or establish clinical eligibility, and capabilities depend on local authorization.",
  },
  {
    id: "caregiver",
    question: "Can a caregiver act for a patient?",
    answer:
      "Caregiver involvement is subject to permissions and representation. Patient, caregiver, employer and payer access must remain distinct and governed.",
  },
  {
    id: "request",
    question: "Does a request mean an appointment is confirmed?",
    answer:
      "No. Submitting a request does not imply an accepted referral or a booked slot. Confirmed updates belong to the responsible provider.",
  },
  {
    id: "emergency",
    question: "Is this an emergency or medical-advice service?",
    answer:
      "No. Zoiko Access does not provide emergency response, diagnosis or medical advice. In an emergency, contact your local emergency services. Clinical decisions stay with appropriately authorized healthcare professionals.",
  },
] as const;

export default function HomeFaq() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,420fr)_minmax(0,833fr)] lg:gap-x-[67px] lg:px-[60px] lg:py-20">
        <div>
          <SectionHeading
            badge="Questions, answered"
            title={
              <>
                Know before
                <br />
                you take the next step.
              </>
            }
            description="Plain-language guidance about the ecosystem and its boundaries."
            className="max-w-[420px]"
          />
        </div>

        <div className="border-t border-transparent">
          {FAQS.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div key={faq.id} className="border-b border-[#E6EAF2]">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-panel-${faq.id}`}
                    id={`home-faq-trigger-${faq.id}`}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-[16px] font-semibold text-[#23327A]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus
                        className="h-4 w-4 shrink-0 text-[#1F5FC9]"
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        className="h-4 w-4 shrink-0 text-[#1F5FC9]"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    id={`home-faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`home-faq-trigger-${faq.id}`}
                    className="pb-6 pr-10"
                  >
                    <p className="text-[15px] leading-[1.7] text-[#4B5563]">
                      {faq.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What is Zoiko Access?",
    answer:
      "Zoiko Access is a healthcare access and navigation platform designed to help people understand options and navigate supported next steps through participating organizations.",
  },
  {
    question: "Can I book an appointment here?",
    answer:
      "No. This page is educational. Appointment requests are available only where an authorized location, partner and service are confirmed, and a request is not a confirmed appointment.",
  },
  {
    question: "Are appointment requests confirmed automatically?",
    answer:
      "No. The responsible provider or organization must accept a request before it becomes a confirmed appointment.",
  },
  {
    question: "Does Zoiko Access store all my records here?",
    answer:
      "No. Relevant records remain with their responsible sources and applicable regional safeguards. This public page does not show personal health information.",
  },
  {
    question: "Can someone help me manage my care?",
    answer:
      "A parent, guardian or caregiver may help only within legally and technically proven authority, matched to the particular person, role and task.",
  },
  {
    question: "What if I need urgent care?",
    answer:
      "Do not use this website for urgent or emergency care. Contact the emergency services appropriate to your location.",
  },
];

export default function PatientsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,403fr)_minmax(0,813fr)] lg:gap-x-16">
          {/* Left Column - Header */}
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-[#6A44D4]">
              <span
                className="block h-1.5 w-1.5 rounded-full bg-[#7C5CE8]"
                aria-hidden="true"
              />
              Questions, answered
            </p>

            <h2 className="mt-5 max-w-[400px] text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[36px] sm:leading-10">
              Know what you can do. Understand what it means.
            </h2>
          </div>

          {/* Right Column - Accordion List */}
          <div className="flex flex-col divide-y divide-[#E4DEFB] border-b border-[#E4DEFB]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="py-6 first:pt-2">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-6 text-[15px] font-semibold text-[#23327A] sm:text-[16px]">
                      {item.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#B9A6F9]">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3 pr-12 text-[14px] leading-[1.8] text-[#4B5563] sm:text-[15px]">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

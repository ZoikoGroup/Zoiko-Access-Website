"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqData = [
  {
    question: "Does submitting a request confirm my appointment?",
    answer:
      "No. An appointment is confirmed only after the responsible healthcare organization accepts and confirms it.",
  },
  {
    question: "What is the difference between requested, held and confirmed?",
    answer:
      "Requested means you asked for a visit. Held means the organization is keeping a time under its own rules. Confirmed means the organization has accepted and confirmed the appointment.",
  },
  {
    question: "Why don’t I see my appointment?",
    answer:
      "Appointment tools appear only where the service is available for your care location and account. Appointments with other providers may not be shown here.",
  },
  {
    question: "Which time zone is shown?",
    answer:
      "Appointments are shown in the facility’s local time first, so check the time zone before you travel.",
  },
  {
    question: "Can a caregiver manage someone’s appointments?",
    answer:
      "Only with verified, scoped permission from the person or a legal authority. Access ends when that authority is revoked.",
  },
  {
    question: "Can I cancel or reschedule here?",
    answer:
      "Only where the organization supports it. A reschedule request does not change the time until the organization confirms.",
  },
  {
    question: "What if I need urgent medical help?",
    answer:
      "Do not use this page for emergencies. Contact the emergency services appropriate to your location.",
  },
];

export default function AppointmentsFaq() {
  // The first answer is open by default, as in the design.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F5F8FC] py-[84px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[94px]">
        <SectionHeading badge="Questions, answered" title="Understand what a request means" />

        <div className="mt-10 flex flex-col gap-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`rounded-xl border bg-white px-[22px] ${
                  isOpen ? "border-[#7C3AED]" : "border-[#DCD6F5]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center justify-between gap-6 py-4 text-left focus:outline-none"
                >
                  <span className="text-[16px] font-semibold text-[#0E1E6E]">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-[#7C3AED]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                    ) : (
                      <Plus className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-[15px] leading-6 text-[#2C3352]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

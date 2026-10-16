"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const concepts = [
  {
    title: "Professional title",
    answer:
      "The name a person uses for their role. Titles and their legal protection differ between locations, so a title alone does not describe what someone may do.",
  },
  {
    title: "Qualification",
    answer:
      "Education or training a person has completed. A qualification does not by itself grant permission to practice.",
  },
  {
    title: "Registration or licensing",
    answer:
      "Permission to practice granted by the relevant authority in a location, which may set conditions on scope or supervision.",
  },
  {
    title: "Facility credentialing",
    answer:
      "An organization’s own process for approving which professionals may provide which services in its setting.",
  },
  {
    title: "Insurance-network participation",
    answer:
      "A relationship with a particular payer or arrangement. It is separate from qualification, licensing, and credentialing.",
  },
];

export default function QualificationsPermissions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,510fr)_minmax(0,714fr)] lg:gap-x-[56px] lg:px-20">
        <div>
          <SectionHeading
            badge="Qualifications & permissions"
            title={
              <>
                Five separate questions.
                <br />
                No single verification badge.
              </>
            }
          />
          <p className="mt-10 text-[16px] leading-7 text-[#5E6B85]">
            Training, licensing, facility credentialing, and insurance-network
            participation are different concepts. Use the relevant official or
            organization-authoritative source in your location.
          </p>
          <p className="mt-5 text-[12px] leading-5 text-[#5E6B85]">
            No regulator links are invented. A jurisdiction-reviewed source must
            be supplied before a local verification route is offered.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {concepts.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-[#E5E7EB] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[72px] w-full items-center justify-between rounded-xl px-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4267D5]"
                >
                  <span className="text-[16px] font-bold text-[#23327A]">
                    {item.title}
                  </span>
                  <span className="text-[#4267D5]">
                    {isOpen ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-[14px] leading-6 text-[#5E6B85]">
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

const categories = [
  {
    title: "Primary care",
    description:
      "General first-contact and continuing care, delivered within local professional arrangements.",
    examples: "Routine check-ins, ongoing care coordination, general advice visits.",
    roles: "General practitioners, family physicians, nurses, practice teams.",
    question: "How does this practice handle follow-up and referrals?",
  },
  {
    title: "Specialist services",
    description:
      "Care focused on a particular clinical area or professional expertise.",
    examples: "Consultations within a defined clinical area of expertise.",
    roles: "Specialist physicians and allied specialist professionals.",
    question: "Is a referral needed before contacting this service?",
  },
  {
    title: "Diagnostics and imaging",
    description:
      "Tests and imaging used within appropriate professional care pathways.",
    examples: "Laboratory tests, imaging appointments, result handoffs.",
    roles: "Laboratory teams, radiographers, reporting professionals.",
    question: "Who will receive and explain the results?",
  },
  {
    title: "Pharmacy services",
    description:
      "Medication-related services under local professional and supply rules.",
    examples: "Dispensing, medication questions, supply availability.",
    roles: "Pharmacists and pharmacy teams.",
    question: "What does this pharmacy need before it can help?",
  },
  {
    title: "Mental health support",
    description:
      "Support within appropriate local mental-health professional and service arrangements.",
    examples: "Talking support, community services, specialist programs.",
    roles: "Counsellors, psychologists, psychiatrists, support workers.",
    question: "How is urgent help accessed where I live?",
  },
  {
    title: "Rehabilitation",
    description:
      "Services supporting function and participation within professional care plans.",
    examples: "Physiotherapy, occupational therapy, recovery programs.",
    roles: "Physiotherapists, occupational therapists, rehabilitation teams.",
    question: "How are goals and progress reviewed?",
  },
  {
    title: "Home/community support",
    description:
      "Care-related support delivered in home or community settings where authorized.",
    examples: "Home visits, community nursing, support services.",
    roles: "Community nurses, home-care providers, local services.",
    question: "Which organization coordinates visits and changes?",
  },
  {
    title: "Preventive care",
    description:
      "Services intended to support prevention under applicable professional guidance.",
    examples: "Screening programs, vaccinations, health checks.",
    roles: "Primary care teams, public-health services, pharmacists.",
    question: "Which programs apply to me under local guidance?",
  },
];

export default function CategoryGuide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        {/* Intro panel */}
        <div className="flex flex-col items-start gap-3 rounded-xl bg-[#EEEAFE] p-6">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-[#6A44D4]">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#6A44D4]"
              aria-hidden="true"
            />
            Category guide
          </p>
          <h2 className="pt-2 text-[24px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
            Read at your own pace.
          </h2>
          <p className="pt-1.5 text-[12px] leading-6 text-[#5E6B85]">
            Open a category for examples, relevant roles, and questions to ask a
            local professional.
          </p>
          <p className="text-[12px] leading-6 text-[#5E6B85]">
            These are candidate editorial definitions from the wireframe—not a
            live catalog. Clinical, legal, and editorial review is required
            before publication.
          </p>
          <Link
            href="#"
            className="inline-flex min-h-12 items-center rounded-md border border-[#C9D3F2] bg-white px-5 text-[13px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
          >
            Compare key terms →
          </Link>
        </div>

        {/* Category cards */}
        <div className="mt-10 grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const isOpen = openIndex === index;
            const number = String(index + 1).padStart(2, "0");
            const panelId = `category-panel-${index}`;
            return (
              <div
                key={category.title}
                className="rounded-xl border border-[#E5E7EB] bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="relative flex min-h-[176px] w-full flex-col gap-3 py-6 pl-6 pr-11 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4267D5] rounded-xl"
                >
                  <span className="text-[10px] uppercase leading-4 tracking-wide text-[#6A44D4]">
                    {number} / General education
                  </span>
                  <span className="pt-2 text-[24px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
                    {category.title}
                  </span>
                  <span className="text-[14px] leading-6 text-[#5E6B85]">
                    {category.description}
                  </span>
                  <span className="absolute right-5 top-[62px] text-[#4267D5]">
                    {isOpen ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <dl
                    id={panelId}
                    className="mx-6 space-y-3 border-t border-[#E5E7EB] pb-6 pt-4 text-[13px] leading-6"
                  >
                    <div>
                      <dt className="font-bold text-[#23327A]">Examples</dt>
                      <dd className="text-[#5E6B85]">{category.examples}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-[#23327A]">
                        Relevant roles
                      </dt>
                      <dd className="text-[#5E6B85]">{category.roles}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-[#23327A]">
                        A question to ask locally
                      </dt>
                      <dd className="text-[#5E6B85]">{category.question}</dd>
                    </div>
                  </dl>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

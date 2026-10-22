"use client";

import Link from "next/link";

interface FaqEntry {
  question: string;
  answer: string;
}

const faqs: FaqEntry[] = [
  {
    question: "What's the difference between a result and a review?",
    answer:
      "A result is the report the source produces. A review is a responsible clinician examining it and recording that they did. A result can exist, be sent and be received without being reviewed.",
  },
  {
    question: "Does a portal or system receipt prove a clinician reviewed it?",
    answer:
      "No. A receipt shows a system accepted the report. Only a review recorded by the responsible clinician shows review took place.",
  },
  {
    question: "Who informs the patient?",
    answer:
      "The responsible clinician or organization, under local rules. Zoiko Access doesn't decide what to tell patients or when.",
  },
  {
    question: "What happens when a result is corrected?",
    answer:
      "The source issues a new version that references the earlier one. Earlier versions and their history stay visible, and the new version needs its own review.",
  },
  {
    question: "Is this available where I practice?",
    answer:
      "It depends on participating organizations and local authorization. This page describes the approach; it isn't a statement of availability in any location.",
  },
  {
    question: "Who is clinically accountable?",
    answer:
      "The originating organization is accountable for its report. The receiving clinician and organization are accountable for review, interpretation and follow-up.",
  },
];

export default function ResultsReviewFaq() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Eyebrow, Heading & FAQ list */}
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
              <span className="h-0.5 w-4 bg-[#6d5ae6]" />
              <span>QUESTIONS, ANSWERED</span>
            </div>

            {/* Section Heading */}
            <h2 className="mb-10 text-[30px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight text-[#111827] [font-family:var(--font-poppins)] leading-tight">
              Results and review, answered <br className="hidden sm:inline" />
              directly.
            </h2>

            {/* FAQ List */}
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="mb-1.5 text-[14.5px] sm:text-[15px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                    {faq.question}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-500">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Working in care coordination Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs">
              <h3 className="mb-2 text-[15.5px] sm:text-[16px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                Working in care coordination?
              </h3>
              <p className="mb-6 text-[12px] leading-relaxed text-slate-500">
                See how clinicians may take part, or start an organizational
                conversation where a verified route exists.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href="#explore-participation"
                  className="block w-full rounded-xl bg-[#6d5ae6] py-2.5 px-4 text-center text-[12.5px] font-semibold text-white shadow-xs transition hover:bg-[#5b48db]"
                >
                  Explore clinician participation
                </Link>
                <Link
                  href="#organizational-integration"
                  className="block w-full rounded-xl border border-slate-200 bg-white py-2.5 px-4 text-center text-[12.5px] font-semibold text-[#4338ca] shadow-2xs transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Discuss organizational integration
                </Link>
              </div>

              {/* Disclaimer */}
              <p className="mt-4 text-center text-[11px] text-slate-400">
                No sign-up or onboarding is offered from this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

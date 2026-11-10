import React from "react";

interface StructureStep {
  number: string;
  title: string;
  description: string;
}

const articleSteps: StructureStep[] = [
  {
    number: "01",
    title: "Direct answer",
    description: "40–70 plain-language words, grounded in reviewed sources.",
  },
  {
    number: "02",
    title: "Steps and boundaries",
    description: "What you can do, and what Zoiko Access does not do.",
  },
  {
    number: "03",
    title: "Provenance",
    description: "Owner, source, last-reviewed date, audience and country.",
  },
  {
    number: "04",
    title: "Corrections",
    description:
      "Withdrawn articles redirect to a current replacement, never a dead end.",
  },
];

export default function ArticleStructureTemplate() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Explanatory Steps */}
          <div className="lg:col-span-5">
            <div className="mb-3">
              <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
                — HOW EVERY ARTICLE WORKS
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
              Built to be <span className="text-[#7C3AED]">trusted</span>
            </h2>

            <p className="mt-3 text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
              Each article follows the same reading template.
            </p>

            {/* 4 Template Component Steps */}
            <div className="mt-8 space-y-4">
              {articleSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:border-[#CBD5E1]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#16245A] font-mono text-[13px] font-bold text-white shadow-sm">
                    {step.number}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[16px] font-bold text-[#0E1646]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-[1.5] text-[#475569]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Mockup Preview of Article Component */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              {/* Mockup Header Bar */}
              <div className="border-b border-[#F1F5F9] bg-[#F8FAFC] px-6 py-3 font-mono text-[12px] text-[#64748B]">
                Help center &rsaquo; Accounts and permissions
              </div>

              {/* Mockup Body Content */}
              <div className="p-6 sm:p-10">
                <h3 className="text-[24px] font-bold text-[#0E1646] sm:text-[28px]">
                  Can I act for another person?
                </h3>

                {/* Metadata Pills */}
                <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px]">
                  <span className="rounded-full bg-[#F1F0FE] px-3 py-1 font-semibold text-[#7C3AED]">
                    Caregiver / guardian
                  </span>
                  <span className="rounded-full bg-[#F1F0FE] px-3 py-1 font-semibold text-[#7C3AED]">
                    General guidance
                  </span>
                  <span className="rounded-full bg-[#F1F0FE] px-3 py-1 font-semibold text-[#7C3AED]">
                    Reviewed [date]
                  </span>
                </div>

                {/* Direct Answer Box */}
                <div className="mt-6 rounded-2xl bg-[#F1F0FE]/60 p-5 border border-[#7C3AED]/20">
                  <span className="block font-mono text-[11px] font-bold tracking-wider text-[#7C3AED] uppercase">
                    DIRECT ANSWER
                  </span>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#0E1646]">
                    Only with explicit, delegated permission for a defined role.
                    Being a caregiver does not give automatic access.
                  </p>
                </div>

                {/* Steps and Boundaries List */}
                <div className="mt-6 space-y-3 font-sans text-[14px] text-[#475569]">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[13px] font-bold text-[#7C3AED]">
                      1.
                    </span>
                    <span>
                      Ask the person, or their legal representative, to grant
                      permission.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[13px] font-bold text-[#7C3AED]">
                      2.
                    </span>
                    <span>Check exactly what the permission covers.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[13px] font-bold text-[#7C3AED]">
                      3.
                    </span>
                    <span>
                      Permissions can be limited or revoked at any time.
                    </span>
                  </div>
                </div>

                {/* Helpful Rating Section */}
                <div className="mt-8 border-t border-[#F1F5F9] pt-6 flex items-center gap-4">
                  <span className="text-[13px] font-medium text-[#64748B]">
                    Was this helpful?
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-full border border-[#E2E8F0] px-4 py-1 font-sans text-[12px] font-bold text-[#0E1646] transition-colors hover:bg-slate-50"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-[#E2E8F0] px-4 py-1 font-sans text-[12px] font-bold text-[#0E1646] transition-colors hover:bg-slate-50"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

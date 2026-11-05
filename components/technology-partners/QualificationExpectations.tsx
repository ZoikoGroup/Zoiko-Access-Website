import React from "react";

interface QualificationRow {
  title: string;
  description: string;
}

const qualificationsData: QualificationRow[] = [
  {
    title: "Data minimization",
    description: "Only the fields a defined purpose needs.",
  },
  {
    title: "Security evidence",
    description: "Current, owned and reviewed control evidence.",
  },
  {
    title: "Operational readiness",
    description: "Monitoring, support and incident handling.",
  },
  {
    title: "Interface testing",
    description: "Documented test results, including failures.",
  },
  {
    title: "Accessibility",
    description: "Partner-facing experiences meet WCAG 2.2 AA.",
  },
  {
    title: "Contracts & ownership",
    description: "Named owners and signed terms.",
  },
];

export default function QualificationExpectations() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Qualification expectations
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            What a partner would need to evidence.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Shown empty on purpose &mdash; no partner has evidence recorded
            here, and nothing is pre-certified.
          </p>
        </div>

        {/* List Grid Container */}
        <div className="mt-12 flex flex-col gap-4">
          {qualificationsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-[#CBD5E1]"
            >
              {/* Title & Description */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 w-full items-center">
                <div className="sm:col-span-4">
                  <h3 className="text-[16px] font-bold text-[#1E1B4B]">
                    {item.title}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-[14px] text-[#475569]">
                    {item.description}
                  </p>
                </div>
                {/* Empty Evidence Placeholder Bars */}
                <div className="sm:col-span-2 flex justify-start sm:justify-end mt-3 sm:mt-0">
                  <div className="h-3 w-28 rounded-full bg-[#E2E8F0]/70" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

interface PhaseRow {
  number: string;
  title: string;
  description: string;
  owner: string;
  prerequisite: string;
}

const phasesData: PhaseRow[] = [
  {
    number: "01",
    title: "Integration assessment",
    description: "Is this use case possible and lawful?",
    owner: "Sponsor organization",
    prerequisite: "Defined purpose",
  },
  {
    number: "02",
    title: "Scope & agreements",
    description: "Data, roles and contracts",
    owner: "Legal & privacy",
    prerequisite: "Approved assessment",
  },
  {
    number: "03",
    title: "Interface design",
    description: "Versioned technical contract",
    owner: "Technical lead",
    prerequisite: "Signed scope",
  },
  {
    number: "04",
    title: "Testing",
    description: "Synthetic data, failure cases",
    owner: "Integrator + reviewers",
    prerequisite: "Approved design",
  },
  {
    number: "05",
    title: "Release approval",
    description: "Safety, privacy, operations",
    owner: "Governance board",
    prerequisite: "Signed test evidence",
  },
  {
    number: "06",
    title: "Controlled operation",
    description: "Monitor, review, revoke",
    owner: "Operating organization",
    prerequisite: "Release decision",
  },
];

export default function ImplementationPhases() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#F1F0FE] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
              // implementation_phases
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            From assessment to controlled operation.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Six phases, each with an owner and a prerequisite.
          </p>
        </div>

        {/* 6 Sequential Phase Cards */}
        <div className="mt-12 flex flex-col gap-4">
          {phasesData.map((phase) => (
            <div
              key={phase.number}
              className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-[#CBD5E1] sm:flex-row sm:items-center sm:p-7"
            >
              {/* Left Section: Number + Title & Description */}
              <div className="flex items-center gap-6 sm:w-1/2">
                <span className="font-mono text-[22px] font-bold text-[#7C3AED] sm:text-[24px]">
                  {phase.number}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0E1646] sm:text-[18px]">
                    {phase.title}
                  </h3>
                  <p className="mt-0.5 text-[14px] text-[#64748B]">
                    {phase.description}
                  </p>
                </div>
              </div>

              {/* Right Section: Owner & Prerequisite Metadata */}
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#F1F5F9] pt-4 sm:mt-0 sm:w-1/2 sm:border-t-0 sm:pt-0">
                {/* Owner */}
                <div>
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                    OWNER
                  </span>
                  <span className="mt-1 block text-[14px] font-bold text-[#0E1646]">
                    {phase.owner}
                  </span>
                </div>

                {/* Prerequisite */}
                <div>
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                    PREREQUISITE
                  </span>
                  <span className="mt-1 block text-[14px] font-bold text-[#0E1646]">
                    {phase.prerequisite}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Disclaimer Footnote */}
        <p className="mt-6 text-[13px] font-medium text-[#64748B]">
          No fixed dates or certification is promised. Each phase can stop the
          project.
        </p>
      </div>
    </section>
  );
}

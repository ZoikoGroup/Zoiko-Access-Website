import React from "react";

interface FormulaCard {
  title: string;
  subtitle: string;
}

const formulaItems: FormulaCard[] = [
  { title: "Actor", subtitle: "who" },
  { title: "Organization", subtitle: "on whose behalf" },
  { title: "Purpose", subtitle: "why" },
  { title: "Data", subtitle: "what" },
  { title: "Place", subtitle: "where" },
];

export default function AuthorizationSpecificAccess() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#F1F0FE] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
              // authorization
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Access is specific, every time.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Access belongs to one actor, in one organization, for one purpose,
            for specific data, in a specific place.
          </p>
        </div>

        {/* Dark Container Box (#16245A) */}
        <div className="mt-10 overflow-x-auto rounded-3xl bg-[#16245A] p-6 shadow-xl sm:p-8">
          <div className="flex min-w-[840px] items-center justify-between gap-3 sm:gap-4">
            {formulaItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {/* Light Inner Card (#FFFFFF14) */}
                <div
                  className="flex flex-1 flex-col items-center justify-center rounded-2xl p-5 text-center transition-all"
                  style={{ backgroundColor: "#FFFFFF14" }}
                >
                  <span className="text-[17px] font-bold tracking-tight text-white sm:text-[18px]">
                    {item.title}
                  </span>
                  <span className="mt-1 font-mono text-[12px] text-blue-200/70">
                    {item.subtitle}
                  </span>
                </div>

                {/* Plus Operator */}
                <span className="font-mono text-[20px] font-bold text-blue-300/60">
                  +
                </span>
              </React.Fragment>
            ))}

            {/* Equals Operator */}
            <span className="font-mono text-[20px] font-bold text-blue-300/60">
              =
            </span>

            {/* Final Decision Result Card (#7657E8) */}
            <div
              className="flex flex-1 flex-col items-center justify-center rounded-2xl p-5 text-center text-white shadow-lg"
              style={{ backgroundColor: "#7657E8" }}
            >
              <span className="text-[17px] font-bold tracking-tight sm:text-[18px]">
                One decision
              </span>
              <span className="mt-1 font-mono text-[12px] text-purple-200">
                not reusable
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Decision Types Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Patient & Caregiver Decisions */}
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:p-8">
            <h3 className="text-[18px] font-bold text-[#0E1646]">
              Patient &amp; caregiver decisions
            </h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
              Permissions a person gives about their own information, where the
              law gives them that choice.
            </p>
          </div>

          {/* Organization Policy Decisions */}
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:p-8">
            <h3 className="text-[18px] font-bold text-[#0E1646]">
              Organization policy decisions
            </h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
              Rules an organization applies under its own legal duties and
              contracts.
            </p>
          </div>
        </div>

        {/* Footnote Line */}
        <p className="mt-6 text-[13px] font-medium text-[#64748B]">
          There is no consent shortcut. These two kinds of decision are recorded
          separately.
        </p>
      </div>
    </section>
  );
}

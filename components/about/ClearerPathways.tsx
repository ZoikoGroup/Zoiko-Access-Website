const opportunities = [
  {
    number: "01 / DESIGN OPPORTUNITY",
    title: "Finding the right starting point",
    problem: "Service options can be difficult to understand or compare.",
    approach:
      "Clear, local service discovery with transparent source and availability information where enabled.",
  },
  {
    number: "02 / DESIGN OPPORTUNITY",
    title: "Disconnected journeys",
    problem:
      "Appointments, referrals, tests, medicines and follow-up often live in different systems.",
    approach:
      "Governed coordination between participating services, with a clear next step and responsible organization.",
  },
  {
    number: "03 / DESIGN OPPORTUNITY",
    title: "Uncertain progress",
    problem:
      "People may not know whether a request was received, accepted or completed.",
    approach:
      "Visible, evidence-based statuses that do not mistake an electronic receipt for clinical acceptance.",
  },
  {
    number: "04 / DESIGN OPPORTUNITY",
    title: "Repeated administration",
    problem:
      "Care teams and patients often re-enter information and chase responses.",
    approach:
      "Permissioned hand-offs and workflow tracking designed to reduce avoidable repetition.",
  },
  {
    number: "05 / DESIGN OPPORTUNITY",
    title: "Coverage and cost confusion",
    problem: "Benefits, eligibility and payment responsibilities are complex.",
    approach:
      "Locally configured, partner-authoritative navigation of supported eligibility and administrative processes.",
  },
  {
    number: "06 / DESIGN OPPORTUNITY",
    title: "Unequal access to digital care",
    problem:
      "Language, disability, connectivity, confidence and assistance needs can become barriers.",
    approach:
      "Accessible, localized experiences and human-support options where operationally provided.",
  },
];

export default function ClearerPathways() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-5xl">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            The problems we aim to solve
          </p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Clearer pathways for complex journeys.
          </h2>

          <p className="mt-4 text-[16px] text-[#4B5563] sm:text-[17px]">
            These are design ambitions, not claims of proven results or current
            market coverage.
          </p>
        </div>

        {/* Grid of Opportunity Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(118,87,232,0.08)]"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7657E8]">
                  {item.number}
                </span>

                <h3 className="mt-3 text-[22px] font-bold tracking-[-0.02em] text-[#23327A]">
                  {item.title}
                </h3>

                <div className="mt-6 border-t border-[#F3F4F6] pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7657E8]">
                    The Problem
                  </span>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#4B5563]">
                    {item.problem}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-[#F3F4F6] pt-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7657E8]">
                  Our Approach
                </span>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#4B5563]">
                  {item.approach}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const content = {
  badge: "Local availability & evidence",
  title: "Global education. Specific local capabilities.",
  paragraphs: [
    "Availability varies by care location and participating organization. A capability in one place does not establish the same access in another.",
    "Country choice, language, account identity, data residency, coverage eligibility, and clinical jurisdiction are distinct. This page uses no GPS or automatic geographic inference.",
    "No current market manifest or verified catalog is connected. No source date, provider count, or launch status is invented.",
  ],
  card: {
    locationLabel: "Care location",
    locationPlaceholder: "Choose care location",
    sections: [
      {
        title: "Informational",
        description:
          "Education about categories, pathways, and responsibility.",
      },
      {
        title: "Approved discovery",
        description:
          "A separate verified local directory and current source data are required.",
      },
      {
        title: "Approved requests",
        description:
          "Scheduling, partner, legal, identity, and service conditions are separately checked.",
      },
      {
        title: "Unavailable or suspended",
        description:
          "Live actions stay absent while educational content remains readable.",
      },
    ],
  },
};

export default function LocalAvailabilityEvidence() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F2EFFF] via-[#EEEAFE] to-[#D9CCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              {content.badge}
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
              Global education. <br /> Specific local capabilities.
            </h2>

            {content.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-[15px] leading-[1.8] text-[#4B5563] sm:text-[16px] ${
                  index === 0
                    ? "mt-6"
                    : index === 1
                      ? "mt-4"
                      : "mt-6 text-[14px]"
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Right Column - Card */}
          <div className="flex flex-col rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-[0_10px_30px_rgba(110,80,200,0.06)] sm:p-10">
            {/* Location Section */}
            <div>
              <span className="text-[12px] font-semibold text-[#6B7280]">
                {content.card.locationLabel}
              </span>
              <div className="mt-2 flex w-full items-center justify-between rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3.5 text-[15px] text-[#23327A]">
                <span>{content.card.locationPlaceholder}</span>
                <span className="text-sm text-[#9CA3AF]">▼</span>
              </div>
            </div>

            {/* Sections List */}
            <div className="mt-6 divide-y divide-[#F3F4F6]">
              {content.card.sections.map((section, index) => (
                <div key={index} className="py-4 first:pt-0 last:pb-0">
                  <h4 className="text-[14px] font-bold text-[#23327A]">
                    {section.title}
                  </h4>
                  <p className="mt-1 text-[13px] leading-[1.6] text-[#6B7280]">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

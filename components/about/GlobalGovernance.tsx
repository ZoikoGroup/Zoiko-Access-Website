const content = {
  badge: "Global relevance / local governance",
  title: "Built for global relevance. Governed where care happens.",
  paragraphs: [
    "Healthcare is local in the ways that matter most: clinical rules, licensing, privacy rights, languages, payment arrangements and the organizations that provide care. That is why Zoiko Access is being designed as one adaptable platform with locally controlled capabilities and regional data safeguards.",
    "Our ambition is global. Our service claims will be specific. A feature available through one partner or in one jurisdiction must not be presented as universally accessible elsewhere. We aim to make supported locations and features clear before a visitor is asked to start a healthcare journey.",
  ],
  card: {
    statusBadge: "Current preview status",
    cardTitle: "What is available?",
    cardText:
      "Zoiko Access is being developed as a global healthcare access and coordination ecosystem. Individual capabilities—including provider discovery, appointment requests, referrals, communications and other healthcare workflows—depend on the country, participating organizations, regulatory permissions and approved product release.",
    locationLabel: "Care location context",
    locationPlaceholder: "Choose a location",
    previewTitle: "Global informational preview",
    previewText:
      "Features, partners, and services depend on your location and the applicable approved release. No live care capability is connected to this file.",
  },
};

export default function GlobalGovernance() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] py-20 font-sans sm:py-28">
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
              {content.title}
            </h2>

            {content.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px] ${
                  index === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Right Column - Card */}
          <div className="flex flex-col rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-10">
            <div className="inline-flex w-fit items-center rounded-full bg-[#F3F0FF] px-3.5 py-1 text-[12px] font-semibold text-[#5B3FD1]">
              {content.card.statusBadge}
            </div>

            <h3 className="mt-5 text-[24px] font-bold tracking-[-0.02em] text-[#23327A] sm:text-[28px]">
              {content.card.cardTitle}
            </h3>

            <p className="mt-4 text-[15px] leading-[1.7] text-[#4B5563]">
              {content.card.cardText}
            </p>

            <div className="mt-6 border-t border-[#F3F4F6] pt-6">
              <span className="text-[12px] font-semibold text-[#6B7280]">
                {content.card.locationLabel}
              </span>
              <div className="mt-2 flex w-full items-center justify-between rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3.5 text-[15px] text-[#23327A]">
                <span>{content.card.locationPlaceholder}</span>
                <span className="text-sm text-[#9CA3AF]">▼</span>
              </div>
            </div>

            <div className="mt-6 border-t border-[#F3F4F6] pt-5">
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#23327A]">
                {content.card.previewTitle}
              </span>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#6B7280]">
                {content.card.previewText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

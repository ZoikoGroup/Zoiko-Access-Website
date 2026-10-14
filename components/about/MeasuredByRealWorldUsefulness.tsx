const content = {
  badge: "A long-term commitment",
  title: "Measured by real-world usefulness.",
  paragraphs: [
    "Our ambition is to help make healthcare access more understandable and coordination more dependable. We will assess progress through evidence such as the clarity of service information, the completion and reconciliation of approved workflow steps, accessibility testing, partner reliability and the experience of the people using our services.",
    "We will not treat product reach, clinical outcomes or healthcare improvements as proven before there is reliable evidence to support those statements.",
  ],
  card: {
    cardTitle: "Evidence before claims.",
    paragraphs: [
      "We will assess progress through clarity, workflow reconciliation, accessibility testing, partner reliability, and user experience.",
      "No provider counts, clinical outcome metrics, or testimonials are presented without substantiation.",
    ],
  },
};

export default function MeasuredByRealWorldUsefulness() {
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

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A]">
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
            <h3 className="text-[24px] font-bold tracking-[-0.02em] text-[#23327A] sm:text-[28px]">
              {content.card.cardTitle}
            </h3>

            {content.card.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-[15px] leading-[1.7] text-[#4B5563] ${
                  index === 0 ? "mt-4" : "mt-4"
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

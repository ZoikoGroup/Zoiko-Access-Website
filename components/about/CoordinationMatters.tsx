const statusCards = [
  {
    title: "Sent",
    description: "Information transmitted",
  },
  {
    title: "Received",
    description: "Receipt acknowledged",
  },
  {
    title: "Reviewed",
    description: "Responsible team review",
  },
  {
    title: "Confirmed",
    description: "Authoritative decision",
  },
];

export default function CoordinationMatters() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              Beyond an appointment
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
              Coordination matters between the moments.
            </h2>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              A booking can be important, but it is only one moment in a
              healthcare journey. People also need to understand the next step,
              know whether an action has been accepted, and find a reliable way
              back when something changes. Participating professionals and
              organizations need information that is appropriate to their
              role—not an uncontrolled view of someone else&apos;s
              records.
            </p>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              Zoiko Access is designed around these transitions. Our goal is to
              make the movement between services more understandable and
              traceable, without confusing administrative progress with a
              medical decision.
            </p>
          </div>

          {/* Right Column Card */}
          <div className="flex flex-col rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-12">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              Accountability in every status
            </p>

            <h3 className="mt-4 text-[26px] font-bold tracking-[-0.02em] text-[#23327A] sm:text-[30px]">
              A message is not a medical decision.
            </h3>

            <p className="mt-3 text-[15px] leading-[1.7] text-[#4B5563]">
              Administrative progress must stay distinct from provider
              acceptance and clinical review.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {statusCards.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <span className="text-[16px] font-bold text-[#23327A]">
                    {item.title}
                  </span>
                  <span className="mt-3 text-[14px] text-[#6B7280]">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

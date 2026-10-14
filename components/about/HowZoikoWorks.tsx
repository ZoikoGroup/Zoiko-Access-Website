const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore available healthcare services and organizations in a supported location. Understand what the listing says, where the information came from and how current it is.",
  },
  {
    number: "02",
    title: "Navigate",
    description:
      "See which approved route is appropriate for the requested service—information, an inquiry, an appointment request, a referral or another supported interaction. The platform does not autonomously diagnose or clinically prioritize patients.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Use authorized pathways to communicate with participating organizations, subject to identity, eligibility, privacy and local service rules.",
  },
  {
    number: "04",
    title: "Follow through",
    description:
      "Track the status of supported steps, understand who owns the next action and identify available support when a process remains unresolved. A request is not presented as confirmed until the responsible organization confirms it.",
  },
];

export default function HowZoikoWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F2EFFF] via-[#EEEAFE] to-[#D9CCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            How Zoiko Access is designed to work
          </p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Discover. Navigate. <br />
            Connect. Follow through.
          </h2>
        </div>

        {/* Grid of Step Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white p-8 border-t-2 border-t-[#4267D5] shadow-[0_10px_30px_rgba(118,87,232,0.06)]"
            >
              <div>
                <span className="text-[12px] font-bold tracking-[0.12em] text-[#7657E8]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-[22px] font-bold tracking-[-0.02em] text-[#23327A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-[1.7] text-[#4B5563]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stepsData = [
  {
    tag: "01 / UNDERSTAND",
    title: "Explore service categories",
    description:
      "Understand what a category generally means—and what it does not establish.",
  },
  {
    tag: "02 / NAVIGATE",
    title: "Make sense of care pathways",
    description:
      "See how requests, referrals, tests, and follow-up can involve different organizations.",
  },
  {
    tag: "03 / CONTEXT",
    title: "Review local availability",
    description:
      "Location is a preference. Clinical eligibility and activated capabilities are separate.",
  },
];

export default function ExploreStepCards() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-16 font-sans sm:py-20">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(118,87,232,0.06)]"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7657E8]">
                {step.tag}
              </span>

              <h3 className="mt-4 text-[22px] font-bold tracking-[-0.02em] text-[#23327A]">
                {step.title}
              </h3>

              <p className="mt-3 text-[14px] leading-[1.6] text-[#4B5563]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

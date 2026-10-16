import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "Browse without medical input",
    description:
      "No symptom search, personal history, diagnosis, or recommendation profile is requested.",
  },
  {
    title: "Understand without imagery",
    description:
      "Definitions and next-step guidance are available as readable HTML, with keyboard-accessible category disclosures.",
  },
  {
    title: "Use appropriate assistance",
    description:
      "Human-support channels and reviewed translations should be offered only when operationally supplied and verified.",
  },
];

export default function InformationForMorePeople() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Information for more people"
          title="Readable, accessible, and free from profiling."
          className="lg:max-w-[600px]"
        />

        <div className="mt-9 grid grid-cols-1 items-start gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white px-7 pb-10 pt-7"
            >
              <h3 className="text-[20px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
                {item.title}
              </h3>
              <p className="text-[14px] leading-6 text-[#5E6B85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";

const meanings = [
  {
    title: "Service",
    description:
      "A general category of healthcare or support, such as a consultation, diagnostic service, or community service.",
    tag: "What kind of support?",
  },
  {
    title: "Provider",
    description:
      "The authorized professional or organization responsible for delivering care within its permitted scope.",
    tag: "Who is responsible?",
  },
  {
    title: "Pathway",
    description:
      "A possible sequence of information, requests, handoffs, and follow-up between participants.",
    tag: "How might steps connect?",
  },
];

export default function ClearMeanings() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Start with clear meanings"
          title={
            <>
              A pathway is a sequence.
              <br />
              It is not a treatment decision.
            </>
          }
        />

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {meanings.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[226px] flex-col justify-between gap-6 rounded-xl border border-[#E5E7EB] bg-white px-7 pb-10 pt-7"
            >
              <div>
                <h3 className="text-[20px] font-bold text-[#23327A]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-[#4B5563]">
                  {item.description}
                </p>
              </div>
              <span className="self-start rounded-full bg-[#EEEAFE] px-2.5 py-1 text-[11px] text-[#5B3FD1]">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

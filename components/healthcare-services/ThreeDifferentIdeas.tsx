import SectionHeading from "./SectionHeading";

const ideas = [
  {
    title: "Service type",
    description: "The general category of care or support being described.",
    tag: "What kind?",
  },
  {
    title: "Provider / organization",
    description:
      "The responsible professional or organization, subject to its local scope and authority.",
    tag: "Who may deliver it?",
  },
  {
    title: "Care pathway",
    description:
      "The sequence of possible steps, decisions, and handoffs between participants.",
    tag: "How may steps connect?",
  },
];

export default function ThreeDifferentIdeas() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#DCD0FF] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Three different ideas"
          title={
            <>
              A category is not a provider
              <br />
              or a confirmed care pathway.
            </>
          }
        />

        <div className="mt-9 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {ideas.map((idea) => (
            <div
              key={idea.title}
              className="flex flex-col items-start gap-3 rounded-xl border border-[#E5E7EB] bg-white px-7 pb-11 pt-7"
            >
              <h3 className="pt-0.5 text-[24px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
                {idea.title}
              </h3>
              <p className="max-w-[350px] text-[16px] leading-7 text-[#5E6B85]">
                {idea.description}
              </p>
              <span className="rounded-full bg-[#EEEAFE] px-2.5 py-[5px] text-[10px] leading-4 text-[#5B3FD1]">
                {idea.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

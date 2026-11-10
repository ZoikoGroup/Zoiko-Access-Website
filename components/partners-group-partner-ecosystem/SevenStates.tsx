import { Accent, IMG, SplitHeader, container, section } from "./shared";

// Colour shifts purple → green → red along the line, but every state is also numbered and named.
const states = [
  { name: "Conceptual", desc: "An idea, nothing agreed", color: "#7B5CF0" },
  { name: "Discussion", desc: "Talking, nothing assessed", color: "#7B5CF0" },
  { name: "Assessed", desc: "Reviewed against criteria", color: "#7B5CF0" },
  { name: "Separately approved", desc: "Formal approval on file", color: "#6A5BE0" },
  { name: "Limited pilot", desc: "Bounded test with evidence", color: "#22A06B" },
  { name: "Deployed", desc: "Live in a named market", color: "#22A06B" },
  { name: "Suspended", desc: "Paused or withdrawn", color: "#D64545" },
];

export default function SevenStates() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SplitHeader
          eyebrow="Relationship evidence"
          title={
            <>
              Seven states, <Accent>never blurred</Accent>
            </>
          }
          intro="A relationship status is published only when records back it up."
        />

        <div className="relative mt-12">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[18px] hidden h-0.5 lg:block"
            style={{ background: "linear-gradient(90deg,#C9BEF8 0%,#7B5CF0 40%,#22A06B 70%,#22A06B 82%,#D64545 100%)" }}
          />
          <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-7 lg:gap-2">
            {states.map((s, i) => (
              <li key={s.name} className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 bg-white text-xs font-semibold"
                  style={{ borderColor: s.color, color: s.color }}
                >
                  {i + 1}
                </span>
                <div className="lg:mt-3">
                  <p className="text-sm font-bold text-[#16245A]">{s.name}</p>
                  <p className="mt-1 text-xs leading-5 text-[#5B6B8C]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-8 text-center text-sm text-[#5B6B8C]">
          Proposed status list. Publication requires a current record for every state shown.
        </p>

        <img
          src={`${IMG}/states-group.webp`}
          alt="A group seated in a circle on a stage listening to a presenter"
          className="mt-8 h-[240px] w-full object-cover sm:h-[460px]"
        />
      </div>
    </section>
  );
}

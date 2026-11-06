import { SectionHeader, container, heading, section } from "./shared";

const labels = [
  {
    tag: "Vision",
    tagClass: "bg-[#EEEAFE] text-[#7B5CF0]",
    dot: "bg-[#7B5CF0]",
    title: "Where we are heading",
    text: "The long-term idea of coordinated, permissioned care across institutions.",
    items: ["Coordinated institutional workflows", "Fewer manual handoffs"],
  },
  {
    tag: "Designed to",
    tagClass: "bg-[#E8EEFC] text-[#3D5BD9]",
    dot: "bg-[#3D5BD9]",
    title: "How it is meant to work",
    text: "The intended model, before any validation in a real institution.",
    items: ["Relay approved task context", "Keep the EHR as source of record", "Record provenance for every step"],
  },
];

export default function ControlledLabels() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          center
          eyebrow="Three controlled labels"
          title="Vision, designed, available. Never blurred."
          intro='Every capability claim carries one of these labels. Today, the "Verified available" column is empty.'
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {labels.map((l) => (
            <article
              key={l.tag}
              className="border border-[#C9CCD6] bg-white px-7 py-8 shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
            >
              <span className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide ${l.tagClass}`}>
                {l.tag}
              </span>
              <h3 className={`${heading} mt-3.5 text-xl leading-7 text-[#16245A]`}>{l.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5B6B8C]">{l.text}</p>
              <ul className="mt-3.5 space-y-1.5">
                {l.items.map((i) => (
                  <li key={i} className="relative pl-4 text-sm leading-6 text-[#243B5A]">
                    <span className={`absolute left-0 top-2.5 h-2 w-2 rounded-sm opacity-50 ${l.dot}`} aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="border border-[#C9CCD6] bg-white px-7 py-8 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
            <span className="inline-block rounded-full bg-[#E8F7EF] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1F7A4A]">
              Verified available
            </span>
            <h3 className={`${heading} mt-3.5 text-xl leading-7 text-[#16245A]`}>What is live, proven</h3>
            <p className="mt-2 text-sm leading-6 text-[#5B6B8C]">
              Only capabilities verified in a connector registry and signed off.
            </p>
            <p className="mt-4 rounded-2xl border border-dashed border-[#A8DCC0] bg-[#F6FCF9] p-4 text-sm leading-6 text-[#1E5E3C]">
              Nothing verified yet. This list stays empty until a capability passes validation.
            </p>
          </article>
        </div>

        <div className="mt-10 flex items-center gap-2.5" aria-hidden="true">
          <span className="text-xs text-[#5B6B8C]">Idea</span>
          <span className="h-1.5 flex-1 rounded-[3px] bg-gradient-to-r from-[#7B5CF0] via-[#3D5BD9] to-[#1F7A4A]" />
          <span className="text-xs text-[#5B6B8C]">Proven</span>
        </div>
      </div>
    </section>
  );
}

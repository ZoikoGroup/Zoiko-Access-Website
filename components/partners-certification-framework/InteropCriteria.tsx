import { SectionHeader, container, heading, section } from "./shared";

const criteria = [
  { title: "Documented interfaces", text: "Published, versioned interface contracts." },
  { title: "Error semantics", text: "What failures look like and who handles them." },
  { title: "Version management", text: "How changes are announced and tested." },
  { title: "Terminology mapping", text: "How codes translate between systems." },
  { title: "Identity matching", text: "How records are matched, never silently merged." },
  { title: "Observability", text: "Logs and monitoring that show what happened." },
];

export default function InteropCriteria() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Integration & interoperability criteria"
          title="What would be evaluated, not what is proven."
          intro="These criteria describe a review. None of them is a conformance claim for any product."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {criteria.map((c) => (
            <li
              key={c.title}
              className="flex items-center justify-between gap-4 rounded-xl border border-[#E4E7F2] bg-white px-7 py-5 shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
            >
              <div>
                <h3 className={`${heading} text-base text-[#16245A]`}>{c.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">{c.text}</p>
              </div>
              {/* Rubber-stamp style label */}
              <span className="shrink-0 -rotate-6 rounded border-2 border-[#9B82F5] px-2 py-0.5 text-center text-[9px] font-bold uppercase leading-3 tracking-widest text-[#9B82F5]">
                Evaluated,
                <br />
                not proven
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

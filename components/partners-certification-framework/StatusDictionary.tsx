import { SectionHeader, container, heading, section } from "./shared";

const states = [
  {
    badge: "Not evaluated",
    tone: "bg-[#EEF1F6] text-[#3F4A63]",
    dot: "bg-[#3F4A63]",
    meaning: "No evaluation has been completed.",
    rule: "Never implies failure or approval.",
  },
  {
    badge: "Information requested",
    tone: "bg-[#E6EEFD] text-[#3D5BD9]",
    dot: "bg-[#3D5BD9]",
    meaning: "Additional evidence would be needed.",
    rule: "Not a review outcome.",
  },
  {
    badge: "Under review",
    tone: "bg-[#EEEAFE] text-[#6A4BE0]",
    dot: "bg-[#7B5CF0]",
    meaning: "Evaluation in progress.",
    rule: "Only with a real reviewer and timestamp.",
  },
  {
    badge: "Remediation needed",
    tone: "bg-[#FDF1E3] text-[#9A5A0E]",
    dot: "bg-[#9A5A0E]",
    meaning: "Requirements remain unresolved.",
    rule: "Links only to authorized channels.",
  },
  {
    badge: "Assessment complete",
    tone: "bg-[#E4E9F5] text-[#243B73]",
    dot: "bg-[#243B73]",
    meaning: "Review completed, result scoped.",
    rule: "Not the same as certified.",
  },
  {
    badge: "Approved for publication",
    tone: "bg-[#16245A] text-white",
    dot: "bg-white",
    meaning: "A public statement was separately approved.",
    rule: "Needs claims register, scope and currentness.",
  },
  {
    badge: "Expired / withdrawn",
    tone: "bg-[#F3ECE6] text-[#6B3F2A]",
    dot: "bg-[#6B3F2A]",
    meaning: "A previous claim is no longer current.",
    rule: "Badge removed or qualified at once.",
  },
  {
    badge: "Source unavailable",
    tone: "border border-dashed border-[#9AA3BD] bg-white text-[#3F4A63]",
    dot: "bg-[#5B6B8C]",
    meaning: "Status could not be confirmed.",
    rule: "Never guessed, never shown green.",
  },
];

export default function StatusDictionary() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Review outcomes & lifecycle"
          title="A status dictionary, in plain words."
          intro="Proposed states a candidate could hold. Each has a rule that stops it being misread."
        />

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((s) => (
            <div
              key={s.badge}
              className="flex min-h-[140px] flex-col rounded-xl border border-[#E4E7F2] bg-white px-6 py-5"
            >
              <dt>
                <span
                  className={`${heading} inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold ${s.tone}`}
                >
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} aria-hidden="true" />
                  {s.badge}
                </span>
              </dt>
              <dd className="mt-3 flex flex-1 flex-col justify-between gap-4">
                <span className="text-base font-medium text-[#16245A]">{s.meaning}</span>
                <span className="text-xs text-[#5B6B8C]">{s.rule}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

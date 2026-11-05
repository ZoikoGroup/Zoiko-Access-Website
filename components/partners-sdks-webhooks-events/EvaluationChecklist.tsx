import { IMG, SectionHeader, container, heading, section } from "./shared";

const steps = [
  { title: "Requirements", text: "Use case, data and purpose agreed." },
  { title: "Assurance review", text: "Security and privacy assessed." },
  { title: "Testing", text: "Synthetic data, including failures." },
  { title: "Partner authorization", text: "Signed agreements and approved scope." },
  { title: "Launch readiness", text: "Owners, monitoring and rollback in place." },
];

export default function EvaluationChecklist() {
  return (
    <section
      id="checklist"
      className={`bg-[#16245A] bg-cover bg-center lg:py-24 ${section}`}
      style={{ backgroundImage: `url(${IMG}/bg-checklist.webp)` }}
    >
      <div className={container}>
        <SectionHeader
          light
          eyebrow="Integration evaluation checklist"
          title="Five steps before launch."
          intro="What any integration would need to complete. Nothing here has been started."
        />

        <ol className="mt-12 grid grid-cols-1 gap-3 overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {steps.map((s) => (
            <li
              key={s.title}
              className="flex min-h-[180px] flex-col justify-end border border-white/10 bg-[#1A1868]/90 px-5 py-6 lg:min-h-[240px] lg:pb-12"
            >
              <h3 className={`${heading} text-lg text-white`}>{s.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#C9D3F5]">{s.text}</p>
              <span className="mt-2 w-fit rounded-full border border-dashed border-white/30 px-2.5 py-0.5 text-xs text-[#C9D3F5]">
                not started
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

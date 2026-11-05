import { IMG, SectionHeader, container, heading, section } from "./shared";

const fields = [
  { title: "Event identifier", text: "Unique, so it can be traced and de-duplicated." },
  { title: "Source", text: "Which authoritative system it came from." },
  { title: "Timestamps", text: "When it happened, separate from when it was sent." },
  { title: "Permitted fields only", text: "A reference, not health details. More data needs a separate permission." },
];

export default function DataProvenance() {
  return (
    <section
      id="data"
      className={`bg-[#F5F8FC] bg-cover bg-center ${section}`}
      style={{ backgroundImage: `url(${IMG}/bg-data.webp)` }}
    >
      <div className={container}>
        <SectionHeader
          eyebrow="Data minimization & provenance"
          title="Small, traceable events."
          intro="An example with stable, non-sensitive placeholder values. It is not a real schema."
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,688px)_minmax(0,1fr)] lg:gap-10">
          <img
            src={`${IMG}/data-provenance.webp`}
            alt="Illustration: a source system sends an appointment request event with an identifier, source, timestamps and reference-only data to a trace log. Health details are excluded."
            className="w-full rounded-2xl"
          />

          <ol className="space-y-3">
            {fields.map((f, i) => (
              <li key={f.title} className="flex items-start gap-4 rounded-xl bg-white px-4 py-4">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7B5CF0] text-xs font-semibold text-white"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className={`${heading} text-sm text-[#16245A]`}>{f.title}</h3>
                  <p className="text-sm leading-6 text-[#5B6B8C]">{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

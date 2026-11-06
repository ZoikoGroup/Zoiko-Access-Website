import { SectionHeader, container, heading, section } from "./shared";

const notes = [
  { title: "Source EHR", text: "Keeps the authoritative clinical record. Nothing replaces it." },
  { title: "Coordination layer", text: "Passes approved task context between permitted parties." },
  { title: "Receiving care team", text: "Reviews, decides and acts under its own authority." },
];

function Connector() {
  return (
    <div className="flex flex-col items-center justify-center py-2 md:w-24 md:shrink-0 md:py-0" aria-hidden="true">
      <span className="text-sm text-[#243B73]">task</span>
      <span className="mt-1 h-8 w-[3px] bg-[#7B5CF0] md:h-[3px] md:w-full" />
    </div>
  );
}

export default function SourceArchitecture() {
  return (
    <section id="architecture" className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Source-system architecture"
          title="The EHR keeps the record. The layer carries tasks."
          intro="The coordination layer may relay approved task context. It does not copy, own or replace the clinical record."
        />

        <figure className="mt-10">
          <div className="flex flex-col items-stretch md:flex-row md:items-center">
            <div className="flex flex-1 flex-col items-center rounded-3xl border border-[#243B73] bg-white px-6 py-6 md:h-60">
              <p className={`${heading} text-xl font-bold text-[#16245A]`}>Source EHR</p>
              {/* Database cylinder */}
              <div className="relative mt-6 h-[92px] w-32" aria-hidden="true">
                <span className="absolute inset-x-0 bottom-0 top-[18px] rounded-b-[50%_18px] bg-[#3D5BD9]" />
                <span className="absolute inset-x-0 top-0 h-9 rounded-[50%] bg-[#6F8FE6]" />
              </div>
              <p className="mt-auto pt-4 text-sm text-[#5B6B8C]">clinical record stays here</p>
            </div>

            <Connector />

            <div className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-[#7B5CF0] px-6 py-10 text-center md:h-44">
              <p className={`${heading} text-xl font-bold text-white`}>Coordination layer</p>
              <p className="mt-3 text-sm text-white/85">relays approved task context</p>
              <p className="mt-1 text-sm text-white/85">no record copy · no clinical decisions</p>
            </div>

            <Connector />

            <div className="flex flex-1 flex-col items-center rounded-3xl border border-[#243B73] bg-white px-6 py-6 md:h-60">
              <p className={`${heading} text-xl font-bold text-[#16245A]`}>Receiving care team</p>
              {/* Person glyph */}
              <div className="mt-6 flex flex-col items-center" aria-hidden="true">
                <span className="h-11 w-11 rounded-full bg-[#DCD4FB]" />
                <span className="mt-1.5 h-10 w-20 rounded-t-full bg-[#DCD4FB]" />
              </div>
              <p className="mt-auto pt-4 text-sm text-[#5B6B8C]">decides and acts</p>
            </div>
          </div>
          <figcaption className="sr-only">
            Tasks flow from the source EHR, through the coordination layer, to the receiving care team. The clinical
            record stays in the source EHR.
          </figcaption>
        </figure>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {notes.map((n) => (
            <div key={n.title} className="rounded-2xl border border-[#E4E7F2] bg-white px-4 pb-5 pt-4">
              <h3 className={`${heading} text-base font-bold text-[#16245A]`}>{n.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{n.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

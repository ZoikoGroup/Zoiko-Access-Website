import { IMG, SectionHeader, container, heading, section } from "./shared";

const domains = [
  { title: "Technical interfaces", text: "Documented interfaces, errors and version changes.", img: "domain-interfaces", alt: "Engineer working at a control console" },
  { title: "Security controls", text: "Least privilege, key handling, change management.", img: "domain-security", alt: "Hands around a glowing security shield" },
  { title: "Privacy", text: "Purpose limitation, minimization and retention.", img: "domain-privacy", alt: "Two people working privately on laptops" },
  { title: "Interoperability", text: "How data is mapped, matched and versioned.", img: "domain-interoperability", alt: "Connected nodes around a central hub" },
  { title: "Operations", text: "Monitoring, incidents and named owners.", img: "domain-operations", alt: "Operator running industrial equipment" },
  { title: "Accessibility", text: "Partner-facing experiences people can use.", img: "domain-accessibility", alt: "Hands reading a braille book" },
];

const notAssessed = ["Clinical quality", "Regulatory approval", "Procurement decisions", "Guaranteed outcomes"];

export default function AssessmentDomains() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="What certification could assess"
          title="Six domains, each with limits."
          intro="A future assessment could look at these areas, for one product, version, market and scope at a time."
        />

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <li key={d.title} className="bg-white p-7 shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
              <img src={`${IMG}/${d.img}.webp`} alt={d.alt} className="mb-2 aspect-[2/1] w-full object-cover" />
              <p
                aria-hidden="true"
                className={`${heading} text-5xl font-bold leading-[54px] text-transparent [-webkit-text-stroke:1.5px_#B9A7F7]`}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className={`${heading} mt-1 text-lg text-[#16245A]`}>{d.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5B6B8C]">{d.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <span className="text-sm font-bold text-[#16245A]">Not assessed:</span>
          {notAssessed.map((n) => (
            <span
              key={n}
              className="rounded-full border border-[#E4E7F2] bg-white px-3.5 py-1 text-sm text-[#5B6B8C] line-through"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

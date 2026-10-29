import { Chip, Head, Photo, card, fontPoppins, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const panels = [
  {
    title: "Security & reliability controls",
    image: pic("server-infrastructure"),
    alt: "Server racks with network cabling",
    chips: [
      "Transport protection",
      "Secrets management",
      "Tenant isolation",
      "Key rotation",
      "Logging",
      "Incident routing",
      "Graceful degradation",
      "Rollback",
    ],
  },
  {
    title: "Evidence & traceability",
    image: pic("audit-trail-dashboard"),
    alt: "Monitoring dashboard with charts on a screen",
    chips: [
      "Immutable correlation IDs",
      "Bounded metadata",
      "Source timestamps",
      "Revision trail",
      "Audit access",
      "Decision provenance",
    ],
    note: "No protected health information in public pages, URLs, analytics, previews or caches.",
  },
];

export default function SecurityEvidence() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Security, reliability & evidence"
          title={
            <>
              Secure by design.
              <br />
              Traceable by default.
            </>
          }
          lead="Operational SLAs, certifications and audit attestations require current approved evidence and are not stated here."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {panels.map((p) => (
            <article key={p.title} className={card}>
              <div className={`relative h-[240px] w-full sm:h-[320px] lg:h-[392px] ${photoBg}`}>
                <Photo src={p.image} alt={p.alt} sizes="(min-width: 768px) 640px, 100vw" />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 text-[#16245a]`}>{p.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </ul>
                {p.note && <p className="text-[15px] leading-6 text-[#5b6678]">{p.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

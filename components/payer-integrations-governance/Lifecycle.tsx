import { Chip, Head, Photo, card, fontPoppins, inner, lavenderBg, photoBg, pic, sectionPad, sectionY } from "./shared";

const phases = [
  { title: "Discuss scope", text: "Use cases, parties and markets.", image: pic("team-discussing-scope"), alt: "Two colleagues celebrating at a meeting table" },
  { title: "Assess law & contract", text: "Roles, purposes and jurisdiction.", image: pic("contract-review"), alt: "Person signing a contract" },
  { title: "Technical mapping", text: "Profiles, terminology and errors.", image: pic("data-mapping-dashboard"), alt: "Analytics dashboard on a monitor" },
  { title: "Test & assure", text: "Safety, security and quality review.", image: pic("security-testing-concept"), alt: "Glowing circuit board" },
  { title: "Approve release & operate", text: "Authorized release, monitoring, rollback.", image: pic("operations-team-at-work"), alt: "Team listening to a presentation in an office" },
];

const standards = [
  "Messaging / profile selection",
  "Standard version",
  "Supported payload",
  "Field provenance",
  "Terminology mapping",
  "Permitted transformations",
  "Error taxonomy",
  "Idempotency",
  "Retry window",
  "Versioning",
  "Acknowledgment semantics",
  "Certification evidence status",
  "Approval owner",
];

export default function Lifecycle() {
  return (
    <section className={`w-full ${sectionY} ${sectionPad}`} style={{ background: lavenderBg }}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Integration lifecycle"
          title="Five phases. No shortcuts."
          lead="No guaranteed go-live date, universal integration or automatic partner acceptance."
        />
        <div className="flex flex-col gap-8">
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {phases.map((p, i) => (
              <li key={p.title} className={`flex flex-col ${card}`}>
                <div className={`relative h-[170px] w-full lg:h-[147px] ${photoBg}`}>
                  <Photo src={p.image} alt={p.alt} sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" />
                  <span
                    className={`${fontPoppins} absolute left-3.5 top-3.5 rounded-full bg-white/[0.92] px-2.5 py-1 text-[12px] font-semibold leading-5 text-[#243b73]`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 px-6 pb-8 pt-6">
                  <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{p.title}</h3>
                  <p className="text-[15px] leading-6 text-[#5b6678]">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={`${card} flex flex-col gap-3 p-6 sm:px-7`}>
            <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 text-[#16245a]`}>
              Standards &amp; compatibility evaluation
            </h3>
            <p className="text-[15px] leading-6 text-[#5b6678]">
              HL7 FHIR or EDI X12 are candidates subject to approved engineering scope — no certification is claimed and
              no capability badges are shown.
            </p>
            <ul className="flex flex-wrap gap-2 pt-1">
              {standards.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Accent, SplitHeader, container, heading, section } from "./shared";

const rules = [
  { title: "Purpose limitation", body: "Data is used only for the specific, agreed purpose.", featured: true },
  { title: "Region", body: "Processing follows the approved region for each market." },
  { title: "Lawful authority", body: "Every exchange needs a lawful basis held by the right party." },
  { title: "Source of truth", body: "The source system remains the record of truth." },
  { title: "Security review", body: "Connections pass security review before any activation." },
  { title: "Minimum necessary", body: "Only the data needed for the purpose is in scope." },
  { title: "Retention", body: "Retention periods are defined and enforced, then data is removed." },
];

export default function SevenRules() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SplitHeader
          eyebrow="Data governance model"
          title={
            <>
              Seven rules for <Accent>every connection</Accent>
            </>
          }
          intro="Purpose, market, organisation, role and data type are separate checks. Access is denied by default."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rules.map((r) => (
            <li
              key={r.title}
              className={`rounded-2xl border border-[#E4E7F2] p-6 ${
                r.featured ? "bg-gradient-to-r from-[#EFEAFD] to-[#E6EEFD] sm:col-span-2" : "bg-white"
              }`}
            >
              <h3 className={`${heading} text-base text-[#16245A]`}>{r.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5B6B8C]">{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

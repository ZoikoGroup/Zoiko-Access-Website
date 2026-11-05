import { SectionHeader, container, heading, section } from "./shared";

const threats = [
  { threat: "Credential misuse", mitigation: "Scoped, rotated credentials with fast revocation." },
  { threat: "Replay", mitigation: "Timestamps, unique identifiers and expiry." },
  { threat: "Injection", mitigation: "Strict input validation against the agreed contract." },
  { threat: "Enumeration", mitigation: "No guessable identifiers; responses reveal nothing extra." },
  { threat: "Callback forgery", mitigation: "Signed callbacks and verified destinations." },
  { threat: "Tenant crossover", mitigation: "Each organization's data kept strictly separate." },
];

export default function ThreatProtections() {
  return (
    <section className={`bg-[#0E1640] ${section}`}>
      <div className={container}>
        <SectionHeader
          dark
          eyebrow="Threat & abuse protections"
          title="Six threats, and how each is met."
          intro="Conceptual mitigations. Exact controls are agreed and tested per integration."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {threats.map((t) => (
            <li key={t.threat} className="overflow-hidden rounded-2xl border border-white/10">
              <div className="bg-[#1F2650] px-6 py-6">
                <p className="text-xs uppercase tracking-wide text-[#F2A07B]">Threat</p>
                <h3 className={`${heading} mt-1 text-lg text-white`}>{t.threat}</h3>
              </div>
              <div className="h-full border-t border-dashed border-white/15 bg-[#14204A] px-6 py-6">
                <p className="text-xs uppercase tracking-wide text-[#7EE0C3]">Mitigation</p>
                <p className="mt-1 text-sm leading-6 text-white/75">{t.mitigation}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

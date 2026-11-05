import { SectionHeader, container, heading, section } from "./shared";

const stages = [
  {
    name: "Discovery",
    intent: "Identify integration category and real deployment context.",
    evidence: "Vendor capability statement; owner and data-purpose inventory.",
    boundary: "No candidate is implicitly accepted.",
  },
  {
    name: "Scope & eligibility",
    intent: "Confirm organizational identity, proposed country and system boundary.",
    evidence: "Product, version and market scope; source system owner.",
    boundary: "Not equivalent to procurement approval.",
  },
  {
    name: "Evidence submission",
    intent: "Describe technology, security and interoperability evidence.",
    evidence: "Versioned architecture, data map, scopes, assurance references.",
    boundary: "No patient records in public intake.",
  },
  {
    name: "Technical review",
    intent: "Assess interfaces, errors, version changes and observability.",
    evidence: "Review notes; sample payloads only with authorization.",
    boundary: "A demo is not a conformance result.",
  },
  {
    name: "Security & privacy review",
    intent: "Assess purpose limitation, least privilege, breach and change management.",
    evidence: "Control owner evidence, retention and privacy assessment.",
    boundary: "Privacy and legal decisions stay independent.",
  },
  {
    name: "Remediation & retest",
    intent: "Record nonconformities, owners and re-evaluation.",
    evidence: "Issue register, versioned corrections, repeat results.",
    boundary: "Unresolved critical findings are never hidden.",
  },
  {
    name: "Decision & publication",
    intent: "Separate internal findings from any publishable partner claim.",
    evidence: "Dated review authority, claim scope, signed publishing approval.",
    boundary: "No seal or listing until approved.",
  },
  {
    name: "Ongoing surveillance",
    intent: "Explain renewal, withdrawal and material-change controls.",
    evidence: "Release versions, currentness and incident updates.",
    boundary: "No invented cadence or automatic renewal.",
  },
];

const cols = "md:grid-cols-[80px_200px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,260px)]";

export default function ReviewStages() {
  return (
    <section id="stages" className={`scroll-mt-24 border-y border-[#F1EBDD] bg-[#FDFCF8] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Proposed end-to-end review stages"
          title="Eight stages, each with a hard boundary."
          intro="A transparent qualification path. No candidate moves forward by assumption."
        />

        <div className="mt-6 border-t-2 border-[#243B73] pt-6">
          <div
            className={`hidden gap-6 border-b border-[#E4E7F2] py-3 text-xs font-semibold uppercase tracking-wide text-[#5B6B8C] md:grid ${cols}`}
            aria-hidden="true"
          >
            <span>Stage</span>
            <span>Name</span>
            <span>Intent</span>
            <span>Evidence</span>
            <span>Hard boundary</span>
          </div>

          <ol>
            {stages.map((s, i) => (
              <li key={s.name} className={`grid grid-cols-1 gap-2 border-b border-[#E4E7F2] py-5 md:gap-6 ${cols}`}>
                <span className={`${heading} text-4xl font-bold leading-10 text-[#7B5CF0]`}>{i + 1}</span>
                <h3 className={`${heading} text-base text-[#16245A]`}>{s.name}</h3>
                <p className="text-sm leading-6 text-[#2A3550]">
                  <span className="font-semibold md:hidden">Intent: </span>
                  {s.intent}
                </p>
                <p className="text-sm leading-6 text-[#2A3550]">
                  <span className="font-semibold md:hidden">Evidence: </span>
                  {s.evidence}
                </p>
                <p className="h-fit rounded-md bg-[#FDF1F0] px-2.5 py-2 text-sm leading-5 text-[#A63D2F]">
                  {s.boundary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

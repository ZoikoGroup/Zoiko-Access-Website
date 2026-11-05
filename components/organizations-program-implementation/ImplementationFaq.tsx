import { Eyebrow, heading } from "./shared";

type Faq = { q: string; a: string; open?: boolean };

const left: Faq[] = [
  {
    q: "What is program implementation?",
    a: "A phased approach to defining scope, responsibilities, security, integrations, validation and operational review before a program is launched.",
    open: true,
  },
  {
    q: "How long does implementation take?",
    a: "There is no standard duration. Each phase ends only when its gate is met, so timing depends on the organizations and decisions involved.",
  },
  {
    q: "Can an employer see patient health information?",
    a: "No. Funding or sponsorship conveys no default entitlement to clinical or individual health records.",
  },
  {
    q: "Is there a standard integration?",
    a: "No. There are no pre-certified connectors — each integration is assessed and tested, and shown as live only with evidence.",
  },
  {
    q: "What happens when a partner or service is suspended?",
    a: "The program owner follows the agreed exit plan, with communications and manual alternatives where needed.",
  },
];

const right: Faq[] = [
  {
    q: "Does Zoiko Access operate programs in my area?",
    a: "Coverage is unknown until an approved release registry confirms it. No map of live coverage is shown.",
  },
  {
    q: "Who is clinically responsible?",
    a: "The licensed provider. Clinical decisions are never transferred to a sponsor, operator or the platform.",
  },
  {
    q: "Can participating organizations share data?",
    a: "Only with a lawful basis for a defined purpose, limited to the minimum necessary and approved by the data custodian.",
  },
  {
    q: "How does a project become operational?",
    a: "Through the six phases, ending in a controlled launch with named approvals, current test evidence and a rollback plan.",
  },
  {
    q: "How can our organization explore the approach?",
    a: "Start with the Organizations overview. A contact route appears only once a staffed, approved route exists.",
  },
];

function FaqColumn({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details
          key={f.q}
          open={f.open}
          className="group rounded-2xl border border-[#E4E7F2] bg-white px-5 py-5 open:border-[#B9A8FD]"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-[#16245A] [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="shrink-0 text-lg leading-6 text-[#7B5CF0]">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-[#5B6B8C]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function ImplementationFaq() {
  return (
    <section className="bg-[#F5F7FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Questions, answered</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-5xl`}>Implementation questions.</h2>

        <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-2">
          <FaqColumn items={left} />
          <FaqColumn items={right} />
        </div>
      </div>
    </section>
  );
}

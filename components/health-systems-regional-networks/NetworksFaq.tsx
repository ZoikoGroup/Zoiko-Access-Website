import { Eyebrow, heading } from "./shared";

type Faq = { q: string; a: string; open?: boolean };

const left: Faq[] = [
  {
    q: "Is there a single shared patient record?",
    a: "No. Each organization keeps its own record; exchange is governed and authorized.",
    open: true,
  },
  {
    q: "Who is clinically responsible after a handoff?",
    a: "The sender stays responsible until the receiving team explicitly accepts. Receipt alone never transfers responsibility.",
  },
  {
    q: "Does joining a network give access to members' data?",
    a: "No. Each exchange needs its own lawful basis, purpose and role. There is no network-wide implicit permission.",
  },
];

const right: Faq[] = [
  {
    q: "How are patient identities matched?",
    a: "With safeguards agreed for the network. Uncertain matches are flagged for review — identities are never silently merged.",
  },
  {
    q: "Which partners are connected?",
    a: "Only partners shown in verified partner data. No organization is listed as connected without evidence.",
  },
  {
    q: "Can we discuss our network?",
    a: "A contact route appears only once a staffed, approved route exists. Start with the governance requirements on this page.",
  },
];

function FaqColumn({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} open={f.open} className="group rounded-xl bg-white px-5 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-[#253B73] [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="shrink-0 text-lg text-[#7B5CF0]">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-[#5B6B8C]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export default function NetworksFaq() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_50%_50%,#A78BFA_55%,#2E1065_130%)] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Questions, answered</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl md:text-4xl`}>Direct answers for networks.</h2>

        <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-2 lg:gap-10">
          <FaqColumn items={left} />
          <FaqColumn items={right} />
        </div>
      </div>
    </section>
  );
}

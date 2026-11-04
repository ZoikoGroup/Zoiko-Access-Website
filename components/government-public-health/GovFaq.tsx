import { Eyebrow, heading } from "./shared";

const faqs = [
  {
    q: "What is public-health coordination?",
    a: "Coordinating care navigation and handoffs between authorized organizations, within a specific approved public-health purpose.",
  },
  {
    q: "Does Zoiko Access give government access to medical records?",
    a: "No. Records stay with their source institutions. Any exchange needs a defined purpose, a verified lawful basis and an approved implementation.",
  },
  {
    q: "Who approves an exchange?",
    a: "The accountable data steward and the authorities named for the program. The platform never approves an exchange on its own.",
  },
  {
    q: "Is this available in every country?",
    a: "No. Availability depends on an approved program in each jurisdiction. Without an approved registry entry, the status is Unknown.",
  },
  {
    q: "Does Zoiko Access perform clinical triage?",
    a: "No. Clinical triage and diagnosis stay with licensed professionals.",
  },
];

export default function GovFaq() {
  return (
    <section className="bg-[#0E1545] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Questions, answered</Eyebrow>
        <h2 className={`${heading} mb-6 text-3xl md:text-4xl`}>Direct answers for public bodies.</h2>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-xl border border-white/15 bg-[#1C2350] px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="shrink-0 text-lg text-[#93A5F5]">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-white/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

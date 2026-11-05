import { EmptyBox, Eyebrow, heading } from "./shared";

const states = [
  { title: "Planned", text: "Intended, not assessed", bar: "bg-[#C9D0E4]" },
  { title: "Assessed", text: "Feasibility reviewed", bar: "bg-[#93A8F5]" },
  { title: "Tested", text: "Proven in test", bar: "bg-[#3B5BDB]" },
  { title: "Live", text: "Evidence of release", bar: "bg-[#1E8A5A]" },
];

const checks = [
  { title: "Source of truth", text: "Which system owns each record." },
  { title: "System contract", text: "Agreement with each partner system." },
  { title: "Interface scopes", text: "Exactly what each interface can do." },
  { title: "Standards review", text: "Standards assessed, not assumed." },
  { title: "Reconciliation", text: "Records checked to match." },
  { title: "Exception monitoring", text: "Failures caught and owned." },
];

export default function IntegrationEvidence() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Integration &amp; evidence</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Integration is shown only as far as evidence goes.
        </h2>
        <p className="mb-8 max-w-[740px] text-base leading-7 text-[#5B6B8C]">
          No pre-certified connectors. Each integration moves through four states — &quot;Live&quot;
          only with proof.
        </p>

        <ol className="mb-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#E4E7F2] bg-[#E4E7F2] sm:grid-cols-2 lg:grid-cols-4">
          {states.map((s) => (
            <li key={s.title} className="relative bg-white px-5 pb-5 pt-4">
              <h3 className={`${heading} text-base text-[#16245A]`}>{s.title}</h3>
              <p className="text-sm text-[#5B6B8C]">{s.text}</p>
              <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-1 ${s.bar}`} />
            </li>
          ))}
        </ol>

        <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <li key={c.title} className="flex items-start gap-3 rounded-2xl border border-[#E4E7F2] bg-white px-5 py-4">
              <EmptyBox className="mt-0.5 border-[#7B5CF0]" />
              <div>
                <h3 className="text-sm font-bold text-[#16245A]">{c.title}</h3>
                <p className="text-sm text-[#5B6B8C]">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

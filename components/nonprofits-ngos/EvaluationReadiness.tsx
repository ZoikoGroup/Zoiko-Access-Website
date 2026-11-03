import { heading } from "./shared";

const requirements = [
  { label: "Legal authority", text: "The organization can lawfully run the program" },
  { label: "Market need", text: "A defined need in a defined place" },
  { label: "Partner agreements", text: "With licensed providers" },
  { label: "Roles & data rights", text: "Documented and minimal" },
  { label: "Safeguards", text: "Safeguarding and escalation procedures" },
  { label: "Support & audit", text: "Named support and an audit trail" },
];

export default function EvaluationReadiness() {
  return (
    <section className="bg-gradient-to-br from-[#8466E6] via-[#6B4FD8] to-[#2A1890] px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 overflow-hidden rounded-3xl md:grid-cols-12">
        <div className="bg-[#16245A] p-8 text-white md:col-span-5 md:p-10">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-[#C9D3F5]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9D3F5]">
              Evaluation readiness
            </span>
          </div>
          <h2 className={`${heading} mb-4 text-3xl leading-tight md:text-5xl`}>
            Ready to evaluate a program?
          </h2>
          <p className="text-base leading-7 text-white/85">
            Every item below must be in place before an NGO program could be
            considered.
          </p>
        </div>

        <dl className="bg-white p-8 md:col-span-7 md:p-10">
          {requirements.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-1 gap-1 border-b border-[#E4E7F2] py-3.5 sm:grid-cols-[170px_1fr] sm:gap-4"
            >
              <dt className="text-sm font-bold text-[#16245A] md:text-base">{r.label}</dt>
              <dd className="text-sm text-[#344054] md:text-base">{r.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

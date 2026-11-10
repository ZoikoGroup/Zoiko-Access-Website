import { SectionHeader, container, heading, section } from "./shared";

const phases = [
  { title: "Discovery", text: "Use case, sites and sponsors." },
  { title: "Requirements", text: "Workflows, data and source systems." },
  { title: "Clinical governance", text: "Safety review and clinical owners." },
  { title: "Security review", text: "Controls, contracts and privacy." },
  { title: "Technical validation", text: "Testing, including failure cases." },
  { title: "Controlled release", text: "Limited scope, monitored closely." },
];

export default function OnboardingPhases() {
  return (
    <section className={`bg-gradient-to-b from-[#EEEAFE] to-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Enterprise onboarding"
          title="Six proposed phases."
          intro="How onboarding would work once an actual contracting and onboarding program exists."
        />

        <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {phases.map((p, i) => (
            <li key={p.title} className="overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white">
              <span
                className={`block h-1.5 bg-gradient-to-r ${
                  i < 3 ? "from-[#7B5CF0] to-[#3D68D6]" : "from-[#3D68D6] to-[#243B73]"
                }`}
                aria-hidden="true"
              />
              <div className="px-4 pb-5 pt-6">
                <p className={`${heading} text-xs font-bold text-[#7B5CF0]`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`${heading} mt-1.5 text-base text-[#16245A]`}>{p.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 rounded-2xl bg-[#FFF4DF] px-5 py-3.5 text-sm text-[#6B4A0E]">
          <strong className="mr-2 font-bold">Gated:</strong>
          Enterprise onboarding requires actual contracting and an operational onboarding program. It is not open yet.
        </p>
      </div>
    </section>
  );
}

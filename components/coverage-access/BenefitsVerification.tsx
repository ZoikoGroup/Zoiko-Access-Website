import { Head, darkBg, fontPoppins, glow, inner, sectionPad, sectionY } from "./shared";

const factors = [
  { label: "Plan", title: "Which plan", text: "Different products have different terms." },
  { label: "Date", title: "Which date", text: "Coverage can start, change or end." },
  { label: "Provider", title: "Which provider", text: "Network status can change the answer." },
  { label: "Service", title: "Which service", text: "Limits, exclusions and rules differ by service." },
];

const fields = [
  ["Source", "The organization that issued it"],
  ["Scope", "Plan, service and provider covered"],
  ["As of", "The date the information reflects"],
  ["Retrieved", "When it was received, with time zone"],
  ["Limitations", "What it can't confirm"],
];

export default function BenefitsVerification() {
  return (
    <section
      className={`w-full ${sectionY} ${sectionPad}`}
      style={{ backgroundImage: `${glow("1100px 800px", "100% 0")},${darkBg}` }}
    >
      <div className={`${inner} flex flex-col gap-16`}>
        <div className="flex flex-col gap-11">
          <Head tone="light" eyebrow="Benefits & network overview" title="Benefit details vary by plan, date, provider and service." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {factors.map((f) => (
              <div key={f.label} className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(36,59,115,0.08)]">
                <p className={`${fontPoppins} text-[12px] font-semibold uppercase leading-5 tracking-[0.6px] text-[#7657e8]`}>
                  {f.label}
                </p>
                <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 text-[#16245a]`}>{f.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Head
            tone="light"
            eyebrow="Verification & currentness"
            title="A status is meaningful only with its source, scope and time."
            lead="Before relying on any coverage indication, check who issued it, what it covers and when it was true."
          />
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(36,59,115,0.08)] sm:px-7">
            <p className="w-fit rounded-full bg-[#fff4e0] px-3 py-1.5 text-[12px] font-semibold uppercase leading-5 text-[#7a4b00]">
              Sample labels — no real data
            </p>
            <dl>
              {fields.map(([term, desc]) => (
                <div
                  key={term}
                  className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-dashed border-[#e3e8f2] py-2.5 text-[14px] leading-6"
                >
                  <dt className="text-[#5b6678]">{term}</dt>
                  <dd className="text-[#2d3a52] sm:text-right">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

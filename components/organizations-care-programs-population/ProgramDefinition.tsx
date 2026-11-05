import { Eyebrow, IMG, heading } from "./shared";

const blocks = [
  {
    badge: "Who",
    title: "Sponsor, audience & participating organizations",
    text: "Who funds the program, who it's for, and which organizations take part.",
    image: `${IMG}/definition-who.webp`,
    alt: "Two colleagues high-fiving across a desk",
    rows: [
      { label: "Sponsor", value: "Funding and eligibility policy" },
      { label: "Audience", value: "Defined eligible population" },
      { label: "Partners", value: "Verified, licensed providers" },
    ],
  },
  {
    badge: "What & where",
    title: "Region, service, duration & policy",
    text: "Where it applies, which services, for how long and under which rules.",
    image: `${IMG}/definition-what-where.webp`,
    alt: "Exterior of a hospital building",
    rows: [
      { label: "Region", value: "Approved locations only" },
      { label: "Service", value: "Defined care category" },
      { label: "Policy", value: "The governing rules and duration" },
    ],
  },
];

export default function ProgramDefinition() {
  return (
    <section className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Program definition &amp; scope</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          A program is defined by separate choices.
        </h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C] md:text-lg">
          Each dimension is configured on its own — one never implies another.
        </p>

        <div className="space-y-16">
          {blocks.map((b, i) => (
            <div key={b.badge} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
              {/* Alternate image side on wide screens */}
              <div
                className={`relative overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(36,59,115,0.08)] ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <img src={b.image} alt={b.alt} className="h-72 w-full object-cover lg:h-[420px]" />
                <span
                  className={`${heading} absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs text-[#7B5CF0]`}
                >
                  {b.badge}
                </span>
              </div>

              <div>
                <h3 className={`${heading} mb-2 text-2xl leading-9 text-[#16245A]`}>{b.title}</h3>
                <p className="mb-4 text-base leading-6 text-[#5B6B8C]">{b.text}</p>
                <dl className="space-y-2.5">
                  {b.rows.map((r) => (
                    <div key={r.label} className="flex gap-3 rounded-xl bg-[#F5F8FC] px-4 py-3">
                      <dt className="w-28 shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wide text-[#7B5CF0]">
                        {r.label}
                      </dt>
                      <dd className="text-base leading-6 text-[#2A3550]">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Eyebrow, IMG, heading } from "./shared";

const cards = [
  {
    title: "Outcome evidence requirements",
    image: `${IMG}/impact-outcome-evidence.webp`,
    alt: "Analytics dashboard on a monitor",
    rows: [
      { k: "Defined", v: "Outcomes agreed before launch" },
      { k: "Sourced", v: "Every figure has a named source" },
      { k: "Limit", v: "No unverified impact claims" },
    ],
  },
  {
    title: "Verified aggregated reporting",
    image: `${IMG}/impact-aggregated-reporting.webp`,
    alt: "Laptop showing charts on a desk",
    rows: [
      { k: "Aggregated", v: "Program-level only" },
      { k: "Protected", v: "Small groups suppressed" },
      { k: "Limit", v: "No individual beneficiary data" },
    ],
  },
  {
    title: "Independent review",
    image: `${IMG}/impact-independent-review.webp`,
    alt: "People reviewing printed figures beside laptops",
    rows: [
      { k: "Reviewed", v: "Checked before publication" },
      { k: "Dated", v: "Shows when it was last verified" },
      { k: "Limit", v: "Stale figures are withdrawn" },
    ],
  },
];

export default function ImpactIntegrity() {
  return (
    <section id="impact-integrity" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Impact integrity</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Evidence, not inflated numbers.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white shadow-[0_12px_40px_rgba(22,36,90,0.12)]"
            >
              <img src={c.image} alt={c.alt} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className={`${heading} mb-3 text-xl text-[#16245A]`}>{c.title}</h3>
                <dl>
                  {c.rows.map((r) => (
                    <div
                      key={r.k}
                      className="grid grid-cols-[110px_1fr] gap-3 border-t border-dashed border-[#E4E7F2] py-3"
                    >
                      <dt className="text-xs font-bold uppercase tracking-wide text-[#7B5CF0]">{r.k}</dt>
                      <dd className={`text-sm ${r.k === "Limit" ? "text-[#A32020]" : "text-[#344054]"}`}>
                        {r.v}
                      </dd>
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

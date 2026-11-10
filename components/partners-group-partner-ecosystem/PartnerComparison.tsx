import { Accent, SplitHeader, container, heading, section } from "./shared";

const columns = [
  {
    title: "Technology vendors",
    rows: [
      ["Data custody", "Keep custody of their own source data."],
      ["Change control", "Control releases of their own application."],
      ["Accountability", "Accountable for their product and its data."],
    ],
  },
  {
    title: "System integrators",
    rows: [
      ["Data custody", "Handle data only inside the approved implementation scope."],
      ["Change control", "Follow the sponsoring institution’s change process."],
      ["Accountability", "Accountable for build quality and agreed tasks."],
    ],
  },
  {
    title: "Institutional sponsors",
    rows: [
      ["Data custody", "Hold the authorization and the patient relationship."],
      ["Change control", "Approve every material change."],
      ["Accountability", "Accountable for the decision to connect."],
    ],
  },
];

export default function PartnerComparison() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SplitHeader
          eyebrow="Partner comparison"
          title={
            <>
              Vendors, integrators and <Accent>sponsors</Accent>
            </>
          }
          intro="How custody, change control and accountability differ."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {columns.map((c) => (
            <li key={c.title} className="overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white">
              <h3
                className={`${heading} bg-gradient-to-r from-[#243B73] to-[#4F3CC9] px-6 py-5 text-lg text-white`}
              >
                {c.title}
              </h3>
              <dl className="space-y-4 px-6 py-6">
                {c.rows.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-[#7B5CF0]">{label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-[#2A3550]">{value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

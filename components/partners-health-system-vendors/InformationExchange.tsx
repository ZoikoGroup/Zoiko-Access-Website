import { Eyebrow, heading } from "./shared";

const stages = ["Created", "Sent", "Received", "Reviewed", "Acted"] as const;

// Each participant owns certain stages. Dark pills are steps a person must take.
const rows: { name: string; role: string; cells: Partial<Record<(typeof stages)[number], { label: string; human?: boolean }>> }[] = [
  {
    name: "Ordering clinician",
    role: "care organization",
    cells: { Created: { label: "Order placed" }, Acted: { label: "Decides next care", human: true } },
  },
  { name: "Partner interface", role: "transport only", cells: { Sent: { label: "Transmits order" } } },
  { name: "Lab system", role: "source of result", cells: { Received: { label: "Order received" } } },
  { name: "Receiving clinician", role: "named person", cells: { Reviewed: { label: "Reviews result", human: true } } },
];

const notes = [
  { title: "Sent ≠ received.", text: "Transport success says nothing about the receiver." },
  { title: "Received ≠ reviewed.", text: "A system storing a result is not a person reading it." },
  { title: "Reviewed ≠ acted.", text: "Action is a separate clinical decision." },
];

export default function InformationExchange() {
  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10 grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Information exchange · Illustrative</Eyebrow>
            <h2 className={`${heading} text-3xl text-[#16245A] md:text-[44px] md:leading-[1.15]`}>
              Created, sent, received, reviewed, acted.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#5B6B8C]">
            A conceptual order-to-result handoff. The exact states depend on each workflow, and a
            person owns the last two.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl bg-white px-7 py-8 shadow-[0_20px_40px_rgba(22,36,90,0.08)]">
          <table className="w-full min-w-[820px] text-center">
            <thead>
              <tr className={`${heading} border-b border-[#E4E7F2] text-sm text-[#16245A]`}>
                <th scope="col" className="pb-4 text-left">Participant</th>
                {stages.map((s) => (
                  <th key={s} scope="col" className="pb-4">{s}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E7F2]">
              {rows.map((r) => (
                <tr key={r.name}>
                  <th scope="row" className="py-4 text-left">
                    <span className="block text-sm font-semibold text-[#16245A]">{r.name}</span>
                    <span className="block text-xs font-normal text-[#5B6B8C]">{r.role}</span>
                  </th>
                  {stages.map((s) => {
                    const cell = r.cells[s];
                    return (
                      <td key={s} className="py-4">
                        {cell && (
                          <span
                            className={`inline-block rounded-full px-3 py-1.5 text-xs font-semibold ${
                              cell.human ? "bg-[#16245A] text-white" : "bg-[#EEEAFE] text-[#2E2A8C]"
                            }`}
                          >
                            {cell.label}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {notes.map((n) => (
            <li key={n.title} className="rounded-2xl border border-[#E4E7F2] bg-white px-5 py-4 text-sm leading-6 text-[#2A3550]">
              <strong className="text-[#7B5CF0]">{n.title}</strong> {n.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

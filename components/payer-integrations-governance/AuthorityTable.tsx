import { Head, darkBg, fontPoppins, glow, inner, sectionPad, sectionY } from "./shared";

const columns = ["Activity", "Authoritative system", "Zoiko Access potential role", "Validation dependency", "Boundary"];

const rows = [
  ["Eligibility response", "Payer system of record", "Relay a permitted, dated response", "Role, purpose, contract", "Not a coverage guarantee"],
  [
    "Prior authorization decision",
    "Payer / delegated reviewer",
    "Coordinate request and status handoffs",
    "Plan rules, provider authority",
    "Payer decides",
  ],
  ["Claim adjudication", "Payer claims system", "Show sourced administrative status", "Payer acknowledgment", "Adjudication stays payer-owned"],
  ["Clinical diagnosis & records", "Care organization", "None by default", "Separate clinical agreement", "Clinician-owned"],
  ["Payment settlement", "Approved regulated parties", "None", "Financial institution evidence", "Outside scope"],
];

export default function AuthorityTable() {
  return (
    <section
      className={`w-full ${sectionY} ${sectionPad}`}
      style={{ backgroundImage: `${glow("1100px 700px", "97% 7%")},${darkBg}` }}
    >
      <div className={`${inner} flex flex-col gap-11`}>
        <Head tone="light" eyebrow="System & source responsibility" title="Who is authoritative for what." />
        <div className="w-full overflow-x-auto rounded-2xl border border-solid border-[#e3e8f2] bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)]">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <thead className="bg-[linear-gradient(90deg,#6a1fd0_0%,#4a12a8_100%)]">
              <tr>
                {columns.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className={`${fontPoppins} px-4 py-4 text-[12px] font-medium uppercase leading-5 tracking-[0.6px] text-white`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([activity, ...cells], i) => (
                <tr key={activity} className={i < rows.length - 1 ? "border-b border-solid border-[#e3e8f2]" : ""}>
                  <th scope="row" className={`${fontPoppins} px-4 py-4 text-[14px] font-semibold leading-6 text-[#16245a]`}>
                    {activity}
                  </th>
                  {cells.map((c, j) => (
                    <td key={j} className="px-4 py-4 text-[14px] leading-6 text-[#2d3a52]">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

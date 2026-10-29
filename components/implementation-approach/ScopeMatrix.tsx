import { Head, fontPoppins, inner, sectionPad, sectionY } from "./shared";

const columns = ["Workflow", "Potential interaction", "Authoritative organization", "Prerequisite", "Excluded inference"];

const rows = [
  ["Eligibility & benefits", "Relay a sourced, dated response", "Payer", "Role, purpose, agreement", "Coverage or payment guaranteed"],
  ["Prior authorizations", "Coordinate requests and status", "Payer / delegated reviewer", "Plan rules, provider authority", "Receipt means approval"],
  ["Claims & remittance", "Show administrative status", "Payer", "Payer acknowledgment", "Remittance means payment"],
  ["Member access", "Permission-bound member journeys", "Payer", "Verified identity & entitlement", "Family or sponsor access"],
  ["Audit & reporting", "Bounded, attributable records", "Each source owner", "Governance record", "Clinical detail in reports"],
];

export default function ScopeMatrix() {
  return (
    <section id="scope" className={`w-full scroll-mt-24 bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head eyebrow="Workflow scope matrix" title="What could be in scope—and what is never inferred." />
        <div className="w-full overflow-x-auto rounded-2xl border border-solid border-[#e3e8f2] bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)]">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <thead className="bg-[#243b73]">
              <tr>
                {columns.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className={`${fontPoppins} px-5 py-4 text-[12px] font-medium uppercase leading-5 tracking-[0.6px] text-white`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([workflow, ...cells], i) => (
                <tr key={workflow} className={i < rows.length - 1 ? "border-b border-solid border-[#e3e8f2]" : ""}>
                  <th scope="row" className={`${fontPoppins} px-5 py-4 text-[14px] font-semibold leading-6 text-[#16245a]`}>
                    {workflow}
                  </th>
                  {cells.map((c, j) => (
                    <td key={j} className="px-5 py-4 text-[14px] leading-6 text-[#2d3a52]">
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

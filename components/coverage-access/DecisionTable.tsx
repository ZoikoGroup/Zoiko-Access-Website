import { Head, fontPoppins, inner, sectionPad, sectionY } from "./shared";

const columns = ["Decision", "Responsible organization", "Zoiko Access role", "Boundary"];

const rows = [
  ["Plan coverage & benefits", "Payer / plan administrator", "Explain; coordinate only where authorized", "Not a coverage guarantee"],
  ["Eligibility", "Payer", "Show a sourced, dated answer where authorized", "Never inferred from location"],
  ["Prior authorization", "Payer or delegated reviewer", "Coordinate request handoffs where authorized", "Payer decides"],
  ["Treatment", "Treating clinician", "None", "Clinical judgment stays with the care team"],
];

export default function DecisionTable() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head eyebrow="Who owns each decision" title="Responsible organizations remain the source of their decisions." />
        <div className="w-full overflow-x-auto rounded-2xl border border-solid border-[#e3e8f2] bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)]">
          <table className="w-full min-w-[820px] border-collapse text-left">
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
              {rows.map(([decision, ...cells], i) => (
                <tr key={decision} className={i < rows.length - 1 ? "border-b border-solid border-[#e3e8f2]" : ""}>
                  <th scope="row" className={`${fontPoppins} px-5 py-4 text-[14px] font-semibold leading-6 text-[#16245a]`}>
                    {decision}
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

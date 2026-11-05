import { Eyebrow, IMG, heading } from "./shared";

const columns = ["Sponsor institution", "Source system", "Integrator", "Zoiko Access platform", "Clinicians"];

// "owns" = the party that owns the decision; any other string is a supporting role; null = no role.
type Cell = "owns" | string | null;

const rows: { responsibility: string; cells: Cell[] }[] = [
  { responsibility: "Authorize the project", cells: ["owns", null, "Supports", null, null] },
  { responsibility: "Hold the authoritative record", cells: [null, "owns", null, null, null] },
  { responsibility: "Implement the interface", cells: ["Approves", "Supports", "owns", null, null] },
  { responsibility: "Expose contracted scope only", cells: ["Defines", null, "Configures", "owns", null] },
  { responsibility: "Assess patients and decide care", cells: [null, null, null, null, "owns"] },
];

function CellValue({ value }: { value: Cell }) {
  if (value === "owns") {
    return (
      <span className="inline-flex items-center gap-1.5 font-semibold text-[#7B5CF0]">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#7B5CF0]" />
        Owns
      </span>
    );
  }
  if (value) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[#3D5BD9]">
        <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full border-2 border-[#3D5BD9]" />
        {value}
      </span>
    );
  }
  return (
    <span className="text-[#9AA3BD]">
      <span aria-hidden="true">—</span>
      <span className="sr-only">No role</span>
    </span>
  );
}

export default function RoleMatrix() {
  return (
    <section
      id="roles"
      className="scroll-mt-24 bg-cover bg-center px-6 py-16 lg:px-16"
      style={{ backgroundImage: `url(${IMG}/bg-matrix.webp)` }}
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow num="05">Role boundary matrix</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
          Who owns what. Who only supports.
        </h2>
        <p className="mb-6 max-w-[720px] text-base leading-7 text-[#5B6B8C]">
          The integrator builds the connection. It does not take over anyone else&apos;s responsibilities.
        </p>

        <div className="overflow-x-auto rounded-md border border-[#243B73] bg-white">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#243B73] text-white">
                <th scope="col" className={`${heading} px-4 py-4 font-semibold`}>
                  Responsibility
                </th>
                {columns.map((c) => (
                  <th key={c} scope="col" className={`${heading} px-4 py-4 font-semibold`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.responsibility} className="border-b border-[#E4E7F2] last:border-b-0">
                  <th scope="row" className="px-4 py-4 font-semibold text-[#16245A]">
                    {r.responsibility}
                  </th>
                  {r.cells.map((c, i) => (
                    <td key={columns[i]} className="px-4 py-4">
                      <CellValue value={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-4 flex flex-wrap gap-5 text-xs leading-5 text-[#5B6B8C]">
          <li className="flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#7B5CF0]" /> Owns the decision
          </li>
          <li className="flex items-center gap-1.5">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-[#3D5BD9]" /> Supports or
            approves
          </li>
          <li>— No role</li>
        </ul>
      </div>
    </section>
  );
}

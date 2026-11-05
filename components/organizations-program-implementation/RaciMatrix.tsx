import { Eyebrow, heading } from "./shared";

type Code = "R" | "A" | "C" | "I" | "-";

const roles = ["Sponsor", "Licensed provider", "Data custodian", "Tech operator", "Authority", "Patient / caregiver"];

const rows: { activity: string; codes: Code[] }[] = [
  { activity: "Program mandate", codes: ["A", "C", "C", "I", "C", "I"] },
  { activity: "Clinical decisions", codes: ["I", "A", "-", "-", "-", "C"] },
  { activity: "Data access decisions", codes: ["-", "C", "A", "R", "C", "C"] },
  { activity: "System operation", codes: ["I", "I", "C", "A", "-", "-"] },
  { activity: "Consent & choices", codes: ["-", "C", "R", "I", "-", "A"] },
];

const styles: Record<Exclude<Code, "-">, string> = {
  R: "bg-[#7B5CF0] text-white",
  A: "bg-[#16245A] text-white",
  C: "bg-[#E6EEFF] text-[#2E2A8C]",
  I: "bg-[#EEF0F4] text-[#5B6B8C]",
};

const names: Record<Exclude<Code, "-">, string> = {
  R: "Responsible",
  A: "Accountable",
  C: "Consulted",
  I: "Informed",
};

function Badge({ code }: { code: Code }) {
  if (code === "-") {
    return (
      <span className="text-[#5B6B8C]" aria-label="No role">
        —
      </span>
    );
  }
  return (
    <span
      title={names[code]}
      aria-label={names[code]}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold ${styles[code]}`}
    >
      {code}
    </span>
  );
}

export default function RaciMatrix() {
  return (
    <section className="bg-[#F5F7FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Roles &amp; accountability</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          A conceptual RACI — not a contract.
        </h2>
        <p className="mb-6 max-w-[740px] text-base leading-7 text-[#5B6B8C]">
          Actual role allocations come only from approved agreements. Funding or sponsorship conveys
          no default entitlement to clinical records.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[#E4E7F2] bg-white">
          <table className="w-full min-w-[860px] text-center">
            <thead className="bg-[#16245A] text-white">
              <tr className={`${heading} text-xs font-medium`}>
                <th scope="col" className="px-4 py-3 text-left">Activity</th>
                {roles.map((r) => (
                  <th key={r} scope="col" className="px-3 py-3">{r}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E7F2]">
              {rows.map((row) => (
                <tr key={row.activity}>
                  <th scope="row" className={`${heading} bg-[#F8F9FD] px-4 py-4 text-left text-sm text-[#16245A]`}>
                    {row.activity}
                  </th>
                  {row.codes.map((c, i) => (
                    <td key={roles[i]} className="px-3 py-3">
                      <Badge code={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-3 flex flex-wrap gap-5 text-sm text-[#5B6B8C]">
          {(Object.keys(names) as Exclude<Code, "-">[]).map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${styles[c]}`}
              >
                {c}
              </span>
              {names[c]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

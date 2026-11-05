import { Check } from "lucide-react";
import { IMG, SectionHeader, container, heading, section } from "./shared";

const columns = ["Documentation", "Test results", "Owner evidence", "Independent review"];

// true = evidence category would be required for that domain.
const rows: { domain: string; needs: boolean[] }[] = [
  { domain: "Technical interfaces", needs: [true, true, false, false] },
  { domain: "Security controls", needs: [true, true, true, true] },
  { domain: "Privacy", needs: [true, false, true, true] },
  { domain: "Interoperability", needs: [true, true, false, false] },
  { domain: "Operations", needs: [true, true, true, false] },
  { domain: "Accessibility", needs: [true, true, false, false] },
];

const cell = "border border-[#E4E7F2] px-4 py-3.5";

export default function EvidenceMatrix() {
  return (
    <section className={`bg-cover bg-center ${section}`} style={{ backgroundImage: `url(${IMG}/bg-matrix.webp)` }}>
      <div className={container}>
        <SectionHeader
          eyebrow="Evidence & testing matrix"
          title="Required categories. No invented thresholds."
          intro="Which kind of evidence each domain would need. Pass marks and scores are not defined, so none are shown."
        />

        <div className="relative mt-6 overflow-x-auto bg-white shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#16245A] text-white">
                <th scope="col" className={`${heading} ${cell} border-white/20 text-xs`}>
                  Domain
                </th>
                {columns.map((c) => (
                  <th key={c} scope="col" className={`${heading} ${cell} border-white/20 text-xs`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.domain}>
                  <th scope="row" className={`${cell} bg-[#F5F8FC] text-left font-semibold text-[#16245A]`}>
                    {r.domain}
                  </th>
                  {r.needs.map((n, i) => (
                    <td key={columns[i]} className={`${cell} text-center`}>
                      {n ? (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#7B5CF0]">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                          <span className="sr-only">Required</span>
                        </span>
                      ) : (
                        <span className="text-[#9AA3BD]">
                          <span aria-hidden="true">—</span>
                          <span className="sr-only">Not required</span>
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-[#E4E7F2] bg-[#FDFCF5] px-4 py-3.5 text-xs text-[#5B6B8C]">
            threshold: not defined · scoring: not defined · illustrative mapping pending approval
          </p>
        </div>
      </div>
    </section>
  );
}

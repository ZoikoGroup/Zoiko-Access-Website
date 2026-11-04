import { Eyebrow, heading } from "./shared";

const blue = "bg-[#E6EEFF] text-[#3B5BDB]";
const violet = "bg-[#EEEAFE] text-[#5B3FD0]";
const amber = "bg-[#FFF1DC] text-[#8A5A00]";
const green = "bg-[#E3F5EC] text-[#1E7A4C]";

const rows = [
  { status: "Submitted", evidence: "Created by the sender", notMean: "Sent", pill: blue },
  { status: "Transmitted", evidence: "Transport record", notMean: "Received", pill: blue },
  { status: "Received", evidence: "Destination system receipt", notMean: "A person saw it", pill: violet },
  { status: "Acknowledged", evidence: "Receiving team response", notMean: "Accepted", pill: violet },
  { status: "Reviewed", evidence: "Clinical reviewer record", notMean: "A decision to accept", pill: amber },
  { status: "Accepted", evidence: "Explicit acceptance", notMean: "Care is complete", pill: green },
  { status: "Completed", evidence: "Completion record and date", notMean: "A clinical outcome", pill: green },
];

export default function HandoffStatus() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)]">
        <div>
          <Eyebrow>Handoff status &amp; evidence</Eyebrow>
          <h2 className={`${heading} mb-4 text-3xl text-[#16245A] md:text-[42px] md:leading-[1.15]`}>
            Seven states, each with its own evidence.
          </h2>
          <p className="text-base leading-6 text-[#5B6B8C]">Receipt is never treated as acceptance.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E4E7F2] bg-white">
          <table className="w-full min-w-[560px] text-left">
            <thead className="bg-[#F8F9FD]">
              <tr className="text-xs font-bold uppercase tracking-wide text-[#5B6B8C]">
                <th scope="col" className="px-4 py-3.5">Status</th>
                <th scope="col" className="px-4 py-3.5">Evidence</th>
                <th scope="col" className="px-4 py-3.5">Doesn&apos;t mean</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E7F2] border-t border-[#E4E7F2]">
              {rows.map((r) => (
                <tr key={r.status}>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${r.pill}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#2A3550]">{r.evidence}</td>
                  <td className="px-4 py-3 text-sm text-[#A32020]">{r.notMean}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

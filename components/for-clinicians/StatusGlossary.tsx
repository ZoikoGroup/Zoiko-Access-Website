"use client";

interface StatusItem {
  status: string;
  type: "Technical" | "Clinical";
  means: string;
  source: string;
  notProves: string;
}

const statusData: StatusItem[] = [
  {
    status: "Drafted",
    type: "Technical",
    means: "The sender prepared a request. Nothing has left yet.",
    source: "Sending organization",
    notProves: "That it was sent.",
  },
  {
    status: "Sent",
    type: "Technical",
    means: "The request left the sending organization.",
    source: "Sending organization",
    notProves: "That anyone received it.",
  },
  {
    status: "Delivery confirmed",
    type: "Technical",
    means: "It reached a technical destination.",
    source: "Transport system",
    notProves: "That a person saw it.",
  },
  {
    status: "Received / acknowledged",
    type: "Technical",
    means: "The destination recognized the request.",
    source: "Receiving organization",
    notProves: "That a clinician accepted it.",
  },
  {
    status: "Accepted for review",
    type: "Clinical",
    means: "The responsible receiving party agreed to take it on.",
    source: "Receiving clinician or organization",
    notProves: "That it was reviewed or that treatment is approved.",
  },
  {
    status: "Reviewed",
    type: "Clinical",
    means: "A qualified professional recorded a review.",
    source: "Reviewing professional",
    notProves: "That any action has been completed.",
  },
  {
    status: "Action completed",
    type: "Clinical",
    means: "The responsible party reports the follow-up done.",
    source: "Responsible organization",
    notProves: "Anything beyond what that organization reports.",
  },
  {
    status: "Unable to confirm",
    type: "Technical",
    means: "The source cannot verify the latest state.",
    source: "Source system",
    notProves: "That nothing happened. Check with the organization.",
  },
];

export default function StatusGlossary() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#6d5ae6]">
          <span className="h-0.5 w-3.5 bg-[#6d5ae6]" />
          <span>Status glossary</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-3 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          What each status proves, and what it doesn&apos;t
        </h2>

        {/* Subtitle */}
        <p className="mb-6 max-w-[760px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Technical states and clinical states are kept apart. Where a feature is
          active, each state shows its source and an accountable owner.
        </p>

        {/* Legend */}
        <div className="mb-8 flex flex-wrap items-center gap-6 text-[12px] sm:text-[13px] text-slate-500">
          <div className="inline-flex items-center gap-2">
            <span className="rounded bg-[#dbeafe] px-2 py-0.5 text-[10.5px] font-bold tracking-wider text-[#1d4ed8] uppercase">
              TECHNICAL
            </span>
            <span>about transport and systems</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="rounded bg-[#ede9fe] px-2 py-0.5 text-[10.5px] font-bold tracking-wider text-[#7c3aed] uppercase">
              CLINICAL
            </span>
            <span>about a professional&apos;s action</span>
          </div>
        </div>

        {/* Card container with table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-4">
            <h3 className="text-[14px] font-bold text-slate-800 [font-family:var(--font-poppins)]">
              Referral and result statuses
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-[13px]">
              <thead>
                <tr className="border-b border-slate-100 bg-[#faf9fe] text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
                  <th className="px-6 py-3.5 font-semibold">Status</th>
                  <th className="px-4 py-3.5 font-semibold">Type</th>
                  <th className="px-4 py-3.5 font-semibold">What it means</th>
                  <th className="px-4 py-3.5 font-semibold">Accountable source</th>
                  <th className="px-6 py-3.5 font-semibold">What it does not prove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {statusData.map((item) => (
                  <tr
                    key={item.status}
                    className="transition-colors hover:bg-slate-50/60"
                  >
                    <td className="px-6 py-4 font-bold text-slate-900 whitespace-nowrap">
                      {item.status}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {item.type === "Technical" ? (
                        <span className="inline-block rounded bg-[#dbeafe] px-2.5 py-0.5 text-[11px] font-medium text-[#1d4ed8]">
                          Technical
                        </span>
                      ) : (
                        <span className="inline-block rounded bg-[#ede9fe] px-2.5 py-0.5 text-[11px] font-medium text-[#7c3aed]">
                          Clinical
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-slate-600 max-w-[240px]">
                      {item.means}
                    </td>
                    <td className="px-4 py-4 text-slate-700 whitespace-nowrap">
                      {item.source}
                    </td>
                    <td className="px-6 py-4 text-slate-500 max-w-[240px]">
                      {item.notProves}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

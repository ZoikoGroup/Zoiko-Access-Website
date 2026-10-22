"use client";

interface VocabularyItem {
  status: string;
  recordedBy: string;
  evidence: string;
  cantInfer: string;
}

const vocabularyData: VocabularyItem[] = [
  {
    status: "Sent",
    recordedBy: "Sending system",
    evidence: "Outbound transmission record",
    cantInfer: "That it arrived",
  },
  {
    status: "Delivered",
    recordedBy: "Receiving system",
    evidence: "Technical receipt from recipient endpoint",
    cantInfer: "That a person opened it",
  },
  {
    status: "Acknowledged",
    recordedBy: "Receiving organization",
    evidence: "Recorded acknowledgment by staff or workflow",
    cantInfer: "That it was clinically reviewed",
  },
  {
    status: "Accepted for review",
    recordedBy: "Receiving organization",
    evidence: "Assignment to a responsible clinician or queue",
    cantInfer: "That review has happened",
  },
  {
    status: "Reviewed",
    recordedBy: "Receiving clinician",
    evidence: "Clinician's recorded review in the local system",
    cantInfer: "That the patient was informed",
  },
  {
    status: "Action assigned",
    recordedBy: "Receiving organization",
    evidence: "Documented next step with a named owner",
    cantInfer: "That the action was done",
  },
  {
    status: "Completed",
    recordedBy: "Action owner",
    evidence: "Recorded completion of that specific action",
    cantInfer: "That all care for the result is finished",
  },
  {
    status: "Corrected",
    recordedBy: "Originating organization",
    evidence: "New version that references the earlier one",
    cantInfer: "That recipients have reviewed the change",
  },
  {
    status: "Unavailable",
    recordedBy: "Any party, with source",
    evidence: "A recorded reason the status can't be shown",
    cantInfer: "That nothing happened",
  },
];

export default function StatusVocabulary() {
  return (
    <section className="w-full bg-[#f8faff] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>STATUS VOCABULARY</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)] leading-tight">
          What each status proves, <br className="hidden sm:inline" />
          and what it doesn&apos;t.
        </h2>

        {/* Subtitle */}
        <p className="mb-8 max-w-[620px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          A status is only shown when the responsible organization&apos;s system
          records it. Missing evidence is shown as unknown, never filled in.
        </p>

        {/* Table Container Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-[13px]">
              <thead>
                <tr className="border-b border-slate-100 bg-[#fafbfc] text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-4 py-4 font-semibold">Recorded by</th>
                  <th className="px-4 py-4 font-semibold">Valid evidence</th>
                  <th className="px-6 py-4 font-semibold">What you can&apos;t infer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {vocabularyData.map((row) => (
                  <tr
                    key={row.status}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <td className="px-6 py-4 font-bold text-slate-900 whitespace-nowrap">
                      {row.status}
                    </td>
                    <td className="px-4 py-4 text-slate-600 whitespace-nowrap">
                      {row.recordedBy}
                    </td>
                    <td className="px-4 py-4 text-slate-600 max-w-[280px]">
                      {row.evidence}
                    </td>
                    <td className="px-6 py-4 font-normal text-amber-800/90 whitespace-nowrap">
                      {row.cantInfer}
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

interface WorkflowCell {
  title: string;
  description: string;
  highlighted?: boolean;
}

const workflowRows: {
  party: { name: string; description: string };
  cells: (WorkflowCell | null)[];
}[] = [
  {
    party: {
      name: "Sending clinician",
      description: "Decides what to send",
    },
    cells: [
      {
        title: "Choose a pathway",
        description: "Pick the appropriate coordination route.",
      },
      {
        title: "Send an authorized request",
        description: "Only within your role and permissions.",
        highlighted: true,
      },
      null,
      {
        title: "Follow the outcome",
        description: "As shared by the receiving party.",
      },
    ],
  },
  {
    party: {
      name: "Coordination layer",
      description: "Moves and records",
    },
    cells: [
      null,
      {
        title: "Carry the request",
        description: "Records the time and route.",
      },
      {
        title: "Show the status",
        description: "Keeps both sides informed.",
      },
      null,
    ],
  },
  {
    party: {
      name: "Receiving organization",
      description: "Decides whether to accept",
    },
    cells: [
      null,
      null,
      {
        title: "Acknowledge or accept",
        description: "Accepting is a clinical decision.",
        highlighted: true,
      },
      {
        title: "Own the next action",
        description: "Named owner for follow-up.",
      },
    ],
  },
];

const stages = [
  "1 · PREPARE",
  "2 · SEND",
  "3 · ACKNOWLEDGE",
  "4 · FOLLOW THROUGH",
];

export default function WorkflowMatrix() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F3F3F3] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              How the workflow is organized
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Four steps, and who owns each one.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            The platform helps the request move. The people and organizations
            make the clinical decisions.
          </p>
        </div>

        {/* Matrix Container Card */}
        <div className="mt-12 overflow-x-auto rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8">
          <div className="min-w-[900px]">
            {/* Table Header Columns */}
            <div className="grid grid-cols-5 border-b border-[#E2E8F0] pb-4 text-[13px] font-bold uppercase tracking-wider text-[#7C3AED]">
              <div>PARTY</div>
              {stages.map((stage, idx) => (
                <div key={idx} className="px-4">
                  {stage}
                </div>
              ))}
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-dashed divide-[#E2E8F0]">
              {workflowRows.map((row, rIdx) => (
                <div key={rIdx} className="grid grid-cols-5 items-center py-6">
                  {/* Party Column */}
                  <div className="pr-4">
                    <h3 className="text-[15px] font-bold text-[#1E1B4B]">
                      {row.party.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#64748B]">
                      {row.party.description}
                    </p>
                  </div>

                  {/* 4 Stage Cells */}
                  {row.cells.map((cell, cIdx) => (
                    <div key={cIdx} className="px-2">
                      {cell ? (
                        <div
                          className={`flex flex-col justify-between rounded-2xl p-4.5 transition-all ${
                            cell.highlighted
                              ? "text-white shadow-md"
                              : "border border-[#E2E8F0] bg-white text-[#1E1B4B] shadow-sm"
                          }`}
                          style={
                            cell.highlighted
                              ? {
                                  background:
                                    "linear-gradient(to right, #243B73 0%, #4267D5 100%)",
                                }
                              : undefined
                          }
                        >
                          <h4
                            className={`text-[15px] font-bold tracking-[-0.01em] ${
                              cell.highlighted ? "text-white" : "text-[#1E1B4B]"
                            }`}
                          >
                            {cell.title}
                          </h4>
                          <p
                            className={`mt-1.5 text-[13px] leading-[1.5] ${
                              cell.highlighted
                                ? "text-blue-100"
                                : "text-[#475569]"
                            }`}
                          >
                            {cell.description}
                          </p>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

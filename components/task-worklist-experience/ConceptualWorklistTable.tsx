import React from "react";
import { ListTodo, Info } from "lucide-react";

interface WorklistRow {
  taskType: string;
  assignedRole: string;
  source: string;
  state: string;
  stateColor: string;
  dueContext: string;
  lastEvidence: string;
  nextAction: string;
}

const worklistData: WorklistRow[] = [
  {
    taskType: "Follow-up request (placeholder)",
    assignedRole: "Care coordination team",
    source: "Source system (placeholder)",
    state: "Pending acceptance",
    stateColor: "bg-[#f3e8ff] text-[#7e22ce] border-[#e9d5ff]",
    dueContext: "Due window source: organization policy",
    lastEvidence: "Request sent, time zone shown",
    nextAction: "Receiving team accepts or declines",
  },
  {
    taskType: "Information request (placeholder)",
    assignedRole: "Assigned clinician (role only)",
    source: "Source system (placeholder)",
    state: "Acknowledged",
    stateColor: "bg-[#ede9fe] text-[#4f46e5] border-[#ddd6fe]",
    dueContext: "Due window not set",
    lastEvidence: "Acknowledged by a named role",
    nextAction: "Owner records the action",
  },
];

export const ConceptualWorklistTable: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs md:text-sm uppercase tracking-wider">
              CONCEPTUAL WORKLIST
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            What a worklist could show
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Seven fields per task. Two rows of neutral, made-up examples, with no patients and no real organizations.
          </p>
        </div>

        {/* Worklist Card Container */}
        <div className="rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden bg-white">
          {/* Card Navy Header */}
          <div className="bg-[#101b37] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <ListTodo className="w-4 h-4 text-purple-300" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg">
                Task worklist
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Conceptual UI only
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  <th scope="col" className="py-3.5 px-5">
                    Task type
                  </th>
                  <th scope="col" className="py-3.5 px-5">
                    Assigned role / team
                  </th>
                  <th scope="col" className="py-3.5 px-5">
                    Source
                  </th>
                  <th scope="col" className="py-3.5 px-5">
                    State
                  </th>
                  <th scope="col" className="py-3.5 px-5">
                    Due context
                  </th>
                  <th scope="col" className="py-3.5 px-5">
                    Last evidence
                  </th>
                  <th scope="col" className="py-3.5 px-5">
                    Next responsible action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {worklistData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/70 transition-colors duration-150"
                  >
                    <td className="py-4 px-5 font-semibold text-slate-800">
                      {row.taskType}
                    </td>
                    <td className="py-4 px-5 text-slate-600">
                      {row.assignedRole}
                    </td>
                    <td className="py-4 px-5 text-slate-600">
                      {row.source}
                    </td>
                    <td className="py-4 px-5">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${row.stateColor}`}
                      >
                        {row.state}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-slate-600 text-xs">
                      {row.dueContext}
                    </td>
                    <td className="py-4 px-5 text-slate-600 text-xs">
                      {row.lastEvidence}
                    </td>
                    <td className="py-4 px-5 text-slate-600 text-xs font-medium">
                      {row.nextAction}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-[#f8fafc] border-t border-slate-200/80 px-6 py-3.5 flex items-center justify-center text-center">
            <p className="text-xs text-slate-500 italic flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 inline" />
              Conceptual UI only. No live patient data or deployed system is represented.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

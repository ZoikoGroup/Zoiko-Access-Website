import React from "react";

interface StatusRow {
  status: string;
  type: "Technical" | "Clinical";
  whatItMeans: string;
  accountableParty: string;
  whatItDoesNotProve: string;
}

const statusData: StatusRow[] = [
  {
    status: "Task assigned",
    type: "Technical",
    whatItMeans: "A task has a named owner.",
    accountableParty: "Assigning clinician",
    whatItDoesNotProve: "That work has started.",
  },
  {
    status: "Result received",
    type: "Technical",
    whatItMeans: "The result arrived from the source system.",
    accountableParty: "Source system",
    whatItDoesNotProve: "That anyone has reviewed it.",
  },
  {
    status: "Opened",
    type: "Technical",
    whatItMeans: "Someone opened the item.",
    accountableParty: "Viewer",
    whatItDoesNotProve: "That it was reviewed.",
  },
  {
    status: "Reviewed",
    type: "Clinical",
    whatItMeans: "A professional recorded a review.",
    accountableParty: "Reviewing professional",
    whatItDoesNotProve: "What action followed.",
  },
  {
    status: "Action needed",
    type: "Clinical",
    whatItMeans: "A professional requested a next step.",
    accountableParty: "Reviewing professional",
    whatItDoesNotProve: "That the step is done.",
  },
  {
    status: "Closed",
    type: "Clinical",
    whatItMeans: "The owner closed the task.",
    accountableParty: "Task owner",
    whatItDoesNotProve: "A clinical outcome.",
  },
  {
    status: "Unable to confirm",
    type: "Technical",
    whatItMeans: "The state can't be established.",
    accountableParty: "Source system",
    whatItDoesNotProve: "That nothing happened — verify with the source.",
  },
];

export default function TaskAndResultStatuses() {
  return (
    <div className="bg-[#F6F9FC] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            STATUS VOCABULARY
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-4">
          What each status proves, and what it doesn&apos;t.
        </h1>

        {/* Description */}
        <p className="text-[#425466] text-base md:text-lg max-w-3xl leading-relaxed mb-6">
          Technical states and clinical states are kept separate. When a feature
          is active, each state shows its source and an accountable owner.
        </p>

        {/* Badges Explanation Legend */}
        <div className="flex flex-wrap items-center gap-3 text-sm mb-10">
          <div className="flex items-center gap-2">
            <span className="bg-[#E0E7FF] text-[#3730A3] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
              TECHNICAL
            </span>
            <span className="text-[#697386] text-sm">
              about transport and systems
            </span>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <span className="bg-[#F3E8FF] text-[#6B21A8] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
              CLINICAL
            </span>
            <span className="text-[#697386] text-sm">
              about a professional action
            </span>
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E6EBF1] overflow-hidden">
          {/* Card Header */}
          <div className="px-8 py-6 border-b border-[#F0F4F8]">
            <h2 className="text-xl font-bold text-[#0A2540]">
              Task and result statuses
            </h2>
          </div>

          {/* Table Container */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#F0F4F8] text-xs font-bold uppercase tracking-wider text-[#697386] bg-[#FAFCFF]">
                  <th className="py-4 px-8 w-1/5">STATUS</th>
                  <th className="py-4 px-4 w-1/12">TYPE</th>
                  <th className="py-4 px-6 w-1/3">WHAT IT MEANS</th>
                  <th className="py-4 px-6 w-1/5">ACCOUNTABLE PARTY</th>
                  <th className="py-4 px-8 w-1/4">WHAT IT DOES NOT PROVE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F4F8] text-sm text-[#425466]">
                {statusData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#F8FAFC] transition-colors"
                  >
                    {/* Status Column */}
                    <td className="py-5 px-8 font-bold text-[#0A2540] whitespace-pre-line align-top">
                      <a
                        href="#"
                        className="hover:underline focus:outline-none"
                      >
                        {row.status}
                      </a>
                    </td>

                    {/* Type Badge */}
                    <td className="py-5 px-4 align-top">
                      {row.type === "Technical" ? (
                        <span className="bg-[#E0E7FF] text-[#3730A3] text-[11px] font-bold px-2 py-0.5 rounded uppercase inline-block">
                          Technical
                        </span>
                      ) : (
                        <span className="bg-[#F3E8FF] text-[#6B21A8] text-[11px] font-bold px-2 py-0.5 rounded uppercase inline-block">
                          Clinical
                        </span>
                      )}
                    </td>

                    {/* What it means */}
                    <td className="py-5 px-6 leading-normal align-top">
                      {row.whatItMeans}
                    </td>

                    {/* Accountable Party */}
                    <td className="py-5 px-6 whitespace-pre-line leading-normal align-top">
                      {row.accountableParty}
                    </td>

                    {/* What it does not prove */}
                    <td className="py-5 px-8 leading-normal align-top">
                      {row.whatItDoesNotProve}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

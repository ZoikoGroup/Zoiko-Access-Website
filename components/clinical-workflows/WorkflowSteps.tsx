import React from "react";

interface MatrixRow {
  party: string;
  partySubtext: string;
  assign?: { title: string; desc: string; isFilled?: boolean };
  receive?: { title: string; desc: string; isFilled?: boolean };
  review?: { title: string; desc: string; isFilled?: boolean };
  close?: { title: string; desc: string; isFilled?: boolean };
}

const matrixData: MatrixRow[] = [
  {
    party: "Assigning clinician",
    partySubtext: "Creates the task",
    assign: {
      title: "Assign a task",
      desc: "To a named role or person.",
      isFilled: true,
    },
    close: {
      title: "Confirm closure",
      desc: "Where the task requires it.",
    },
  },
  {
    party: "Source system",
    partySubtext: "Produces results",
    receive: {
      title: "Result available",
      desc: "From the lab or source system.",
    },
  },
  {
    party: "Coordination layer",
    partySubtext: "Shows the state",
    assign: {
      title: "Show the owner",
      desc: "Visible to the right team.",
    },
    receive: {
      title: "Record receipt",
      desc: "Time and source kept together.",
    },
    review: {
      title: "Show review state",
      desc: 'Never inferred from "opened".',
    },
  },
  {
    party: "Reviewing professional",
    partySubtext: "Owns the review",
    review: {
      title: "Review the result",
      desc: "A professional, clinical action.",
      isFilled: true,
    },
    close: {
      title: "Act on findings",
      desc: "Within their own scope.",
    },
  },
];

export default function WorkflowSteps() {
  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider bg-gradient-to-r from-[#16245A] to-[#2F4DC0] bg-clip-text text-transparent uppercase">
            HOW THE WORKFLOW IS ORGANIZED
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-4">
          Four steps, and who owns each one.
        </h1>

        {/* Description */}
        <p className="text-[#425466] text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          Tasks, results and reviews move between people. Each step has its own
          accountable owner.
        </p>

        {/* Main Table Card Container */}
        <div className="bg-white rounded-2xl border border-[#E6EBF1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-[#E6EBF1] text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#16245A] to-[#2F4DC0] bg-clip-text text-transparent bg-[#FAF8FF]/40">
                  <th className="py-5 px-6 w-1/5 border-r border-[#E6EBF1]/60">
                    PARTY
                  </th>
                  <th className="py-5 px-6 w-1/5 border-r border-dashed border-[#E6EBF1]">
                    1 · ASSIGN
                  </th>
                  <th className="py-5 px-6 w-1/5 border-r border-dashed border-[#E6EBF1]">
                    2 · RECEIVE
                  </th>
                  <th className="py-5 px-6 w-1/5 border-r border-dashed border-[#E6EBF1]">
                    3 · REVIEW
                  </th>
                  <th className="py-5 px-6 w-1/5">4 · CLOSE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6EBF1]">
                {matrixData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#FAFCFF]/50 transition-colors"
                  >
                    {/* PARTY COLUMN */}
                    <td className="py-6 px-6 align-middle border-r border-[#E6EBF1]/60 bg-[#FAFCFF]/30">
                      <div className="font-bold text-[#0A2540] text-sm md:text-base">
                        <a href="#" className="hover:underline">
                          {row.party}
                        </a>
                      </div>
                      <div className="text-xs text-[#697386] mt-1 font-normal">
                        {row.partySubtext}
                      </div>
                    </td>

                    {/* 1. ASSIGN */}
                    <td className="p-4 align-middle border-r border-dashed border-[#E6EBF1]">
                      {row.assign && (
                        <div
                          className={`p-4 rounded-xl transition-all ${
                            row.assign.isFilled
                              ? "bg-gradient-to-r from-[#243B73] to-[#4267D5] text-white shadow-sm"
                              : "bg-white border border-[#E0E7FF] text-[#0A2540] shadow-[0_2px_8px_rgba(99,91,255,0.04)]"
                          }`}
                        >
                          <div
                            className={`font-bold text-sm mb-1 ${row.assign.isFilled ? "text-white" : "text-[#0A2540]"}`}
                          >
                            <a href="#" className="hover:underline">
                              {row.assign.title}
                            </a>
                          </div>
                          <div
                            className={`text-xs leading-relaxed ${row.assign.isFilled ? "text-white/80" : "text-[#697386]"}`}
                          >
                            {row.assign.desc}
                          </div>
                        </div>
                      )}
                    </td>

                    {/* 2. RECEIVE */}
                    <td className="p-4 align-middle border-r border-dashed border-[#E6EBF1]">
                      {row.receive && (
                        <div
                          className={`p-4 rounded-xl transition-all ${
                            row.receive.isFilled
                              ? "bg-[#3B59D8] text-white shadow-sm"
                              : "bg-white border border-[#E0E7FF] text-[#0A2540] shadow-[0_2px_8px_rgba(99,91,255,0.04)]"
                          }`}
                        >
                          <div
                            className={`font-bold text-sm mb-1 ${row.receive.isFilled ? "text-white" : "text-[#0A2540]"}`}
                          >
                            <a href="#" className="hover:underline">
                              {row.receive.title}
                            </a>
                          </div>
                          <div
                            className={`text-xs leading-relaxed ${row.receive.isFilled ? "text-white/80" : "text-[#697386]"}`}
                          >
                            {row.receive.desc}
                          </div>
                        </div>
                      )}
                    </td>

                    {/* 3. REVIEW */}
                    <td className="p-4 align-middle border-r border-dashed border-[#E6EBF1]">
                      {row.review && (
                        <div
                          className={`p-4 rounded-xl transition-all ${
                            row.review.isFilled
                              ? "bg-gradient-to-r from-[#243B73] to-[#4267D5] text-white shadow-sm"
                              : "bg-white border border-[#E0E7FF] text-[#0A2540] shadow-[0_2px_8px_rgba(99,91,255,0.04)]"
                          }`}
                        >
                          <div
                            className={`font-bold text-sm mb-1 ${row.review.isFilled ? "text-white" : "text-[#0A2540]"}`}
                          >
                            <a href="#" className="hover:underline">
                              {row.review.title}
                            </a>
                          </div>
                          <div
                            className={`text-xs leading-relaxed ${row.review.isFilled ? "text-white/80" : "text-[#697386]"}`}
                          >
                            {row.review.desc}
                          </div>
                        </div>
                      )}
                    </td>

                    {/* 4. CLOSE */}
                    <td className="p-4 align-middle">
                      {row.close && (
                        <div
                          className={`p-4 rounded-xl transition-all ${
                            row.close.isFilled
                              ? "bg-[#3B59D8] text-white shadow-sm"
                              : "bg-white border border-[#E0E7FF] text-[#0A2540] shadow-[0_2px_8px_rgba(99,91,255,0.04)]"
                          }`}
                        >
                          <div
                            className={`font-bold text-sm mb-1 ${row.close.isFilled ? "text-white" : "text-[#0A2540]"}`}
                          >
                            <a href="#" className="hover:underline">
                              {row.close.title}
                            </a>
                          </div>
                          <div
                            className={`text-xs leading-relaxed ${row.close.isFilled ? "text-white/80" : "text-[#697386]"}`}
                          >
                            {row.close.desc}
                          </div>
                        </div>
                      )}
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

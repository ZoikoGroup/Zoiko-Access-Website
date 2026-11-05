import React from "react";

interface SubmissionState {
  name: string;
  description: string;
  isCurrent?: boolean;
}

const states: SubmissionState[] = [
  { name: "Ready", description: "Form can be completed" },
  { name: "Invalid", description: "Something needs fixing" },
  { name: "Submitting", description: "Sending securely" },
  { name: "Received", description: "Logged for review" },
  { name: "Failed", description: "Not sent; try again" },
  { name: "Duplicate", description: "Already received" },
  { name: "Unavailable", description: "Intake not open", isCurrent: true },
  { name: "Redirected", description: "Sent to a better route" },
];

export const SubmissionStatesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              SUBMISSION STATES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            Every state, said plainly.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            How an enquiry would report its status. Today the form is in the &ldquo;unavailable&rdquo; state.
          </p>
        </div>

        {/* 8 States Bar */}
        <div className="bg-white rounded-2xl p-1.5 sm:p-2 border border-slate-200/80 shadow-sm mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2">
            {states.map((state, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-center text-center p-3.5 sm:p-4 rounded-xl transition-all ${
                  state.isCurrent
                    ? "bg-[#0d163d] text-white shadow-md relative"
                    : "bg-transparent text-slate-700 hover:bg-slate-50/80"
                }`}
              >
                <span
                  className={`font-bold text-xs sm:text-sm mb-1 ${
                    state.isCurrent ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  {state.name}
                </span>
                <span
                  className={`text-[11px] leading-tight ${
                    state.isCurrent ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {state.description}
                </span>
                {state.isCurrent && (
                  <span className="mt-2 text-[10px] font-bold tracking-wider uppercase text-purple-300">
                    CURRENT
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <p className="text-xs text-slate-500 leading-relaxed">
          Submissions would be checked on the server and handled safely if they fail. No response-time promise is made.
        </p>
      </div>
    </section>
  );
};

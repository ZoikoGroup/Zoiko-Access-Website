import React from "react";

const audienceQuestions = [
  {
    audience: "Patient / visitor",
    question: '"Can I use Zoiko Access in my area?"',
  },
  {
    audience: "Caregiver / guardian",
    question: '"Can I manage someone else\'s access?"',
  },
  {
    audience: "Clinician",
    question: '"Does a request equal an accepted referral?"',
  },
  {
    audience: "Hospital / lab / pharmacy",
    question: '"Who owns clinical and source records?"',
  },
  {
    audience: "Payer / employer",
    question: '"Can we see personal medical information?"',
  },
  {
    audience: "Developer / partner",
    question: '"Are APIs live?"',
  },
];

export const AudienceBehindQuestions: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              WHO ASKS WHAT
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            The question behind{" "}
            <span className="text-[#7c5cff]">every audience</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Every answer above is written for one of these questions.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {audienceQuestions.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex items-center gap-4"
            >
              <span className="w-9 h-9 rounded-full bg-[#f3f0ff] text-[#6366f1] font-bold text-sm flex items-center justify-center shrink-0">
                ?
              </span>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-0.5">
                  {item.audience}
                </h3>
                <p className="text-xs italic text-slate-500 leading-snug">
                  {item.question}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";

const dictionaryRules = [
  {
    num: "1",
    title: "Only what is needed",
    description: "Each field has a stated purpose and retention period.",
  },
  {
    num: "2",
    title: "Business details only",
    description: "Organisation and contact details, never patient information.",
  },
  {
    num: "3",
    title: "Opens when ready",
    description:
      "Only after staffed routing, privacy notice, retention and confirmation are verified.",
  },
];

const previewFields = [
  { type: "Text", label: "Organization legal name" },
  { type: "Choice", label: "Your role" },
  { type: "Email", label: "Business email" },
  { type: "Choice", label: "Jurisdiction" },
  { type: "Short text", label: "Intended use" },
  { type: "Text", label: "Institution sponsor" },
  { type: "Checklist", label: "Data categories" },
  { type: "Consent", label: "Contact consent" },
];

export const ApplicationDataDictionary: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              04 · Application data dictionary
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
              What we would ask, when{" "}
              <span className="bg-[#ede9fe] px-1.5 py-0.5 rounded-md">
                intake opens
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-7">
              A preview of the proposed fields. There is no form on this page.
            </p>

            <div className="space-y-3">
              {dictionaryRules.map((rule) => (
                <div
                  key={rule.num}
                  className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-xs flex items-start gap-3.5"
                >
                  <span className="w-6 h-6 rounded-md bg-[#f3f0ff] text-[#6366f1] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {rule.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-[#0f172a] mb-0.5">
                      {rule.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Field Preview Card */}
          <div className="lg:col-span-6 pt-3">
            <div className="relative bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 pt-7 shadow-md">
              {/* Top Pill */}
              <span className="absolute -top-3 left-5 bg-[#0f172a] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                PREVIEW ONLY · INTAKE CLOSED
              </span>

              {/* 8 Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {previewFields.map((field, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/70 rounded-xl border border-slate-200/70 p-3"
                  >
                    <span className="block text-[10px] text-slate-400 font-medium mb-0.5">
                      {field.type}
                    </span>
                    <span className="block text-xs font-bold text-[#0f172a]">
                      {field.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Warning Strip */}
              <div className="bg-rose-50 border border-rose-200/80 rounded-xl px-4 py-2.5 text-xs font-semibold text-rose-600 flex items-center gap-2">
                <span aria-hidden="true">✕</span>
                <span>
                  Never include patient data, patient files or clinical documents.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

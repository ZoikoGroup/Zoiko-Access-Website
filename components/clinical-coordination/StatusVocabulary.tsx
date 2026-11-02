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
    status: "Drafted",
    type: "Technical",
    whatItMeans: "Prepared but not sent.",
    accountableParty: "Sending clinician",
    whatItDoesNotProve: "That anything has been sent.",
  },
  {
    status: "Sent",
    type: "Technical",
    whatItMeans: "Transmitted by the sending organization.",
    accountableParty: "Sending organization",
    whatItDoesNotProve: "That anyone has received it.",
  },
  {
    status: "Delivery confirmed",
    type: "Technical",
    whatItMeans: "The destination system received it.",
    accountableParty: "Receiving system",
    whatItDoesNotProve: "That a person has read it.",
  },
  {
    status: "Received /\nacknowledged",
    type: "Clinical",
    whatItMeans: "The receiving team has acknowledged it.",
    accountableParty: "Receiving\norganization",
    whatItDoesNotProve: "That it is accepted.",
  },
  {
    status: "Accepted for review",
    type: "Clinical",
    whatItMeans: "The receiving organization accepts responsibility to review.",
    accountableParty: "Receiving\nprofessional",
    whatItDoesNotProve: "That care has been provided.",
  },
  {
    status: "Declined",
    type: "Clinical",
    whatItMeans: "The receiving organization will not accept it.",
    accountableParty: "Receiving\nprofessional",
    whatItDoesNotProve: "A clinical judgment about the patient.",
  },
  {
    status: "Unable to confirm",
    type: "Technical",
    whatItMeans: "The status can't be established.",
    accountableParty: "Source system",
    whatItDoesNotProve: "That nothing happened — verify with the source.",
  },
];

export default function StatusVocabulary() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] font-sans text-[#1D2939] px-6 py-12 md:px-24 md:py-16">
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
              Referral and handoff statuses
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

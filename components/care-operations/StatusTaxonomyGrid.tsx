import React from "react";

interface StatusItem {
  label: string;
  badgeBg: string;
  badgeTextColor: string;
  dotColor: string;
  description: string;
  evidence: string;
}

const statusItemsData: StatusItem[] = [
  {
    label: "Draft",
    badgeBg: "bg-[#F1F5F9]",
    badgeTextColor: "text-[#475569]",
    dotColor: "bg-[#64748B]",
    description: "Being prepared, not sent.",
    evidence: "Evidence: author's system",
  },
  {
    label: "Submitted",
    badgeBg: "bg-[#F1F0FE]",
    badgeTextColor: "text-[#7C3AED]",
    dotColor: "bg-[#7C3AED]",
    description: "Sent by the originator.",
    evidence: "Evidence: send record",
  },
  {
    label: "Transport acknowledged",
    badgeBg: "bg-[#EFF6FF]",
    badgeTextColor: "text-[#2563EB]",
    dotColor: "bg-[#3B82F6]",
    description: "Delivery confirmed by the network.",
    evidence: "Evidence: transport receipt",
  },
  {
    label: "Received",
    badgeBg: "bg-[#EEF2FF]",
    badgeTextColor: "text-[#3730A3]",
    dotColor: "bg-[#4338CA]",
    description: "Stored by the receiving system.",
    evidence: "Evidence: receiver record",
  },
  {
    label: "Under review",
    badgeBg: "bg-[#FEF3C7]",
    badgeTextColor: "text-[#92400E]",
    dotColor: "bg-[#D97706]",
    description: "A person is reviewing it.",
    evidence: "Evidence: named reviewer",
  },
  {
    label: "Accepted",
    badgeBg: "bg-[#DCFCE7]",
    badgeTextColor: "text-[#166534]",
    dotColor: "bg-[#16A34A]",
    description: "The receiving team took it on.",
    evidence: "Evidence: acceptance record",
  },
  {
    label: "Declined",
    badgeBg: "bg-[#FEE2E2]",
    badgeTextColor: "text-[#991B1B]",
    dotColor: "bg-[#DC2626]",
    description: "The receiving team did not accept it.",
    evidence: "Evidence: decision record",
  },
  {
    label: "Confirmed",
    badgeBg: "bg-[#16245A]",
    badgeTextColor: "text-white",
    dotColor: "bg-white",
    description: "Slot confirmed by the scheduler.",
    evidence: "Evidence: scheduling system",
  },
  {
    label: "Closed",
    badgeBg: "bg-[#F5F5F4]",
    badgeTextColor: "text-[#57534E]",
    dotColor: "bg-[#78716C]",
    description: "The workflow is complete.",
    evidence: "Evidence: closing owner",
  },
];

export default function StatusTaxonomyGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
                — STATUS TAXONOMY
              </span>
            </div>

            <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
              Nine statuses, never merged.
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
              Each status is a separate event, shown only when there is evidence
              for it. Text labels, never color alone.
            </p>
          </div>
        </div>

        {/* 3x3 Grid of Status Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {statusItemsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-start gap-4">
                {/* Pill Status Badge */}
                <div
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[12px] font-bold ${item.badgeBg} ${item.badgeTextColor}`}
                >
                  <span className={`h-2 w-2 rounded-full ${item.dotColor}`} />
                  <span>{item.label}</span>
                </div>

                {/* Description & Evidence Details */}
                <div>
                  <p className="text-[14px] font-bold text-[#0E1646]">
                    {item.description}
                  </p>
                  <p className="mt-1 font-mono text-[12px] text-[#94A3B8]">
                    {item.evidence}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Notice */}
        <p className="mt-8 font-mono text-[13px] text-[#94A3B8]">
          If there is no evidence for a status, it is not shown.
        </p>
      </div>
    </section>
  );
}

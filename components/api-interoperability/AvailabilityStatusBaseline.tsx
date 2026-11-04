import React from "react";
import { AlertCircle } from "lucide-react";

interface StatusColumn {
  title: string;
  statusText: string;
}

const statusColumns: StatusColumn[] = [
  {
    title: "Published",
    statusText: "no approved status",
  },
  {
    title: "Test",
    statusText: "no approved status",
  },
  {
    title: "Production",
    statusText: "no approved status",
  },
];

export default function AvailabilityStatusBaseline() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#F1F0FE] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
              // availability
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            What is available today.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Capabilities depend on partner qualification, country and actual
            release state. Only approved status cards may show a published, test
            or production state.
          </p>
        </div>

        {/* Status Card Banner */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          {/* Top Informational Baseline Banner */}
          <div className="flex items-center gap-3 bg-[#F4F0FF] px-6 py-4 sm:px-8">
            <AlertCircle className="h-5 w-5 shrink-0 text-[#7C3AED]" />
            <p className="text-[14px] leading-[1.5] text-[#1E1B4B] sm:text-[15px]">
              <span className="font-bold">Informational baseline.</span> No
              interface has an approved status yet, so all three states below
              are empty.
            </p>
          </div>

          {/* 3 Status Columns */}
          <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {statusColumns.map((col, idx) => (
              <div key={idx} className="p-6 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-[#CBD5E1] bg-transparent" />
                  <h3 className="text-[17px] font-bold text-[#0E1646]">
                    {col.title}
                  </h3>
                </div>
                <p className="mt-2 pl-6 font-mono text-[13px] text-[#94A3B8]">
                  {col.statusText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

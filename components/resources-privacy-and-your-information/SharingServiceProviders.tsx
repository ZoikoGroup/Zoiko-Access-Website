import React from "react";

const recipients = [
  {
    recipient: "Healthcare providers you choose",
    why: "To coordinate a step you asked for, where authorized",
    detail: "Listed in notice",
  },
  {
    recipient: "Service providers",
    why: "Hosting, security and support, under contract",
    detail: "Listed in notice",
  },
  {
    recipient: "Legal or regulatory authorities",
    why: "Only where the law requires it",
    detail: "Listed in notice",
  },
  {
    recipient: "People you authorize",
    why: "Representatives with verified authority",
    detail: "Listed in notice",
  },
];

export const SharingServiceProviders: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
            06
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Sharing &amp; service providers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Categories of recipients. The applicable notice names them in detail.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-x-auto">
          <div className="min-w-[640px]">
            {/* Lavender Header Row */}
            <div className="bg-[#9d8cff] text-white px-6 py-3.5 grid grid-cols-12 gap-4 text-xs font-semibold">
              <div className="col-span-4">Recipient</div>
              <div className="col-span-6">Why</div>
              <div className="col-span-2 text-right">Detail</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100 text-xs">
              {recipients.map((row, idx) => (
                <div
                  key={idx}
                  className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-slate-50/60 transition-colors"
                >
                  <div className="col-span-4 font-bold text-[#0f172a]">
                    {row.recipient}
                  </div>
                  <div className="col-span-6 text-slate-600">{row.why}</div>
                  <div className="col-span-2 text-right">
                    <span className="inline-block bg-[#f1effd] text-[#6366f1] text-[10px] font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      {row.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

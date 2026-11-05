import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface QueueItem {
  title: string;
  meta: string;
  statusText: string;
  statusBg: string;
  statusTextCol: string;
}

const sendingItems: QueueItem[] = [
  {
    title: "Item A · referral",
    meta: "sent · source: sender system",
    statusText: "Submitted",
    statusBg: "bg-[#F1F0FE]",
    statusTextCol: "text-[#7C3AED]",
  },
  {
    title: "Item B · transition",
    meta: "sent · source: sender system",
    statusText: "Transport ack",
    statusBg: "bg-[#EFF6FF]",
    statusTextCol: "text-[#2563EB]",
  },
  {
    title: "Item C · request",
    meta: "draft · source: author",
    statusText: "Draft",
    statusBg: "bg-[#F1F5F9]",
    statusTextCol: "text-[#475569]",
  },
];

const receivingItems: QueueItem[] = [
  {
    title: "Item A · referral",
    meta: "received · source: receiver system",
    statusText: "Under review",
    statusBg: "bg-[#FEF3C7]",
    statusTextCol: "text-[#92400E]",
  },
  {
    title: "Item B · transition",
    meta: "received · source: receiver system",
    statusText: "Received",
    statusBg: "bg-[#EEF2FF]",
    statusTextCol: "text-[#3730A3]",
  },
  {
    title: "Item D · referral",
    meta: "decided · source: named reviewer",
    statusText: "Accepted",
    statusBg: "bg-[#DCFCE7]",
    statusTextCol: "text-[#166534]",
  },
];

export default function TwoQueuesOwnership() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28 text-white">
      {/* Background Image Layer using /tech/grad.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/tech/grad.png"
          alt="Work queues and ownership background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#B7A6FF] uppercase">
              — WORK QUEUES &amp; OWNERSHIP
            </span>
          </div>

          <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[44px]">
            Two queues, two accountable owners.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            A static illustration with placeholder items. It is not a live queue
            and contains no patient data.
          </p>
        </div>

        {/* Two Main Queues Side-by-Side with Arrow in between */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Sending Team Queue Container */}
          <div
            className="rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 lg:col-span-5"
            style={{ backgroundColor: "#1A1466" }}
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <h3 className="text-[18px] font-bold text-white">Sending team</h3>
              <span className="font-mono text-[11px] font-semibold tracking-wide text-blue-200/60 uppercase">
                owner: referring clinic
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {sendingItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm sm:p-5 text-[#0E1646]"
                >
                  <div>
                    <h4 className="text-[15px] font-bold">{item.title}</h4>
                    <p className="mt-0.5 font-mono text-[12px] text-[#64748B]">
                      {item.meta}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[11px] font-bold ${item.statusBg} ${item.statusTextCol}`}
                  >
                    {item.statusText}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Central Animated Flow Arrow for Desktop */}
          <div className="hidden lg:flex lg:col-span-2 justify-center items-center">
            <div className="flex flex-col items-center gap-2 text-white/60">
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
                <span className="h-1 w-1 rounded-full bg-white/80" />
                <span className="h-1 w-1 rounded-full bg-white/60" />
                <ArrowRight className="h-6 w-6 text-white/80" />
              </div>
            </div>
          </div>

          {/* Receiving Team Queue Container */}
          <div
            className="rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 lg:col-span-5"
            style={{ backgroundColor: "#1A1466" }}
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <h3 className="text-[18px] font-bold text-white">
                Receiving team
              </h3>
              <span className="font-mono text-[11px] font-semibold tracking-wide text-blue-200/60 uppercase">
                owner: receiving clinic
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {receivingItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm sm:p-5 text-[#0E1646]"
                >
                  <div>
                    <h4 className="text-[15px] font-bold">{item.title}</h4>
                    <p className="mt-0.5 font-mono text-[12px] text-[#64748B]">
                      {item.meta}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[11px] font-bold ${item.statusBg} ${item.statusTextCol}`}
                  >
                    {item.statusText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Guarantee Bullets */}
        <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-[13px] text-blue-200/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>Every item shows its owner</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>Every time comes from a named source</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <span>No status is inferred from another</span>
          </div>
        </div>
      </div>
    </section>
  );
}

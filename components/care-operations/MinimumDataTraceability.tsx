import Image from "next/image";
import {
  Filter,
  UserCheck,
  Database,
  History,
  Fingerprint,
} from "lucide-react";

interface ControlItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const securityControls: ControlItem[] = [
  {
    title: "Purpose-linked data",
    description: "Only the minimum needed for the step.",
    icon: <Filter className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Role checks",
    description: "Action checked against the user's role.",
    icon: <UserCheck className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Source provenance",
    description: "Every item shows where it came from.",
    icon: <Database className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Correction history",
    description: "Changes recorded, never overwritten.",
    icon: <History className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Trace IDs",
    description: "Each step can be followed through it.",
    icon: <Fingerprint className="h-5 w-5 text-purple-300" />,
  },
];

const auditFields = [
  { key: "trace_id", value: "trc_rec_8492001" },
  { key: "event", value: "referral_received" },
  { key: "source", value: "dispensing_system_triaging" },
  { key: "role", value: "referral_coordinator" },
  { key: "purpose", value: "referral_review" },
  { key: "at", value: "2026-11-05T14:32:01.012Z" },
  { key: "correction", value: "none" },
];

export default function MinimumDataTraceability() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28 text-white">
      {/* Background Image Layer using /tech/grad.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/tech/grad.png"
          alt="Security and audit background gradient"
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
              — INSTITUTIONAL SECURITY &amp; AUDIT
            </span>
          </div>

          <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[44px]">
            Minimum data, full traceability.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            Five controls that protect every coordinated step.
          </p>
        </div>

        {/* Layout Grid: 5 Control Cards (Left) + Code Audit Trace View (Right) */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: 5 Control Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {securityControls.map((control, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 backdrop-blur-md border border-white/10 shadow-lg transition-all hover:bg-white/10 ${
                  idx === 4 ? "sm:col-span-2" : ""
                }`}
                style={{ backgroundColor: "#FFFFFF14" }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  {control.icon}
                </div>
                <h3 className="text-[17px] font-bold text-white">
                  {control.title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.5] text-blue-100/80">
                  {control.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Audit Trace Monospace Container */}
          <div className="lg:col-span-5">
            <div
              className="rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10"
              style={{ backgroundColor: "#16245A" }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-[13px] font-bold tracking-wide text-purple-300">
                  audit-trace
                </span>
                <span className="font-mono text-[11px] font-medium text-slate-400">
                  [json/v1]
                </span>
              </div>

              <div className="mt-6 space-y-3 font-mono text-[13px]">
                {auditFields.map((field, idx) => (
                  <div key={idx} className="flex justify-between gap-4">
                    <span className="text-slate-400 shrink-0">
                      {field.key}:
                    </span>
                    <span className="text-purple-200 text-right truncate">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

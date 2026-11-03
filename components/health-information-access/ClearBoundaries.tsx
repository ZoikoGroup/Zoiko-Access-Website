import { Check, X } from "lucide-react";

const isItems = [
  "Authorized, source by source",
  "Shown with its source and date",
  "Controlled by your permissions",
  "Available only where enabled",
];

const isNotItems = [
  "A single worldwide patient record",
  "Instant connection to every system",
  "A replacement for your provider's records",
  "Medical advice or interpretation",
];

export default function ClearBoundaries() {
  return (
    <section className="bg-[#F5F7FC] px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[1px] w-8 bg-[#2F4DC0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F4DC0]">
            Clear boundaries
          </span>
        </div>
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          What health information access is, and isn&apos;t.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E6EBF1] bg-white p-6 md:p-8">
            <h3 className="mb-4 text-base font-bold text-[#0A2540]">
              It is designed to be
            </h3>
            <ul className="space-y-3">
              {isItems.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-[#425466]">
                  <Check className="h-4 w-4 shrink-0 text-[#16A34A]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#1E2A78] p-6 text-white md:p-8">
            <h3 className="mb-4 text-base font-bold">It is not</h3>
            <ul className="space-y-3">
              {isNotItems.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-white/85">
                  <X className="h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

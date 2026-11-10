import { Check, Clock, Database, Filter, Lock, RefreshCw } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const principles = [
  { icon: Database, title: "Source stays authoritative", text: "The originating system owns the record." },
  { icon: Filter, title: "Minimum necessary", text: "Only the context the task needs." },
  { icon: Lock, title: "Authorized exchange", text: "Every exchange checked against permissions." },
  { icon: Clock, title: "Provenance on everything", text: "Sender, time and owner on each message." },
  { icon: RefreshCw, title: "Versioned contracts", text: "Interfaces change only with notice." },
  { icon: Check, title: "Explicit status", text: "Receipt is never shown as acceptance." },
];

export default function InteropPrinciples() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Interoperability principles"
          title="Six principles. No protocol claims yet."
          intro="Candidate patterns for exchange and authorization. Specific protocols are named only once validated in the connector registry."
        />

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative overflow-hidden rounded-[20px] border border-[#E4E7F2] bg-white p-6 shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
            >
              <span
                className={`${heading} absolute right-6 top-2 select-none text-5xl font-bold text-[#F5F8FC]`}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="relative h-6 w-6 text-[#7B5CF0]" strokeWidth={1.75} aria-hidden="true" />
              <h3 className={`${heading} relative mt-4 text-base text-[#16245A]`}>{title}</h3>
              <p className="relative mt-0.5 text-sm leading-6 text-[#5B6B8C]">{text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-[#C7CFE3] bg-white px-5 py-4">
          <p className={`${heading} text-base font-bold text-[#16245A]`}>Standards registry</p>
          <p className="min-w-56 flex-1 text-sm leading-6 text-[#5B6B8C]">
            No exchange standard or protocol has been validated for public listing.
          </p>
          <span className="rounded-md bg-[#F0F3F9] px-3 py-1 text-xs text-[#8A97B3]">validated: 0</span>
        </div>
      </div>
    </section>
  );
}

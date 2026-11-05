import { Check, X } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const is = [
  "A scoped review of one product, version and market",
  "Dated, with a named review authority",
  "Open to withdrawal if things change",
];

const isNot = [
  "Regulatory approval or legal compliance",
  "A guarantee of safety, uptime or outcomes",
  "Permission to access patient data",
  "A replacement for clinical judgment",
];

export default function AssuranceLimits() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Independent assurances & limitations"
          title="What a framework result is, and is not."
          intro="A scoped review result is not regulation, and it is not a guarantee."
        />

        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-xl border border-[#E4E7F2] md:grid-cols-2">
          <div className="bg-white p-8 md:p-9">
            <h3 className={`${heading} mb-4 text-xl text-[#16245A]`}>It is</h3>
            <ul className="space-y-3">
              {is.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-6 text-[#2A3550]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#16245A] p-8 md:p-9">
            <h3 className={`${heading} mb-4 text-xl text-white`}>It is not</h3>
            <ul className="space-y-3">
              {isNot.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-6 text-[#D7DEF5]">
                  <X className="mt-1 h-4 w-4 shrink-0 text-[#F2A07B]" aria-hidden="true" />
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

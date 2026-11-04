import { Check, X } from "lucide-react";
import { Eyebrow, heading } from "./shared";

const staysWith = [
  "Clinical triage — licensed professionals",
  "Urgent healthcare — local clinical and emergency channels",
  "Statutory duties — the public authority, separately",
];

const never = [
  "Triage or diagnosis by the platform",
  "Emergency response",
  "Replacing a public authority's statutory duty",
];

export default function ClinicalSeparation() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#9F86FF] via-[#5B3FD0] to-[#4A2FB8] px-6 py-16 text-white lg:px-16">
      {/* Dark diagonal wedge in the lower-left corner */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1/2 w-1/3 bg-[#1F0D80] [clip-path:polygon(0_45%,100%_100%,0_100%)]"
      />

      <div className="relative mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Safeguarding &amp; clinical separation</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl md:text-4xl`}>Clinical decisions stay clinical.</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 text-[#16245A]">
            <h3 className={`${heading} mb-3 text-xl`}>Stays with the right people</h3>
            <ul className="space-y-2">
              {staysWith.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-6 text-[#2A3550]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#1B2A6B] to-[#22357F] p-8">
            <h3 className={`${heading} mb-3 text-xl`}>Never part of this</h3>
            <ul className="space-y-2">
              {never.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                  <X className="mt-1 h-4 w-4 shrink-0 text-[#F79A8B]" aria-hidden="true" />
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

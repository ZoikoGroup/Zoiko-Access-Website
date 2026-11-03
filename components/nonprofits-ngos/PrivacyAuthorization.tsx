import { Check } from "lucide-react";
import { Eyebrow, IMG, heading } from "./shared";

const delegation = [
  "Delegations only through approved workflows",
  "Scoped to a specific purpose",
  "Right to withdraw where law permits",
];

export default function PrivacyAuthorization() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Privacy &amp; authorization</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Information is not a health record.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-[#E4E7F2] bg-white shadow-[0_12px_40px_rgba(22,36,90,0.12)]">
            <img
              src={`${IMG}/privacy-information.webp`}
              alt="Person using a laptop and a phone at a café table"
              className="h-72 w-full object-cover md:h-[390px]"
            />
            <div className="p-6">
              <h3 className={`${heading} mb-3 text-xl text-[#16245A]`}>
                Information vs health data
              </h3>
              <p className="text-sm leading-6 text-[#5B6B8C] md:text-base">
                NGO pathways use public information. Health records stay with
                licensed providers and never pass through public pages.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#E4E7F2] bg-white shadow-[0_12px_40px_rgba(22,36,90,0.12)]">
            <img
              src={`${IMG}/privacy-delegation.webp`}
              alt="Two colleagues passing papers across a desk"
              className="h-72 w-full object-cover md:h-[390px]"
            />
            <div className="p-6">
              <h3 className={`${heading} mb-4 text-xl text-[#16245A]`}>
                Explicit, revocable delegation
              </h3>
              <ul className="space-y-2.5">
                {delegation.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-[#344054] md:text-base">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEE9FF]">
                      <Check className="h-3 w-3 text-[#7B5CF0]" aria-hidden="true" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

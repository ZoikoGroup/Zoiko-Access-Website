import { Eyebrow, heading } from "./shared";

// Every answer comes straight from the design, so all cards show their answer.
const faqs = [
  {
    q: "Is there a list of connected vendors?",
    a: "No. This page describes categories only. It does not list connected or certified vendors.",
    dark: true,
  },
  {
    q: "Which systems may be evaluated?",
    a: "EHR, laboratory, imaging, pharmacy, payer and scheduling technology, each case by case.",
  },
  {
    q: "Does connecting replace the EHR?",
    a: "No. The source system stays the authoritative record. There is no consolidated master record.",
  },
  {
    q: "Is interoperability guaranteed?",
    a: "No. It depends on partner readiness, approved interfaces and local permissions.",
  },
  {
    q: "Who makes clinical decisions?",
    a: "Licensed clinicians at the responsible care organization, never a vendor or interface.",
    dark: true,
  },
  {
    q: "How does a vendor start?",
    a: "Read the technology partner guidance. A partner inquiry route opens only once it is staffed and approved.",
  },
];

export default function VendorsFaq() {
  return (
    <section className="bg-gradient-to-r from-[#B4A4FF] via-[#E0D9FF] to-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="mb-12 text-center">
          <Eyebrow center>Frequently asked questions</Eyebrow>
          <h2 className={`${heading} text-3xl text-[#16245A] md:text-[44px]`}>Direct answers, no overclaims.</h2>
        </div>

        <dl className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((f) => (
            <div
              key={f.q}
              className={`rounded-3xl p-7 ${f.dark ? "bg-[#16245A] text-white" : "border border-[#E4E7F2] bg-white text-[#16245A]"}`}
            >
              <span aria-hidden="true" className={`${heading} mb-3 block text-2xl font-bold text-[#8B6CF5]`}>
                Q.
              </span>
              <dt className={`${heading} mb-3 text-lg`}>{f.q}</dt>
              <dd className={`text-sm leading-6 ${f.dark ? "text-white/80" : "text-[#5B6B8C]"}`}>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

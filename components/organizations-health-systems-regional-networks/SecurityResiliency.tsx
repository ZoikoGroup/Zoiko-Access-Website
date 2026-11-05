import { Eyebrow, heading } from "./shared";

const items = [
  { title: "Least privilege", text: "Access limited to role and purpose." },
  { title: "Immutable evidence", text: "Audit records that can't be quietly changed." },
  { title: "Monitoring", text: "Exchanges watched for errors and misuse." },
  { title: "Failed interfaces", text: "Failures surfaced, never shown as success." },
];

export default function SecurityResiliency() {
  return (
    <section className="bg-gradient-to-r from-[#111A4A] to-[#2337A6] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1220px]">
        <Eyebrow light>Security, audit &amp; resiliency</Eyebrow>
        <h2 className={`${heading} mb-10 text-3xl md:text-4xl`}>Built to be checked, and to fail safely.</h2>

        {/* 1px gap over a lighter background draws the dividers between cells */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="bg-[#16205A] px-6 py-7">
              <h3 className={`${heading} mb-2 text-base`}>{it.title}</h3>
              <p className="text-sm leading-6 text-white/75">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

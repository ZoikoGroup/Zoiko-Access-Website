import { Accent, Eyebrow, IMG, container, heading, section } from "./shared";

const systems = [
  { name: "EHR", desc: "Electronic health records" },
  { name: "LIS", desc: "Laboratory information" },
  { name: "PACS", desc: "Imaging archive" },
  { name: "Pharmacy", desc: "Dispensing systems" },
  { name: "Payer", desc: "Coverage & claims" },
  { name: "Scheduling", desc: "Appointments & capacity" },
];

export default function PartnerTaxonomy() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={`${container} grid grid-cols-1 items-center gap-12 lg:grid-cols-2`}>
        <img
          src={`${IMG}/taxonomy-handshake.webp`}
          alt="Two people shaking hands"
          className="h-[280px] w-full rounded-3xl object-cover sm:h-[420px]"
        />
        <div>
          <Eyebrow purple>Partner taxonomy</Eyebrow>
          <h2 className={`${heading} text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
            The kinds of systems <Accent>partners bring</Accent>
          </h2>
          <p className="mt-3 text-base leading-7 text-[#5B6B8C]">
            Representative system types only. No deployed vendors are named.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {systems.map((s) => (
              <li key={s.name} className="rounded-xl border border-[#E4E7F2] px-4 py-4">
                <p className="text-base text-[#16245A]">{s.name}</p>
                <p className="mt-0.5 text-sm text-[#5B6B8C]">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

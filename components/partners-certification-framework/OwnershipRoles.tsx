import { IMG, SectionHeader, container, heading, section } from "./shared";

const roles = [
  {
    label: "Vendor",
    title: "Implements",
    items: ["Builds and documents the product", "Submits evidence", "Fixes findings"],
    note: "Cannot self-certify.",
    img: "owner-vendor",
    alt: "Vendor engineering team at laptops",
  },
  {
    label: "Assessor",
    title: "Evaluates",
    items: ["Reviews evidence", "Records findings", "Scopes any result"],
    note: "Does not build the product.",
    img: "owner-assessor",
    alt: "Assessors reviewing documents",
  },
  {
    label: "Clinical owner",
    title: "Decides care",
    items: ["Owns clinical safety", "Accepts local use", "Makes care decisions"],
    note: "Not transferred by any review.",
    img: "owner-clinical",
    alt: "Clinician in a white coat",
  },
  {
    label: "Legal owner",
    title: "Approves terms",
    items: ["Contracts and liability", "Data protection roles", "Publication approval"],
    note: "Independent of the technical review.",
    img: "owner-legal",
    alt: "Statue of Lady Justice holding scales",
  },
];

export default function OwnershipRoles() {
  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Vendor & assessor responsibilities"
          title="Four separate kinds of ownership."
          intro="Building, evaluating, clinical and legal decisions stay with different people."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <li
              key={r.label}
              className="overflow-hidden rounded-lg border border-[#E4E7F2] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
            >
              <img src={`${IMG}/${r.img}.webp`} alt={r.alt} className="aspect-[308/228] w-full object-cover" />
              <div className="px-5 pb-5 pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7B5CF0]">{r.label}</p>
                <h3 className={`${heading} mt-1 text-xl text-[#16245A]`}>{r.title}</h3>
                <ul className="mt-2 space-y-1">
                  {r.items.map((it) => (
                    <li key={it} className="text-sm leading-6 text-[#2A3550]">
                      <span className="text-[#7B5CF0]" aria-hidden="true">
                        —{" "}
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-dashed border-[#E4E7F2] pt-3 text-xs text-[#5B6B8C]">{r.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Image from "next/image";

const partnerTaxonomyData = [
  {
    image: "/tech/2.png",
    alt: "Server rack illuminated in data center for Technology Vendors",
    typeTag: "type: technology_vendor",
    title: "Technology vendors",
    description:
      "Providers of clinical or administrative systems that may hold source records.",
    tags: ["EHR", "LIS", "PACS", "Pharmacy", "Scheduling", "Payer"],
    note: "Categories to evaluate — not confirmed integrations.",
  },
  {
    image: "/tech/3.png",
    alt: "Dashboard analytics interface for Platforms",
    typeTag: "type: platform",
    title: "Platforms",
    description:
      "Infrastructure or component services a defined workflow may rely on.",
    tags: ["Identity", "Messaging", "Hosting", "Analytics (aggregate)"],
    note: "Subject to separate scope and security review.",
  },
  {
    image: "/tech/4.png",
    alt: "Team members high-fiving at work for Supporting Integrators",
    typeTag: "type: supporting_integrator",
    title: "Supporting integrators",
    description:
      "Teams that help design, connect and test specific integrations.",
    tags: ["Design", "Mapping", "Testing", "Support"],
    note: "Responsibilities defined per contract.",
  },
];

export default function TechnologyPartnerTaxonomy() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Partner type taxonomy
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Three kinds of technology partner.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Categories only — there is no published partner roster, and no
            vendor is named or endorsed.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {partnerTaxonomyData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-[220px] w-full overflow-hidden bg-slate-100 rounded-t-3xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <span className="font-mono text-[12px] font-semibold text-[#6366F1]">
                    {card.typeTag}
                  </span>

                  <h3 className="mt-2 text-[20px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                    {card.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-lg bg-[#F1F5F9] px-3 py-1.5 text-[12px] font-medium text-[#475569]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="px-6 pb-6 pt-2">
                <p className="text-[12px] font-medium text-[#B45309]">
                  {card.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

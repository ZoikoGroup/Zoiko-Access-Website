import Image from "next/image";

const safeguardsData = [
  {
    image: "/org/8.png",
    alt: "Person signing legal and authority documents",
    category: "PUBLIC HEALTH",
    title: "Mandated exchange",
    description: "Only where a jurisdiction's law requires or allows it.",
  },
  {
    image: "/org/9.png",
    alt: "Exterior view of modern healthcare facility",
    category: "HEALTH NETWORKS",
    title: "Independent organizations",
    description: "Coordinating while each keeps its own records.",
  },
  {
    image: "/org/11.png",
    alt: "People interacting with laptop screen for program-specific access",
    category: "PROGRAMS",
    title: "Program-specific access",
    description: "Limited to the program's defined purpose.",
  },
  {
    image: "/org/10.png",
    alt: "Laboratory test tubes with pipette representing research guardrails",
    category: "RESEARCH",
    title: "Research guardrails",
    pills: ["Ethics approval", "Lawful purpose"],
    description: "No blanket research consent is ever inferred.",
  },
];

export default function SpecialSettingsSafeguards() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F3EFFE] to-[#E9E3FC] py-20 font-sans sm:py-28">
      {/* Angular gradient sweep angled from top-left toward bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(22, 1, 114, 0.98) 0%, rgba(162, 132, 255, 0.9) 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 28%, 0 78%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#B7A6FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B7A6FF]">
              Public systems, networks &amp; research
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            Special settings, extra safeguards.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            No universal national record, interoperability certification or
            mandate is claimed.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {safeguardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              <div>
                {/* Edge-to-edge image container */}
                <div className="relative h-[180px] w-full overflow-hidden bg-slate-100 rounded-t-3xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Body Content */}
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED]">
                    {card.category}
                  </span>
                  <h3 className="mt-1.5 text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                    {card.title}
                  </h3>

                  {/* Optional Tags for Research Card */}
                  {card.pills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.pills.map((pill, pIdx) => (
                        <span
                          key={pIdx}
                          className="inline-flex items-center rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-medium text-[#475569]"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 text-[14px] leading-[1.6] text-[#475569]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

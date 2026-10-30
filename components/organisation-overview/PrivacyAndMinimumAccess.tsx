import Image from "next/image";

const rulesData = [
  {
    image: "/org/14.png",
    alt: "Laptop screen displaying aggregate operational charts and analytics",
    category: "AGGREGATE OPERATIONS",
    title: "Program-level only",
    description: "Non-identifying information for running a program.",
  },
  {
    image: "/org/15.png",
    alt: "Person interacting with laptop screen for member access",
    category: "MEMBER ACCESS",
    title: "Permitted by the person",
    description: "What members may see about their own care.",
  },
  {
    image: "/org/16.png",
    alt: "Healthcare provider speaking confidentially with a patient",
    category: "CLINICAL RECORDS",
    title: "Confidential",
    description: "Held by the care provider under clinical confidentiality.",
  },
  {
    image: "/org/8.png",
    alt: "Person signing legal and research authorization documents",
    category: "PUBLIC HEALTH & RESEARCH",
    title: "Lawful exchange only",
    description:
      "Requires specific legal authority, and ethics review where needed.",
  },
];

export default function PrivacyAndMinimumAccess() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Privacy &amp; minimum-necessary access
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Four kinds of information, four sets of rules.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            No patient details are collected on public pages, and no sponsor
            ever sees an individual clinical profile.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rulesData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Edge-to-edge image container with top rounded corners */}
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
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
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

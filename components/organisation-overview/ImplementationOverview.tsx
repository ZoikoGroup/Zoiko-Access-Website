import Image from "next/image";

const phasesData = [
  {
    step: "01",
    image: "/org/5.png",
    alt: "Colleagues high-fiving in an office setting representing Discovery",
    title: "Discovery",
    description: "Understand goals and context.",
  },
  {
    step: "02",
    image: "/org/25.png",
    alt: "Team reviewing documents and laptops for Scope and Eligibility",
    title: "Scope & eligibility",
    description: "Define who and what is in scope.",
  },
  {
    step: "03",
    image: "/org/20.png",
    alt: "Person managing devices for Governance and Security",
    title: "Governance & security",
    description: "Agreements, privacy and controls.",
  },
  {
    step: "04",
    image: "/org/21.png",
    alt: "Server rack hardware representing Partner Integration Feasibility",
    title: "Partner integration feasibility",
    description: "Can systems work together safely?",
  },
  {
    step: "05",
    image: "/org/22.png",
    alt: "Digital circuit matrix representing Validation",
    title: "Validation",
    description: "Test with controlled evidence.",
  },
  {
    step: "06",
    image: "/org/23.png",
    alt: "Handshake sealing an agreement for Authorization and Controlled Operation",
    title: "Authorization & controlled operation",
    description: "An explicit decision to operate.",
  },
];

export default function ImplementationOverview() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Program implementation overview
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            How an implementation works.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Informational phases. No fixed time, price, contracting availability
            or production readiness is claimed.
          </p>
        </div>

        {/* 6-Card Grid (3 Columns x 2 Rows) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phasesData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Full-width edge-to-edge image container */}
                <div className="relative h-[200px] w-full overflow-hidden bg-slate-100 rounded-t-3xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#1E1B4B] shadow-md backdrop-blur-sm">
                    {card.step}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
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

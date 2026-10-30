import Image from "next/image";

const itemsData = [
  {
    step: "01",
    image: "/org/11.png",
    alt: "People pointing at laptop screen representing discovering approved services",
    title: "Discover approved services",
    description:
      "Designed to help people find services that are permitted where they are.",
  },
  {
    step: "02",
    image: "/org/12.png",
    alt: "Healthcare professional holding a smartphone representing coordinating authorized handoffs",
    title: "Coordinate authorized handoffs",
    description:
      "Designed to support handoffs between responsible organizations.",
  },
  {
    step: "03",
    image: "/org/13.png",
    alt: "Dashboard analytics screen representing verifying ownership and next steps",
    title: "Verify ownership & next steps",
    description: "Designed to make the owner of every step visible.",
  },
];

export default function ThreeThingsDesigned() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F3EFFE] to-[#E9E3FC] py-20 font-sans sm:py-28">
      {/* Angular gradient sweep angled from top-left (0,0) down toward bottom-right */}
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
              What participation can mean
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            Three things Zoiko Access is designed to do.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            Design intent only — no live dashboards, counts, outcomes or
            guarantees.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {itemsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              <div>
                {/* Image Container with Absolute Number Badge */}
                <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-center"
                  />
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#1E1B4B] shadow-md backdrop-blur-sm">
                    {card.step}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
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

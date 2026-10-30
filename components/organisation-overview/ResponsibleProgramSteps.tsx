import Image from "next/image";

const stepsData = [
  {
    step: "01",
    image: "/org/17.png",
    alt: "People in a presentation setting defining purpose and population",
    title: "Define purpose & population",
    description: "Who the program serves, and why.",
  },
  {
    step: "02",
    image: "/org/8.png",
    alt: "Person signing papers representing jurisdiction and partner permissions",
    title: "Check jurisdiction & partner permissions",
    description: "What's allowed, and who can take part.",
  },
  {
    step: "03",
    image: "/org/18.png",
    alt: "Healthcare professional holding a smartphone for establishing responsible handoffs",
    title: "Establish responsible handoffs",
    description: "Named owners between organizations.",
  },
  {
    step: "04",
    image: "/org/19.png",
    alt: "Dashboard analytics screen for reviewing evidence and boundaries",
    title: "Review evidence & boundaries",
    description: "Confirm how the program may operate.",
  },
];

export default function ResponsibleProgramSteps() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Care &amp; community journey
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Four steps to a responsible program.
          </h2>

          {/* Illustrative Badge */}
          <div className="mt-3.5 inline-flex items-center rounded-full bg-[#FEF3C7] px-3.5 py-1 text-xs font-semibold text-[#B45309]">
            ILLUSTRATIVE — NOT AN OPERATIONAL SEQUENCE
          </div>
        </div>

        {/* 4-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stepsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Edge-to-edge image container with top rounded corners & badge */}
                <div className="relative h-[180px] w-full overflow-hidden bg-slate-100 rounded-t-3xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#1E1B4B] shadow-md backdrop-blur-sm">
                    {card.step}
                  </div>
                </div>

                {/* Card Body Content */}
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

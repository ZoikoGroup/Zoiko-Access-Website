import Image from "next/image";

const rolesData = [
  {
    image: "/for/2.png",
    alt: "Hand holding a smartphone capturing sunset photo representing prescription dispensing",
    title: "Prescription dispensing",
    description: "Owner: licensed pharmacy, under local rules.",
    badge: "May vary by location",
  },
  {
    image: "/for/3.png",
    alt: "Steaming coffee cup representing pharmacy service information",
    title: "Pharmacy service information",
    description: "Owner: the pharmacy that publishes it, with a named source.",
    badge: "May vary by location",
  },
  {
    image: "/for/4.png",
    alt: "Tall pine trees in a forest representing medication-related follow-up",
    title: "Medication-related follow-up",
    description: "Owner: the appropriate care party.",
    badge: "May vary by location",
  },
  {
    image: "/for/5.png",
    alt: "Footprint in the sand representing coordination with healthcare teams",
    title: "Coordination with healthcare teams",
    description: "Owner: the responsible organizations involved.",
    badge: "May vary by location",
  },
];

export default function FourPharmacyRoles() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-5xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#7C3AED]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
              Understand pharmacy services
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Four roles pharmacy services may play.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] max-w-xl sm:text-[16px]">
            General descriptions only. Each may vary by location, and none shows
            pricing or inventory.
          </p>
        </div>

        {/* 4-Column Grid Container */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rolesData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-6"
            >
              <div>
                {/* Image Section - Padded with rounded corners */}
                <div className="relative h-[160px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="mt-5 text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Badge Tag */}
              <div className="mt-6 pt-2">
                <span className="inline-block rounded-full bg-[#EEF2FF] px-3 py-1.5 text-[12px] font-medium text-[#4F46E5]">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

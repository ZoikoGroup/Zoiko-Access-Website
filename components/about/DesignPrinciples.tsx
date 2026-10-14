import Image from "next/image";

const principles = [
  {
    image: "/about/3.png",
    title: "Whole-journey thinking",
    description:
      "We design beyond finding an appointment, considering what happens before, between and after healthcare interactions.",
  },
  {
    image: "/about/4.png",
    title: "Coordination without taking over care",
    description:
      "We aim to support handoffs between independent organizations rather than replace their clinical records, clinical authority or service relationships.",
  },
  {
    image: "/about/5.png",
    title: "Accountability in every status",
    description:
      "We distinguish information sent, received, acknowledged, clinically reviewed and completed, making uncertainty visible instead of hiding it.",
  },
  {
    image: "/about/6.png",
    title: "Global design, local permission",
    description:
      "One underlying product approach, with specific healthcare features activated only when appropriate jurisdictional, professional, partner and privacy conditions are satisfied.",
  },
  {
    image: "/about/7.png",
    title: "Patient agency and appropriate delegation",
    description:
      "Identity, privacy choices and caregiver or guardian authority are designed as explicit controls rather than assumptions.",
  },
  {
    image: "/about/8.png",
    title: "Interoperability with provenance",
    description:
      'We favor standards-based connections and source-linked information, avoiding invented "universal integration" claims.',
  },
  {
    image: "/about/9.png",
    title: "Digital inclusion by design",
    description:
      "Accessibility, language, responsive design and assisted journeys are treated as core requirements rather than optional extras.",
  },
  {
    image: "/about/10.png",
    title: "Responsible technology",
    description:
      "We separate administrative coordination from diagnosis, prescribing, urgent triage or clinical AI, which require their own assessment and authorization.",
  },
];

export default function DesignPrinciples() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            What makes our approach different
          </p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Principles that guide the design.
          </h2>

          <p className="mt-4 text-[16px] text-[#4B5563] sm:text-[17px]">
            Capabilities, results, and integration are represented as live only
            after verification in the relevant market.
          </p>
        </div>

        {/* Grid of Principle Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(118,87,232,0.08)]"
            >
              <div>
                <div className="relative h-[160px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-5 text-[20px] font-bold tracking-[-0.02em] text-[#23327A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-[#4B5563]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

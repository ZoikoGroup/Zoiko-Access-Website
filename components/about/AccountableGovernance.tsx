import Image from "next/image";

const content = {
  badge: "Leadership & corporate identity",
  title: "Accountable governance. Accurate information.",
  paragraphs: [
    "Zoiko Access is a Zoiko Healthcare platform within Zoiko Group. Our corporate approach brings together product design, technology, privacy, security, clinical-safety review and collaboration with the institutions responsible for care.",
    "We believe public trust requires clear company information, accountable governance and accurate contact details. Verified leadership biographies, operating-entity disclosures and market-specific clinical responsibilities will be published through the appropriate Company and legal pages once approved.",
  ],
  image: {
    src: "/about/13.png",
    alt: "Healthcare professionals and leadership in a meeting",
  },
};

export default function AccountableGovernance() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              {content.badge}
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
              {content.title}
            </h2>

            {content.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px] ${
                  index === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Right Column - Image Card */}
          <div className="relative flex items-center justify-center sm:p-8">
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl sm:h-[420px] lg:h-[460px]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

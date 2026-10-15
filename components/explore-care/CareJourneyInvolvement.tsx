import Image from "next/image";

const content = {
  badge: "Pathways & responsibility",
  title: "A care journey can involve more than one organization.",
  paragraphs: [
    "Appointments, referrals, diagnostic services, medicines, and follow-up may involve different sources, systems, and decisions. Clear handoffs help explain who owns the next action.",
    "The responsible clinician or authorized organization determines clinical review, treatment, and interpretation. Navigation software is not the clinical source of truth.",
  ],
  image: {
    src: "/explore/3.png",
    alt: "Patients speaking with a healthcare professional at a reception desk",
  },
  bottomCards: [
    {
      title: "How referrals work",
      description:
        "A locally permitted referral routes information or a request to another care organization. Receipt does not establish acceptance of clinical responsibility. The receiving organization determines the relevant next step.",
    },
    {
      title: "Healthcare professionals",
      description:
        "Different professionals have different scopes and responsibilities. This overview explains roles without rankings, endorsements, specialty recommendations, or an active provider listing.",
    },
    {
      title: "Appointments & follow-up",
      description:
        "An appointment request needs authoritative confirmation. Follow-up statuses, when supported, must identify the responsible source and must not imply that delivery proves clinical review.",
    },
  ],
};

export default function CareJourneyInvolvement() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Top Grid: Content Left, Image Right */}
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

          {/* Right Column - Image without border, background, or shadow */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl sm:h-[400px] lg:h-[430px]">
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

        {/* Bottom 3-Column Section */}
        <div className="mt-20 border-t border-[#E5E7EB] pt-12 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {content.bottomCards.map((card, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#23327A] sm:text-[20px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#4B5563]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const cardsData = [
  {
    image: "/cli/11.png",
    alt: "Hospital exterior building representing action needed",
    title: "When an action needs attention",
    description:
      "A named owner, pending acceptance, unresolved dependencies, retries and errors all escalate to provider-controlled channels. Use your provider's established contacts.",
    bgColor: "bg-[#FFF7F0]",
    linkText: null,
    linkHref: null,
  },
  {
    image: "/cli/12.png",
    alt: "Clinician in protective gear working at computer monitors",
    title: "Permissions and patient information",
    description:
      "Access depends on role, lawful basis, authorized patient or guardian relationship where applicable, and participation by the source organization. The platform does not imply centralized ownership of all medical records.",
    bgColor: "bg-white",
    linkText: null,
    linkHref: null,
  },
  {
    image: "/cli/13.png",
    alt: "Operating theater representing local care requirements",
    title: "Built for local care requirements",
    description:
      "Capabilities vary by country, participating organization and service readiness. A public explanation does not confirm that an operational pathway is active in your location.",
    bgColor: "bg-white",
    linkText: "Preview care location",
    linkHref: "/locations-availability",
  },
];

export default function SafetyPrivacyLimits() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1EEFE] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
            <span className="h-0.5 w-6 bg-[#7C3AED]" aria-hidden="true" />
            SAFETY, PRIVACY AND LOCAL LIMITS
          </div>
          <h2 className="mt-3 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#031974] sm:text-[44px]">
            Where attention, permissions and place matter.
          </h2>
        </div>

        {/* 3-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-3xl border border-[#E2E8F0] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-7 ${card.bgColor}`}
            >
              <div>
                {/* Image Section - Padded with rounded corners */}
                <div className="relative h-[200px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-[20px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#475569] sm:text-[15px]">
                  {card.description}
                </p>
              </div>

              {/* Optional Link Footer */}
              {card.linkText && (
                <div className="mt-6 pt-2">
                  <Link
                    href={card.linkHref || "#"}
                    className="text-[13px] font-bold text-[#1E1B4B] underline decoration-[#1E1B4B]/30 underline-offset-4 transition-colors hover:text-[#2563EB] hover:decoration-[#2563EB]"
                  >
                    {card.linkText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

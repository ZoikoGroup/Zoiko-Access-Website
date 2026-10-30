import Link from "next/link";
import Image from "next/image";

const content = {
  badge: "NEXT STEP",
  title: "See what participation requires",
  description:
    "A secure application is available only where the market and a verified intake route are both active. Until then, start with the requirements.",
  buttonText: "See participation requirements",
  buttonHref: "#req",
  backgroundImage: {
    src: "/prof/16.png",
    alt: "Professional team discussing participation requirements",
  },
};

export function ParticipationRequirementsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-12">
        {/* Main Banner Container */}
        <div className="relative overflow-hidden rounded-[32px] p-8 sm:p-14 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          {/* Background Image */}
          <Image
            src={content.backgroundImage.src}
            alt={content.backgroundImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Deep Blue Tint Overlay */}
          <div className="absolute inset-0 bg-[#1D3594]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#172554]/90 via-[#1E40AF]/80 to-[#1E3A8A]/70" />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-3xl text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#93C5FD]">
              <span className="h-0.5 w-6 bg-[#3B82F6]" aria-hidden="true" />
              {content.badge}
            </div>

            {/* Title */}
            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[50px]">
              {content.title}
            </h2>

            {/* Description */}
            <p className="mt-4 text-[15px] leading-[1.7] text-[#BFDBFE] sm:text-[16px]">
              {content.description}
            </p>

            {/* Action Button */}
            <div className="mt-8">
              <Link
                href={content.buttonHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[14px] font-semibold text-[#1E3A8A] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#F8FAFC] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
              >
                {content.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

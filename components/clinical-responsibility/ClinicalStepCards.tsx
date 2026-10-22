import Image from "next/image";
import Link from "next/link";

const cardsData = [
  {
    image: "/cli/9.png",
    alt: "Healthcare worker taking patient blood pressure",
    badge: "REFERRAL ACCOUNTABILITY",
    title: "Referrals need explicit acceptance.",
    description:
      "A referral submitted or acknowledged is not automatically accepted. A provider determines whether and when a referral is clinically accepted, with the next action and responsible organization made clear where integrations support that status.",
    buttonText: "Explore referral coordination",
    buttonHref: "#",
  },
  {
    image: "/cli/10.png",
    alt: "Hands clasped together representing patient care and review",
    badge: "RESULTS AND FOLLOW-UP",
    title: "Results, review and follow-up are different steps.",
    description:
      "A laboratory or diagnostic source may publish a result; transmission does not prove it has been clinically reviewed. The appropriate healthcare organization retains responsibility for interpretation and follow-up.",
    buttonText: "Explore results and review handoffs",
    buttonHref: "#",
  },
];

export default function ClinicalStepCards() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-8"
            >
              <div>
                {/* Image Section - Padding and rounded corners matching card layout */}
                <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[260px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content Area */}
                <div className="mt-6 flex flex-col items-start">
                  {/* Category Badge */}
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
                    {card.badge}
                  </span>

                  {/* Card Title */}
                  <h3 className="mt-3 text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-[#1E1B4B] sm:text-[26px]">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#475569] sm:text-[15px]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-2">
                <Link
                  href={card.buttonHref}
                  className="inline-flex items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-6 py-3 text-[13px] font-semibold text-[#1E1B4B] shadow-sm transition-colors hover:bg-[#F8FAFC]"
                >
                  {card.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

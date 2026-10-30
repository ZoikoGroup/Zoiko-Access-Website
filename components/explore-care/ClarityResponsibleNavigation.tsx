import Link from "next/link";
import { ArrowRight } from "lucide-react";

const content = {
  badge: "Safety, privacy & access",
  title: "Clarity is part of responsible navigation.",
  cards: [
    {
      title: "Care remains with authorized professionals.",
      description:
        "This page does not diagnose, treat, clinically prioritize, or recommend a treatment or specialty for symptoms.",
      bannerText:
        "Zoiko Access is not an emergency response service. For urgent medical attention, use appropriate local emergency services.",
      button: {
        text: "Clinical responsibility",
        href: "/clinical-responsibility",
      },
    },
    {
      title: "Permitted access. Independent sources.",
      paragraphs: [
        "No symptom search, patient record, medical file, or identity document is collected by this overview. Patient and caregiver permissions require appropriate verification in any operational service.",
        "Information belongs to the authorized sources and roles responsible for the permitted task—not an unrestricted global medical record.",
      ],
      button: {
        text: "Privacy & inclusive access",
        href: "/privacy-permissions",
      },
    },
  ],
};

export default function ClarityResponsibleNavigation() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
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
        </div>

        {/* 2-Column Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {content.cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:p-10"
            >
              <div>
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-[#23327A] sm:text-[24px]">
                  {card.title}
                </h3>

                {card.description && (
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#4B5563]">
                    {card.description}
                  </p>
                )}

                {card.bannerText && (
                  <div className="mt-6 rounded-2xl border border-[#E5DEFF] bg-[#F3F0FF] p-4 text-[14px] leading-[1.6] text-[#23327A]">
                    {card.bannerText}
                  </div>
                )}

                {card.paragraphs &&
                  card.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className={`text-[15px] leading-[1.7] text-[#4B5563] ${
                        pIdx === 0 ? "mt-4" : "mt-4"
                      }`}
                    >
                      {para}
                    </p>
                  ))}
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={card.button.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#C9D3F2] bg-white px-5 py-3 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
                >
                  {card.button.text}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const topicsData = [
  {
    image: "/cor/6.png",
    alt: "Doctor smiling and conversing in a clinical setting representing clinicians",
    title: "For clinicians",
    description:
      "An overview of how Zoiko Access is designed to support clinical teams.",
    badge: "Information",
    linkText: "Explore for clinicians",
    href: "/for-clinicians",
  },
  {
    image: "/cor/7.png",
    alt: "Medical professional standing with arms crossed representing referral coordination",
    title: "Referral coordination",
    description:
      "How an authorized referral is sent, received and accepted — and by whom.",
    badge: "Information",
    linkText: "Explore referral coordination",
    href: "/referral-coordination",
  },
  {
    image: "/cor/8.png",
    alt: "Clinician consulting with a patient representing care transitions and follow-up",
    title: "Care transitions & follow-up",
    description:
      "How a patient moves between teams with a named owner at each step.",
    badge: "Information",
    linkText: "Explore care transitions & follow-up",
    href: "/care-transitions",
  },
];

export default function ClinicalCoordinationTopics() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 font-sans sm:py-28"
      style={{
        background: "linear-gradient(to right, #F5F2FF 0%, #ECE6FE 100%)",
      }}
    >
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Clinical coordination topics
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Three areas of coordination, explained.
          </h2>
          <p className="mt-3 text-[15px] max-w-2xl leading-[1.65] text-[#475569] sm:text-[16px]">
            Each topic explains how the work is designed to flow and who is
            responsible. None of them is a live service.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {topicsData.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Edge-to-Edge Image Container */}
                <div className="relative h-[220px] w-full overflow-hidden bg-slate-100 rounded-t-3xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Arrow Button positioned in the dividing boundary between image and content */}
                <div className="relative px-6">
                  <div className="absolute -top-5 right-8 flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED] text-white shadow-md transition-transform hover:scale-105">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6 pt-4">
                  {/* Information Badge */}
                  <span className="inline-block rounded-md bg-[#F1F5F9] px-2.5 py-1 text-[11px] font-semibold text-[#475569]">
                    {card.badge}
                  </span>

                  <h3 className="mt-3 text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#7C3AED] transition-colors hover:text-[#6C4AEC]"
                >
                  <span>{card.linkText}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

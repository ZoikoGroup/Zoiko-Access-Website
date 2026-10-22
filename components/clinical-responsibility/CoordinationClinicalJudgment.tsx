import Image from "next/image";
import { Heart, FileText, Check } from "lucide-react";

const cardsData = [
  {
    image: "/cli/2.png",
    alt: "Stethoscope representing care decisions",
    icon: Heart,
    title: "Care decisions",
    description:
      "Licensed professionals and authorized providers make diagnosis, treatment and care decisions.",
  },
  {
    image: "/cli/3.png",
    alt: "Brain anatomical model representing administrative coordination",
    icon: FileText,
    title: "Administrative coordination",
    description:
      "Permissioned routing and tracking of steps between participating organizations.",
  },
  {
    image: "/cli/4.png",
    alt: "Clinician wearing a mask representing evidence of progress",
    icon: Check,
    title: "Evidence of progress",
    description:
      "Source-attributed status, never an implied clinical acceptance.",
  },
];

export default function CoordinationClinicalJudgment() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-5xl">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
            <span className="h-0.5 w-6 bg-[#7C3AED]" aria-hidden="true" />
            WHAT RESPONSIBILITY MEANS
          </div>
          <h2 className="mt-3 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Coordination does not replace clinical judgment.
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7] max-w-3xl text-[#475569] sm:text-[17px]">
            Zoiko Access may support these steps only where locally authorized.
            It makes no claim of a universal medical record.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {cardsData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
              >
                <div>
                  {/* Card Image - Edge-to-edge flush with no padding or radius */}
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-8">
                    {/* Icon Badge */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F3FF] text-[#7C3AED]">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-4 text-[20px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

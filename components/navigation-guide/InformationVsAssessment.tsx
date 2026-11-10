import Image from "next/image";

interface BoundaryCard {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
}

const comparisonCards: BoundaryCard[] = [
  {
    tag: "What this guide does",
    title: "Information discovery",
    description:
      "Understand types of care, who is responsible for each step, and what a status actually means.",
    imageSrc: "/guide/2.png",
  },
  {
    tag: "What it never does",
    title: "Licensed medical assessment",
    description:
      "Assessing symptoms, deciding urgency, diagnosing and treating belong to licensed clinicians.",
    imageSrc: "/guide/3.png",
  },
];

export default function InformationVsAssessment() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — WHAT HEALTHCARE NAVIGATION MEANS
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Finding information is not{" "}
            <span className="text-[#7C3AED]">a medical assessment</span>
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
            This guide helps with the first. Only licensed professionals do the
            second.
          </p>
        </div>

        {/* 2-Card Side-by-Side Comparison Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {comparisonCards.map((card, index) => (
            <div
              key={index}
              className="group relative flex aspect-[16/9] min-h-[320px] w-full flex-col justify-end overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              {/* Edge-to-Edge Image Background */}
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1646]/95 via-[#0E1646]/60 to-transparent" />

              {/* Foreground Card Content */}
              <div className="relative p-6 sm:p-8">
                {/* Tag Badge */}
                <span className="inline-block rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-[#0E1646] backdrop-blur-md">
                  {card.tag}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-[24px] font-bold text-white sm:text-[28px]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[14px] leading-[1.6] text-slate-200 sm:text-[15px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

interface PrerequisiteCard {
  tag: string;
  tagBg: string;
  tagTextColor: string;
  title: string;
  points: string[];
  imageSrc: string;
}

const prerequisiteCardsData: PrerequisiteCard[] = [
  {
    tag: "Permissions & caregivers",
    tagBg: "bg-[#F1F0FE]",
    tagTextColor: "text-[#7C3AED]",
    title: "Helping another person",
    points: [
      "Needs consent or legal authority (proxy or delegation)",
      "Covers a defined role, not everything",
      "Shares only the information needed",
      "Can be limited or withdrawn",
    ],
    imageSrc: "/help/3.png",
  },
  {
    tag: "Local service availability",
    tagBg: "bg-[#EFF6FF]",
    tagTextColor: "text-[#2563EB]",
    title: "What is available here",
    points: [
      "Shown only from the approved market list",
      "Every claim carries its source and date",
      "Not published means not shown",
      "Choosing a location is voluntary",
    ],
    imageSrc: "/guide/18.png",
  },
];

export default function PermissionsAndAvailability() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-5xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — PERMISSIONS AND LOCAL AVAILABILITY
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Before you act for someone,{" "}
            <span className="text-[#7C3AED]">or rely on a service</span>
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
            Two things to check first.
          </p>
        </div>

        {/* 2-Card Horizontal Split Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {prerequisiteCardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:flex-row"
            >
              {/* Left Side: Zero-Padding Image Column */}
              <div className="relative aspect-[4/3] w-full shrink-0 bg-slate-100 sm:aspect-auto sm:w-[42%]">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Right Side: Content Column */}
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  {/* Category Tag */}
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-mono text-[11px] font-bold tracking-wider ${card.tagBg} ${card.tagTextColor}`}
                  >
                    {card.tag}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-[22px] font-bold tracking-tight text-[#0E1646]">
                    {card.title}
                  </h3>

                  {/* Key Points Bullet List */}
                  <ul className="mt-4 space-y-2.5">
                    {card.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-[#475569]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

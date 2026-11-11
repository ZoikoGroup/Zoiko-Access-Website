import Image from "next/image";

interface BoundaryCard {
  tag: string;
  tagBg: string;
  tagTextColor: string;
  title: string;
  titleColor?: string;
  description: string;
  points: string[];
  cardBg: string;
  borderColor: string;
  imageSrc: string;
}

const boundaryCardsData: BoundaryCard[] = [
  {
    tag: "Privacy & delegated access",
    tagBg: "bg-[#F1F0FE]",
    tagTextColor: "text-[#7C3AED]",
    title: "Your permissions stay yours",
    description:
      "Acting for someone else needs explicit, delegated permission. Nothing on this page reveals whether a record or account exists.",
    points: ["Permissions are role-based", "They can be limited or revoked"],
    cardBg: "bg-white",
    borderColor: "border-[#E2E8F0]",
    imageSrc: "/help/14.png",
  },
  {
    tag: "Safety & emergencies",
    tagBg: "bg-white/80",
    tagTextColor: "text-[#991B1B]",
    title: "Not an emergency service",
    titleColor: "text-[#991B1B]",
    description:
      "If someone is in danger or seriously unwell, contact local emergency services immediately. Zoiko Access does not triage.",
    points: ["No emergency desk", "No clinical assessment"],
    cardBg: "bg-[#FEE2E2]/40",
    borderColor: "border-[#FCA5A5]/40",
    imageSrc: "/help/15.png",
  },
  {
    tag: "o Contact support · not active yet",
    tagBg: "bg-[#FEF3C7]",
    tagTextColor: "text-[#92400E]",
    title: "Contact support",
    description:
      "Appears only once a staffed channel, routing and safe handling are verified. There is no chat or ticket form today.",
    points: ["Use the help topics above", "Check the FAQ below"],
    cardBg: "bg-[#F8FAFC]",
    borderColor: "border-[#E2E8F0]",
    imageSrc: "/help/16.png",
  },
];

export default function PrivacySafetySupport() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — PRIVACY, SAFETY AND SUPPORT
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Three things to <span className="text-[#7C3AED]">know first</span>
            
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Clear boundaries, so you always know the right next step.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {boundaryCardsData.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between overflow-hidden rounded-3xl border ${card.borderColor} ${card.cardBg} shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]`}
            >
              <div>
                {/* Edge-to-Edge Container Image */}
                <div className="relative aspect-[20/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8">
                  {/* Tag Badge */}
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-mono text-[11px] font-bold tracking-wider ${card.tagBg} ${card.tagTextColor}`}
                  >
                    {card.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className={`mt-4 text-[22px] font-bold tracking-tight ${
                      card.titleColor ? card.titleColor : "text-[#0E1646]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#475569]">
                    {card.description}
                  </p>

                  {/* Key Points Bullet List */}
                  <ul className="mt-6 space-y-2">
                    {card.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-center gap-2 text-[13px] font-medium text-[#475569]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
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

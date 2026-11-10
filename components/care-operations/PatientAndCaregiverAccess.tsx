import Image from "next/image";
import { Check, X } from "lucide-react";

interface AccessCard {
  title: string;
  subtitle: string;
  imageSrc: string;
  badgeText: string;
  points: { text: string; allowed: boolean }[];
}

const accessCardsData: AccessCard[] = [
  {
    title: "Patients",
    subtitle: "Can review informational steps like the ones on this page.",
    imageSrc: "/care/8.png",
    badgeText: "INFORMATIONAL ONLY",
    points: [
      { text: "Understand what each status means", allowed: true },
      { text: "Know who to contact: the care team", allowed: true },
      { text: "Cannot see institutional queues here", allowed: false },
    ],
  },
  {
    title: "Caregivers",
    subtitle: "Can act for someone only with verified representation.",
    imageSrc: "/care/5.png",
    badgeText: "VERIFICATION REQUIRED",
    points: [
      { text: "Representation checked by the organization", allowed: true },
      { text: "Access limited to what is authorized", allowed: true },
      { text: 'No access just by saying "I\'m family"', allowed: false },
    ],
  },
];

export default function PatientAndCaregiverAccess() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="mb-3">
              <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
                — PATIENTS &amp; CAREGIVERS
              </span>
            </div>

            <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
              What patients and caregivers can see.
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
              This is an institutional page. Patients may read it to understand
              the steps; caregivers need verified representation for more.
            </p>
          </div>
        </div>

        {/* 2-Card Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {accessCardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div>
                {/* Edge-to-Edge Image with No Padding */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content Container with Padding */}
                <div className="p-6 sm:p-8">
                  {/* Title & Subtitle */}
                  <h3 className="text-[24px] font-bold tracking-tight text-[#0E1646]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#475569]">
                    {card.subtitle}
                  </p>

                  {/* Bullet Points List */}
                  <div className="mt-6 space-y-3">
                    {card.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3">
                        {point.allowed ? (
                          <Check className="h-4 w-4 text-[#0E1646] stroke-[2.5]" />
                        ) : (
                          <X className="h-4 w-4 text-[#DC2626] stroke-[2.5]" />
                        )}
                        <span
                          className={`text-[14px] ${
                            point.allowed ? "text-[#475569]" : "text-[#64748B]"
                          }`}
                        >
                          {point.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Tag Badge Container */}
              <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                <span className="inline-block rounded-md bg-[#F1F0FE] px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-[#7C3AED]">
                  {card.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

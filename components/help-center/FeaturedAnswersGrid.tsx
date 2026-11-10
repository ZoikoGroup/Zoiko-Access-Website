import Image from "next/image";
import Link from "next/link";

interface FeaturedAnswerCard {
  category: string;
  title: string;
  audience: string;
  country: string;
  lastReviewed: string;
  owner: string;
  imageSrc: string;
  href: string;
}

const featuredAnswersData: FeaturedAnswerCard[] = [
  {
    category: "REFERRALS AND APPOINTMENTS",
    title: 'What "requested" and "confirmed" mean',
    audience: "Patient · Caregiver",
    country: "General guidance",
    lastReviewed: "[date]",
    owner: "[review owner]",
    imageSrc: "/help/11.png",
    href: "/answers/requested-and-confirmed-meaning",
  },
  {
    category: "ACCOUNTS AND PERMISSIONS",
    title: "Can I act for another person?",
    audience: "Caregiver / guardian",
    country: "General guidance",
    lastReviewed: "[date]",
    owner: "[review owner]",
    imageSrc: "/help/12.png",
    href: "/answers/acting-for-another-person",
  },
  {
    category: "RECORDS AND PRIVACY",
    title: "Who owns my health records?",
    audience: "Patient",
    country: "General guidance",
    lastReviewed: "[date]",
    owner: "[review owner]",
    imageSrc: "/help/13.png",
    href: "/answers/who-owns-health-records",
  },
];

export default function FeaturedAnswersGrid() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28">
      {/* Background Image Layer using /gradients/grad2.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/gradients/grad2.png"
          alt="Featured answers background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — FEATURED ANSWERS
            </span>
          </div>

          <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Plain answers,{" "}
            <span className="text-[#7C3AED]">then the detail</span>
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Every answer shows its audience, country scope, review owner and
            last-reviewed date.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredAnswersData.map((answer, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div>
                {/* Edge-to-Edge Container Image with No Padding */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={answer.imageSrc}
                    alt={answer.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8">
                  {/* Monospace Category Header */}
                  <span className="font-mono text-[11px] font-bold tracking-wider text-[#7C3AED] uppercase">
                    {answer.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-[20px] font-bold tracking-tight text-[#0E1646] min-h-[56px]">
                    {answer.title}
                  </h3>

                  {/* Metadata Table Grid */}
                  <div className="mt-6 border-t border-[#F1F5F9] pt-4 grid grid-cols-2 gap-y-4 gap-x-2 font-mono text-[11px]">
                    <div>
                      <span className="block text-[#94A3B8] uppercase tracking-wider">
                        AUDIENCE
                      </span>
                      <span className="mt-0.5 block font-semibold text-[#0E1646]">
                        {answer.audience}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[#94A3B8] uppercase tracking-wider">
                        COUNTRY
                      </span>
                      <span className="mt-0.5 block font-semibold text-[#0E1646]">
                        {answer.country}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[#94A3B8] uppercase tracking-wider">
                        LAST REVIEWED
                      </span>
                      <span className="mt-0.5 block font-medium text-[#64748B]">
                        {answer.lastReviewed}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[#94A3B8] uppercase tracking-wider">
                        OWNER
                      </span>
                      <span className="mt-0.5 block font-medium text-[#64748B]">
                        {answer.owner}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Read Full Answer Link */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <Link
                  href={answer.href}
                  className="group inline-flex items-center gap-2 text-[14px] font-bold text-[#7C3AED] transition-colors hover:text-[#5B21B6]"
                >
                  <span>Read full answer</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Governance / Registry Note */}
        <div className="mt-8 rounded-2xl bg-[#FEF3C7] px-4 py-3 border border-[#FDE68A] inline-block">
          <p className="font-mono text-[12px] font-medium text-[#92400E]">
            Sample answers for layout. Publish only reviewed, versioned articles
            from the help content registry.
          </p>
        </div>
      </div>
    </section>
  );
}

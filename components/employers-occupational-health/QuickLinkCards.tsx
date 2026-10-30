import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { headingFont } from "@/components/community-home-care/Eyebrow";

const IMG = "/employers-occupational-health";

const cards = [
  {
    image: `${IMG}/who-does-what-thumb.webp`,
    alt: "Occupational-health clinician",
    title: "Who does what",
    text: "Employer, provider, employee, platform.",
    href: "#roles",
  },
  {
    image: `${IMG}/aggregate-report-thumb.webp`,
    alt: "Aggregate report charts on a screen",
    title: "What employers may see",
    text: "Aggregate only — never individual records.",
    href: "#data-access",
  },
  {
    image: `${IMG}/program-planning-thumb.webp`,
    alt: "Team planning a program on paper and laptops",
    title: "How a program runs",
    text: "Six illustrative stages.",
    href: "#program-flow",
  },
];

export default function QuickLinkCards() {
  return (
    <div className="relative w-full bg-white font-sans">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[55px]">
        {/* Cards overlap the bottom of the hero */}
        <div className="relative z-20 -mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:-mt-[59px]">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex items-center gap-4 rounded-2xl bg-white p-3.5 shadow-[0px_20px_44px_0px_rgba(22,36,90,0.16)] outline -outline-offset-1 outline-[#E5E8F0] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#E6E9F2] to-[#D9E0F2]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3
                  className={`text-base font-semibold leading-6 text-[#16245A] ${headingFont}`}
                >
                  {card.title}
                </h3>
                <p className="mt-0.5 max-w-[224px] text-sm leading-5 text-[#5B6478]">
                  {card.text}
                </p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEEAFE] text-[#7C5CFC] transition-colors group-hover:bg-[#7C5CFC] group-hover:text-white">
                <ArrowRight className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

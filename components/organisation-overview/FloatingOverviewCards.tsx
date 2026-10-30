import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const floatingCards = [
  {
    image: "/org/2.png",
    alt: "Healthcare provider in medical coat representing clinical responsibility",
    title: "Who is responsible",
    description: "Providers keep clinical accountability.",
    href: "#who-is-responsible",
  },
  {
    image: "/org/3.png",
    alt: "Person working on laptop and smartphone representing minimum-necessary access",
    title: "Minimum-necessary access",
    description: "No sponsor access to clinical records.",
    href: "#minimum-necessary-access",
  },
  {
    image: "/org/4.png",
    alt: "Team reviewing paperwork and laptop for implementation overview",
    title: "Implementation overview",
    description: "Six phases, each with a gate.",
    href: "#implementation-overview",
  },
];

export default function FloatingOverviewCards() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-12 font-sans sm:py-16">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Floating Cards Grid (-mt overlap for seamlessly sitting on hero boundary) */}
        <div className="-mt-20 lg:-mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {floatingCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group flex items-center justify-between rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] sm:p-6"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Square Image Container */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-22 sm:w-22">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="88px"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#1E1B4B] sm:text-[18px]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.5] text-[#475569] sm:text-[14px]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Arrow Badge Icon */}
              <div className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-[#7C3AED] transition-colors duration-300 group-hover:bg-[#7C3AED] group-hover:text-white">
                <ArrowRight
                  className="h-5 w-5 stroke-[2.5]"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

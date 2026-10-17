import Link from "next/link";
import { ArrowRight, HeartPulse, MapPin, Route } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CARDS = [
  {
    title: "Explore types of care",
    text: "Learn about common care settings and questions worth asking.",
    link: "Explore care information",
    href: "/healthcare-services",
    icon: HeartPulse,
  },
  {
    title: "Understand the journey",
    text: "Discover four steps from information to an authorized next action.",
    link: "See how it works",
    href: "/how-it-works",
    icon: Route,
  },
  {
    title: "Check location context",
    text: "Understand why supported services depend on care location.",
    link: "Review availability",
    href: "/locations-availability",
    icon: MapPin,
  },
] as const;

export default function NextStep() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[60px] lg:py-20">
        <SectionHeading
          badge="Your next step"
          title="A clearer place to begin."
          description="Start with what you want to understand. No account, medical details, or location permission is needed to explore this homepage."
          className="max-w-[640px]"
        />

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <li
                key={card.title}
                className="flex flex-col items-center rounded-2xl border border-[#E1E6F0] bg-white px-8 pb-9 pt-7 text-center"
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#EEEAFE] text-[#6D4AD8]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-8 text-[22px] font-bold tracking-[-0.01em] text-[#243B73]">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-[310px] text-[14px] leading-[23px] text-[#526174]">
                  {card.text}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1F5FC9] transition-opacity hover:opacity-80"
                >
                  {card.link}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

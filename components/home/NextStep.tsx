import Link from "next/link";
import { ArrowRight, HeartPulse, MapPin, Route } from "lucide-react";

const CARDS = [
  {
    title: "Explore types of care",
    text: "Learn about common care settings and questions worth asking.",
    link: "Explore care information",
    icon: HeartPulse,
  },
  {
    title: "Understand the journey",
    text: "Discover four steps from information to an authorized next action.",
    link: "See how it works",
    icon: Route,
  },
  {
    title: "Check location context",
    text: "Understand why supported services depend on care location.",
    link: "Review availability",
    icon: MapPin,
  },
] as const;

export default function NextStep() {
  return (
    <section className="w-full bg-[#f8fafc] font-sans">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[60px] lg:py-[80px]">
        <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5B3FD1]">
          <span
            className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
            aria-hidden="true"
          />
          Your next step
        </p>

        <h2 className="mt-5 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
          A clearer place to begin.
        </h2>

        <p className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-[#4B5563]">
          Start with what you want to understand. No account, medical details,
          or location permission is needed to explore this homepage.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <li
                key={card.title}
                className="flex flex-col items-center rounded-[28px] border border-[#E1E6F0] bg-white px-8 pb-10 pt-12 text-center"
              >
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-[#EEEAFE] text-[#6D4AD8]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-8 text-[26px] font-semibold tracking-[-0.02em] text-[#23327A]">
                  {card.title}
                </h3>
                <p className="mt-6 max-w-[360px] text-[16px] leading-[1.7] text-[#4B5563]">
                  {card.text}
                </p>
                <Link
                  href="#"
                  className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#1F5FC9] transition-opacity hover:opacity-80"
                >
                  {card.link}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

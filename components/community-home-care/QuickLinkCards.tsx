import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { headingFont } from "./Eyebrow";

const IMG = "/organizations-community-home-care";

const cards = [
  {
    image: `${IMG}/care-scenarios-thumb.webp`,
    alt: "Caregiver talking with an older adult at home",
    title: "Care scenarios",
    text: "Three illustrative situations.",
    href: "#care-scenarios",
  },
  {
    image: `${IMG}/clinical-handoff.webp`,
    alt: "Clinician holding a phone",
    title: "Handoffs",
    text: "Sent is never the same as accepted.",
    href: "#handoffs",
  },
  {
    image: `${IMG}/consent-safeguarding.webp`,
    alt: "Person reviewing information on a laptop",
    title: "Consent & safeguarding",
    text: "Who may do what, and why.",
    href: "#consent-safeguarding",
  },
];

const pills = [
  { icon: "i", label: "Informational care navigation", tone: "bg-[#7C5CFC]" },
  {
    icon: "✓",
    label: "Local licensed providers keep clinical responsibility",
    tone: "bg-[#7C5CFC]",
  },
  { icon: "!", label: "Not an emergency response service", tone: "bg-[#B7791F]" },
];

export default function QuickLinkCards() {
  return (
    <section className="relative w-full border-b border-[#E5E8F0] bg-white pb-14 font-sans">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[67px]">
        {/* Cards overlap the bottom of the hero */}
        <div className="relative z-20 -mt-16 grid lg:-mt-24 grid-cols-1 gap-6 md:grid-cols-3">
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

        <ul className="mt-[62px] flex flex-wrap justify-center gap-3">
          {pills.map((pill) => (
            <li
              key={pill.label}
              className="flex items-center gap-2.5 rounded-full bg-[#F5F7FB] px-4 py-2.5 outline -outline-offset-1 outline-[#E5E8F0]"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold leading-none text-white ${pill.tone}`}
                aria-hidden="true"
              >
                {pill.icon}
              </span>
              <span className="text-sm font-medium leading-6 text-[#16245A]">
                {pill.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

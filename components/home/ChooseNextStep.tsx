import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CARDS = [
  {
    title: "For individuals & families",
    text: "Explore how the care-navigation journey is designed to work.",
    link: "Explore how it works",
    href: "/how-it-works",
    variant: "solid",
  },
  {
    title: "For institutions & partners",
    text: "Understand where your organization fits in the ecosystem.",
    link: "Explore your pathway",
    href: "#",
    variant: "outline",
  },
] as const;

const BUTTON_STYLES = {
  solid: "bg-[#4267D5] text-white border border-[#4267D5] hover:opacity-90",
  outline: "bg-white text-[#3B5FD0] border border-[#C9D3F2] hover:bg-[#F7F8FF]",
} as const;

export default function ChooseNextStep() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEEAFE]">
      <div
        className="pointer-events-none absolute -right-[10%] -top-[50%] h-[800px] w-[800px] bg-[radial-gradient(circle_at_center,#8F73FF99_0%,#EEEAFE00_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-[60%] -left-[8%] h-[700px] w-[700px] bg-[radial-gradient(circle_at_center,#8F73FF80_0%,#EEEAFE00_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[60px] lg:py-20">
        <SectionHeading
          badge="Choose your next step"
          title="Start with understanding."
        />

        <ul className="mt-9 grid grid-cols-1 gap-[26px] md:grid-cols-2">
          {CARDS.map((card) => (
            <li
              key={card.title}
              className="rounded-[14px] border border-[#E1E6F0] bg-white px-7 pb-7 pt-7"
            >
              <h3 className="text-[22px] font-bold tracking-[-0.01em] text-[#243B73] sm:text-[24px]">
                {card.title}
              </h3>
              <p className="mt-6 text-[14px] text-[#526174]">{card.text}</p>
              <Link
                href={card.href}
                className={`mt-4 inline-flex min-h-[50px] items-center gap-1.5 rounded-md px-[22px] text-[14px] font-semibold transition-colors ${BUTTON_STYLES[card.variant]}`}
              >
                {card.link}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

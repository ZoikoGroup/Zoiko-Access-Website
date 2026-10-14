import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    title: "For individuals & families",
    text: "Explore how the care-navigation journey is designed to work.",
    link: "Explore how it works",
    variant: "solid",
  },
  {
    title: "For institutions & partners",
    text: "Understand where your organization fits in the ecosystem.",
    link: "Explore your pathway",
    variant: "outline",
  },
] as const;

const BUTTON_STYLES = {
  solid: "bg-[#4267D5] text-white border border-[#4267D5] hover:opacity-90",
  outline: "bg-white text-[#3B5FD0] border border-[#C9D3F2] hover:bg-[#F7F8FF]",
} as const;

export default function ChooseNextStep() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEEAFE] font-sans">
      <div
        className="pointer-events-none absolute -right-[10%] -top-[50%] h-[800px] w-[800px] bg-[radial-gradient(circle_at_center,#8F73FF99_0%,#EEEAFE00_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-[60%] -left-[8%] h-[700px] w-[700px] bg-[radial-gradient(circle_at_center,#8F73FF80_0%,#EEEAFE00_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[60px] lg:py-[80px]">
        <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5B3FD1]">
          <span
            className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
            aria-hidden="true"
          />
          Choose your next step
        </p>

        <h2 className="mt-5 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
          Start with understanding.
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map((card) => (
            <li
              key={card.title}
              className="rounded-[24px] border border-[#E1E6F0] bg-white px-7 py-9 sm:px-12 sm:py-12"
            >
              <h3 className="text-[28px] font-semibold tracking-[-0.02em] text-[#23327A] sm:text-[32px]">
                {card.title}
              </h3>
              <p className="mt-9 text-[16px] text-[#4B5563]">{card.text}</p>
              <Link
                href="#"
                className={`mt-7 inline-flex items-center gap-2 rounded-lg px-8 py-4 text-[17px] font-semibold transition-colors ${BUTTON_STYLES[card.variant]}`}
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

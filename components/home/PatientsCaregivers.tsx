import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageSquareText,
  Search,
  Users,
} from "lucide-react";

const CARDS = [
  {
    title: "Understand your options",
    text: "Clear information before action",
    icon: Search,
    offset: "ml-0",
  },
  {
    title: "Include the right support",
    text: "Caregiver permissions matter",
    icon: Users,
    offset: "ml-0 sm:ml-[35px]",
  },
  {
    title: "Know what happens next",
    text: "Confirmed status, where supported",
    icon: MessageSquareText,
    offset: "ml-0 sm:ml-[10px]",
  },
] as const;

const POINTS = [
  "Clear explanations of requests, referrals, and confirmations.",
  "Caregiver involvement subject to permissions and representation.",
  "Accessible information without collecting medical details.",
] as const;

export default function PatientsCaregivers() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,519fr)_minmax(0,726fr)] lg:gap-x-[75px] lg:px-[60px] lg:py-20">
        <div className="rounded-[28px] bg-[#E8F2FD] px-5 py-8 sm:px-[35px] sm:py-[35px]">
          <ul className="flex flex-col gap-4">
            {CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <li
                  key={card.title}
                  className={`flex min-h-[92px] w-full max-w-[350px] items-center gap-4 rounded-xl border border-[#DCE6F3] bg-white px-5 ${card.offset}`}
                >
                  <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#EEEAFE] text-[#6D4AD8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#243B73]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-[#526174]">
                      {card.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F46C0]">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#7C5CE8]"
              aria-hidden="true"
            />
            Patients &amp; caregivers
          </p>

          <h2 className="mt-5 text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-[#243B73] sm:text-[40px] sm:leading-[48px]">
            People first.
            <br />
            Every step of the way.
          </h2>

          <p className="mt-5 max-w-[700px] text-[17px] leading-[30px] text-[#526174] sm:text-[18px]">
            Healthcare navigation should feel understandable. Explore what to
            expect, who is responsible, and how support can be involved.
          </p>

          <ul className="mt-6 flex flex-col gap-3.5">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-[14px] leading-[21px] text-[#526174]"
              >
                <Check
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-[#6D4AD8]"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/for-patients"
              className="inline-flex min-h-[49px] items-center gap-1.5 rounded-md bg-[#4267D5] px-[22px] text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              For patients
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/for-caregivers"
              className="inline-flex min-h-[49px] items-center gap-1.5 rounded-md border border-[#C9D3F2] bg-white px-[22px] text-[14px] font-semibold text-[#3B5FD0] transition-colors hover:bg-[#F7F8FF]"
            >
              For caregivers
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

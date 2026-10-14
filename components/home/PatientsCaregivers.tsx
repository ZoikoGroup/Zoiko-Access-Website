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
    offset: "ml-0 sm:ml-12 lg:ml-[60px]",
  },
  {
    title: "Know what happens next",
    text: "Confirmed status, where supported",
    icon: MessageSquareText,
    offset: "ml-0 sm:ml-5 lg:ml-[20px]",
  },
] as const;

const POINTS = [
  "Clear explanations of requests, referrals, and confirmations.",
  "Caregiver involvement subject to permissions and representation.",
  "Accessible information without collecting medical details.",
] as const;

export default function PatientsCaregivers() {
  return (
    <section className="w-full bg-[#f8fafc] font-sans">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[0.95fr_1fr] lg:gap-[70px] lg:px-[60px] lg:py-[80px]">
        <div className="rounded-[32px] bg-[#E8F2FD] p-5 sm:p-8 lg:px-[60px] lg:py-[60px]">
          <ul className="flex flex-col gap-4 sm:gap-5">
            {CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <li
                  key={card.title}
                  className={`flex w-full max-w-[420px] items-center gap-5 rounded-[20px] border border-[#DCE6F3] bg-white px-6 py-6 shadow-[0_8px_24px_rgba(35,50,122,0.06)] ${card.offset}`}
                >
                  <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#6D4AD8]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-[#23327A]">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] text-[#4B5563]">
                      {card.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5B3FD1]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
              aria-hidden="true"
            />
            Patients &amp; caregivers
          </p>

          <h2 className="mt-5 text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[52px]">
            People first.
            <br />
            Every step of the way.
          </h2>

          <p className="mt-6 max-w-[620px] text-[18px] leading-[1.7] text-[#4B5563]">
            Healthcare navigation should feel understandable. Explore what to
            expect, who is responsible, and how support can be involved.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 text-[16px] text-[#4B5563]"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[#6D4AD8]"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4267D5] px-7 py-4 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              For patients
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C9D3F2] bg-white px-7 py-4 text-[16px] font-semibold text-[#3B5FD0] transition-colors hover:bg-[#F7F8FF]"
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

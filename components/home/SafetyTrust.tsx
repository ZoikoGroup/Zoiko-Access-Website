import Link from "next/link";
import { ArrowRight, FileText, HeartPulse, MapPin, Users } from "lucide-react";

const CARDS = [
  {
    title: "Source transparency",
    text: "Claims and provider information require verified ownership, scope, and current evidence.",
    icon: FileText,
  },
  {
    title: "Regional controls",
    text: "Capabilities depend on local authorization. Location preference alone does not grant access.",
    icon: MapPin,
  },
  {
    title: "Clinical accountability",
    text: "Clinical decisions stay with appropriately authorized healthcare professionals.",
    icon: HeartPulse,
  },
  {
    title: "Privacy & permissions",
    text: "Patient, caregiver, employer, and payer access must remain distinct and governed.",
    icon: Users,
  },
] as const;

export default function SafetyTrust() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEEAFE] font-sans">
      <div
        className="pointer-events-none absolute -right-[10%] -top-[40%] h-[1000px] w-[1000px] bg-[radial-gradient(circle_at_center,#8F73FF99_0%,#EEEAFE_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-[40%] -right-[5%] h-[700px] w-[700px] bg-[radial-gradient(circle_at_center,#8F73FF66_0%,#EEEAFE00_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-[60px] lg:py-[80px]">
        <div>
          <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5B3FD1]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
              aria-hidden="true"
            />
            Safety &amp; trust
          </p>

          <h2 className="mt-5 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Confidence starts
            <br />
            with clarity.
          </h2>

          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-[#4B5563]">
            Understand the source of information, each care-team role, and the
            limits of a service before acting.
          </p>

          <Link
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#C9D3F2] bg-white px-6 py-4 text-[16px] font-semibold text-[#1F5FC9] transition-colors hover:bg-[#F7F8FF]"
          >
            How we approach safety
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <li
                key={card.title}
                className="rounded-[20px] bg-[#FAFAFE] px-7 py-7"
              >
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-xl bg-[#EEEAFE] text-[#6D4AD8]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em] text-[#23327A]">
                  {card.title}
                </h3>
                <p className="mt-5 text-[16px] leading-[1.7] text-[#4B5563]">
                  {card.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

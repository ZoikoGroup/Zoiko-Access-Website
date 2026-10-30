import Link from "next/link";
import { ArrowRight, FileText, HeartPulse, MapPin, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

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
    <section className="relative w-full overflow-hidden bg-[#EEEAFE]">
      <div
        className="pointer-events-none absolute -right-[10%] -top-[40%] h-[1000px] w-[1000px] bg-[radial-gradient(circle_at_center,#8F73FF99_0%,#EEEAFE_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-[40%] -right-[5%] h-[700px] w-[700px] bg-[radial-gradient(circle_at_center,#8F73FF66_0%,#EEEAFE00_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,540fr)_minmax(0,735fr)] lg:gap-x-[45px] lg:px-[60px] lg:py-20">
        <div>
          <SectionHeading
            badge="Safety & trust"
            title={
              <>
                Confidence starts
                <br />
                with clarity.
              </>
            }
            description="Understand the source of information, each care-team role, and the limits of a service before acting."
          />

          <Link
            href="/clinical-responsibility"
            className="mt-6 inline-flex min-h-[50px] items-center gap-1.5 rounded-md border border-[#C9D3F2] bg-white px-[22px] text-[14px] font-semibold text-[#1F5FC9] transition-colors hover:bg-[#F7F8FF]"
          >
            How we approach safety
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-x-[29px] gap-y-[15px] sm:grid-cols-2">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <li
                key={card.title}
                className="rounded-lg bg-[#F7F8FC] px-5 pb-7 pt-5"
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#EEEAFE] text-[#6D4AD8]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[18px] font-bold tracking-[-0.01em] text-[#243B73]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[23px] text-[#526174]">
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

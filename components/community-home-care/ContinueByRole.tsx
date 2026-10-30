import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Search,
  ShieldCheck,
  SquarePlus,
} from "lucide-react";
import Eyebrow, { headingFont } from "./Eyebrow";

const links = [
  { icon: Search, title: "Explore Care", cta: "Find support", href: "/explore-care" },
  { icon: ArrowRight, title: "How referrals work", cta: "Learn more", href: "/how-referrals-work" },
  { icon: ShieldCheck, title: "Patient privacy & permissions", cta: "Learn more", href: "/privacy-permissions" },
  { icon: SquarePlus, title: "Hospital care transitions", cta: "Learn more", href: "/care-transitions" },
  { icon: BarChart3, title: "Organizations overview", cta: "Explore", href: "/organisation-overview" },
];

export default function ContinueByRole() {
  return (
    <section className="w-full bg-[#F5F8FC] py-16 font-sans sm:py-20">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-24">
        <Eyebrow>Where to go next</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Continue by role.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {links.map(({ icon: Icon, title, cta, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col rounded-2xl border border-[#E5E8F0] bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(22,36,90,0.12)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE8FF] text-[#7C5CFC]">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3
                className={`mt-4 text-base font-semibold leading-6 text-[#16245A] ${headingFont}`}
              >
                {title}
              </h3>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-[#7C5CFC]">
                {cta}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

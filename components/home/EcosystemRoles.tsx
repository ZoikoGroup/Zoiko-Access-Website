import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Code2,
  FileText,
  FlaskConical,
  HeartPulse,
  Users,
} from "lucide-react";

const CARDS = [
  {
    title: "Clinicians",
    text: "Explore accountable clinical roles, coordination, and authorized care-team participation.",
    image: "/home/5.png",
    alt: "Clinicians reviewing patient documents around a table",
    icon: HeartPulse,
  },
  {
    title: "Hospitals & Clinics",
    text: "Understand institutional scheduling, referrals, and operational coordination where supported.",
    image: "/home/6.png",
    alt: "Hospital staff meeting around a conference table",
    icon: Building2,
  },
  {
    title: "Labs & Pharmacies",
    text: "Review diagnostic and pharmacy partner roles within approved services.",
    image: "/home/7.png",
    alt: "Laboratory scientist working at a lab bench",
    icon: FlaskConical,
  },
  {
    title: "Payers & Insurers",
    text: "Understand benefits and governance without implying individual clinical record access.",
    image: "/home/8.png",
    alt: "Colleagues working at desks in a high-rise office",
    icon: FileText,
  },
  {
    title: "Organizations",
    text: "Explore employer and public-sector participation with clear privacy boundaries.",
    image: "/home/9.png",
    alt: "Team meeting around a table with city views",
    icon: Users,
  },
  {
    title: "Partners & Developers",
    text: "Understand integration principles and approval for partner- specific capabilities.",
    image: "/home/10.png",
    alt: "Developers collaborating at multi-monitor workstations",
    icon: Code2,
  },
] as const;

export default function EcosystemRoles() {
  return (
    <section className="w-full bg-white font-sans">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[60px] lg:py-[80px]">
        <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5B3FD1]">
          <span
            className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
            aria-hidden="true"
          />
          For the healthcare ecosystem
        </p>

        <h2 className="mt-5 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
          Different roles.
          <br />A shared direction.
        </h2>

        <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-[#4B5563]">
          Discover clinical and institutional pathways. Each role has distinct
          responsibilities and permissions.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <li
                key={card.title}
                className="flex flex-col rounded-[24px] border border-[#E1E6F0] bg-white p-6 sm:p-8"
              >
                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[14px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#6D4AD8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-[#23327A]">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-6 text-[16px] leading-[1.7] text-[#4B5563]">
                  {card.text}
                </p>

                <Link
                  href="#"
                  className="mt-3 inline-flex w-fit items-center gap-2 rounded-md bg-[#4267D5] px-5 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Explore this pathway
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

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
import SectionHeading from "./SectionHeading";

const CARDS = [
  {
    title: "Clinicians",
    href: "/for-clinicians",
    text: "Explore accountable clinical roles, coordination, and authorized care-team participation.",
    image: "/home/role-clinicians.webp",
    alt: "Clinicians reviewing patient documents around a table",
    icon: HeartPulse,
  },
  {
    title: "Hospitals & Clinics",
    href: "/hospitals-clinics",
    text: "Understand institutional scheduling, referrals, and operational coordination where supported.",
    image: "/home/role-hospitals.webp",
    alt: "Hospital staff meeting around a conference table",
    icon: Building2,
  },
  {
    title: "Labs & Pharmacies",
    href: "/labs-pharmacies",
    text: "Review diagnostic and pharmacy partner roles within approved services.",
    image: "/home/role-labs.webp",
    alt: "Laboratory scientist working at a lab bench",
    icon: FlaskConical,
  },
  {
    title: "Payers & Insurers",
    href: "/payers-insurers",
    text: "Understand benefits and governance without implying individual clinical record access.",
    image: "/home/role-payers.webp",
    alt: "Colleagues working at desks in a high-rise office",
    icon: FileText,
  },
  {
    title: "Organizations",
    href: "/institutional-team",
    text: "Explore employer and public-sector participation with clear privacy boundaries.",
    image: "/home/role-organizations.webp",
    alt: "Team meeting around a table with city views",
    icon: Users,
  },
  {
    title: "Partners & Developers",
    href: "/become-partner",
    text: "Understand integration principles and approval for partner-specific capabilities.",
    image: "/home/role-partners.webp",
    alt: "Developers collaborating at multi-monitor workstations",
    icon: Code2,
  },
] as const;

export default function EcosystemRoles() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[60px] lg:py-20">
        <SectionHeading
          badge="For the healthcare ecosystem"
          title={
            <>
              Different roles.
              <br />A shared direction.
            </>
          }
          description="Discover clinical and institutional pathways. Each role has distinct responsibilities and permissions."
          className="max-w-[660px]"
        />

        <ul className="mt-10 grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <li
                key={card.title}
                className="flex flex-col rounded-xl border border-[#E1E6F0] bg-white p-7"
              >
                <div className="relative aspect-[366/160] w-full overflow-hidden rounded-md">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 366px, (min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#EEEAFE] text-[#6D4AD8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-[20px] font-bold tracking-[-0.01em] text-[#243B73]">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-5 text-[14px] leading-[23px] text-[#526174]">
                  {card.text}
                </p>

                <Link
                  href={card.href}
                  className="mt-5 inline-flex min-h-[44px] w-fit items-center gap-1.5 rounded bg-[#4267D5] px-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Explore this pathway
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

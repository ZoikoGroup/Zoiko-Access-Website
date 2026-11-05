import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, IMG, heading } from "./shared";

const audiences = [
  {
    title: "Employers",
    text: "Workplace and occupational-health programs.",
    href: "/employers-occupational-health",
    image: `${IMG}/audience-employers.webp`,
  },
  {
    title: "Care networks",
    text: "Health systems and regional networks.",
    href: "/organizations-health-systems-regional-networks",
    image: `${IMG}/audience-care-networks.webp`,
  },
  {
    title: "Community organizations",
    text: "Community care, NGOs and nonprofits.",
    href: "/nonprofits-ngos",
    image: `${IMG}/audience-community.webp`,
  },
  {
    title: "Public bodies",
    text: "Government and public health.",
    href: "/organizations-government-public-health",
    image: `${IMG}/audience-public-bodies.webp`,
  },
  {
    title: "Research institutions",
    text: "Ethics-first collaboration.",
    href: "/organizations-research-institutions",
    image: `${IMG}/audience-research.webp`,
  },
];

export default function FrameworkAudiences() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Who the framework serves</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          One framework, five kinds of organization.
        </h2>
        <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
          Choose your path. These links don&apos;t assess eligibility or create an account.
        </p>

        {/* Bento grid: the first card spans two rows on wide screens */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:grid-rows-[240px_240px]">
          {audiences.map((a, i) => (
            <Link
              key={a.title}
              href={a.href}
              className={`group relative flex min-h-60 items-end overflow-hidden rounded-[20px] bg-[#16245A] ${i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
            >
              <img
                src={a.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-transparent from-35% to-[#16245A]/90"
              />
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#7B5CF0]">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <div className="relative p-5 text-white">
                <h3 className={`${heading} text-lg`}>{a.title}</h3>
                <p className="text-sm leading-6 text-white/85">{a.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

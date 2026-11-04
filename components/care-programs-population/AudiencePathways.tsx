import Link from "next/link";
import { Briefcase, Heart, Landmark, Network } from "lucide-react";
import { Eyebrow, IMG, heading } from "./shared";

const pathways = [
  {
    title: "Employers",
    text: "Workplace programs.",
    href: "/employers-occupational-health",
    image: `${IMG}/pathway-employers.webp`,
    Icon: Briefcase,
  },
  {
    title: "NGOs & community programs",
    text: "Community navigation.",
    href: "/nonprofits-ngos",
    image: `${IMG}/pathway-ngos.webp`,
    Icon: Heart,
  },
  {
    title: "Health systems & networks",
    text: "Regional coordination.",
    href: "/health-systems-regional-networks",
    image: `${IMG}/pathway-health-systems.webp`,
    Icon: Network,
  },
  {
    title: "Public health",
    text: "Mandate-first programs.",
    href: "/government-public-health",
    image: `${IMG}/pathway-public-health.webp`,
    Icon: Landmark,
  },
];

export default function AudiencePathways() {
  return (
    <section className="bg-[#F6F5FF] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Audience pathways</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Which kind of organization are you?
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map(({ title, text, href, image, Icon }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#E4E7F2] bg-white transition-transform hover:-translate-y-0.5"
            >
              <img src={image} alt="" className="h-44 w-full object-cover" />
              <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10">
                <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-white bg-[#7B5CF0] text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className={`${heading} mb-1 text-xl leading-7 text-[#16245A]`}>{title}</h3>
                <p className="mb-6 text-base text-[#5B6B8C]">{text}</p>
                <span className="mt-auto text-sm font-bold text-[#2E2A8C]">
                  Explore{" "}
                  <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Eyebrow, { headingFont } from "./Eyebrow";

const IMG = "/organizations-community-home-care";

const groups = [
  {
    image: `${IMG}/caregiver-older-adult-home.webp`,
    alt: "Caregiver supporting an older adult",
    tag: "Individuals & caregivers",
    title: "The person, and those they trust",
    text: "Make choices and give permissions for their own support.",
    limit: "Family membership alone doesn't grant authority.",
  },
  {
    image: `${IMG}/community-coordinators.webp`,
    alt: "Community volunteer at a local event",
    tag: "Community coordinators",
    title: "Local support navigators",
    text: "Guide people to resources and facilitate consented, nonclinical steps.",
    limit: "Can't diagnose, prescribe or access full records.",
  },
  {
    image: `${IMG}/licensed-clinician.webp`,
    alt: "Licensed clinician with a stethoscope",
    tag: "Licensed providers",
    title: "Home-care & clinical teams",
    text: "Assess needs and make clinical decisions in their own systems.",
    limit: "Responsibility stays with the provider, not the platform.",
  },
];

export default function ThreeGroups() {
  return (
    <section className="w-full bg-white py-16 font-sans sm:py-20">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <Eyebrow>Who community &amp; home care involves</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Three groups, each with its own role.
        </h2>

        <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <article
              key={g.tag}
              className="group relative flex min-h-[460px] items-end overflow-hidden rounded-3xl bg-[#1C2A6B] shadow-[0_20px_44px_rgba(22,36,90,0.18)]"
            >
              <Image
                src={g.image}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#121A4D]/0 from-30% to-[#121A4D]/92"
                aria-hidden="true"
              />
              <div className="relative p-7">
                <span className="inline-block rounded-full border border-white/35 bg-white/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                  {g.tag}
                </span>
                <h3
                  className={`mt-2.5 text-xl font-semibold leading-7 text-white ${headingFont}`}
                >
                  {g.title}
                </h3>
                <p className="mt-1.5 text-base leading-6 text-white/88">
                  {g.text}
                </p>
                <p className="mt-1.5 text-sm leading-5 text-[#FCD9A8]">
                  {g.limit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

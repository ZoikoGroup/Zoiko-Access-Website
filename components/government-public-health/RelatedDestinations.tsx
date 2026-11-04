import Link from "next/link";
import { Eyebrow, heading } from "./shared";

const destinations = [
  { title: "Organizations overview", text: "All organization pathways.", href: "/organisation-overview" },
  { title: "Health systems & networks", text: "Regional coordination.", href: "/health-systems-regional-networks" },
  { title: "Care programs", text: "Population access programs.", href: "/care-programs-population" },
  { title: "Trust & legal", text: "Privacy, security and terms.", href: "/privacy-permissions" },
];

export default function RelatedDestinations() {
  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Related destinations</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Governed by people, at every step.
        </h2>
        <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
          Technology can coordinate. Accountability always stays with named people and institutions.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <Link
              key={d.title}
              href={d.href}
              className="group relative overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white p-6 shadow-[0_10px_20px_rgba(22,36,90,0.08)] transition-transform hover:-translate-y-0.5"
            >
              <span
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full border-[12px] border-[#EEEAFE]"
              />
              <h3 className={`${heading} relative mb-1 text-lg text-[#16245A]`}>{d.title}</h3>
              <p className="mb-4 text-sm text-[#5B6B8C]">{d.text}</p>
              <span className="inline-block rounded-full bg-[#EAF0FB] px-2.5 py-1 text-xs font-semibold text-[#2E2A8C]">
                Explore <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

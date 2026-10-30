import Image from "next/image";
import Link from "next/link";
import { headingFont } from "./Eyebrow";

const partners = [
  {
    title: "Individuals & caregivers",
    text: "Choices and verified permissions",
  },
  {
    title: "Community coordinators",
    text: "Nonclinical navigation and support",
  },
  {
    title: "Licensed home-care & clinical providers",
    text: "Clinical decisions and care delivery",
  },
];

export default function CommunityHomeCareHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-tr from-[#16245A] to-[#4B37B8] font-sans text-white lg:min-h-[556px]">
      {/* Background image */}
      <Image
        src="/organizations-community-home-care/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-bottom"
      />

      {/* Left-to-right overlay: #0E1646 96% → #1C286E 88% (42%) → #7657E8 35% */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0E1646]/96 via-[#1C286E]/88 via-42% to-[#7657E8]/35"
        aria-hidden="true"
      />

      {/* Radial glow, bottom right */}
      <div
        className="pointer-events-none absolute left-[69%] top-[196px] h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(183,166,255,0.45) 0%, rgba(183,166,255,0) 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 pb-32 pt-14 sm:px-10 lg:min-h-[556px] lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-16 lg:p-16 lg:pb-28">
        {/* Left column */}
        <div className="pt-1.5">
          <div className="flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-[#B7A6FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-widest text-[#B7A6FF]">
              Organizations / Workplace &amp; communities
            </span>
          </div>

          <h1
            className={`mt-3 text-[44px] font-bold leading-[1.05] sm:text-6xl sm:leading-[60.48px] ${headingFont}`}
          >
            Community &amp;
            <br />
            <span className="text-violet-500">Home Care</span>
          </h1>

          <p className="mt-5 max-w-[660px] text-base leading-7 text-white/90 sm:text-lg">
            Community and home care coordination means helping people navigate
            locally available support and communicate authorized handoffs among
            families, community services and licensed providers. Availability
            and clinical responsibilities depend on local organizations and
            rules.
          </p>

          <div className="flex flex-wrap gap-3 pt-7">
            <Link
              href="#coordination-lifecycle"
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-[#7C5CFC] px-5 py-3 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#6B4AEC]"
            >
              Explore coordination approach →
            </Link>
            <Link
              href="/organisation-overview"
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] px-5 py-3 text-base font-semibold leading-6 text-white outline -outline-offset-1 outline-white transition-colors hover:bg-white/10"
            >
              Explore organizations
            </Link>
          </div>
        </div>

        {/* Right column: glass card */}
        <aside className="flex flex-col gap-4 rounded-3xl bg-white/10 p-7 shadow-[0px_30px_60px_0px_rgba(5,10,40,0.35)] outline -outline-offset-1 outline-white/25 backdrop-blur-md">
          <p
            className={`text-sm font-semibold uppercase leading-6 tracking-widest text-[#B7A6FF] ${headingFont}`}
          >
            Who works together
          </p>

          <ul className="flex flex-col gap-3">
            {partners.map((p) => (
              <li key={p.title} className="flex items-start gap-3.5">
                <span
                  className="h-8 w-8 shrink-0 rounded-[10px] bg-gradient-to-br from-[#7C5CFC] to-[#4F6BE8]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-base leading-6 text-white">{p.title}</p>
                  <p className="text-xs leading-5 text-white/72">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="border-t border-white/20 pt-4 text-xs leading-5 text-white/75">
            Zoiko Access does not itself provide emergency care or guarantee
            local home-care services through this informational page.
          </p>
        </aside>
      </div>
    </section>
  );
}

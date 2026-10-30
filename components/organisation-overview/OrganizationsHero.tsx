"use client";

import Image from "next/image";
import Link from "next/link";

export default function OrganizationsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0e1646] py-20 font-sans text-white sm:py-28 lg:py-32">
      {/* Background Image Asset */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/org/1.png"
          alt="People working on laptops around a table in an office environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Linear Gradient Overlay: to right from #0E1646F5 via #1C286EE0 to #7657E859 */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0E1646]/96 via-[#1C286E]/88 to-[#7657E8]/35"
          aria-hidden="true"
        />

        {/* Bottom Right Radial Glow: from #B7A6FF73 to #B7A6FF00 */}
        <div
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(183, 166, 255, 0.45) 0%, rgba(183, 166, 255, 0) 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C5CFC]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B7A6FF]">
              Organizations
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[52px]">
            Healthcare access, <br />
            designed for{" "}
            <span className="bg-gradient-to-r from-[#7D5BFF] to-[#8FB0FF] bg-clip-text text-transparent">
              responsible organizations.
            </span>
          </h1>

          {/* Narrative Paragraph */}
          <p className="mt-6 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            Explore how employers, community organizations, public institutions,
            health networks and research teams can assess coordinated healthcare
            access—subject to local permissions, partner readiness and clear
            professional responsibility.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="#organization-pathways"
              className="inline-flex items-center gap-2 rounded-xl bg-[#7C5CFC] px-6 py-3.5 text-xs font-medium text-white shadow-lg shadow-purple-900/30 transition-all hover:bg-[#6C4AEC] sm:text-sm"
            >
              Explore organization pathways
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link
              href="#how-implementation-works"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-xs font-medium text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 sm:text-sm"
            >
              How an implementation works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

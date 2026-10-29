"use client";

import Image from "next/image";
import Link from "next/link";

export default function PharmacyServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0c207a] via-[#091b68] to-[#041040] py-16 font-sans text-white sm:py-20 lg:py-28">
      {/* Background Graphic Asset */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/for-laboratories/fl1.png"
          alt="Abstract decorative blue curves and pattern background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#08154e]/80 via-transparent to-[#041040]/70"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Narrative & CTAs */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
              <span className="text-xs font-medium tracking-wide text-[#c4b5fd] sm:text-sm">
                Pharmacy services
              </span>
            </div>

            {/* Main Heading with Vertical Gradient (White to #7657E8) */}
            <h1 className="mb-6 bg-gradient-to-b from-white via-white to-[#7657E8] bg-clip-text text-4xl font-bold leading-[1.1] tracking-tight text-transparent sm:text-5xl lg:text-[56px]">
              Pharmacy services, <br /> with clear responsibilities.
            </h1>

            {/* Narrative */}
            <p className="mb-8 max-w-xl text-xs leading-relaxed text-blue-100/85 sm:text-sm md:text-[15px]">
              Zoiko Access is designed to help people understand pharmacy
              services and how authorized organizations may coordinate permitted
              next steps. Dispensing, prescribing and medication decisions
              remain with appropriately authorized professionals and providers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="#how-coordination-works"
                className="inline-flex items-center justify-center rounded-xl bg-[#7c5cfc] px-6 py-3 text-xs font-medium text-white shadow-lg shadow-purple-900/30 transition-all hover:bg-[#6c4aec] sm:text-sm"
              >
                How coordination works
              </Link>
              <Link
                href="/prescription-routing"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-xs font-semibold text-[#1E3A8A] shadow-md shadow-black/10 transition-all hover:bg-slate-100 sm:text-sm"
              >
                Explore prescription routing
              </Link>
            </div>
          </div>

          {/* Right Column: Image Card with Top-Left Arch Cut */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-bl-3xl rounded-br-3xl rounded-tl-[100px] rounded-tr-3xl border border-white/15 bg-[#091122] shadow-2xl ring-1 ring-white/10 sm:aspect-square sm:rounded-tl-[140px] lg:aspect-[5/4] lg:rounded-tl-[160px]">
              <Image
                src="/for/1.png"
                alt="Clipboard with sticky notes and pen representing pharmacy coordination steps"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function DesignPrinciples() {
  const principles = [
    {
      image: "/privacy-permissions/app20.png",
      alt: "Healthcare professionals reviewing data",
      title: "Purpose limitation",
      description: "Information is used for the purpose it was shared for.",
    },
    {
      image: "/privacy-permissions/app21.png",
      alt: "Hospital exterior building",
      title: "Minimal sharing",
      description: "Only what a step needs is passed on.",
    },
    {
      image: "/privacy-permissions/app22.png",
      alt: "Medical treatment suite",
      title: "Provenance",
      description: "Where information came from stays visible.",
    },
    {
      image: "/privacy-permissions/app23.png",
      alt: "Medical professional in surgical face mask",
      title: "Audit and accountability",
      description:
        "Changes to permissions are recorded by the service that owns them.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>SECURITY AND TRANSPARENCY</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Design principles, not
          <br className="hidden sm:inline" /> certifications
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          These describe how the service is meant to behave. They are not badges,
          and none of them is a claim of certification.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative h-[150px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={principle.image}
                  alt={principle.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-[16px] sm:text-[17px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                  {principle.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-slate-500">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

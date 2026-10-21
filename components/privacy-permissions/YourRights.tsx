"use client";

import Image from "next/image";

export default function YourRights() {
  const rights = [
    {
      image: "/privacy-permissions/app14.png",
      alt: "Doctor discussing information with patient",
      title: "Access",
      description: "Asking to see information an organization holds about you.",
    },
    {
      image: "/privacy-permissions/app15.png",
      alt: "Senior woman preparing food in kitchen",
      title: "Correction",
      description: "Asking for inaccurate information to be put right.",
    },
    {
      image: "/privacy-permissions/app16.png",
      alt: "Mobile device showing analytics data",
      title: "Restriction",
      description: "Asking an organization to limit how it uses information.",
    },
    {
      image: "/privacy-permissions/app17.png",
      alt: "Medical stethoscope on white desk",
      title: "Objection",
      description: "Objecting to a particular use, where the rules allow it.",
    },
    {
      image: "/privacy-permissions/app18.png",
      alt: "Surgeons in sterile caps performing operation",
      title: "Portability",
      description:
        "Asking for information in a form you can move, where it applies.",
    },
    {
      image: "/privacy-permissions/app19.png",
      alt: "Hospital ward recovery beds",
      title: "Deletion",
      description:
        "Asking for information to be erased, subject to limits and legal duties.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>ACCESS AND CORRECTION RIGHTS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Your rights depend on where you are and
          <br className="hidden sm:inline" /> who is responsible
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[660px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Each right is listed only where it applies. The controller, the
          verification needed and any limits come from the organization
          responsible and the law in your location.
        </p>

        {/* 4-column grid (4 top, 2 bottom) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rights.map((right, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative h-[150px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={right.image}
                  alt={right.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-[16px] sm:text-[17px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                  {right.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-slate-500">
                  {right.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

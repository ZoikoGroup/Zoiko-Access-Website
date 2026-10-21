"use client";

import Image from "next/image";

export default function KindsOfAuthority() {
  const cards = [
    {
      image: "/privacy-permissions/app9.png",
      alt: "Hospital care center building",
      title: "The patient",
      description:
        "Decides for themselves where they are able to, and can choose who supports them.",
    },
    {
      image: "/privacy-permissions/app22.png",
      alt: "Modern medical treatment suite",
      title: "Parent or guardian",
      description:
        "Acts for a child or protected person within local law and the organization's rules.",
    },
    {
      image: "/privacy-permissions/app11.png",
      alt: "Medical professional in surgical face mask",
      title: "Legal representative",
      description:
        "Acts on legal authority, which must be evidenced and has defined limits.",
    },
    {
      image: "/privacy-permissions/app12.png",
      alt: "Doctor checking mobile health updates",
      title: "Caregiver assistant",
      description:
        "Helps with tasks where the patient has authorized it, and no further.",
    },
    {
      image: "/privacy-permissions/app13.png",
      alt: "Surgical team members looking downward",
      title: "Clinical professional",
      description:
        "Acts under professional duty within the care organization.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>CAREGIVERS AND GUARDIANS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Five different kinds of
          <br className="hidden sm:inline" /> authority
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Age, capacity, evidence, scope, expiry, revocation and safeguarding all
          matter. This is an explanation only, and nothing on this page changes
          anyone&apos;s access.
        </p>

        {/* 4 Cards on row 1, 1 on row 2 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative h-[150px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-[16px] sm:text-[17px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-slate-500">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

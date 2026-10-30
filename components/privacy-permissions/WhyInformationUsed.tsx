"use client";

import Image from "next/image";

export default function WhyInformationUsed() {
  const cards = [
    {
      image: "/privacy-permissions/app5.png",
      alt: "Phone displaying financial and service graphs",
      title: "Service administration",
      description: "Running the service you asked for.",
    },
    {
      image: "/privacy-permissions/app6.png",
      alt: "Medical stethoscope on white surface",
      title: "Coordination",
      description: "Helping organizations share what a next step needs.",
    },
    {
      image: "/privacy-permissions/app7.png",
      alt: "Healthcare professionals communicating during procedure",
      title: "Communications",
      description:
        "Messages about the service, such as necessary service notices.",
    },
    {
      image: "/privacy-permissions/app8.png",
      alt: "Hospital ward with patient recovery beds",
      title: "Legal obligations",
      description:
        "Duties an organization must meet under the rules that apply to it.",
    },
  ];

  return (
    <section id="privacy-notice" className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>PURPOSE AND AUTHORITY</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Why information may be
          <br className="hidden sm:inline" /> used
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          These are plain-language categories. Each is subject to the local
          controller and legal validation, and consent is not the only basis for
          any of them.
        </p>

        {/* 4 Cards Grid */}
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

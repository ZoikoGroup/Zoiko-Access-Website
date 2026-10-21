"use client";

import Image from "next/image";

export default function WhereToTakeQuestions() {
  const contacts = [
    {
      image: "/privacy-permissions/app1.png",
      alt: "Doctor with mobile phone",
      title: "The published privacy contact",
      description:
        "Shown only where an organization has published one for your location.",
    },
    {
      image: "/privacy-permissions/app2.png",
      alt: "Surgical team in operating suite",
      title: "Your local authority",
      description:
        "Links to the relevant public authority, only where they are verified.",
    },
    {
      image: "/privacy-permissions/app3.png",
      alt: "Healthcare worker advising patient",
      title: "Not an emergency service",
      description:
        "This page cannot help with urgent medical needs. Use the emergency services appropriate to your location.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>ASSISTANCE AND COMPLAINTS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-10 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Where to take a question or
          <br className="hidden sm:inline" /> a concern
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.02)] transition hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative h-[160px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={contact.image}
                  alt={contact.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-[16px] sm:text-[17px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                  {contact.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-slate-500">
                  {contact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

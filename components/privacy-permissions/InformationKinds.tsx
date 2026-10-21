"use client";

import Image from "next/image";

export default function InformationKinds() {
  const cards = [
    {
      image: "/privacy-permissions/app1.png",
      alt: "Doctor using mobile phone",
      title: "Public website data",
      scope: "General browsing on this public website.",
      accountable: "The organization that publishes the website.",
      processing: "Active on public pages",
    },
    {
      image: "/privacy-permissions/app2.png",
      alt: "Surgical team under operating lights",
      title: "Account information",
      scope: "Details used to identify and sign in an account holder.",
      accountable: "The organization providing the account service.",
      processing: "Potential, only where an account exists",
    },
    {
      image: "/privacy-permissions/app3.png",
      alt: "Healthcare professional consulting with patient",
      title: "Coordination metadata",
      scope:
        "Information about requests, referrals or appointments being coordinated.",
      accountable: "The participating organizations involved.",
      processing: "Potential, only for supported services",
    },
    {
      image: "/privacy-permissions/app4.png",
      alt: "Reviewing and completing medical paperwork",
      title: "Clinical source records",
      scope: "Original records held by a healthcare provider.",
      accountable: "The provider or institution that holds them.",
      processing: "Not held by this public page",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>WHAT &apos;INFORMATION&apos; MEANS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Four kinds of information,
          <br />
          four different owners
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[620px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Each kind has its own scope and accountable organization, and whether it
          applies depends on the service.
        </p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition hover:shadow-md"
            >
              {/* Left Image Thumbnail */}
              <div className="relative h-[160px] w-full sm:h-auto sm:w-[170px] lg:w-[190px] shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 190px, (min-width: 640px) 170px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-1 flex-col justify-between py-0.5">
                <h3 className="mb-3 text-[17px] sm:text-[18px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                  {card.title}
                </h3>

                <div className="flex flex-col gap-2.5">
                  <div>
                    <span className="block text-[9.5px] font-bold tracking-[0.1em] text-[#6366f1] uppercase">
                      EXAMPLE SCOPE
                    </span>
                    <p className="text-[12px] sm:text-[12.5px] leading-snug text-slate-600">
                      {card.scope}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-bold tracking-[0.1em] text-[#6366f1] uppercase">
                      ACCOUNTABLE
                    </span>
                    <p className="text-[12px] sm:text-[12.5px] leading-snug text-slate-600">
                      {card.accountable}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-bold tracking-[0.1em] text-[#6366f1] uppercase">
                      PROCESSING
                    </span>
                    <p className="text-[12px] sm:text-[12.5px] leading-snug text-slate-600">
                      {card.processing}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

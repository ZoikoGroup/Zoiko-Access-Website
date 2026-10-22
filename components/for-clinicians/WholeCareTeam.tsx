"use client";

import Image from "next/image";

export default function WholeCareTeam() {
  const roles = [
    {
      image: "/for-clinicians/fc1.jpg",
      alt: "Doctor using mobile device",
      title: "Doctors",
      description:
        "Understand how referrals and handoffs reach you and what is yours to decide.",
    },
    {
      image: "/for-clinicians/fc3.jpg",
      alt: "Specialist typing on laptop with stethoscope",
      title: "Specialists",
      description:
        'See what "accepted" means when you receive a referral.',
    },
    {
      image: "/for-clinicians/fc4.jpg",
      alt: "Nursing staff consulting in patient environment",
      title: "Nursing teams",
      description: "Find where follow-up tasks and role boundaries sit.",
    },
    {
      image: "/for-clinicians/fc5.jpg",
      alt: "Allied healthcare study and anatomical model",
      title: "Allied health",
      description:
        "Find pathways suited to your role, with no assumed privileges.",
    },
    {
      image: "/for-clinicians/fc6.jpg",
      alt: "Clinical operations director discussing records",
      title: "Clinical operations",
      description:
        "See how coordination, ownership and escalation are governed.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>WHO THIS PAGE SERVES</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Written for the whole care team
        </h2>

        {/* Subtitle */}
        <p className="mb-12 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Pick the role closest to yours. These are not credential checks, and
          none of them grants access to anything.
        </p>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 xl:gap-5">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative h-[360px] sm:h-[380px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md transition hover:shadow-xl"
            >
              {/* Full Background Image */}
              <Image
                src={role.image}
                alt={role.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />

              {/* Gradient Scrim Overlay at Bottom */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#09154a] via-[#09154a]/70 to-transparent"
                aria-hidden="true"
              />

              {/* Text Content Overlay */}
              <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white">
                <h3 className="mb-2 text-[18px] sm:text-[19px] font-bold tracking-tight text-white [font-family:var(--font-poppins)]">
                  {role.title}
                </h3>
                <p className="text-[12px] sm:text-[12.5px] leading-[1.5] text-slate-200/90">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

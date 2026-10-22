"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, FileText, Check, FolderArchive, MessageSquare } from "lucide-react";

export default function CoordinationAreas() {
  const topCards = [
    {
      image: "/for-clinicians/fc7.jpg",
      alt: "Doctor with mobile phone",
      badgeIcon: Users,
      title: "Referral coordination",
      description:
        "Understand how an authorized referral request is sent, received and acknowledged between organizations.",
      linkText: "Explore referral coordination",
      linkHref: "#referral-coordination",
    },
    {
      image: "/for-clinicians/fc8.jpg",
      alt: "Clinicians reviewing patient data at monitors",
      badgeIcon: FileText,
      title: "Care transitions",
      description:
        "See how a patient's move between services is handed off, and who owns each step.",
      linkText: "Explore care transitions",
      linkHref: "#care-transitions",
    },
    {
      image: "/for-clinicians/fc9.jpg",
      alt: "Surgical team in operating room",
      badgeIcon: Check,
      title: "Worklists and tasks",
      description:
        "Learn how follow-up tasks and their owners are made visible to the right team.",
      linkText: "Explore worklists and tasks",
      linkHref: "#worklists-tasks",
    },
  ];

  const bottomCards = [
    {
      image: "/for-clinicians/fc10.jpg",
      alt: "Surgical team looking downward under lamp",
      badgeIcon: FolderArchive,
      title: "Results and handoffs",
      description:
        "Understand why a published result is not the same as a clinical review.",
      linkText: "Explore results and handoffs",
      linkHref: "#results-handoffs",
    },
    {
      image: "/for-clinicians/fc11.jpg",
      alt: "Doctor discussing notes with patient in clinic",
      badgeIcon: MessageSquare,
      title: "Professional communications",
      description:
        "See the purpose, recipient and channel of permitted clinical messages, where available.",
      linkText: "Explore professional communications",
      linkHref: "#professional-communications",
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ff] py-16 lg:py-24 border-t border-[#eee9ff]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>CLINICAL COORDINATION PATHWAYS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Five areas of coordination,
          <br className="hidden sm:inline" /> explained
        </h2>

        {/* Subtitle */}
        <p className="mb-12 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Each pathway explains how the work is designed to flow and who is
          responsible. None of them is a live workspace.
        </p>

        {/* Row 1: 3 Cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {topCards.map((card, index) => {
            const BadgeIcon = card.badgeIcon;
            return (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition hover:shadow-md"
              >
                {/* Image with Floating Badge */}
                <div className="relative h-[160px] w-full bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a1854] text-white shadow-md">
                    <BadgeIcon className="h-4 w-4 stroke-[2]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-2.5 text-[17px] sm:text-[18px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                      {card.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-slate-500 mb-4">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href={card.linkHref}
                    className="text-[13px] font-semibold text-[#3b66f5] hover:underline"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 2 Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {bottomCards.map((card, index) => {
            const BadgeIcon = card.badgeIcon;
            return (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition hover:shadow-md"
              >
                {/* Image with Floating Badge */}
                <div className="relative h-[180px] w-full bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0a1854] text-white shadow-md">
                    <BadgeIcon className="h-4 w-4 stroke-[2]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-2.5 text-[17px] sm:text-[18px] font-bold tracking-tight text-slate-900 [font-family:var(--font-poppins)]">
                      {card.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-slate-500 mb-4">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href={card.linkHref}
                    className="text-[13px] font-semibold text-[#3b66f5] hover:underline"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

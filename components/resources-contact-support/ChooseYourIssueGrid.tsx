import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IssueCardItem {
  title: string;
  description: string;
  actionLabel: string;
  imageSrc: string;
  href: string;
}

const issuesList: IssueCardItem[] = [
  {
    title: "Account & sign-in",
    description: "Access, permissions and account questions.",
    actionLabel: "Go to Help Center →",
    imageSrc: "/resources-contact-support/rcs2.jpg",
    href: "/help-center",
  },
  {
    title: "Accessibility",
    description: "Request an accessible alternative or report a barrier.",
    actionLabel: "Go to Accessibility →",
    imageSrc: "/resources-contact-support/rcs3.jpg",
    href: "/resources-accessibility",
  },
  {
    title: "Healthcare navigation",
    description: "Understand care options and next steps.",
    actionLabel: "Go to Navigation guide →",
    imageSrc: "/resources-contact-support/rcs4.jpg",
    href: "/navigation-guide",
  },
  {
    title: "Technical & integration",
    description: "Clinics, hospitals and partners with system questions.",
    actionLabel: "Go to Help Center →",
    imageSrc: "/resources-contact-support/rcs5.jpg",
    href: "/help-center",
  },
  {
    title: "Privacy & data rights",
    description:
      "Privacy rights go through the privacy route, not general support.",
    actionLabel: "Go to Privacy page →",
    imageSrc: "/resources-contact-support/rcs6.jpg",
    href: "/resources-privacy-and-your-information",
  },
  {
    title: "Medical emergency",
    description: "Support cannot help. Contact local emergency services now.",
    actionLabel: "Go to Safety page →",
    imageSrc: "/resources-contact-support/rcs7.jpg",
    href: "/safety-escalation",
  },
];

export const ChooseYourIssueGrid: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              CHOOSE YOUR ISSUE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Go straight to the{" "}
            <span className="text-[#7c5cff]">right place</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Each issue goes to the team or page responsible for it.
          </p>
        </div>

        {/* 6 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {issuesList.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="group relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md hover:shadow-xl transition-all flex flex-col justify-end p-5 sm:p-6 text-white bg-[#0d1538]"
            >
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090f38]/95 via-[#0f1a5c]/75 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 mt-auto">
                <h3 className="font-bold text-base text-white mb-1 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-200/90 leading-relaxed mb-3">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {card.actionLabel}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

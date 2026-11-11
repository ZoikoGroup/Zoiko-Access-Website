import React from "react";
import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  {
    title: "Help center",
    slug: "/help",
    imageSrc: "/resources-safety-and-emergencies/rsae10.jpg",
    href: "/help-center",
  },
  {
    title: "Frequently asked questions",
    slug: "/faq",
    imageSrc: "/resources-safety-and-emergencies/rsae11.jpg",
    href: "/resources-frequently-asked-questions",
  },
  {
    title: "Healthcare navigation guide",
    slug: "/resources/healthcare-navigation",
    imageSrc: "/resources-safety-and-emergencies/rsae12.jpg",
    href: "/navigation-guide",
  },
  {
    title: "Accessibility",
    slug: "/accessibility",
    imageSrc: "/resources-safety-and-emergencies/rsae13.jpg",
    href: "/resources-accessibility",
  },
  {
    title: "Privacy and your information",
    slug: "/privacy",
    imageSrc: "/resources-safety-and-emergencies/rsae14.jpg",
    href: "/resources-privacy-and-your-information",
  },
  {
    title: "News and insights",
    slug: "/news",
    imageSrc: "/resources-safety-and-emergencies/rsae15.jpg",
    href: "/resources-news-and-insights",
  },
];

export const OrdinaryNavigationGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              WHEN THERE IS NO EMERGENCY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Ordinary healthcare navigation
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Linked pages are designed; links go live once each route is verified.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {navigationLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="bg-white rounded-2xl border border-slate-200/80 p-2.5 shadow-xs hover:shadow-md transition-all flex items-center gap-3.5 group"
            >
              <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="80px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] group-hover:text-[#6366f1] transition-colors truncate">
                  {item.title}
                </h3>
                <span className="block text-[10px] font-mono text-slate-400 mb-1.5 truncate">
                  {item.slug}
                </span>
                <span className="inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                  Page designed · verify route
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

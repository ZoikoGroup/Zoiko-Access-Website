import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ResourceCard {
  title: string;
  subtitle: string;
  imageSrc: string;
  href: string;
}

const resources: ResourceCard[] = [
  {
    title: "Technology Partners",
    subtitle: "How partnerships are assessed",
    imageSrc: "/partners-become-a-partner/bap8.jpg",
    href: "/partners-developer-documentation",
  },
  {
    title: "Health System Vendors",
    subtitle: "Vendor categories",
    imageSrc: "/partners-become-a-partner/bap9.jpg",
    href: "/partners-developer-documentation",
  },
  {
    title: "System Integrators",
    subtitle: "Roles and lifecycle",
    imageSrc: "/partners-become-a-partner/bap10.jpg",
    href: "/partners-developer-documentation",
  },
  {
    title: "Integration Security",
    subtitle: "Security principles",
    imageSrc: "/partners-become-a-partner/bap11.jpg",
    href: "/partners-developer-documentation",
  },
  {
    title: "Certification Framework",
    subtitle: "Proposed evaluation",
    imageSrc: "/partners-become-a-partner/bap12.jpg",
    href: "/partners-developer-documentation",
  },
];

export const ReadWhileIntakeClosed: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              ALTERNATIVE RESOURCES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Read these while intake is closed.
          </h2>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {resources.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-1 group-hover:text-[#6366f1] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

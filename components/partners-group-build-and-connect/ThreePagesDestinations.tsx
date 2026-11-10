import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DestinationCard {
  badge: string;
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const destinations: DestinationCard[] = [
  {
    badge: "01 · INFO",
    slug: "/partners-developers/apis",
    title: "API & interoperability overview",
    description: "Concepts and integration architecture. Not live endpoints.",
    imageSrc: "/partners-group-build-and-connect/pgbac2.jpg",
    href: "/partners-developer-documentation",
  },
  {
    badge: "02 · INFO",
    slug: "/partners-developers/sdks-events",
    title: "SDKs, webhooks & events",
    description: "Documents only audited and deployed public capabilities.",
    imageSrc: "/partners-group-build-and-connect/pgbac3.jpg",
    href: "/partners-developer-documentation#sdks-events",
  },
  {
    badge: "03 · INFO",
    slug: "/partners-developers/security",
    title: "Integration security",
    description: "Scopes, signing, privacy and operational limits.",
    imageSrc: "/partners-group-build-and-connect/pgbac4.jpg",
    href: "/partners-developer-documentation#security",
  },
];

export const ThreePagesDestinations: React.FC = () => {
  return (
    <section className="w-full bg-[#fafaff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="block text-[#6366f1] font-semibold text-xs tracking-wider uppercase mb-2">
            02 / DESTINATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Three pages in Build &amp; Connect
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            In their original order. Each is informational and published only once approved.
          </p>
        </div>

        {/* 3 Dark Overlay Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/4] sm:aspect-[5/5] lg:aspect-[1/1.05] shadow-md hover:shadow-xl transition-all flex flex-col justify-between p-6 text-white bg-[#0a0f2c]"
            >
              {/* Background Image */}
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Overlay Gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#06091e] via-[#090e2e]/75 to-[#090e2e]/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Badge */}
              <div className="relative z-10">
                <span className="inline-block bg-white text-[#0f172a] text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-sm">
                  {card.badge}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 mt-auto">
                <span className="block text-[11px] font-mono text-indigo-300/90 mb-1.5">
                  {card.slug}
                </span>
                <h3 className="font-bold text-lg text-white mb-1.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-4 hover:text-indigo-200 transition-colors"
                >
                  <span>Explore</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

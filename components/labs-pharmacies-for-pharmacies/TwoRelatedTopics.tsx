import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TopicCard {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  href: string;
}

const topics: TopicCard[] = [
  {
    slug: "/labs-pharmacies/prescription-routing",
    title: "Prescription routing",
    description:
      "How a routing request differs from pharmacy receipt, validation and dispensing.",
    bullets: [
      "Proposed information, not a released transaction",
      "Each state attributed separately",
    ],
    imageSrc: "/labs-pharmacies-for-pharmacies/lpfp7.jpg",
    href: "/labs-pharmacies#prescription-routing",
  },
  {
    slug: "/labs-pharmacies/fulfillment",
    title: "Fulfillment & availability",
    description:
      "Source-owned stock and availability status, with no implied supply guarantee.",
    bullets: [
      "Status freshness and provider source",
      "Geographic scope and exclusions",
    ],
    imageSrc: "/labs-pharmacies-for-pharmacies/lpfp8.jpg",
    href: "/labs-pharmacies#fulfillment",
  },
];

export const TwoRelatedTopics: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9f8fe] via-white to-white py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              GO DEEPER
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            Two related topics.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Each topic has its own page. Both are informational, not transactions.
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-stretch gap-5"
            >
              {/* Card Image */}
              <div className="w-full sm:w-[170px] lg:w-[190px] shrink-0 relative aspect-[4/3] sm:aspect-auto rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={topic.imageSrc}
                  alt={topic.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 190px"
                />
              </div>

              {/* Card Content */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <span className="block text-[11px] font-mono text-[#6366f1] mb-1">
                    {topic.slug}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-[#0f172a] mb-2 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    {topic.description}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {topic.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-xs text-slate-600 flex items-start gap-2"
                      >
                        <span className="text-[#6366f1] font-bold">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={topic.href}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#4338ca] hover:text-[#3730a3] transition-colors"
                >
                  <span>Read the topic</span>
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

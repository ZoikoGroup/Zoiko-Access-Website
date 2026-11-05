import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TopicCard {
  id: string;
  image: string;
  badge: string;
  isPublished: boolean;
  title: string;
  description: string;
  href?: string;
}

const topics: TopicCard[] = [
  {
    id: "api-interoperability",
    image: "/partners-developer-documentation/pdd4.jpg",
    badge: "guide • published",
    isPublished: true,
    title: "API & Interoperability Overview",
    description: "Principles behind connecting healthcare systems.",
    href: "/ehr-interoperability",
  },
  {
    id: "sdks-webhooks-events",
    image: "/partners-developer-documentation/pdd5.jpg",
    badge: "guide • published",
    isPublished: true,
    title: "SDKs, Webhooks & Events",
    description: "Event model, lifecycle and delivery concepts.",
    href: "/ehr-interoperability",
  },
  {
    id: "integration-security",
    image: "/partners-developer-documentation/pdd6.jpg",
    badge: "guide • published",
    isPublished: true,
    title: "Integration Security",
    description: "Identity, scopes, signing and audit evidence.",
    href: "/privacy-permissions",
  },
  {
    id: "certification-framework",
    image: "/partners-developer-documentation/pdd7.jpg",
    badge: "guide • published",
    isPublished: true,
    title: "Certification Framework",
    description: "Proposed evaluation stages and evidence.",
    href: "/how-it-works",
  },
  {
    id: "system-integrators",
    image: "/partners-developer-documentation/pdd8.jpg",
    badge: "guide • published",
    isPublished: true,
    title: "System Integrators",
    description: "Roles, lifecycle and responsibilities.",
    href: "/clinical-partnerships-contact",
  },
  {
    id: "health-system-vendors",
    image: "/partners-developer-documentation/pdd9.jpg",
    badge: "guide • published",
    isPublished: true,
    title: "Health System Vendors",
    description: "Vendor categories and their limits.",
    href: "/hospitals-clinics",
  },
  {
    id: "api-reference",
    image: "/partners-developer-documentation/pdd10.jpg",
    badge: "reference • not released",
    isPublished: false,
    title: "API Reference",
    description: "Endpoint and field documentation, once approved.",
  },
  {
    id: "sandbox-guide",
    image: "/partners-developer-documentation/pdd11.jpg",
    badge: "environment • not released",
    isPublished: false,
    title: "Sandbox Guide",
    description: "Testing with synthetic data, once available.",
  },
];

export const ChooseIntegrationTopic: React.FC = () => {
  return (
    <section id="integration-topics" className="w-full bg-[#fafbfc] py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              CHOOSE YOUR INTEGRATION TOPIC
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            Start with a topic.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Published guides are linked. Others show their status. Use the search above to narrow the list.
          </p>
        </div>

        {/* Counter */}
        <div className="text-xs text-slate-500 font-medium mb-6">
          8 topics
        </div>

        {/* 8 Topics Grid: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 pb-3">
                  <div
                    className={`inline-block text-[11px] font-semibold mb-2 ${
                      topic.isPublished ? "text-[#6366f1]" : "text-slate-400"
                    }`}
                  >
                    {topic.badge}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>

              {/* Bottom Link / Status */}
              <div className="px-5 pb-5 pt-2">
                {topic.isPublished && topic.href ? (
                  <Link
                    href={topic.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6366f1] hover:text-[#4f46e5] transition-colors"
                  >
                    <span>Open guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-xs text-slate-400 italic">
                    Not yet published
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

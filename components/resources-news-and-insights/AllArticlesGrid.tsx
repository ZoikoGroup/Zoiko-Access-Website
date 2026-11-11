"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ArticleCard {
  id: number;
  category: string;
  audience: string;
  title: string;
  description: string;
  imageSrc: string;
}

const sampleArticles: ArticleCard[] = [
  {
    id: 1,
    category: "EXPLAINER",
    audience: "Patients & caregivers",
    title: 'What "requested" and "confirmed" really mean',
    description:
      "Why a sent request is not an appointment, and who confirms the next step.",
    imageSrc: "/resources-news-and-insights/rnai7.jpg",
  },
  {
    id: 2,
    category: "PLATFORM UPDATE",
    audience: "General",
    title: "How we label availability by market",
    description:
      "Reading P0 to PX: what each availability state means for you.",
    imageSrc: "/resources-news-and-insights/rnai8.jpg",
  },
  {
    id: 3,
    category: "ACCESSIBILITY",
    audience: "Patients & caregivers",
    title: "Designing for keyboard, zoom and screen readers",
    description:
      "Our design targets, and how we separate goals from tested results.",
    imageSrc: "/resources-news-and-insights/rnai9.jpg",
  },
  {
    id: 4,
    category: "CLINICIANS",
    audience: "Clinicians",
    title: "Referral states, without the guesswork",
    description:
      "Sent, received, reviewed, accepted: five words, five meanings.",
    imageSrc: "/resources-news-and-insights/rnai10.jpg",
  },
  {
    id: 5,
    category: "PARTNERS",
    audience: "Partners",
    title: "Interest is not authorization",
    description:
      "How partner relationships are described before anything goes live.",
    imageSrc: "/resources-news-and-insights/rnai11.jpg",
  },
  {
    id: 6,
    category: "PRIVACY",
    audience: "Organizations",
    title: "Who owns your health records?",
    description:
      "Source systems keep their records. Here is what that means.",
    imageSrc: "/resources-news-and-insights/rnai12.jpg",
  },
];

export const AllArticlesGrid: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All types");
  const [selectedAudience, setSelectedAudience] = useState("All audiences");

  const filteredArticles = sampleArticles.filter((article) => {
    const matchesSearch =
      !search.trim() ||
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase());
    const matchesType =
      selectedType === "All types" || article.category === selectedType;
    const matchesAudience =
      selectedAudience === "All audiences" ||
      article.audience === selectedAudience;
    return matchesSearch && matchesType && matchesAudience;
  });

  return (
    <section className="w-full bg-[#fafaff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              LATEST
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            All articles
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Sample cards showing the layout. Only reviewed, approved records will be published.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-2.5 shadow-sm flex flex-col md:flex-row items-stretch md:items-center gap-2.5 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search news and insights"
            aria-label="Search news and insights"
            className="flex-1 px-4 py-2 text-xs text-slate-700 placeholder:text-slate-400 bg-slate-50/70 border border-slate-200/70 rounded-xl outline-none focus:ring-2 focus:ring-purple-200"
          />

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            aria-label="Filter by article type"
            className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200/80 rounded-xl outline-none cursor-pointer"
          >
            <option value="All types">All types</option>
            <option value="EXPLAINER">EXPLAINER</option>
            <option value="PLATFORM UPDATE">PLATFORM UPDATE</option>
            <option value="ACCESSIBILITY">ACCESSIBILITY</option>
            <option value="CLINICIANS">CLINICIANS</option>
            <option value="PARTNERS">PARTNERS</option>
            <option value="PRIVACY">PRIVACY</option>
          </select>

          <select
            value={selectedAudience}
            onChange={(e) => setSelectedAudience(e.target.value)}
            aria-label="Filter by audience"
            className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200/80 rounded-xl outline-none cursor-pointer"
          >
            <option value="All audiences">All audiences</option>
            <option value="Patients & caregivers">Patients &amp; caregivers</option>
            <option value="Clinicians">Clinicians</option>
            <option value="Organizations">Organizations</option>
            <option value="Partners">Partners</option>
            <option value="General">General</option>
          </select>

          <button
            type="button"
            onClick={() => {}}
            className="bg-[#0d1642] hover:bg-[#1a2561] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Count */}
        <span className="block text-xs text-slate-500 mb-6">
          Showing {filteredArticles.length} sample articles
        </span>

        {/* 6 Sample Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="block text-[10px] font-bold tracking-wider uppercase text-[#6366f1] mb-1.5">
                    {card.category}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-100 pt-3 grid grid-cols-3 gap-2 text-[10px] mb-3">
                    <div>
                      <span className="block text-slate-400 font-semibold uppercase">
                        PUBLISHED
                      </span>
                      <span className="text-slate-600 font-medium">[date]</span>
                    </div>
                    <div>
                      <span className="block text-slate-400 font-semibold uppercase">
                        SCOPE
                      </span>
                      <span className="text-slate-600 font-medium truncate block">
                        General · all regions
                      </span>
                    </div>
                    <div>
                      <span className="block text-slate-400 font-semibold uppercase">
                        OWNER
                      </span>
                      <span className="text-slate-600 font-medium">[editor]</span>
                    </div>
                  </div>

                  <span className="inline-block bg-amber-50 text-amber-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Draft · not published
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

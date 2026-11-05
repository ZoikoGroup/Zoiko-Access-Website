"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, BookOpen, ShieldCheck, Clock } from "lucide-react";

export const DeveloperDocumentationHero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const sampleTags = ["security", "events", "certification", "reference"];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8f9ff] via-[#f1f3fe] to-[#e8edfb] pt-16 sm:pt-20 lg:pt-24 pb-0">
      {/* Background Subtle Constellation / Lattice Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#6366f1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
            PARTNERS &amp; DEVELOPERS / DEVELOPER DOCUMENTATION
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
          <span className="text-[#111827]">Developer </span>
          <span className="text-[#3b82f6]">Documentation</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Explore how healthcare integrations can be evaluated, secured and governed. Technical references appear only when approved for publication or authorized access.
        </p>

        {/* Search Bar Container */}
        <div className="max-w-xl mx-auto mb-4">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics — e.g. security, events, versions"
              className="w-full rounded-full border border-slate-300 bg-white/95 py-3.5 pl-11 pr-12 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
            />
            <span className="absolute right-4 text-xs font-mono text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">
              /
            </span>
          </div>
        </div>

        {/* Search Suggestion Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 mb-8">
          <span className="font-medium">Try:</span>
          {sampleTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSearchQuery(tag)}
              className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors shadow-2xs text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-6">
          <Link
            href="#integration-topics"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-indigo-600/20"
          >
            <span>Explore documentation topics</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#integration-security"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium text-xs sm:text-sm transition-all shadow-xs"
          >
            Review integration security
          </Link>
        </div>

        {/* Direct Answer Disclaimer */}
        <p className="text-[11px] sm:text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
          Direct answer: there is no live API documentation today. Conceptual guidance is not an operational API, sandbox, certification or right to patient information.
        </p>

        {/* 3 Preview Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-end max-w-5xl mx-auto mb-0">
          <div className="md:col-span-4 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-white bg-slate-100">
            <Image
              src="/partners-developer-documentation/pdd1.jpg"
              alt="Hands pointing at laptop code"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-white bg-slate-900">
            <Image
              src="/partners-developer-documentation/pdd2.jpg"
              alt="Analytics and events dashboard"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-3 relative aspect-[16/13] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white bg-slate-100">
            <Image
              src="/partners-developer-documentation/pdd3.jpg"
              alt="Team member smiling"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Navy Bottom Strip Spanning Full Width under images */}
      <div className="w-full bg-[#0d162f] border-t border-slate-800 text-white mt-4 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Item 1 */}
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#064e3b]/80 text-[#34d399] flex items-center justify-center shrink-0 border border-[#059669]/40">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white leading-tight">
                Public documentation
              </div>
              <div className="text-[11px] text-slate-400">
                Conceptual guides on this site.
              </div>
            </div>
            <span className="ml-auto md:ml-2 px-2 py-0.5 rounded-full bg-[#064e3b] text-[#34d399] text-[10px] font-semibold tracking-wide">
              available
            </span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between md:justify-start gap-3 md:border-l md:border-slate-800 md:pl-6">
            <div className="w-8 h-8 rounded-lg bg-[#1e3a8a]/80 text-[#60a5fa] flex items-center justify-center shrink-0 border border-[#2563eb]/40">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white leading-tight">
                Controlled partner materials
              </div>
              <div className="text-[11px] text-slate-400">
                Shared only with authorized partners.
              </div>
            </div>
            <span className="ml-auto md:ml-2 px-2 py-0.5 rounded-full bg-[#1e3a8a] text-[#60a5fa] text-[10px] font-semibold tracking-wide whitespace-nowrap">
              by authorization
            </span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between md:justify-start gap-3 md:border-l md:border-slate-800 md:pl-6">
            <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center shrink-0 border border-slate-700">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-300 leading-tight">
                Not yet released
              </div>
              <div className="text-[11px] text-slate-400">
                API reference, sandbox, SDKs.
              </div>
            </div>
            <span className="ml-auto md:ml-2 px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-semibold tracking-wide whitespace-nowrap">
              not released
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

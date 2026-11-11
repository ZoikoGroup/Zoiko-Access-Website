"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const floatingBubbles = [
  {
    tag: "PATIENTS",
    question: "Can I book through Zoiko Access?",
    position: "top-16 left-6 xl:left-14 rounded-2xl rounded-br-sm",
  },
  {
    tag: "CLINICIANS",
    question: 'Does "sent" mean reviewed?',
    position: "bottom-20 left-10 xl:left-24 rounded-2xl rounded-tr-sm",
  },
  {
    tag: "CAREGIVERS",
    question: "Can I help a family member?",
    position: "top-14 right-6 xl:right-14 rounded-2xl rounded-bl-sm",
  },
  {
    tag: "PRIVACY",
    question: "Who owns my records?",
    position: "bottom-24 right-10 xl:right-24 rounded-2xl rounded-tl-sm",
  },
];

export const FaqHeroSection: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const target = document.getElementById("top-questions");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0e1748] text-white pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28">
      {/* Background Photo & Deep Indigo Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/resources-frequently-asked-questions/faq1.jpg"
          alt="Healthcare professionals background"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0b1340]/90 via-[#121c5e]/85 to-[#162066]/95"
          aria-hidden="true"
        />
      </div>

      {/* Floating Speech Bubbles (Desktop) */}
      <div className="hidden lg:block max-w-7xl mx-auto relative">
        {floatingBubbles.map((bubble, idx) => (
          <div
            key={idx}
            className={`absolute z-20 bg-white text-slate-800 px-4 py-3 shadow-xl border border-white/40 max-w-[195px] ${bubble.position}`}
          >
            <span className="block text-[9px] font-bold tracking-wider uppercase text-[#6366f1] mb-0.5">
              {bubble.tag}
            </span>
            <p className="text-[11px] font-semibold text-[#0f172a] leading-snug">
              {bubble.question}
            </p>
          </div>
        ))}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-5">
          <span className="inline-block border border-white/25 bg-white/10 backdrop-blur-md text-purple-100 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full">
            RESOURCES / FREQUENTLY ASKED QUESTIONS
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12] text-white mb-4">
          Frequently asked questions
          <br />
          about <span className="text-[#8b7cff]">Zoiko Access</span>
        </h1>

        <p className="text-xs sm:text-sm text-purple-100/85 max-w-2xl mx-auto leading-relaxed mb-7">
          Clear explanations of healthcare navigation, permissions, coordination and the availability of supported services. Actual features depend on local authorization and participating systems.
        </p>

        {/* Search Pill Bar */}
        <form
          onSubmit={handleSearch}
          className="max-w-lg mx-auto bg-white rounded-full p-1.5 pl-5 flex items-center justify-between shadow-xl mb-6"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a topic or question"
            aria-label="Search a topic or question"
            className="text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 bg-transparent outline-none flex-1 pr-3"
          />
          <button
            type="submit"
            className="bg-[#6d4aff] hover:bg-[#5a36ee] text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors shrink-0 cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#top-questions"
            className="bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
          >
            <span>Browse questions</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/talk-to-support"
            className="border border-white/30 bg-white/5 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
          >
            Visit Help Center
          </Link>
        </div>
      </div>
    </section>
  );
};

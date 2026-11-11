"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TaskExpectation {
  tab: string;
  title: string;
  description: string;
  note: string;
}

const taskExpectations: TaskExpectation[] = [
  {
    tab: "Find care information",
    title: "Find care information",
    description:
      "Topic pages use headings and plain language; search works with the keyboard and announces results.",
    note: "Applies only to features that are live in your market.",
  },
  {
    tab: "Accounts & permissions",
    title: "Accounts & permissions",
    description:
      "Sign-in flows support password managers, visible focus states, and clear accessible status announcements without abrupt timeouts.",
    note: "Applies only where account services are active in your region.",
  },
  {
    tab: "Forms",
    title: "Forms",
    description:
      "Every input pairs a visible label with clear instructions, keyboard-friendly error summaries linked to fields, and simple controls.",
    note: "Applies only when an intake or request form route is live.",
  },
  {
    tab: "Reading content",
    title: "Reading content",
    description:
      "Short paragraphs, generous line height, semantic headings, and clean text reflow up to 400% zoom without horizontal scrolling.",
    note: "Available across all public informational pages.",
  },
];

export const TaskByTaskExpectations: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = taskExpectations[activeIdx];

  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              ACCESSIBILITY BY TASK
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            What to expect,{" "}
            <span className="text-[#7c5cff]">task by task</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Pick a task to see how it is designed to work.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Tabs */}
          <div className="lg:col-span-4 space-y-2.5 flex flex-col justify-between">
            {taskExpectations.map((item, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={item.tab}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-pressed={active}
                  className={`w-full px-5 py-4 rounded-xl text-left text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                    active
                      ? "bg-[#0d1642] text-white shadow-md"
                      : "bg-white border border-slate-200/80 text-[#0f172a] hover:border-purple-200"
                  }`}
                >
                  <span>{item.tab}</span>
                  <span aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Image Card */}
          <div className="lg:col-span-8">
            <div className="relative h-full min-h-[250px] sm:min-h-[280px] rounded-2xl overflow-hidden shadow-xl bg-[#0d1438] p-6 sm:p-8 flex flex-col justify-end text-white">
              <Image
                src="/resources-accessibility/ara9.jpg"
                alt="Clinician using mobile device"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090e2c]/95 via-[#0f1954]/70 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-xl">
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                  {current.description}
                </p>
                <p className="text-[11px] text-purple-200/80">
                  {current.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface ExceptionItem {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  whatItMeans: string;
  whoOwns: string;
  dontAssume: string;
}

const exceptionsData: ExceptionItem[] = [
  {
    id: "recipient-not-found",
    tabLabel: "Recipient not found",
    title: "Recipient not found",
    description:
      "The intended recipient couldn't be matched to an authorized clinician or organization.",
    whatItMeans: "The report wasn't delivered to anyone.",
    whoOwns: "Originating organization, using its own routing process.",
    dontAssume: "That the report reached someone else instead.",
  },
  {
    id: "delivery-failed",
    tabLabel: "Delivery failed",
    title: "Delivery failed",
    description:
      "A technical transmission failure occurred while conveying the report to the recipient's system.",
    whatItMeans: "Technical transport did not succeed.",
    whoOwns: "Sending system and originating organization.",
    dontAssume: "That delivery will retry indefinitely without review.",
  },
  {
    id: "no-acknowledgment",
    tabLabel: "No acknowledgment",
    title: "No acknowledgment",
    description:
      "The recipient system received the transmission, but no acknowledgment from staff or intake queue was returned.",
    whatItMeans: "The report arrived, but organizational review is unconfirmed.",
    whoOwns: "Receiving organization's intake queue or clinical team.",
    dontAssume: "That a doctor or nurse has seen the results.",
  },
  {
    id: "source-unavailable",
    tabLabel: "Source unavailable",
    title: "Source unavailable",
    description:
      "The originating diagnostic service's interface is temporarily offline or unreachable.",
    whatItMeans: "Fresh status or correction checks cannot be queried right now.",
    whoOwns: "Originating system administrators and technical operations.",
    dontAssume: "That no newer versions exist.",
  },
  {
    id: "disputed-review-status",
    tabLabel: "Disputed review status",
    title: "Disputed review status",
    description:
      "A discrepancy exists between technical delivery evidence and recipient review claims.",
    whatItMeans: "Delivery is recorded, but internal clinical review is contested.",
    whoOwns: "Clinical governance teams of both participating organizations.",
    dontAssume: "That either party's informal recollection overrides the audit record.",
  },
];

export default function ExceptionsHandler() {
  const [activeId, setActiveId] = useState<string>("recipient-not-found");
  const activeItem =
    exceptionsData.find((item) => item.id === activeId) || exceptionsData[0];

  return (
    <section id="exceptions" className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>EXCEPTIONS &amp; UNRESOLVED STEPS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-10 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)] leading-tight">
          When a step doesn&apos;t complete, <br className="hidden sm:inline" />
          someone still owns what&apos;s next.
        </h2>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Left Navigation Tabs */}
          <div className="space-y-2.5 lg:col-span-4">
            {exceptionsData.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[13px] transition-all duration-200 ${
                    isActive
                      ? "border border-[#c7d2fe] bg-[#f5f3ff] font-semibold text-[#4338ca] shadow-2xs"
                      : "border border-slate-200/90 bg-white font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <span>{item.tabLabel}</span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      isActive ? "text-[#4338ca]" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detail Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs lg:col-span-8">
            <h3 className="mb-2 text-[18px] sm:text-[20px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
              {activeItem.title}
            </h3>
            <p className="mb-6 text-[13.5px] leading-relaxed text-slate-600">
              {activeItem.description}
            </p>

            {/* 3 Information Boxes */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {/* Box 1: What it means */}
              <div className="rounded-xl border border-slate-100 bg-[#f8faff] p-4">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  WHAT IT MEANS
                </span>
                <p className="text-[12.5px] leading-snug text-slate-700">
                  {activeItem.whatItMeans}
                </p>
              </div>

              {/* Box 2: Who owns the next step */}
              <div className="rounded-xl border border-slate-100 bg-[#f8faff] p-4">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  WHO OWNS THE NEXT STEP
                </span>
                <p className="text-[12.5px] leading-snug text-slate-700">
                  {activeItem.whoOwns}
                </p>
              </div>

              {/* Box 3: Don't assume */}
              <div className="rounded-xl border border-[#fef3c7] bg-[#fffbeb] p-4">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
                  DON&apos;T ASSUME
                </span>
                <p className="text-[12.5px] leading-snug text-amber-900/90">
                  {activeItem.dontAssume}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

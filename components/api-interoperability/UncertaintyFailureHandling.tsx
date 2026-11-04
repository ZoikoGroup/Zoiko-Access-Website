"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
  status: string;
  attempts: number;
  shownAs: string;
}

const tabsData: TabData[] = [
  {
    id: "retry",
    label: "retry",
    title: "Retry",
    description:
      "A failed send is tried again within agreed limits. Until it succeeds, it shows as not delivered.",
    status: "send_failed",
    attempts: 2,
    shownAs: "not delivered",
  },
  {
    id: "reconcile",
    label: "reconcile",
    title: "Reconcile",
    description:
      "Conflicting data payloads are flagged for automated cross-referencing and verification prior to resolution.",
    status: "discrepancy_detected",
    attempts: 1,
    shownAs: "pending reconciliation",
  },
  {
    id: "invalidate",
    label: "invalidate",
    title: "Invalidate",
    description:
      "Outdated or corrupted records are explicitly revoked so consumers never ingest stale data.",
    status: "revoked",
    attempts: 0,
    shownAs: "invalidated",
  },
  {
    id: "re-review",
    label: "re-review",
    title: "Re-review",
    description:
      "Amended results trigger a mandatory manual review cycle before final acceptance is granted.",
    status: "requires_re_review",
    attempts: 1,
    shownAs: "in review",
  },
  {
    id: "escalate",
    label: "escalate",
    title: "Escalate",
    description:
      "Critical transmission failures bypass default retries and route directly to administrative governance.",
    status: "escalated_to_admin",
    attempts: 3,
    shownAs: "escalated",
  },
];

export default function UncertaintyFailureHandling() {
  const [activeTabId, setActiveTabId] = useState<string>("retry");

  const activeTab =
    tabsData.find((tab) => tab.id === activeTabId) || tabsData[0];

  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28 text-white">
      {/* Background Image Layer using /tech/grad.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/tech/grad.png"
          alt="Failure handling background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-[12px] font-semibold text-[#B7A6FF] backdrop-blur-md">
              // failure_handling
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            Uncertainty stays visible.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            An unavailable source or a corrected result must be shown as
            uncertain, never hidden. Pick a response to see how it works.
          </p>
        </div>

        {/* Dark Container Box (#16245A / #0E1646 style) */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#0F1738]/90 border border-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
          {/* Interactive Navigation Tabs */}
          <div className="flex border-b border-white/10 overflow-x-auto no-scrollbar gap-8">
            {tabsData.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`pb-4 font-mono text-[14px] transition-colors whitespace-nowrap focus:outline-none relative ${
                    isActive
                      ? "font-bold text-white"
                      : "text-blue-200/60 hover:text-white"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Left Description */}
            <div className="lg:col-span-7">
              <h3 className="text-[24px] font-bold text-white">
                {activeTab.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/80">
                {activeTab.description}
              </p>
            </div>

            {/* Right JSON / Code Block Box */}
            <div className="rounded-2xl border border-white/10 bg-[#FFFFFF0D] p-6 font-mono text-[13px] text-blue-200/90 shadow-inner lg:col-span-5">
              <span className="block text-[12px] text-blue-300/40">
                // Illustrative
              </span>
              <div className="mt-2 space-y-1">
                <p>
                  <span className="text-purple-300">status:</span>{" "}
                  <span className="text-amber-300">"{activeTab.status}"</span>
                </p>
                <p>
                  <span className="text-purple-300">attempts:</span>{" "}
                  <span className="text-emerald-300">{activeTab.attempts}</span>
                </p>
                <p>
                  <span className="text-purple-300">shown_as:</span>{" "}
                  <span className="text-amber-300">"{activeTab.shownAs}"</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote Notice */}
        <p className="mt-6 text-[13px] font-medium text-blue-200/70">
          No silent success: a failure is never shown as complete.
        </p>
      </div>
    </section>
  );
}

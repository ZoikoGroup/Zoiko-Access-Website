"use client";

import { useState } from "react";

const handoffStates = [
  {
    id: 1,
    title: "Sent",
    description: "The sending system released the message.",
    namedSource: "Sending system",
    eventTimestamp: "Event timestamp from the sender",
    doesNotImply: "It arrived.",
    alsoShown: "Actor type and confidence",
  },
  {
    id: 2,
    title: "Delivered to endpoint",
    description: "The message reached the destination endpoint.",
    namedSource: "Endpoint transport layer",
    eventTimestamp: "Timestamp of endpoint receipt",
    doesNotImply: "It was opened or read by personnel.",
    alsoShown: "Transport protocol and status code",
  },
  {
    id: 3,
    title: "Acknowledged",
    description: "The system or receiver acknowledged receipt of the message.",
    namedSource: "Receiving system or operator",
    eventTimestamp: "Timestamp of acknowledgment",
    doesNotImply: "Formal review or clinical acceptance.",
    alsoShown: "Acknowledgment identifier",
  },
  {
    id: 4,
    title: "Reviewed by qualified personnel",
    description: "Qualified personnel reviewed the content of the message.",
    namedSource: "Assigned personnel role",
    eventTimestamp: "Timestamp of review completion",
    doesNotImply: "Final treatment or resolution decision.",
    alsoShown: "Reviewer credential level",
  },
  {
    id: 5,
    title: "Accepted or resolved",
    description: "The request has been formally accepted or resolved.",
    namedSource: "Authorized decision maker",
    eventTimestamp: "Timestamp of acceptance or resolution",
    doesNotImply: "Continuous automated monitoring.",
    alsoShown: "Resolution category",
  },
];

const possibleStates = ["Declined", "Expired", "Unknown", "Failed", "Revised"];

export default function UnderstandHandoffStatus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeState = handoffStates[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(140.67deg,#02125f_0%,#2f42cb_55%,#4267d5_100%)] py-20 font-sans sm:py-28 text-white">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#93C5FD]">
            <span className="h-0.5 w-6 bg-[#3B82F6]" aria-hidden="true" />
            HANDOFF LIFECYCLE
          </div>
          <h2 className="mt-3 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            Understand each handoff status.
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7] text-[#CBD5E1] sm:text-[17px]">
            Five illustrative states. Select one to see what it records and what
            it does not prove. Not every technical exchange will expose every
            step.
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column - Interactive Status List */}
          <div className="flex flex-col space-y-3 lg:col-span-5">
            {handoffStates.map((state, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={state.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-4 rounded-2xl p-4 text-left transition-all ${
                    isActive
                      ? "bg-white text-[#1E1B4B] shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${
                      isActive
                        ? "bg-[#7C3AED] text-white"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {state.id}
                  </span>
                  <span className="text-[15px] font-semibold">
                    {state.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column - Detail Card */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 text-[#0F172A] shadow-2xl lg:col-span-7 sm:p-10">
            <div>
              {/* Technical Badge */}
              <span className="inline-block rounded-md bg-[#F3E8FF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#7C3AED]">
                Technical
              </span>

              {/* Title & Description */}
              <h3 className="mt-4 text-[26px] font-bold tracking-[-0.02em] text-[#0F172A]">
                {activeState.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#475569]">
                {activeState.description}
              </p>

              {/* Detail Grid */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
                    NAMED SOURCE
                  </span>
                  <p className="mt-1 text-[14px] font-medium text-[#0F172A]">
                    {activeState.namedSource}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
                    EVENT TIMESTAMP
                  </span>
                  <p className="mt-1 text-[14px] font-medium text-[#0F172A]">
                    {activeState.eventTimestamp}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
                    DOES NOT IMPLY
                  </span>
                  <p className="mt-1 text-[14px] font-medium text-[#0F172A]">
                    {activeState.doesNotImply}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
                    ALSO SHOWN
                  </span>
                  <p className="mt-1 text-[14px] font-medium text-[#0F172A]">
                    {activeState.alsoShown}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Also Possible Section */}
            <div className="mt-10 pt-6 border-t border-[#E2E8F0]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[13px] font-medium text-[#64748B] mr-2">
                  Also possible:
                </span>
                {possibleStates.map((stateName, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-3 py-1 text-[12px] font-semibold text-[#475569]"
                  >
                    {stateName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface WalkthroughEvent {
  stepNumber: number;
  stepName: string;
  defaultOwner: string;
  recordedBy: string;
  title: string;
  description: string;
  evidenceShown: string;
  stillUnknown: string;
}

const walkthroughEvents: WalkthroughEvent[] = [
  {
    stepNumber: 1,
    stepName: "Result generated",
    defaultOwner: "Organization X",
    recordedBy: "ORGANIZATION X",
    title: "Result generated",
    description: "A lab, imaging service or care team produces the report.",
    evidenceShown: "Laboratory report object",
    stillUnknown: "Whether it is authorized for release",
  },
  {
    stepNumber: 2,
    stepName: "Approved release",
    defaultOwner: "Organization X",
    recordedBy: "ORGANIZATION X",
    title: "Approved release",
    description: "The source decides the report can go out under its rules.",
    evidenceShown: "Release authorization timestamp",
    stillUnknown: "Whether transport has commenced",
  },
  {
    stepNumber: 3,
    stepName: "Transmitted",
    defaultOwner: "Sending system",
    recordedBy: "SENDING SYSTEM",
    title: "Transmitted",
    description: "The report is sent toward an authorized recipient.",
    evidenceShown: "Outbound transport log",
    stillUnknown: "Whether destination has acknowledged receipt",
  },
  {
    stepNumber: 4,
    stepName: "Received",
    defaultOwner: "Organization Y system",
    recordedBy: "ORGANIZATION Y SYSTEM",
    title: "Received",
    description: "Organization Y's system confirms receipt.",
    evidenceShown: "Technical receipt",
    stillUnknown: "That a clinician has seen it",
  },
  {
    stepNumber: 5,
    stepName: "Clinically reviewed",
    defaultOwner: "Receiving clinician",
    recordedBy: "RECEIVING CLINICIAN",
    title: "Clinically reviewed",
    description: "A responsible clinician reviews it and records that review.",
    evidenceShown: "Clinician review event in local system",
    stillUnknown: "Whether the patient has been informed",
  },
  {
    stepNumber: 6,
    stepName: "Next action documented",
    defaultOwner: "Receiving organization",
    recordedBy: "RECEIVING ORGANIZATION",
    title: "Next action documented",
    description: "Follow-up is decided, assigned and recorded locally.",
    evidenceShown: "Action plan & designated owner",
    stillUnknown: "Whether all downstream outcomes are completed",
  },
];

export default function ConceptualWalkthrough() {
  // Event 4 is selected by default as in screenshot
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(3); // 0-indexed, so 3 is step 4
  const currentEvent = walkthroughEvents[currentStepIndex];

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentStepIndex < walkthroughEvents.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>CONCEPTUAL WALKTHROUGH</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-3 text-[30px] sm:text-[36px] lg:text-[40px] font-bold tracking-tight text-[#111827] [font-family:var(--font-poppins)]">
          Follow one report through the handoff.
        </h2>

        {/* Subtitle */}
        <p className="mb-8 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Step through a synthetic example to see who records each event and
          what stays unknown.
        </p>

        {/* Interactive Walkthrough Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 bg-[#fafbfc] px-6 py-3.5 text-[11.5px]">
            <span className="font-semibold text-slate-700">
              Report A · from Organization X to Organization Y
            </span>
            <span className="text-slate-400 mt-1 sm:mt-0">
              Synthetic labels only – no patient data
            </span>
          </div>

          {/* Main 2-Column Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Left Steps List */}
            <div className="lg:col-span-5 p-4 sm:p-6 space-y-1">
              {walkthroughEvents.map((step, idx) => {
                const isSelected = idx === currentStepIndex;
                const isPast = idx < currentStepIndex;

                let stateText = "Not recorded";
                if (idx <= currentStepIndex) {
                  stateText = step.defaultOwner;
                }

                return (
                  <button
                    key={step.stepNumber}
                    type="button"
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left transition-colors ${
                      isSelected
                        ? "bg-[#ede9fe]/60 font-semibold text-[#6d5ae6]"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Status indicator dot */}
                      {isPast ? (
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#1e293b]" />
                      ) : isSelected ? (
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#7c3aed]" />
                      ) : (
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-slate-300 bg-white" />
                      )}
                      <span
                        className={`text-[13px] ${
                          isSelected ? "font-bold text-[#6d5ae6]" : isPast ? "text-slate-800" : "text-slate-500"
                        }`}
                      >
                        {step.stepName}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] whitespace-nowrap ${
                        isSelected
                          ? "text-[#6d5ae6] font-medium"
                          : isPast
                          ? "text-slate-600"
                          : "text-slate-400"
                      }`}
                    >
                      {stateText}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Active Event Detail */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Event Eyebrow */}
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  EVENT {currentEvent.stepNumber} OF {walkthroughEvents.length} · RECORDED BY {currentEvent.recordedBy}
                </span>

                {/* Event Title */}
                <h3 className="mb-1 text-[20px] sm:text-[22px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                  {currentEvent.title}
                </h3>

                {/* Event Description */}
                <p className="mb-6 text-[13.5px] leading-relaxed text-slate-600">
                  {currentEvent.description}
                </p>

                {/* Evidence and Still Unknown side-by-side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Evidence Shown */}
                  <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
                    <span className="block text-[10.5px] font-medium text-slate-500 mb-1">
                      Evidence shown
                    </span>
                    <p className="text-[13px] font-bold text-slate-800">
                      {currentEvent.evidenceShown}
                    </p>
                  </div>

                  {/* Still Unknown */}
                  <div className="rounded-xl border border-[#fef3c7] bg-[#fffbeb] p-4 shadow-2xs">
                    <span className="block text-[10.5px] font-medium text-amber-700 mb-1">
                      Still unknown
                    </span>
                    <p className="text-[13px] font-bold text-amber-900">
                      {currentEvent.stillUnknown}
                    </p>
                  </div>
                </div>

                {/* Footnote */}
                <p className="mt-5 text-[11px] leading-relaxed text-slate-400">
                  Steps after this one show as &quot;Not recorded&quot; until their owner records them.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Prev / Next buttons & Progress */}
          <div className="flex items-center justify-between border-t border-slate-100 bg-white px-6 py-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className={`inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-[12px] font-semibold transition ${
                currentStepIndex === 0
                  ? "cursor-not-allowed opacity-40 text-slate-400"
                  : "bg-white text-slate-700 hover:bg-slate-50 shadow-xs"
              }`}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Previous</span>
            </button>

            <span className="text-[12px] font-medium text-slate-500">
              Event {currentEvent.stepNumber} of {walkthroughEvents.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentStepIndex === walkthroughEvents.length - 1}
              className={`inline-flex items-center gap-1.5 rounded-xl px-4.5 py-2 text-[12px] font-semibold transition ${
                currentStepIndex === walkthroughEvents.length - 1
                  ? "cursor-not-allowed opacity-40 bg-slate-300 text-white"
                  : "bg-[#6366f1] text-white hover:bg-[#4f46e5] shadow-xs"
              }`}
            >
              <span>Next event</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

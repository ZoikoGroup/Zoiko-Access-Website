"use client";

import React, { useState } from "react";
import Image from "next/image";

type TopicKey =
  | "All questions"
  | "Patients"
  | "Caregivers"
  | "Clinicians"
  | "Organizations"
  | "Integrations"
  | "Privacy & Safety";

interface FaqEntry {
  id: number;
  category: string;
  topic: Exclude<TopicKey, "All questions">;
  question: string;
  answer: string;
}

const faqEntries: FaqEntry[] = [
  {
    id: 1,
    category: "PATIENT ACCESS",
    topic: "Patients",
    question: "What is Zoiko Access?",
    answer:
      "Zoiko Access is an informational and care-coordination platform designed to clarify healthcare navigation, permissions, and handoffs between participating organizations. It is not a healthcare provider or hospital.",
  },
  {
    id: 2,
    category: "PATIENT ACCESS",
    topic: "Patients",
    question: "Can I book an appointment through Zoiko Access?",
    answer:
      "Scheduling features depend on local market authorization and participating providers. Informational pages explain how requests and routing work without acting as a live booking desk.",
  },
  {
    id: 3,
    category: "AVAILABILITY",
    topic: "Patients",
    question: "Is Zoiko Access available in my country?",
    answer:
      "Availability is governed by region, partner contracts, and regulatory readiness. Regional information explains context without implying live local service delivery.",
  },
  {
    id: 4,
    category: "CAREGIVERS",
    topic: "Caregivers",
    question: "Can I access information for a family member?",
    answer:
      "Caregiver or proxy access is only permitted when explicitly authorized by the patient or verified under applicable local guardianship rules, and can be revoked at any time.",
  },
  {
    id: 5,
    category: "RECORDS & PRIVACY",
    topic: "Privacy & Safety",
    question: "Does Zoiko Access store all my health records?",
    answer:
      "No. Source healthcare systems and licensed institutions remain the authoritative owners of their medical records. Zoiko Access focuses on governed coordination and visibility.",
  },
  {
    id: 6,
    category: "REFERRALS",
    topic: "Clinicians",
    question: 'Does "sent" mean a clinician reviewed my referral?',
    answer:
      "No. Transport transmission only means a referral or message was sent technically; clinical acceptance and review remain separate decisions owned by the receiving provider.",
  },
  {
    id: 7,
    category: "CLINICAL RESPONSIBILITY",
    topic: "Clinicians",
    question: "Does Zoiko Access diagnose or prescribe?",
    answer:
      "Never. Clinical assessment, diagnosis, prescribing, and dispensing belong exclusively to licensed clinicians, prescribers, and pharmacies.",
  },
  {
    id: 8,
    category: "PAYERS & BENEFITS",
    topic: "Organizations",
    question: "Does insurance eligibility guarantee reimbursement?",
    answer:
      "No. An eligibility check or status view reflects point-in-time administrative data from the payer and never serves as a final payment or reimbursement guarantee.",
  },
  {
    id: 9,
    category: "ORGANIZATIONS",
    topic: "Organizations",
    question: "Can my employer view my clinical records?",
    answer:
      "No. Employers or program sponsors never gain access to personal medical records; any occupational coordination requires strict, separate, lawful employee authorization.",
  },
  {
    id: 10,
    category: "INTEGRATIONS",
    topic: "Integrations",
    question: "Are integrations and APIs available to developers?",
    answer:
      "Integration documentation describes proposed architecture and security boundaries. Developer keys, sandboxes, and live endpoints remain gated until formal partner onboarding opens.",
  },
  {
    id: 11,
    category: "EMERGENCIES",
    topic: "Privacy & Safety",
    question: "Should I use Zoiko Access during an emergency?",
    answer:
      "Never. Zoiko Access is not an emergency service. If you or someone else needs urgent medical attention, contact local emergency services immediately.",
  },
  {
    id: 12,
    category: "SUPPORT",
    topic: "Privacy & Safety",
    question: "How do I contact support?",
    answer:
      "Visit the Help Center & Support page for guidance on routing general informational enquiries or finding the right institutional contact for clinical or record questions.",
  },
];

const topicFilters: { key: TopicKey; count: number }[] = [
  { key: "All questions", count: 12 },
  { key: "Patients", count: 3 },
  { key: "Caregivers", count: 1 },
  { key: "Clinicians", count: 2 },
  { key: "Organizations", count: 2 },
  { key: "Integrations", count: 1 },
  { key: "Privacy & Safety", count: 3 },
];

export const BrowseByTopicSection: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<TopicKey>("All questions");
  const [openId, setOpenId] = useState<number | null>(null);

  const visibleFaqs =
    activeTopic === "All questions"
      ? faqEntries
      : faqEntries.filter((item) => item.topic === activeTopic);

  const handleReset = () => {
    setActiveTopic("All questions");
    setOpenId(null);
  };

  return (
    <section
      id="questions-list"
      className="w-full bg-[#fafaff] py-16 md:py-20 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              ALL ANSWERS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Browse by <span className="text-[#7c5cff]">topic</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Choosing a topic only filters questions. It does not verify what you can access.
          </p>
        </div>

        {/* Two-Column Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm lg:sticky lg:top-24">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-slate-400 px-2 mb-3">
              TOPICS
            </span>

            <div className="space-y-1 mb-5">
              {topicFilters.map((topic) => {
                const isSelected = activeTopic === topic.key;
                return (
                  <button
                    key={topic.key}
                    type="button"
                    onClick={() => {
                      setActiveTopic(topic.key);
                      setOpenId(null);
                    }}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-[#6d4aff] to-[#7c3aed] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{topic.key}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {topic.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sidebar Clinician Photo */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-slate-100">
              <Image
                src="/resources-frequently-asked-questions/faq5.jpg"
                alt="Reviewed healthcare clinician"
                fill
                sizes="(max-width: 1024px) 100vw, 280px"
                className="object-cover object-top"
              />
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Answers are reviewed and dated. No fake popularity.
            </p>
          </div>

          {/* Right Question Cards List */}
          <div className="lg:col-span-9">
            {/* Count & Reset Bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs text-slate-500">
                Showing{" "}
                <strong className="font-bold text-[#0f172a]">
                  {visibleFaqs.length}
                </strong>{" "}
                questions
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="bg-white border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-600 px-3 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Reset filters
              </button>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {visibleFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <span className="block text-[9px] font-bold tracking-wider uppercase text-[#6366f1] mb-0.5">
                          {faq.category}
                        </span>
                        <span className="block font-bold text-xs sm:text-sm text-[#0f172a]">
                          {faq.question}
                        </span>
                      </div>
                      <span className="w-6 h-6 rounded-full bg-[#f3f0ff] text-[#6366f1] text-xs font-bold flex items-center justify-center shrink-0 select-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Draft Disclaimer */}
            <div className="mt-5">
              <span className="inline-block bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-medium px-3.5 py-1.5 rounded-lg">
                Draft answers for layout. Publish only reviewed answers from the content registry.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

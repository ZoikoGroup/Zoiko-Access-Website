import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TopQuestionCard {
  badge: string;
  question: string;
  imageSrc: string;
  href: string;
}

const topQuestions: TopQuestionCard[] = [
  {
    badge: "Patients",
    question: "What is Zoiko Access?",
    imageSrc: "/resources-frequently-asked-questions/faq1.jpg",
    href: "#questions-list",
  },
  {
    badge: "Caregivers",
    question: "Can I access information for a family member?",
    imageSrc: "/resources-frequently-asked-questions/faq2.jpg",
    href: "#questions-list",
  },
  {
    badge: "Clinicians",
    question: 'Does "sent" mean a clinician reviewed my referral?',
    imageSrc: "/resources-frequently-asked-questions/faq3.jpg",
    href: "#questions-list",
  },
  {
    badge: "Organizations",
    question: "Can my employer view my clinical records?",
    imageSrc: "/resources-frequently-asked-questions/faq4.jpg",
    href: "#questions-list",
  },
];

export const TopQuestionsGrid: React.FC = () => {
  return (
    <section
      id="top-questions"
      className="w-full bg-white py-16 md:py-20 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              TOP QUESTIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Start with the{" "}
            <span className="text-[#7c5cff]">most asked</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Chosen by our editors, not by popularity counts. Tap one to jump to its answer.
          </p>
        </div>

        {/* 4 Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topQuestions.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/4.3] shadow-md hover:shadow-xl transition-all flex flex-col justify-between p-5 text-white bg-[#0d1538]"
            >
              {/* Background Image */}
              <Image
                src={card.imageSrc}
                alt={card.question}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Navy Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0b1345]/95 via-[#0f1a5c]/60 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Badge */}
              <div className="relative z-10">
                <span className="inline-block bg-white text-[#4f46e5] text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                  {card.badge}
                </span>
              </div>

              {/* Bottom Question & Link */}
              <div className="relative z-10 mt-auto">
                <h3 className="font-bold text-sm sm:text-base text-white leading-snug mb-2">
                  {card.question}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-200 group-hover:text-white transition-colors">
                  <span>Read answer</span>
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const informationFaqs: FaqItem[] = [
  {
    question: "Who controls my health information?",
    answer:
      "You make choices within local law; your providers hold your clinical records.",
  },
  {
    question: "Does Zoiko Access store my medical record?",
    answer:
      "No universal record is held. Access is source by source, where authorized.",
  },
  {
    question: "Can my family see my information?",
    answer: "Only with your verified permission or legal authority.",
  },
  {
    question: "Can I take permission back?",
    answer: "Yes, where the service and local law allow.",
  },
  {
    question: "Does reading this page share anything?",
    answer: "No. Pages don't collect or share health information.",
  },
  {
    question: "Who do I ask about my records?",
    answer: "The provider that holds them.",
  },
];

export default function PlainAnswersYourInformation() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F2EFFF0] to-[#D1C5FE] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Content & Questions */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-wider bg-gradient-to-r from-[#16245A] to-[#2F4DC0] bg-clip-text text-transparent uppercase">
              QUESTIONS, ANSWERED
            </span>
            <span className="w-8 h-[1px] bg-[#635BFF]/30"></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-8 leading-[1.15]">
            Plain answers about your information.
          </h1>

          {/* Q&A List */}
          <div className="space-y-6">
            {informationFaqs.map((faq, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="text-base font-bold text-[#0A2540] mb-1 leading-snug">
                  <a href="#" className="hover:underline">
                    {faq.question}
                  </a>
                </h2>
                <p className="text-xs md:text-sm text-[#697386] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Image */}
        <div className="lg:col-span-6 w-full h-full flex justify-center items-center">
          <div className="w-full max-w-xl lg:max-w-none h-[420px] lg:h-[540px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-[#02125F]">
            <img
              src="/our/10.png"
              alt="3D Glowing Question Mark surrounded by dark question marks"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

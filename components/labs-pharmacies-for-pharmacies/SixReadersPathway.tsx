import React from "react";
import { User, Users, Building2, GitFork, FileText, Shield } from "lucide-react";

interface ReaderCard {
  title: string;
  question: string;
  icon: React.ReactNode;
}

const readers: ReaderCard[] = [
  {
    title: "Patients",
    question: "Can I get medication here?",
    icon: <User className="w-5 h-5 text-[#6366f1]" />,
  },
  {
    title: "Caregivers",
    question: "Can I act for someone?",
    icon: <Users className="w-5 h-5 text-[#6366f1]" />,
  },
  {
    title: "Independent pharmacies",
    question: "What can we publish?",
    icon: <Building2 className="w-5 h-5 text-[#6366f1]" />,
  },
  {
    title: "Pharmacy networks",
    question: "How does licensing apply?",
    icon: <GitFork className="w-5 h-5 text-[#6366f1]" />,
  },
  {
    title: "Prescribers",
    question: "Does sent mean accepted?",
    icon: <FileText className="w-5 h-5 text-[#6366f1]" />,
  },
  {
    title: "Integration & privacy leads",
    question: "Who sees what data?",
    icon: <Shield className="w-5 h-5 text-[#6366f1]" />,
  },
];

export const SixReadersPathway: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title on Left and Note on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                WHO THIS PAGE HELPS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Six readers, one shared pathway.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
            Each reader has a different question. Reading this page doesn&apos;t mean you or your organization take part in anything.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-8">
          {readers.map((reader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow justify-between min-h-[145px]"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
                {reader.icon}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-1 leading-snug">
                  {reader.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                  {reader.question}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            No organization is implied to be participating.
          </p>
        </div>
      </div>
    </section>
  );
};

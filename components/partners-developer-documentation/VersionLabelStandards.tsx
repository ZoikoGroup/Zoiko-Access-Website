import React from "react";
import { Calendar, AlertTriangle, CheckCircle2, Archive } from "lucide-react";

interface LabelCard {
  tag: string;
  tagColor: string;
  description: string;
}

const labels: LabelCard[] = [
  {
    tag: "current",
    tagColor: "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]",
    description: "Supported and recommended.",
  },
  {
    tag: "effective",
    tagColor: "bg-[#e0e7ff] text-[#4338ca] border-[#c7d2fe]",
    description: "Takes effect on a stated date.",
  },
  {
    tag: "breaking",
    tagColor: "bg-[#fef3c7] text-[#b45309] border-[#fde68a]",
    description: "Explained in plain words before release.",
  },
  {
    tag: "retired",
    tagColor: "bg-[#f1f5f9] text-[#64748b] border-[#e2e8f0]",
    description: "No longer available; replacement named.",
  },
];

const timelineNodes = [
  {
    tag: "effective",
    tagColor: "bg-[#e0e7ff] text-[#4338ca] border-[#c7d2fe]",
    version: "v2.8",
    note: "Takes effect on a stated date",
    icon: Calendar,
    iconColor: "text-[#4338ca] bg-[#e0e7ff]",
  },
  {
    tag: "breaking",
    tagColor: "bg-[#fef3c7] text-[#b45309] border-[#fde68a]",
    version: "v2.5",
    note: "Explained in plain words before release",
    icon: AlertTriangle,
    iconColor: "text-[#b45309] bg-[#fef3c7]",
  },
  {
    tag: "current",
    tagColor: "bg-[#dcfce7] text-[#15803d] border-[#bbf7d0]",
    version: "v2.4",
    note: "Supported and recommended",
    icon: CheckCircle2,
    iconColor: "text-[#15803d] bg-[#dcfce7]",
  },
  {
    tag: "retired",
    tagColor: "bg-[#f1f5f9] text-[#64748b] border-[#e2e8f0]",
    version: "v1.9",
    note: "No longer available; replacement named",
    icon: Archive,
    iconColor: "text-[#64748b] bg-[#f1f5f9]",
  },
];

export const VersionLabelStandards: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              VERSIONING &amp; CHANGELOG
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            How versions are labelled.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 4 Label Cards */}
          <div className="lg:col-span-6 space-y-4">
            {labels.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-xs hover:shadow-md transition-shadow"
              >
                <span
                  className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${item.tagColor} min-w-[76px] text-center`}
                >
                  {item.tag}
                </span>
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Version Diagram Timeline Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-slate-200/90 bg-gradient-to-b from-[#fbfaff] via-white to-[#f8faff] p-6 sm:p-8 shadow-sm">
              {/* Vertical timeline line */}
              <div className="absolute left-[39px] sm:left-[47px] top-10 bottom-10 w-[2px] bg-slate-200 -z-0" />

              <div className="space-y-4 relative z-10">
                {timelineNodes.map((node, idx) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs hover:shadow-xs transition-shadow"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-slate-200/60 ${node.iconColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold border ${node.tagColor}`}
                          >
                            {node.tag}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-800">
                            {node.version}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {node.note}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

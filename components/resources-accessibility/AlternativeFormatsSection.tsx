import React from "react";
import Image from "next/image";

const formats = [
  {
    title: "Large print",
    status: "Available only once verified",
    imageSrc: "/resources-accessibility/ara10.jpg",
  },
  {
    title: "Plain-language summary",
    status: "Available only once verified",
    imageSrc: "/resources-accessibility/ara11.jpg",
  },
  {
    title: "Text-only version",
    status: "Available only once verified",
    imageSrc: "/resources-accessibility/ara12.jpg",
  },
  {
    title: "Captions & transcripts",
    status: "Available only once verified",
    imageSrc: "/resources-accessibility/ara13.jpg",
  },
];

export const AlternativeFormatsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              ALTERNATIVE FORMATS &amp; ASSISTANCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Other ways to{" "}
            <span className="text-[#7c5cff]">get information</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Each format appears only once it is verified and staffed. Until then, it is shown with its status.
          </p>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {formats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-sm text-[#0f172a] mb-2.5">
                  {item.title}
                </h3>
                <span className="inline-block bg-amber-50 text-amber-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full w-fit">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

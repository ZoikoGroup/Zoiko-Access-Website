import React from "react";
import Image from "next/image";

const audienceStories = [
  {
    title: "Patients & caregivers",
    imageSrc: "/resources-news-and-insights/rnai2.jpg",
  },
  {
    title: "Clinicians",
    imageSrc: "/resources-news-and-insights/rnai3.jpg",
  },
  {
    title: "Organizations",
    imageSrc: "/resources-news-and-insights/rnai4.jpg",
  },
  {
    title: "Partners",
    imageSrc: "/resources-news-and-insights/rnai5.jpg",
  },
  {
    title: "General updates",
    imageSrc: "/resources-news-and-insights/rnai6.jpg",
  },
];

export const StoriesForAudienceRow: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              BROWSE BY AUDIENCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Stories for{" "}
            <span className="text-[#7c5cff]">who you are</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Topic pages open once reviewed articles are published.
          </p>
        </div>

        {/* 5 Photo Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {audienceStories.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all flex items-end p-4 text-white bg-[#0d1538]"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090f38]/90 via-[#090f38]/30 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <h3 className="relative z-10 font-bold text-xs sm:text-sm text-white leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

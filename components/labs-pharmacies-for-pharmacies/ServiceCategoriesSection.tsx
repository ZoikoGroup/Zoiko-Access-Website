import React from "react";
import Image from "next/image";

interface CategoryCard {
  title: string;
  description: string;
  imageSrc: string;
}

const categories: CategoryCard[] = [
  {
    title: "Prescription services",
    description: "Validation and dispensing by licensed pharmacists.",
    imageSrc: "/labs-pharmacies-for-pharmacies/lpfp3.jpg",
  },
  {
    title: "Counseling",
    description: "Advice on how to use medicines safely.",
    imageSrc: "/labs-pharmacies-for-pharmacies/lpfp4.jpg",
  },
  {
    title: "Medication reviews",
    description: "Reviews offered under local rules.",
    imageSrc: "/labs-pharmacies-for-pharmacies/lpfp5.jpg",
  },
  {
    title: "Collection & delivery",
    description: "Where the pharmacy itself provides it.",
    imageSrc: "/labs-pharmacies-for-pharmacies/lpfp6.jpg",
  },
];

export const ServiceCategoriesSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9f8ff] via-white to-white py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              PHARMACY SERVICES EXPLAINED
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            Service categories, not promises.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Example categories that pharmacies may offer. A category would be listed for an area only once it is verified and published.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Background image */}
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark gradient overlay for text readability */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0c1448]/95 via-[#0c1448]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Text content pinned at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-white">
                <span className="inline-block bg-white/25 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                  EXAMPLE
                </span>
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Bar */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-sm text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Informational listings never promise that a particular pharmacy offers a service today.
          </p>
        </div>
      </div>
    </section>
  );
};

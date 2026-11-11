import React from "react";
import Image from "next/image";

interface CategoryItem {
  badge: string;
  isWarning?: boolean;
  title: string;
  description: string;
  imageSrc: string;
}

const infoCategories: CategoryItem[] = [
  {
    badge: "May apply",
    title: "Site usage information",
    description:
      "Basic technical information needed to deliver and secure public pages, as described in the applicable notice.",
    imageSrc: "/resources-privacy-and-your-information/pyi2.jpg",
  },
  {
    badge: "Only where live",
    title: "Information you choose to give",
    description:
      "For example, details you type into a form, where a form is live and its notice is published.",
    imageSrc: "/resources-privacy-and-your-information/pyi3.jpg",
  },
  {
    badge: "Only where live",
    title: "Account information",
    description:
      "Sign-in and permission details, only for services that are active in your market.",
    imageSrc: "/resources-privacy-and-your-information/pyi4.jpg",
  },
  {
    badge: "Not on public pages",
    isWarning: true,
    title: "Health information",
    description:
      "Public pages are designed not to collect protected health information. Never enter health details in search or feedback.",
    imageSrc: "/resources-privacy-and-your-information/pyi5.jpg",
  },
];

export const InformationCategoriesGrid: React.FC = () => {
  return (
    <section
      id="information-categories"
      className="w-full bg-gradient-to-br from-[#f8f7ff] via-[#f4f1ff] to-[#ebe5ff] py-16 md:py-20 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
            02
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Information categories
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The kinds of information that may be involved, and when. The applicable notice gives the full list.
          </p>
        </div>

        {/* 2x2 Photo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {infoCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch"
            >
              {/* Photo */}
              <div className="sm:col-span-4 relative min-h-[150px] bg-slate-100">
                <Image
                  src={cat.imageSrc}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="sm:col-span-8 p-5 flex flex-col justify-center">
                <span
                  className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 w-fit ${
                    cat.isWarning
                      ? "bg-rose-50 text-rose-600"
                      : "bg-[#f1effd] text-[#6366f1]"
                  }`}
                >
                  {cat.badge}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1.5 leading-snug">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

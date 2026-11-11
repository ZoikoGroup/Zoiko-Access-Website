import React from "react";
import Image from "next/image";

export const TwoBoundariesToRemember: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              SAFETY AND SUPPORT
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Two boundaries to{" "}
            <span className="text-[#7c5cff]">remember</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            So you always know where to go.
          </p>
        </div>

        {/* 2 Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Not an emergency service */}
          <div className="bg-[#fff5f6] border border-rose-200/70 rounded-2xl overflow-hidden shadow-xs grid grid-cols-1 sm:grid-cols-12 items-stretch">
            <div className="sm:col-span-5 relative min-h-[180px] bg-slate-900">
              <Image
                src="/resources-frequently-asked-questions/faq6.png"
                alt="Emergency ambulance response vehicle"
                fill
                sizes="(max-width: 640px) 100vw, 240px"
                className="object-cover"
              />
            </div>
            <div className="sm:col-span-7 p-6 flex flex-col justify-center">
              <span className="inline-block bg-white text-rose-600 border border-rose-200/70 text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2.5 w-fit shadow-xs">
                Safety &amp; emergencies
              </span>
              <h3 className="font-bold text-base text-[#0f172a] mb-2">
                Not an emergency service
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In an emergency, contact your local emergency services immediately. Zoiko Access does not triage or give clinical advice.
              </p>
            </div>
          </div>

          {/* Card 2: Contact support */}
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs grid grid-cols-1 sm:grid-cols-12 items-stretch">
            <div className="sm:col-span-5 relative min-h-[180px] bg-slate-100">
              <Image
                src="/resources-frequently-asked-questions/faq7.jpg"
                alt="Support representative pointing at laptop screen"
                fill
                sizes="(max-width: 640px) 100vw, 240px"
                className="object-cover"
              />
            </div>
            <div className="sm:col-span-7 p-6 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200/80 text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2.5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Contact support · not active yet
              </span>
              <h3 className="font-bold text-base text-[#0f172a] mb-2">
                Contact support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Appears only once a staffed channel is operational. Until then, use the Help Center and these answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { AlertCircle } from "lucide-react";

export default function EmergencyNoticeBanner() {
  return (
    <div className="w-full bg-[#4267D5] font-sans text-white px-6 py-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto flex items-center gap-4 md:gap-5">
        {/* Exclamation Icon Badge */}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-[#991B1B] flex items-center justify-center shrink-0 shadow-md">
          <AlertCircle className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
        </div>

        {/* Text Content */}
        <div className="flex flex-col sm:gap-3">
          <h2 className="text-base md:text-lg font-extrabold text-white leading-tight">
            This is not an emergency service.
          </h2>
          <p className="text-xs md:text-sm text-white/90 font-medium leading-relaxed">
            If you or someone else needs urgent help, contact your local
            emergency services now.
          </p>
        </div>
      </div>
    </div>
  );
}

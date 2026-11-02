import React from "react";

export default function MedicalRecordPrincipleBanner() {
  return (
    <div className="w-full bg-white font-sans text-[#1D2939] px-6 py-16 md:py-20 lg:py-24 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto text-center flex flex-col items-center">
        {/* Main Quote / Principle Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#0A2540] tracking-tight leading-[1.2] max-w-4xl mb-4">
          &quot;Viewing a page never grants access to a medical record.&quot;
        </h2>

        {/* Subtitle Caption */}
        <p className="text-xs md:text-sm text-[#697386] font-medium tracking-wide">
          The principle behind every information page on Zoiko Access
        </p>
      </div>
    </div>
  );
}

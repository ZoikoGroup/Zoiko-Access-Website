import React from "react";

interface BoundaryItem {
  title: string;
  description: string;
}

const boundariesData: BoundaryItem[] = [
  {
    title: "No record access",
    description: "Pages never open a medical record.",
  },
  {
    title: "No data collection",
    description: "We don't ask for health details here.",
  },
  {
    title: "No consent given",
    description: "Reading isn't agreeing to share anything.",
  },
  {
    title: "No medical advice",
    description: "Ask your provider about your care.",
  },
];

export default function WhatReadingDoesntDo() {
  return (
    <div className="w-full bg-[#F8F7FF] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-16 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Header Section with Subtitle and Top Rule */}
        <div className="w-full mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
              BOUNDARIES
            </span>
            <span className="w-full h-[1px] bg-[#E6EBF1]"></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            What reading this page doesn&apos;t do.
          </h1>
        </div>

        {/* Solid Dark Divider Line */}
        <div className="w-full h-[2px] bg-[#0A2540] mb-8"></div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boundariesData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="text-base font-bold text-[#0A2540] mb-1.5 leading-snug">
                <a href="#" className="hover:underline">
                  {item.title}
                </a>
              </h2>
              <p className="text-xs md:text-sm text-[#697386] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

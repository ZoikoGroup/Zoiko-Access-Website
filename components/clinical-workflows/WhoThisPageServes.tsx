import React from "react";
import { ArrowRight } from "lucide-react";

interface CareTeamRole {
  title: string;
  description: string;
  imageSrc: string;
}

const rolesData: CareTeamRole[] = [
  {
    title: "Doctors",
    description: "Understand handoffs and who owns each next step.",
    imageSrc: "/cor/2.png",
  },
  {
    title: "Specialists",
    description: "Know when a referral is received — and when it is accepted.",
    imageSrc: "/cor/3.png",
  },
  {
    title: "Nursing teams",
    description: "Follow tasks and transitions without guessing the owner.",
    imageSrc: "/cor/4.png",
  },
  {
    title: "Allied health",
    description: "Coordinate with other teams within your professional scope.",
    imageSrc: "/work/1.png",
  },
  {
    title: "Clinical operations",
    description: "See how statuses, routes and permissions are governed.",
    imageSrc: "/cor/5.png",
  },
];

export default function WhoThisPageServes() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            WHO THIS PAGE SERVES
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-4">
          Written for the whole care team.
        </h1>

        {/* Description */}
        <p className="text-[#425466] text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          Pick the role closest to yours. These are not credential checks, and
          none of them grants access to anything.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {rolesData.map((role, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-[#02125F] flex flex-col justify-end h-75 group"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={role.imageSrc}
                  alt={role.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0E164600] to-[#0E1646E5]"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <h2 className="text-xl font-bold text-white mb-2">
                  <a href="#" className="hover:underline">
                    {role.title}
                  </a>
                </h2>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {role.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9BDFB] hover:underline uppercase tracking-wider"
                >
                  <span>See the topics</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

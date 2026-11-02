import React from "react";

interface PermissionItem {
  title: string;
  description: string;
  actor: string;
}

const permissionsData: PermissionItem[] = [
  {
    title: "Seeing your own information",
    description: "After verified sign-in, where the service is enabled.",
    actor: "YOU",
  },
  {
    title: "Sharing with a caregiver",
    description:
      "Only with verified, scoped authority — never from kinship alone.",
    actor: "YOU + VERIFICATION",
  },
  {
    title: "Acting for a child or dependent",
    description:
      "Where a guardian's legal authority is verified under local rules.",
    actor: "GUARDIAN",
  },
  {
    title: "Clinical access",
    description: "Your providers, under their own confidentiality duties.",
    actor: "PROVIDERS",
  },
  {
    title: "Changing or revoking",
    description: "Withdraw permission where the service and law allow.",
    actor: "YOU",
  },
];

export default function FivePermissionsExplained() {
  return (
    <div className="min-h-screen bg-[#F8F6FF] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Image */}
        <div className="lg:col-span-5 w-full flex justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-none h-[480px] lg:h-[580px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-[#02125F]">
            <img
              src="/our/6.png"
              alt="Padlock on metal door representing security permissions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column Content & List */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-wider bg-gradient-to-r from-[#16245A] to-[#2F4DC0] bg-clip-text text-transparent uppercase">
              PERMISSIONS THAT MATTER
            </span>
            <span className="w-8 h-[2px] bg-[#635BFF]/30"></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-8 leading-[1.15]">
            Five permissions, explained.
          </h1>

          {/* List of Permissions */}
          <div className="divide-y divide-[#E6EBF1]/70 border-y border-[#E6EBF1]/70">
            {permissionsData.map((item, index) => (
              <div
                key={index}
                className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 group"
              >
                {/* Title and Description */}
                <div className="pr-4">
                  <h2 className="text-base font-bold text-[#0A2540] mb-1 leading-snug">
                    <a href="#" className="hover:underline">
                      {item.title}
                    </a>
                  </h2>
                  <p className="text-xs md:text-sm text-[#697386] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Actor Tag */}
                <div className="shrink-0 self-start sm:self-center pt-1 sm:pt-0">
                  <span className="text-[10px] md:text-xs font-bold tracking-wider bg-gradient-to-r from-[#16245A] to-[#2F4DC0] bg-clip-text text-transparent uppercase">
                    {item.actor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

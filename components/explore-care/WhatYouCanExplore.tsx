import Link from "next/link";
import {
  Plus,
  Target,
  Building2,
  Search,
  Home,
  ArrowRight,
} from "lucide-react";

const exploreServicesData = [
  {
    icon: Plus,
    title: "Primary care",
    description:
      "A common first point of contact for general health concerns and ongoing care.",
    keepInMindTitle: "Keep in mind",
    keepInMindList: [
      "It is not a substitute for urgent or emergency care.",
      "Care professionals and local access arrangements vary.",
    ],
    linkText: "Understand care pathways",
    linkHref: "#",
  },
  {
    icon: Target,
    title: "Specialist care",
    description:
      "Professionals with a focused clinical area or specific expertise.",
    keepInMindTitle: "Keep in mind",
    keepInMindList: [
      "A category description does not recommend a specialty for symptoms.",
      "Access and referral requirements depend on local rules.",
    ],
    linkText: "Understand care pathways",
    linkHref: "#",
  },
  {
    icon: Building2,
    title: "Hospitals and clinics",
    description:
      "Organizations providing different types of inpatient, outpatient, or clinic-based services.",
    keepInMindTitle: "Keep in mind",
    keepInMindList: [
      "A facility category does not establish availability or network participation.",
      "The responsible organization determines its services and access.",
    ],
    linkText: "Understand care pathways",
    linkHref: "#",
  },
  {
    icon: Search,
    title: "Diagnostic services",
    description:
      "Laboratory, imaging, and related services used within appropriate care pathways.",
    keepInMindTitle: "Keep in mind",
    keepInMindList: [
      "A test report is not the same as clinical interpretation or review.",
      "Orders, access, and result handling require authorized processes.",
    ],
    linkText: "Understand care pathways",
    linkHref: "#",
  },
  {
    icon: Plus,
    title: "Pharmacy services",
    description:
      "Medication-related services delivered by appropriately authorized pharmacy professionals.",
    keepInMindTitle: "Keep in mind",
    keepInMindList: [
      "This page does not prescribe, dispense, or guarantee a medicine availability.",
      "Services, supply rules, and prescriptions depend on location.",
    ],
    linkText: "Understand care pathways",
    linkHref: "#",
  },
  {
    icon: Home,
    title: "Home and community care",
    description:
      "Support delivered in home or community settings by relevant care organizations.",
    keepInMindTitle: "Keep in mind",
    keepInMindList: [
      "A category does not establish eligibility, staffing, or a care arrangement.",
      "Local safeguarding, licensing, and service conditions apply.",
    ],
    linkText: "Understand care pathways",
    linkHref: "#",
  },
];

export default function WhatYouCanExplore() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            What you can explore
          </p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Understand the services. <br />
            Keep the boundaries clear.
          </h2>

          <p className="mt-4 text-[16px] leading-[1.7] text-[#4B5563] sm:text-[17px]">
            These are explanatory categories, not promised services, provider
            recommendations, or guidance on which treatment is appropriate for
            you.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exploreServicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(118,87,232,0.06)]"
              >
                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F3F0FF] text-[#7657E8]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-[20px] font-bold tracking-[-0.02em] text-[#23327A]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Main Description */}
                  <p className="mt-5 text-[14px] leading-[1.6] text-[#4B5563]">
                    {service.description}
                  </p>

                  {/* Divider & Keep in mind box */}
                  <div className="mt-6 border-t border-[#F3F4F6] pt-5">
                    <h4 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#23327A]">
                      {service.keepInMindTitle}
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-[13px] leading-[1.6] text-[#6B7280]">
                      {service.keepInMindList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="mt-8 pt-2">
                  <Link
                    href={service.linkHref}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#4267D5] transition-colors hover:text-[#23327A]"
                  >
                    {service.linkText}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

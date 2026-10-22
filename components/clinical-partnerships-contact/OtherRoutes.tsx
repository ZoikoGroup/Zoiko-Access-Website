"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const tiles = [
  {
    title: "Professional onboarding",
    description: "Separate and gated. A message here is never an application.",
    image: "/clinical-partnerships-contact/route-onboarding.png",
    imageAlt: "Clinician credentialing and professional onboarding portal",
    link: "/healthcare-professionals",
  },
  {
    title: "Clinicians overview",
    description: "The published overview of clinician coordination.",
    image: "/clinical-partnerships-contact/route-clinicians.png",
    imageAlt: "Overview of clinician tools and care coordination workflows",
    link: "/healthcare-professionals",
  },
  {
    title: "Partners & Developers",
    description: "For integration and technical questions.",
    image: "/clinical-partnerships-contact/route-partners.png",
    imageAlt: "Developer APIs, EHR integrations, and partner endpoints",
    link: "/how-it-works",
  },
  {
    title: "Legal and privacy",
    description: "Notices that describe how inquiries are handled.",
    image: "/clinical-partnerships-contact/route-legal.png",
    imageAlt: "Legal documentation, HIPAA compliance, and privacy governance",
    link: "/about-us",
  },
  {
    title: "Verified support",
    description: "Patient and account help, where a staffed route exists.",
    image: "/clinical-partnerships-contact/route-support.png",
    imageAlt: "Verified patient and provider support services",
    link: "/explore-care",
  },
  {
    title: "Emergency notice",
    description: "Use the emergency services appropriate to your location.",
    image: "/clinical-partnerships-contact/route-emergency.png",
    imageAlt: "Emergency and urgent healthcare services notice",
    link: "/how-referrals-work",
  },
];

export default function OtherRoutes() {
  return (
    <section
      id="other-routes"
      className="relative w-full border-b border-[#E1DBF9] bg-gradient-to-b from-[#F8F6FF] to-[#EFEAFF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#6F5DDB]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#5B47D6]">
            Other routes
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="mt-3.5 max-w-[800px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-[#1B1750] sm:text-[36.8px]">
            Other places to go
          </h2>
          <p className="mt-2 text-[15px] font-normal leading-[1.65] text-[#575387] sm:text-[16px]">
            Each is linked only if it is actually published.
          </p>
        </div>

        {/* 6 Tiles Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col overflow-hidden rounded-[16px] border border-[#E1DBF9] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Tile Top Image */}
              <div className="relative h-[140px] w-full bg-gradient-to-br from-[#7160D5] to-[#031462]">
                <Image
                  src={tile.image}
                  alt={tile.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Tile Content */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <h3 className="text-[17.6px] font-semibold text-[#1B1750]">{tile.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[#575387]">
                    {tile.description}
                  </p>
                </div>

                {/* Pill Link */}
                <div className="mt-5">
                  <Link
                    href={tile.link}
                    className="inline-flex items-center gap-2 rounded-full bg-[#EFEBFE] px-3.5 py-1.5 text-[13.1px] font-semibold text-[#5B47D6] transition-colors hover:bg-[#E2DAFD]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#5B47D6]" aria-hidden="true" />
                    <span>Linked when published</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

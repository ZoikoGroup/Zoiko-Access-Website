import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const perspectivesData = [
  {
    image: "/how-it-works/role-patient.png",
    alt: "Person exploring healthcare options on a tablet",
    title: "I'm exploring for myself",
    description:
      "Learn about services and responsibilities before deciding what information to explore next.",
    linkText: "Patient information",
    linkHref: "/for-patients",
  },
  {
    image: "/how-it-works/role-caregiver.png",
    alt: "Caregiver reviewing documents with an elderly person",
    title: "I'm helping someone else",
    description:
      "Explore caregiver guidance. Helping someone does not automatically grant permission or record access.",
    linkText: "Caregiver guidance",
    linkHref: "/for-caregivers",
  },
  {
    image: "/how-it-works/role-healthcare.png",
    alt: "Healthcare professionals collaborating in a meeting",
    title: "I work in healthcare",
    description:
      "Explore clinician and institutional roles, authorized coordination, and professional accountability.",
    linkText: "Healthcare ecosystem",
    linkHref: "/healthcare-professionals",
  },
  {
    image: "/how-it-works/role-local.png",
    alt: "Person looking out the window thinking about local context",
    title: "I want local context",
    description:
      "Understand why location, participating organizations, and release approval are separate conditions.",
    linkText: "Location & availability",
    linkHref: "/locations-availability",
  },
];

export default function PerspectiveCards() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            For people & care organizations
          </p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Start with the perspective <br />
            that matters to you.
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {perspectivesData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:flex-row"
            >
              {/* Image side */}
              <div className="relative h-[300px] w-full sm:h-auto sm:w-[45%]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Content side */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="text-[20px] font-bold tracking-[-0.02em] text-[#23327A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#4B5563]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#4267D5] transition-colors hover:text-[#23327A]"
                  >
                    {item.linkText}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const pathwaysData = [
  {
    image: "/cli/14.png",
    alt: "Medical equipment, pills, and stethoscope",
    title: "Referral Coordination",
    href: "/referral-coordination",
  },
  {
    image: "/cli/15.png",
    alt: "Hospital building representing care transitions and follow-up",
    title: "Care Transitions & Follow-Up",
    href: "/care-transitions",
  },
  {
    image: "/cli/16.png",
    alt: "X-ray hand image representing task & worklist experience",
    title: "Task & Worklist Experience",
    href: "/task-worklist-experience",
  },
  {
    image: "/cli/17.png",
    alt: "Medications, thermometer, and face mask on yellow background",
    title: "Results & Review Handoffs",
    href: "/clinicians-results-handoffs",
  },
  {
    image: "/cli/18.png",
    alt: "Modern clinic reception and desk area representing secure communication",
    title: "Secure Communication",
    href: "/secure-communication",
  },
  {
    image: "/cli/19.png",
    alt: "Black and white stethoscope representing professional onboarding",
    title: "Professional Onboarding",
    href: "/professional-onboarding",
  },
];

export default function ExploreClinicianCoordination() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
            <span className="h-0.5 w-6 bg-[#7C3AED]" aria-hidden="true" />
            CLINICIAN PATHWAYS
          </div>
          <h2 className="mt-3 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Explore clinician coordination.
          </h2>
        </div>

        {/* 3x2 Grid Container */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pathwaysData.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group flex flex-col justify-between overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              <div>
                {/* Image Section - Edge-to-edge padded with rounded corners */}
                <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Footer Section - Title + Checkmark Icon */}
                <div className="flex items-center justify-between px-4 pt-4 pb-4">
                  <h3 className="text-[16px] font-bold text-[#1E1B4B] transition-colors group-hover:text-[#2563EB]">
                    {card.title}
                  </h3>
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center text-[#031974]">
                    <Check
                      className="h-4 w-4 stroke-[2.5]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

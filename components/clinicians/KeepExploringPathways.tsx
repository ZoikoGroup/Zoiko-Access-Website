import Image from "next/image";
import Link from "next/link";

const pathwaysData = [
  {
    image: "/prof/17.png",
    alt: "Clinician giving a thumbs up in surgical attire",
    title: "Clinicians overview",
    href: "#",
  },
  {
    image: "/prof/18.png",
    alt: "Resort pool area representing referral coordination",
    title: "Referral Coordination",
    href: "#",
  },
  {
    image: "/prof/19.png",
    alt: "Modern clinic reception space representing care transitions",
    title: "Care Transitions",
    href: "#",
  },
  {
    image: "/prof/20.png",
    alt: "Healthcare worker with stethoscope representing task experience",
    title: "Task & Worklist Experience",
    href: "#",
  },
  {
    image: "/prof/21.png",
    alt: "Medical treatment room representing results and review handoffs",
    title: "Results & Review Handoffs",
    href: "#",
  },
  {
    image: "/prof/22.png",
    alt: "Fingerprint security shield representing secure communications",
    title: "Secure Communications",
    href: "#",
  },
  {
    image: "/prof/23.png",
    alt: "Medical team in masks representing clinical responsibility",
    title: "Clinical Responsibility",
    href: "#",
  },
];

export function KeepExploringPathways() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
            RELATED CLINICIAN PATHWAYS
          </span>
          <h2 className="mt-2 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] sm:text-[44px]">
            Keep exploring
          </h2>
        </div>

        {/* Grid Container */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pathwaysData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Image Container */}
              <div className="relative h-[160px] w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title Section */}
              <div className="px-2 pt-4 pb-2">
                <h3 className="text-[15px] font-bold text-[#1E1B4B] transition-colors group-hover:text-[#2563EB]">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

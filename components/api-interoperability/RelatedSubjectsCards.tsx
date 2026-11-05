import Image from "next/image";
import Link from "next/link";

interface RelatedSubject {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

const relatedSubjectsData: RelatedSubject[] = [
  {
    title: "Health System Vendors",
    description: "Vendor roles and limits",
    imageSrc: "/api/6.png",
    href: "/partners-health-system-vendors",
  },
  {
    title: "System Integrators",
    description: "Integrator responsibilities",
    imageSrc: "/api/7.png",
    href: "/partners-system-integrators",
  },
  {
    title: "Technology Partners",
    description: "How partnerships are assessed",
    imageSrc: "/api/8.png",
    href: "/technology-partners",
  },
  {
    title: "Privacy",
    description: "How information is handled",
    imageSrc: "/api/9.png",
    href: "/privacy",
  },
];

export default function RelatedSubjectsCards() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#F1F0FE] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
              // related
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Related subjects.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Only published pages are listed.
          </p>
        </div>

        {/* 2x2 Grid of Subject Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {relatedSubjectsData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex items-center justify-between rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] sm:p-6"
            >
              {/* Left Side: Thumbnail + Title/Description */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-18 sm:w-24">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="96px"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div>
                  <h3 className="text-[17px] font-bold text-[#0E1646] sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[14px] text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Open Link Badge */}
              <div className="pl-4">
                <span className="font-mono text-[13px] font-semibold text-[#7C3AED] transition-transform duration-200 group-hover:translate-x-1">
                  open &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

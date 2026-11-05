import Image from "next/image";
import Link from "next/link";

interface DestinationCard {
  title: string;
  description: string;
  status: string;
  statusType: "open" | "unpublished";
  href?: string;
}

const destinationsData: DestinationCard[] = [
  {
    title: "Partners & Developers",
    description: "Section overview",
    status: "open →",
    statusType: "open",
    href: "/partners-developers",
  },
  {
    title: "Health System Vendors",
    description: "Vendor-specific guidance",
    status: "not yet published",
    statusType: "unpublished",
  },
  {
    title: "System Integrators",
    description: "Integrator responsibilities",
    status: "not yet published",
    statusType: "unpublished",
  },
  {
    title: "API & Interoperability",
    description: "Concepts and standards",
    status: "not yet published",
    statusType: "unpublished",
  },
  {
    title: "Integration Security",
    description: "Security expectations",
    status: "not yet published",
    statusType: "unpublished",
  },
  {
    title: "Certification Framework",
    description: "Qualification criteria",
    status: "not yet published",
    statusType: "unpublished",
  },
  {
    title: "Privacy",
    description: "How information is handled",
    status: "open →",
    statusType: "open",
    href: "/privacy",
  },
  {
    title: "Trust",
    description: "Trust and legal information",
    status: "open →",
    statusType: "open",
    href: "/trust",
  },
];

export default function RelatedPartnerDestinations() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28 text-white">
      {/* Background Image Layer using /tech/grad.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/tech/grad.png"
          alt="Related partner destinations background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#B7A6FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B7A6FF]">
              Related partner destinations
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            More in Partners &amp; Developers.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            Only published pages are linked. Others show their status.
          </p>
        </div>

        {/* 4-Column Grid (2 rows x 4 columns) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinationsData.map((item, index) => {
            const cardContent = (
              <div
                className="flex h-full flex-col justify-between rounded-3xl p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: "#FFFFFFB5" }}
              >
                <div>
                  <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#1E1B4B]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-[#475569]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <span
                    className={`text-[13px] font-semibold ${
                      item.statusType === "open"
                        ? "text-[#4F46E5]"
                        : "text-[#D97706]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            );

            return item.href ? (
              <Link key={index} href={item.href} className="block h-full">
                {cardContent}
              </Link>
            ) : (
              <div key={index} className="block h-full cursor-default">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

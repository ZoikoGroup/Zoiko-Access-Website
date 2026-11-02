import Image from "next/image";
import Link from "next/link";

const careTeamData = [
  {
    type: "image",
    image: "/cor/2.png",
    alt: "Doctor smiling and conversing in a clinical setting",
    title: "Doctors",
    description: "Understand handoffs and who owns each next step.",
    href: "#doctors",
  },
  {
    type: "image",
    image: "/cor/3.png",
    alt: "Specialist outdoors near trees representing specialized care",
    title: "Specialists",
    description: "Know when a referral is received — and when it is accepted.",
    href: "#specialists",
  },
  {
    type: "image",
    image: "/cor/4.png",
    alt: "Nursing team members assisting a patient",
    title: "Nursing teams",
    description: "Follow tasks and transitions without guessing the owner.",
    href: "#nursing-teams",
  },
  {
    type: "gradient",
    title: "Allied health",
    description: "Coordinate with other teams within your professional scope.",
    href: "#allied-health",
  },
  {
    type: "image",
    image: "/cor/5.png",
    alt: "Dashboard analytics screen for clinical operations",
    title: "Clinical operations",
    description: "See how statuses, routes and permissions are governed.",
    href: "#clinical-operations",
  },
];

export default function WrittenForWholeCareTeam() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Who this page serves
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Written for the whole care team.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Pick the role closest to yours. These are not credential checks, and
            none of them grants access to anything.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {careTeamData.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              {card.type === "image" ? (
                <>
                  {/* Edge-to-Edge Image Container with dark gradient overlay for text readability */}
                  <div className="relative h-[320px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={card.image!}
                      alt={card.alt!}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160172]/90 via-[#160172]/30 to-transparent" />

                    {/* Overlay Text & Link Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                      <h3 className="text-[18px] font-bold tracking-[-0.02em]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-[1.5] text-blue-100/90">
                        {card.description}
                      </p>
                      <div className="mt-4">
                        <Link
                          href={card.href}
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white transition-colors hover:text-[#B7A6FF]"
                        >
                          <span>See the topics</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* 4th Card: Linear gradient background from #5A3FC9 to #4267D5 */}
                  <div
                    className="relative flex h-[320px] w-full flex-col justify-end p-6 text-white"
                    style={{
                      background:
                        "linear-gradient(to bottom, #5A3FC9 0%, #4267D5 100%)",
                    }}
                  >
                    <div>
                      <h3 className="text-[18px] font-bold tracking-[-0.02em]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-[1.5] text-blue-100/90">
                        {card.description}
                      </p>
                      <div className="mt-4">
                        <Link
                          href={card.href}
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#C9BDFB] transition-colors hover:text-[#B7A6FF]"
                        >
                          <span>See the topics</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

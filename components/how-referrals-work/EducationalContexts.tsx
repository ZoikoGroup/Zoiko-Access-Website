import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const contexts = [
  {
    title: "Specialist assessment",
    description:
      "A professional may request another area of expertise where clinically appropriate.",
    image: {
      src: "/how-referrals-work/context-specialist.webp",
      alt: "Person reading general information on a tablet at home",
    },
  },
  {
    title: "Diagnostics",
    description:
      "A relevant care team may request assessment or testing through its authorized pathway.",
    image: {
      src: "/how-referrals-work/context-diagnostics.webp",
      alt: "Family member helping an older relative read a letter",
    },
  },
  {
    title: "Rehabilitation",
    description:
      "A professional may consider a rehabilitation service as part of appropriate care planning.",
    image: {
      src: "/how-referrals-work/context-rehabilitation.webp",
      alt: "Professionals in a planning discussion around a laptop",
    },
  },
  {
    title: "Community support",
    description:
      "A responsible care team may consider a community or support service under local arrangements.",
    image: {
      src: "/how-referrals-work/context-community.webp",
      alt: "Person looking out of a window, considering local context",
    },
  },
];

export default function EducationalContexts() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Educational contexts"
          title="Common reasons a referral may be used."
          description="These examples explain concepts—not what care you need. Only the responsible healthcare team can advise on individual circumstances."
        />

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contexts.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_6px_18px_rgba(36,59,115,0.02)]"
            >
              <div className="relative aspect-[303/337] w-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 303px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[20px] font-bold leading-7 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-[#5E6B85]">
                  {item.description}
                </p>
                <Link
                  href="/healthcare-services"
                  className="mt-auto pt-6 text-[12px] font-semibold leading-5 text-[#4267D5] hover:underline"
                >
                  Explore service education →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

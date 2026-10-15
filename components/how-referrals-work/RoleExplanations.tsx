import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Patients & caregivers",
    description:
      "Learn about requests, permissions, and appropriate next-step expectations. This is separate from a live patient referral workflow.",
    link: { text: "Patient information →", href: "#" },
    image: {
      src: "/how-referrals-work/role-patients.webp",
      alt: "Caregiver going through information with an older woman",
    },
  },
  {
    title: "Clinicians",
    description:
      "Review professional roles, handoffs, and the difference between administrative and clinical responsibility.",
    link: {
      text: "Professional-role education →",
      href: "/healthcare-professionals",
    },
    image: {
      src: "/how-referrals-work/role-clinicians.webp",
      alt: "Clinician reviewing paperwork at a desk",
    },
  },
  {
    title: "Hospitals & clinics",
    description:
      "Understand institutional coordination principles without a claim of deployed referral integrations.",
    link: { text: "Institutional overview →", href: "#" },
    image: {
      src: "/how-referrals-work/role-hospitals.webp",
      alt: "Hospital staff meeting around a coordination screen",
    },
  },
];

export default function RoleExplanations() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Related information pathways"
          title="Choose the explanation for your role."
        />

        <div className="mt-9 grid grid-cols-1 divide-y divide-[#E5E7EB] md:grid-cols-3 md:divide-x md:divide-y-0">
          {roles.map((role) => (
            <article key={role.title} className="px-2 py-8 md:px-8">
              <div className="relative aspect-[320/194] w-full overflow-hidden rounded-lg">
                <Image
                  src={role.image.src}
                  alt={role.image.alt}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-3 text-[22px] font-bold leading-8 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[24px]">
                {role.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[#5E6B85]">
                {role.description}
              </p>
              <Link
                href={role.link.href}
                className="mt-5 inline-block text-[12px] font-semibold leading-5 text-[#4267D5] hover:underline"
              >
                {role.link.text}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

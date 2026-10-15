import Image from "next/image";
import SectionHeading from "./SectionHeading";

const settings = [
  {
    title: "Hospitals",
    description:
      "Institution-based services with distinct professional and organizational responsibilities.",
  },
  {
    title: "Clinics",
    description:
      "Different practices and specialties operate under their own access and referral arrangements.",
  },
  {
    title: "Community settings",
    description:
      "Local professional and support services with defined responsibilities and safeguards.",
  },
  {
    title: "Home-based support",
    description:
      "Permitted services depend on local rules, eligibility, authority, and staffing.",
  },
];

const teamRoles = [
  {
    title: "First contact",
    description: "Understand the appropriate locally defined entry process.",
  },
  {
    title: "Supporting professionals",
    description: "Different permitted roles may contribute to a care-related step.",
  },
  {
    title: "Coordinating organization",
    description: "The organization responsible explains handoffs and ownership.",
  },
  {
    title: "Follow-up",
    description: "The authoritative team communicates the relevant next step.",
  },
];

export default function SettingsCollaboration() {
  return (
    <section
      id="team-based-care"
      className="w-full scroll-mt-24 bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#DCD0FF] py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,720fr)_minmax(0,469fr)] lg:gap-x-[91px]">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <SectionHeading
                badge="Settings & collaboration"
                title="Care often involves a team."
              />
              <p className="mt-10 text-[16px] leading-7 text-[#5E6B85]">
                A person’s journey may involve more than one professional. The
                organization responsible for each step should explain how
                information, referrals, and follow-up are managed.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
              {settings.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white px-[22px] pb-9 pt-[22px]"
                >
                  <h3 className="text-[20px] font-bold leading-7 tracking-[-0.03em] text-[#23327A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#5E6B85]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[469/510] w-full overflow-hidden rounded-2xl">
            <Image
              src="/healthcare-professionals/team-collaboration.webp"
              alt="People discussing service coordination in a professional setting"
              fill
              sizes="(min-width: 1024px) 469px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamRoles.map((item) => (
            <div
              key={item.title}
              className="rounded-b-lg border-t-2 border-[#4267D5] bg-white px-6 pb-7 pt-7"
            >
              <h3 className="text-[16px] font-bold leading-6 text-[#23327A]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[23px] text-[#5E6B85]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

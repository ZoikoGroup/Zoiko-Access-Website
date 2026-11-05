import { Eyebrow, IMG, heading } from "./shared";

const parties = [
  {
    title: "Institutions",
    text: "Sponsor the project and authorize what may be connected.",
    img: "party-institutions",
    alt: "Hospital building",
    accent: "border-[#3D5BD9]",
  },
  {
    title: "Technology vendors",
    text: "Run the source systems that hold records.",
    img: "party-vendors",
    alt: "Server racks for clinical systems",
    accent: "border-[#7B5CF0]",
  },
  {
    title: "Integrators",
    text: "Design, build, test and maintain the agreed connection.",
    img: "party-integrators",
    alt: "Integration engineers collaborating",
    accent: "border-[#243B73]",
  },
  {
    title: "Licensed care organizations",
    text: "Keep clinical responsibility for care decisions.",
    img: "party-care",
    alt: "Clinician at a care organization",
    accent: "border-[#5B8DEF]",
  },
  {
    title: "Governance reviewers",
    text: "Review privacy, security and clinical safety before release.",
    img: "party-governance",
    alt: "Governance reviewers at a table",
    accent: "border-[#A78BFA]",
  },
];

export default function WorkingParties() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Who works with system integrators</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
          Five parties around every integration.
        </h2>
        <p className="mb-8 max-w-[720px] text-base leading-7 text-[#5B6B8C]">
          These roles explain who is usually involved. They are not eligibility checks and you cannot select one
          here.
        </p>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {parties.map((p) => (
            <li
              key={p.title}
              className="overflow-hidden rounded-md border border-[#E4E7F2] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
            >
              <img src={`${IMG}/${p.img}.webp`} alt={p.alt} className="h-60 w-full object-cover" />
              <div className={`border-t-[3px] ${p.accent} px-4 pb-5 pt-4`}>
                <h3 className={`${heading} mb-1.5 text-base leading-6 text-[#16245A]`}>{p.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-2 text-sm leading-5 text-[#5B6B8C]">
          Illustrative roles only. One organization may hold more than one role.
        </p>
      </div>
    </section>
  );
}

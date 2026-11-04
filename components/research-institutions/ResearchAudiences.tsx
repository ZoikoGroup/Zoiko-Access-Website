import { Eyebrow, IMG, heading } from "./shared";

const audiences = [
  {
    tab: "Universities",
    title: "Universities",
    text: "Understand what institution-specific evaluation involves.",
    image: `${IMG}/audience-universities.webp`,
    alt: "Historic university building with a clock tower",
  },
  {
    tab: "Research offices",
    title: "Research offices",
    text: "Find responsibility boundaries and approvals.",
    image: `${IMG}/audience-research-offices.webp`,
    alt: "Colleagues taking notes beside laptops",
  },
  {
    tab: "Clinical teams",
    title: "Clinical research teams",
    text: "See how clinical judgment stays separate.",
    image: `${IMG}/audience-clinical-teams.webp`,
    alt: "Pipette filling a tray of laboratory sample wells",
  },
  {
    tab: "Data stewards",
    title: "Data stewards",
    text: "Check custodianship and minimization rules.",
    image: `${IMG}/audience-data-stewards.webp`,
    alt: "Server racks with network cabling",
  },
];

export default function ResearchAudiences() {
  return (
    <section className="bg-white px-6 pb-16 pt-20 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Who this is for</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Written for the research community.
        </h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C]">
          Each role reads the same principles — none of them grants access.
        </p>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <article
              key={a.title}
              className="relative rounded-b-2xl rounded-tr-2xl border border-[#E4E7F2] bg-white pb-5 shadow-[0_10px_24px_rgba(36,59,115,0.06)]"
            >
              {/* Folder-style tab sitting on the top-left edge */}
              <span className="absolute -top-8 left-0 rounded-t-xl bg-[#2E2A8C] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                {a.tab}
              </span>
              <img src={a.image} alt={a.alt} className="h-48 w-full rounded-tr-2xl object-cover" />
              <div className="px-6 pt-4">
                <h3 className={`${heading} mb-1 text-lg text-[#16245A]`}>{a.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

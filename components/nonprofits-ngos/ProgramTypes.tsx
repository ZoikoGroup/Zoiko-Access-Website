import { Eyebrow, IMG, heading } from "./shared";

const programs = [
  {
    title: "Care-navigation guidance",
    text: "Helping people understand local options and next steps.",
    image: `${IMG}/program-care-navigation.webp`,
    alt: "Volunteer guiding visitors",
  },
  {
    title: "Referral support concept",
    text: "Helping a person reach an authorized provider, with consent.",
    image: `${IMG}/program-referral-support.webp`,
    alt: "Clinician holding a phone",
  },
  {
    title: "Community outreach",
    text: "Sharing trusted public health information locally.",
    image: `${IMG}/inclusive-community.webp`,
    alt: "Group of people sitting together, arms around each other",
  },
  {
    title: "Assisted access",
    text: "Helping someone use digital tools, at their request.",
    image: `${IMG}/program-assisted-access.webp`,
    alt: "Accessible transport van with an open side door",
  },
];

export default function ProgramTypes() {
  return (
    <section id="program-types" className="scroll-mt-24 bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Program types</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Four ways an NGO program could help.
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <div key={p.title} className="flex flex-col gap-1.5">
              <img src={p.image} alt={p.alt} className="h-48 w-full rounded-md object-cover" />
              <span className={`${heading} text-6xl font-bold leading-none text-[#E6E3FA]`} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={`${heading} pt-1.5 text-xl text-[#16245A]`}>{p.title}</h3>
              <p className="text-base leading-6 text-[#5B6B8C]">{p.text}</p>
              <p className="text-xs text-[#8A5A00]">Subject to authorization</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

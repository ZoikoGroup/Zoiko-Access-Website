import { fontPoppins } from "./fonts";
import { Head, Photo, card, img, inner, photoBg, sectionPad, sectionY } from "./ui";

const steps = [
  {
    title: "Explain your context",
    text: "Who you are and what you're evaluating.",
    image: img("professional-explaining-context"),
    alt: "Smiling professional",
  },
  {
    title: "Scope the inquiry",
    text: "Topics, systems and markets in view.",
    image: img("team-scoping-work"),
    alt: "Team listening to a presentation in an office",
  },
  {
    title: "Review fit & governance",
    text: "Legal, privacy, security and technical fit.",
    image: img("governance-review"),
    alt: "Person signing a document",
  },
  {
    title: "Agree next steps, if appropriate",
    text: "Only where both sides decide to continue.",
    image: img("agreeing-next-steps"),
    alt: "Two people shaking hands",
  },
];

export default function Steps() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="How an evaluation may proceed"
          title={
            <>
              Four steps.
              <br />
              No commitments implied.
            </>
          }
          lead="No demo, deployment date, certification, integration or contract is promised by any step."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className={`flex flex-col ${card} shadow-[0_10px_20px_rgba(36,59,115,0.1)]`}>
              <div className={`relative h-[188px] w-full ${photoBg}`}>
                <Photo src={s.image} alt={s.alt} sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw" />
                <span
                  className={`${fontPoppins} absolute left-3.5 top-3.5 rounded-full bg-white/[0.92] px-2.5 py-1 text-[12px] font-semibold leading-5 text-[#243b73]`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 px-6 pb-10 pt-6">
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{s.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

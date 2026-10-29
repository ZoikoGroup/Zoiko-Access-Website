import { Check, Eyebrow, Photo, Title, darkBg, glow, img, inner, photoBg, sectionPad } from "./ui";

const roles = [
  { who: "Payers", what: "decide coverage and claims." },
  { who: "Care organizations", what: "retain clinical decision authority." },
  { who: "Source systems", what: "govern their records." },
  { who: "This channel", what: "accepts business inquiries only." },
];

export default function Responsibility() {
  return (
    <section
      className={`w-full py-14 lg:py-[70px] ${sectionPad}`}
      style={{ backgroundImage: `${glow("1100px 700px", "85% 20%")},${darkBg}` }}
    >
      <div className={`${inner} grid items-center gap-10 lg:grid-cols-[529px_1fr] lg:gap-14 lg:px-10`}>
        <div className={`relative h-[320px] w-full overflow-hidden rounded-[20px] sm:h-[459px] ${photoBg}`}>
          <Photo
            src={img("doctor-in-a-consultation-room")}
            alt="Doctor with a stethoscope, arms crossed"
            sizes="(min-width: 1024px) 529px, 100vw"
          />
        </div>
        <div className="flex flex-col items-start gap-3.5">
          <Eyebrow tone="light">Responsibility &amp; safety</Eyebrow>
          <Title tone="light">Clear roles, even in an inquiry.</Title>
          <ul className="flex flex-col gap-2.5 pt-1">
            {roles.map((r) => (
              <li key={r.who} className="relative pl-7 text-[15px] leading-6 text-white">
                <Check />
                <strong className="font-bold">{r.who}</strong> {r.what}
              </li>
            ))}
          </ul>
          <p className="mt-2 w-full rounded-[10px] border border-l-4 border-solid border-[#b7791f] bg-[#fff8ea] px-[18px] py-5 text-[15px] leading-6 text-[#4a3500]">
            <strong className="font-bold">Please don&apos;t share</strong> medical records, policy IDs, claim numbers or
            any patient-specific details.
          </p>
        </div>
      </div>
    </section>
  );
}

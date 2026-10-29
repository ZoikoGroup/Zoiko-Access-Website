import { Check, Chip, Head, Photo, card, fontPoppins, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const checks = [
  "Role assessment and permitted purposes",
  "Data minimization",
  "Notice and consent, as applicable",
  "Retention and local processing",
  "Cross-border transfer review",
];

const record = [
  "Jurisdiction",
  "Legal entity",
  "Purpose",
  "Data class",
  "Retention class",
  "Data role",
  "Transfer arrangement",
  "Controller / processor",
  "Recipient",
];

export default function Privacy() {
  return (
    <section id="governance" className={`w-full scroll-mt-24 bg-[#f5f8fc] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid items-start gap-10 lg:grid-cols-2 lg:gap-14`}>
        <div className="flex flex-col gap-4">
          <Head
            eyebrow="Contractual privacy & legal roles"
            title="Privacy is assessed per market, before anything moves."
            lead="No contractual or regulatory sufficiency is claimed before jurisdictional review."
          />
          <ul className="flex flex-col gap-2.5">
            {checks.map((c) => (
              <li key={c} className="relative pl-7 text-[15px] leading-6 text-[#2d3a52]">
                <Check />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className={card}>
          <div className={`relative h-[220px] w-full sm:h-[285px] ${photoBg}`}>
            <Photo
              src={pic("legal-agreement-being-reviewed-and-signed")}
              alt="Person signing a legal agreement"
              sizes="(min-width: 1024px) 622px, 100vw"
            />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 text-[#16245a]`}>
              Governance record for each exchange
            </h3>
            <p className="text-[15px] leading-6 text-[#5b6678]">Recorded internally — never shown as a public patient record.</p>
            <ul className="flex flex-wrap gap-2 pt-1">
              {record.map((r) => (
                <Chip key={r}>{r}</Chip>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

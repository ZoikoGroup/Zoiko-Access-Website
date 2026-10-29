import Link from "next/link";
import Copy from "./Copy";
import { Eyebrow, Title, card, cardText, cardTitle, inner, sectionPad } from "./ui";

const resources: {
  title: string;
  titleD?: string[];
  text: string;
  href: string;
}[] = [
  { title: "For laboratories", text: "LIS order and result responsibilities.", href: "/for-laboratories" },
  { title: "Imaging & radiology", text: "RIS/PACS pathways and report handoffs.", href: "/imaging-radiology" },
  { title: "Lab & imaging integration", text: "Technical assessment of partner interfaces.", href: "/lab-imaging-integration" },
  { title: "Referral intake & routing", text: "Hospitals and clinics.", href: "/referral-intake-routing" },
  {
    title: "Patient health information access",
    titleD: ["Patient health information", "access"],
    text: "Source-linked access, where authorized.",
    href: "/patient-health-information-access",
  },
];

export default function RelatedResources() {
  return (
    <section
      id="resources"
      className={`w-full scroll-mt-[40px] bg-white py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.1px]">
          <Eyebrow>Related resources</Eyebrow>
          <Title>
            <Copy
              text="Continue to the page that owns your question."
              d={["Continue to the page that owns your", "question."]}
            />
          </Title>
        </div>

        <ul className="grid w-full gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <li key={item.title} className="flex">
              <Link href={item.href} className={`${card} block w-full`}>
                <span className={`${cardTitle} block`}>
                  <Copy text={item.title} d={item.titleD} />
                </span>
                <span className={`${cardText} block`}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

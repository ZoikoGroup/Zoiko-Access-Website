import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins, fontSora } from "./fonts";

// The Figma frames only specify the topic titles. The answers below restate
// copy that already appears elsewhere on this page.
const topics = [
  {
    number: "01",
    title: "Understanding Zoiko Access",
    m: ["Understanding Zoiko", "Access"],
    answer:
      "Zoiko Access support is intended for product navigation and eligible administrative or technical questions. It does not replace medical advice or emergency services.",
  },
  {
    number: "02",
    title: "Finding published services",
    m: undefined,
    answer:
      "Service information is general guidance. A directory is only shown where a verified source and authorization exist for your care location.",
  },
  {
    number: "03",
    title: "Appointments and requests",
    m: undefined,
    answer:
      "A request is not a confirmation. Receipt is different from an authoritative decision made by the responsible provider.",
  },
  {
    number: "04",
    title: "Referrals and next steps",
    m: undefined,
    answer:
      "Care-related decisions and existing-treatment queries belong with the responsible provider.",
  },
  {
    number: "05",
    title: "Accessibility and website issues",
    m: ["Accessibility and website", "issues"],
    answer:
      "No live contact channel is connected in this preview. A verified route must be published before website or accessibility reports can be sent here.",
  },
  {
    number: "06",
    title: "For healthcare organizations",
    m: ["For healthcare", "organizations"],
    answer:
      "Organization-specific support needs a verified partner channel and authorized access. None is connected in this preview.",
  },
];

export default function HelpTopics() {
  return (
    <section
      id="help-topics"
      className="w-full scroll-mt-[24px] bg-gradient-to-b from-[#f6f3ff] to-[#ece7ff] px-[19.5px] pb-[68.15px] pt-[56px] lg:scroll-mt-[40px] lg:px-[70px] lg:pb-[108.16px] lg:pt-[96px]"
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[13.2px] lg:max-w-[1300px] lg:gap-[13px]">
        <Eyebrow>Task-based guidance</Eyebrow>

        <SectionHeading>
          <Copy
            text="What do you need help with?"
            m={["What do you need help", "with?"]}
          />
        </SectionHeading>

        <p className="w-full max-w-[686.38px] pt-[1.31px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86] lg:pt-[7.68px]">
          <Copy
            text="Choose a nonclinical topic. This page does not ask for symptoms, medical details, personal case references, or account information."
            d={[
              "Choose a nonclinical topic. This page does not ask for symptoms, medical details,",
              "personal case references, or account information.",
            ]}
            m={[
              "Choose a nonclinical topic. This page does",
              "not ask for symptoms, medical details,",
              "personal case references, or account",
              "information.",
            ]}
          />
        </p>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[16.8px] lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-[20px] lg:gap-y-[20px] lg:pt-[17px]">
          {topics.map((topic) => (
            <details
              key={topic.number}
              className="group w-full overflow-clip rounded-[16px] border border-solid border-[#e3def8] bg-white"
            >
              <summary className="flex min-h-[90px] w-full cursor-pointer list-none items-center gap-[15px] px-[22px] py-[26.61px] lg:min-h-[105px] lg:px-[24px] lg:py-[37.5px] [&::-webkit-details-marker]:hidden">
                <span
                  className={`${fontSora} flex size-[30px] shrink-0 flex-col items-center justify-center rounded-[9px] bg-[#e8e8f8] text-center text-[11.2px] font-semibold leading-[normal] text-[#5b49c8]`}
                  aria-hidden="true"
                >
                  {topic.number}
                </span>
                <span
                  className={`${fontPoppins} min-w-0 text-[16px] font-bold leading-[18.4px] text-[#241c59] lg:text-[16.8px] lg:leading-[19.32px]`}
                >
                  <Copy text={topic.title} m={topic.m} />
                </span>
                <span
                  className={`${fontSora} ml-auto flex h-[28px] w-[14px] shrink-0 items-start text-[24px] font-semibold leading-[normal] text-[#5b49c8]`}
                  aria-hidden="true"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="px-[22px] pb-[22px] text-[14.4px] font-normal leading-[23.76px] text-[#5e5a86] lg:pl-[69px] lg:pr-[24px]">
                {topic.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="w-full max-w-[521.48px] pt-[3.46px] text-[12.2px] font-normal leading-[20.67px] text-[#5e5a86] lg:hidden">
          <Copy
            text="Sign-in and account-access support is omitted because no regional identity service or support operation has been verified."
            m={[
              "Sign-in and account-access support is omitted because no",
              "regional identity service or support operation has been",
              "verified.",
            ]}
          />
        </p>
      </div>
    </section>
  );
}

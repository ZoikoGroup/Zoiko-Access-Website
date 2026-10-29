"use client";

import { useState } from "react";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, head, inner, sectionPad } from "./ui";

type Topic = {
  name: string;
  intro: string;
  introLines: string[];
  points: { text: string; lines: string[] }[];
};

// The Figma frame only shows the first topic's panel. The other panels restate
// copy that already appears on this page.
const topics: Topic[] = [
  {
    name: "Patient access and scheduling",
    intro: "Who owns the schedule, and how a request differs from a confirmation.",
    introLines: [
      "Who owns the schedule, and how a",
      "request differs from a confirmation.",
    ],
    points: [
      {
        text: "The provider’s system holds the schedule.",
        lines: ["The provider’s system holds the", "schedule."],
      },
      {
        text: "May need local authorization and integration.",
        lines: ["May need local authorization and", "integration."],
      },
    ],
  },
  {
    name: "Referrals and routing",
    intro: "Who accepts a referral, and how a notice differs from acceptance.",
    introLines: [
      "Who accepts a referral, and how a",
      "notice differs from acceptance.",
    ],
    points: [
      {
        text: "The receiving organization decides whether to accept.",
        lines: ["The receiving organization decides", "whether to accept."],
      },
      {
        text: "May need local authorization and integration.",
        lines: ["May need local authorization and", "integration."],
      },
    ],
  },
  {
    name: "Discharge and care transitions",
    intro: "Handoffs after a visit, and who holds the next step.",
    introLines: ["Handoffs after a visit, and who", "holds the next step."],
    points: [
      {
        text: "A notification never transfers clinical duty.",
        lines: ["A notification never transfers", "clinical duty."],
      },
      {
        text: "May need local authorization and integration.",
        lines: ["May need local authorization and", "integration."],
      },
    ],
  },
  {
    name: "EHR interoperability",
    intro: "How systems connect, while each source keeps its own records.",
    introLines: [
      "How systems connect, while each",
      "source keeps its own records.",
    ],
    points: [
      {
        text: "Source systems stay in charge of their data.",
        lines: ["Source systems stay in charge", "of their data."],
      },
      {
        text: "May need local authorization and integration.",
        lines: ["May need local authorization and", "integration."],
      },
    ],
  },
  {
    name: "Governance and rollout readiness",
    intro: "What must be reviewed before any rollout is considered.",
    introLines: [
      "What must be reviewed before any",
      "rollout is considered.",
    ],
    points: [
      {
        text: "Each review is owned by its own organization.",
        lines: ["Each review is owned by its", "own organization."],
      },
      {
        text: "May need local authorization and integration.",
        lines: ["May need local authorization and", "integration."],
      },
    ],
  },
];

export default function DiscussionTopics() {
  const [active, setActive] = useState(0);
  const topic = topics[active];

  return (
    <section
      id="capabilities"
      className={`w-full scroll-mt-[40px] bg-[linear-gradient(135deg,#08176d_0%,#2d2bc9_55%,#6f3fec_100%)] py-14 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} ${head}`}>
        <Eyebrow tone="light">Areas for institutional discussion</Eyebrow>
        <Title tone="light">
          <Copy
            text="Five topics, one rule: sources stay in charge"
            m={["Five topics, one rule:", "sources stay in charge"]}
          />
        </Title>
        <Lead tone="light" className="max-w-[626px]">
          <Copy
            text="Each topic separates intended architecture from what is available in a market. A capability may need local authorization and integration."
            d={[
              "Each topic separates intended architecture from what is available in a market. A",
              "capability may need local authorization and integration.",
            ]}
            m={[
              "Each topic separates intended architecture",
              "from what is available in a market. A capability",
              "may need local authorization and integration.",
            ]}
          />
        </Lead>

        <div className="grid w-full gap-[30px] pt-[18.8px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:pt-[18px]">
          <div
            role="tablist"
            aria-label="Discussion topics"
            className="flex flex-col gap-[12px] lg:self-start"
          >
            {topics.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  id={`topic-tab-${index}`}
                  aria-selected={selected}
                  aria-controls="topic-panel"
                  onClick={() => setActive(index)}
                  className={`flex min-h-[54px] w-full items-center rounded-[14px] px-[20px] py-[17px] text-left text-[16px] font-semibold leading-[normal] ${
                    selected
                      ? "bg-[#0023b3] text-white shadow-[0_0_0_2px_rgba(255,255,255,0.6)] lg:bg-[#b49cfa]"
                      : "bg-white text-[#1b1750]"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="topic-panel"
            aria-labelledby={`topic-tab-${active}`}
            className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_22px_50px_rgba(0,0,0,0.3)] lg:grid lg:min-h-[318px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
          >
            <div className="relative h-[180px] w-full overflow-hidden bg-[linear-gradient(132.48deg,#8e7bef_0%,#08176d_100%)] lg:h-auto lg:min-h-[260px]">
              <FigmaImage
                src="/institutional-team/topic-patient-access.webp"
                alt="A hospital ward with rows of beds"
                box={{ left: -15.18, width: 130.36 }}
                mbox={{ top: -10.94, height: 121.87 }}
                sizes="(min-width: 1024px) 420px, 90vw"
              />
            </div>
            <div className="flex flex-col items-start gap-[8.8px] px-[26px] pb-[32px] pt-[25px] lg:order-2">
              <h3
                className={`${fontPoppins} w-full pb-[0.7px] text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
              >
                {topic.name}
              </h3>
              <p className="w-full text-[16px] font-normal leading-[26.4px] text-[#575387]">
                <Copy text={topic.intro} d={topic.introLines} m={topic.introLines} />
              </p>
              <ul className="flex w-full list-disc flex-col gap-[6px] pl-[18px] pt-[4px] text-[16px] leading-[26.4px] text-[#575387] marker:text-[#575387]">
                {topic.points.map((point) => (
                  <li key={point.text} className="ml-[6px] pl-[0px]">
                    <Copy text={point.text} d={point.lines} m={point.lines} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

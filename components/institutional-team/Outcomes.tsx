import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, head, inner, sectionPad } from "./ui";

const outcomes: {
  title: string;
  text: string;
  d: string[];
  m: string[];
}[] = [
  {
    title: "Submitting",
    text: "The button is disabled and progress is announced. Please do not send twice.",
    d: ["The button is disabled and", "progress is announced. Please", "do not send twice."],
    m: ["The button is disabled and progress is", "announced. Please do not send twice."],
  },
  {
    title: "Received",
    text: "“Your institutional inquiry has been received. This does not establish a partnership or service availability.” Shown only after the message is safely stored.",
    d: [
      "“Your institutional inquiry has",
      "been received. This does not",
      "establish a partnership or service",
      "availability.” Shown only after the",
      "message is safely stored.",
    ],
    m: [
      "“Your institutional inquiry has been",
      "received. This does not establish a",
      "partnership or service availability.” Shown",
      "only after the message is safely stored.",
    ],
  },
  {
    title: "Duplicate",
    text: "We recognize a repeat and do not create a second request.",
    d: ["We recognize a repeat and do", "not create a second request."],
    m: ["We recognize a repeat and do not create a", "second request."],
  },
  {
    title: "Rate limit",
    text: "Too many attempts. Please wait and try again.",
    d: ["Too many attempts. Please wait", "and try again."],
    m: ["Too many attempts. Please wait and try", "again."],
  },
  {
    title: "Intake temporarily closed",
    text: "The channel is closed for now. The information on this page stays available.",
    d: ["The channel is closed for now.", "The information on this page", "stays available."],
    m: ["The channel is closed for now. The", "information on this page stays available."],
  },
  {
    title: "Timeout or service failure",
    text: "We could not confirm receipt, so nothing was submitted. Nothing is sent by email as a fallback.",
    d: ["We could not confirm receipt, so", "nothing was submitted. Nothing", "is sent by email as a fallback."],
    m: ["We could not confirm receipt, so nothing", "was submitted. Nothing is sent by email as", "a fallback."],
  },
  {
    title: "Blocked sensitive content",
    text: "The message looked like it contained health information, so it was not sent. Please remove it.",
    d: ["The message looked like it", "contained health information, so", "it was not sent. Please remove it."],
    m: ["The message looked like it contained health", "information, so it was not sent. Please", "remove it."],
  },
  {
    title: "Session expired",
    text: "Start again. Nothing you typed is shown to anyone else.",
    d: ["Start again. Nothing you typed is", "shown to anyone else."],
    m: ["Start again. Nothing you typed is shown to", "anyone else."],
  },
];

export default function Outcomes() {
  return (
    <section className={`w-full bg-white py-14 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} ${head}`}>
        <Eyebrow>Submit, confirmation and recovery</Eyebrow>
        <Title>
          <Copy
            text="Eight outcomes, each told honestly"
            m={["Eight outcomes, each", "told honestly"]}
          />
        </Title>
        <Lead className="max-w-[626px]">
          <Copy
            text="Receiving a message is never the same as a human reviewing it, and no response time is promised."
            d={[
              "Receiving a message is never the same as a human reviewing it, and no response",
              "time is promised.",
            ]}
            m={[
              "Receiving a message is never the same as a",
              "human reviewing it, and no response time is",
              "promised.",
            ]}
          />
        </Lead>

        <ol className="grid w-full gap-[20px] pt-[16.8px] sm:grid-cols-2 lg:grid-cols-4 lg:pt-[16px]">
          {outcomes.map((item, index) => (
            <li
              key={item.title}
              className="self-start overflow-hidden rounded-[20px] border border-solid border-[#e1dbf9] bg-white shadow-[0_10px_28px_rgba(27,23,80,0.1)]"
            >
              <div className="flex flex-col items-start gap-[6px] p-[22px]">
                <span
                  className={`${fontPoppins} flex w-[38px] items-center justify-center rounded-full bg-[#f1eefe] pb-[9.5px] pt-[8.5px] text-[14.4px] font-semibold leading-[normal] text-[#6d4fe6]`}
                >
                  {index + 1}
                </span>
                <h3
                  className={`${fontPoppins} w-full pb-[0.7px] pt-[3px] text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
                >
                  {item.title}
                </h3>
                <p className="w-full text-[14.7px] font-normal leading-[24.29px] text-[#575387]">
                  <Copy text={item.text} d={item.d} m={item.m} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

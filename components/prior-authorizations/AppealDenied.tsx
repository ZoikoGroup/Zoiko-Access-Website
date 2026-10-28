import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, glow, photoBg } from "./ui";

export default function AppealDenied() {
  return (
    <section
      id="appeal"
      className="w-full bg-[linear-gradient(130.43deg,#16245a_0%,#243b73_55%,#4b3fb8_100%)] lg:grid lg:h-[453.52px] lg:grid-cols-[3fr_2fr]"
    >
      <div
        className={`flex w-full flex-col items-start gap-3 px-4 py-12 sm:px-6 lg:py-[52px] lg:pl-[max(48px,calc((100vw-1344px)/2))] lg:pr-[70px]`}
        style={{
          backgroundImage: `${glow("610px 610px", "97.7% 8.3%")},linear-gradient(212.63deg,#0a1a4b 51.65%,#3550b8 107.31%)`,
        }}
      >
        <Eyebrow tone="light">Appeal &amp; reconsideration</Eyebrow>
        <Title tone="light">
          <Copy text="What happens if a request is denied?" d={["What happens if a", "request is denied?"]} />
        </Title>
        <p
          className={`${fontPoppins} w-full pb-[0.64px] pt-[3.1px] text-[18px] font-medium leading-[28px] text-white lg:text-[21px] lg:leading-[32.55px]`}
        >
          <Copy
            text="“Appeals, reconsiderations and peer review depend on the plan and applicable requirements. Follow the official notice and contact the organization responsible for the decision.”"
            d={[
              "“Appeals, reconsiderations and peer review",
              "depend on the plan and applicable",
              "requirements. Follow the official notice and",
              "contact the organization responsible for the",
              "decision.”",
            ]}
          />
        </p>
        <p className="text-[13.5px] leading-[21.6px] text-white/70">No universal appeal link, deadline or outcome is implied.</p>
      </div>

      <div
        className={`relative h-[300px] w-full overflow-hidden lg:h-[453.52px] ${photoBg}`}
        role="img"
        aria-label="Person reading and signing an official document"
      >
        <FigmaImage
          src="/prior-authorizations/appeal-signing-document.webp"
          box={{ left: -37.02, width: 174.04 }}
          sizes="(min-width: 1024px) 580px, 100vw"
        />
      </div>
    </section>
  );
}

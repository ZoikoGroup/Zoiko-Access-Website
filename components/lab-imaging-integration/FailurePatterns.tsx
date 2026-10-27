import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { Eyebrow, Title, card, cardText, cardTitle, inner, photoBg, sectionPad } from "./ui";

const std: ImageBox = { top: -12.22, height: 124.44 };

const patterns: {
  title: string;
  text: string;
  d?: string[];
  src: string;
  alt: string;
  box: ImageBox;
}[] = [
  { title: "Unmatched patient or order", text: "The source resolves identity before release.", src: "failure-unmatched-order", alt: "A hand holding a folded city map", box: std },
  { title: "Rejected payload", text: "The sender corrects and re-submits under its own process.", d: ["The sender corrects and re-submits under", "its own process."], src: "failure-rejected-payload", alt: "A white stepped building seen from below", box: std },
  { title: "Duplicate", text: "The receiver reconciles and the sender confirms.", d: ["The receiver reconciles and the sender", "confirms."], src: "failure-duplicate", alt: "Disassembled hard drives on a green surface", box: { top: -0.09, height: 103.94 } },
  { title: "Missing report", text: "Shown as unknown. The source states its own status.", d: ["Shown as unknown. The source states its", "own status."], src: "failure-missing-report", alt: "A tall skyscraper in a hazy city street", box: std },
  { title: "Corrupt image pointer", text: "The archive owner repairs or re-issues it.", src: "failure-corrupt-pointer", alt: "Dark rolling ocean under a heavy sky", box: std },
  { title: "Correction", text: "A new version supersedes the earlier one, with history kept.", d: ["A new version supersedes the earlier one,", "with history kept."], src: "failure-correction", alt: "A pencil erasing marks on pale paper", box: { left: -0.54, top: -0.18, width: 101.07, height: 107.73 } },
  { title: "Revoked access", text: "Access ends and the event is audited.", src: "failure-revoked-access", alt: "A padlock and chain on a wire fence", box: { left: -4.29, top: -8.33, width: 108.85, height: 116.31 } },
  { title: "Downtime", text: "Use the approved alternative route.", src: "failure-downtime", alt: "A misty road through a pine forest", box: std },
  { title: "Stale acknowledgments", text: "Shown as stale, never as success.", src: "failure-stale-acknowledgments", alt: "A stack of books on a white chair", box: { top: -14.29, height: 114.59 } },
];

export default function FailurePatterns() {
  return (
    <section className={`w-full bg-[#f4f8fd] py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.11px]">
          <Eyebrow>Exceptions and corrected records</Eyebrow>
          <Title size="md">
            <Copy
              text="Nine failure patterns, each with an accountable owner."
              d={["Nine failure patterns, each with an", "accountable owner."]}
            />
          </Title>
        </div>

        <ul className="grid w-full gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {patterns.map((item) => (
            <li
              key={item.title}
              className={`${card} p-[22px] drop-shadow-[0_10px_15px_rgba(60,50,160,0.06)] lg:h-[383px]`}
            >
              <div
                className={`relative aspect-[373/233] w-full overflow-hidden rounded-[10px] ${photoBg}`}
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/lab-imaging-integration/${item.src}.webp`}
                  box={item.box}
                  sizes="(min-width: 1024px) 380px, 90vw"
                />
              </div>
              <h3 className={`${cardTitle} pb-[8px] pt-[18px]`}>{item.title}</h3>
              <p className={cardText}>
                <Copy text={item.text} d={item.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Image from "next/image";
import { fontPoppins } from "./fonts";

const BASE = "/talk-to-support";

type LayerProps = {
  src: string;
  /** Position of the layer inside the illustration frame. */
  frame: string;
  /** Extra inset used by Figma for strokes that overflow the vector box. */
  stroke?: string;
};

function Layer({ src, frame, stroke }: LayerProps) {
  return (
    <div className={`absolute ${frame}`}>
      <div className={stroke ? `absolute ${stroke}` : "absolute inset-0"}>
        <Image
          src={`${BASE}/${src}`}
          alt=""
          fill
          sizes="325px"
          className="object-fill"
        />
      </div>
    </div>
  );
}

const optionLabel = `${fontPoppins} absolute whitespace-nowrap text-[7.824px] font-bold leading-[normal] text-[#5b49c8]`;

/** Mobile illustration: a help topic routed to guidance and an authorized owner. */
export default function SupportRouteIllustration() {
  return (
    <div className="relative aspect-[325/258.781] w-full overflow-clip">
      <Layer src="illustration-backdrop.svg" frame="inset-[4.65%_3.71%]" />
      <Layer
        src="illustration-connector.svg"
        frame="inset-[26.74%_38.89%_29.07%_29.63%]"
        stroke="inset-[-1.32%_0]"
      />
      <Layer
        src="illustration-question-card.svg"
        frame="inset-[32.56%_66.67%_34.88%_12.04%]"
        stroke="inset-[-0.36%_-0.43%]"
      />
      <Layer
        src="illustration-question-badge.svg"
        frame="inset-[37.91%_73.33%_51.86%_18.52%]"
      />
      <p
        className={`${fontPoppins} absolute inset-[38.84%_76.03%_51.89%_21.21%] whitespace-nowrap text-center text-[16.249px] font-normal leading-[normal] text-[#5b49c8]`}
      >
        ?
      </p>
      <Layer
        src="illustration-question-lines.svg"
        frame="inset-[54.19%_70.92%_41.86%_16.11%]"
        stroke="inset-[-20.59%_-5%]"
      />
      <Layer
        src="illustration-option-card.svg"
        frame="inset-[17.21%_12.97%_63.49%_60.18%]"
        stroke="inset-[-0.6%_-0.34%]"
      />
      <Layer
        src="illustration-option-card.svg"
        frame="inset-[39.3%_12.97%_41.4%_60.18%]"
        stroke="inset-[-0.6%_-0.34%]"
      />
      <Layer
        src="illustration-option-card.svg"
        frame="inset-[61.4%_12.97%_19.3%_60.18%]"
        stroke="inset-[-0.6%_-0.34%]"
      />
      <p className={`${optionLabel} inset-[25.58%_16.79%_69.78%_64.44%]`}>
        Read guidance
      </p>
      <p className={`${optionLabel} inset-[47.67%_17.4%_47.69%_64.44%]`}>
        Find the owner
      </p>
      <p className={`${optionLabel} inset-[69.77%_15.86%_25.6%_64.44%]`}>
        Use a safe route
      </p>
      <Layer
        src="illustration-hub.svg"
        frame="inset-[44.88%_50.56%_47.21%_43.15%]"
      />
      <Layer
        src="illustration-hub-check.svg"
        frame="bottom-1/2 left-[45.19%] right-[52.41%] top-[47.44%]"
        stroke="inset-[-13.64%_-11.54%_-20.93%_-11.54%]"
      />
    </div>
  );
}

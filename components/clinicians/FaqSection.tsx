import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";

interface Faq {
  question: string;
  answer?: string;
}

const faqs: readonly Faq[] = [
  { question: "Can anyone join?" },
  { question: "Does applying confirm verification or employment?" },
  { question: "What documents will I need?" },
  { question: "Are there fees?" },
  { question: "How long does review take?" },
  { question: "Is this a hiring or partnership route?" },
  { question: "Who makes clinical decisions?" },
] as const;

const rowClassName =
  "rounded-[18px] border border-solid border-[#d9d3f5] bg-white font-['Poppins',sans-serif] text-[16px] font-semibold leading-[25px] text-[#031974]";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-white px-5 pb-12 pt-12 sm:px-10 lg:px-[70px] lg:pb-[70px] lg:pt-[84px]"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:px-6">
        <div className="w-full lg:max-w-[708px]">
          <SectionHeader
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Straight answers"
          />

          <ul className="mt-3 flex flex-col gap-3">
            {faqs.map((faq) => (
              <li key={faq.question} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[14px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#031974]"
                />

                {faq.answer ? (
                  <details className={rowClassName}>
                    <summary className="flex min-h-[59px] cursor-pointer list-none items-center px-[30px] py-[17px] [&::-webkit-details-marker]:hidden">
                      {faq.question}
                    </summary>
                    <p className="px-[30px] pb-5 font-['Inter',sans-serif] text-[16px] font-normal leading-[27px] text-[#273444]">
                      {faq.answer}
                    </p>
                  </details>
                ) : (
                  <div
                    className={`flex min-h-[59px] items-center px-[30px] py-[17px] ${rowClassName}`}
                  >
                    {faq.question}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[441/588] w-full shrink-0 overflow-hidden rounded-[28px] sm:mx-auto sm:max-w-[441px] lg:mx-0 lg:w-[441px]">
          <Image
            src="/prof/15.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 441px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

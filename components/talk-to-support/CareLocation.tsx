import Link from "next/link";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins, fontSora } from "./fonts";

export default function CareLocation() {
  return (
    <section
      id="care-location"
      className="w-full scroll-mt-[24px] bg-gradient-to-b from-[#f6f3ff] to-[#ece7ff] px-[19.5px] pb-[56px] pt-[112px] lg:scroll-mt-[40px] lg:px-[70px] lg:py-[96px]"
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[26px] lg:max-w-[1300px]">
        <div className="flex w-full flex-col items-center gap-[44px] lg:flex-row lg:justify-center">
          <div className="flex w-full flex-col items-start gap-[13px] pb-[22px] lg:min-w-px lg:flex-1">
            <Eyebrow>Care location</Eyebrow>

            <SectionHeading mobileLines={1}>Where do you need help?</SectionHeading>

            <p className="w-full max-w-[686.38px] pt-[0.9px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86] lg:pt-[7.67px]">
              <Copy
                text="Choose the location related to the service you are trying to use. Language preference does not establish support availability."
                m={[
                  "Choose the location related to the service you",
                  "are trying to use. Language preference does",
                  "not establish support availability.",
                ]}
              />
            </p>

            <div className="w-full max-w-[728.17px] rounded-br-[14px] rounded-tr-[14px] border-l-4 border-solid border-[#8e7bef] bg-[#f4f2ff] px-[18px] pb-[13.7px] pt-[22.6px]">
              <p className="text-[15.2px] font-normal leading-[25px] text-[#5e5a86]">
                <strong className="font-bold text-[#241c59]">
                  Manual selection only.
                </strong>{" "}
                <Copy
                  text="No GPS or automatic entitlement is inferred. All locations remain informational because operational capability and current source evidence have not been supplied."
                  d={[
                    "No GPS or automatic entitlement is inferred. All",
                    "locations remain informational because operational capability and current",
                    "source evidence have not been supplied.",
                  ]}
                  m={[
                    "No GPS or",
                    "automatic entitlement is inferred. All",
                    "locations remain informational because",
                    "operational capability and current source",
                    "evidence have not been supplied.",
                  ]}
                />
              </p>
            </div>
          </div>

          <form className="w-full rounded-[22px] border border-solid border-[#e3def8] bg-white p-[22px] drop-shadow-[0px_18px_22px_rgba(36,28,89,0.14)] lg:min-w-px lg:flex-1 lg:p-[34px]">
            <div className="flex w-full flex-col items-start gap-[10px] pb-[35.03px]">
              <label
                htmlFor="talk-to-support-location"
                className={`${fontSora} w-full pb-px text-[16px] font-semibold leading-[normal] text-[#241c59]`}
              >
                Care location
              </label>

              <select
                id="talk-to-support-location"
                name="location"
                defaultValue=""
                className="block h-[52px] w-full appearance-none rounded-[12px] border border-solid border-[#b9b0ea] bg-white pl-[18px] pr-[30px] text-[16px] font-normal leading-[20px] text-[#241c59]"
              >
                <option value="" disabled>
                  Choose care location
                </option>
              </select>

              <p className="w-full max-w-[617.34px] pt-[1.385px] text-[14.4px] font-normal leading-[23.76px] text-[#5e5a86] lg:pt-[2px]">
                <Copy
                  text="Only verified market- and topic-specific channels can be offered."
                  m={[
                    "Only verified market- and topic-specific",
                    "channels can be offered.",
                  ]}
                />
              </p>

              <div className="flex w-full flex-col items-start gap-[12px] pt-[12px] lg:flex-row lg:flex-wrap">
                <Link
                  href="/locations-availability"
                  className="flex min-h-[48px] w-full items-center justify-center rounded-[12px] border-2 border-solid border-[#4267d5] bg-[#4267d5] px-[18px] py-[13.5px] text-center text-[14.4px] font-semibold leading-[normal] text-white lg:w-auto lg:px-[24px]"
                >
                  Review support availability
                </Link>
                <button
                  type="reset"
                  className="flex min-h-[48px] w-full items-center justify-center px-[18px] py-[14.5px] text-center text-[15.2px] font-semibold leading-[normal] text-[#4267d5] lg:w-auto lg:px-[4px]"
                >
                  Clear selection
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex w-full flex-col items-start gap-[30px] rounded-[22px] border border-dashed border-[#b9b0ea] bg-white p-[22px] lg:flex-row lg:items-center lg:p-[36px]">
          <div
            className="flex size-[70px] shrink-0 flex-col items-center justify-center rounded-[25px] bg-[linear-gradient(135deg,#ede6ff_0%,#d4c8fb_100%)] pb-[6.88px] pt-[5.12px] lg:size-[100px] lg:p-0"
            aria-hidden="true"
          >
            <span className="whitespace-nowrap text-center text-[35px] font-normal leading-[57.75px] text-[#5b49c8] lg:text-[50px] lg:leading-[82.5px]">
              ?
            </span>
          </div>

          <div className="flex w-full flex-col items-start gap-[10.5px] pt-[14px] lg:min-w-px lg:flex-1">
            <span className="flex items-start whitespace-nowrap rounded-full bg-[#e8e8f8] px-[12px] py-[3px] text-[12.5px] font-semibold leading-[20.59px] text-[#5b49c8]">
              No direct channel connected
            </span>

            <h3
              className={`${fontPoppins} w-full pt-[4.54px] text-[19.2px] font-bold leading-[22px] text-[#241c59]`}
            >
              <Copy
                text="Direct support is not currently available here."
                m={["Direct support is not currently", "available here."]}
              />
            </h3>

            <p className="w-full max-w-[686.38px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86]">
              <Copy
                text="You can still read general guidance. For existing treatment, appointments, or referrals, contact the responsible healthcare organization through its official channels."
                d={[
                  "You can still read general guidance. For existing treatment, appointments, or referrals,",
                  "contact the responsible healthcare organization through its official channels.",
                ]}
                m={[
                  "You can still read general guidance. For",
                  "existing treatment, appointments, or",
                  "referrals, contact the responsible",
                  "healthcare organization through its",
                  "official channels.",
                ]}
              />
            </p>

            <div className="flex h-[59.51px] w-full flex-wrap items-start gap-y-[12px] pt-[11.51px]">
              <Link
                href="/care-pathways"
                className="flex min-h-[48px] max-w-[305px] items-center justify-center self-stretch rounded-[12px] border-2 border-solid border-[#4267d5] bg-white px-[18px] py-[12px] text-center text-[16px] font-semibold leading-[normal] text-[#4267d5] lg:max-w-none lg:px-[24px] lg:py-0"
              >
                Explore care pathways
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

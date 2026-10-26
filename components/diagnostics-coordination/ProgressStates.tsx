import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, head, inner, sectionPad } from "./ui";

const states = [
  ["Scheduled", "The provider has set a service for a later time.", "Diagnostic provider"],
  ["In progress", "Collection or examination has started.", "Diagnostic provider"],
  ["Completed", "Collection or examination is done. This is not a report.", "Diagnostic provider"],
  ["Canceled", "The service will not go ahead.", "Provider or ordering clinician"],
  ["Unable to complete", "Collection or examination could not be done.", "Diagnostic provider"],
  ["Rescheduled", "A new service time has been set by the provider.", "Diagnostic provider"],
];

const heading = `${fontPoppins} border-b border-solid border-[#dcd6f2] bg-[#ebe9fb] px-[18px] pb-[15.27px] pt-[14px] text-left text-[14.4px] font-bold leading-[23.76px] text-[#243b73]`;

export default function ProgressStates() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className={head}>
          <Eyebrow>Collection and examination progress</Eyebrow>
          <Title className="lg:pt-[2.31px]">
            <Copy
              text="Six illustrative states, each tied to a source."
              d={["Six illustrative states, each tied to a", "source."]}
            />
          </Title>
          <Lede className="lg:pb-[0.55px]">
            <Copy
              text="Examples only. Every state needs evidence and a last-confirmed time from the source, and none is shown as live progress."
              d={[
                "Examples only. Every state needs evidence and a last-confirmed time from the",
                "source, and none is shown as live progress.",
              ]}
            />
          </Lede>
        </div>

        <div className="w-full overflow-x-auto rounded-[14px] border border-solid border-[#dcd6f2] bg-white">
          <table className="w-full min-w-[680px] table-fixed border-separate border-spacing-0 text-left">
            <colgroup>
              <col style={{ width: "21.25%" }} />
              <col style={{ width: "49.88%" }} />
              <col style={{ width: "28.87%" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className={heading}>
                  Illustrative state
                </th>
                <th scope="col" className={heading}>
                  What it means
                </th>
                <th scope="col" className={heading}>
                  Owner
                </th>
              </tr>
            </thead>
            <tbody>
              {states.map(([state, meaning, owner], index) => {
                const border =
                  index < states.length - 1
                    ? "border-b border-solid border-[#dcd6f2]"
                    : "";
                return (
                  <tr key={state}>
                    <th
                      scope="row"
                      className={`px-[18px] py-[15px] text-left text-[14.4px] font-semibold leading-[23.76px] text-[#243b73] ${border}`}
                    >
                      {state}
                    </th>
                    <td
                      className={`px-[18px] py-[15px] text-[14.4px] font-normal leading-[23.76px] text-[#273444] ${border}`}
                    >
                      {meaning}
                    </td>
                    <td
                      className={`px-[18px] py-[15px] text-[14.4px] font-normal leading-[23.76px] text-[#273444] ${border}`}
                    >
                      {owner}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

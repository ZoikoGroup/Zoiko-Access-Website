import React from "react";

interface ShortcutRow {
  keys: string[];
  whatItDoes: string;
}

const keyboardData: ShortcutRow[] = [
  {
    keys: ["Tab"],
    whatItDoes: "Move to the next link or control",
  },
  {
    keys: ["Shift", "Tab"],
    whatItDoes: "Move back",
  },
  {
    keys: ["Enter"],
    whatItDoes: "Follow a link or press a button",
  },
  {
    keys: ["Space"],
    whatItDoes: "Open a question or toggle a choice",
  },
  {
    keys: ["Esc"],
    whatItDoes: "Close a menu",
  },
];

export default function KeyboardGuide() {
  return (
    <div className="bg-white font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#635BFF]"></span>
            <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
              KEYBOARD GUIDE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-4 leading-[1.15]">
            Move around without a mouse.
          </h1>

          {/* Description */}
          <p className="text-[#425466] text-base md:text-lg leading-relaxed">
            Standard keys work throughout the site.
          </p>
        </div>

        {/* Right Column Table Card */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E6EBF1] overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#16245A] text-white text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-8 w-1/3">Key</th>
                    <th className="py-4 px-8 w-2/3">What it does</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F4F8] text-sm text-[#425466]">
                  {keyboardData.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#F8FAFC] transition-colors"
                    >
                      {/* Key Badges Column */}
                      <td className="py-4 px-8 align-middle">
                        <div className="flex items-center gap-2 flex-wrap">
                          {row.keys.map((key, kIdx) => (
                            <React.Fragment key={kIdx}>
                              {kIdx > 0 && (
                                <span className="text-[#697386] font-medium text-xs">
                                  +
                                </span>
                              )}
                              <kbd className="inline-block bg-[#F8FAFC] border border-[#E6EBF1] shadow-[0_2px_4px_rgba(0,0,0,0.04)] text-[#0A2540] font-semibold text-xs px-3 py-1.5 rounded-lg min-w-[40px] text-center">
                                {key}
                              </kbd>
                            </React.Fragment>
                          ))}
                        </div>
                      </td>

                      {/* What it does Column */}
                      <td className="py-4 px-8 align-middle">
                        <a href="#" className="hover:underline text-[#425466]">
                          {row.whatItDoes}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

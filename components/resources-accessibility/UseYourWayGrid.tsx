import React from "react";
import Image from "next/image";

const kbdClass =
  "bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 font-mono text-[10px] text-slate-700";

export const UseYourWayGrid: React.FC = () => {
  return (
    <section
      id="how-to-use"
      className="w-full bg-white py-16 md:py-20 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              HOW TO USE THIS SITE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Use Zoiko Access <span className="text-[#7c5cff]">your way</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Built for keyboards, magnification, screen readers and text-first reading.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 01: Keyboard */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/10] bg-slate-900">
              <Image
                src="/resources-accessibility/ara4.jpg"
                alt="Keyboard navigation on laptop"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <span className="w-8 h-8 rounded-full bg-[#6d4aff] text-white border-2 border-white text-[11px] font-bold flex items-center justify-center shadow-md absolute -bottom-4 right-4 z-10">
                01
              </span>
            </div>
            <div className="p-5 pt-6 flex-1">
              <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-2">
                Keyboard
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Move with <kbd className={kbdClass}>Tab</kbd> and{" "}
                <kbd className={kbdClass}>Shift</kbd> +{" "}
                <kbd className={kbdClass}>Tab</kbd>. Open with{" "}
                <kbd className={kbdClass}>Enter</kbd> or{" "}
                <kbd className={kbdClass}>Space</kbd>. Close menus with{" "}
                <kbd className={kbdClass}>Esc</kbd>.
              </p>
            </div>
          </div>

          {/* Card 02: Zoom & magnification */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/10] bg-slate-100">
              <Image
                src="/resources-accessibility/ara5.jpg"
                alt="Hands reaching across columns"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <span className="w-8 h-8 rounded-full bg-[#6d4aff] text-white border-2 border-white text-[11px] font-bold flex items-center justify-center shadow-md absolute -bottom-4 right-4 z-10">
                02
              </span>
            </div>
            <div className="p-5 pt-6 flex-1">
              <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-2">
                Zoom &amp; magnification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use <kbd className={kbdClass}>Ctrl</kbd> /{" "}
                <kbd className={kbdClass}>⌘</kbd> +{" "}
                <kbd className={kbdClass}>+</kbd>. Pages are designed to reflow at 200–400% without sideways scrolling.
              </p>
            </div>
          </div>

          {/* Card 03: Screen readers */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/10] bg-slate-100">
              <Image
                src="/resources-accessibility/ara6.jpg"
                alt="Engineers working with assistive technology"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <span className="w-8 h-8 rounded-full bg-[#6d4aff] text-white border-2 border-white text-[11px] font-bold flex items-center justify-center shadow-md absolute -bottom-4 right-4 z-10">
                03
              </span>
            </div>
            <div className="p-5 pt-6 flex-1">
              <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-2">
                Screen readers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Headings, landmarks and labelled controls let you jump by section. Status changes are announced.
              </p>
            </div>
          </div>

          {/* Card 04: Text first */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/10] bg-slate-100">
              <Image
                src="/resources-accessibility/ara7.jpg"
                alt="Woman portrait representing accessible communication"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top"
              />
              <span className="w-8 h-8 rounded-full bg-[#6d4aff] text-white border-2 border-white text-[11px] font-bold flex items-center justify-center shadow-md absolute -bottom-4 right-4 z-10">
                04
              </span>
            </div>
            <div className="p-5 pt-6 flex-1">
              <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-2">
                Text first
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Information is written as text. Any future video needs captions and a transcript before it is published.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

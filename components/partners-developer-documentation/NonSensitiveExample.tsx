"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export const NonSensitiveExample: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const jsonCode = `{
  "event_id": "evt_example_0001",
  "type": "example.record.updated",
  "source": "source_system_example",
  "occurred_at": "YYYY-MM-DDTHH:mm:ssZ",
  "scope": "purpose_example",
  "data": { "reference": "ref_example" } // reference only
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#f8f6ff] via-[#edf0fd] to-[#e4e7fa] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              EXAMPLES &amp; CODE SAMPLES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            A non-sensitive example.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            A placeholder event shape to explain structure. It is not a live schema and contains no health data.
          </p>
        </div>

        {/* Code Card Container */}
        <div className="rounded-2xl bg-[#0b1227] border border-slate-800 shadow-xl overflow-hidden mb-6">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#111c38] border-b border-slate-800/80">
            <span className="text-xs font-mono font-medium text-slate-300">
              example.json
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Code Body */}
          <pre className="p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
            <code>
              <span className="text-slate-400">{"{"}</span>
              {"\n  "}
              <span className="text-[#93c5fd]">&quot;event_id&quot;</span>: <span className="text-[#86efac]">&quot;evt_example_0001&quot;</span>,
              {"\n  "}
              <span className="text-[#93c5fd]">&quot;type&quot;</span>: <span className="text-[#86efac]">&quot;example.record.updated&quot;</span>,
              {"\n  "}
              <span className="text-[#93c5fd]">&quot;source&quot;</span>: <span className="text-[#86efac]">&quot;source_system_example&quot;</span>,
              {"\n  "}
              <span className="text-[#93c5fd]">&quot;occurred_at&quot;</span>: <span className="text-[#86efac]">&quot;YYYY-MM-DDTHH:mm:ssZ&quot;</span>,
              {"\n  "}
              <span className="text-[#93c5fd]">&quot;scope&quot;</span>: <span className="text-[#86efac]">&quot;purpose_example&quot;</span>,
              {"\n  "}
              <span className="text-[#93c5fd]">&quot;data&quot;</span>: <span className="text-slate-400">{"{"}</span> <span className="text-[#93c5fd]">&quot;reference&quot;</span>: <span className="text-[#86efac]">&quot;ref_example&quot;</span> <span className="text-slate-400">{"}"}</span> <span className="text-slate-500">// reference only</span>
              {"\n"}
              <span className="text-slate-400">{"}"}</span>
            </code>
          </pre>
        </div>

        {/* 3 Pills at Bottom */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#6366f1] border border-purple-200/80 text-[11px] sm:text-xs font-semibold">
            Tested version: none — illustrative
          </span>
          <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#6366f1] border border-purple-200/80 text-[11px] sm:text-xs font-semibold">
            Data: placeholders only
          </span>
          <span className="inline-block px-3 py-1 rounded-full bg-purple-50 text-[#6366f1] border border-purple-200/80 text-[11px] sm:text-xs font-semibold">
            Status: not a live schema
          </span>
        </div>
      </div>
    </section>
  );
};

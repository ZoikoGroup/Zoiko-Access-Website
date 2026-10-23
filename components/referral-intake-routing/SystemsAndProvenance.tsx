"use client";

import { motion } from "framer-motion";

interface ProvenanceNode {
  title: string;
  desc: string;
}

const nodes: ProvenanceNode[] = [
  {
    title: "Sending EHR or service",
    desc: "Record stays with the sender.",
  },
  {
    title: "Integration adapter",
    desc: "Only where governed standards are actually supported.",
  },
  {
    title: "Authorized receiving system",
    desc: "Record stays with the receiver.",
  },
  {
    title: "Evidence references",
    desc: "Source ids, versions and corrections.",
  },
];

export default function SystemsAndProvenance() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col text-center items-center"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            SYSTEMS AND PROVENANCE
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Participating organizations keep their own records
          </h2>
        </motion.div>

        {/* 4 Connected Nodes with Arrows */}
        <div className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:justify-between">
          {nodes.map((node, idx) => (
            <div key={node.title} className="flex flex-1 flex-col items-center lg:flex-row w-full">
              {/* Card Frame */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex w-full flex-col justify-center rounded-[18px] border border-[#D9D3F5] bg-white p-5 shadow-[0px_10px_20px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-md min-h-[110px]"
              >
                <h3 className="text-[16px] font-semibold text-[#031974]">
                  {node.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] font-normal leading-[1.6] text-[#273444]">
                  {node.desc}
                </p>
              </motion.div>

              {/* Arrow separator (horizontal on desktop, vertical on mobile) */}
              {idx < nodes.length - 1 && (
                <div className="flex items-center justify-center py-2 lg:px-3 lg:py-0">
                  <span className="text-[22px] font-bold text-[#7B3FF2] select-none rotate-90 lg:rotate-0">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

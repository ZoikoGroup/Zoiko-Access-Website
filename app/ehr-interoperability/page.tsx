import type { Metadata } from "next";
import {
  EhrHero,
  IntegrationPosture,
  ArchitectureLanes,
  InteropPatterns,
  OwnershipTable,
  SecurityConsent,
  ReceiptStatuses,
  IntegrationLifecycle,
  ReadinessChecklist,
  LimitationsNotice,
  FourReaders,
  EhrFaq,
  EhrCta,
} from "@/components/ehr-interoperability";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/ehr-interoperability/fonts";

export const metadata: Metadata = {
  title: "EHR Interoperability | Zoiko Access",
  description:
    "How Zoiko Access is designed to help authorized healthcare organizations coordinate defined steps between independent systems, with clear clinical boundaries.",
};

export default function EhrInteroperabilityPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <EhrHero />
      <IntegrationPosture />
      <ArchitectureLanes />
      <InteropPatterns />
      <OwnershipTable />
      <SecurityConsent />
      <ReceiptStatuses />
      <IntegrationLifecycle />
      <ReadinessChecklist />
      <LimitationsNotice />
      <FourReaders />
      <EhrFaq />
      <EhrCta />
    </main>
  );
}

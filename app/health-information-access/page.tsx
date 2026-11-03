import type { Metadata } from "next";
import {
  HealthInfoHero,
  EveryRecordHasOwner,
  FiveChecks,
  ClearBoundaries,
  AccessScenarios,
  KeyTerms,
  AvailabilityByLocation,
  HealthInfoFaq,
  ControlComesFirst,
} from "@/components/health-information-access";

export const metadata: Metadata = {
  title: "Health information access | Zoiko Access",
  description:
    "How Zoiko Access supports authorized access to health information, source by source.",
};

export default function HealthInformationAccessPage() {
  return (
    <main>
      <HealthInfoHero />
      <EveryRecordHasOwner />
      <FiveChecks />
      <ClearBoundaries />
      <AccessScenarios />
      <KeyTerms />
      <AvailabilityByLocation />
      <HealthInfoFaq />
      <ControlComesFirst />
    </main>
  );
}

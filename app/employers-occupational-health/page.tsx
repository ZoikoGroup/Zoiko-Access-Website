import type { Metadata } from "next";
import {
  EmployersHero,
  QuickLinkCards,
  ThreeOutcomes,
  FourRoles,
  ThreePathways,
  EmployeePermissions,
  AggregateInsight,
  RulesByLocation,
  SixStages,
  OhAccountability,
  Safeguards,
  EligibilityGeography,
  EmployersFaq,
  NextStepCta,
} from "@/components/employers-occupational-health";

export const metadata: Metadata = {
  title: "Employers & Occupational Health | Zoiko Access",
  description:
    "How workplace and occupational-health programs could work: roles, aggregate-only reporting, employee permissions and accountable handoffs.",
};

export default function EmployersOccupationalHealthPage() {
  return (
    <main>
      <EmployersHero />
      <QuickLinkCards />
      <ThreeOutcomes />
      <FourRoles />
      <ThreePathways />
      <EmployeePermissions />
      <AggregateInsight />
      <RulesByLocation />
      <SixStages />
      <OhAccountability />
      <Safeguards />
      <EligibilityGeography />
      <EmployersFaq />
      <NextStepCta />
    </main>
  );
}

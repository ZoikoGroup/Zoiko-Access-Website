import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  NetworksHero,
  RoleChooser,
  IndependentRecords,
  CoordinationHandoffs,
  NetworkOperatingModel,
  HandoffStatus,
  SourceOfRecord,
  ExchangeDefinitions,
  AccountableRoles,
  SecurityResiliency,
  NetworkMaturity,
  EvaluationCoverage,
  NetworksFaq,
  NextSteps,
  ContentGovernance,
} from "@/components/organizations-health-systems-regional-networks";

export const metadata: Metadata = {
  title: "Health Systems & Regional Networks | Zoiko Access",
  description:
    "How health systems and regional networks can evaluate accountable coordination across independent care organizations, with governed information exchange and clear clinical ownership.",
};

export default function HealthSystemsRegionalNetworksPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <NetworksHero />
      <RoleChooser />
      <IndependentRecords />
      <CoordinationHandoffs />
      <NetworkOperatingModel />
      <HandoffStatus />
      <SourceOfRecord />
      <ExchangeDefinitions />
      <AccountableRoles />
      <SecurityResiliency />
      <NetworkMaturity />
      <EvaluationCoverage />
      <NetworksFaq />
      <NextSteps />
      <ContentGovernance />
    </main>
  );
}

import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  IntegratorsHero,
  WorkingParties,
  RoleMatrix,
  DeliveryLifecycle,
  ArchitectureSource,
  StatusSemantics,
  SecurityPrivacy,
  SafetyRoutes,
  QualificationEvidence,
  RegionalReadiness,
  IntegratorsFaq,
  KeepExploring,
  PartnerPathway,
} from "@/components/partners-system-integrators";

export const metadata: Metadata = {
  title: "System Integrators | Zoiko Access",
  description:
    "How implementation teams may assess, connect, validate and maintain authorized healthcare workflows while institutions and licensed providers keep their own responsibilities.",
};

export default function SystemIntegratorsPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <IntegratorsHero />
      <WorkingParties />
      <RoleMatrix />
      <DeliveryLifecycle />
      <ArchitectureSource />
      <StatusSemantics />
      <SecurityPrivacy />
      <SafetyRoutes />
      <QualificationEvidence />
      <RegionalReadiness />
      <IntegratorsFaq />
      <KeepExploring />
      <PartnerPathway />
    </main>
  );
}

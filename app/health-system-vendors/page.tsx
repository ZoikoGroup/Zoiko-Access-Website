import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  VendorsHero,
  ReaderTabs,
  CategoryMatrix,
  AuthorityMap,
  IntegrationLifecycle,
  InformationExchange,
  PrivacyBoundaries,
  SecurityChecklist,
  VendorQualification,
  CoverageStatus,
  DecisionRoutes,
  VendorsFaq,
  SpecialistPages,
} from "@/components/health-system-vendors";

export const metadata: Metadata = {
  title: "Health System Vendors | Zoiko Access",
  description:
    "How EHR, diagnostics, imaging, pharmacy, payer and scheduling systems can be evaluated for responsible coordination through accountable partnerships.",
};

export default function HealthSystemVendorsPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <VendorsHero />
      <ReaderTabs />
      <CategoryMatrix />
      <AuthorityMap />
      <IntegrationLifecycle />
      <InformationExchange />
      <PrivacyBoundaries />
      <SecurityChecklist />
      <VendorQualification />
      <CoverageStatus />
      <DecisionRoutes />
      <VendorsFaq />
      <SpecialistPages />
    </main>
  );
}

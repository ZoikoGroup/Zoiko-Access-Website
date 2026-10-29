import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  ForLaboratoriesHero,
  RolesAndResponsibilities,
  OrderToResultJourney,
  LifecycleStatuses,
  SystemBoundaries,
  TrustPrivacyPermissions,
  ExceptionsAndEscalation,
  PartnerReadiness,
  SupportingPathways,
  LaboratoriesFaqAccordion,
  LaboratoriesCta,
} from "@/components/for-laboratories";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "For Laboratories | Labs & Pharmacies | Zoiko Access",
  description:
    "Information and coordination for authorized laboratory orders and results. Clear authority boundaries, independent records, and governed handoffs.",
};

export default function ForLaboratoriesPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <ForLaboratoriesHero />
      <RolesAndResponsibilities />
      <OrderToResultJourney />
      <LifecycleStatuses />
      <SystemBoundaries />
      <TrustPrivacyPermissions />
      <ExceptionsAndEscalation />
      <PartnerReadiness />
      <SupportingPathways />
      <LaboratoriesFaqAccordion />
      <LaboratoriesCta />
    </main>
  );
}

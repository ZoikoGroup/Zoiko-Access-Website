import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import {
  PrescriptionRoutingHero,
  RolesInPathway,
  RoutingSteps,
  StatusBoundaries,
  ConsentDelegation,
  CareLocationMarket,
  ExceptionsRecovery,
  SecurityInteroperability,
  ScopeBoundaryCrossLinks,
  PrescriptionRoutingFaq,
  PrescriptionRoutingCta,
} from "@/components/prescription-routing";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prescription Routing | Zoiko Access",
  description:
    "Learn how prescription routing works across licensed prescribers, authorized transport, and receiving pharmacies. Understand roles, boundaries, proof statuses, and responsible integration.",
};

export default function PrescriptionRoutingPage() {
  return (
    <main className={`${poppins.variable} ${inter.variable} font-inter w-full min-h-screen bg-white`}>
      {/* 1. Hero: How Prescription Routing Works */}
      <PrescriptionRoutingHero />

      {/* 2. Roles in the pathway: Four roles. Each one owns something different. */}
      <RolesInPathway />

      {/* 3. Conceptual routing journey: Six steps. Dispensing is its own decision. */}
      <RoutingSteps />

      {/* 4. Status legend and proof boundaries: Each status has an owner, a source and evidence. */}
      <StatusBoundaries />

      {/* 5. Consent and delegation: Privacy and appropriate permissions. */}
      <ConsentDelegation />

      {/* 6. Care location: Pharmacy and market selection */}
      <CareLocationMarket />

      {/* 7. Exceptions and recovery: If routing does not go to plan. */}
      <ExceptionsRecovery />

      {/* 8. Security and interoperability: Designed for accountable integration. */}
      <SecurityInteroperability />

      {/* 9. Scope boundary cross-links: Explore related information. */}
      <ScopeBoundaryCrossLinks />

      {/* 10. Frequently asked questions: Clear answers, with clear limits. */}
      <PrescriptionRoutingFaq />

      {/* 11. Final CTA: Explore a responsible integration conversation. */}
      <PrescriptionRoutingCta />
    </main>
  );
}

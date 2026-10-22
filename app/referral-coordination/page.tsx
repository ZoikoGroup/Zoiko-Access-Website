import type { Metadata } from "next";
import { Inter, Outfit, Poppins } from "next/font/google";
import {
  ReferralCoordinationHero,
  ChooseYourView,
  ReferralJourneyStages,
  OwnershipMatrix,
  EvidenceStatuses,
  ExceptionsEscalation,
  PermissionsInteroperability,
  ClinicalSafetyLimitations,
  LocalAvailability,
  InstitutionalParticipation,
  ReferralCoordinationFaq,
  RelatedRoutes,
  ReferralNextStepCta,
} from "@/components/referral-coordination";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Referral Coordination | Zoiko Access",
  description:
    "Referral coordination, explained. A healthcare referral connects a referring professional or organization with a receiving service for evaluation or another authorized next step.",
};

export default function ReferralCoordinationPage() {
  return (
    <main
      className={`${inter.variable} ${outfit.variable} ${poppins.variable} font-sans`}
      style={{
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <ReferralCoordinationHero />
      <ChooseYourView />
      <ReferralJourneyStages />
      <OwnershipMatrix />
      <EvidenceStatuses />
      <ExceptionsEscalation />
      <PermissionsInteroperability />
      <ClinicalSafetyLimitations />
      <LocalAvailability />
      <InstitutionalParticipation />
      <ReferralCoordinationFaq />
      <RelatedRoutes />
      <ReferralNextStepCta />
    </main>
  );
}

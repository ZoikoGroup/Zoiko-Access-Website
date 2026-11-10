import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  PartnerOnboardingHero,
  PickYourRoleSection,
  ThreeOnboardingPages,
  SevenQualificationSteps,
  ApplicationDataDictionary,
  CertificationFrameworkDomains,
  DocumentationAvailabilitySection,
  DecisionEscalationStatuses,
  LaunchRenewalOrbit,
  GroundRulesSection,
  FourWordsPlainLanguage,
  TrustAndSafetyBanner,
  OnboardingFaqAndRelated,
  AssessmentStartCtaBanner,
} from "@/components/partners-group-partner-onboarding";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Partner Onboarding | Partners & Developers | Zoiko Access",
  description:
    "The steps and prerequisites for partner assessment, explained without implying admission, certification, technical access or approved contracting.",
};

export default function PartnersGroupPartnerOnboardingPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <PartnerOnboardingHero />
      <PickYourRoleSection />
      <ThreeOnboardingPages />
      <SevenQualificationSteps />
      <ApplicationDataDictionary />
      <CertificationFrameworkDomains />
      <DocumentationAvailabilitySection />
      <DecisionEscalationStatuses />
      <LaunchRenewalOrbit />
      <GroundRulesSection />
      <FourWordsPlainLanguage />
      <TrustAndSafetyBanner />
      <OnboardingFaqAndRelated />
      <AssessmentStartCtaBanner />
    </main>
  );
}

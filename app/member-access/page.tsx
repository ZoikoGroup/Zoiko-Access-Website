import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import {
  HeroSoftCollage,
  PlanCountryFit,
  MemberAudiences,
  MemberJourneySteps,
  BenefitGlossary,
  SeparateDecisions,
  DelegationAuthority,
  MessagesAndStatus,
  PrivacyAccountability,
  ConceptIntegration,
  MemberAccessFaq,
  RelatedPathways,
  MemberAccessCta,
} from "@/components/member-access";

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
  title: "Member Access | Zoiko Access",
  description:
    "Explore how a health plan may guide members through benefits information, approved service pathways, and next steps with clear responsibilities and verified authority.",
};

export default function MemberAccessPage() {
  return (
    <main
      className={`${poppins.variable} ${inter.variable} font-inter w-full min-h-screen bg-white`}
    >
      {/* 1. Hero: Soft human photo collage with clear responsibilities */}
      <HeroSoftCollage />

      {/* 2. Coverage & country fit banner */}
      <PlanCountryFit />

      {/* 3. Three audiences: Plan members, Caregivers, Payer organizations */}
      <MemberAudiences />

      {/* 4. Journey: Four steps, each with a clear owner */}
      <MemberJourneySteps />

      {/* 5. Glossary: Six words worth knowing */}
      <BenefitGlossary />

      {/* 6. Separate decisions: There's no single "approved" */}
      <SeparateDecisions />

      {/* 7. Delegation & representation: Helping someone needs verified authority */}
      <DelegationAuthority />

      {/* 8. Messages & status: Every update should say who sent it */}
      <MessagesAndStatus />

      {/* 9. Privacy & accountability: Everyone keeps their own role */}
      <PrivacyAccountability />

      {/* 10. Concept integration: How the pieces could connect */}
      <ConceptIntegration />

      {/* 11. FAQ: Questions members ask */}
      <MemberAccessFaq />

      {/* 12. Related pages / pathways */}
      <RelatedPathways />

      {/* 13. Final CTA: Explore a governed member-access approach */}
      <MemberAccessCta />
    </main>
  );
}

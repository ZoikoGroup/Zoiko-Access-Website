import type { Metadata } from "next";
import { Inter, Outfit, Poppins } from "next/font/google";
import {
  CareTransitionsHero,
  ScopeAvailabilityBanner,
  WhatIsCareTransition,
  TransitionJourney,
  StatusGlossary,
  AccountabilityMap,
  TransitionScenarios,
  ExceptionsEscalation,
  BoundariesSection,
  TrustClinicalSafety,
  CareTransitionsFaq,
  RelatedClinicalPathways,
  NextStepCta,
} from "@/components/care-transitions";

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
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Care Transitions | Zoiko Access",
  description:
    "Clearer care transitions and accountable next steps. Zoiko Access is built so each party knows who holds responsibility, what has been shared and what has to happen next.",
};

export default function CareTransitionsPage() {
  return (
    <main
      className={`${inter.variable} ${outfit.variable} ${poppins.variable} font-sans`}
      style={{
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <CareTransitionsHero />
      <ScopeAvailabilityBanner />
      <WhatIsCareTransition />
      <TransitionJourney />
      <StatusGlossary />
      <AccountabilityMap />
      <TransitionScenarios />
      <ExceptionsEscalation />
      <BoundariesSection />
      <TrustClinicalSafety />
      <CareTransitionsFaq />
      <RelatedClinicalPathways />
      <NextStepCta />
    </main>
  );
}

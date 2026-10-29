import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import {
  HeroClaimsRemittance,
  PlainLanguageScope,
  LifecycleMap,
  ResponsibilityMatrix,
  ClaimsStatusExplainer,
  DocumentDistinctions,
  ExceptionsCorrections,
  ExampleSequence,
  ProvenancePrivacyBento,
  ClaimsFaq,
  AvailabilityNotice,
  RelatedPathways,
  ClaimsRemittanceCta,
} from "@/components/claims-remittance";

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
  title: "Claims & Remittance | Zoiko Access",
  description:
    "Learn how healthcare claim information moves between authorized organizations, how a payer issues a determination, and why remittance advice is not the same as completed payment.",
};

export default function ClaimsRemittancePage() {
  return (
    <main
      className={`${poppins.variable} ${inter.variable} font-inter w-full min-h-screen bg-white`}
    >
      {/* 1. Hero: Centered headline + bento */}
      <HeroClaimsRemittance />

      {/* 2. Scope: Coordination of information. Not of money */}
      <PlainLanguageScope />

      {/* 3. Lifecycle map: Six steps, none means the same thing */}
      <LifecycleMap />

      {/* 4. Matrix: One ledger of responsibility */}
      <ResponsibilityMatrix />

      {/* 5. Status explainer: Read every status literally */}
      <ClaimsStatusExplainer />

      {/* 6. Documents: Four documents. Four different truths */}
      <DocumentDistinctions />

      {/* 7. Exceptions: When records don't line up */}
      <ExceptionsCorrections />

      {/* 8. Governed example transaction: An illustrative sequence */}
      <ExampleSequence />

      {/* 9. Provenance & privacy bento: Every record traceable. Every view limited */}
      <ProvenancePrivacyBento />

      {/* 10. FAQ: Questions & direct answers */}
      <ClaimsFaq />

      {/* 11. Regional availability notice banner */}
      <AvailabilityNotice />

      {/* 12. Related pathways: Where to go next */}
      <RelatedPathways />

      {/* 13. Final CTA: Explore payer coordination */}
      <ClaimsRemittanceCta />
    </main>
  );
}

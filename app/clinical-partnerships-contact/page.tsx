import type { Metadata } from "next";
import {
  PartnershipsHero,
  WhereItGoes,
  PartnershipsEligibility,
  WhatItCovers,
  WhatHappensNext,
  LocationSelect,
  ContactFormSection,
  OtherRoutes,
  TrustSection,
  PartnershipsFaq,
  PartnershipsBottomCta,
} from "@/components/clinical-partnerships-contact";

export const metadata: Metadata = {
  title: "Clinical Partnerships Contact | Zoiko Access",
  description:
    "Connect with the Zoiko Access clinical partnerships team to explore appropriate care coordination between independent healthcare organizations where authorized.",
};

export default function ClinicalPartnershipsContactPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero */}
      <PartnershipsHero />

      {/* 2. Where It Goes */}
      <WhereItGoes />

      {/* 3. Eligibility */}
      <PartnershipsEligibility />

      {/* 4. What It Covers */}
      <WhatItCovers />

      {/* 5. What Happens Next */}
      <WhatHappensNext />

      {/* 6. Location */}
      <LocationSelect />

      {/* 7. Contact Form */}
      <ContactFormSection />

      {/* 8. Other Routes */}
      <OtherRoutes />

      {/* 9. Trust & Governance */}
      <TrustSection />

      {/* 10. FAQ: Straight answers */}
      <PartnershipsFaq />

      {/* 11. Final CTA */}
      <PartnershipsBottomCta />
    </main>
  );
}

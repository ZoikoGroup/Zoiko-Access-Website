import type { Metadata } from "next";
import {
  SecureCommunicationHero,
  LocationBar,
  WhatItMeans,
  ParticipantRoles,
  CommunicationLifecycle,
  RelatedPages,
  SecureCommunicationCta,
  SecureCommunicationFaq,
  InteroperabilityBoundary,
  PrivacyAndGovernance,
  ConceptStoryboard,
  ExceptionsAndEscalation,
  AttachmentsAndRecords,
  IdentityAndPermissions,
  SenderAndRecipient,
} from "@/components/secure-communication";

export const metadata: Metadata = {
  title: "Secure Communication | Zoiko Access",
  description:
    "Explore how Zoiko Access supports authorized professional communication, traceable handoffs, and clear organizational responsibilities across independent healthcare settings.",
};

export default function SecureCommunicationPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <SecureCommunicationHero />

      {/* 2. Location Advisory Bar */}
      <LocationBar />

      {/* 3. What It Means */}
      <WhatItMeans />

      {/* 4. Who May Communicate and Why (4 Participant Roles) */}
      <ParticipantRoles />

      {/* 5. Communication Lifecycle (7 Interactive Steps) */}
      <CommunicationLifecycle />

      {/* 6. Related Pages (Keep Exploring) */}
      <RelatedPages />

      {/* 7. Call to Action (Learn about clinician coordination) */}
      <SecureCommunicationCta />

      {/* 8. Frequently Asked Questions (Short answers) */}
      <SecureCommunicationFaq />

      {/* 9. Interoperability Boundary Layer */}
      <InteroperabilityBoundary />

      {/* 10. Privacy and Local Governance (Local rules come first) */}
      <PrivacyAndGovernance />

      {/* 11. Concept Storyboard (Three Static Frames) */}
      <ConceptStoryboard />

      {/* 12. Exceptions, Corrections and Escalation (When something goes wrong) */}
      <ExceptionsAndEscalation />

      {/* 13. Attachments and Source Records (Metadata first, and only what is needed) */}
      <AttachmentsAndRecords />

      {/* 14. Identity, Delegation and Permissions (Four things that are not the same) */}
      <IdentityAndPermissions />

      {/* 15. Sender and Recipient Responsibilities (What each side knows and owns) */}
      <SenderAndRecipient />
    </main>
  );
}

import type { Metadata } from "next";
import {
  AppointmentHero,
  AvailabilityModel,
  CareLocationSelector,
  AppointmentModes,
  AuthorizedProcessSequence,
  StatusMeaning,
  BeforeYouConsider,
  ChangesAndCancellations,
  SafetyAndPrivacy,
  RelatedLearning,
  AppointmentFaq,
  AppointmentCta,
} from "@/components/request-appointment";

export const metadata: Metadata = {
  title: "Book or Request an Appointment | Zoiko Access",
  description:
    "In supported locations, learn how appointment requests, provider decisions, and source-backed confirmed bookings operate across participating healthcare organizations.",
};

export default function RequestAppointmentPage() {
  return (
    <main className="w-full">
      {/* 1. Hero */}
      <AppointmentHero />

      {/* 2. Availability Model */}
      <AvailabilityModel />

      {/* 3. Care Location */}
      <CareLocationSelector />

      {/* 4. Understand Appointment Modes */}
      <AppointmentModes />

      {/* 5. How an Authorized Process Works */}
      <AuthorizedProcessSequence />

      {/* 6. Status Meaning */}
      <StatusMeaning />

      {/* 7. Before You Consider a Request */}
      <BeforeYouConsider />

      {/* 8. Changes, Cancellations & Uncertainty */}
      <ChangesAndCancellations />

      {/* 9. Safety & Privacy */}
      <SafetyAndPrivacy />

      {/* 10. Related Learning */}
      <RelatedLearning />

      {/* 11. FAQ: Questions Answered */}
      <AppointmentFaq />

      {/* 12. Final CTA */}
      <AppointmentCta />
    </main>
  );
}

import {
  Building2,
  Briefcase,
  Code2,
  CreditCard,
  FlaskConical,
  Heart,
  Hospital,
  Pill,
  ShieldCheck,
  Stethoscope,
  User,
  BookOpen,
} from "lucide-react";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  icon: typeof Heart;
  links: readonly FooterLink[];
};

export const FOOTER_GROUPS: readonly FooterGroup[] = [
  {
    title: "Explore Care",
    icon: Heart,
    links: [
      { label: "How Zoiko Access works", href: "/how-zoiko-access-works" },
      { label: "Explore healthcare services", href: "/healthcare-services" },
      { label: "Care pathways explained", href: "/care-pathways" },
      { label: "Healthcare professionals", href: "/healthcare-professionals" },
      { label: "Locations and availability", href: "/locations-availability" },
    ],
  },
  {
    title: "Patients",
    icon: User,
    links: [
      { label: "For patients", href: "/for-patients" },
      { label: "Caregivers & families", href: "/for-caregivers" },
      { label: "Privacy & permissions", href: "/privacy-permissions" },
      {
        label: "Health information access",
        href: "/health-information-access",
      },
      { label: "Accessible help", href: "/accessible-help" },
    ],
  },
  {
    title: "Clinicians",
    icon: Stethoscope,
    links: [
      { label: "For clinicians", href: "/for-clinicians" },
      { label: "Referral coordination", href: "/referral-coordination" },
      { label: "Care transitions & follow-up", href: "/care-transitions" },
      { label: "Tasks & worklists", href: "/tasks-worklists" },
      { label: "Results & review handoffs", href: "/results-review-handoffs" },
      { label: "Clinical responsibility", href: "/clinical-responsibility" },
    ],
  },
  {
    title: "Hospitals & Clinics",
    icon: Building2,
    links: [
      {
        label: "Hospitals & clinic networks",
        href: "/hospitals-clinic-networks",
      },
      { label: "Private practices", href: "/private-practices" },
      { label: "Outpatient services", href: "/outpatient-services" },
      {
        label: "Scheduling & patient access",
        href: "/scheduling-patient-access",
      },
      { label: "Referral intake & routing", href: "/referral-intake-routing" },
      { label: "Care transitions", href: "/care-transitions" },
      { label: "EHR interoperability", href: "/ehr-interoperability" },
    ],
  },
  {
    title: "Partners & Developers",
    icon: Code2,
    links: [
      { label: "Technology partners", href: "/technology-partners" },
      { label: "Health-system vendors", href: "/health-system-vendors" },
      { label: "API & interoperability", href: "/api-interoperability" },
      { label: "SDKs, webhooks & events", href: "/sdks-webhooks-events" },
      { label: "Integration security", href: "/integration-security" },
      { label: "Certification framework", href: "/certification-framework" },
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    links: [
      { label: "Help center", href: "/help-center" },
      { label: "FAQs", href: "/faqs" },
      {
        label: "Healthcare navigation guide",
        href: "/healthcare-navigation-guide",
      },
      { label: "Safety & emergencies", href: "/safety-emergencies" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Privacy & your information", href: "/privacy-information" },
      { label: "News & insights", href: "/news-insights" },
    ],
  },
  {
    title: "Labs & Diagnostics",
    icon: FlaskConical,
    links: [
      { label: "For laboratories", href: "/for-laboratories" },
      { label: "Imaging & radiology", href: "/imaging-radiology" },
      { label: "Diagnostics coordination", href: "/diagnostics-coordination" },
      { label: "Lab & imaging integration", href: "/lab-imaging-integration" },
      { label: "Safety & escalation", href: "/safety-escalation" },
      {
        label: "Clinical results handoffs",
        href: "/clinical-results-handoffs",
      },
    ],
  },
  {
    title: "Pharmacies",
    icon: Pill,
    links: [
      { label: "For pharmacies", href: "/for-pharmacies" },
      { label: "Prescription routing", href: "/prescription-routing" },
      {
        label: "Fulfillment & availability",
        href: "/fulfillment-availability",
      },
      {
        label: "Medication safety & escalation",
        href: "/medication-safety-escalation",
      },
      { label: "API & integrations", href: "/pharmacy-api-integrations" },
    ],
  },
  {
    title: "Payers & Insurers",
    icon: CreditCard,
    links: [
      { label: "For payers & insurers", href: "/for-payers-insurers" },
      { label: "Eligibility & benefits", href: "/eligibility-benefits" },
      { label: "Prior authorizations", href: "/prior-authorizations" },
      { label: "Claims coordination", href: "/claims-coordination" },
      { label: "Member access experience", href: "/member-access-experience" },
      { label: "Payer integration", href: "/payer-integration" },
    ],
  },
  {
    title: "Organizations",
    icon: Hospital,
    links: [
      {
        label: "Employers & occupational health",
        href: "/employers-occupational-health",
      },
      { label: "Community & home care", href: "/community-home-care" },
      {
        label: "Government & public health",
        href: "/government-public-health",
      },
      {
        label: "Health systems & regional networks",
        href: "/health-systems-networks",
      },
      { label: "Nonprofits & NGOs", href: "/nonprofits-ngos" },
      { label: "Research institutions", href: "/research-institutions" },
    ],
  },
  {
    title: "Company",
    icon: Briefcase,
    links: [
      { label: "Company overview", href: "/company-overview" },
      { label: "Mission & approach", href: "/mission-approach" },
      { label: "Leadership & governance", href: "/leadership-governance" },
      { label: "Privacy & trust center", href: "/privacy-trust-center" },
      {
        label: "Clinical responsibility",
        href: "/clinical-responsibility",
      },
      { label: "Media & press", href: "/media-press" },
    ],
  },
  {
    title: "Support & Legal",
    icon: ShieldCheck,
    links: [
      { label: "Help center", href: "/help-center" },
      { label: "Safety & emergencies", href: "/support-safety-emergencies" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms-of-use" },
      { label: "Cookie notice", href: "/cookie-notice" },
      { label: "Accessibility statement", href: "/accessibility-statement" },
      { label: "Legal notices", href: "/legal-notices" },
      { label: "Cookie preferences", href: "/cookie-preferences" },
    ],
  },
] as const;

export const OFFICES = [
  {
    label: "HEADQUARTERS",
    title: "United States",
    lines: [
      "Zoiko Access / Zoiko Healthcare",
      "Sacramento, California",
      "United States",
    ],
  },
  {
    label: "EUROPEAN HEADQUARTERS",
    title: "United Kingdom",
    lines: [
      "Zoiko Access / Zoiko Healthcare",
      "167–169 Great Portland Street, 5th Floor",
      "London W1W 5PF",
      "United Kingdom",
    ],
  },
] as const;

export const HELP_LINKS: readonly FooterLink[] = [
  { label: "Help", href: "/help-center" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

export const LEGAL_LINKS: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Notice", href: "/cookie-notice" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Legal Notices", href: "/legal-notices" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Cookie Preferences", href: "/cookie-preferences" },
] as const;

export const TAGLINE = [
  "Clearer information.",
  "Connected next steps.",
  "Responsible care coordination.",
] as const;

export const DISCLAIMERS = [
  "Healthcare advice, diagnosis, treatment, and clinical decisions remain the responsibility of appropriately authorized healthcare professionals and service providers.",
  "Applicable contracting entities, data-controller information, and jurisdiction-specific disclosures require verified local Legal Notices and Privacy Policy.",
] as const;

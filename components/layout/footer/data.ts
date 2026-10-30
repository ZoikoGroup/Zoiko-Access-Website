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
      { label: "How Zoiko Access works", href: "/how-it-works" },
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
        href: "/privacy-permissions",
      },
      { label: "Accessible help", href: "/talk-to-support" },
    ],
  },
  {
    title: "Clinicians",
    icon: Stethoscope,
    links: [
      { label: "For clinicians", href: "/for-clinicians" },
      { label: "Referral coordination", href: "/referral-coordination" },
      { label: "Care transitions & follow-up", href: "/care-transitions" },
      { label: "Tasks & worklists", href: "/task-worklist-experience" },
      { label: "Results & review handoffs", href: "/clinicians-results-handoffs" },
      { label: "Clinical responsibility", href: "/clinical-responsibility" },
    ],
  },
  {
    title: "Hospitals & Clinics",
    icon: Building2,
    links: [
      {
        label: "Hospitals & clinic networks",
        href: "/hospitals-clinics",
      },
      { label: "Private practices", href: "/private-practices" },
      { label: "Outpatient services", href: "/outpatient-specialist-services" },
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
      { label: "Technology partners", href: "/become-partner" },
      { label: "Health-system vendors", href: "/become-partner" },
      { label: "API & interoperability", href: "/ehr-interoperability" },
      { label: "SDKs, webhooks & events", href: "/ehr-interoperability" },
      { label: "Integration security", href: "/integration-security" },
      { label: "Certification framework", href: "/certification-framework" },
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    links: [
      { label: "Help center", href: "/talk-to-support" },
      { label: "FAQs", href: "/faqs" },
      {
        label: "Healthcare navigation guide",
        href: "/explore-care",
      },
      { label: "Safety & emergencies", href: "/talk-to-support" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Privacy & your information", href: "/privacy-permissions" },
      { label: "News & insights", href: "/news-insights" },
    ],
  },
  {
    title: "Labs & Diagnostics",
    icon: FlaskConical,
    links: [
      { label: "For laboratories", href: "/for-laboratories" },
      { label: "Imaging & radiology", href: "/lab-imaging-integration" },
      { label: "Diagnostics coordination", href: "/diagnostics-coordination" },
      { label: "Lab & imaging integration", href: "/lab-imaging-integration" },
      { label: "Safety & escalation", href: "/safety-escalation" },
      {
        label: "Clinical results handoffs",
        href: "/clinicians-results-handoffs",
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
        href: "/safety-escalation",
      },
      { label: "API & integrations", href: "/pharmacy-partnership" },
    ],
  },
  {
    title: "Payers & Insurers",
    icon: CreditCard,
    links: [
      { label: "For payers & insurers", href: "/payers-insurers" },
      { label: "Eligibility & benefits", href: "/eligibility-benefits" },
      { label: "Prior authorizations", href: "/prior-authorizations" },
      { label: "Claims coordination", href: "/claims-remittance" },
      { label: "Member access experience", href: "/member-access" },
      { label: "Payer integration", href: "/payer-integrations-governance" },
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
        href: "/hospitals-clinics",
      },
      { label: "Nonprofits & NGOs", href: "/nonprofits-ngos" },
      { label: "Research institutions", href: "/research-institutions" },
    ],
  },
  {
    title: "Company",
    icon: Briefcase,
    links: [
      { label: "Company overview", href: "/organisation-overview" },
      { label: "Mission & approach", href: "/about-us" },
      { label: "Leadership & governance", href: "/about-us" },
      { label: "Privacy & trust center", href: "/privacy-permissions" },
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
      { label: "Help center", href: "/talk-to-support" },
      { label: "Safety & emergencies", href: "/talk-to-support" },
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
  { label: "Help", href: "/talk-to-support" },
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

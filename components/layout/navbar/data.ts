import {
  AlertTriangle,
  Accessibility,
  ArrowLeftRight,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  ClipboardList,
  Code2,
  Compass,
  Contact,
  Cpu,
  FileCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Grid3x3,
  Handshake,
  Headphones,
  Heart,
  HelpCircle,
  Home,
  Hospital,
  Info,
  KeyRound,
  Landmark,
  ListChecks,
  Lock,
  Map,
  MapPin,
  MessageCircle,
  MessageSquare,
  Network,
  Newspaper,
  Package,
  Phone,
  Pill,
  Plug,
  Receipt,
  Route,
  Scale,
  Search,
  Shield,
  Stethoscope,
  Target,
  User,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MenuLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type MenuItem = {
  label: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  columns: readonly (readonly MenuLink[])[];
};

const l = (label: string, icon: LucideIcon, href: string): MenuLink => ({
  label,
  icon,
  href,
});

export const MENU: readonly MenuItem[] = [
  {
    label: "Explore Care",
    cta: "Explore how it works",
    ctaHref: "/how-it-works",
    image: "/navbar/1.jpg",
    imageAlt: "Two women talking in a bright consultation room",
    columns: [
      [
        l("Understand your options", Info, "/understand-options"),
        l("How Zoiko Access works", BookOpen, "/how-it-works"),
        l("Explore healthcare", Heart, "/healthcare-services"),
        l("Care pathways", Map, "/care-pathways"),
      ],
      [
        l("Find services", Search, "/find-services"),
        l("Find care", Heart, "/find-care"),
        l("Healthcare professionals", BookOpen, "/healthcare-professionals"),
        l("Locations and availability", MapPin, "/locations-availability"),
      ],
      [
        l("Next steps", ClipboardList, "/next-steps"),
        l("Book or request care", CalendarDays, "/request-appointment"),
        l("How referrals work", FileText, "/how-referrals-work"),
        l("Talk to support", MessageCircle, "/talk-to-support"),
      ],
    ],
  },
  {
    label: "Patients",
    cta: "How patient access works",
    ctaHref: "/patient-access",
    image: "/navbar/2.jpg",
    imageAlt: "Doctor holding a clipboard speaking with a patient",
    columns: [
      [
        l("Start here", Compass, "/patients-start-here"),
        l("For patients", User, "/for-patients"),
        l("For caregivers", Heart, "/for-caregivers"),
        l("Create a patient account", UserPlus, "/create-patient-account"),
      ],
      [
        l("Manage your journey", Route, "/manage-journey"),
        l("Appointments & requests", CalendarDays, "/appointments-requests"),
        l("Referrals & next steps", ArrowRight, "/referrals-next-steps"),
        l("Messages & notifications", Bell, "/patients-messages"),
      ],
      [
        l("Your information", Contact, "/your-information"),
        l("Privacy & permissions", Lock, "/privacy-permissions"),
        l("Health information", FileText, "/health-information"),
        l("Accessible help", Accessibility, "/accessible-help"),
      ],
    ],
  },
  {
    label: "Clinicians",
    cta: "Explore clinicians",
    ctaHref: "/for-clinicians",
    image: "/navbar/3.jpg",
    imageAlt: "Two colleagues talking in a clinic waiting area",
    columns: [
      [
        l("Clinical coordination", Network, "/clinical-coordination"),
        l("For clinicians", Stethoscope, "/for-clinicians"),
        l("Referral coordination", ArrowRight, "/referral-coordination"),
        l("Care transitions", ArrowLeftRight, "/care-transitions"),
      ],
      [
        l("Clinical workflows", Network, "/clinical-workflows"),
        l("Tasks & worklists", ListChecks, "/tasks-worklists"),
        l("Results & review", BarChart3, "/results-review-handoffs"),
        l("Secure communication", MessageSquare, "/secure-communication"),
      ],
      [
        l("Participation", Users, "/participation"),
        l("Professional", Briefcase, "/professional-onboarding"),
        l("Clinical responsibility", Shield, "/clinical-responsibility"),
        l("Contact our clinical team", Phone, "/contact-clinical-team"),
      ],
    ],
  },
  {
    label: "Hospitals & Clinics",
    cta: "Explore hospital & clinic solutions",
    ctaHref: "/hospitals-clinic-networks",
    image: "/navbar/4.jpg",
    imageAlt: "Doctor speaking with a nurse in a hospital corridor",
    columns: [
      [
        l("Provider institutions", Hospital, "/provider-institutions"),
        l("Hospitals & clinics", Hospital, "/hospitals-clinics"),
        l("Private practices", Stethoscope, "/private-practices"),
        l("Outpatient services", User, "/outpatient-services"),
      ],
      [
        l("Care operations", ClipboardList, "/care-operations"),
        l("Scheduling", CalendarDays, "/scheduling-patient-access"),
        l("Referral intake & routing", ArrowRight, "/referral-intake-routing"),
        l("Discharge & transitions", ArrowLeftRight, "/discharge-transition-support"),
      ],
      [
        l("Technology & adoption", Cpu, "/technology-adoption"),
        l("EHR interoperability", Network, "/ehr-interoperability"),
        l("Enterprise onboarding", Briefcase, "/enterprise-onboarding"),
        l(
          "Speak with our institutional team",
          MessageCircle,
          "/institutional-team",
        ),
      ],
    ],
  },
  {
    label: "Labs & Pharmacies",
    cta: "Explore diagnostics & pharmacy",
    ctaHref: "/diagnostics-pharmacy",
    image: "/navbar/5.jpg",
    imageAlt: "Two laboratory scientists working with a microscope",
    columns: [
      [
        l("Diagnostics", Stethoscope, "/diagnostics"),
        l("For laboratories", FlaskConical, "/for-laboratories"),
        l("Imaging & radiology", Grid3x3, "/imaging-radiology"),
        l("Diagnostics coordination", Network, "/diagnostics-coordination"),
      ],
      [
        l("Pharmacy services", Pill, "/pharmacy-services"),
        l("For pharmacies", Pill, "/for-pharmacies"),
        l("Prescription routing", FileText, "/prescription-routing"),
        l("Fulfillment & availability", Package, "/fulfillment-availability"),
      ],
      [
        l("Partner connectivity", Network, "/partner-connectivity"),
        l("Lab & imaging integration", Plug, "/lab-imaging-integration"),
        l("Pharmacy partnerships", Handshake, "/pharmacy-partnership"),
        l("Safety & escalation", AlertTriangle, "/safety-escalation"),
      ],
    ],
  },
  {
    label: "Payers & Insurers",
    cta: "Explore payer solutions",
    ctaHref: "/for-payers-insurers",
    image: "/navbar/6.jpg",
    imageAlt: "Clinic staff meeting with patients in a consulting room",
    columns: [
      [
        l("Coverage & access", Shield, "/coverage-access"),
        l("For payers & insurers", Wallet, "/for-payers-insurers"),
        l("Eligibility & benefits", Contact, "/eligibility-benefits"),
        l("Prior authorization", FileCheck, "/prior-authorizations"),
      ],
      [
        l("Claims & governance", Scale, "/claims-governance"),
        l("Claims & remittance", Receipt, "/claims-coordination"),
        l("Member access", KeyRound, "/member-access-experience"),
        l("Payer integration", Plug, "/payer-integration"),
      ],
      [
        l("Become a partner", Handshake, "/become-a-payer-partner"),
        l("Talk to our payer team", MessageCircle, "/contact-payer-team"),
        l("Implementation approach", Network, "/implementation-approach"),
      ],
    ],
  },
  {
    label: "Organizations",
    cta: "Explore organization solutions",
    ctaHref: "/organizations",
    image: "/navbar/7.jpg",
    imageAlt: "Woman seated across a table meeting with two colleagues",
    columns: [
      [
        l("Workplace & community", Building2, "/workplace-community"),
        l(
          "Employers & occupational health",
          Briefcase,
          "/employers-occupational-health",
        ),
        l("Community & home care", Home, "/community-home-care"),
        l("Nonprofits & NGOs", Heart, "/nonprofits-ngos"),
      ],
      [
        l("Public systems", Landmark, "/public-systems"),
        l("Government & public health", Landmark, "/government-public-health"),
        l(
          "Health systems & regional networks",
          Hospital,
          "/health-systems-networks",
        ),
        l("Care programs & policy", ClipboardList, "/care-programs-policy"),
      ],
      [
        l("Research & programs", FlaskConical, "/research-programs"),
        l("Research institutions", GraduationCap, "/research-institutions"),
        l("Program implementation", Network, "/program-implementation"),
        l("Discuss a program", MessageCircle, "/discuss-a-program"),
      ],
    ],
  },
  {
    label: "Partners & Developers",
    cta: "Explore integration partnerships",
    ctaHref: "/partners-developers",
    image: "/navbar/8.jpg",
    imageAlt: "Two smiling colleagues reviewing a tablet together",
    columns: [
      [
        l("Partner ecosystem", Network, "/partner-ecosystem"),
        l("Technology partners", Cpu, "/technology-partners"),
        l("Health system vendors", Hospital, "/health-system-vendors"),
        l("System integrators", Plug, "/system-integrators"),
      ],
      [
        l("Build & connect", Code2, "/build-and-connect"),
        l("API & interoperability", Code2, "/api-interoperability"),
        l("SDKs, webhooks & events", Network, "/sdks-webhooks-events"),
        l("Integration security", Shield, "/integration-security"),
      ],
      [
        l("Partner onboarding", UserPlus, "/partner-onboarding"),
        l("Certification framework", Award, "/certification-framework"),
        l("Developer documentation", BookOpen, "/developer-docs"),
        l("Become a partner", Handshake, "/become-a-partner"),
      ],
    ],
  },
  {
    label: "Resources",
    cta: "Visit the Resource Center",
    ctaHref: "/resources",
    image: "/navbar/9.jpg",
    imageAlt: "Two women talking in a bright room",
    columns: [
      [
        l("Get answers", HelpCircle, "/get-answers"),
        l("Help center", Headphones, "/help-center"),
        l("Frequently asked questions", HelpCircle, "/faqs"),
        l(
          "Healthcare navigation guide",
          Compass,
          "/healthcare-navigation-guide",
        ),
      ],
      [
        l("Safety & rights", Shield, "/safety-rights"),
        l("Safety and emergency", AlertTriangle, "/safety-emergencies"),
        l("Accessibility", Accessibility, "/accessibility"),
        l("Privacy and your information", Lock, "/privacy-information"),
      ],
      [
        l("Keep informed", Bell, "/keep-informed"),
        l("News and insights", Newspaper, "/news-insights"),
        l("Contact support", Headphones, "/contact-support"),
      ],
    ],
  },
  {
    label: "Company",
    cta: "Meet Zoiko Access",
    ctaHref: "/company-overview",
    image: "/navbar/10.jpg",
    imageAlt: "Three doctors talking in front of a concrete wall",
    columns: [
      [
        l("Our company", Building2, "/our-company"),
        l("Company overview", FileText, "/company-overview"),
        l("Mission & approach", Target, "/mission-approach"),
        l("Leadership & governance", Users, "/leadership-governance"),
      ],
      [
        l("Trust & engagement", Shield, "/trust-engagement"),
        l("Privacy & trust center", Lock, "/privacy-trust-center"),
        l(
          "Clinical responsibility",
          Stethoscope,
          "/company-clinical-responsibility",
        ),
        l("Contact us", Phone, "/contact-us"),
      ],
      [
        l("Connect with us", MessageCircle, "/connect-with-us"),
        l("Careers", Briefcase, "/careers"),
        l("Media & press", Newspaper, "/media-press"),
        l("Legal notices", Scale, "/legal-notices"),
      ],
    ],
  },
] as const;

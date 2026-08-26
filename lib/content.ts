import {
  MapPin,
  Globe2,
  Link2,
  ShieldCheck,
  Share2,
  Fingerprint,
  Cloud,
  Lock,
  TrainFront,
  BarChart3,
  Handshake,
  Landmark,
  TrendingUp,
  Cpu,
  Coins,
  FileText,
  Building2,
  Umbrella,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
  {
    label: "Enterprise Solution",
    href: "#enterprise-solution",
    children: [
      { label: "iDeal Wealth and Fund Management", href: "/products/ideal-wealth-and-fund-management" },
      { label: "iDeal Integrated Treasury", href: "/products/ideal-integrated-treasury" },
      { label: "Cashtrea Treasury Management", href: "/products/cashtrea-treasury-management" },
    ],
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: MapPin,
    title: "Local Presence",
    description: "Deep understanding of the Philippine landscape",
  },
  {
    icon: Globe2,
    title: "Global Ecosystem",
    description: "Partnerships with world-class technology providers",
  },
  {
    icon: Link2,
    title: "End-to-End Delivery",
    description: "From strategy and integration to sustainable operations",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Infrastructure",
    description: "Secure, resilient systems built for mission-critical environments",
  },
  {
    icon: Share2,
    title: "Future Technologies",
    description: "AI, cloud, blockchain, and next-generation digital solutions",
  },
];

export type Product = {
  badge?: string;
  icon: LucideIcon;
  color: "green" | "orange" | "purple";
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
};

export const products: Product[] = [
  {
    icon: TrendingUp,
    color: "purple",
    title: "iDeal Wealth and Fund Management",
    subtitle: "Unified Wealth, Investment, Trust Banking & Custody System",
    description:
      "End-to-end investment management across all asset classes with unified operations, compliance and reporting.",
    features: [
      "Wealth & portfolio management",
      "Fund administration & accounting",
      "Trust banking & fiduciary operations",
      "Custody & asset safekeeping",
      "Robo advisory & digital servicing",
    ],
    href: "/products/ideal-wealth-and-fund-management",
  },
  {
    icon: Landmark,
    color: "green",
    title: "iDeal Integrated Treasury",
    subtitle: "Integrated Bank Treasury",
    description:
      "Front-to-back treasury processing for banks, spanning trading, position monitoring and regulatory reporting.",
    features: [
      "Front-to-back STP processing",
      "Position monitoring & mark-to-market",
      "Multi-asset trading (FICC, FX, Derivatives)",
      "Nostro reconciliation & SWIFT processing",
      "Regulatory compliance & reporting",
    ],
    href: "/products/ideal-integrated-treasury",
  },
  {
    icon: Landmark,
    color: "orange",
    title: "Cashtrea Treasury Management",
    subtitle: "Corporate Treasury Platform",
    description:
      "Integrated corporate treasury management for cash, liquidity, investments, funding, and risk and compliance.",
    features: [
      "Cash Flow Management (Collation & forecasting from business units)",
      "Fund Mobilization (Term loans, bonds, CP issuance)",
      "Forex & Hedging (FX exposure analysis & hedging trades)",
    ],
    href: "/products/cashtrea-treasury-management",
  },
];

// --- Enterprise Solutions: shared partner/product discovery model ---
//
// This holds only reusable discovery/presentation metadata — the fields the
// homepage section, navigation, and Enterprise Solutions landing page all
// need (partner identity, product summary card). It deliberately does NOT
// carry long-form page content (hero copy, overview prose, capabilities /
// industries lists) — that stays in each page's own components, matching
// the existing pattern already used by Ideal*/Cashtrea* components, which
// hardcode their own content rather than sourcing it from here.
//
// Per ARCHITECTURE.md (v1.1) → Data model. The homepage section
// (`components/EnterpriseSolutions.tsx`, DEO-33) reads `enterprisePartners`
// below; the standalone `products` array above is retained as-is since
// Credence's entry here reuses it verbatim (see `enterprisePartners`).

export type EnterpriseProduct = {
  badge?: string;
  icon: LucideIcon;
  color: "green" | "orange" | "purple" | "blue";
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
};

export type EnterprisePartner = {
  slug: string;
  name: string;
  /** Optional — omitted where no logo asset exists yet in `public/assets/enterprise-solution/`. */
  logo?: string;
  tagline: string;
  products: EnterpriseProduct[];
};

// Hamilton Prima Indonesia's product family — Hamilton Engine (overview) +
// IFRS 9/15/16/17, per PRD.md (v1.1) and ARCHITECTURE.md (v1.1). Content
// sourced from `context/extracted/Company Profile Hamilton Prima Indonesia (1).pdf.md`
// and the four IFRS executive summaries in `context/` — not invented.
const hamiltonProducts: EnterpriseProduct[] = [
  {
    icon: Cpu,
    color: "blue",
    title: "Hamilton Engine",
    subtitle: "Predictive Contract Economics Platform",
    description:
      "A predictive contract economics platform that models complex business agreements as dynamic financial systems, transforming raw contract data into forward-looking financial insight at the contract level.",
    features: [
      "Complete economic profile per contract — revenue, cost, funding, and cash flow",
      "Predictive P&L and balance sheet simulation before execution",
      "Agentic AI self-audit engine with immutable data trails",
    ],
    href: "/products/hamilton-engine",
  },
  {
    icon: Coins,
    color: "blue",
    title: "IFRS 9",
    subtitle: "Financial Instruments",
    description:
      "Operationalizes IFRS 9 classification, measurement, and expected credit loss (ECL) — converting instrument economics into consistent classification, measurement, impairment, and disclosure outcomes across large portfolios.",
    features: [
      "Classification & measurement (amortised cost, FVOCI, FVTPL)",
      "Expected credit loss (ECL) modeling and recalculation",
      "Predictive accounting ahead of actual postings",
    ],
    href: "/products/ifrs-9-financial-instruments",
  },
  {
    icon: FileText,
    color: "blue",
    title: "IFRS 15",
    subtitle: "Revenue Recognition",
    description:
      "Operationalizes IFRS 15 revenue recognition — decomposing customer contracts into performance obligations and transaction-price allocation to produce consistent revenue schedules and disclosures.",
    features: [
      "Performance obligation & transaction price allocation",
      "Fulfilment, billing, and modification event tracking",
      "Revenue schedules, contract assets/liabilities, and disclosures",
    ],
    href: "/products/ifrs-15-revenue-recognition",
  },
  {
    icon: Building2,
    color: "blue",
    title: "IFRS 16",
    subtitle: "Lease Accounting",
    description:
      "Operationalizes IFRS 16 lease accounting — translating lease terms, payments, and options into right-of-use asset and lease liability measurement, remeasurement, and disclosures.",
    features: [
      "Right-of-use asset & lease liability measurement",
      "Remeasurement for modifications, renewals, and index changes",
      "Lease disclosure and reporting outcomes",
    ],
    href: "/products/ifrs-16-lease-accounting",
  },
  {
    icon: Umbrella,
    color: "blue",
    title: "IFRS 17",
    subtitle: "Insurance Contracts",
    description:
      "Operationalizes IFRS 17 insurance contract measurement — contract boundaries, discounting, risk adjustment, and contractual service margin (CSM) — producing repeatable financial projections and disclosures.",
    features: [
      "Contract boundary & group-of-contracts measurement",
      "Discounting, risk adjustment, and CSM allocation",
      "Repeatable projections, postings, and disclosures",
    ],
    href: "/products/ifrs-17-insurance-contracts",
  },
];

export const enterprisePartners: EnterprisePartner[] = [
  {
    slug: "credence-analytics",
    name: "Credence Analytics",
    logo: "/assets/enterprise-solution/credence-analytics-logo.png",
    tagline: "Enterprise Financial Solutions",
    // Reuses the existing `products` data verbatim — same content/hrefs,
    // no duplication, no drift between the old and new models.
    products: products,
  },
  {
    slug: "hamilton-prima-indonesia",
    name: "Hamilton Prima Indonesia",
    // No logo asset exists yet in public/assets/enterprise-solution/ — add
    // one and set this before the homepage section (DEO-33) renders it.
    tagline: "Accounting Automation & IFRS Solutions",
    products: hamiltonProducts,
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Fingerprint,
    title: "Digital Identity & Trust",
    description: "Secure digital identity solutions for every Filipino.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Scalable, sovereign, and future-ready cloud foundations.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Protecting critical systems and data that power the nation.",
  },
  {
    icon: TrainFront,
    title: "Transport & Rail Systems",
    description: "Smart mobility solutions for safer and faster journeys.",
  },
  {
    icon: BarChart3,
    title: "AI, Data & Analytics",
    description: "Data-driven intelligence for better decisions and outcomes.",
  },
  {
    icon: Handshake,
    title: "PPP Advisory & Delivery",
    description: "Enabling public-private collaboration for lasting impact.",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "National ID for All",
    description: "Digital identity solutions for a more inclusive nation.",
    image: "/assets/our-impact-in-action/national-id.png",
  },
  {
    title: "Accessible Transport",
    description: "Modernizing rail systems for connected communities.",
    image: "/assets/our-impact-in-action/accesibility.png",
  },
  {
    title: "Digital Government",
    description: "Technology that enables efficient and transparent public services.",
    image: "/assets/our-impact-in-action/government.png",
  },
  {
    title: "Secure Communities",
    description: "Protecting citizens and infrastructure through advanced security.",
    image: "/assets/our-impact-in-action/communities.png",
  },
  {
    title: "Smart Infrastructure",
    description: "Building resilient systems that power progress.",
    image: "/assets/our-impact-in-action/infrastructure.png",
  },
];

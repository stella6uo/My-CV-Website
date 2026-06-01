// ============================================================================
// SITE CONTENT — edit everything here. The components just render this.
// TODO placeholders are marked clearly; swap them when you have the real links.
// ============================================================================

export const profile = {
  name: "Anson Ng",
  fullName: "Ng Cheuk Lam, Anson",
  location: "Leeds, UK",
  // Headline shown big in the hero. Two lines, the accent word gets highlighted.
  tagline: "Finance + AI.",
  subtagline:
    "Economics & Finance graduate building tools that make investing sharper — automated signal pipelines, an LLM trading journal, and live products with real users.",
  email: "ansonng0422@gmail.com",
  phone: "07873 827027",
  linkedin: "https://www.linkedin.com/in/anson-ng-cl/",
  github: "https://github.com/stella6uo",
  // CV file lives in /public — drop your PDF there as cv.pdf (see note in README)
  cvHref: "/cv.pdf",
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  // Optional live demo / repo links. Leave undefined to hide the button.
  liveHref?: string;
  liveLabel?: string;
  repoHref?: string;
  // Status pill, e.g. "Live product", "Personal project"
  status: string;
  // Optional screenshot in /public/projects/<file>. Falls back to a placeholder.
  image?: string;
  // Optional crop focus, a CSS object-position value, e.g. "center 70%".
  // Higher % shows a lower part of the image. Defaults to "top".
  objectPosition?: string;
};

export const projects: Project[] = [
  {
    name: "Trading-Signal Telegram Bot",
    tagline: "Automated relevance-filtered signal pipeline",
    description:
      "Ingests posts from finance accounts on X via RSS, uses Gemini to score each against trading-relevance criteria, and forwards qualifying summaries to a Telegram channel. Scheduled on a Cloudflare Worker cron, executed by GitHub Actions.",
    stack: ["Python", "Google Gemini API", "GitHub Actions", "Cloudflare Workers"],
    // TODO: add GitHub repo link if public
    // repoHref: "https://github.com/stella6uo/signal-bot",
    status: "Personal project",
    image: "/projects/signal-bot.png",
  },
  {
    name: "LLM-Assisted Trading Journal",
    tagline: "Structured trade journal + performance dashboard",
    description:
      "Captures entries, exits, position sizing and rationale, with computed win-rate, risk/reward and P&L over time. Integrates the Claude API to review trades and surface decision patterns, common mistakes, and risk-management weaknesses.",
    stack: ["Python", "Anthropic Claude API", "JSON"],
    // TODO: add GitHub repo link if public
    // repoHref: "https://github.com/stella6uo/trading-journal",
    status: "Personal project",
    image: "/projects/trading-journal.png",
  },
  {
    name: "Sheep Mai Mai — Mobile App",
    tagline: "Company's first iOS & Android app, built solo",
    description:
      "Leading end-to-end design and development of a specialty coffee roaster's first mobile app for the App Store and Google Play — translating the Wix-backed online store into a mobile-native experience, with a paid brewing-log subscription. Working solo from concept through to release.",
    // TODO: confirm the exact stack — adjust if not Expo/React Native
    stack: ["React Native", "Expo", "Wix Stores"],
    status: "In development",
    image: "/projects/sheepmaimai.png",
  },
  {
    name: "Casabrew",
    tagline: "Coffee logging web app — live, with real users",
    description:
      "Designed and shipped a full web app, in use by cafés, roasters, and coffee specialists to record extraction parameters and sensory data. Concept to live deployment with real users.",
    stack: ["Next.js", "Supabase", "Vercel"],
    liveHref: "https://casabrew.vercel.app",
    liveLabel: "casabrew.vercel.app",
    status: "Live product",
    image: "/projects/casabrew.png",
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Financial Research Assistant",
    org: "GNS Intelligent Technology (HK) Ltd",
    period: "Jan 2026 – Jun 2026",
    points: [
      "Built DCF valuation models, assessed credit risk, and evaluated investment opportunities to support strategic decisions.",
      "Designed AI-driven automation workflows for client projects, streamlining manual processes and improving efficiency.",
    ],
  },
  {
    role: "Inventory & E-commerce Operations Coordinator",
    org: "Sheep Mai Mai (Remote)",
    period: "Apr 2026 – Present",
    points: [
      "Lead end-to-end design and development of the company's first mobile app for the App Store and Google Play, working solo.",
      "Run inventory across multiple SKUs/suppliers and build Wix product listings, managing the full customer journey.",
    ],
  },
  {
    role: "Active Personal Investor — US Equities",
    org: "Self-directed",
    period: "2020 – Present",
    points: [
      "Five years of self-directed investing using fundamental and technical analysis with disciplined risk management.",
      "Review performance through a self-built LLM trade journal; study market structure and macro drivers continuously.",
    ],
  },
];

export const education = {
  degree: "BSc Economics and Finance",
  school: "University of Reading",
  period: "2022 – 2025",
  result: "2:1 (67.3%)",
  modules: [
    { name: "Private Equity & Venture Capital", grade: "80% — A" },
    { name: "Derivative Securities", grade: "75% — A" },
    { name: "Financial Modelling", grade: "71% — A" },
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Finance & Modelling",
    items: [
      "Financial modelling",
      "DCF valuation",
      "Derivatives pricing",
      "Equity analysis",
      "Excel (VLOOKUP, pivot tables)",
    ],
  },
  {
    title: "AI & LLMs",
    items: [
      "Anthropic Claude API",
      "Google Gemini API",
      "Prompt engineering",
      "Chain-of-thought / few-shot",
      "Structured output & prompt chaining",
    ],
  },
  {
    title: "Programming & Tools",
    items: [
      "Python (pandas, APIs)",
      "Git / GitHub",
      "REST APIs / JSON",
      "Next.js · Supabase · Vercel",
      "Power BI (basic)",
    ],
  },
];

export const languages = ["English (fluent)", "Mandarin (fluent)", "Cantonese (native)"];

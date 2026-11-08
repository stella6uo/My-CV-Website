// ============================================================================
// SITE CONTENT — edit everything here. The components just render this.
// TODO placeholders are marked clearly; swap them when you have the real links.
// ============================================================================

export const profile = {
  name: "Anson Ng",
  fullName: "Ng Cheuk Lam, Anson",
  location: "Leeds, UK",
  // Shown in the hero eyebrow, after the name.
  headline: "Open to roles across finance",
  email: "ansonngjob@gmail.com",
  phone: "07873 827027",
  linkedin: "https://www.linkedin.com/in/anson-ng-cl/",
  // CV file lives in /public as cv.pdf
  cvHref: "/cv.pdf",
};

export const site = {
  title: "Anson Ng | Economics & Finance Graduate",
  description:
    "Economics & Finance graduate in Leeds, open to roles across finance and keen to learn: reconciliation, reporting, advanced Excel and process automation.",
};

// ----------------------------------------------------------------------------
// Hero: the headline, the summary, and the ledger card that checks itself.
// ----------------------------------------------------------------------------
export type LedgerExample = {
  title: string;
  tag: string;
  caption: string; // read out to screen readers
  head: string[];
  rows: string[][]; // resting values, after the check
  total: { label: string; value: string };
  // Optional: one row that starts wrong and is corrected during the animation.
  flag?: {
    row: number;
    diff: string; // the difference before it was resolved
    swap?: { col: number; wrong: string }; // a cell that was keyed wrong
    note: string;
  };
};

export const hero = {
  lead: "Economics",
  join: "& finance.",
  summary:
    "Economics & Finance graduate in Leeds, open to roles across finance and keen to learn. So far my work has meant tracing figures back to source, catching what doesn't match, and automating the routine steps so the numbers stay right.",
  ledger: {
    title: "Figures on this page",
    tag: "Source checked",
    caption: "The figures on this page and the record each one was checked against",
    head: ["Figure", "Value", "Source"],
    rows: [
      ["Degree average", "67.3%", "Transcript"],
      ["Modules passed", "18/18", "Transcript"],
      ["Top module mark", "87%", "Transcript"],
      ["Trades logged since", "2020", "Broker"],
    ],
    total: { label: "Unverified", value: "0" },
  } satisfies LedgerExample,
};

// ----------------------------------------------------------------------------
// Figures strip. Each figure carries a note saying where it comes from, shown
// below the strip like the notes to a set of accounts.
// ----------------------------------------------------------------------------
export type Figure = { id: string; value: string; label: string; note: string };

export const figures: Figure[] = [
  {
    id: "average",
    value: "67.3%",
    label: "Degree average, 2:1",
    note: "Final average on my University of Reading transcript, BSc Economics and Finance, 2022 to 2025.",
  },
  {
    id: "modules",
    value: "18/18",
    label: "Modules passed at the first attempt",
    note: "University of Reading transcript: every module passed first time, no resits.",
  },
  {
    id: "firsts",
    value: "6",
    label: "Modules with first-class marks",
    note: "Transcript: Mathematics for Economics 87%, Private Equity and Venture Capital 80%, Derivative Securities 75%, Quantitative Techniques 73%, Financial Modelling 71%, Portfolio Management 70%.",
  },
  {
    id: "languages",
    value: "3",
    label: "Languages spoken",
    note: "English and Mandarin fluent, Cantonese native.",
  },
];

// ----------------------------------------------------------------------------
// Open to work
// ----------------------------------------------------------------------------
export const seeking = {
  heading: "Exploring finance, and keen to learn.",
  blurb:
    "So far I've worked on research and reporting at GNS, and on invoices, orders and stock at Sheep Mai Mai. I want to keep learning how the different areas of finance fit together, and I'm keen to train towards a professional qualification alongside the job. Based in Leeds, and also open to Manchester and London.",
  areasLabel: "Areas I'd like to explore",
  areas: [
    "Finance Assistant & Accounts",
    "Cash Office & Order to Cash",
    "Financial & Commercial Analysis",
    "Investment Administration",
    "Finance Graduate Programmes",
  ],
  learningNow: "Teaching myself now: VBA and Power BI",
};

export const contactLine =
  "Available immediately for roles across finance, based in Leeds. The fastest way to reach me is email.";

// ----------------------------------------------------------------------------
// Experience, education, skills, projects
// ----------------------------------------------------------------------------
export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    // An internship; Financial Research Assistant is the title (confirmed 8 Nov 2026).
    role: "Financial Research Assistant (Internship)",
    org: "GNS Intelligent Technology (HK) Ltd · Remote",
    period: "Jan 2026 – Present",
    points: [
      "Maintain workbooks of transaction, valuation and performance data, checking outputs line by line against source and tracing any difference back to the underlying record rather than adjusting around it.",
      "Deliver recurring reports to set dates alongside ad-hoc requests, and answer colleague and client queries clearly by email and call.",
      "Automated recurring manual steps in reporting, and documented each process so someone else could run and check it.",
    ],
  },
  {
    role: "Inventory & E-commerce Operations Coordinator (Part-time)",
    org: "Sheep Mai Mai · Remote",
    period: "Apr 2026 – Present",
    points: [
      "Check supplier invoices and shipping paperwork against purchase orders and agreed pricing before the cost is accepted, and follow any mismatch through to a corrected invoice.",
      "Raise purchase orders with specialty coffee roasters worldwide, then reconcile each order against what arrives and what is invoiced.",
      "Keep stock, cost and pricing records accurate across Wix and Excel for multiple SKUs and suppliers.",
      "Work the company's events as barista at markets and coffee festivals, and organised and hosted a cupping for 15 guests, introducing the roasters we work with and talking everyone through each coffee.",
    ],
  },
  {
    role: "Barista (Part-time)",
    org: "London Coffee Festival",
    period: "May 2026",
    points: [
      "Served hundreds of customers a day in a busy bar team, keeping orders accurate and the queue moving at peak times.",
    ],
  },
  {
    role: "Personal Investor, US Equities",
    org: "Self-directed",
    period: "2020 – Present",
    points: [
      "Record every trade with entry, exit, size and rationale, and reconcile my records against broker statements, investigating any difference before moving on.",
      "Track win rate, risk/reward and P&L through a journal and dashboard I built myself.",
    ],
  },
];

export type Module = { name: string; grade: string };

// First-class modules from the University of Reading transcript.
export const modules: Module[] = [
  { name: "Intermediate Mathematics for Economics", grade: "87%" },
  { name: "Private Equity and Venture Capital", grade: "80%" },
  { name: "Derivative Securities", grade: "75%" },
  { name: "Quantitative Techniques for Business & Finance", grade: "73%" },
  { name: "Financial Modelling (Excel)", grade: "71%" },
  { name: "Portfolio Management", grade: "70%" },
];

export const education = {
  degree: "BSc Economics and Finance",
  school: "University of Reading",
  period: "2022 – 2025",
  result: "2:1 (67.3%)",
  note: "First-class marks in six modules. All 18 modules passed at the first attempt.",
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Finance Operations",
    items: [
      "Invoice & purchase order matching",
      "Reconciliation to source & statements",
      "Investigating & resolving discrepancies",
      "Accurate record keeping",
      "Recurring reporting to deadlines",
    ],
  },
  {
    title: "Excel & Systems",
    items: [
      "Advanced Excel: XLOOKUP, SUMIFS, IFERROR",
      "Pivot tables & reconciliation workbooks",
      "Word, PowerPoint, Outlook, Teams",
      "Power BI (basic), Wix",
      "Quick to learn new finance systems",
    ],
  },
  {
    title: "Process Improvement",
    items: [
      "Automating recurring manual steps",
      "Documented, repeatable procedures",
      "Python (pandas, scripts)",
      "SQL (basic)",
      "AI tools: Claude, ChatGPT, Copilot",
    ],
  },
];

export const languages = ["English (fluent)", "Mandarin (fluent)", "Cantonese (native)"];

export const projectsIntro = {
  eyebrow: "Personal projects",
  heading: "Personal projects, from markets to coffee.",
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
  // Status label, e.g. "Live product", "Personal project"
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
    tagline: "Replaced a daily manual scan with a scheduled pipeline",
    description:
      "Pulls posts from finance accounts on X via RSS, uses Gemini to check each one against defined criteria, and forwards only what qualifies as a short summary to Telegram. Scheduled on a Cloudflare Worker cron and run by GitHub Actions, then tested and refined until it ran reliably unattended.",
    stack: ["Python", "Google Gemini API", "GitHub Actions", "Cloudflare Workers"],
    status: "Automation",
    image: "/projects/signal-bot.png",
  },
  {
    name: "LLM-Assisted Trading Journal",
    tagline: "Every trade recorded, checked and reviewed",
    description:
      "Captures entry, exit, position size and rationale for each trade, and computes win rate, risk/reward and P&L over time. The Claude API reviews the records and flags patterns and repeated mistakes in my decisions.",
    stack: ["Python", "Anthropic Claude API", "JSON"],
    status: "Personal project",
    image: "/projects/trading-journal.png",
  },
  {
    name: "Casabrew",
    tagline: "Learned an unfamiliar stack and shipped a live product",
    description:
      "A web app used by cafés, roasters and coffee specialists to log brew recipes and tasting data. Built solo from concept to live deployment, with real users relying on the data being right.",
    stack: ["Next.js", "Supabase", "Vercel"],
    liveHref: "https://casabrew.vercel.app",
    liveLabel: "casabrew.vercel.app",
    status: "Live product",
    image: "/projects/casabrew.png",
  },
  {
    name: "Sheep Mai Mai Mobile App",
    tagline: "The company's first iOS & Android app, built solo",
    description:
      "Designing and building a specialty coffee retailer's first app for the App Store and Google Play, bringing the Wix online store to mobile with a paid brewing-log subscription. Working solo from concept through to release.",
    // TODO: confirm the exact stack — adjust if not Expo/React Native
    stack: ["React Native", "Expo", "Wix Stores"],
    status: "In development",
    image: "/projects/sheepmaimai.png",
  },
];

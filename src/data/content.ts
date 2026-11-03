// ============================================================================
// SITE CONTENT — edit everything here. The components just render this.
// TODO placeholders are marked clearly; swap them when you have the real links.
// ============================================================================

export const profile = {
  name: "Anson Ng",
  fullName: "Ng Cheuk Lam, Anson",
  location: "Leeds, UK",
  // Hero headline: the lead line loads first, the second line joins on scroll.
  heroLead: "Finance,",
  heroJoin: "reconciled.",
  subtagline:
    "Economics & Finance graduate in Leeds, looking for a role in finance operations. I check invoices against orders, reconcile records back to source, and automate the routine steps so the numbers stay right.",
  email: "ansonng0422@gmail.com",
  phone: "07873 827027",
  linkedin: "https://www.linkedin.com/in/anson-ng-cl/",
  github: "https://github.com/stella6uo",
  // CV file lives in /public as cv.pdf (general finance operations CV)
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
    tagline: "Replaced a daily manual scan with a scheduled pipeline",
    description:
      "Pulls posts from finance accounts on X via RSS, uses Gemini to check each one against defined criteria, and forwards only what qualifies as a short summary to Telegram. Scheduled on a Cloudflare Worker cron and run by GitHub Actions, then tested and refined until it ran reliably unattended.",
    stack: ["Python", "Google Gemini API", "GitHub Actions", "Cloudflare Workers"],
    // TODO: add GitHub repo link if public
    // repoHref: "https://github.com/stella6uo/signal-bot",
    status: "Automation",
    image: "/projects/signal-bot.png",
  },
  {
    name: "LLM-Assisted Trading Journal",
    tagline: "Every trade recorded, checked and reviewed",
    description:
      "Captures entry, exit, position size and rationale for each trade, and computes win rate, risk/reward and P&L over time. The Claude API reviews the records and flags patterns and repeated mistakes in my decisions.",
    stack: ["Python", "Anthropic Claude API", "JSON"],
    // TODO: add GitHub repo link if public
    // repoHref: "https://github.com/stella6uo/trading-journal",
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

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Financial Research Assistant",
    org: "GNS Intelligent Technology (HK) Ltd · Remote",
    period: "Jan 2026 – Present",
    points: [
      "Maintain workbooks of transaction, valuation and performance data, checking outputs line by line against source and tracing any difference back to the underlying record rather than adjusting around it.",
      "Deliver recurring reports to set dates alongside ad-hoc requests, and answer colleague and client queries clearly by email and call.",
      "Automated recurring manual steps in reporting, and documented each process so someone else could run and check it.",
    ],
  },
  {
    role: "Inventory & E-commerce Operations Coordinator",
    org: "Sheep Mai Mai · Remote",
    period: "Apr 2026 – Present",
    points: [
      "Check supplier invoices and shipping paperwork against purchase orders and agreed pricing before the cost is accepted, and follow any mismatch through to a corrected invoice.",
      "Raise purchase orders with specialty coffee roasters worldwide, then reconcile each order against what arrives and what is invoiced.",
      "Keep stock, cost and pricing records accurate across Wix and Excel for multiple SKUs and suppliers.",
    ],
  },
  {
    role: "Barista",
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

export const education = {
  degree: "BSc Economics and Finance",
  school: "University of Reading",
  period: "2022 – 2025",
  result: "2:1 (67.3%)",
  modules: [
    { name: "Intermediate Mathematics for Economics", grade: "87%" },
    { name: "Quantitative Techniques for Business & Finance", grade: "73%" },
    { name: "Financial Modelling (Excel)", grade: "71%" },
    { name: "Portfolio Management", grade: "70%" },
  ],
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

// What I'm looking for — shown in the "Open to work" section.
export const seeking = {
  heading: "Looking for my first finance operations role.",
  blurb:
    "Economics & Finance graduate based in Leeds, and also open to Manchester and London. I'm looking for a full-time role in the day-to-day finance work that keeps cash, invoices and accounts accurate, and I'm keen to work towards AAT, ACCA or CIMA alongside it.",
  // Target roles.
  areas: [
    "Finance Assistant",
    "Cash Office & Order to Cash",
    "Accounts Payable & Receivable",
    "Assistant Accountant",
    "Finance Graduate Programmes",
  ],
};

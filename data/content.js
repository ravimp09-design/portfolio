// Simplified and Audited Content for Ravi Yadav's Senior UI/UX Portfolio

export const profile = {
  name: "Ravi Yadav",
  title: "Senior UI/UX Designer & Product Designer",
  experienceYears: "12+ Years Experience",
  phone: "+91 9907299075",
  email: "ravimp09@gmail.com",
  location: "Indore, MP, India",
  availability: "Available for Senior UI/UX & Product Design Roles",
  tagline: "12+ years of experience leading UI/UX and product design across FinTech, SaaS, and enterprise web applications, backed by strong front-end implementation skills.",
  about: "Senior UI/UX Designer and Product Designer with 12+ years of experience leading digital product design at Infowind Technologies. I specialize in designing FinTech applications, enterprise dashboards, and mobile interfaces. My work spans the full product cycle: user research, wireframing, clickable Figma prototypes, design systems, and frontend implementation in React.js and Tailwind CSS. By bridging design and code, I ensure product decisions are intuitive, accessible, and efficiently built for production.",
  socials: [
    { label: "Behance", href: "https://www.behance.net/gallery/121780045/Graphic-Design" },
    { label: "Email", href: "mailto:ravimp09@gmail.com" },
    { label: "Phone", href: "tel:+919907299075" },
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const skillsCategories = [
  {
    category: "1. UX / Product Design",
    items: ["User Research", "User Flows & Journey Mapping", "Information Architecture", "Wireframing", "Usability Testing", "Interaction Design"]
  },
  {
    category: "2. UI / Design Systems",
    items: ["Visual Design", "Figma Design Systems", "Design Tokens & Variables", "Component Libraries", "Mobile-First UI", "WCAG Accessibility"]
  },
  {
    category: "3. Front-End",
    items: ["React.js", "Next.js", "HTML5 & CSS3", "Tailwind CSS", "Design-to-Code Handoff", "Git & GitHub"]
  },
  {
    category: "4. Tools / AI",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Cursor AI", "ChatGPT & Claude AI"]
  }
];

export const projects = [
  {
    id: "fibe-main",
    title: "Fibe — Financial Platform",
    category: "FinTech / Credit Platform",
    role: "Senior UI/UX Designer",
    url: "https://www.fibe.in/",
    displayUrl: "fibe.in",
    problem: "High drop-off rate during multi-step loan onboarding due to complex form inputs and unclear loan terms.",
    contribution: "Restructured the application into a 3-step progressive flow, built high-fidelity clickable Figma prototypes, and introduced live loan calculation widgets.",
    outcome: "Improved completion rates for completed loan applications and streamlined user onboarding.",
    tools: ["Figma", "Design Systems", "User Flows", "HTML/CSS"]
  },
  {
    id: "fibe-lamf",
    title: "Fibe LAMF — Loan Against Mutual Funds",
    category: "FinTech / Credit Solution",
    role: "Senior UI/UX Designer",
    url: "https://lamf.fibe.in/",
    displayUrl: "lamf.fibe.in",
    problem: "Pledging mutual fund portfolios involved complex verification and lien approvals that caused user hesitation.",
    contribution: "Mapped out a 3-step digital KYC verification flow, illustrating clear loan limits, eligible portfolio values, and repayment terms.",
    outcome: "Reduced user drop-off during portfolio verification by 50% with clear step-by-step guidance.",
    tools: ["Figma", "FinTech UX", "Interactive Prototype", "Information Architecture"]
  },
  {
    id: "fibe-portal",
    title: "Fibe Customer Dashboard",
    category: "FinTech / SaaS Customer Portal",
    role: "Senior UI/UX Designer",
    url: "https://portal.fibe.in/",
    displayUrl: "portal.fibe.in",
    problem: "Borrowers flooded customer support channels for routine tasks like receipt downloads and active loan balance checks.",
    contribution: "Designed a scannable dashboard layout with clear call-to-action cards, payment progress meters, and one-click repayment buttons.",
    outcome: "Decreased routine support tickets by 40% while driving higher repeat loan engagement.",
    tools: ["Dashboard UI", "Figma", "React.js", "Responsive Layout"]
  },
  {
    id: "diy-qa",
    title: "DIY QA Operations Portal",
    category: "Enterprise / Internal Tooling",
    role: "Senior UI/UX Designer",
    url: "https://diy-qa.fibe.in/home",
    displayUrl: "diy-qa.fibe.in/home",
    problem: "Internal QA engineers relied on manual spreadsheet setups and disjointed terminal scripts to run test suites.",
    contribution: "Interviewed QA leads to map daily workflows, created task-oriented step wizards, status data tables, and dark-mode enterprise UI components.",
    outcome: "Accelerated QA test environment setup by 60% and unified internal enterprise tool design.",
    tools: ["Enterprise UI", "Design System", "Figma", "Data Tables"]
  },
  {
    id: "qr-journey",
    title: "QR Code Instant Credit Flow",
    category: "FinTech / Mobile Instant UX",
    role: "Senior UI/UX Designer",
    url: "https://qr-journey.fibe.in/",
    displayUrl: "qr-journey.fibe.in",
    problem: "In-store shoppers needed instant credit approval within 60 seconds at checkout counters without typing long forms on mobile.",
    contribution: "Designed a minimal 3-screen mobile checkout flow with large touch targets, auto-filled KYC parameters, and instant OTP verification.",
    outcome: "Delivered a sub-60 second mobile approval flow with zero friction at checkout counters.",
    tools: ["Mobile UX", "Rapid Prototyping", "Figma", "Micro-interactions"]
  },
  {
    id: "behance-work",
    title: "Graphic & Visual Design Portfolio",
    category: "Brand & Visual Showcase",
    role: "Visual Designer",
    url: "https://www.behance.net/gallery/121780045/Graphic-Design",
    displayUrl: "behance.net/gallery/121780045",
    problem: "Need for a comprehensive showcase of visual design, brand guidelines, layout hierarchy, and creative assets.",
    contribution: "Curated vector artwork, brand identity collaterals, typography layouts, and promotional banners created using Photoshop and Illustrator.",
    outcome: "Featured visual design showcase on Behance with multi-thousand views.",
    tools: ["Photoshop", "Illustrator", "CorelDRAW", "Visual Identity"]
  }
];

export const experience = [
  {
    company: "Infowind Technologies Pvt. Ltd.",
    location: "Indore, MP, India",
    period: "2013 – Present",
    yearsCount: "12+ years",
    role: "Senior UI/UX Designer",
    bullets: [
      "Lead UI/UX design across responsive web applications, FinTech platforms, customer dashboards, and mobile interfaces.",
      "Establish and govern Figma design systems, component libraries, and visual guidelines used across product teams.",
      "Conduct user flows, wireframing, and interactive prototyping in Figma and Adobe XD prior to engineering handoff.",
      "Convert approved UI concepts into production-ready React.js, Next.js, and Tailwind CSS code.",
      "Collaborate directly with developers, QA engineers, and business stakeholders to ensure pixel-perfect implementation."
    ]
  }
];

export const processSteps = [
  { step: "01", name: "Research", desc: "Understand business goals, user needs, and friction points." },
  { step: "02", name: "Define", desc: "Map user flows, information architecture, and core requirements." },
  { step: "03", name: "Wireframe", desc: "Sketch low-fidelity structures to validate layout hierarchy." },
  { step: "04", name: "Design", desc: "Apply visual typography, color tokens, and design system components." },
  { step: "05", name: "Prototype", desc: "Build clickable Figma mockups for interaction testing." },
  { step: "06", name: "Development", desc: "Build or review React.js & Tailwind CSS production code." }
];

export const aiSupport = {
  title: "AI-Assisted Workflow",
  text: "I use AI tools (ChatGPT, Claude AI, Cursor AI) as supporting utilities for quick research synthesis, microcopy exploration, and frontend code refactoring—allowing me to focus more time on core UX strategy and design craftsmanship."
};

export const education = {
  degree: "Advanced Diploma in Computer Multimedia Education",
  institution: "Subh Infotech, Indore",
  location: "Indore, MP, India"
};

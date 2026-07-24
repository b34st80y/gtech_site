import type { ContactMethod, CtaLink, HeroContent, NavItem, PortfolioProduct, ProductSummary, SeoMeta, ServiceOffering } from './types'

export const navItems: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const siteMeta: Record<string, SeoMeta> = {
  home: {
    title: 'GTech | Practical Software Products',
    description: 'GTech builds software for roofing operations, wardrobe planning, nutrition tracking, and specific business needs.',
  },
  roofManager: {
    title: 'Roof Manager | GTech',
    description: 'Roof Manager keeps roofing jobs, customer records, documents, invoices, payments, and insurance contacts in one place.',
  },
  portfolio: {
    title: 'Software Products | GTech',
    description: 'Explore software from GTech for roofing operations, wardrobe planning, and nutrition and fitness tracking.',
  },
  closetApp: {
    title: 'Closet AI | GTech',
    description: 'Closet AI helps you photograph and organize your clothes, build outfits, and plan what to wear.',
  },
  meegFitnessPal: {
    title: 'Meeg Fitness Pal | GTech',
    description: 'Meeg Fitness Pal tracks meals, macros, exercise, weight, and streaks, with optional AI-assisted food logging.',
  },
  services: {
    title: 'Services | GTech',
    description: 'GTech designs custom business software, replaces manual systems, and helps teams plan practical product releases.',
  },
  about: {
    title: 'About | GTech',
    description: 'GTech builds practical software products and custom systems around clearly defined problems.',
  },
  contact: {
    title: 'Contact | GTech',
    description: 'Contact GTech about its software products or a custom software project.',
  },
}

export const contactCta: CtaLink = {
  label: 'Contact GTech',
  href: '/contact',
  variant: 'primary',
}

export const homeHero: HeroContent = {
  eyebrow: 'Software by GTech',
  title: 'Software for roofing operations, wardrobe planning, and daily fitness.',
  body: 'Explore our products, or talk with us about software built for a specific business need.',
  primaryCta: {
    label: 'View products',
    href: '/products',
    variant: 'primary',
  },
  secondaryCta: {
    label: 'Discuss a project',
    href: '/contact',
    variant: 'secondary',
  },
}

export const roofManager: ProductSummary = {
  name: 'Roof Manager',
  href: '/products/roof-manager',
  summary: 'One place to manage roofing jobs, customer records, documents, invoices, payments, and insurance contacts.',
  audience: 'For residential roofing teams that need a clear view of every job from signed contract through final payment.',
  workflows: [
    'See every job by stage, from new lead and signed contract to scheduled build, invoice, and completion.',
    'Keep customer details, property information, notes, and next steps together.',
    'Create contracts and invoices, generate PDFs, and save them to the job record.',
    'Track invoice totals, payments, and outstanding balances without switching systems.',
    'Keep insurance companies, adjusters, and approval details attached to restoration jobs.',
  ],
  cta: {
    label: 'Discuss a custom system',
    href: '/contact',
    variant: 'primary',
  },
}

export const portfolioProducts: PortfolioProduct[] = [
  {
    name: 'Roof Manager',
    href: '/products/roof-manager',
    category: 'Roofing operations',
    headline: 'Run every roofing job from one place.',
    detailHeading: 'Built for the handoffs that slow roofing teams down.',
    summary: 'Manage job stages, customer records, documents, invoices, payments, and insurance contacts together.',
    audience: 'For residential roofing teams that want one reliable view from signed contract through final payment.',
    features: roofManager.workflows,
    visual: 'roof-manager',
  },
  {
    name: 'Closet AI',
    href: '/products/closet-ai',
    category: 'Wardrobe planning',
    headline: 'Know what you own. Plan what to wear.',
    detailHeading: 'Your wardrobe, searchable and ready to plan.',
    summary: 'Photograph and organize your clothes, build outfits, and plan them on a calendar.',
    audience: 'For anyone who wants to see their wardrobe clearly and spend less time deciding what to wear.',
    features: [
      'Photograph clothing and add it to your personal wardrobe.',
      'Browse, search, and filter what you own by category.',
      'Keep useful details with each item.',
      'Build outfits and plan when to wear them on a calendar.',
    ],
    visual: 'closet-app',
  },
  {
    name: 'Meeg Fitness Pal',
    href: '/products/meeg-fitness-pal',
    category: 'Nutrition and fitness',
    headline: 'Track what matters without making it a chore.',
    detailHeading: 'A clearer picture of your day and your progress.',
    summary: 'Log meals, macros, exercise, weight, and streaks, with AI assistance when you want it.',
    audience: 'For people who want a clear record of their habits and progress without a complicated logging routine.',
    features: [
      'Compare daily calories and macros with your personal targets.',
      'Log meals, saved foods, saved meals, and exercise in one diary.',
      'Estimate nutrition from a description, a photo, or both, then review it before saving.',
      'Follow weight changes and logging streaks over time.',
      'Import and export your data whenever you need it.',
    ],
    visual: 'meeg-fitness-pal',
  },
]

export const services: ServiceOffering[] = [
  {
    title: 'Custom business software',
    summary: 'Design and build web applications for work that off-the-shelf software does not handle well.',
    fit: 'A repeatable process, a clear group of users, and a problem worth removing.',
  },
  {
    title: 'Internal tool rebuilds',
    summary: 'Replace fragile spreadsheets, manual trackers, or unfinished tools with one dependable system.',
    fit: 'A process that works today only because one person knows how to hold it together.',
  },
  {
    title: 'Product planning',
    summary: 'Decide what to build first, what can wait, and what should not be built at all.',
    fit: 'A new idea that needs a realistic scope before design and development begin.',
  },
]

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email GTech',
    value: 'hello@gtech.dev',
    href: 'mailto:hello@gtech.dev',
    note: 'Ask about a GTech product or tell us what you need new software to do.',
  },
]

export const principles = [
  'Understand the work before writing the software.',
  'Build the smallest version that solves the problem well.',
  'Choose technology that will be straightforward to maintain.',
  'Say so when custom software is not the right answer.',
]

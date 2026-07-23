import type { ContactMethod, CtaLink, HeroContent, NavItem, PortfolioProduct, ProductSummary, SeoMeta, ServiceOffering } from './types'

export const navItems: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const siteMeta: Record<string, SeoMeta> = {
  home: {
    title: 'GTech | Software Products for Operators',
    description: 'GTech builds focused software products and selective custom systems for small business operators.',
  },
  roofManager: {
    title: 'Roof Manager | GTech',
    description: 'Roof Manager is GTech’s flagship operating system for roofing job lifecycle, documents, billing, and insurance work.',
  },
  portfolio: {
    title: 'Software Products | GTech',
    description: 'Explore GTech products for field operations, personal wardrobe planning, and practical fitness tracking.',
  },
  closetApp: {
    title: 'Closet AI | GTech',
    description: 'Closet AI turns a photographed wardrobe into an organized, searchable closet with outfit planning tools.',
  },
  meegFitnessPal: {
    title: 'Meeg Fitness Pal | GTech',
    description: 'Meeg Fitness Pal combines food, macro, exercise, weight, and streak tracking with faster AI-assisted logging.',
  },
  services: {
    title: 'Services | GTech',
    description: 'Selective software product and system build work for small and mid-sized business operators.',
  },
  about: {
    title: 'About | GTech',
    description: 'GTech is a new company identity built by experienced software builders focused on useful operator software.',
  },
  contact: {
    title: 'Contact | GTech',
    description: 'Contact GTech about software products, operator systems, and selective consulting work.',
  },
}

export const contactCta: CtaLink = {
  label: 'Start a conversation',
  href: '/contact',
  variant: 'primary',
}

export const homeHero: HeroContent = {
  eyebrow: 'GTech software products',
  title: 'Software that helps operators keep the work moving.',
  body: 'GTech builds practical software products for small business workflows: the jobs, documents, handoffs, billing, and decisions that cannot live in a spreadsheet forever.',
  primaryCta: contactCta,
  secondaryCta: {
    label: 'See Roof Manager',
    href: '/products/roof-manager',
    variant: 'secondary',
  },
}

export const roofManager: ProductSummary = {
  name: 'Roof Manager',
  href: '/products/roof-manager',
  summary: 'A focused job operations system for roofing teams that need one place to track clients, job phases, documents, invoices, payments, and insurance contacts.',
  audience: 'Built for residential roofing operators who need clearer handoffs from signed contract through build completion and final payment.',
  workflows: [
    'Lifecycle board for new jobs, signed contracts, insurance restoration, scheduled builds, invoicing, and completed work.',
    'Client and job records with notes, contact information, location details, and active next actions.',
    'Document composer for contracts and invoices with generated PDF output tied back to the job file.',
    'Billing summaries, payment tracking, and balance visibility from the same operational view.',
    'Insurance company and contact records for restoration jobs where approvals and adjuster communication matter.',
  ],
  cta: {
    label: 'Build a similar system',
    href: '/contact',
    variant: 'primary',
  },
}

export const portfolioProducts: PortfolioProduct[] = [
  {
    name: 'Roof Manager',
    href: '/products/roof-manager',
    category: 'Field operations',
    headline: 'Keep every roofing job moving.',
    summary: 'A focused operations system for job phases, client records, documents, billing, payments, and insurance work.',
    audience: 'Built for residential roofing teams that need one reliable view from signed contract through final payment.',
    features: roofManager.workflows,
    visual: 'roof-manager',
  },
  {
    name: 'Closet AI',
    href: '/products/closet-ai',
    category: 'Wardrobe utility',
    headline: 'A personal wardrobe, organized and ready to wear.',
    summary: 'A searchable wardrobe for capturing clothing, browsing by category, building outfits, and planning what to wear.',
    audience: 'Designed for anyone who wants a more useful view of what they own and a simpler way to decide what to wear.',
    features: [
      'Photograph and add clothing items to a personal digital wardrobe.',
      'Search and filter clothing across a visual wardrobe organized by category.',
      'Open item details and maintain the information attached to each piece.',
      'Build outfits and carry them into calendar-based planning.',
    ],
    visual: 'closet-app',
  },
  {
    name: 'Meeg Fitness Pal',
    href: '/products/meeg-fitness-pal',
    category: 'Health and fitness',
    headline: 'Daily fitness tracking without the drag.',
    summary: 'A personal nutrition and progress tracker for meals, macros, exercise, weight, streaks, and AI-assisted food logging.',
    audience: 'Built for people who want the clarity of consistent tracking with fewer steps between eating, logging, and learning.',
    features: [
      'Track daily calories and macros against personal targets.',
      'Log meals, saved foods, saved meals, and exercise from one focused diary.',
      'Analyze food from a description, a photo, or both, then review before logging.',
      'Follow weight progress and diary streaks over time.',
      'Export and import personal fitness data for greater ownership and portability.',
    ],
    visual: 'meeg-fitness-pal',
  },
]

export const services: ServiceOffering[] = [
  {
    title: 'Operator software products',
    summary: 'Design and build focused web apps for business workflows that are too specific for off-the-shelf tools.',
    fit: 'Best fit when the work has a repeatable process, clear users, and measurable operational friction.',
  },
  {
    title: 'Workflow system rebuilds',
    summary: 'Replace fragile spreadsheets, manual trackers, or half-finished internal tools with a clearer product foundation.',
    fit: 'Best fit when the current system works only because one person knows how to hold it together.',
  },
  {
    title: 'Technical product consulting',
    summary: 'Help owners and operators decide what to build, what to avoid, and how to sequence a practical first release.',
    fit: 'Best fit before committing budget to a custom build or when an existing product needs sharper scope.',
  },
]

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    value: 'hello@gtech.dev',
    href: 'mailto:hello@gtech.dev',
    note: 'Best for product build inquiries and practical project context.',
  },
  {
    label: 'Project brief',
    value: 'Share the workflow you want to improve',
    href: 'mailto:hello@gtech.dev?subject=GTech%20project%20brief',
    note: 'A short note with the current process, users, and pain points is enough to start.',
  },
]

export const principles = [
  'Build around the real operating workflow, not a generic software category.',
  'Start with a small useful release before adding breadth.',
  'Prefer clear data, clean handoffs, and durable maintenance over novelty.',
  'Be honest about fit: not every business problem needs custom software.',
]

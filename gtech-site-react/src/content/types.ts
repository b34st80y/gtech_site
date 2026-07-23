export interface CtaLink {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'text'
}

export interface NavItem {
  label: string
  href: string
}

export interface SeoMeta {
  title: string
  description: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  body: string
  primaryCta: CtaLink
  secondaryCta?: CtaLink
}

export interface ProductSummary {
  name: string
  href: string
  summary: string
  audience: string
  workflows: string[]
  cta: CtaLink
}

export interface ServiceOffering {
  title: string
  summary: string
  fit: string
}

export interface ContactMethod {
  label: string
  value: string
  href: string
  note: string
}

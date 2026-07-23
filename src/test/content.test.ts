import { describe, expect, it } from 'vitest'
import { contactMethods, navItems, portfolioProducts, roofManager, services, siteMeta } from '../content/site'
import type { CtaLink } from '../content/types'

const isValidHref = (href: string) => href.startsWith('/') || href.startsWith('mailto:')

const expectCta = (cta: CtaLink) => {
  expect(cta.label.trim().length).toBeGreaterThan(0)
  expect(isValidHref(cta.href)).toBe(true)
}

describe('content integrity', () => {
  it('keeps navigation targets valid', () => {
    expect(navItems.length).toBeGreaterThan(0)
    navItems.forEach((item) => {
      expect(item.label.trim().length).toBeGreaterThan(0)
      expect(item.href).toMatch(/^\//)
    })
  })

  it('keeps product content complete', () => {
    expect(roofManager.name).toBe('Roof Manager')
    expect(roofManager.workflows.length).toBeGreaterThanOrEqual(4)
    expectCta(roofManager.cta)
    expect(portfolioProducts.map((product) => product.name)).toEqual(['Roof Manager', 'Closet AI', 'Meeg Fitness Pal'])
    portfolioProducts.forEach((product) => {
      expect(product.features.length).toBeGreaterThanOrEqual(4)
      expect(product.href).toMatch(/^\/products\//)
    })
  })

  it('keeps services and contact methods complete', () => {
    services.forEach((service) => {
      expect(service.title.trim().length).toBeGreaterThan(0)
      expect(service.summary.trim().length).toBeGreaterThan(0)
      expect(service.fit.trim().length).toBeGreaterThan(0)
    })

    contactMethods.forEach((method) => {
      expect(isValidHref(method.href)).toBe(true)
      expect(method.value.trim().length).toBeGreaterThan(0)
    })
  })

  it('keeps SEO metadata present', () => {
    Object.values(siteMeta).forEach((meta) => {
      expect(meta.title).toContain('GTech')
      expect(meta.description.length).toBeGreaterThan(40)
    })
  })
})

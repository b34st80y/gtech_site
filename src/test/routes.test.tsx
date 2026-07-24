import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from '../app/routes'

const renderRoute = (route: string) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>,
  )

describe('public routes', () => {
  it.each([
    ['/', 'GTech', 'Three products. Three specific jobs.'],
    ['/products', 'Software with a clear job to do.', 'Closet AI'],
    ['/products/roof-manager', 'Run every roofing job from one place.', 'Discuss Roof Manager'],
    ['/products/closet-ai', 'Know what you own. Plan what to wear.', 'Photograph clothing and add it to your personal wardrobe.'],
    ['/products/meeg-fitness-pal', 'Track what matters without making it a chore.', 'Compare daily calories and macros with your personal targets.'],
    ['/services', 'Custom software for businesses with specific needs.', 'Discuss a project'],
    ['/about', 'We build software with a clear job to do.', 'Contact GTech'],
    ['/contact', 'Tell us what you need the software to do.', 'Email GTech'],
  ])('renders %s', (route, heading, expectedText) => {
    renderRoute(route)

    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
    expect(screen.getAllByText(expectedText).length).toBeGreaterThan(0)
    expect(document.title).toContain('GTech')
  })

  it('offers a global theme control', () => {
    renderRoute('/')

    expect(screen.getAllByRole('button', { name: /switch to (dark|light) mode/i }).length).toBeGreaterThan(0)
  })
})

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
    ['/', 'GTech', 'Start a conversation'],
    ['/products', 'Software built around real, everyday decisions.', 'Closet App'],
    ['/products/roof-manager', 'Roof Manager keeps roofing jobs organized from lead handoff to final payment.', 'Build a similar system'],
    ['/products/closet-app', 'A personal wardrobe, organized and ready to wear.', 'Photograph and add clothing items to a personal digital wardrobe.'],
    ['/products/meeg-fitness-pal', 'Daily fitness tracking without the drag.', 'Track daily calories and macros against personal targets.'],
    ['/services', 'Selective software build work for SMB operators.', 'Start a conversation'],
    ['/about', 'A new company identity for experienced software builders.', 'Start a conversation'],
    ['/contact', 'Start with the workflow, not a form.', 'Email'],
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

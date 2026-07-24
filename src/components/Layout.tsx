import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { contactCta, navItems } from '../content/site'
import { BrandMark } from './BrandMark'
import { CtaButton } from './CtaButton'
import { ThemeToggle } from './ThemeToggle'

export const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-page text-ink">
      <header className="sticky top-0 z-50 border-b border-line/70 bg-page/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary">
          <Link to="/" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <BrandMark className="h-10 w-10 shrink-0" />
            <span className="text-2xl font-extrabold tracking-tight text-logoInk">GTech</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'text-sm font-semibold transition hover:text-accentDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
                    isActive ? 'text-accentDark' : 'text-muted',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <CtaButton cta={contactCta} />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-line bg-page px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink key={item.href} to={item.href} onClick={() => setMenuOpen(false)} className="text-base font-semibold text-ink">
                  {item.label}
                </NavLink>
              ))}
              <CtaButton cta={contactCta} />
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-line bg-canvas">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10 shrink-0" />
              <p className="text-2xl font-extrabold tracking-tight text-logoInk">GTech</p>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
              Practical software for roofing operations, wardrobe planning, fitness tracking, and specific business needs.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="text-sm font-semibold text-muted transition hover:text-accentDark">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

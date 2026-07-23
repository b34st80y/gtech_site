import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const getTheme = (): Theme => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('gtech-theme', theme)

    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (themeColor) themeColor.content = theme === 'dark' ? '#0d1716' : '#185352'

    const syncTheme = (event: Event) => setTheme((event as CustomEvent<Theme>).detail)
    window.addEventListener('gtech-theme-change', syncTheme)
    return () => window.removeEventListener('gtech-theme-change', syncTheme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-accent hover:bg-accentSoft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      onClick={() => {
        const nextTheme = isDark ? 'light' : 'dark'
        setTheme(nextTheme)
        window.dispatchEvent(new CustomEvent<Theme>('gtech-theme-change', { detail: nextTheme }))
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  )
}

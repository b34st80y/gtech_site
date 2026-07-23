import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CtaLink } from '../content/types'

const variantClassName: Record<NonNullable<CtaLink['variant']>, string> = {
  primary: 'bg-accentDark text-page shadow-[0_16px_36px_rgb(24_83_82_/_0.18)] hover:bg-accent focus-visible:outline-accent',
  secondary: 'border border-accentDark/20 bg-surface text-ink hover:border-accent hover:bg-accentSoft hover:text-accentDark focus-visible:outline-accent',
  text: 'text-ink hover:text-accentDark focus-visible:outline-accent',
}

export const CtaButton = ({ cta }: { cta: CtaLink }) => {
  const className = [
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
    variantClassName[cta.variant ?? 'primary'],
  ].join(' ')

  if (cta.href.startsWith('mailto:')) {
    return (
      <a className={className} href={cta.href}>
        {cta.label}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    )
  }

  return (
    <Link className={className} to={cta.href}>
      {cta.label}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  )
}

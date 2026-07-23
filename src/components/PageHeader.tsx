import { CtaButton } from './CtaButton'
import type { CtaLink } from '../content/types'

export const PageHeader = ({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow: string
  title: string
  body: string
  cta?: CtaLink
}) => (
  <section className="bg-canvas">
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">{eyebrow}</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
        <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.95] md:text-7xl">{title}</h1>
        <div>
          <p className="text-lg leading-8 text-muted">{body}</p>
          {cta && (
            <div className="mt-7">
              <CtaButton cta={cta} />
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
)

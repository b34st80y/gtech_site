import { Link } from 'react-router-dom'
import { usePageMeta } from '../app/metadata'
import { CtaButton } from '../components/CtaButton'
import { RoofManagerVisual } from '../components/RoofManagerVisual'
import { ProductVisual } from '../components/ProductVisual'
import { homeHero, portfolioProducts, roofManager, services, siteMeta } from '../content/site'

export const HomePage = () => {
  usePageMeta(siteMeta.home)

  return (
    <>
      <section className="relative overflow-hidden bg-canvas">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accentSoft to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="motion-safe:animate-[rise_700ms_ease-out_both]">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">{homeHero.eyebrow}</p>
            <h1 className="mt-5 text-7xl font-extrabold leading-none tracking-tight text-logoInk md:text-8xl">GTech</h1>
            <p className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">{homeHero.title}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{homeHero.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton cta={homeHero.primaryCta} />
              {homeHero.secondaryCta && <CtaButton cta={homeHero.secondaryCta} />}
            </div>
          </div>
          <div className="motion-safe:animate-[rise_900ms_ease-out_120ms_both]">
            <div className="lg:hidden">
              <ProductVisual visual="roof-manager" compact />
            </div>
            <div className="hidden lg:block">
              <RoofManagerVisual />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-page">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Featured products</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold md:text-6xl">Purpose-built products for work and life.</h2>
            </div>
            <Link to="/products" className="font-semibold text-accentDark transition hover:text-ink">View all products</Link>
          </div>
          <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-3">
            {portfolioProducts.map((product) => (
              <article key={product.name} className="group flex h-full flex-col border-t border-line pt-6">
                <ProductVisual visual={product.visual} compact />
                <div className="flex flex-1 flex-col pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accentDark">{product.category}</p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold">{product.name}</h3>
                  <p className="mt-3 leading-7 text-muted">{product.summary}</p>
                  <div className="mt-auto pt-5">
                    <Link to={product.href} className="inline-flex border-b border-accentDark pb-1 font-semibold text-accentDark transition group-hover:border-accent group-hover:text-accent">Explore product</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.85fr_1fr] lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Flagship proof point</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">{roofManager.name}</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{roofManager.summary}</p>
            <div className="mt-8">
              <CtaButton cta={{ label: 'Explore Roof Manager', href: roofManager.href, variant: 'secondary' }} />
            </div>
          </div>
          <div className="space-y-4">
            {roofManager.workflows.slice(0, 4).map((workflow) => (
              <div key={workflow} className="border-t border-line py-6">
                <p className="text-xl leading-8">{workflow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121e1c] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/55">Why GTech exists</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
              Useful software for businesses that operate in the real world.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              GTech is a new company identity, but the work is grounded in experienced software building: understand the actual process, ship a durable first release, and keep the system easy to own.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-page">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Selective services</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Product work first. Services where they fit.</h2>
            </div>
            <Link to="/services" className="font-semibold text-accentDark transition hover:text-ink">
              View services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="border-t border-line pt-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted">{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-16 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="max-w-2xl font-serif text-4xl font-semibold md:text-5xl">Have an operator workflow that needs its own system?</h2>
          <CtaButton cta={homeHero.primaryCta} />
        </div>
      </section>
    </>
  )
}

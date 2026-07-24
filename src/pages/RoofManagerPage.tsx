import { usePageMeta } from '../app/metadata'
import { CtaButton } from '../components/CtaButton'
import { PageHeader } from '../components/PageHeader'
import { RoofManagerVisual } from '../components/RoofManagerVisual'
import { roofManager, siteMeta } from '../content/site'

export const RoofManagerPage = () => {
  usePageMeta(siteMeta.roofManager)

  return (
    <>
      <PageHeader eyebrow="Roof Manager" title="Run every roofing job from one place." body={roofManager.summary} cta={{ label: 'Discuss Roof Manager', href: '/contact', variant: 'primary' }} />

      <section className="bg-page">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.75fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Who it serves</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">Built for the handoffs that slow roofing teams down.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{roofManager.audience}</p>
          </div>
          <RoofManagerVisual />
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">What it does</p>
          <div className="mt-8 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {roofManager.workflows.map((workflow) => (
              <div key={workflow} className="border-t border-line py-7">
                <p className="text-xl leading-8">{workflow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_0.65fr] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Custom systems</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Need this kind of control in a different business?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              GTech builds software around the way your team already works, without forcing the job into a generic template.
            </p>
          </div>
          <CtaButton cta={roofManager.cta} />
        </div>
      </section>
    </>
  )
}

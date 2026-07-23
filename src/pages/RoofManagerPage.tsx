import { usePageMeta } from '../app/metadata'
import { CtaButton } from '../components/CtaButton'
import { PageHeader } from '../components/PageHeader'
import { RoofManagerVisual } from '../components/RoofManagerVisual'
import { roofManager, siteMeta } from '../content/site'

export const RoofManagerPage = () => {
  usePageMeta(siteMeta.roofManager)

  return (
    <>
      <PageHeader eyebrow="Flagship product" title="Roof Manager keeps roofing jobs organized from lead handoff to final payment." body={roofManager.summary} cta={roofManager.cta} />

      <section className="bg-page">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.75fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Who it serves</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">Built for roofing operators with too much process spread across too many places.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{roofManager.audience}</p>
          </div>
          <RoofManagerVisual />
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Key workflows</p>
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
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Product pattern</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">The same approach works beyond roofing.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Roof Manager is the proof point for GTech’s larger focus: small business systems that make operational state visible and help the next action happen sooner.
            </p>
          </div>
          <CtaButton cta={roofManager.cta} />
        </div>
      </section>
    </>
  )
}

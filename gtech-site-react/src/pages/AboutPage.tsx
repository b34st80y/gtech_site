import { usePageMeta } from '../app/metadata'
import { PageHeader } from '../components/PageHeader'
import { contactCta, principles, siteMeta } from '../content/site'

export const AboutPage = () => {
  usePageMeta(siteMeta.about)

  return (
    <>
      <PageHeader
        eyebrow="About GTech"
        title="A new company identity for experienced software builders."
        body="GTech is early. The name is new, the operating focus is deliberate, and the work is centered on building useful software products for real business workflows."
        cta={contactCta}
      />
      <section className="bg-page">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.7fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Position</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">Small by design. Product-minded from the start.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              GTech is not presented as a mature agency with a large client roster. It is a focused company identity for software builders who know how to turn messy operational work into maintainable products.
            </p>
            <p>
              The current focus is narrow: build and prove software products, use Roof Manager as the flagship example, and take on selective service work only where the workflow and business need are clear.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">Principles</p>
          <div className="mt-8 grid gap-x-10 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="border-t border-line py-7">
                <p className="text-xl leading-8">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

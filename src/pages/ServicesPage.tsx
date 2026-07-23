import { usePageMeta } from '../app/metadata'
import { CtaButton } from '../components/CtaButton'
import { PageHeader } from '../components/PageHeader'
import { contactCta, services, siteMeta } from '../content/site'

export const ServicesPage = () => {
  usePageMeta(siteMeta.services)

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Selective software build work for SMB operators."
        body="GTech services are intentionally narrow: practical product and system work for businesses with a real workflow to improve."
        cta={contactCta}
      />
      <section className="bg-page">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="border-t border-line py-7">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-4 leading-7 text-muted">{service.summary}</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-accentDark">Fit</p>
                <p className="mt-2 leading-7 text-muted">{service.fit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-canvas">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="max-w-2xl font-serif text-4xl font-semibold">The best first step is a clear description of the workflow.</h2>
          <CtaButton cta={contactCta} />
        </div>
      </section>
    </>
  )
}

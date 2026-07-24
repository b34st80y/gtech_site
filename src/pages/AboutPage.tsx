import { usePageMeta } from '../app/metadata'
import { PageHeader } from '../components/PageHeader'
import { contactCta, principles, siteMeta } from '../content/site'

export const AboutPage = () => {
  usePageMeta(siteMeta.about)

  return (
    <>
      <PageHeader
        eyebrow="About GTech"
        title="We build software with a clear job to do."
        body="GTech makes practical products and custom systems for problems that deserve a better tool."
        cta={{ ...contactCta, label: 'Contact GTech' }}
      />
      <section className="bg-page">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.7fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">What we do</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">Products first. Custom work when the fit is right.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              Our products currently cover roofing operations, wardrobe planning, and nutrition and fitness tracking. Each one starts with a specific problem and stays focused on solving it well.
            </p>
            <p>
              We also build custom software when a business has outgrown spreadsheets, manual trackers, or generic tools. If a simpler solution already exists, we will say so.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">How we work</p>
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

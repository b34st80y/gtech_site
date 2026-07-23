import { Mail } from 'lucide-react'
import { usePageMeta } from '../app/metadata'
import { PageHeader } from '../components/PageHeader'
import { contactMethods, siteMeta } from '../content/site'

export const ContactPage = () => {
  usePageMeta(siteMeta.contact)

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start with the workflow, not a form."
        body="GTech v1 uses static contact methods only. Send a concise note about the business process, who uses it, and what breaks down today."
      />
      <section className="bg-page">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 md:grid-cols-2 lg:px-8">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              className="group border-t border-line py-7 transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <Mail className="h-6 w-6 text-accentDark" aria-hidden="true" />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-muted">{method.label}</p>
              <h2 className="mt-2 text-2xl font-semibold transition group-hover:text-accentDark">{method.value}</h2>
              <p className="mt-4 leading-7 text-muted">{method.note}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

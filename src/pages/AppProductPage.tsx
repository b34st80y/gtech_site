import { usePageMeta } from '../app/metadata'
import { CtaButton } from '../components/CtaButton'
import { PageHeader } from '../components/PageHeader'
import { ProductVisual } from '../components/ProductVisual'
import { contactCta } from '../content/site'
import type { PortfolioProduct, SeoMeta } from '../content/types'

export const AppProductPage = ({ product, meta }: { product: PortfolioProduct; meta: SeoMeta }) => {
  usePageMeta(meta)

  return (
    <>
      <PageHeader eyebrow={product.name} title={product.headline} body={product.summary} />
      <section className="bg-page">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.72fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">{product.category}</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold">{product.detailHeading}</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{product.audience}</p>
          </div>
          <ProductVisual visual={product.visual} />
        </div>
      </section>
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">What it does</p>
          <div className="mt-8 grid gap-x-10 md:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature} className="border-t border-line py-7">
                <p className="text-xl leading-8">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-page">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center lg:px-8">
          <h2 className="max-w-2xl font-serif text-4xl font-semibold md:text-5xl">Questions about {product.name}?</h2>
          <CtaButton cta={{ ...contactCta, label: 'Contact GTech' }} />
        </div>
      </section>
    </>
  )
}

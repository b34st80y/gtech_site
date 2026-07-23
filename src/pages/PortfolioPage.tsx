import { Link } from 'react-router-dom'
import { usePageMeta } from '../app/metadata'
import { PageHeader } from '../components/PageHeader'
import { ProductVisual } from '../components/ProductVisual'
import { portfolioProducts, siteMeta } from '../content/site'

export const PortfolioPage = () => {
  usePageMeta(siteMeta.portfolio)

  return (
    <>
      <PageHeader
        eyebrow="GTech products"
        title="Software built around real, everyday decisions."
        body="Three products, each focused on making a specific kind of work easier to see, manage, and move forward."
      />
      <section className="bg-page">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="space-y-20">
            {portfolioProducts.map((product, index) => (
              <article key={product.name} className="grid items-center gap-10 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-accentDark">{product.category}</p>
                  <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">{product.name}</h2>
                  <p className="mt-4 text-2xl font-semibold leading-tight">{product.headline}</p>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{product.summary}</p>
                  <Link to={product.href} className="mt-7 inline-flex border-b border-accentDark pb-1 font-semibold text-accentDark transition hover:border-accent hover:text-accent">
                    View product story
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <ProductVisual visual={product.visual} compact />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

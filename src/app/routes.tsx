import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { AppProductPage } from '../pages/AppProductPage'
import { PortfolioPage } from '../pages/PortfolioPage'
import { RoofManagerPage } from '../pages/RoofManagerPage'
import { ServicesPage } from '../pages/ServicesPage'
import { portfolioProducts, siteMeta } from '../content/site'

const closetApp = portfolioProducts.find((product) => product.visual === 'closet-app')!
const meegFitnessPal = portfolioProducts.find((product) => product.visual === 'meeg-fitness-pal')!

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<PortfolioPage />} />
      <Route path="/portfolio" element={<Navigate to="/products" replace />} />
      <Route path="/products/roof-manager" element={<RoofManagerPage />} />
      <Route path="/products/closet-ai" element={<AppProductPage product={closetApp} meta={siteMeta.closetApp} />} />
      <Route path="/products/closet-app" element={<Navigate to="/products/closet-ai" replace />} />
      <Route path="/products/meeg-fitness-pal" element={<AppProductPage product={meegFitnessPal} meta={siteMeta.meegFitnessPal} />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { ActivityDetailPage } from './pages/ActivityDetailPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { ContactPage } from './pages/ContactPage'
import { DonationsPage } from './pages/DonationsPage'
import { HomePage } from './pages/HomePage'
import { InstitutionsPage } from './pages/InstitutionsPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { ProgramsPage } from './pages/ProgramsPage'
import { ShopPage } from './pages/ShopPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="institutions" element={<InstitutionsPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:activityId" element={<ActivityDetailPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="donations" element={<DonationsPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

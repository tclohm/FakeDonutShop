
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./contexts/CartContext"
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import AboutPage from "./pages/AboutPage"
import LocationsPage from "./pages/LocationsPage"

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/locations" element={<LocationsPage />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App


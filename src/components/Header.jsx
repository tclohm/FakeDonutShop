"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "../contexts/CartContext"

function Header() {
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="aidonut.png" alt="Landy's Donuts Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold">Landy's Donuts</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link to="/menu" className="text-sm font-medium hover:underline underline-offset-4">
            Menu
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/locations" className="text-sm font-medium hover:underline underline-offset-4">
            Locations
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <Button variant="outline" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/menu" className="hidden md:block">
            <Button>Order Now</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/menu" className="text-sm font-medium" onClick={toggleMenu}>
              Menu
            </Link>
            <Link to="/about" className="text-sm font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/locations" className="text-sm font-medium" onClick={toggleMenu}>
              Locations
            </Link>
            <Link to="/menu" onClick={toggleMenu}>
              <Button className="w-full">Order Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header



"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useCart } from "../contexts/CartContext"
import { formatCurrency } from "../utils/formatCurrency"

function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [subtotal, setSubtotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculatedSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const calculatedTax = calculatedSubtotal * 0.0925 // 9.25% sales tax
    const calculatedTotal = calculatedSubtotal + calculatedTax

    setSubtotal(calculatedSubtotal)
    setTax(calculatedTax)
    setTotal(calculatedTotal)
  }, [cart])

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-12">
          <div className="max-w-2xl mx-auto text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any donuts to your cart yet.</p>
            <Link to="/menu">
              <Button size="lg">Browse Our Menu</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flow-root">
                  <ul className="-my-6 divide-y">
                    {cart.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium">
                              <h3>{item.name}</h3>
                              <p className="ml-4">{formatCurrency(item.price * item.quantity)}</p>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="px-2">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-700"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <div className="flex justify-between">
                  <Button variant="outline" onClick={clearCart}>
                    Clear Cart
                  </Button>
                  <Link to="/menu">
                    <Button variant="outline">Continue Shopping</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-medium mb-6">Order Summary</h2>
                <div className="flow-root">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p className="text-muted-foreground">Subtotal</p>
                      <p className="font-medium">{formatCurrency(subtotal)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-muted-foreground">Tax (9.25%)</p>
                      <p className="font-medium">{formatCurrency(tax)}</p>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-medium">
                      <p>Total</p>
                      <p>{formatCurrency(total)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 px-6 py-6">
                <h2 className="text-lg font-medium mb-4">Shipping Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <Input id="firstName" name="firstName" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <Input id="lastName" name="lastName" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <Input id="address" name="address" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <Input id="city" name="city" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code
                      </label>
                      <Input id="zipCode" name="zipCode" />
                    </div>
                  </div>
                  <Link to="/checkout">
                    <Button className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CartPage


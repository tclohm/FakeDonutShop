"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../contexts/CartContext"

function AddToCartButton({ item }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(item)
    setIsAdded(true)

    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <Button onClick={handleAddToCart} className="w-full" variant={isAdded ? "secondary" : "default"}>
      {isAdded ? (
        "Added to Cart!"
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </>
      )}
    </Button>
  )
}

export default AddToCartButton


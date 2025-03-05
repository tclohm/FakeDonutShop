"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import AddToCartButton from "../components/AddToCartButton"

// Sample menu data
const menuData = {
  classics: [
    {
      id: 1,
      name: "Classic Glazed",
      price: 2.99,
      description: "Our signature light and fluffy glazed donut",
      image: "GlazedDonut.png",
    },
    {
      id: 2,
      name: "Chocolate Raised",
      price: 3.49,
      description: "Raised donut with rich chocolate glaze",
      image: "ChocolateDonut.png",
    },
    {
      id: 3,
      name: "Maple Bar",
      price: 3.49,
      description: "Long bar donut with sweet maple glaze",
      image: "MapleBar.png",
    },
    {
      id: 4,
      name: "Old Fashioned",
      price: 3.29,
      description: "Traditional cake donut with a crisp exterior",
      image: "FashionedDonut.png",
    },
    {
      id: 5,
      name: "Jelly Filled",
      price: 3.79,
      description: "Filled with sweet raspberry jelly and dusted with powdered sugar",
      image: "JellyFilledDonut.png",
    },
    {
      id: 6,
      name: "Cinnamon Sugar",
      price: 2.99,
      description: "Coated in a perfect blend of cinnamon and sugar",
      image: "CinnamonDonut.png",
    },
  ],
  specialty: [
    {
      id: 7,
      name: "Maple Bacon",
      price: 4.29,
      description: "Maple glaze topped with crispy bacon pieces",
      image: "MapleBaconDonut.png",
    },
    {
      id: 8,
      name: "S'mores",
      price: 4.49,
      description: "Chocolate glaze with graham cracker crumbs and marshmallow drizzle",
      image: "SmoreDonut.png",
    },
    {
      id: 9,
      name: "Cookies & Cream",
      price: 4.29,
      description: "Vanilla glaze with chocolate cookie crumbles",
      image: "CookiesCreamDonut.png",
    },
    {
      id: 10,
      name: "Blueberry Crumb",
      price: 4.29,
      description: "Blueberry cake donut with sweet crumb topping",
      image: "BlueberryCrumb.png",
    },
    {
      id: 11,
      name: "Red Velvet",
      price: 4.49,
      description: "Red velvet cake donut with cream cheese glaze",
      image: "RedVelvetDonut.png",
    },
    {
      id: 12,
      name: "Nutella Dream",
      price: 4.79,
      description: "Filled with Nutella and topped with hazelnuts",
      image: "NutellaDonut.png",
    },
  ],
  seasonal: [
    {
      id: 13,
      name: "Pumpkin Spice",
      price: 4.49,
      description: "Fall favorite with pumpkin spice glaze",
      image: "PumpkinSpiceDonut.png",
    },
    {
      id: 14,
      name: "Strawberry Shortcake",
      price: 4.79,
      description: "Filled with fresh strawberry jam and vanilla cream",
      image: "StrawberryShortcakeDonut.png",
    },
    {
      id: 15,
      name: "Lemon Meringue",
      price: 4.79,
      description: "Filled with lemon curd and topped with meringue",
      image: "LemonMeringueDonut.png",
    },
  ],
  beverages: [
    {
      id: 16,
      name: "Coffee",
      price: 2.49,
      description: "Freshly brewed premium coffee",
      image: "Coffee.png",
    },
    {
      id: 17,
      name: "Cold Brew",
      price: 3.99,
      description: "Smooth, rich cold brewed coffee",
      image: "ColdBrew.png",
    },
    {
      id: 18,
      name: "Hot Chocolate",
      price: 3.49,
      description: "Rich and creamy hot chocolate",
      image: "HotChocolate.png",
    },
  ],
}

function MenuPage() {
  const [activeTab, setActiveTab] = useState("classics")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
          <p className="text-lg text-muted-foreground mb-8">Handcrafted donuts made fresh daily</p>

          <Tabs defaultValue="classics" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="classics">Classics</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>

            <TabsContent value="classics">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.classics.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specialty">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.specialty.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="seasonal">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.seasonal.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beverages">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.beverages.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function MenuCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" id={item.name.toLowerCase().replace(/\s+/g, "-")}>
      <div className="relative h-60">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <span className="font-medium">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        <AddToCartButton item={item} />
      </div>
    </div>
  )
}

export default MenuPage


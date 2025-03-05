import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-black/40" />
          <div className="relative h-[70vh] w-full">
            <img
              src="DonutWallpaper.png"
              alt="Delicious donuts display"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">LA Donuts</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Not World Famous. Just Damn Good.
                We're not global. We're local.
                Skip the hype. Taste the difference.
                Every donut tells a story. Ours starts here. 
              </p>
              <Link to="/menu">
                <Button size="lg" className="text-lg">
                  View Our Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-center mb-12">Fan Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Classic Glazed", price: 2.99, image: "GlazedDonut.png" },
              { name: "Chocolate Raised", price: 3.49, image: "ChocolateDonut.png" },
              { name: "Maple Bacon", price: 4.29, image: "MapleBaconDonut.png" },
            ].map((donut, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-60">
                  <img
                    src={donut.image || "/placeholder.svg"}
                    alt={donut.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{donut.name}</h3>
                  <p className="text-muted-foreground mb-4">${donut.price.toFixed(2)}</p>
                  <Link to={`/menu#${donut.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" className="w-full">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="outline" size="lg">
                See Full Menu
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg mb-6">
                  Born in the heart of Los Angeles in 1980, Mandy's Donuts isn't just a shop—it's a piece of city history.
                </p>
                <p className="text-lg mb-6">
                 Real Ingredients. Real People.
                100% Employee-Owned.
                Ethically sourced. Locally loved.
                Simple donuts.                </p>
                <Link to="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <img
                  src="DonutTruck1980.png"
                  alt="Mandy's Donuts storefront"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage


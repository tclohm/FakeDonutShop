
import Header from "../components/Header"
import Footer from "../components/Footer"

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-8">About Mandy's Donuts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Mandy's Donuts has been a landmark in Los Angeles since 1980. Our iconic giant donut sign has been
              featured in countless movies, TV shows, and photos.
            </p>
            <p className="text-lg mb-4">
              We take pride in our handcrafted donuts made fresh daily using premium ingredients and recipes that have
              stood the test of time.
            </p>
            <p className="text-lg">
              What started as a small donut shop in Inglewood has grown into a beloved institution, serving generations
              of Angelenos and visitors from around the world.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="DonutMaking.png"
              alt="Mandy's Donuts storefront"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Quality Ingredients</h3>
              <p>
                We use only the finest ingredients in our donuts, ensuring that every bite is delicious and satisfying.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Handcrafted Daily</h3>
              <p>Our donuts are made fresh every day by skilled bakers who take pride in their craft.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Community First</h3>
              <p>We're proud to be a part of the Los Angeles community and strive to give back whenever possible.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Mandy Johnson", title: "Founder", image: "Mandy.png" },
              { name: "Sarah Lee", title: "Head Baker", image: "Sarah.png" },
              { name: "Michael Chen", title: "Operations Manager", image: "Michael.png" },
              { name: "Jessica Rodriguez", title: "Customer Experience", image: "Jessica.png" },
            ].map((person, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{person.name}</h3>
                <p className="text-muted-foreground">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage


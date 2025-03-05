
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
             Honest donuts. Honest ingredients. No biography needed.
            </p>
            <p className="text-lg mb-4">
             Our cooperative of bakers owns every step of the process, from selecting premium ingredients to perfecting time-tested recipes. We're not chasing Instagram fame—we're crafting your daily ritual.
            </p>
            <p className="text-lg">
              Simple. Fresh. Ours.               
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
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Quality Speaks</h3>
              <p>
                Premium ingredients. No shortcuts. Every donut, a testament to what matters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Crafted With Intention</h3>
              <p>From hands that care to your morning ritual. Fresh. Daily. Without exception.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">Rooted in Community</h3>
              <p>More than a donut shop—we're your neighbors. Los Angeles grown, community owned.</p>
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


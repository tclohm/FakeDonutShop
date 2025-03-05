import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"

function LocationsPage() {
  const locations = [
    {
      name: "Inglewood",
      address: "805 W Manchester Blvd, Inglewood, CA 90301",
      phone: "(310) 645-4707",
      hours: "Monday - Sunday: 5:30am - 9:00pm",
      image: "InglewoodLocation.png",
      mapUrl: "https://maps.google.com/?q=Randy's+Donuts+Inglewood",
    },
    {
      name: "El Segundo",
      address: "230 S Sepulveda Blvd, El Segundo, CA 90245",
      phone: "(310) 356-5689",
      hours: "Monday - Sunday: 6:00am - 8:00pm",
      image: "ElSegundoLocation.png",
      mapUrl: "https://maps.google.com/?q=Randy's+Donuts+El+Segundo",
    },
    {
      name: "Hollywood",
      address: "6201 Hollywood Blvd, Los Angeles, CA 90028",
      phone: "(323) 462-3864",
      hours: "Monday - Sunday: 6:00am - 10:00pm",
      image: "HollywoodLocation.png",
      mapUrl: "https://maps.google.com/?q=Randy's+Donuts+Hollywood",
    },
    {
      name: "Downtown LA",
      address: "415 W 7th St, Los Angeles, CA 90014",
      phone: "(213) 689-1940",
      hours: "Monday - Friday: 6:00am - 8:00pm, Saturday - Sunday: 7:00am - 8:00pm",
      image: "DowntownLALocation.png",
      mapUrl: "https://maps.google.com/?q=Randy's+Donuts+Downtown+LA",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-2">Our Locations</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Visit us at one of our many locations throughout Los Angeles
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-60">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={`Randy's Donuts ${location.name} location`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{location.name}</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <p>{location.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <p>{location.hours}</p>
                  </div>
                </div>
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LocationsPage


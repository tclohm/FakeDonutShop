import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "../components/ui/button"
import { MapPin, Clock, Phone } from "lucide-react"
import { Link } from "react-router-dom"

function LocationsPage() {
  const locations = [
    {
      name: "Inglewood",
      address: "4812 W Chelsea Blvd, Inglewood, CA 90301",
      phone: "(555) 555-5551",
      hours: "Monday - Sunday: 5:30am - 9:00pm",
      image: "InglewoodLocation.png",
    },
    {
      name: "El Segundo",
      address: "912 S Everton Pl, El Segundo, CA 90245",
      phone: "(555) 555-5655",
      hours: "Monday - Sunday: 6:00am - 8:00pm",
      image: "ElSegundoLocation.png",
    },
    {
      name: "Hollywood",
      address: "157 Forest City Ave, Los Angeles, CA 90028",
      phone: "(555) 555-5543",
      hours: "Monday - Sunday: 6:00am - 10:00pm",
      image: "HollywoodLocation.png",
    },
    {
      name: "Downtown LA",
      address: "49 West Brom St, Los Angeles, CA 90014",
      phone: "(555) 555-5552",
      hours: "Monday - Friday: 6:00am - 8:00pm, Saturday - Sunday: 7:00am - 8:00pm",
      image: "DowntownLALocation.png",
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
                  loading="lazy"
                  src={location.image || "/placeholder.svg"}
                  alt={`Landy's Donuts ${location.name} location`}
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
                <Link to="/map">                  
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </Link>
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


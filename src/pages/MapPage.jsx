"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { MapPin } from "lucide-react"

function MapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0" />
          <div className="relative h-[70vh] w-full">
            <img
              src="FakeLosAngelesMap.png"
              alt="Fake Map"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <MapPin className="h-16 w-16 mr-2 mt-0.5 text-pink-900" />
          </div>
        </section>
    </main>
    <Footer />
  </div>
  )
}

export default MapPage

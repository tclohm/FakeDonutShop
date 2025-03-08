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
              loading="lazy"
              src="FakeLosAngelesMap.png"
              alt="Fake Map"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute z-20 bottom-32 right-32 flex items-center justify-center">
            <MapPin className="h-16 w-16 mt-0.5 p-1 text-white bg-orange-500 rounded-xl" />
          </div>
          <div className="absolute z-20 bottom-52 left-52 flex items-center justify-center">
            <MapPin className="h-14 w-14 mt-0.5 p-1 text-white bg-orange-500 rounded-xl" />
          </div>
          <div className="absolute z-20 top-8 right-52 flex items-center justify-center">
            <MapPin className="h-8 w-8 mt-0.5 p-1 text-white bg-orange-500 rounded-xl" />
          </div>
          <div className="absolute z-20 top-12 left-12 flex items-center justify-center">
            <MapPin className="h-10 w-8 mt-0.5 p-1 text-white bg-orange-500 rounded-xl" />
          </div>

        </section>
    </main>
    <Footer />
  </div>
  )
}

export default MapPage

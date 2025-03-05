"use client"
function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-black/40" />
          <div className="relative h-[70vh] w-full">
            <div
              src="DonutWallpaper.png"
              alt="Delicious donuts display"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div>PIN</div>
          </div>
        </section>
    </main>
    <Footer />
  </div>
  )
}

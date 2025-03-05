import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mandy's Donuts</h3>
            <p>Serving LA donuts since 1980.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:underline">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:underline">
                  Locations
                </Link>
              </li>
            </ul>
          </div>
          <div className="blur-sm">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>xxx Xxxxxxxxxx Blvd</li>
              <li>Coolbeans, CA XXXXXX</li>
              <li>(xxx) xxx-xxxx</li>
              <li>xxx@xxxxxxx.com</li>
            </ul>
          </div>
          <div className="blur-sm">
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 5:30am - 9:00pm</li>
              <li>Saturday: 6:00am - 9:00pm</li>
              <li>Sunday: 6:00am - 8:00pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Mandy's Donuts. All rights reserved. Photos were created by AI. This is not a real business.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


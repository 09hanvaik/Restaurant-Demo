import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">FastBites</h3>
          <p className="text-sm">
            Your go-to for delicious and quick meals. Fresh ingredients, fast service, unforgettable taste.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-primary transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/track-order" className="hover:text-primary transition-colors">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-5 w-5" />
            <span>123 Fast Food Lane, Flavor Town, CA 90210</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-5 w-5" />
            <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
          </div>
          <p className="text-sm">Email: info@fastbites.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="container text-center text-xs mt-8 border-t pt-4 border-secondary-foreground/20">
        &copy; {new Date().getFullYear()} FastBites. All rights reserved.
      </div>
    </footer>
  )
}

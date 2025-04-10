import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white pt-16 pb-8 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 overflow-hidden">
                <Image src="/logo.svg" alt="Noor's Path Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-xl font-bold">Noor&apos;s Path</span>
            </Link>
            <p className="text-primary-100 mb-4">
              Providing quality education and healthcare to orphans and less privileged children.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary-200 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary-200 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary-200 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-primary-100 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/outreach" className="text-primary-100 hover:text-white transition-colors">
                  Our Outreach
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-primary-100 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-primary-100 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-primary-100 hover:text-white transition-colors">
                  Corporate Partnerships
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-primary-100 hover:text-white transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-primary-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-300 flex-shrink-0" />
                <span className="text-primary-100">123 Charity Lane, Compassion City, CC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-300 flex-shrink-0" />
                <span className="text-primary-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-300 flex-shrink-0" />
                <span className="text-primary-100">info@noorspath.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-600 mt-12 pt-8 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} Noor&apos;s Path. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

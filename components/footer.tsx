import Link from "next/link";
import Image from "next/image";
import {  X, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white pt-16 pb-8 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start justify-start">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logoo.png"
                alt="Noor's Path Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white">
                Noor&apos;s Path
              </span>
            </Link>

            <div className="flex space-x-4 mt-2">
              <Link
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-200 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-200 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://x.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-200 transition-colors"
              >
                <X size={20} />
                <span className="sr-only">X (formerly Twitter)</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Get Involved", href: "/get-involved" },
                { label: "Our Outreach", href: "/outreach" },
                { label: "Donate", href: "/donate" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              {[
                { label: "Our Team", href: "/team" },
                { label: "Corporate Partnerships", href: "/partnerships" },
                { label: "News & Updates", href: "/news" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary-100 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-300 flex-shrink-0" />
                <span className="text-primary-100">
                  Ilorin, Kwara State, Nigeria.{" "}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-300 flex-shrink-0" />
                <span className="text-primary-100">+234 815 6134 148</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-300 flex-shrink-0" />
                <a
                  href="mailto:info@noorspath.org"
                  className="text-primary-100 hover:underline"
                >
                  info@noorspath.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-600 mt-12 pt-8 text-center text-primary-200">
          <p>
            &copy; {new Date().getFullYear()} Noor&apos;s Path. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

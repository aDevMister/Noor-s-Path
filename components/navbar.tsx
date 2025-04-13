"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Our Outreach", href: "/outreach" },
  { name: "Team", href: "/team" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2 bg-primary-700/95 backdrop-blur-sm shadow-md" : "py-3 bg-primary-700",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <div className=" h-15 w-15 overflow-hidden">
            <Image src="/logoo.png" alt="Noor's Path Logo" width={100} height={100} className="object-contain" />
          </div>
          <span className="text-xl font-bold text-white">Noor&apos;s Path</span>
        </Link>

        {/* Center navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex space-x-6">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Donate button on the right */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="secondary"
            className="rounded-full bg-white text-primary-700 hover:bg-white/90 hover:text-primary-800"
          >
            <Link href="/donate">Donate Now</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white rounded-md hover:bg-primary-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary-700 shadow-lg p-4 border-t border-primary-600 slide-in-right z-50 max-w-full">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-white hover:bg-primary-600  rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

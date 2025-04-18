"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Our Outreach", href: "/outreach" },
  { name: "Team", href: "/team" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function NavbarWithCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 bg-primary-800 text-white text-sm z-50 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>Email: info@noorspath.org</span>
          <span>Phone: +123 456 7890</span>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={cn(
          "fixed top-[40px] left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "py-2 bg-primary-700/95 backdrop-blur-sm shadow-md"
            : "py-3 bg-primary-700"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div >
              <div>
                <Image
                  src="/logoo.png"
                  alt="Noor's Path Logo"
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>
            <span className="text-xl font-bold text-white">
              Noor&apos;s Path
            </span>
          </Link>

          <nav className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-6">
              {navItems.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="secondary"
              className="rounded-full bg-white text-primary-700 hover:bg-white/90 hover:text-primary-800"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white rounded-md hover:bg-primary-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-primary-700 shadow-lg p-4 border-t border-primary-600 z-70 max-w-full">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-white hover:bg-primary-600 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Floating Donate Button */}
      <Link
        href="/donate"
        className="fixed bottom-6 right-6 z-50 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full shadow-xl transition"
      >
        Donate Now
      </Link>
    </>
  );
}

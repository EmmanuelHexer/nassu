"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/membership", label: "Membership" },
    { href: "/news", label: "News" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 py-0 md:py-4">
      <div className="container mx-auto px-0 md:px-4">
        <div className="clean-card rounded-b-2xl md:rounded-2xl shadow-premium px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 md:py-5 border-0 md:border border-gray-100 transition-all duration-300">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="NASSU Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="text-display text-2xl md:text-3xl font-black text-primary-600 tracking-tight" style={{textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)"}}>
                  NASSU
                </span>
                <p className="text-xs font-medium text-green-700 -mt-1">
                  Ashanti Supporters
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-6 transition-all duration-300">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-600 hover:text-gray-600 font-medium text-sm tracking-wide transition-all duration-300 relative nav-hover-effect"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/membership"
                className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Join Us
              </Link>
            </div>

            <button
              className="lg:hidden hamburger transition-all duration-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
              <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu active lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-menu-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            className="mobile-menu-item bg-primary-600 text-white hover:bg-primary-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
}

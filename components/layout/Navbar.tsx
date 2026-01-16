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
    <nav className="clean-card sticky top-0 z-50 border-b border-gray-200/50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="NASSU Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div
              className="text-2xl md:text-3xl font-bold font-display bg-linear-to-r from-primary-700 via-primary-600 to-green-700 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 1px 2px rgba(206, 17, 38, 0.15))'
              }}
            >
              NASSU
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-hover-effect text-gray-800 hover:text-primary-600 font-medium text-base transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join Us
            </Link>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden clean-card border-t border-gray-200/50">
          <div className="container-custom py-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-800 hover:text-primary-600 font-medium py-3 text-lg transition-colors duration-300 hover:bg-gray-50 rounded-lg px-4"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: `fadeInUp 0.4s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="block bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all duration-300 shadow-lg mt-4"
              onClick={() => setIsMenuOpen(false)}
              style={{
                animation: `fadeInUp 0.4s ease-out ${navLinks.length * 0.1}s forwards`,
                opacity: 0
              }}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

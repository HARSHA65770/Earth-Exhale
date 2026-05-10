"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // state for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggle hamburger menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/90 backdrop-blur-md border-b border-primary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* little leaf emoji as logo */}
            <span className="text-2xl md:text-3xl">🌿</span>
            <span className="text-xl md:text-2xl font-[var(--font-heading)] font-bold text-text-light tracking-wide group-hover:text-accent-light transition-colors duration-300">
              Earth&apos;s Exhale
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-text-light hover:text-accent-light transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Home
            </Link>
            <Link
              href="#plants"
              className="text-text-muted hover:text-accent-light transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Our Plants
            </Link>
            <Link
              href="#about"
              className="text-text-muted hover:text-accent-light transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-text-muted hover:text-accent-light transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button (desktop) */}
          <div className="hidden md:block">
            <Link
              href="#plants"
              className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              Shop Now
            </Link>
          </div>

          {/* Hamburger Button (mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-text-light transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-primary-light/20">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-text-light hover:text-accent-light transition-colors duration-300 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="#plants"
              onClick={() => setIsMenuOpen(false)}
              className="text-text-muted hover:text-accent-light transition-colors duration-300 text-base font-medium"
            >
              Our Plants
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-text-muted hover:text-accent-light transition-colors duration-300 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-text-muted hover:text-accent-light transition-colors duration-300 text-base font-medium"
            >
              Contact
            </Link>
            <Link
              href="#plants"
              onClick={() => setIsMenuOpen(false)}
              className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-full text-sm font-semibold text-center transition-all duration-300 mt-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

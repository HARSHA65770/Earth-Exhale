"use client";

import Link from "next/link";

export default function Footer() {
  // get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary-dark border-t border-primary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-[var(--font-heading)] font-bold text-text-light">
                Earth&apos;s Exhale
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              We bring the beauty of nature right to your doorstep. Our
              hand-picked plants are grown with love and care to help you create
              a greener, healthier living space.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-light/30 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-light/30 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-light/30 flex items-center justify-center text-text-muted hover:bg-accent hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                👍
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-heading)] text-lg font-semibold text-text-light mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Our Plants", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-text-muted hover:text-accent-light transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant Categories */}
          <div>
            <h4 className="font-[var(--font-heading)] text-lg font-semibold text-text-light mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                "Indoor Plants",
                "Air Purifying",
                "Low Maintenance",
                "Succulents",
                "Hanging Plants",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#plants"
                    className="text-text-muted hover:text-accent-light transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-[var(--font-heading)] text-lg font-semibold text-text-light mb-4">
              Stay Updated
            </h4>
            <p className="text-text-muted text-sm mb-4">
              Subscribe to get plant care tips and exclusive offers.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-primary-light/20 border border-primary-light/30 rounded-full px-4 py-2.5 text-sm text-text-light placeholder:text-text-muted/60 focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-light text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-light/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Earth&apos;s Exhale. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-text-muted hover:text-accent-light text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-text-muted hover:text-accent-light text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

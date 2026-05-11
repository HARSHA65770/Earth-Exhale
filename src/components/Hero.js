"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <p className="text-accent-light text-sm md:text-base font-medium tracking-widest uppercase mb-4">
              🌱 Welcome to Earth&apos;s Exhale
            </p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-light leading-tight mb-6">
              Bring Nature
              <br />
              <span className="text-accent-light">Into Your</span>
              <br />
              Home
            </h1>
            <p className="text-text-muted text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Discover our hand-picked collection of beautiful indoor plants
              that purify your air, boost your mood, and transform any space
              into a green paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#plants"
                className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 text-center"
              >
                Explore Plants
              </Link>
              <Link
                href="#about"
                className="border-2 border-text-muted/30 hover:border-accent-light text-text-light px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 hover:text-accent-light text-center"
              >
                Learn More
              </Link>
            </div>
            <div className="flex gap-8 mt-12">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent-light">
                  50+
                </p>
                <p className="text-text-muted text-sm">Plant Species</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent-light">
                  2k+
                </p>
                <p className="text-text-muted text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent-light">
                  100%
                </p>
                <p className="text-text-muted text-sm">Organic</p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[480px] lg:h-[580px] animate-float">
              <Image
                src="/images/hero-plant.png"
                alt="Beautiful Monstera plant - our bestseller"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 480px"
              />
            </div>
            <div className="absolute bottom-10 left-0 sm:left-10 bg-card-bg/90 backdrop-blur-sm px-5 py-3 rounded-2xl border border-primary-light/30 shadow-xl">
              <p className="text-accent-light text-sm font-semibold">
                🌿 Best Seller
              </p>
              <p className="text-text-light text-xs mt-1">Monstera Deliciosa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

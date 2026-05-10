"use client";

import Image from "next/image";
import { useState } from "react";

export default function PlantCard({ name, price, image, category, rating }) {
  // state for the "Add to Cart" button hover effect
  const [isHovered, setIsHovered] = useState(false);

  // render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-yellow-400 text-sm">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-text-muted/40 text-sm">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div
      className="bg-card-bg rounded-2xl overflow-hidden border border-primary-light/20 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Plant Image Container */}
      <div className="relative h-56 sm:h-64 bg-gradient-to-b from-primary/50 to-primary-dark/50 overflow-hidden">
        <Image
          src={image}
          alt={`${name} - indoor plant`}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Category tag */}
        <span className="absolute top-3 left-3 bg-accent/90 text-white text-xs px-3 py-1 rounded-full font-medium">
          {category}
        </span>
      </div>

      {/* Card Details */}
      <div className="p-5">
        {/* Plant name */}
        <h3 className="font-[var(--font-heading)] text-lg font-semibold text-text-light mb-1 group-hover:text-accent-light transition-colors duration-300">
          {name}
        </h3>

        {/* Star rating */}
        <div className="flex items-center gap-1 mb-3">
          {renderStars(rating)}
          <span className="text-text-muted text-xs ml-1">({rating}.0)</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <p className="text-accent-light text-xl font-bold">₹{price}</p>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              isHovered
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-primary-light/50 text-text-muted"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

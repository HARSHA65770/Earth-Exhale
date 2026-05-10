import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlantCard from "@/components/PlantCard";
import Footer from "@/components/Footer";

// our plant data - in a real app this would come from a database or API
const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    image: "/images/snake-plant.png",
    category: "Air Purifying",
    rating: 5,
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 649,
    image: "/images/peace-lily.png",
    category: "Indoor",
    rating: 4,
  },
  {
    id: 3,
    name: "Pothos",
    price: 299,
    image: "/images/pothos.png",
    category: "Hanging",
    rating: 5,
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: 799,
    image: "/images/rubber-plant.png",
    category: "Indoor",
    rating: 4,
  },
  {
    id: 5,
    name: "Succulent",
    price: 199,
    image: "/images/succulent.png",
    category: "Low Maintenance",
    rating: 4,
  },
  {
    id: 6,
    name: "Fiddle Leaf Fig",
    price: 1299,
    image: "/images/fiddle-leaf.png",
    category: "Indoor",
    rating: 5,
  },
  {
    id: 7,
    name: "Aloe Vera",
    price: 349,
    image: "/images/aloe-vera.png",
    category: "Medicinal",
    rating: 5,
  },
  {
    id: 8,
    name: "Monstera",
    price: 999,
    image: "/images/hero-plant.png",
    category: "Trending",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-primary to-primary-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-light mb-6">
              Your Trusted Plant Partner
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-12">
              At Earth&apos;s Exhale, we believe every home deserves a touch of
              green. We carefully select each plant to make sure it arrives
              healthy and ready to grow with you.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card-bg/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20 text-center hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-text-light mb-3">
                Freshly Grown
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                All our plants are freshly grown in our nursery and shipped
                directly to your doorstep within 2-3 business days.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card-bg/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20 text-center hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-text-light mb-3">
                Care Guide Included
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Every plant comes with a detailed care guide so you know exactly
                how to water, feed, and keep it thriving in your home.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card-bg/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20 text-center hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-text-light mb-3">
                30-Day Guarantee
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Not happy with your plant? We offer a 30-day replacement
                guarantee on all our products. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plants Section */}
      <section id="plants" className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3">
              Our Collection
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-light mb-4">
              Our Top Selling Plants
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              Hand-picked by our experts, these are the plants our customers
              love the most. Perfect for beginners and experienced plant parents
              alike.
            </p>
          </div>

          {/* Plant cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plants.map((plant) => (
              <PlantCard
                key={plant.id}
                name={plant.name}
                price={plant.price}
                image={plant.image}
                category={plant.category}
                rating={plant.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-text-light mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10">
            Join thousands of plant lovers who have transformed their spaces
            with Earth&apos;s Exhale. Start your green journey today.
          </p>
          <a
            href="#plants"
            className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1"
          >
            Browse All Plants 🌿
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="bg-[#0B0F1A] text-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-purple-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28">
          <span className="uppercase tracking-widest text-sm text-teal-400">
            Crafty Hive Shop
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6">
            Art Supplies for <br /> Every Creative Mind
          </h1>

          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Discover premium paints, brushes, canvases, and tools —
            thoughtfully curated for artists, hobbyists, and studios.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        {/* FILTER BAR */}
        <div className="bg-[#121A2F] border border-white/10 rounded-3xl p-6 mb-20">

          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">

            {/* SEARCH */}
            <div className="w-full lg:w-1/3">
              <input
                type="text"
                placeholder="Search paints, brushes, canvas..."
                className="w-full bg-[#0B0F1A] border border-white/10
                px-5 py-4 rounded-xl text-sm placeholder-slate-500
                focus:outline-none focus:border-teal-400"
              />
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-4">
              <select className="bg-[#0B0F1A] border border-white/10
                px-5 py-4 rounded-xl text-sm
                focus:outline-none focus:border-teal-400">
                <option>Sort By</option>
                <option>Newest Arrivals</option>
                <option>Best Sellers</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <select className="bg-[#0B0F1A] border border-white/10
                px-5 py-4 rounded-xl text-sm
                focus:outline-none focus:border-teal-400">
                <option>Category</option>
                <option>Paints</option>
                <option>Brushes</option>
                <option>Canvas & Surfaces</option>
                <option>Art Tools</option>
                <option>Beginner Kits</option>
              </select>

              <select className="bg-[#0B0F1A] border border-white/10
                px-5 py-4 rounded-xl text-sm
                focus:outline-none focus:border-teal-400">
                <option>Price Range</option>
                <option>Under ₹999</option>
                <option>₹1000 – ₹2499</option>
                <option>₹2500+</option>
              </select>
            </div>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <Products />

        {/* HELP CTA */}
        <div className="mt-32 relative overflow-hidden rounded-3xl
          bg-gradient-to-br from-[#121A2F] to-[#0B0F1A]
          border border-white/10 p-16 text-center">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),_transparent_60%)]" />

          <div className="relative">
            <h3 className="text-3xl font-bold mb-5">
              Not Sure What to Choose?
            </h3>

            <p className="text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you’re a beginner or a professional artist,
              our team can help you find the perfect tools for your style.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center
              bg-teal-500 text-[#0B0F1A]
              px-12 py-4 rounded-full font-semibold tracking-wide
              hover:bg-teal-400 transition"
            >
              Talk to an Art Expert
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}

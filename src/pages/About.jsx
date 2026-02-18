import { Link } from "react-router-dom";
import painting4 from "../assets/media/painting4.jpg";

export default function About() {
  return (
    <div className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="uppercase tracking-widest text-sm text-teal-400">
            About Crafty Hive
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            Inspiring Creativity <br />
            Through Art Supplies
          </h1>

          <p className="text-slate-300 leading-relaxed max-w-md">
            Crafty Hive is dedicated to artists of all levels. We provide
            premium paints, brushes, canvases, and tools designed to fuel
            your imagination and elevate your craft.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl">
          <img
            src= {painting4}
            alt="Crafty Hive Art Supplies"
            className="w-full h-[520px] object-cover"
          />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#121A2F] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg">
            Founded by passionate artists, Crafty Hive started with a simple vision — 
            to make high-quality art supplies accessible to everyone.  
            <br /><br />
            From vibrant paints to precision brushes, every product is carefully curated
            to help you create with confidence and joy. Our mission is to inspire creativity
            and bring the artistic community together.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-bold mb-3 text-teal-400">
              Premium Quality
            </h3>
            <p className="text-slate-300 leading-relaxed">
              We source top-grade paints, brushes, and canvases
              to ensure every artist can work with the best.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-rose-400">
              Creativity First
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Our products are designed to unlock your imagination
              and bring your artistic visions to life.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">
              Sustainability
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Eco-friendly materials and responsible sourcing
              help protect our planet for future artists.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-gradient-to-r from-teal-700 via-purple-700 to-rose-600 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Our Mission
          </h2>

          <p className="text-slate-100 leading-relaxed text-lg">
            To empower artists worldwide with premium art supplies, 
            fostering creativity, expression, and confidence.  
            We aim to be the trusted companion in every artist's journey.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Start Your Creative Journey
        </h3>

        <p className="text-slate-300 mb-8">
          Explore our full range of paints, brushes, and art tools
          to unleash your artistic potential.
        </p>

        <Link
          to="/shop"
          className="inline-flex items-center justify-center
          bg-teal-500 text-[#0B0F1A] px-14 py-4 rounded-full font-semibold tracking-wide
          hover:bg-teal-400 transition"
        >
          Shop Now
        </Link>
      </section>

    </div>
  );
}

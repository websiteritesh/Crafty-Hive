import { Link } from "react-router-dom";
import Products from "./Shop";
import Features from "../components/Features";
import Trust from "../components/Trust";
import Hero from "../components/Hero";



export default function Home() {
  return (
    <div className="bg-[#0B0F1A] text-white overflow-hidden">

      {/* HERO */}
      <Hero />

     

      {/* FEATURED PRODUCTS */}
      <section className="relative py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#10162A] to-[#0B0F1A]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center mb-14">
            <h2 className="text-4xl font-bold">
              Featured Art Supplies
            </h2>

            <Link
              to="/shop"
              className="text-sm text-teal-400 hover:text-teal-300 transition"
            >
              View all products →
            </Link>
          </div>

          <Products />
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-32 bg-gradient-to-br from-[#121A2F] to-[#0B0F1A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Crafted for Artists, Inspired by Creativity
          </h2>

          <p className="text-slate-300 leading-relaxed mb-10">
            Crafty Hive was built to support creativity at every level.
            From professional-grade paints to beginner-friendly kits,
            we carefully source tools that help artists bring ideas to life.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full
            border border-white/30 hover:bg-white hover:text-[#0B0F1A]
            transition text-sm font-semibold tracking-wide"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <Features />

      {/* TRUST */}
      <Trust />

      {/* FOOTER CTA */}
      <section className="py-28 text-center bg-[#0B0F1A]">
        <h3 className="text-4xl font-bold mb-6">
          Start Your Next Masterpiece
        </h3>

        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Premium painting supplies trusted by artists,
          educators, and studios across the country.
        </p>

        <Link
          to="/shop"
          className="inline-block bg-teal-500 text-[#0B0F1A]
          px-12 py-4 rounded-full font-semibold tracking-wide
          hover:bg-teal-400 transition"
        >
          Shop Art Supplies
        </Link>
      </section>

    </div>
  );
}

import { Link } from "react-router-dom";
import painting7 from "../assets/media/painting7.jpg"; 

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0B0F1A] via-[#121A2F] to-[#0B0F1A] text-white">

      {/* Artistic Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-rose-500/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-28 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT — TEXT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-[1px] w-12 bg-teal-400/60"></span>
            <span className="text-xs tracking-[0.3em] uppercase text-teal-300">
              Crafty Hive Studio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-8">
            Premium <br />
            Painting Supplies <br />
            for Creative Minds
          </h1>

          <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-14">
            Discover professional-grade paints, brushes, and art tools
            designed to bring your imagination to life — whether
            you’re a beginner or a master artist.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-6">
            <Link
              to="/shop"
              className="px-10 py-4 rounded-full bg-teal-500 text-[#0B0F1A]
              text-sm font-semibold tracking-wide hover:bg-teal-400 transition"
            >
              Shop Art Supplies
            </Link>

            <Link
              to="/collections"
              className="px-10 py-4 rounded-full border border-white/30
              text-sm font-semibold tracking-wide hover:bg-white hover:text-[#0B0F1A] transition"
            >
              Explore Collections
            </Link>
          </div>

          {/* Trust Row */}
          <div className="mt-16 flex flex-wrap gap-10 text-sm text-slate-400">
            <span>Artist-Approved Quality</span>
            <span>Secure Payments</span>
            <span>Fast Delivery</span>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative">

          <img
            src={painting7}
            alt="Professional painting supplies"
            className="w-full max-w-xl ml-auto rounded-[2.5rem]
            object-cover shadow-[0_50px_140px_rgba(0,0,0,0.7)]"
          />

          {/* Floating Glass Card */}
          <div
            className="absolute -bottom-12 left-10 backdrop-blur-xl
            bg-white/10 border border-white/20
            px-8 py-6 rounded-2xl shadow-xl"
          >
            <p className="text-sm font-semibold tracking-wide text-white">
              Trusted by Artists
            </p>
            <p className="text-xs text-slate-300 mt-1">
              Used by professionals & students nationwide
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-slate-400">
        SCROLL
      </div>
    </section>
  );
}

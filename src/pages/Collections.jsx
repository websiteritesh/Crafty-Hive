import { Link } from "react-router-dom";
import painting6 from "../assets/media/painting6.jpg";
import painting3 from "../assets/media/painting3.jpg";
import painting4 from "../assets/media/painting4.jpg";
import painting1 from "../assets/media/painting1.jpg";

export default function Collections() {
  const collections = [
    {
      title: "Watercolors",
      subtitle: "Vibrant & Fluid",
      image: painting6,
    },
    {
      title: "Acrylic Paints",
      subtitle: "Bold & Durable",
      image: painting3,
    },
    {
      title: "Brush Sets",
      subtitle: "Professional Tools",
      image: painting4,
    },
    {
      title: "Canvas & Paper",
      subtitle: "Premium Surfaces",
      image: painting1,
    },
  ];

  return (
    <div className="bg-[#0B0F1A] text-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-teal-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <span className="uppercase tracking-widest text-sm text-teal-400">
            Our Collections
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            Curated Art Supplies
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our carefully selected collections of paints, brushes, canvases, and art tools — 
            designed for beginners, hobbyists, and professional artists alike.
          </p>
        </div>
      </section>

      {/* COLLECTION GRID */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {collections.map((col, index) => (
          <Link
            to="/shop"
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <img
              src={col.image}
              alt={col.title}
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex flex-col justify-end p-6 rounded-2xl">
              <h3 className="text-2xl font-bold">{col.title}</h3>
              <p className="text-slate-300 mt-1">{col.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 px-6 text-center bg-gradient-to-tr from-[#121A2F] via-[#0B0F1A] to-[#0B0F1A] rounded-3xl mx-6 lg:mx-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),_transparent_60%)]" />

        <div className="relative max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Discover the Full Spectrum
          </h3>

          <p className="text-slate-300 mb-10 leading-relaxed">
            Each collection is designed to inspire creativity. Find the right tools for your next masterpiece.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center
            bg-teal-500 text-[#0B0F1A]
            px-14 py-4 rounded-full font-semibold tracking-wide
            hover:bg-teal-400 transition"
          >
            Browse All Products
          </Link>
        </div>
      </section>

    </div>
  );
}

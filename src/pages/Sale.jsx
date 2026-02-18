import Products from "../components/Products";
import { Link } from "react-router-dom";

export default function Sale() {
  return (
    <div className="bg-[#0B0F1A] text-white min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-teal-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28">
          <span className="uppercase tracking-widest text-sm text-rose-400">
            Art Sale Event
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6">
            Studio Clearance <br /> Art Sale
          </h1>

          <p className="text-slate-300 max-w-2xl leading-relaxed mb-10">
            Save big on selected paints, brushes, canvases, and art tools.
            Limited quantities — once they’re gone, they’re gone.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center
            bg-rose-500 text-[#0B0F1A]
            px-12 py-4 rounded-full font-semibold tracking-wide
            hover:bg-rose-400 transition"
          >
            Explore Sale Items
          </Link>
        </div>
      </section>

      {/* OFFER STRIP */}
      <section className="border-y border-white/10 bg-[#0E1528]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
              Discounts
            </p>
            <p className="text-xl font-semibold text-teal-400">
              Up to 45% Off
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
              Stock
            </p>
            <p className="text-xl font-semibold text-white">
              Limited Quantities
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
              Availability
            </p>
            <p className="text-xl font-semibold text-rose-400">
              Online Only
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <h2 className="text-3xl font-bold">
            Sale Picks for Artists
          </h2>

          <select
            className="bg-[#0B0F1A] border border-white/10
            px-5 py-4 rounded-xl text-sm
            focus:outline-none focus:border-rose-400"
          >
            <option>Sort by</option>
            <option>Biggest Discount</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <Products />

      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#121A2F] to-transparent" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Don’t Miss This Creative Opportunity
          </h3>

          <p className="text-slate-300 mb-10 leading-relaxed">
            These discounted art supplies won’t be restocked.
            Grab your favorites today and keep creating without limits.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center
            bg-teal-500 text-[#0B0F1A]
            px-14 py-4 rounded-full font-semibold tracking-wide
            hover:bg-teal-400 transition"
          >
            View Full Collection
          </Link>
        </div>
      </section>

    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import products from "../data/products.js";

const categories = [
  "All",
  "Oil Paintings",
  "Watercolors",
  "Acrylics",
  "Brushes",
  "Accessories",
];

export default function Products() {
  const [visible, setVisible] = useState(8);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section className="py-28 bg-gradient-to-b from-[#FFF6F5] to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-[#3B2F2F]">
            Our Artistic Collection
          </h2>
          <p className="text-[#5A4B4B] text-lg">
            Explore handpicked paintings, brushes, and art supplies — curated for creative minds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setVisible(8);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  active === cat
                    ? "bg-gradient-to-r from-[#F78DA7] via-[#FEC260] to-[#7FDBB6] text-white shadow-lg"
                    : "border border-[#D9BBA0] text-[#7B5E57] hover:bg-gradient-to-r hover:from-[#F78DA7] hover:via-[#FEC260] hover:to-[#7FDBB6] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filtered.slice(0, visible).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* Load More */}
        {visible < filtered.length && (
          <div className="mt-20 text-center">
            <button
              onClick={() => setVisible((v) => v + 4)}
              className="px-10 py-3 rounded-full border-2 border-[#7B5E57] text-[#7B5E57] font-semibold hover:bg-gradient-to-r hover:from-[#F78DA7] hover:via-[#FEC260] hover:to-[#7FDBB6] hover:text-white transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#5A4B4B] hover:underline"
          >
            View Full Collection →
          </Link>
        </div>

      </div>
    </section>
  );
}

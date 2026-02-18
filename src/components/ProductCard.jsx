import { Heart, Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Image */}
      <div className="relative overflow-hidden">

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full tracking-wide font-semibold shadow-lg">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md p-2 rounded-full shadow hover:bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 hover:text-white transition">
          <Heart size={16} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-6">
          <div className="flex gap-3">

            <Link
              to={`/product/${product.id}`}
              className="bg-white text-[#0B0F1A] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition shadow-md"
            >
              Quick View
            </Link>

            <button className="bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition flex items-center gap-2 shadow-md">
              <ShoppingBag size={16} />
              Add
            </button>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Category */}
        {product.category && (
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
            {product.category}
          </p>
        )}

        {/* Name */}
        <h3 className="font-semibold text-lg text-[#0B0F1A] truncate mb-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="text-yellow-400"
              fill={i < (product.rating || 4) ? "currentColor" : "none"}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">
            ({product.reviews || 120})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-[#0B0F1A]">
            ₹{product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* Optional: Color/Medium Tags */}
        {product.medium && (
          <p className="text-xs text-gray-500 mt-2">
            Medium: <span className="font-medium text-[#0B0F1A]">{product.medium}</span>
          </p>
        )}

      </div>
    </div>
  );
}

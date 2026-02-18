import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Palette,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#020617] to-[#020617] text-gray-400">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="text-[#D4A373]" />
            <h2 className="text-2xl font-semibold tracking-wide text-white">
              Crafty<span className="text-[#D4A373] font-light">Hive</span>
            </h2>
          </div>

          <p className="leading-relaxed max-w-md mb-6 text-sm">
            Crafty Hive is your creative destination for premium paints,
            professional brushes, and artist-grade canvas. Designed for
            creators who value quality and expression.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full border border-white/10
                hover:border-[#D4A373] hover:text-[#D4A373]
                transition duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
            Shop
          </h4>
          <ul className="space-y-3 text-sm">
            <li><div className="hover:text-[#D4A373] transition">Paints</div></li>
            <li><div className="hover:text-[#D4A373] transition">Brushes</div></li>
            <li><div className="hover:text-[#D4A373] transition">Canvas</div></li>
            <li><Link to="/collections" className="hover:text-[#D4A373] transition">Artist Collections</Link></li>
          </ul>
        </div>

        {/* Studio */}
        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
            Studio
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-[#D4A373] transition">About Crafty Hive</Link></li>
            
            <li><Link to="/contact" className="hover:text-[#D4A373] transition">Contact</Link></li>
            <li><div className="hover:text-[#D4A373] transition">Material Quality</div></li>
            <li><div className="hover:text-[#D4A373] transition">Our Artists</div></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
            Art Updates
          </h4>
          <p className="text-sm mb-4">
            New arrivals, art tips, and exclusive offers — straight to your inbox.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-[#020617] border border-white/10
              px-4 py-2 rounded-l-md text-sm
              focus:outline-none focus:border-[#D4A373]"
            />
            <button
              type="submit"
              className="bg-[#D4A373] text-black px-4 rounded-r-md
              text-sm font-semibold hover:brightness-110 transition"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row
          justify-between items-center gap-4 text-sm">
          
          <p>
            © {new Date().getFullYear()} Crafty Hive. All rights reserved.
          </p>

          <div className="flex gap-6">
            <div className="hover:text-[#D4A373] transition">Privacy</div>
            <div className="hover:text-[#D4A373] transition">Terms</div>
            <div className="hover:text-[#D4A373] transition">Returns</div>
          </div>
        </div>
      </div>

    </footer>
  );
}

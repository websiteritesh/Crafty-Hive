import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Brush } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-[#0F172A]/95 backdrop-blur-md shadow-xl border-b border-white/10"
          : "bg-[#020617]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-semibold text-white">
          <Brush className="text-[#D4A373]" />
          Crafty  <span className="text-[#D4A373] font-light">Hive</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-wider text-gray-300">
          <Link to="/" className="hover:text-[#D4A373] transition">Home</Link>
          <Link to="/shop" className="hover:text-[#D4A373] transition">Shop</Link>
          <Link to="/sale" className="hover:text-[#D4A373] transition">Sale</Link>
          <Link to="/Collections" className="hover:text-[#D4A373] transition">Collections</Link>
          <Link to="/about" className="hover:text-[#D4A373] transition">About</Link>
          <Link to="/contact" className="hover:text-[#D4A373] transition">Contact</Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block opacity-70 cursor-not-allowed">
            <ShoppingBag className="w-6 h-6 text-white" />
            <span className="absolute -top-2 -right-2 bg-[#D4A373] text-black text-[10px]
              w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              0
            </span>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#020617]
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>

          <nav className="mt-24 px-8 flex flex-col gap-7 text-lg font-medium text-gray-200">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link to="/sale" onClick={() => setOpen(false)}>sale</Link>
            <Link to="/Collections" onClick={() => setOpen(false)}>Collections</Link>
            <Link to="/About" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <div className="mt-10 flex items-center gap-3 opacity-60">
              <ShoppingBag />
              Cart (0)
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

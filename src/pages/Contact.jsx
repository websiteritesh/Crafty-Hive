import { Link } from "react-router-dom";
import painting8 from "../assets/media/painting8.jpg";

export default function Contact() {
  return (
    <div className="bg-[#0B0F1A] text-white">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="uppercase tracking-widest text-sm text-teal-400">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            We’re Here to Help <br />
            Every Artist
          </h1>

          <p className="text-slate-300 leading-relaxed max-w-md">
            Have a question about our paints, brushes, or canvases?  
            Our team is ready to assist you with any order, product inquiry, or creative guidance.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={painting8}
            alt="Contact Crafty Hive"
            className="w-full h-[520px] object-cover"
          />
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-20">

        {/* CONTACT INFO */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">
            Customer Support
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            Whether it’s about orders, product details, or art advice, our team is here to help you.
          </p>

          <div className="space-y-8 text-slate-300">
            <div>
              <p className="text-sm text-slate-400 mb-1">Location</p>
              <p className="font-medium">Delhi, India</p>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Phone</p>
              <p className="font-medium">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Email</p>
              <p className="font-medium">support@craftyhive.com</p>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Business Hours</p>
              <p className="font-medium">
                Monday – Friday<br />
                10:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-[#121A2F] border border-teal-400 rounded-2xl p-10 shadow-lg">
          <h3 className="text-3xl font-bold text-teal-400 mb-8">
            Send Us a Message
          </h3>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-slate-600 px-4 py-3 rounded-lg bg-[#0B0F1A] text-white focus:outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-slate-600 px-4 py-3 rounded-lg bg-[#0B0F1A] text-white focus:outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-slate-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full border border-slate-600 px-4 py-3 rounded-lg bg-[#0B0F1A] text-white focus:outline-none focus:border-teal-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-[#0B0F1A] py-3 rounded-full font-semibold hover:bg-teal-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-teal-700 via-purple-700 to-rose-500 py-20 text-center px-6 rounded-t-3xl">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Discover Our Art Supplies
        </h3>

        <p className="text-slate-100 mb-8">
          Premium paints, brushes, canvases, and tools for every artist.
        </p>

        <Link
          to="/shop"
          className="inline-flex items-center justify-center
          bg-white text-[#0B0F1A] px-14 py-4 rounded-full font-semibold tracking-wide
          hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
}

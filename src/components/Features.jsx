import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
  Sparkles,
  Leaf,
  Palette,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#020617] to-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.3em] text-xs text-[#D4A373]">
            Why Crafty Hive
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 text-white">
            Crafted for Artists & Creators
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            At Crafty Hive, every product is selected with precision —
            supporting creativity, consistency, and professional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Feature Card */}
          <div className="group relative rounded-3xl border border-white/10
            bg-white/5 backdrop-blur-md p-8 transition
            hover:border-[#D4A373] hover:-translate-y-1">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl
              bg-[#D4A373]/10 text-[#D4A373] mb-6">
              <Palette size={26} />
            </div>

            <h4 className="text-xl font-semibold mb-3 text-white">
              Artist-Grade Materials
            </h4>
            <p className="leading-relaxed text-sm">
              Professional paints, brushes, and canvas tested for color
              accuracy, durability, and superior finish.
            </p>
          </div>

          <div className="group relative rounded-3xl border border-white/10
            bg-white/5 backdrop-blur-md p-8 transition
            hover:border-[#D4A373] hover:-translate-y-1">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl
              bg-[#D4A373]/10 text-[#D4A373] mb-6">
              <Truck size={26} />
            </div>

            <h4 className="text-xl font-semibold mb-3 text-white">
              Safe & Fast Delivery
            </h4>
            <p className="leading-relaxed text-sm">
              Carefully packed art supplies with fast, reliable shipping
              across India — free on orders above ₹2000.
            </p>
          </div>

          <div className="group relative rounded-3xl border border-white/10
            bg-white/5 backdrop-blur-md p-8 transition
            hover:border-[#D4A373] hover:-translate-y-1">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl
              bg-[#D4A373]/10 text-[#D4A373] mb-6">
              <ShieldCheck size={26} />
            </div>

            <h4 className="text-xl font-semibold mb-3 text-white">
              Quality Checked
            </h4>
            <p className="leading-relaxed text-sm">
              Every product goes through strict inspection to ensure
              consistency, performance, and long-term reliability.
            </p>
          </div>

          <div className="group relative rounded-3xl border border-white/10
            bg-white/5 backdrop-blur-md p-8 transition
            hover:border-[#D4A373] hover:-translate-y-1">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl
              bg-[#D4A373]/10 text-[#D4A373] mb-6">
              <RefreshCcw size={26} />
            </div>

            <h4 className="text-xl font-semibold mb-3 text-white">
              Easy Returns
            </h4>
            <p className="leading-relaxed text-sm">
              Changed your mind? Enjoy simple 7-day returns with
              quick pickup and no hassle.
            </p>
          </div>

          <div className="group relative rounded-3xl border border-white/10
            bg-white/5 backdrop-blur-md p-8 transition
            hover:border-[#D4A373] hover:-translate-y-1">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl
              bg-[#D4A373]/10 text-[#D4A373] mb-6">
              <Headphones size={26} />
            </div>

            <h4 className="text-xl font-semibold mb-3 text-white">
              Artist Support
            </h4>
            <p className="leading-relaxed text-sm">
              Need help choosing supplies? Our art specialists are
              ready to assist you anytime.
            </p>
          </div>

          <div className="group relative rounded-3xl border border-white/10
            bg-white/5 backdrop-blur-md p-8 transition
            hover:border-[#D4A373] hover:-translate-y-1">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl
              bg-[#D4A373]/10 text-[#D4A373] mb-6">
              <Leaf size={26} />
            </div>

            <h4 className="text-xl font-semibold mb-3 text-white">
              Eco-Conscious
            </h4>
            <p className="leading-relaxed text-sm">
              Sustainable sourcing, low-waste packaging, and
              environmentally responsible practices.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

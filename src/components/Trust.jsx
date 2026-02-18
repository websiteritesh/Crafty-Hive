import { Truck, RefreshCcw, Lock, Star } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <span className="uppercase tracking-[0.35em] text-xs text-teal-400">
            Trust & Reliability
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 text-white">
            Built for Artists, Backed by Quality
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Crafty Hive delivers dependable service, secure shopping,
            and professional-grade art supplies you can trust.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Item */}
          <div className="group text-center">
            <div className="mx-auto mb-8 w-16 h-16 flex items-center justify-center
              rounded-xl bg-teal-500/10 text-teal-400
              transition group-hover:bg-teal-500 group-hover:text-[#0F172A]">
              <Truck size={26} />
            </div>
            <h4 className="text-lg font-medium mb-2 text-white">
              Reliable Shipping
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Secure packaging and timely delivery for all
              your art materials, nationwide.
            </p>
          </div>

          {/* Item */}
          <div className="group text-center">
            <div className="mx-auto mb-8 w-16 h-16 flex items-center justify-center
              rounded-xl bg-cyan-500/10 text-cyan-400
              transition group-hover:bg-cyan-500 group-hover:text-[#0F172A]">
              <RefreshCcw size={26} />
            </div>
            <h4 className="text-lg font-medium mb-2 text-white">
              Easy Returns
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hassle-free 7-day returns if your supplies
              don’t meet expectations.
            </p>
          </div>

          {/* Item */}
          <div className="group text-center">
            <div className="mx-auto mb-8 w-16 h-16 flex items-center justify-center
              rounded-xl bg-indigo-500/10 text-indigo-400
              transition group-hover:bg-indigo-500 group-hover:text-[#0F172A]">
              <Lock size={26} />
            </div>
            <h4 className="text-lg font-medium mb-2 text-white">
              Secure Payments
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Encrypted checkout with trusted payment
              systems for peace of mind.
            </p>
          </div>

          {/* Item */}
          <div className="group text-center">
            <div className="mx-auto mb-8 w-16 h-16 flex items-center justify-center
              rounded-xl bg-rose-500/10 text-rose-400
              transition group-hover:bg-rose-500 group-hover:text-[#0F172A]">
              <Star size={26} />
            </div>
            <h4 className="text-lg font-medium mb-2 text-white">
              Artist Approved
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Rated 4.9★ by artists, students,
              and creative professionals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

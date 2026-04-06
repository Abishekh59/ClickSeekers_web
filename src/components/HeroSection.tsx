import { motion } from "framer-motion";
import { ArrowRight, Camera, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#064c73]">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#064c73]/80 via-transparent to-[#064c73]/90" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#60a5fa]/30 text-sm text-[#6aa6ff] mb-8 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse" />
            Nepal's Premier Photography Marketplace
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1] mb-8 text-white">
            Where Vision
            <br />
            <span className="text-[#60a5fa]">Meets Opportunity</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Connect with verified photographers, level up through our gamified Pro Path,
            and build a thriving creative career — all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#download"
              className="group flex items-center gap-2 px-10 py-5 rounded-2xl bg-[#60a5fa] text-[#064c73] font-bold text-xl hover:bg-[#6aa6ff] transition-all shadow-xl shadow-[#60a5fa]/20"
            >
              <Camera size={24} />
              Join as Photographer
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-10 py-5 rounded-2xl glass border-white/10 font-bold text-xl text-white hover:bg-white/10 transition-all"
            >
              <Users size={24} />
              Find a Photographer
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "500+", label: "Photographers" },
            { value: "10K+", label: "Bookings" },
            { value: "4.9★", label: "Avg Rating" },
            { value: "95%", label: "Max Earnings" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-black text-white">{s.value}</div>
              <div className="text-sm text-blue-200/60 font-bold uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

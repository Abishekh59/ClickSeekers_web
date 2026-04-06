import { motion } from "framer-motion";
import { MapPin, ShieldCheck, MessageSquare, CreditCard, UserCheck } from "lucide-react";

const steps = [
  { icon: UserCheck, title: "Onboard", desc: "Secure OTP-based registration and Role Selection (Client or Photographer)." },
  { icon: ShieldCheck, title: "Discover & Verify", desc: "Clients search filtered lists; Photographers complete KYC to build trust." },
  { icon: MessageSquare, title: "Connect", desc: "Discuss vision, pricing, and availability through our real-time messaging system." },
  { icon: MapPin, title: "Execute", desc: "Clients set precise Map locations; Photographers navigate directly and shoot." },
  { icon: CreditCard, title: "Finalize", desc: "Secure digital payments via Khalti and milestone-based ratings." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative bg-slate-50">
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-widest">Seamless Integration</span>
          <h2 className="font-heading text-5xl md:text-6xl font-extrabold mt-4 text-[#064c73] tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto italic">
            Connecting visionaries with masters of the lens in 5 simple steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-white shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-[#60a5fa]/10 transition-all group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <step.icon size={80} />
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-[#064c73] text-white flex items-center justify-center text-2xl font-black mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#064c73]/20">
                {i + 1}
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#064c73] mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;

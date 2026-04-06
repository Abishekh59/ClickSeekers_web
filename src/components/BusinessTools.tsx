import { motion } from "framer-motion";
import { CalendarRange, CalendarCheck, Package, Percent, MapPin, BarChart3, FolderOpen, Wallet } from "lucide-react";

const clientFeatures = [
  { icon: FolderOpen, title: "Social Feed & Discovery", desc: "Scroll a curated feed of stunning portfolios. Like, comment, save posts to your inspiration board." },
  { icon: MapPin, title: "Khalti Secure Payments", desc: "Book and pay with confidence through Nepal's most trusted gateway — instant digital receipts included." },
  { icon: BarChart3, title: "Report & Review System", desc: "Leave verified post-session reviews. Report any misconduct and our admin team investigates swiftly." },
];

const photographerFeatures = [
  { icon: MapPin, title: "GPS Navigation", desc: "View the exact map location pinned by clients. Launch turn-by-turn navigation directly from the app dashboard." },
  { icon: CalendarRange, title: "Availability & Calendar", desc: "Block individual dates or entire ranges. Confirmed bookings auto-lock to prevent any double-bookings." },
  { icon: Package, title: "Pricing & Packages", desc: "Create multiple custom service packages — Name, NPR Price, Duration, and full feature lists like 'Drone coverage'." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track Profile Views, Portfolio Engagement, Booking Acceptance Rates, and Earning trends over time in real-time." },
  { icon: FolderOpen, title: "Portfolio Management", desc: "Upload and categorize work across 30+ specialized categories — from Portraits to Astrophotography." },
  { icon: Wallet, title: "Earnings & Wallet", desc: "Monitor your wallet balance in NPR. Earnings (minus badge-based fee) are available for instant withdrawal to your bank." },
];

const BusinessTools = () => {
  return (
    <section id="business-tools" className="py-24 relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#60a5fa]/4 rounded-full blur-[120px] -z-10" />
      <div className="container relative z-10 mx-auto px-6">
        {/* === CLIENT JOURNEY === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">The Seeker</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 text-[#064c73] tracking-tight">
            The Client <span className="text-[#60a5fa]">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            From discovery to keepsakes — the most seamless client experience in Nepal's photography market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-32">
          {clientFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl p-8 bg-slate-50 hover:bg-[#064c73] hover:text-white group transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#064c73] group-hover:bg-white text-white group-hover:text-[#064c73] flex items-center justify-center mb-6 transition-colors group-hover:scale-110 duration-300 shadow-lg">
                <f.icon size={26} />
              </div>
              <h3 className="font-heading text-xl font-black text-[#064c73] group-hover:text-white mb-3 transition-colors">{f.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/75 text-sm leading-relaxed font-medium transition-colors">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* === PHOTOGRAPHER SUITE === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">The Pro</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 text-[#064c73] tracking-tight">
            Photographer <span className="text-[#60a5fa]">Suite</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A complete professional toolkit — from lead generation to payment withdrawal.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {photographerFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-3xl p-8 border-2 border-slate-100 bg-white hover:border-[#60a5fa]/40 hover:shadow-xl hover:shadow-[#60a5fa]/10 transition-all group ${
                i === 0 ? "lg:col-span-2 bg-[#064c73] border-[#064c73] text-white hover:border-[#064c73]" : ""
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md ${
                i === 0 ? "bg-[#60a5fa] text-white" : "bg-slate-50 text-[#064c73]"
              }`}>
                <f.icon size={26} />
              </div>
              <h3 className={`font-heading text-xl font-black mb-3 ${i === 0 ? "text-white" : "text-[#064c73]"}`}>{f.title}</h3>
              <p className={`text-sm leading-relaxed font-medium ${i === 0 ? "text-blue-100/75" : "text-muted-foreground"}`}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Fee Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto rounded-3xl bg-[#064c73] p-8 text-white text-center"
        >
          <Percent size={32} className="text-[#60a5fa] mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-black mb-2">Transparent, Sliding Commission</h3>
          <p className="text-blue-100/70 mb-8 font-medium">Your fee decreases as your badge level grows. The best photographers keep the most.</p>
          <div className="flex items-end justify-center gap-3 h-24">
            {[
              { fee: 10, label: "Beginner" },
              { fee: 9, label: "Rookie" },
              { fee: 8, label: "Rising Star" },
              { fee: 7, label: "Pro" },
              { fee: 6, label: "Elite" },
              { fee: 5, label: "Golden" },
            ].map(({ fee, label }, i) => (
              <div key={fee} className="flex flex-col items-center gap-1 flex-1">
                <span className="text-[10px] text-blue-200/60 font-bold">{fee}%</span>
                <div
                  className="w-full rounded-t-lg"
                  style={{
                    height: `${(fee / 10) * 70}px`,
                    background: `hsl(${200 + i * 8}, 90%, ${45 - i * 5}%)`,
                  }}
                />
                <span className="text-[9px] text-blue-200/50 font-bold">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-black text-[#60a5fa] mt-6">⬆ Earn more. Pay less. Keep up to 95% of your earnings.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessTools;

import { motion } from "framer-motion";
import { Star, Briefcase, Calendar, Heart, Trophy, AlertTriangle } from "lucide-react";

const categories = [
  {
    icon: Star,
    title: "Client Satisfaction",
    color: "bg-[#60a5fa]/10 text-[#60a5fa]",
    items: [
      { action: "5★ Reviews", pts: "+20 pts", positive: true },
      { action: "Verified Reviews", pts: "+10 pts", positive: true },
    ],
  },
  {
    icon: Briefcase,
    title: "Hard Work",
    color: "bg-[#064c73]/10 text-[#064c73]",
    items: [
      { action: "Completed Bookings", pts: "+40 pts", positive: true },
      { action: "Accepted Requests", pts: "+5 pts", positive: true },
    ],
  },
  {
    icon: Calendar,
    title: "Consistency",
    color: "bg-[#6aa6ff]/10 text-[#6aa6ff]",
    items: [
      { action: "Daily Logins", pts: "+1 pt", positive: true },
      { action: "Login Streaks", pts: "+5 bonus", positive: true },
    ],
  },
  {
    icon: Heart,
    title: "Engagement",
    color: "bg-pink-50 text-pink-500",
    items: [
      { action: "KYC Approval", pts: "+30 pts", positive: true },
      { action: "Portfolio Uploads", pts: "+0.5 pts", positive: true },
      { action: "Likes Received", pts: "+0.5 pts", positive: true },
    ],
  },
  {
    icon: Trophy,
    title: "Leaderboard Ranking",
    color: "bg-amber-50 text-amber-500",
    items: [
      { action: "Weekly Rank #1", pts: "+40 pts", positive: true },
      { action: "Monthly Winners", pts: "+50 pts", positive: true },
    ],
  },
  {
    icon: AlertTriangle,
    title: "Penalties",
    color: "bg-red-50 text-red-500",
    items: [
      { action: "Self-Initiated Cancellations", pts: "−20 pts", positive: false },
    ],
  },
];

const PointMatrix = () => {
  return (
    <section className="py-24 relative bg-[#064c73] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#60a5fa]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6aa6ff]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">Reward System</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 text-white tracking-tight">
            Point <span className="text-[#60a5fa]">Matrix</span>
          </h2>
          <p className="text-blue-100/70 mt-6 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Every action you take builds your reputation. Here's exactly how you earn — and what to avoid.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#60a5fa]/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform`}>
                  <cat.icon size={20} />
                </div>
                <h3 className="font-heading font-bold text-white text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.action} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="text-sm text-blue-100/70 font-medium">{item.action}</span>
                    <span className={`text-sm font-black font-heading px-3 py-1 rounded-full ${
                      item.positive
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-red-500/20 text-red-400"
                    }`}>
                      {item.pts}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointMatrix;

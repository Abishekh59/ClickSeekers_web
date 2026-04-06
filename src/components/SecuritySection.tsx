import { motion } from "framer-motion";
import { Shield, UserCheck, Lock, Eye, Users, Camera, BarChart3, MessageSquare } from "lucide-react";

const roles = [
  {
    icon: Users,
    role: "Clients",
    color: "bg-[#60a5fa]",
    items: ["Search & Book Photographers", "Social Engagement & Likes", "Save Favorites & Inspiration", "Secure Khalti Payments", "Leave Verified Reviews"],
  },
  {
    icon: Camera,
    role: "Photographers",
    color: "bg-[#6aa6ff]",
    items: ["Portfolio & Package Management", "GPS-Based Client Navigation", "Business Dashboard & Analytics", "Availability Management", "Earn Points & Climb Badges"],
  },
  {
    icon: BarChart3,
    role: "Administrators",
    color: "bg-[#064c73]",
    items: ["KYC Application Review", "Platform Moderation", "Report Investigation", "User Management", "Analytics & Oversight"],
  },
];

const trustFeatures = [
  {
    icon: UserCheck,
    title: "KYC Verification",
    desc: "Every photographer submits valid government ID. Our admin team reviews, vets, and awards a 'Verified' badge — building instant client trust.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Ecosystem",
    desc: "WebSocket-powered Instant Messaging and Push Notifications keep both parties in sync throughout the entire booking journey.",
  },
  {
    icon: Lock,
    title: "Encrypted Data",
    desc: "All personal data and financial information is encrypted at rest and in transit using industry-standard AES-256 encryption.",
  },
  {
    icon: Eye,
    title: "Privacy Controls",
    desc: "You control what's visible. Contact details are shared only once a booking is confirmed, ensuring a safe environment for everyone.",
  },
];

const SecuritySection = () => {
  return (
    <section id="features" className="py-24 relative bg-slate-50 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">Core System Features</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 text-[#064c73] tracking-tight">
            Built on <span className="text-[#60a5fa]">Trust</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A 3-tier role-based access system ensures every actor on the platform has precisely the tools they need — and nothing they don't.
          </p>
        </motion.div>

        {/* Role-Based Access Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-blue-900/5 hover:shadow-xl hover:shadow-[#60a5fa]/10 transition-all group border border-slate-100"
            >
              <div className={`w-14 h-14 rounded-2xl ${r.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <r.icon size={28} />
              </div>
              <h3 className="font-heading text-2xl font-black text-[#064c73] mb-5">{r.role}</h3>
              <ul className="space-y-3">
                {r.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#60a5fa]/10 text-[#60a5fa] flex items-center justify-center flex-shrink-0 text-xs font-black">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust & Safety */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#064c73]/5 text-[#064c73] text-sm font-bold uppercase tracking-widest mb-4">
            <Shield size={14} /> Trust & Safety Protocol
          </div>
          <h3 className="font-heading text-4xl font-black text-[#064c73]">KYC & Privacy First</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-[#60a5fa]/30 hover:shadow-lg transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#064c73] text-white flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <f.icon size={24} />
              </div>
              <h4 className="font-heading font-bold text-[#064c73] mb-3 text-lg">{f.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;

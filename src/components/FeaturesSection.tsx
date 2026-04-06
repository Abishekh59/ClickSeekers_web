import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Heart, MessageSquare, Bookmark, MapPin, Calendar, CreditCard, Star,
  Shield, Camera, Package, CalendarRange, Navigation, Wallet, Trophy, BarChart3,
  Bell, SmartphoneIcon, Users, ImageIcon, Edit, Zap, Lock,
  CheckCircle2, LucideIcon
} from "lucide-react";

type TabKey = "client" | "photographer";

const clientSections = [
  {
    icon: Search,
    title: "Discovery & Search",
    color: "bg-blue-50 text-blue-600",
    features: [
      "Search by City or District (GPS-based)",
      "Filter by 30+ types: Wedding, Wildlife, Drone...",
      "KYC Verified badge & Badge Tier visibility",
      "Browse categorized portfolio grids",
    ],
  },
  {
    icon: Heart,
    title: "Social Feed",
    color: "bg-rose-50 text-rose-500",
    features: [
      "View high-res photos from all photographers",
      "Like & Comment with real-time updates",
      "Save/Bookmark to personal inspiration board",
      "View location tags, views & descriptions",
    ],
  },
  {
    icon: Calendar,
    title: "Seamless Booking",
    color: "bg-indigo-50 text-indigo-500",
    features: [
      "Select custom service packages & NPR pricing",
      "Choose dates on an interactive calendar",
      "Pin event location on in-app Map",
      "Real-time status: Pending → Accepted → Completed",
    ],
  },
  {
    icon: CreditCard,
    title: "Khalti Payments",
    color: "bg-emerald-50 text-emerald-500",
    features: [
      "Secure Khalti Payment Gateway integration",
      "Instant digital receipts on completion",
      "Transparent NPR pricing per package",
      "Safe and encrypted transaction history",
    ],
  },
  {
    icon: Star,
    title: "Review & Rating",
    color: "bg-amber-50 text-amber-500",
    features: [
      "Post verified reviews after session completion",
      "1–5 star ratings affect Badge Tier points",
      "Verified client-only review system",
      "One-tap report button for community safety",
    ],
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat",
    color: "bg-violet-50 text-violet-500",
    features: [
      "Instant messaging once booking is initiated",
      "Push notifications for new messages",
      "Secure, encrypted chat history",
      "Real-time replies and media sharing",
    ],
  },
];

const photographerSections = [
  {
    icon: Shield,
    title: "KYC Verification",
    color: "bg-blue-50 text-[#064c73]",
    features: [
      "Submit government ID for 'Verified' badge",
      "+30 points awarded on one-time approval",
      "Displays trust badge globally on profile",
      "Admin-reviewed for maximum security",
    ],
  },
  {
    icon: ImageIcon,
    title: "Portfolio Management",
    color: "bg-pink-50 text-pink-500",
    features: [
      "Upload high-res photos with location tags",
      "Categorize into 30+ specialized categories",
      "Add Title, Description & searchable tags",
      "Real-time stats: Likes, Comments, Total Views",
    ],
  },
  {
    icon: Package,
    title: "Pricing & Packages",
    color: "bg-indigo-50 text-indigo-500",
    features: [
      "Create custom packages (Name, Price, Features)",
      "Full edit/delete control over all services",
      "Include 'Drone coverage', 'Raw files', etc.",
      "Instant NPR price display for clients",
    ],
  },
  {
    icon: CalendarRange,
    title: "Availability & Calendar",
    color: "bg-teal-50 text-teal-500",
    features: [
      "Range Mode: Block continuous date ranges",
      "Specific Dates: Tap to block/unblock days",
      "Add private reason notes to blocked dates",
      "Bookings auto-block to prevent double-booking",
    ],
  },
  {
    icon: Navigation,
    title: "Booking Management",
    color: "bg-orange-50 text-orange-500",
    features: [
      "Accept or Reject requests via dashboard",
      "Navigate using in-app GPS to client's pin",
      "View full client details & session info",
      "Track status: Pending → Accepted → Completed",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Earnings",
    color: "bg-violet-50 text-violet-500",
    features: [
      "Real-time earnings tracker & wallet balance",
      "Badge-based fee (5%–10%) automatically deducted",
      "Profile views & engagement rate tracking",
      "Points and badge progression tracker",
    ],
  },
  {
    icon: Trophy,
    title: "Badge & Gamification",
    color: "bg-amber-50 text-amber-500",
    features: [
      "6-Level Prestige: Beginner → Golden Lens",
      "Earn pts from bookings, reviews, KYC, logins",
      "−20 pts for photographer-side cancellations",
      "Real-time leaderboard ranking visibility",
    ],
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    color: "bg-emerald-50 text-emerald-500",
    features: [
      "Real-time push for new bookings & messages",
      "Alerts for review received & payments",
      "Badge level-up & milestone notifications",
      "Daily login streak reminders",
    ],
  },
];

const sharedFeatures = [
  { icon: Lock, label: "OTP-secured registration & login" },
  { icon: Bell, label: "Real-time push notifications" },
  { icon: MapPin, label: "In-app GPS — pin & navigate" },
  { icon: MessageSquare, label: "Encrypted messaging system" },
  { icon: Shield, label: "Report & block safety system" },
  { icon: SmartphoneIcon, label: "Available on Android & iOS" },
];

const FeatureCard = ({
  icon: Icon, title, features, color, delay
}: { icon: LucideIcon; title: string; features: string[]; color: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-[#60a5fa]/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={22} />
    </div>
    <h4 className="font-heading text-lg font-black text-[#064c73] mb-3">{title}</h4>
    <ul className="space-y-2">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground font-medium">
          <CheckCircle2 size={14} className="text-[#60a5fa] mt-0.5 flex-shrink-0" />
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

const FeaturesSection = () => {
  const [tab, setTab] = useState<TabKey>("client");

  const sections = tab === "client" ? clientSections : photographerSections;

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#60a5fa]/4 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">Complete Feature Suite</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 text-[#064c73] tracking-tight">
            Everything You <span className="text-[#60a5fa]">Need</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            A fully-loaded platform built for both sides of the lens — from discovery to delivery.
          </p>
        </motion.div>

        {/* Tab Switch */}
        <div className="flex justify-center mb-14">
          <div className="p-1.5 rounded-2xl bg-white border-2 border-slate-100 flex gap-1 shadow-sm">
            {(["client", "photographer"] as TabKey[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-8 py-3 rounded-xl text-sm font-black transition-all ${
                  tab === t
                    ? "bg-[#064c73] text-white shadow-lg shadow-[#064c73]/25"
                    : "text-slate-500 hover:text-[#064c73]"
                }`}
              >
                {tab === t && (
                  <motion.div layoutId="tab-bg" className="absolute inset-0 rounded-xl bg-[#064c73]" style={{ zIndex: -1 }} />
                )}
                {t === "client" ? "👤 Client Features" : "📷 Photographer Features"}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
          >
            {sections.map((s, i) => (
              <FeatureCard key={s.title} {...s} delay={i * 0.07} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Shared Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-[#064c73] text-white max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#60a5fa]/20 text-[#60a5fa] text-sm font-bold uppercase tracking-widest mb-3">
              <Users size={14} /> Shared Features
            </div>
            <h3 className="font-heading text-2xl font-black">Available to Both Roles</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sharedFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-9 h-9 rounded-lg bg-[#60a5fa]/20 text-[#60a5fa] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-semibold text-blue-100/80">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

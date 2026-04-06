import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FAQ = { q: string; a: string };

const faqCategories: { title: string; emoji: string; faqs: FAQ[] }[] = [
  {
    title: "General Questions",
    emoji: "🌟",
    faqs: [
      {
        q: "What is ClickSeekers?",
        a: "ClickSeekers is Nepal's premier digital marketplace designed specifically for photography. We connect talented professional photographers with clients looking to capture life's most precious moments through a secure, transparent, and feature-rich platform.",
      },
      {
        q: "Is ClickSeekers free to use?",
        a: "For Clients, browsing portfolios and searching is 100% free. Photographers can join and start their journey for free, with a small platform fee deducted only when they complete a successful booking.",
      },
    ],
  },
  {
    title: "For Photographers",
    emoji: "📸",
    faqs: [
      {
        q: "How do I become a Verified Photographer?",
        a: "After registration, you must complete the KYC (Know Your Customer) protocol by uploading a valid government ID. Once our admin team verifies your profile, you'll receive a 'Verified' badge, which builds instant trust with potential clients.",
      },
      {
        q: "What are the Badge Levels (Beginner to Golden Lens)?",
        a: "Our unique gamification system rewards high-quality work. As you complete bookings and receive 5-star reviews, you earn points. Higher points unlock badges like Pro Shooter or Golden Lens, which rank you higher in search results and reduce your platform commission fee from 10% down to 5%.",
      },
      {
        q: "How do I manage my availability?",
        a: "You have total control. You can block specific dates for personal time or select a date range for long-term projects. Additionally, the system automatically blocks your calendar once a client booking is confirmed to prevent any over-booking.",
      },
      {
        q: "How do I find the event location?",
        a: "Clients provide the exact event coordinates on a map during booking. You can view this location and use our in-app navigation feature to get turn-by-turn directions directly to the shoot.",
      },
    ],
  },
  {
    title: "For Clients",
    emoji: "👥",
    faqs: [
      {
        q: "How do I book a photographer?",
        a: "Simply search by location or category (e.g., Wedding, Portrait), browse their categorized portfolio, and check their badge level. Once you find the perfect match, select a package, choose your dates, and send a request!",
      },
      {
        q: "Is my payment secure?",
        a: "Yes! We have integrated Khalti, one of Nepal's most trusted payment gateways. Your payment is processed securely, and you receive an instant digital receipt for every transaction.",
      },
      {
        q: "Can I save photos or photographers for later?",
        a: "Absolutely. You can \"Like\" individual photos to save them to your inspiration board or \"Favorite\" a photographer's profile so you can quickly find them for your next big event.",
      },
      {
        q: "What if a photographer doesn't show up or provides poor service?",
        a: "We prioritize safety and quality. You can Report any user directly through the app. Our admin team investigates all reports, and the rating system ensures that only the best, most reliable photographers reach the top of the leaderboard.",
      },
    ],
  },
  {
    title: "Technical & Safety",
    emoji: "🛠️",
    faqs: [
      {
        q: "How does the location matching work?",
        a: "We use real-time GPS technology to show you the closest and most relevant photographers in your specific district or city, ensuring you find professionals who are ready to work in your area.",
      },
      {
        q: "Is my data private?",
        a: "Yes. ClickSeekers uses industry-standard encryption for all messages and personal data. Your contact details are only shared once a booking is confirmed to ensure a professional and safe environment for everyone.",
      },
    ],
  },
];

const FAQItem = ({ q, a }: FAQ) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${open ? "border-[#60a5fa]/50 bg-[#60a5fa]/5" : "border-slate-100 bg-white hover:border-[#60a5fa]/20"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className={`font-heading font-bold text-lg leading-tight transition-colors ${open ? "text-[#064c73]" : "text-slate-700"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${open ? "bg-[#60a5fa] text-white" : "bg-slate-100 text-slate-500"}`}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-muted-foreground leading-relaxed font-medium text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[#60a5fa]/5 rounded-full blur-[100px] -z-10" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">Help Hub</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 text-[#064c73] tracking-tight">
            Expert <span className="text-[#60a5fa]">FAQ</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Everything you need to know about the ClickSeekers platform — answered comprehensively.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {faqCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{cat.emoji}</span>
                <h3 className="font-heading text-2xl font-black text-[#064c73]">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-10 rounded-3xl bg-[#064c73] text-white max-w-3xl mx-auto"
        >
          <h3 className="font-heading text-3xl font-black mb-4">Still have questions?</h3>
          <p className="text-blue-100/70 mb-8 font-medium text-lg">
            Our support team is available to help you get started. Reach out through the app or contact us directly.
          </p>
          <a
            href="mailto:clickseekersofficial@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#60a5fa] text-[#064c73] font-black text-lg hover:bg-[#6aa6ff] transition-all shadow-xl shadow-[#60a5fa]/25"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

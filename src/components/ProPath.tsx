import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, TrendingUp, Star, Zap, Crown, Gem } from "lucide-react";
import RookiePng from "@/assets/Rookie.png";
import RisingStarPng from "@/assets/RisingStar.png";
import ProShooterPng from "@/assets/ProShooter.png";
import EliteLensPng from "@/assets/EliteLens.png";
import GoldenLensPng from "@/assets/GoldenLens.png";

const tiers = [
  { level: 1, name: "Beginner", points: 0, fee: 10, tagline: "Your journey begins here.", icon: Star, color: "text-slate-400", glow: "shadow-slate-200/20" },
  { level: 2, name: "Rookie", points: 300, fee: 9, tagline: "Building your reputation.", image: RookiePng, color: "text-primary", glow: "shadow-slate-400/30" },
  { level: 3, name: "Rising Star", points: 800, fee: 8, tagline: "A local favorite.", image: RisingStarPng, color: "text-blue-500", glow: "shadow-blue-400/40" },
  { level: 4, name: "Pro Shooter", points: 1500, fee: 7, tagline: "Master of the craft.", image: ProShooterPng, color: "text-secondary", glow: "shadow-indigo-400/50" },
  { level: 5, name: "Elite Lens", points: 3000, fee: 6, tagline: "Top-tier reliability.", image: EliteLensPng, color: "text-yellow-500", glow: "shadow-[#60a5fa]/60" },
  { level: 6, name: "Golden Lens", points: 6000, fee: 5, tagline: "The industry standard.", image: GoldenLensPng, color: "text-yellow-500", glow: "shadow-amber-400/80" },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

const ProPath = () => {
  return (
    <section id="pro-path" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#60a5fa]/5 rounded-full blur-[180px] -z-10" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">Prestige Roadmap</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 text-[#064c73] tracking-tight">
            The Pro <span className="text-[#60a5fa]">Path</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium px-4">
            Ascend through our elite photographic echelons. 
            Earn points, unlock prestigious badges, and reduce your platform commission.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] border-2 transition-all relative group h-full flex flex-col ${
                tier.level === 6 
                  ? "border-[#6aa6ff] bg-[#064c73] text-white shadow-2xl shadow-[#60a5fa]/30 scale-105 z-20" 
                  : "border-slate-100 bg-white hover:border-[#60a5fa]/50 hover:shadow-xl hover:shadow-blue-900/5 shadow-sm"
              }`}
            >
              {tier.level === 6 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#6aa6ff] text-[#064c73] text-sm font-black rounded-full shadow-lg">
                  LEGENDARY TIER
                </div>
              )}
              
              <div className="flex items-center justify-between mb-8">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 relative ${
                  tier.level === 6 ? "bg-[#60a5fa]/10" : "bg-slate-50"
                }`}>
                  {/* Glowing background */}
                  <div className={`absolute inset-0 blur-2xl opacity-40 rounded-full transition-opacity group-hover:opacity-70 ${tier.glow}`} />
                  
                  {tier.image ? (
                    <img 
                      src={tier.image} 
                      alt={`${tier.name} Badge`} 
                      className="w-16 h-16 object-contain relative z-10 drop-shadow-xl"
                    />
                  ) : (
                    <tier.icon size={32} strokeWidth={2.5} className={`relative z-10 ${tier.color}`} />
                  )}
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-heading font-black ${tier.level === 6 ? "text-[#60a5fa]" : "text-[#064c73]"}`}>
                    <CountUp target={100 - tier.fee} suffix="%" />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${tier.level === 6 ? "text-blue-200/60" : "text-slate-400"}`}>
                    Net Payout
                  </div>
                </div>
              </div>

              <div className="mb-6 flex-grow">
                <div className={`text-xs font-black uppercase tracking-widest mb-1 ${tier.level === 6 ? "text-blue-300" : "text-[#60a5fa]"}`}>
                  Level {tier.level}
                </div>
                <h3 className={`font-heading text-3xl font-black mb-3 ${tier.level === 6 ? "text-white" : "text-[#064c73]"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm font-medium italic ${tier.level === 6 ? "text-blue-100/70" : "text-muted-foreground"}`}>
                  "{tier.tagline}"
                </p>
              </div>

              <div className="space-y-4 pt-6 mt-auto border-t border-current opacity-20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest">Growth Threshold</span>
                  <span className="font-heading font-black text-xl">
                    <CountUp target={tier.points} suffix={tier.level === 6 ? "+" : " pts"} />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest">Platform Fee</span>
                  <span className={`font-heading font-black text-xl ${tier.level === 6 ? "text-[#6aa6ff]" : "text-[#60a5fa]"}`}>
                    {tier.fee}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProPath;

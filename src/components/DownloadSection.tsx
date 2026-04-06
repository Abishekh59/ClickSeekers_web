import { motion } from "framer-motion";
import { Download, Smartphone, Trophy, Crown, Medal } from "lucide-react";
import RookiePng from "@/assets/Rookie.png";
import RisingStarPng from "@/assets/RisingStar.png";
import ProShooterPng from "@/assets/ProShooter.png";
import EliteLensPng from "@/assets/EliteLens.png";
import GoldenLensPng from "@/assets/GoldenLens.png";

// Photographer Portraits
import AbishekhPortrait from "@/assets/Abishekh joshi.jpg";
import SisanPortrait from "@/assets/Sisan Baniya.jpeg";
import AjayPortrait from "@/assets/Ajay maharjan.jpg";
import PhotokichwaPortrait from "@/assets/photokichwa.jpg";
import NishaPortrait from "@/assets/Nisha gurung.jpg";

const leaderboard = [
  { rank: 1, name: "Abishekh Joshi", badge: "Golden Lens", badgeIcon: GoldenLensPng, score: 7240, avatar: AbishekhPortrait, medalColor: "text-[#6aa6ff] bg-[#6aa6ff]/10" },
  { rank: 2, name: "Sisan Baniya", badge: "Elite Lens", badgeIcon: EliteLensPng, score: 5680, avatar: SisanPortrait, medalColor: "text-slate-400 bg-slate-100" },
  { rank: 3, name: "Ajay Maharjan", badge: "Elite Lens", badgeIcon: EliteLensPng, score: 4920, avatar: AjayPortrait, medalColor: "text-orange-400 bg-orange-50" },
  { rank: 4, name: "Photokichwa", badge: "Pro Shooter", badgeIcon: ProShooterPng, score: 3150, avatar: PhotokichwaPortrait, medalColor: "text-[#60a5fa] bg-[#60a5fa]/10" },
  { rank: 5, name: "Nisha Gurung", badge: "Pro Shooter", badgeIcon: ProShooterPng, score: 2810, avatar: NishaPortrait, medalColor: "text-[#60a5fa] bg-[#60a5fa]/10" },
];

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative bg-[#064c73] overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#60a5fa]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#6aa6ff]/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">Get Started Today</span>
            <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 mb-6 text-white tracking-tight">
              Download<br /><span className="text-[#60a5fa]">ClickSeekers</span>
            </h2>
            <p className="text-blue-100/70 mb-10 max-w-md text-lg leading-relaxed font-medium">
              Join Nepal's fastest-growing photography marketplace. Available on Android now — iOS coming soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#"
                className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#60a5fa] text-[#064c73] font-bold text-lg hover:bg-[#6aa6ff] transition-all shadow-xl shadow-[#60a5fa]/25"
              >
                <Download size={22} />
                Download APK
                <span className="text-xs font-bold opacity-70">(Android)</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <Smartphone size={22} />
                Join Beta
                <span className="text-xs font-bold opacity-60">(iOS)</span>
              </a>
            </div>

            {/* QR Code decorative */}
            <div className="inline-flex flex-col items-start gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-blue-200/60 font-bold uppercase tracking-widest">Scan to Download</p>
              <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center">
                <div className="grid grid-cols-5 gap-1 p-2">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3.5 h-3.5 rounded-sm ${
                        [0, 1, 2, 4, 5, 6, 7, 10, 12, 14, 15, 17, 18, 19, 20, 22, 23, 24].includes(i)
                          ? "bg-[#064c73]"
                          : "bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#60a5fa]/20 flex items-center justify-center">
                  <Trophy size={20} className="text-[#60a5fa]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black text-white">Photographer Leaderboard</h3>
                  <p className="text-xs text-blue-200/50 font-bold uppercase tracking-widest">Top 100 Photographers</p>
                </div>
                <span className="ml-auto text-xs font-black text-[#60a5fa] bg-[#60a5fa]/10 px-3 py-1 rounded-full">LIVE</span>
              </div>

              <div className="space-y-3">
                {leaderboard.map((entry, i) => (
                  <motion.div
                    key={entry.rank}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-4 p-3 rounded-2xl transition-all ${
                      entry.rank === 1
                        ? "bg-white/10 border border-[#6aa6ff]/30 shadow-lg shadow-[#6aa6ff]/10"
                        : "bg-white/5 hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shrink-0 shadow-lg ${entry.medalColor}`}>
                      #{entry.rank}
                    </div>
                    
                    <div className="relative shrink-0">
                      <img 
                        src={entry.avatar} 
                        alt={entry.name} 
                        className="w-11 h-11 rounded-full object-cover border-2 border-white/10"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white p-0.5 shadow-md">
                        <img src={entry.badgeIcon} alt="" className="w-full h-full object-contain" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-white truncate">{entry.name}</div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-blue-200/50 font-bold uppercase tracking-wider">{entry.badge}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-heading font-black text-[#60a5fa] text-sm">
                        {entry.score.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-blue-200/30 font-bold uppercase">pts</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-blue-200/40 text-center mt-6 font-bold">
                Rankings refresh weekly — top performers earn bonus points
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

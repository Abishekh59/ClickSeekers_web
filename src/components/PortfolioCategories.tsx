import { motion } from "framer-motion";
import { 
  Camera, Users, Landmark, Trees, Footprints, Trophy, Utensils, Plane, 
  Wind, Clapperboard, Home, Building2, Store, Newspaper, Heart, 
  Smartphone, Monitor, Sparkles, Zap, Ghost, Eye, Microscope, 
  Sunrise, Moon, Clock, Search, Layers, Box, Layout, 
  Focus, Image as ImageIcon
} from "lucide-react";

const allCategories = [
  { name: "Wedding", icon: Heart, color: "text-rose-500 bg-rose-50" },
  { name: "Portrait", icon: Users, color: "text-blue-500 bg-blue-50" },
  { name: "Event", icon: Zap, color: "text-amber-500 bg-amber-50" },
  { name: "Wildlife", icon: Trees, color: "text-emerald-500 bg-emerald-50" },
  { name: "Fashion", icon: Sparkles, color: "text-purple-500 bg-purple-50" },
  { name: "Sports", icon: Trophy, color: "text-orange-500 bg-orange-50" },
  { name: "Food", icon: Utensils, color: "text-yellow-600 bg-yellow-50" },
  { name: "Travel", icon: Plane, color: "text-sky-500 bg-sky-50" },
  { name: "Aerial/Drone", icon: Wind, color: "text-cyan-500 bg-cyan-50" },
  { name: "Cinematic", icon: Clapperboard, color: "text-slate-700 bg-slate-100" },
  { name: "Landscape", icon: Landmark, color: "text-green-600 bg-green-50" },
  { name: "Street", icon: Footprints, color: "text-slate-600 bg-slate-50" },
  { name: "Product", icon: Box, color: "text-indigo-500 bg-indigo-50" },
  { name: "Fine Art", icon: Microscope, color: "text-violet-600 bg-violet-50" },
  { name: "Conceptual", icon: Layers, color: "text-pink-500 bg-pink-50" },
  { name: "Abstract", icon: Layout, color: "text-fuchsia-500 bg-fuchsia-50" },
  { name: "Black & White", icon: ImageIcon, color: "text-slate-900 bg-slate-100" },
  { name: "Silhouette", icon: Ghost, color: "text-black bg-slate-200" },
  { name: "Macro", icon: Focus, color: "text-lime-600 bg-lime-50" },
  { name: "Astrophotography", icon: Moon, color: "text-blue-900 bg-blue-50" },
  { name: "Long Exposure", icon: Clock, color: "text-red-500 bg-red-50" },
  { name: "Architectural", icon: Home, color: "text-stone-600 bg-stone-50" },
  { name: "Real Estate", icon: Building2, color: "text-blue-700 bg-blue-50" },
  { name: "Commercial", icon: Store, color: "text-teal-600 bg-teal-50" },
  { name: "Editorial", icon: Newspaper, color: "text-gray-700 bg-gray-50" },
  { name: "Photojournalism", icon: Newspaper, color: "text-emerald-700 bg-emerald-50" },
  { name: "Documentary", icon: Search, color: "text-blue-800 bg-blue-50" },
  { name: "Lifestyle", icon: Heart, color: "text-rose-400 bg-rose-50" },
  { name: "Influencer/Instagram", icon: Smartphone, color: "text-pink-600 bg-pink-50" },
  { name: "Minimalist", icon: Monitor, color: "text-slate-400 bg-slate-50" },
  { name: "Other", icon: Camera, color: "text-blue-600 bg-blue-50" },
];

const PortfolioCategories = () => {
  return (
    <section id="categories" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#60a5fa]/4 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#60a5fa] uppercase tracking-[0.2em]">Visual Specialization</span>
          <h2 className="font-heading text-5xl md:text-6xl font-black mt-4 text-[#064c73] tracking-tight">
            30+ Photography <span className="text-[#60a5fa]">Categories</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            From the intimate moments of a wedding to the cinematic scale of aerial drone photography, 
            SeekLens photographers cover every angle.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {allCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-[#60a5fa]/30 hover:shadow-lg hover:shadow-[#064c73]/5 transition-all cursor-default"
            >
              <div className={`w-10 h-10 rounded-lg ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <cat.icon size={18} />
              </div>
              <span className="font-bold text-[#064c73] text-sm group-hover:text-[#60a5fa] transition-colors">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCategories;

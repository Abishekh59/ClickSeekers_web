import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import PortfolioCategories from "@/components/PortfolioCategories";
import ProPath from "@/components/ProPath";
import PointMatrix from "@/components/PointMatrix";
import DownloadSection from "@/components/DownloadSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Nav — transparent over hero, dark when scrolled */}
      <Navbar />

      {/* 1. HERO — Dark Blue (#064c73) */}
      <HeroSection />

      {/* 2. HOW IT WORKS — Light (slate-50) */}
      <HowItWorks />

      {/* 3. FULL FEATURE SUITE — Light (slate-50) tabbed */}
      <FeaturesSection />

      {/* 4. SPECIALIZED CATEGORIES — Light (slate-50) */}
      <PortfolioCategories />

      {/* 5. PRO PATH BADGE ROADMAP — White */}
      <ProPath />

      {/* 6. POINT MATRIX — Dark Blue (#064c73) */}
      <PointMatrix />

      {/* 6. DOWNLOAD + LEADERBOARD — Dark Blue (#064c73) */}
      <DownloadSection />

      {/* 7. FAQ — Light (slate-50) */}
      <FAQSection />

      {/* 8. FOOTER — Dark Blue (#064c73) */}
      <Footer />
    </div>
  );
};

export default Index;

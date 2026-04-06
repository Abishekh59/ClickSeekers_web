import logo from "@/assets/clickseekers-logo.png";
import { Camera, MapPin, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pro Path", href: "#pro-path" },
    { label: "Features", href: "#features" },
    { label: "Leaderboard", href: "#download" },
  ],
  Services: [
    { label: "For Clients", href: "#business-tools" },
    { label: "For Photographers", href: "#business-tools" },
    { label: "Business Tools", href: "#business-tools" },
    { label: "Download App", href: "#download" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#064c73] text-white">
      <div className="container mx-auto px-6 pt-20 pb-10">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="ClickSeekers" className="h-11 w-11 rounded-xl" />
              <span className="font-heading text-2xl font-black">
                Click<span className="text-[#60a5fa]">Seekers</span>
              </span>
            </a>
            <p className="text-blue-100/60 leading-relaxed font-medium max-w-xs mb-8">
              Nepal's premier photography marketplace. Connecting visionaries with masters of the lens.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-2xl font-black text-[#60a5fa]">500+</div>
                <div className="text-xs text-blue-200/40 font-bold uppercase tracking-widest">Photographers</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#60a5fa]">10K+</div>
                <div className="text-xs text-blue-200/40 font-bold uppercase tracking-widest">Bookings</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#60a5fa]">4.9★</div>
                <div className="text-xs text-blue-200/40 font-bold uppercase tracking-widest">Avg Rating</div>
              </div>
            </div>

          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-black text-sm uppercase tracking-widest text-blue-200/50 mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-blue-100/70 hover:text-white transition-colors font-medium text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200/40 font-medium">
            © {new Date().getFullYear()} ClickSeekers. All rights reserved Nepal.
          </p>
          <div className="flex items-center gap-6 text-sm text-blue-200/40 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:clickseekersofficial@gmail.com" className="hover:text-[#60a5fa] transition-colors flex items-center gap-1">
              <Mail size={14} />
              clickseekersofficial@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

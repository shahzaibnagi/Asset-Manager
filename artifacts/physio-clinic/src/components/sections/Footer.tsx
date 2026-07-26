import { Activity, Instagram, Facebook, Youtube, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <Activity className="w-6 h-6" />
              </div>
              <span className="font-sans font-bold text-xl text-white tracking-tight">
                Dr. Ayesha Jamshed Physio
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Premium physiotherapy and rehabilitation clinic dedicated to restoring your movement and reclaiming your life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => document.getElementById("about")?.scrollIntoView({behavior:"smooth"})} className="hover:text-emerald-400 transition-colors">About Dr. Ayesha Jamshed</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({behavior:"smooth"})} className="hover:text-emerald-400 transition-colors">Services</button></li>
              <li><button onClick={() => document.getElementById("conditions")?.scrollIntoView({behavior:"smooth"})} className="hover:text-emerald-400 transition-colors">Conditions We Treat</button></li>
              <li><button onClick={() => document.getElementById("faq")?.scrollIntoView({behavior:"smooth"})} className="hover:text-emerald-400 transition-colors">FAQs</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><span className="text-slate-400">Manual Therapy</span></li>
              <li><span className="text-slate-400">Sports Rehabilitation</span></li>
              <li><span className="text-slate-400">Neurological Physio</span></li>
              <li><span className="text-slate-400">Dry Needling</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Health Tips Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to receive monthly tips on injury prevention and healthy living.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Email address" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-emerald-500" 
              />
              <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Ayesha Jamshed Physiotherapy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

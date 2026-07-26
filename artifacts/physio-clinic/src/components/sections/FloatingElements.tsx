import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, MapPin, Calendar, ArrowUp } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function FloatingElements() {
  const { t } = useLanguage();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>

      {/* Back to top button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-24 right-4 md:right-8 z-40 flex items-center justify-center w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-foreground border border-border rounded-full shadow-lg hover:bg-muted transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-safe px-2">
        <div className="flex justify-between items-center py-3">
          <a href="tel:+1234567890" className="flex flex-col items-center gap-1 w-1/4 text-muted-foreground hover:text-primary">
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-medium">Call</span>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 w-1/4 text-emerald-600 dark:text-emerald-400">
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-medium">WhatsApp</span>
          </a>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})} className="flex flex-col items-center gap-1 w-1/4 text-muted-foreground hover:text-primary">
            <MapPin className="w-5 h-5" />
            <span className="text-[10px] font-medium">Directions</span>
          </button>
          <button onClick={scrollToBooking} className="flex flex-col items-center gap-1 w-1/4 text-primary">
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-tight">Book Now</span>
          </button>
        </div>
      </div>
    </>
  );
}

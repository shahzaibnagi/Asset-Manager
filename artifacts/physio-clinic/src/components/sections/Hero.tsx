import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import portrait from "@assets/generated_images/doctor-portrait.jpg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Hero() {
  const { t } = useLanguage();

  const titleWords = t("hero.title").split(" ");

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const patientInitials = ["JD", "AK", "SM", "MR"];

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-background overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-multiply" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-sky-300/10 dark:bg-sky-900/20 blur-[120px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1 pt-10 lg:pt-0 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("hero.subtitle")}
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="inline-block mr-3 mb-2"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-10 max-w-lg"
            >
              Experience a higher standard of care. We combine advanced clinical techniques with compassionate support to help you live pain-free.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="rounded-full text-base px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all" onClick={scrollToBooking} data-testid="button-book-hero">
                {t("hero.cta_primary")}
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:-translate-y-1 transition-all group" onClick={() => window.open("https://wa.me/1234567890", "_blank")} data-testid="button-whatsapp-hero">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t("hero.cta_whatsapp")}
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {patientInitials.map((initials, i) => (
                  <Avatar key={i} className={`w-10 h-10 border-2 border-background z-[${4-i}]`}>
                     <AvatarFallback className="bg-muted text-xs font-semibold text-muted-foreground">{initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-foreground">500+</div>
                <div className="text-muted-foreground">Happy Patients</div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10" />
              <img
                src={portrait}
                alt="Dr. Ayesha Jamshed"
                className="w-full h-full object-cover object-top"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-8 -left-6 sm:left-8 glass rounded-2xl p-4 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                    <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">98%</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Success Rate</p>
                    <p className="text-xs text-muted-foreground">in pain reduction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

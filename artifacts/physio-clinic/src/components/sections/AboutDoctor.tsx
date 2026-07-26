import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import portrait from "@assets/generated_images/doctor-portrait.jpg";

export function AboutDoctor() {
  const { t } = useLanguage();

  const features = [
    "Evidence-based treatments",
    "Personalized care plans",
    "Advanced rehabilitation techniques",
    "Holistic recovery approach"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            {t("about.title")}
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] transform -rotate-3 scale-105 -z-10" />
            <div className="absolute inset-0 bg-emerald-500/5 rounded-[3rem] transform rotate-3 scale-105 -z-10" />
            <img 
              src={portrait} 
              alt={t("about.name")} 
              className="rounded-[3rem] shadow-xl w-full object-cover aspect-[4/5] object-top"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">{t("about.creds")}</p>
                  <p className="text-sm text-muted-foreground">Certified Specialist</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-foreground mb-2">{t("about.name")}</h3>
            <p className="text-xl text-primary font-medium mb-6">{t("about.creds")}</p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of clinical experience, Dr. Ayesha Jamshed specializes in restoring movement and relieving pain for patients suffering from orthopedic, neurological, and sports-related injuries.
            </p>

            <blockquote className="border-l-4 border-emerald-500 pl-6 mb-8 italic text-lg text-foreground font-serif">
              "My philosophy is simple: treat the cause, not just the symptoms. Real recovery begins when we understand how the body works as a whole."
            </blockquote>

            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-muted-foreground bg-muted/50 p-4 rounded-xl">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <p>Premium Medical Center, 123 Healthcare Ave, Block 4</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

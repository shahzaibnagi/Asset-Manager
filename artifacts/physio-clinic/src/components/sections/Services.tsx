import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  BicepsFlexed, 
  Brain, 
  Baby, 
  Bone, 
  Stethoscope, 
  Syringe, 
  Waves,
  X,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const servicesList = [
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    icon: Activity,
    short: "Hands-on techniques to mobilize joints and soft tissues.",
    full: "A clinical approach utilizing skilled, specific hands-on techniques, including manipulation/mobilization, used by the physical therapist to diagnose and treat soft tissues and joint structures for the purpose of modulating pain.",
    symptoms: ["Joint stiffness", "Muscle tension", "Restricted range of motion", "Acute back pain"],
  },
  {
    id: "sports-rehab",
    title: "Sports Rehabilitation",
    icon: BicepsFlexed,
    short: "Specialized care for athletes to recover from injuries.",
    full: "Targeted rehabilitation programs designed for athletes of all levels. Focuses on returning the patient to their sport safely while preventing future injuries through biomechanical analysis and strength conditioning.",
    symptoms: ["Sprains & strains", "Ligament tears", "Tendonitis", "Performance plateaus"],
  },
  {
    id: "neuro-physio",
    title: "Neurological Physiotherapy",
    icon: Brain,
    short: "Rehab for conditions affecting the nervous system.",
    full: "Treatment for individuals who have neurological conditions affecting the brain, spinal cord, and nerves. We focus on restoring mobility, balance, and independence in daily activities.",
    symptoms: ["Stroke recovery", "Parkinson's disease", "Multiple Sclerosis", "Spinal cord injury"],
  },
  {
    id: "pediatric",
    title: "Pediatric Physiotherapy",
    icon: Baby,
    short: "Gentle, effective care for infants and children.",
    full: "Specialized physiotherapy for children addressing developmental delays, congenital conditions, and pediatric injuries. We use play-based therapy to make sessions engaging and effective.",
    symptoms: ["Developmental delays", "Cerebral Palsy", "Torticollis", "Gait abnormalities"],
  },
  {
    id: "orthopedic",
    title: "Orthopedic Rehab",
    icon: Bone,
    short: "Treatment for musculoskeletal system injuries.",
    full: "Comprehensive care for injuries and disorders of the skeletal system and associated muscles, joints, and ligaments. We employ advanced modalities to speed up tissue healing.",
    symptoms: ["Arthritis", "Fractures", "Sciatica", "Neck pain"],
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Recovery",
    icon: Stethoscope,
    short: "Guided rehabilitation following surgical procedures.",
    full: "Essential physical therapy following orthopedic and general surgeries. We ensure proper tissue healing, restore range of motion, and rebuild strength safely to optimize surgical outcomes.",
    symptoms: ["Joint replacements", "ACL reconstruction", "Spinal fusion", "Rotator cuff repair"],
  },
  {
    id: "dry-needling",
    title: "Dry Needling",
    icon: Syringe,
    short: "Targeted treatment for muscular trigger points.",
    full: "A technique using fine needles to deactivate myofascial trigger points. It effectively reduces muscle tension, improves pain control, and normalizes biochemical dysfunction of motor endplates.",
    symptoms: ["Chronic muscle tension", "Myofascial pain syndrome", "Tension headaches", "TMJ dysfunction"],
  },
  {
    id: "hydrotherapy",
    title: "Hydrotherapy",
    icon: Waves,
    short: "Water-based therapy for low-impact rehabilitation.",
    full: "Exercises performed in a warm water pool. The buoyancy supports body weight, reducing stress on joints, while the warmth relaxes muscles and the water resistance builds strength.",
    symptoms: ["Severe arthritis", "Post-operative weight bearing restrictions", "Chronic pain", "Fibromyalgia"],
  }
];

export function Services() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<typeof servicesList[0] | null>(null);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            {t("services.title")}
          </motion.h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelected(service)}
              className="glass-card rounded-2xl p-6 cursor-pointer group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm flex-grow">
                {service.short}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-20 pb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-card text-card-foreground shadow-2xl rounded-3xl p-8 border border-border z-10 overflow-hidden"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <selected.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selected.full}
              </p>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Commonly Treats:</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.symptoms.map(sym => (
                    <span key={sym} className="px-3 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm rounded-full font-medium">
                      {sym}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

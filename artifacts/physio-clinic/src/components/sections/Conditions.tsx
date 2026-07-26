import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Info } from "lucide-react";

type Condition = {
  id: string;
  name: string;
  desc: string;
  treatment: string;
  x: number;
  y: number;
};

const conditions: Condition[] = [
  { id: "head", name: "Headaches & Migraines", desc: "Tension headaches often originate from neck stiffness and poor posture.", treatment: "Manual therapy, posture correction, and dry needling.", x: 50, y: 10 },
  { id: "neck", name: "Cervical Pain", desc: "Neck pain caused by tech-neck, whiplash, or cervical spondylosis.", treatment: "Joint mobilization, ergonomic advice, and strengthening exercises.", x: 50, y: 20 },
  { id: "shoulder", name: "Frozen Shoulder", desc: "Adhesive capsulitis or rotator cuff tears causing restricted movement.", treatment: "Progressive stretching, ultrasound, and manual therapy.", x: 30, y: 25 },
  { id: "back", name: "Lower Back Pain", desc: "Sciatica, herniated discs, or muscular strains in the lumbar region.", treatment: "Core stabilization, spinal manipulation, and McKenzie method.", x: 50, y: 45 },
  { id: "elbow", name: "Tennis Elbow", desc: "Lateral epicondylitis caused by repetitive strain.", treatment: "Shockwave therapy, bracing, and eccentric exercises.", x: 20, y: 40 },
  { id: "hip", name: "Hip Bursitis", desc: "Inflammation of the hip joint causing pain during walking or resting.", treatment: "Gait analysis, stretching, and hydrotherapy.", x: 40, y: 55 },
  { id: "knee", name: "Knee Arthritis", desc: "Osteoarthritis, ACL/Meniscus injuries, or patellofemoral pain.", treatment: "Quadriceps strengthening, taping, and joint mobility work.", x: 35, y: 75 },
  { id: "ankle", name: "Ankle Sprains", desc: "Ligament damage from rolling or twisting the ankle.", treatment: "Proprioception training, ice therapy, and strengthening.", x: 38, y: 92 },
];

export function Conditions() {
  const { t } = useLanguage();
  const [activeCondition, setActiveCondition] = useState<Condition | null>(null);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            {t("conditions.title")}
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on the highlighted areas to learn about common conditions we treat and our approach to recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Interactive Body SVG */}
          <div className="relative w-full max-w-sm mx-auto aspect-[1/2] bg-muted/20 rounded-[3rem] p-8 border border-border">
            <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-xl text-slate-300 dark:text-slate-700">
              {/* Simplified Human Silhouette */}
              <path 
                d="M100 20 C110 20 115 30 115 40 C115 50 108 55 100 55 C92 55 85 50 85 40 C85 30 90 20 100 20 Z
                   M85 60 L115 60 L140 80 L140 160 L120 160 L120 110 L115 110 L115 220 L130 380 L105 380 L100 240 L95 380 L70 380 L85 220 L85 110 L80 110 L80 160 L60 160 L60 80 Z" 
                fill="currentColor"
              />
            </svg>

            {conditions.map((cond) => (
              <button
                key={cond.id}
                onClick={() => setActiveCondition(cond)}
                className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full flex items-center justify-center transform transition-all duration-300 ${
                  activeCondition?.id === cond.id ? "scale-125 z-20" : "hover:scale-110 z-10"
                }`}
                style={{ left: `${cond.x}%`, top: `${cond.y}%` }}
              >
                <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                  activeCondition?.id === cond.id ? "bg-primary" : "bg-emerald-500"
                }`} />
                <div className={`relative w-4 h-4 rounded-full border-2 border-white ${
                  activeCondition?.id === cond.id ? "bg-primary" : "bg-emerald-500"
                }`} />
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {activeCondition ? (
                <motion.div
                  key={activeCondition.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-3xl p-8 border-l-4 border-l-primary"
                >
                  <h3 className="text-3xl font-bold text-foreground mb-4">{activeCondition.name}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {activeCondition.desc}
                  </p>
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <div className="flex items-center gap-3 mb-3 text-primary font-bold">
                      <Info className="w-5 h-5" />
                      <h4>Our Treatment Approach</h4>
                    </div>
                    <p className="text-foreground font-medium">
                      {activeCondition.treatment}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 rounded-3xl border-2 border-dashed border-border"
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Info className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-lg font-medium">
                    Select a highlighted area on the diagram to see details about the condition and our treatments.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
